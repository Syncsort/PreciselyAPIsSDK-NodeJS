/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 12.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class AddressesPreferences {
    'maxCandidates'?: string;
    'page'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxCandidates",
            "baseName": "maxCandidates",
            "type": "string"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressesPreferences.attributeTypeMap;
    }
}

