import * as cdk from '@aws-cdk/core';
import * as ec2builder from './Ec2Builder';

export class InstanceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new ec2builder.Ec2Builder(this, 'ec2');
    
  }
}
