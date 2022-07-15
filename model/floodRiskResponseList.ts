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
import { FloodRiskResponse } from './floodRiskResponse';

export class FloodRiskResponseList {
    'floodRisk'?: Array<FloodRiskResponse>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "floodRisk",
            "baseName": "floodRisk",
            "type": "Array<FloodRiskResponse>"
        }    ];

    static getAttributeTypeMap() {
        return FloodRiskResponseList.attributeTypeMap;
    }
}

