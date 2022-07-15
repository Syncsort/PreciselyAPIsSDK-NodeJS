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
import { AHJList } from './aHJList';
import { PSAPResponse } from './pSAPResponse';

export class AHJPlusPSAPResponse {
    'ahjs'?: AHJList;
    'psap'?: PSAPResponse;
    'count'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ahjs",
            "baseName": "ahjs",
            "type": "AHJList"
        },
        {
            "name": "psap",
            "baseName": "psap",
            "type": "PSAPResponse"
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AHJPlusPSAPResponse.attributeTypeMap;
    }
}

