/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class GeocodeAddress {
    'objectId'?: string;
    'mainAddressLine'?: string;
    'addressLastLine'?: string;
    'placeName'?: string;
    'areaName1'?: string;
    'areaName2'?: string;
    'areaName3'?: string;
    'areaName4'?: string;
    'postCode1'?: string;
    'postCode2'?: string;
    'country'?: string;
    'addressNumber'?: string;
    'streetName'?: string;
    'unitType'?: string;
    'unitValue'?: string;
    'customFields'?: { [key: string]: object; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "mainAddressLine",
            "baseName": "mainAddressLine",
            "type": "string"
        },
        {
            "name": "addressLastLine",
            "baseName": "addressLastLine",
            "type": "string"
        },
        {
            "name": "placeName",
            "baseName": "placeName",
            "type": "string"
        },
        {
            "name": "areaName1",
            "baseName": "areaName1",
            "type": "string"
        },
        {
            "name": "areaName2",
            "baseName": "areaName2",
            "type": "string"
        },
        {
            "name": "areaName3",
            "baseName": "areaName3",
            "type": "string"
        },
        {
            "name": "areaName4",
            "baseName": "areaName4",
            "type": "string"
        },
        {
            "name": "postCode1",
            "baseName": "postCode1",
            "type": "string"
        },
        {
            "name": "postCode2",
            "baseName": "postCode2",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "addressNumber",
            "baseName": "addressNumber",
            "type": "string"
        },
        {
            "name": "streetName",
            "baseName": "streetName",
            "type": "string"
        },
        {
            "name": "unitType",
            "baseName": "unitType",
            "type": "string"
        },
        {
            "name": "unitValue",
            "baseName": "unitValue",
            "type": "string"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "{ [key: string]: object; }"
        }    ];

    static getAttributeTypeMap() {
        return GeocodeAddress.attributeTypeMap;
    }
}

