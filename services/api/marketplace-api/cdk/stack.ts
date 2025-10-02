import { Stack, StackProps, Duration, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigwv2 from "aws-cdk-lib/aws-apigatewayv2";
import * as integrations from "aws-cdk-lib/aws-apigatewayv2-integrations";
import * as lambda from "aws-cdk-lib/aws-lambda";

export class MarketplaceApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const items = new lambda.Function(this, "ItemsGet", {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: "items_get.handler",
      code: lambda.Code.fromAsset("../src"),
      memorySize: 256,
      timeout: Duration.seconds(5)
    });

    const offers = new lambda.Function(this, "OffersPost", {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: "offers_post.handler",
      code: lambda.Code.fromAsset("../src"),
      memorySize: 256,
      timeout: Duration.seconds(5)
    });

    const http = new apigwv2.HttpApi(this, "HttpApi");

    http.addRoutes({
      path: "/v1/items",
      methods: [ apigwv2.HttpMethod.GET ],
      integration: new integrations.HttpLambdaIntegration("ItemsGetInt", items),
    });
    http.addRoutes({
      path: "/v1/offers",
      methods: [ apigwv2.HttpMethod.POST ],
      integration: new integrations.HttpLambdaIntegration("OffersPostInt", offers),
    });

    new CfnOutput(this, "ApiUrl", { value: http.apiEndpoint });
  }
}
