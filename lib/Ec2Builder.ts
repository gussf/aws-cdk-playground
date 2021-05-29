import * as core from "@aws-cdk/core";
import * as ec2 from '@aws-cdk/aws-ec2';
import { Subnet, SubnetType } from "@aws-cdk/aws-ec2";

export class Ec2Builder extends core.Construct {
    constructor(scope: core.Construct, id: string) {
        super(scope, id);

        const vpc = new ec2.Vpc(this, 'VPC');

        const mySecurityGroup = new ec2.SecurityGroup(this, 'SecurityGroup', {
            vpc,
            securityGroupName: "gsf-stack-sg",
            description: 'Allow ssh access to ec2 instances from anywhere',
            allowAllOutbound: true
        });
        mySecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'allow public ssh access')


        const awsAMI = new ec2.AmazonLinuxImage({ generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2 });

        const subnetSelection: ec2.SubnetSelection = {
            subnetType: SubnetType.PUBLIC
        };

        // Instance details
        const ec2Instance = new ec2.Instance(this, 'GSF Instance', {
            vpc,
            instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
            machineImage: awsAMI,
            securityGroup: mySecurityGroup,
            vpcSubnets: subnetSelection
        });
    }
}
