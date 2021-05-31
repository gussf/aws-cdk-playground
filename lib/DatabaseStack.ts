import * as cdk from '@aws-cdk/core';
import * as dynamoBuilder from './DynamoBuilder';

export class DatabaseStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new dynamoBuilder.DynamoBuilder(this, 'dynamodb');
    
  }
}
