import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as logs from "aws-cdk-lib/aws-logs";
import * as cloudwatch from "aws-cdk-lib/aws-cloudwatch";

export class ObservabilityStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    new logs.LogGroup(this, "AppLogGroup", { retention: logs.RetentionDays.ONE_WEEK });
    new cloudwatch.Dashboard(this, "OpsDashboard");
  }
}
