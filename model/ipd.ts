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
import { BoundaryBuffer } from './boundaryBuffer';
import { DistrictType } from './districtType';
import { Rate } from './rate';

export class Ipd {
    'id'?: string;
    'districtName'?: string;
    'districtType'?: DistrictType;
    'taxCodeDescription'?: string;
    'effectiveDate'?: string;
    'expirationDate'?: string;
    'boundaryBuffer'?: BoundaryBuffer;
    'rates'?: Array<Rate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "districtName",
            "baseName": "districtName",
            "type": "string"
        },
        {
            "name": "districtType",
            "baseName": "districtType",
            "type": "DistrictType"
        },
        {
            "name": "taxCodeDescription",
            "baseName": "taxCodeDescription",
            "type": "string"
        },
        {
            "name": "effectiveDate",
            "baseName": "effectiveDate",
            "type": "string"
        },
        {
            "name": "expirationDate",
            "baseName": "expirationDate",
            "type": "string"
        },
        {
            "name": "boundaryBuffer",
            "baseName": "boundaryBuffer",
            "type": "BoundaryBuffer"
        },
        {
            "name": "rates",
            "baseName": "rates",
            "type": "Array<Rate>"
        }    ];

    static getAttributeTypeMap() {
        return Ipd.attributeTypeMap;
    }
}

