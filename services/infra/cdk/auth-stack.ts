import { Stack, StackProps, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as cognito from "aws-cdk-lib/aws-cognito";

export class AuthStack extends Stack {
  public readonly userPool: cognito.UserPool;
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    this.userPool = new cognito.UserPool(this, "UserPool", {
      selfSignUpEnabled: false,
      signInAliases: { email: true },
    });
    const client = this.userPool.addClient("WebClient", { generateSecret: false, authFlows: { userSrp: true } });
    new CfnOutput(this, "UserPoolId", { value: this.userPool.userPoolId });
    new CfnOutput(this, "UserPoolClientId", { value: client.userPoolClientId });
  }
}
