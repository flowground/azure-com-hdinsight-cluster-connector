# ![LOGO](logo.png) HDInsightManagementClient **flow**ground Connector

## Description

A generated **flow**ground connector for the HDInsightManagementClient API (version 2018-06-01-preview).

Generated from: https://api.apis.guru/v2/specs/azure.com/hdinsight-cluster/2018-06-01-preview/swagger.json<br/>
Generated at: 2019-06-11T18:13:58+03:00

## API Description

The HDInsight Management Client.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists all the HDInsight clusters under the subscription.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `api-version` - _required_ - The HDInsight client API Version.

### Lists the HDInsight clusters in a resource group.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `api-version` - _required_ - The HDInsight client API Version.

### Deletes the specified HDInsight cluster.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `clusterName` - _required_ - The name of the cluster.
* `api-version` - _required_ - The HDInsight client API Version.

### Gets the specified cluster.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `clusterName` - _required_ - The name of the cluster.
* `api-version` - _required_ - The HDInsight client API Version.

### Patch HDInsight cluster with the specified parameters.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `clusterName` - _required_ - The name of the cluster.
* `api-version` - _required_ - The HDInsight client API Version.

### Creates a new HDInsight cluster with the specified parameters.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `clusterName` - _required_ - The name of the cluster.
* `api-version` - _required_ - The HDInsight client API Version.

### Resizes the specified HDInsight cluster to the specified size.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `clusterName` - _required_ - The name of the cluster.
* `roleName` - _required_ - The constant value for the roleName
    Possible values: workernode.
* `api-version` - _required_ - The HDInsight client API Version.

### Rotate disk encryption key of the specified HDInsight cluster.

*Tags:* `Clusters`

#### Input Parameters
* `subscriptionId` - _required_ - The subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
* `resourceGroupName` - _required_ - The name of the resource group.
* `clusterName` - _required_ - The name of the cluster.
* `api-version` - _required_ - The HDInsight client API Version.

## License

**flow**ground :- Telekom iPaaS / azure-com-hdinsight-cluster-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
