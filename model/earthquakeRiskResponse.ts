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
import { EventsCount } from './eventsCount';
import { Grid } from './grid';
import { RiskAddress } from './riskAddress';

export class EarthquakeRiskResponse {
    'objectId'?: string;
    'riskLevel'?: string;
    'eventsCount'?: EventsCount;
    'grid'?: Grid;
    'matchedAddress'?: RiskAddress;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string"
        },
        {
            "name": "riskLevel",
            "baseName": "riskLevel",
            "type": "string"
        },
        {
            "name": "eventsCount",
            "baseName": "eventsCount",
            "type": "EventsCount"
        },
        {
            "name": "grid",
            "baseName": "grid",
            "type": "Grid"
        },
        {
            "name": "matchedAddress",
            "baseName": "matchedAddress",
            "type": "RiskAddress"
        }    ];

    static getAttributeTypeMap() {
        return EarthquakeRiskResponse.attributeTypeMap;
    }
}

