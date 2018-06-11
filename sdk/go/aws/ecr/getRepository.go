// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ecr

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The ECR Repository data source allows the ARN, Repository URI and Registry ID to be retrieved for an ECR repository.
func LookupRepository(ctx *pulumi.Context, args *GetRepositoryArgs) (*GetRepositoryResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("aws:ecr/getRepository:getRepository", inputs)
	if err != nil {
		return nil, err
	}
	return &GetRepositoryResult{
		Arn: outputs["arn"],
		RegistryId: outputs["registryId"],
		RepositoryUrl: outputs["repositoryUrl"],
	}, nil
}

// A collection of arguments for invoking getRepository.
type GetRepositoryArgs struct {
	// The name of the ECR Repository.
	Name interface{}
}

// A collection of values returned by getRepository.
type GetRepositoryResult struct {
	// Full ARN of the repository.
	Arn interface{}
	// The registry ID where the repository was created.
	RegistryId interface{}
	// The URL of the repository (in the form `aws_account_id.dkr.ecr.region.amazonaws.com/repositoryName`).
	RepositoryUrl interface{}
}
