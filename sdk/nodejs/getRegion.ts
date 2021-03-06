// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * `aws_region` provides details about a specific AWS region.
 * 
 * As well as validating a given region name this resource can be used to
 * discover the name of the region configured within the provider. The latter
 * can be useful in a child module which is inheriting an AWS provider
 * configuration from its parent module.
 */
export function getRegion(args?: GetRegionArgs): Promise<GetRegionResult> {
    args = args || {};
    return pulumi.runtime.invoke("aws:index/getRegion:getRegion", {
        "current": args.current,
        "endpoint": args.endpoint,
        "name": args.name,
    });
}

/**
 * A collection of arguments for invoking getRegion.
 */
export interface GetRegionArgs {
    readonly current?: pulumi.Input<boolean>;
    /**
     * The EC2 endpoint of the region to select.
     */
    readonly endpoint?: pulumi.Input<string>;
    /**
     * The full name of the region to select.
     */
    readonly name?: pulumi.Input<string>;
}

/**
 * A collection of values returned by getRegion.
 */
export interface GetRegionResult {
    /**
     * `true` if the selected region is the one configured on the
     * provider, or `false` otherwise.
     */
    readonly current: boolean;
    /**
     * The EC2 endpoint for the selected region.
     */
    readonly endpoint: string;
    /**
     * The name of the selected region.
     */
    readonly name: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
