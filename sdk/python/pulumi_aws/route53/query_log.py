# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class QueryLog(pulumi.CustomResource):
    """
    Provides a Route53 query logging configuration resource.
    
    ~> **NOTE:** There are restrictions on the configuration of query logging. Notably,
    the CloudWatch log group must be in the `us-east-1` region,
    a permissive CloudWatch log resource policy must be in place, and
    the Route53 hosted zone must be public.
    See [Configuring Logging for DNS Queries](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html?console_help=true#query-logs-configuring) for additional details.
    """
    def __init__(__self__, __name__, __opts__=None, cloudwatch_log_group_arn=None, zone_id=None):
        """Create a QueryLog resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not cloudwatch_log_group_arn:
            raise TypeError('Missing required property cloudwatch_log_group_arn')
        elif not isinstance(cloudwatch_log_group_arn, basestring):
            raise TypeError('Expected property cloudwatch_log_group_arn to be a basestring')
        __self__.cloudwatch_log_group_arn = cloudwatch_log_group_arn
        """
        CloudWatch log group ARN to send query logs.
        """
        __props__['cloudwatchLogGroupArn'] = cloudwatch_log_group_arn

        if not zone_id:
            raise TypeError('Missing required property zone_id')
        elif not isinstance(zone_id, basestring):
            raise TypeError('Expected property zone_id to be a basestring')
        __self__.zone_id = zone_id
        """
        Route53 hosted zone ID to enable query logs.
        """
        __props__['zoneId'] = zone_id

        super(QueryLog, __self__).__init__(
            'aws:route53/queryLog:QueryLog',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'cloudwatchLogGroupArn' in outs:
            self.cloudwatch_log_group_arn = outs['cloudwatchLogGroupArn']
        if 'zoneId' in outs:
            self.zone_id = outs['zoneId']
