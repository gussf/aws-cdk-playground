import * as core from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam";

export class LambdaBuilder extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        const policy = new iam.PolicyStatement({
            effect: iam.Effect.ALLOW,
            actions: ['dynamodb:*'],
            resources: ['*']
        })

        const list_function = new lambda.Function(this, "ListTransactions", {
            functionName: "ListTransactions",
            runtime: lambda.Runtime.PYTHON_3_8,
            code: lambda.Code.fromAsset("resources"),
            handler: "ListTransactions.handler",
        });
        list_function.addToRolePolicy(policy);

        const add_function = new lambda.Function(this, "AddTransactions", {
            functionName: "AddTransactions",
            runtime: lambda.Runtime.PYTHON_3_8,
            code: lambda.Code.fromAsset("resources"),
            handler: "AddTransactions.handler",
        });
        add_function.addToRolePolicy(policy);

    }
}