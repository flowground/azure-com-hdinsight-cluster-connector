/**
 * Auto-generated action file for "HDInsightManagementClient (hdinsight-cluster)" API.
 *
 * Generated at: 2019-06-11T15:13:58.731Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-hdinsight-cluster-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Clusters_Create'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "clusterName",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "clusterName": "clusterName",
    "api_version": "api-version",
    "principalId": "principalId",
    "tenantId": "tenantId",
    "type": "type",
    "userAssignedIdentities": "userAssignedIdentities",
    "identity": "identity",
    "location": "location",
    "blueprint": "blueprint",
    "componentVersion": "componentVersion",
    "configurations": "configurations",
    "kind": "kind",
    "clusterDefinition": "clusterDefinition",
    "clusterVersion": "clusterVersion",
    "roles": "roles",
    "computeProfile": "computeProfile",
    "encryptionAlgorithm": "encryptionAlgorithm",
    "keyName": "keyName",
    "keyVersion": "keyVersion",
    "msiResourceId": "msiResourceId",
    "vaultUri": "vaultUri",
    "diskEncryptionProperties": "diskEncryptionProperties",
    "osType": "osType",
    "aaddsResourceId": "aaddsResourceId",
    "clusterUsersGroupDNs": "clusterUsersGroupDNs",
    "directoryType": "directoryType",
    "domain": "domain",
    "domainUserPassword": "domainUserPassword",
    "domainUsername": "domainUsername",
    "ldapsUrls": "ldapsUrls",
    "organizationalUnitDN": "organizationalUnitDN",
    "securityProfile": "securityProfile",
    "storageaccounts": "storageaccounts",
    "storageProfile": "storageProfile",
    "tier": "tier",
    "properties": "properties",
    "tags": "tags",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['auth_azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'Clusters_Create',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HDInsight/clusters/{clusterName}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}