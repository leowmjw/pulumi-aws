# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetInstanceResult(object):
    """
    A collection of values returned by getInstance.
    """
    def __init__(__self__, ami=None, associate_public_ip_address=None, availability_zone=None, credit_specifications=None, disable_api_termination=None, ebs_block_devices=None, ebs_optimized=None, ephemeral_block_devices=None, iam_instance_profile=None, instance_state=None, instance_tags=None, instance_type=None, key_name=None, monitoring=None, network_interface_id=None, password_data=None, placement_group=None, private_dns=None, private_ip=None, public_dns=None, public_ip=None, root_block_devices=None, security_groups=None, source_dest_check=None, subnet_id=None, tags=None, tenancy=None, user_data=None, vpc_security_group_ids=None):
        if not ami:
            raise TypeError('Missing required argument ami')
        elif not isinstance(ami, basestring):
            raise TypeError('Expected argument ami to be a basestring')
        __self__.ami = ami
        """
        The ID of the AMI used to launch the instance.
        """
        if not associate_public_ip_address:
            raise TypeError('Missing required argument associate_public_ip_address')
        elif not isinstance(associate_public_ip_address, bool):
            raise TypeError('Expected argument associate_public_ip_address to be a bool')
        __self__.associate_public_ip_address = associate_public_ip_address
        """
        Whether or not the Instance is associated with a public IP address or not (Boolean).
        """
        if not availability_zone:
            raise TypeError('Missing required argument availability_zone')
        elif not isinstance(availability_zone, basestring):
            raise TypeError('Expected argument availability_zone to be a basestring')
        __self__.availability_zone = availability_zone
        """
        The availability zone of the Instance.
        """
        if not credit_specifications:
            raise TypeError('Missing required argument credit_specifications')
        elif not isinstance(credit_specifications, list):
            raise TypeError('Expected argument credit_specifications to be a list')
        __self__.credit_specifications = credit_specifications
        """
        The credit specification of the Instance.
        """
        if not disable_api_termination:
            raise TypeError('Missing required argument disable_api_termination')
        elif not isinstance(disable_api_termination, bool):
            raise TypeError('Expected argument disable_api_termination to be a bool')
        __self__.disable_api_termination = disable_api_termination
        if not ebs_block_devices:
            raise TypeError('Missing required argument ebs_block_devices')
        elif not isinstance(ebs_block_devices, list):
            raise TypeError('Expected argument ebs_block_devices to be a list')
        __self__.ebs_block_devices = ebs_block_devices
        """
        The EBS block device mappings of the Instance.
        """
        if not ebs_optimized:
            raise TypeError('Missing required argument ebs_optimized')
        elif not isinstance(ebs_optimized, bool):
            raise TypeError('Expected argument ebs_optimized to be a bool')
        __self__.ebs_optimized = ebs_optimized
        """
        Whether the Instance is EBS optimized or not (Boolean).
        """
        if not ephemeral_block_devices:
            raise TypeError('Missing required argument ephemeral_block_devices')
        elif not isinstance(ephemeral_block_devices, list):
            raise TypeError('Expected argument ephemeral_block_devices to be a list')
        __self__.ephemeral_block_devices = ephemeral_block_devices
        """
        The ephemeral block device mappings of the Instance.
        """
        if not iam_instance_profile:
            raise TypeError('Missing required argument iam_instance_profile')
        elif not isinstance(iam_instance_profile, basestring):
            raise TypeError('Expected argument iam_instance_profile to be a basestring')
        __self__.iam_instance_profile = iam_instance_profile
        """
        The name of the instance profile associated with the Instance.
        """
        if not instance_state:
            raise TypeError('Missing required argument instance_state')
        elif not isinstance(instance_state, basestring):
            raise TypeError('Expected argument instance_state to be a basestring')
        __self__.instance_state = instance_state
        if not instance_tags:
            raise TypeError('Missing required argument instance_tags')
        elif not isinstance(instance_tags, dict):
            raise TypeError('Expected argument instance_tags to be a dict')
        __self__.instance_tags = instance_tags
        if not instance_type:
            raise TypeError('Missing required argument instance_type')
        elif not isinstance(instance_type, basestring):
            raise TypeError('Expected argument instance_type to be a basestring')
        __self__.instance_type = instance_type
        """
        The type of the Instance.
        """
        if not key_name:
            raise TypeError('Missing required argument key_name')
        elif not isinstance(key_name, basestring):
            raise TypeError('Expected argument key_name to be a basestring')
        __self__.key_name = key_name
        """
        The key name of the Instance.
        """
        if not monitoring:
            raise TypeError('Missing required argument monitoring')
        elif not isinstance(monitoring, bool):
            raise TypeError('Expected argument monitoring to be a bool')
        __self__.monitoring = monitoring
        """
        Whether detailed monitoring is enabled or disabled for the Instance (Boolean).
        """
        if not network_interface_id:
            raise TypeError('Missing required argument network_interface_id')
        elif not isinstance(network_interface_id, basestring):
            raise TypeError('Expected argument network_interface_id to be a basestring')
        __self__.network_interface_id = network_interface_id
        """
        The ID of the network interface that was created with the Instance.
        """
        if not password_data:
            raise TypeError('Missing required argument password_data')
        elif not isinstance(password_data, basestring):
            raise TypeError('Expected argument password_data to be a basestring')
        __self__.password_data = password_data
        """
        Base-64 encoded encrypted password data for the instance.
        Useful for getting the administrator password for instances running Microsoft Windows.
        This attribute is only exported if `get_password_data` is true.
        See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information.
        """
        if not placement_group:
            raise TypeError('Missing required argument placement_group')
        elif not isinstance(placement_group, basestring):
            raise TypeError('Expected argument placement_group to be a basestring')
        __self__.placement_group = placement_group
        """
        The placement group of the Instance.
        """
        if not private_dns:
            raise TypeError('Missing required argument private_dns')
        elif not isinstance(private_dns, basestring):
            raise TypeError('Expected argument private_dns to be a basestring')
        __self__.private_dns = private_dns
        """
        The private DNS name assigned to the Instance. Can only be
        used inside the Amazon EC2, and only available if you've enabled DNS hostnames
        for your VPC.
        """
        if not private_ip:
            raise TypeError('Missing required argument private_ip')
        elif not isinstance(private_ip, basestring):
            raise TypeError('Expected argument private_ip to be a basestring')
        __self__.private_ip = private_ip
        """
        The private IP address assigned to the Instance.
        """
        if not public_dns:
            raise TypeError('Missing required argument public_dns')
        elif not isinstance(public_dns, basestring):
            raise TypeError('Expected argument public_dns to be a basestring')
        __self__.public_dns = public_dns
        """
        The public DNS name assigned to the Instance. For EC2-VPC, this
        is only available if you've enabled DNS hostnames for your VPC.
        """
        if not public_ip:
            raise TypeError('Missing required argument public_ip')
        elif not isinstance(public_ip, basestring):
            raise TypeError('Expected argument public_ip to be a basestring')
        __self__.public_ip = public_ip
        """
        The public IP address assigned to the Instance, if applicable. **NOTE**: If you are using an [`aws_eip`](/docs/providers/aws/r/eip.html) with your instance, you should refer to the EIP's address directly and not use `public_ip`, as this field will change after the EIP is attached.
        """
        if not root_block_devices:
            raise TypeError('Missing required argument root_block_devices')
        elif not isinstance(root_block_devices, list):
            raise TypeError('Expected argument root_block_devices to be a list')
        __self__.root_block_devices = root_block_devices
        """
        The root block device mappings of the Instance
        """
        if not security_groups:
            raise TypeError('Missing required argument security_groups')
        elif not isinstance(security_groups, list):
            raise TypeError('Expected argument security_groups to be a list')
        __self__.security_groups = security_groups
        """
        The associated security groups.
        """
        if not source_dest_check:
            raise TypeError('Missing required argument source_dest_check')
        elif not isinstance(source_dest_check, bool):
            raise TypeError('Expected argument source_dest_check to be a bool')
        __self__.source_dest_check = source_dest_check
        """
        Whether the network interface performs source/destination checking (Boolean).
        """
        if not subnet_id:
            raise TypeError('Missing required argument subnet_id')
        elif not isinstance(subnet_id, basestring):
            raise TypeError('Expected argument subnet_id to be a basestring')
        __self__.subnet_id = subnet_id
        """
        The VPC subnet ID.
        """
        if not tags:
            raise TypeError('Missing required argument tags')
        elif not isinstance(tags, dict):
            raise TypeError('Expected argument tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags assigned to the Instance.
        """
        if not tenancy:
            raise TypeError('Missing required argument tenancy')
        elif not isinstance(tenancy, basestring):
            raise TypeError('Expected argument tenancy to be a basestring')
        __self__.tenancy = tenancy
        """
        The tenancy of the instance: `dedicated`, `default`, `host`.
        """
        if not user_data:
            raise TypeError('Missing required argument user_data')
        elif not isinstance(user_data, basestring):
            raise TypeError('Expected argument user_data to be a basestring')
        __self__.user_data = user_data
        """
        The User Data supplied to the Instance.
        """
        if not vpc_security_group_ids:
            raise TypeError('Missing required argument vpc_security_group_ids')
        elif not isinstance(vpc_security_group_ids, list):
            raise TypeError('Expected argument vpc_security_group_ids to be a list')
        __self__.vpc_security_group_ids = vpc_security_group_ids
        """
        The associated security groups in a non-default VPC.
        """

def get_instance(filters=None, get_password_data=None, instance_id=None, instance_tags=None, tags=None):
    """
    Use this data source to get the ID of an Amazon EC2 Instance for use in other
    resources.
    """
    __args__ = dict()

    __args__['filters'] = filters
    __args__['getPasswordData'] = get_password_data
    __args__['instanceId'] = instance_id
    __args__['instanceTags'] = instance_tags
    __args__['tags'] = tags
    __ret__ = pulumi.runtime.invoke('aws:ec2/getInstance:getInstance', __args__)

    return GetInstanceResult(
        ami=__ret__['ami'],
        associate_public_ip_address=__ret__['associatePublicIpAddress'],
        availability_zone=__ret__['availabilityZone'],
        credit_specifications=__ret__['creditSpecifications'],
        disable_api_termination=__ret__['disableApiTermination'],
        ebs_block_devices=__ret__['ebsBlockDevices'],
        ebs_optimized=__ret__['ebsOptimized'],
        ephemeral_block_devices=__ret__['ephemeralBlockDevices'],
        iam_instance_profile=__ret__['iamInstanceProfile'],
        instance_state=__ret__['instanceState'],
        instance_tags=__ret__['instanceTags'],
        instance_type=__ret__['instanceType'],
        key_name=__ret__['keyName'],
        monitoring=__ret__['monitoring'],
        network_interface_id=__ret__['networkInterfaceId'],
        password_data=__ret__['passwordData'],
        placement_group=__ret__['placementGroup'],
        private_dns=__ret__['privateDns'],
        private_ip=__ret__['privateIp'],
        public_dns=__ret__['publicDns'],
        public_ip=__ret__['publicIp'],
        root_block_devices=__ret__['rootBlockDevices'],
        security_groups=__ret__['securityGroups'],
        source_dest_check=__ret__['sourceDestCheck'],
        subnet_id=__ret__['subnetId'],
        tags=__ret__['tags'],
        tenancy=__ret__['tenancy'],
        user_data=__ret__['userData'],
        vpc_security_group_ids=__ret__['vpcSecurityGroupIds'])