/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Address } from './address';
import { AreaCodeInfo } from './areaCodeInfo';
import { County } from './county';
import { Geometry } from './geometry';
import { Match } from './match';

export class RateCenterResponse {
    'id'?: string;
    'name'?: string;
    'alternateName'?: string;
    'areaName1'?: string;
    'geometry'?: Geometry;
    'areaCodeInfoList'?: Array<AreaCodeInfo>;
    'matchedAddress'?: Address;
    'match'?: Match;
    'county'?: County;
    'count'?: number;
    'productCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "alternateName",
            "baseName": "alternateName",
            "type": "string"
        },
        {
            "name": "areaName1",
            "baseName": "areaName1",
            "type": "string"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        },
        {
            "name": "areaCodeInfoList",
            "baseName": "areaCodeInfoList",
            "type": "Array<AreaCodeInfo>"
        },
        {
            "name": "matchedAddress",
            "baseName": "matchedAddress",
            "type": "Address"
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "Match"
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "County"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        },
        {
            "name": "productCode",
            "baseName": "product_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RateCenterResponse.attributeTypeMap;
    }
}

