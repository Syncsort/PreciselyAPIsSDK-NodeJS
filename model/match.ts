/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Match {
    'confidence'?: string;
    'percentGeocode'?: string;
    'precisionLevel'?: string;
    'locationCode'?: string;
    'matchCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "confidence",
            "baseName": "confidence",
            "type": "string"
        },
        {
            "name": "percentGeocode",
            "baseName": "percentGeocode",
            "type": "string"
        },
        {
            "name": "precisionLevel",
            "baseName": "precisionLevel",
            "type": "string"
        },
        {
            "name": "locationCode",
            "baseName": "locationCode",
            "type": "string"
        },
        {
            "name": "matchCode",
            "baseName": "matchCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Match.attributeTypeMap;
    }
}

