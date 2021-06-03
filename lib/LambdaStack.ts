import * as cdk from '@aws-cdk/core';
import * as lambdaBuilder from './LamdaBuilder';

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new lambdaBuilder.LambdaBuilder(this, 'python');
  }
}
