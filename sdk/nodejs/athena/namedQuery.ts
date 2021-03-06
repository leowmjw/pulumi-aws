// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides an Athena Named Query resource.
 */
export class NamedQuery extends pulumi.CustomResource {
    /**
     * Get an existing NamedQuery resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamedQueryState): NamedQuery {
        return new NamedQuery(name, <any>state, { id });
    }

    /**
     * The database to which the query belongs.
     */
    public readonly database: pulumi.Output<string>;
    /**
     * A brief explanation of the query. Maximum length of 1024.
     */
    public readonly description: pulumi.Output<string | undefined>;
    /**
     * The plain language name for the query. Maximum length of 128.
     */
    public readonly name: pulumi.Output<string>;
    /**
     * The text of the query itself. In other words, all query statements. Maximum length of 262144.
     */
    public readonly query: pulumi.Output<string>;

    /**
     * Create a NamedQuery resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamedQueryArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: NamedQueryArgs | NamedQueryState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: NamedQueryState = argsOrState as NamedQueryState | undefined;
            inputs["database"] = state ? state.database : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["query"] = state ? state.query : undefined;
        } else {
            const args = argsOrState as NamedQueryArgs | undefined;
            if (!args || args.database === undefined) {
                throw new Error("Missing required property 'database'");
            }
            if (!args || args.query === undefined) {
                throw new Error("Missing required property 'query'");
            }
            inputs["database"] = args ? args.database : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["query"] = args ? args.query : undefined;
        }
        super("aws:athena/namedQuery:NamedQuery", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering NamedQuery resources.
 */
export interface NamedQueryState {
    /**
     * The database to which the query belongs.
     */
    readonly database?: pulumi.Input<string>;
    /**
     * A brief explanation of the query. Maximum length of 1024.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The plain language name for the query. Maximum length of 128.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The text of the query itself. In other words, all query statements. Maximum length of 262144.
     */
    readonly query?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NamedQuery resource.
 */
export interface NamedQueryArgs {
    /**
     * The database to which the query belongs.
     */
    readonly database: pulumi.Input<string>;
    /**
     * A brief explanation of the query. Maximum length of 1024.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * The plain language name for the query. Maximum length of 128.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The text of the query itself. In other words, all query statements. Maximum length of 262144.
     */
    readonly query: pulumi.Input<string>;
}
