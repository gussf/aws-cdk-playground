import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as instanceStack from '../lib/InstanceStack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new instanceStack.InstanceStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
