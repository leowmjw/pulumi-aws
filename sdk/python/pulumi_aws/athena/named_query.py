# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class NamedQuery(pulumi.CustomResource):
    """
    Provides an Athena Named Query resource.
    """
    def __init__(__self__, __name__, __opts__=None, database=None, description=None, name=None, query=None):
        """Create a NamedQuery resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not database:
            raise TypeError('Missing required property database')
        elif not isinstance(database, basestring):
            raise TypeError('Expected property database to be a basestring')
        __self__.database = database
        """
        The database to which the query belongs.
        """
        __props__['database'] = database

        if description and not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        A brief explanation of the query. Maximum length of 1024.
        """
        __props__['description'] = description

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The plain language name for the query. Maximum length of 128.
        """
        __props__['name'] = name

        if not query:
            raise TypeError('Missing required property query')
        elif not isinstance(query, basestring):
            raise TypeError('Expected property query to be a basestring')
        __self__.query = query
        """
        The text of the query itself. In other words, all query statements. Maximum length of 262144.
        """
        __props__['query'] = query

        super(NamedQuery, __self__).__init__(
            'aws:athena/namedQuery:NamedQuery',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'database' in outs:
            self.database = outs['database']
        if 'description' in outs:
            self.description = outs['description']
        if 'name' in outs:
            self.name = outs['name']
        if 'query' in outs:
            self.query = outs['query']
