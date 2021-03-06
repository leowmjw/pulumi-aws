// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * Provides a resource to manage AWS Secrets Manager secret version including its secret value. To manage secret metadata, see the [`aws_secretsmanager_secret` resource](/docs/providers/aws/r/secretsmanager_secret.html).
 * 
 * ~> **NOTE:** If the `AWSCURRENT` staging label is present on this version during resource deletion, that label cannot be removed and will be skipped to prevent errors when fully deleting the secret. That label will leave this secret version active even after the resource is deleted from Terraform unless the secret itself is deleted. Move the `AWSCURRENT` staging label before or after deleting this resource from Terraform to fully trigger version deprecation if necessary.
 */
export class SecretVersion extends pulumi.CustomResource {
    /**
     * Get an existing SecretVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecretVersionState): SecretVersion {
        return new SecretVersion(name, <any>state, { id });
    }

    /**
     * Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
     */
    public readonly secretId: pulumi.Output<string>;
    /**
     * Specifies text data that you want to encrypt and store in this version of the secret.
     */
    public readonly secretString: pulumi.Output<string>;
    /**
     * The unique identifier of the version of the secret.
     */
    public /*out*/ readonly versionId: pulumi.Output<string>;
    /**
     * Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.
     */
    public readonly versionStages: pulumi.Output<string[]>;

    /**
     * Create a SecretVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecretVersionArgs, opts?: pulumi.ResourceOptions)
    constructor(name: string, argsOrState?: SecretVersionArgs | SecretVersionState, opts?: pulumi.ResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: SecretVersionState = argsOrState as SecretVersionState | undefined;
            inputs["secretId"] = state ? state.secretId : undefined;
            inputs["secretString"] = state ? state.secretString : undefined;
            inputs["versionId"] = state ? state.versionId : undefined;
            inputs["versionStages"] = state ? state.versionStages : undefined;
        } else {
            const args = argsOrState as SecretVersionArgs | undefined;
            if (!args || args.secretId === undefined) {
                throw new Error("Missing required property 'secretId'");
            }
            if (!args || args.secretString === undefined) {
                throw new Error("Missing required property 'secretString'");
            }
            inputs["secretId"] = args ? args.secretId : undefined;
            inputs["secretString"] = args ? args.secretString : undefined;
            inputs["versionStages"] = args ? args.versionStages : undefined;
            inputs["versionId"] = undefined /*out*/;
        }
        super("aws:secretsmanager/secretVersion:SecretVersion", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SecretVersion resources.
 */
export interface SecretVersionState {
    /**
     * Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
     */
    readonly secretId?: pulumi.Input<string>;
    /**
     * Specifies text data that you want to encrypt and store in this version of the secret.
     */
    readonly secretString?: pulumi.Input<string>;
    /**
     * The unique identifier of the version of the secret.
     */
    readonly versionId?: pulumi.Input<string>;
    /**
     * Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.
     */
    readonly versionStages?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SecretVersion resource.
 */
export interface SecretVersionArgs {
    /**
     * Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist.
     */
    readonly secretId: pulumi.Input<string>;
    /**
     * Specifies text data that you want to encrypt and store in this version of the secret.
     */
    readonly secretString: pulumi.Input<string>;
    /**
     * Specifies a list of staging labels that are attached to this version of the secret. A staging label must be unique to a single version of the secret. If you specify a staging label that's already associated with a different version of the same secret then that staging label is automatically removed from the other version and attached to this version. If you do not specify a value, then AWS Secrets Manager automatically moves the staging label `AWSCURRENT` to this new version on creation.
     */
    readonly versionStages?: pulumi.Input<pulumi.Input<string>[]>;
}
