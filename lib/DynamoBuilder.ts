import * as core from "@aws-cdk/core";
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import { RemovalPolicy } from "@aws-cdk/core";

export class DynamoBuilder extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        const table = new dynamodb.Table(this, 'Transaction', {
            tableName: 'Transaction',
            partitionKey: { name: 'id', type: dynamodb.AttributeType.NUMBER },
            removalPolicy: RemovalPolicy.DESTROY
        }
        );
    }
}
