import { Stack, StackProps, Duration, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class AuthenticatorApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const registry = new lambda.Function(this, "RegistryGet", {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: "registry_get.handler",
      code: lambda.Code.fromAsset("../src"),
      memorySize: 256,
      timeout: Duration.seconds(5)
    });

    const scans = new lambda.Function(this, "ScansPost", {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: "scans_post.handler",
      code: lambda.Code.fromAsset("../src"),
      memorySize: 256,
      timeout: Duration.seconds(5)
    });

    const http = new apigwv2.HttpApi(this, "HttpApi");

    http.addRoutes({
      path: "/v1/registry",
      methods: [ apigwv2.HttpMethod.GET ],
      integration: new integrations.HttpLambdaIntegration("RegGetInt", registry),
    });
    http.addRoutes({
      path: "/v1/scans",
      methods: [ apigwv2.HttpMethod.POST ],
      integration: new integrations.HttpLambdaIntegration("ScanPostInt", scans),
    });

    new CfnOutput(this, "ApiUrl", { value: http.apiEndpoint });
  }
}
