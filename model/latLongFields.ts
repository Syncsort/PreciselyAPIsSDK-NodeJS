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
import { LocalTaxGeometry } from './localTaxGeometry';

export class LatLongFields {
    'matchCode'?: string;
    'matchLevel'?: string;
    'streetMatchCode'?: string;
    'streetMatchLevel'?: string;
    'geometry'?: LocalTaxGeometry;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchCode",
            "baseName": "matchCode",
            "type": "string"
        },
        {
            "name": "matchLevel",
            "baseName": "matchLevel",
            "type": "string"
        },
        {
            "name": "streetMatchCode",
            "baseName": "streetMatchCode",
            "type": "string"
        },
        {
            "name": "streetMatchLevel",
            "baseName": "streetMatchLevel",
            "type": "string"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "LocalTaxGeometry"
        }    ];

    static getAttributeTypeMap() {
        return LatLongFields.attributeTypeMap;
    }
}

