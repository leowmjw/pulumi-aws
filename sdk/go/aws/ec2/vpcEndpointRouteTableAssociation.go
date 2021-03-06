// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package ec2

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// Provides a resource to create an association between a VPC endpoint and routing table.
// 
// ~> **NOTE on VPC Endpoints and VPC Endpoint Route Table Associations:** Terraform provides
// both a standalone VPC Endpoint Route Table Association (an association between a VPC endpoint
// and a single `route_table_id`) and a [VPC Endpoint](vpc_endpoint.html) resource with a `route_table_ids`
// attribute. Do not use the same route table ID in both a VPC Endpoint resource and a VPC Endpoint Route
// Table Association resource. Doing so will cause a conflict of associations and will overwrite the association.
type VpcEndpointRouteTableAssociation struct {
	s *pulumi.ResourceState
}

// NewVpcEndpointRouteTableAssociation registers a new resource with the given unique name, arguments, and options.
func NewVpcEndpointRouteTableAssociation(ctx *pulumi.Context,
	name string, args *VpcEndpointRouteTableAssociationArgs, opts ...pulumi.ResourceOpt) (*VpcEndpointRouteTableAssociation, error) {
	if args == nil || args.RouteTableId == nil {
		return nil, errors.New("missing required argument 'RouteTableId'")
	}
	if args == nil || args.VpcEndpointId == nil {
		return nil, errors.New("missing required argument 'VpcEndpointId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["routeTableId"] = nil
		inputs["vpcEndpointId"] = nil
	} else {
		inputs["routeTableId"] = args.RouteTableId
		inputs["vpcEndpointId"] = args.VpcEndpointId
	}
	s, err := ctx.RegisterResource("aws:ec2/vpcEndpointRouteTableAssociation:VpcEndpointRouteTableAssociation", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VpcEndpointRouteTableAssociation{s: s}, nil
}

// GetVpcEndpointRouteTableAssociation gets an existing VpcEndpointRouteTableAssociation resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVpcEndpointRouteTableAssociation(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VpcEndpointRouteTableAssociationState, opts ...pulumi.ResourceOpt) (*VpcEndpointRouteTableAssociation, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["routeTableId"] = state.RouteTableId
		inputs["vpcEndpointId"] = state.VpcEndpointId
	}
	s, err := ctx.ReadResource("aws:ec2/vpcEndpointRouteTableAssociation:VpcEndpointRouteTableAssociation", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VpcEndpointRouteTableAssociation{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *VpcEndpointRouteTableAssociation) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *VpcEndpointRouteTableAssociation) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The ID of the routing table to be associated with the VPC endpoint.
func (r *VpcEndpointRouteTableAssociation) RouteTableId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["routeTableId"])
}

// The ID of the VPC endpoint with which the routing table will be associated.
func (r *VpcEndpointRouteTableAssociation) VpcEndpointId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["vpcEndpointId"])
}

// Input properties used for looking up and filtering VpcEndpointRouteTableAssociation resources.
type VpcEndpointRouteTableAssociationState struct {
	// The ID of the routing table to be associated with the VPC endpoint.
	RouteTableId interface{}
	// The ID of the VPC endpoint with which the routing table will be associated.
	VpcEndpointId interface{}
}

// The set of arguments for constructing a VpcEndpointRouteTableAssociation resource.
type VpcEndpointRouteTableAssociationArgs struct {
	// The ID of the routing table to be associated with the VPC endpoint.
	RouteTableId interface{}
	// The ID of the VPC endpoint with which the routing table will be associated.
	VpcEndpointId interface{}
}
