#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { InstanceStack } from '../lib/InstanceStack';
import { DatabaseStack } from '../lib/DatabaseStack';
import { LambdaStack } from '../lib/LambdaStack';

const app = new cdk.App();
new InstanceStack(app, 'instance-stack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

new DatabaseStack(app, 'database-stack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});

new LambdaStack(app, 'lambda-stack', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
