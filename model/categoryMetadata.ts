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

export class CategoryMetadata {
    'code'?: string;
    'sic'?: string;
    'tradeDivision'?: string;
    'tradeGroup'?: string;
    '_class'?: string;
    'subClass'?: string;
    'description'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "sic",
            "baseName": "sic",
            "type": "string"
        },
        {
            "name": "tradeDivision",
            "baseName": "tradeDivision",
            "type": "string"
        },
        {
            "name": "tradeGroup",
            "baseName": "tradeGroup",
            "type": "string"
        },
        {
            "name": "_class",
            "baseName": "class",
            "type": "string"
        },
        {
            "name": "subClass",
            "baseName": "subClass",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CategoryMetadata.attributeTypeMap;
    }
}

