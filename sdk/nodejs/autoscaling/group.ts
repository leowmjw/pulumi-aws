// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an AutoScaling Group resource.
 * 
 * -> **Note:** You must specify either `launch_configuration` or `launch_template`.
 */
export class Group extends pulumi.CustomResource {
    /**
     * Get an existing Group resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupState): Group {
        return new Group(name, <any>state, { id });
    }

    /**
     * The ARN for this AutoScaling Group
     */
    public /*out*/ readonly arn: pulumi.Output<string>;
    /**
     * A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
     */
    public readonly availabilityZones: pulumi.Output<string[]>;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     */
    public readonly defaultCooldown: pulumi.Output<number>;
    /**
     * The number of Amazon EC2 instances that
     * should be running in the group. (See also [Waiting for
     * Capacity](#waiting-for-capacity) below.)
     */
    public readonly desiredCapacity: pulumi.Output<number>;
    /**
     * A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
     * * `wait_for_capacity_timeout` (Default: "10m") A maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for ASG instances to be healthy before timing out.  (See also [Waiting
     * for Capacity](#waiting-for-capacity) below.) Setting this to "0" causes
     * Terraform to skip all Capacity Waiting behavior.
     */
    public readonly enabledMetrics: pulumi.Output<string[] | undefined>;
    /**
     * Allows deleting the autoscaling group without waiting
     * for all instances in the pool to terminate.  You can force an autoscaling group to delete
     * even if it's in the process of scaling a resource. Normally, Terraform
     * drains all the instances before deleting the group.  This bypasses that
     * behavior and potentially leaves resources dangling.
     */
    public readonly forceDelete: pulumi.Output<boolean | undefined>;
    /**
     * Time (in seconds) after instance comes into service before checking health.
     */
    public readonly healthCheckGracePeriod: pulumi.Output<number | undefined>;
    /**
     * "EC2" or "ELB". Controls how health checking is done.
     */
    public readonly healthCheckType: pulumi.Output<string>;
    /**
     * One or more
     * [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
     * to attach to the autoscaling group **before** instances are launched. The
     * syntax is exactly the same as the separate
     * [`aws_autoscaling_lifecycle_hook`](/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
     * resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
     * a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
     */
    public readonly initialLifecycleHooks: pulumi.Output<{ defaultResult: string, heartbeatTimeout?: number, lifecycleTransition: string, name: string, notificationMetadata?: string, notificationTargetArn?: string, roleArn?: string }[] | undefined>;
    /**
     * The name of the launch configuration to use.
     */
    public readonly launchConfiguration: pulumi.Output<string | undefined>;
    /**
     * Launch template specification to use to launch instances.
     * See [Launch Template Specification](#launch-template-specification) below for more details.
     */
    public readonly launchTemplate: pulumi.Output<{ id: string, name: string, version?: string } | undefined>;
    /**
     * A list of elastic load balancer names to add to the autoscaling
     * group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
     */
    public readonly loadBalancers: pulumi.Output<string[]>;
    /**
     * The maximum size of the auto scale group.
     */
    public readonly maxSize: pulumi.Output<number>;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
     */
    public readonly metricsGranularity: pulumi.Output<string | undefined>;
    /**
     * Setting this causes Terraform to wait for
     * this number of instances to show up healthy in the ELB only on creation.
     * Updates will not wait on ELB instance number changes.
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    public readonly minElbCapacity: pulumi.Output<number | undefined>;
    /**
     * The minimum size of the auto scale group.
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    public readonly minSize: pulumi.Output<number>;
    /**
     * The name of the launch template. Conflicts with `id`.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    public readonly namePrefix: pulumi.Output<string | undefined>;
    /**
     * The name of the placement group into which you'll launch your instances, if any.
     */
    public readonly placementGroup: pulumi.Output<string | undefined>;
    /**
     * Allows setting instance protection. The
     * autoscaling group will not select instances with this setting for terminination
     * during scale in events.
     */
    public readonly protectFromScaleIn: pulumi.Output<boolean | undefined>;
    /**
     * The ARN of the service-linked role that the ASG will use to call other AWS services
     */
    public readonly serviceLinkedRoleArn: pulumi.Output<string>;
    /**
     * A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
     * Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
     */
    public readonly suspendedProcesses: pulumi.Output<string[] | undefined>;
    /**
     * A list of tag blocks. Tags documented below.
     */
    public readonly tags: pulumi.Output<{ key: string, propagateAtLaunch: boolean, value: string }[] | undefined>;
    /**
     * A list of tag blocks (maps). Tags documented below.
     */
    public readonly tagsCollection: pulumi.Output<{[key: string]: any}[] | undefined>;
    /**
     * A list of `aws_alb_target_group` ARNs, for use with Application Load Balancing.
     */
    public readonly targetGroupArns: pulumi.Output<string[]>;
    /**
     * A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `Default`.
     */
    public readonly terminationPolicies: pulumi.Output<string[] | undefined>;
    /**
     * A list of subnet IDs to launch resources in.
     */
    public readonly vpcZoneIdentifiers: pulumi.Output<string[]>;
    public readonly waitForCapacityTimeout: pulumi.Output<string | undefined>;
    /**
     * Setting this will cause Terraform to wait
     * for exactly this number of healthy instances in all attached load balancers
     * on both create and update operations. (Takes precedence over
     * `min_elb_capacity` behavior.)
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    public readonly waitForElbCapacity: pulumi.Output<number | undefined>;

    /**
     * Create a Group resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: GroupArgs | GroupState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: GroupState = argsOrState as GroupState | undefined;
            inputs["arn"] = state ? state.arn : undefined;
            inputs["availabilityZones"] = state ? state.availabilityZones : undefined;
            inputs["defaultCooldown"] = state ? state.defaultCooldown : undefined;
            inputs["desiredCapacity"] = state ? state.desiredCapacity : undefined;
            inputs["enabledMetrics"] = state ? state.enabledMetrics : undefined;
            inputs["forceDelete"] = state ? state.forceDelete : undefined;
            inputs["healthCheckGracePeriod"] = state ? state.healthCheckGracePeriod : undefined;
            inputs["healthCheckType"] = state ? state.healthCheckType : undefined;
            inputs["initialLifecycleHooks"] = state ? state.initialLifecycleHooks : undefined;
            inputs["launchConfiguration"] = state ? state.launchConfiguration : undefined;
            inputs["launchTemplate"] = state ? state.launchTemplate : undefined;
            inputs["loadBalancers"] = state ? state.loadBalancers : undefined;
            inputs["maxSize"] = state ? state.maxSize : undefined;
            inputs["metricsGranularity"] = state ? state.metricsGranularity : undefined;
            inputs["minElbCapacity"] = state ? state.minElbCapacity : undefined;
            inputs["minSize"] = state ? state.minSize : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["namePrefix"] = state ? state.namePrefix : undefined;
            inputs["placementGroup"] = state ? state.placementGroup : undefined;
            inputs["protectFromScaleIn"] = state ? state.protectFromScaleIn : undefined;
            inputs["serviceLinkedRoleArn"] = state ? state.serviceLinkedRoleArn : undefined;
            inputs["suspendedProcesses"] = state ? state.suspendedProcesses : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["tagsCollection"] = state ? state.tagsCollection : undefined;
            inputs["targetGroupArns"] = state ? state.targetGroupArns : undefined;
            inputs["terminationPolicies"] = state ? state.terminationPolicies : undefined;
            inputs["vpcZoneIdentifiers"] = state ? state.vpcZoneIdentifiers : undefined;
            inputs["waitForCapacityTimeout"] = state ? state.waitForCapacityTimeout : undefined;
            inputs["waitForElbCapacity"] = state ? state.waitForElbCapacity : undefined;
        } else {
            const args = argsOrState as GroupArgs | undefined;
            if (!args || args.maxSize === undefined) {
                throw new Error("Missing required property 'maxSize'");
            }
            if (!args || args.minSize === undefined) {
                throw new Error("Missing required property 'minSize'");
            }
            inputs["availabilityZones"] = args ? args.availabilityZones : undefined;
            inputs["defaultCooldown"] = args ? args.defaultCooldown : undefined;
            inputs["desiredCapacity"] = args ? args.desiredCapacity : undefined;
            inputs["enabledMetrics"] = args ? args.enabledMetrics : undefined;
            inputs["forceDelete"] = args ? args.forceDelete : undefined;
            inputs["healthCheckGracePeriod"] = args ? args.healthCheckGracePeriod : undefined;
            inputs["healthCheckType"] = args ? args.healthCheckType : undefined;
            inputs["initialLifecycleHooks"] = args ? args.initialLifecycleHooks : undefined;
            inputs["launchConfiguration"] = args ? args.launchConfiguration : undefined;
            inputs["launchTemplate"] = args ? args.launchTemplate : undefined;
            inputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            inputs["maxSize"] = args ? args.maxSize : undefined;
            inputs["metricsGranularity"] = args ? args.metricsGranularity : undefined;
            inputs["minElbCapacity"] = args ? args.minElbCapacity : undefined;
            inputs["minSize"] = args ? args.minSize : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["namePrefix"] = args ? args.namePrefix : undefined;
            inputs["placementGroup"] = args ? args.placementGroup : undefined;
            inputs["protectFromScaleIn"] = args ? args.protectFromScaleIn : undefined;
            inputs["serviceLinkedRoleArn"] = args ? args.serviceLinkedRoleArn : undefined;
            inputs["suspendedProcesses"] = args ? args.suspendedProcesses : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["tagsCollection"] = args ? args.tagsCollection : undefined;
            inputs["targetGroupArns"] = args ? args.targetGroupArns : undefined;
            inputs["terminationPolicies"] = args ? args.terminationPolicies : undefined;
            inputs["vpcZoneIdentifiers"] = args ? args.vpcZoneIdentifiers : undefined;
            inputs["waitForCapacityTimeout"] = args ? args.waitForCapacityTimeout : undefined;
            inputs["waitForElbCapacity"] = args ? args.waitForElbCapacity : undefined;
            inputs["arn"] = undefined /*out*/;
        }
        super("aws:autoscaling/group:Group", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Group resources.
 */
export interface GroupState {
    /**
     * The ARN for this AutoScaling Group
     */
    readonly arn?: pulumi.Input<string>;
    /**
     * A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     */
    readonly defaultCooldown?: pulumi.Input<number>;
    /**
     * The number of Amazon EC2 instances that
     * should be running in the group. (See also [Waiting for
     * Capacity](#waiting-for-capacity) below.)
     */
    readonly desiredCapacity?: pulumi.Input<number>;
    /**
     * A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
     * * `wait_for_capacity_timeout` (Default: "10m") A maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for ASG instances to be healthy before timing out.  (See also [Waiting
     * for Capacity](#waiting-for-capacity) below.) Setting this to "0" causes
     * Terraform to skip all Capacity Waiting behavior.
     */
    readonly enabledMetrics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows deleting the autoscaling group without waiting
     * for all instances in the pool to terminate.  You can force an autoscaling group to delete
     * even if it's in the process of scaling a resource. Normally, Terraform
     * drains all the instances before deleting the group.  This bypasses that
     * behavior and potentially leaves resources dangling.
     */
    readonly forceDelete?: pulumi.Input<boolean>;
    /**
     * Time (in seconds) after instance comes into service before checking health.
     */
    readonly healthCheckGracePeriod?: pulumi.Input<number>;
    /**
     * "EC2" or "ELB". Controls how health checking is done.
     */
    readonly healthCheckType?: pulumi.Input<string>;
    /**
     * One or more
     * [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
     * to attach to the autoscaling group **before** instances are launched. The
     * syntax is exactly the same as the separate
     * [`aws_autoscaling_lifecycle_hook`](/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
     * resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
     * a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
     */
    readonly initialLifecycleHooks?: pulumi.Input<{ defaultResult?: pulumi.Input<string>, heartbeatTimeout?: pulumi.Input<number>, lifecycleTransition: pulumi.Input<string>, name: pulumi.Input<string>, notificationMetadata?: pulumi.Input<string>, notificationTargetArn?: pulumi.Input<string>, roleArn?: pulumi.Input<string> }[]>;
    /**
     * The name of the launch configuration to use.
     */
    readonly launchConfiguration?: pulumi.Input<string>;
    /**
     * Launch template specification to use to launch instances.
     * See [Launch Template Specification](#launch-template-specification) below for more details.
     */
    readonly launchTemplate?: pulumi.Input<{ id?: pulumi.Input<string>, name?: pulumi.Input<string>, version?: pulumi.Input<string> }>;
    /**
     * A list of elastic load balancer names to add to the autoscaling
     * group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
     */
    readonly loadBalancers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum size of the auto scale group.
     */
    readonly maxSize?: pulumi.Input<number>;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
     */
    readonly metricsGranularity?: pulumi.Input<string>;
    /**
     * Setting this causes Terraform to wait for
     * this number of instances to show up healthy in the ELB only on creation.
     * Updates will not wait on ELB instance number changes.
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    readonly minElbCapacity?: pulumi.Input<number>;
    /**
     * The minimum size of the auto scale group.
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    readonly minSize?: pulumi.Input<number>;
    /**
     * The name of the launch template. Conflicts with `id`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The name of the placement group into which you'll launch your instances, if any.
     */
    readonly placementGroup?: pulumi.Input<string>;
    /**
     * Allows setting instance protection. The
     * autoscaling group will not select instances with this setting for terminination
     * during scale in events.
     */
    readonly protectFromScaleIn?: pulumi.Input<boolean>;
    /**
     * The ARN of the service-linked role that the ASG will use to call other AWS services
     */
    readonly serviceLinkedRoleArn?: pulumi.Input<string>;
    /**
     * A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
     * Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
     */
    readonly suspendedProcesses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of tag blocks. Tags documented below.
     */
    readonly tags?: pulumi.Input<{ key: pulumi.Input<string>, propagateAtLaunch: pulumi.Input<boolean>, value: pulumi.Input<string> }[]>;
    /**
     * A list of tag blocks (maps). Tags documented below.
     */
    readonly tagsCollection?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * A list of `aws_alb_target_group` ARNs, for use with Application Load Balancing.
     */
    readonly targetGroupArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `Default`.
     */
    readonly terminationPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of subnet IDs to launch resources in.
     */
    readonly vpcZoneIdentifiers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly waitForCapacityTimeout?: pulumi.Input<string>;
    /**
     * Setting this will cause Terraform to wait
     * for exactly this number of healthy instances in all attached load balancers
     * on both create and update operations. (Takes precedence over
     * `min_elb_capacity` behavior.)
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    readonly waitForElbCapacity?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a Group resource.
 */
export interface GroupArgs {
    /**
     * A list of one or more availability zones for the group. This parameter should not be specified when using `vpc_zone_identifier`.
     */
    readonly availabilityZones?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.
     */
    readonly defaultCooldown?: pulumi.Input<number>;
    /**
     * The number of Amazon EC2 instances that
     * should be running in the group. (See also [Waiting for
     * Capacity](#waiting-for-capacity) below.)
     */
    readonly desiredCapacity?: pulumi.Input<number>;
    /**
     * A list of metrics to collect. The allowed values are `GroupMinSize`, `GroupMaxSize`, `GroupDesiredCapacity`, `GroupInServiceInstances`, `GroupPendingInstances`, `GroupStandbyInstances`, `GroupTerminatingInstances`, `GroupTotalInstances`.
     * * `wait_for_capacity_timeout` (Default: "10m") A maximum
     * [duration](https://golang.org/pkg/time/#ParseDuration) that Terraform should
     * wait for ASG instances to be healthy before timing out.  (See also [Waiting
     * for Capacity](#waiting-for-capacity) below.) Setting this to "0" causes
     * Terraform to skip all Capacity Waiting behavior.
     */
    readonly enabledMetrics?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Allows deleting the autoscaling group without waiting
     * for all instances in the pool to terminate.  You can force an autoscaling group to delete
     * even if it's in the process of scaling a resource. Normally, Terraform
     * drains all the instances before deleting the group.  This bypasses that
     * behavior and potentially leaves resources dangling.
     */
    readonly forceDelete?: pulumi.Input<boolean>;
    /**
     * Time (in seconds) after instance comes into service before checking health.
     */
    readonly healthCheckGracePeriod?: pulumi.Input<number>;
    /**
     * "EC2" or "ELB". Controls how health checking is done.
     */
    readonly healthCheckType?: pulumi.Input<string>;
    /**
     * One or more
     * [Lifecycle Hooks](http://docs.aws.amazon.com/autoscaling/latest/userguide/lifecycle-hooks.html)
     * to attach to the autoscaling group **before** instances are launched. The
     * syntax is exactly the same as the separate
     * [`aws_autoscaling_lifecycle_hook`](/docs/providers/aws/r/autoscaling_lifecycle_hooks.html)
     * resource, without the `autoscaling_group_name` attribute. Please note that this will only work when creating
     * a new autoscaling group. For all other use-cases, please use `aws_autoscaling_lifecycle_hook` resource.
     */
    readonly initialLifecycleHooks?: pulumi.Input<{ defaultResult?: pulumi.Input<string>, heartbeatTimeout?: pulumi.Input<number>, lifecycleTransition: pulumi.Input<string>, name: pulumi.Input<string>, notificationMetadata?: pulumi.Input<string>, notificationTargetArn?: pulumi.Input<string>, roleArn?: pulumi.Input<string> }[]>;
    /**
     * The name of the launch configuration to use.
     */
    readonly launchConfiguration?: pulumi.Input<string>;
    /**
     * Launch template specification to use to launch instances.
     * See [Launch Template Specification](#launch-template-specification) below for more details.
     */
    readonly launchTemplate?: pulumi.Input<{ id?: pulumi.Input<string>, name?: pulumi.Input<string>, version?: pulumi.Input<string> }>;
    /**
     * A list of elastic load balancer names to add to the autoscaling
     * group names. Only valid for classic load balancers. For ALBs, use `target_group_arns` instead.
     */
    readonly loadBalancers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum size of the auto scale group.
     */
    readonly maxSize: pulumi.Input<number>;
    /**
     * The granularity to associate with the metrics to collect. The only valid value is `1Minute`. Default is `1Minute`.
     */
    readonly metricsGranularity?: pulumi.Input<string>;
    /**
     * Setting this causes Terraform to wait for
     * this number of instances to show up healthy in the ELB only on creation.
     * Updates will not wait on ELB instance number changes.
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    readonly minElbCapacity?: pulumi.Input<number>;
    /**
     * The minimum size of the auto scale group.
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    readonly minSize: pulumi.Input<number>;
    /**
     * The name of the launch template. Conflicts with `id`.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Creates a unique name beginning with the specified
     * prefix. Conflicts with `name`.
     */
    readonly namePrefix?: pulumi.Input<string>;
    /**
     * The name of the placement group into which you'll launch your instances, if any.
     */
    readonly placementGroup?: pulumi.Input<string>;
    /**
     * Allows setting instance protection. The
     * autoscaling group will not select instances with this setting for terminination
     * during scale in events.
     */
    readonly protectFromScaleIn?: pulumi.Input<boolean>;
    /**
     * The ARN of the service-linked role that the ASG will use to call other AWS services
     */
    readonly serviceLinkedRoleArn?: pulumi.Input<string>;
    /**
     * A list of processes to suspend for the AutoScaling Group. The allowed values are `Launch`, `Terminate`, `HealthCheck`, `ReplaceUnhealthy`, `AZRebalance`, `AlarmNotification`, `ScheduledActions`, `AddToLoadBalancer`.
     * Note that if you suspend either the `Launch` or `Terminate` process types, it can prevent your autoscaling group from functioning properly.
     */
    readonly suspendedProcesses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of tag blocks. Tags documented below.
     */
    readonly tags?: pulumi.Input<{ key: pulumi.Input<string>, propagateAtLaunch: pulumi.Input<boolean>, value: pulumi.Input<string> }[]>;
    /**
     * A list of tag blocks (maps). Tags documented below.
     */
    readonly tagsCollection?: pulumi.Input<pulumi.Input<{[key: string]: any}>[]>;
    /**
     * A list of `aws_alb_target_group` ARNs, for use with Application Load Balancing.
     */
    readonly targetGroupArns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of policies to decide how the instances in the auto scale group should be terminated. The allowed values are `OldestInstance`, `NewestInstance`, `OldestLaunchConfiguration`, `ClosestToNextInstanceHour`, `Default`.
     */
    readonly terminationPolicies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of subnet IDs to launch resources in.
     */
    readonly vpcZoneIdentifiers?: pulumi.Input<pulumi.Input<string>[]>;
    readonly waitForCapacityTimeout?: pulumi.Input<string>;
    /**
     * Setting this will cause Terraform to wait
     * for exactly this number of healthy instances in all attached load balancers
     * on both create and update operations. (Takes precedence over
     * `min_elb_capacity` behavior.)
     * (See also [Waiting for Capacity](#waiting-for-capacity) below.)
     */
    readonly waitForElbCapacity?: pulumi.Input<number>;
}
