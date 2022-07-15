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
import { RiskLocations } from './riskLocations';
import { RiskPreferences } from './riskPreferences';

export class EarthquakeRiskByLocationRequest {
    'locations': Array<RiskLocations>;
    'preferences'?: RiskPreferences;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<RiskLocations>"
        },
        {
            "name": "preferences",
            "baseName": "preferences",
            "type": "RiskPreferences"
        }    ];

    static getAttributeTypeMap() {
        return EarthquakeRiskByLocationRequest.attributeTypeMap;
    }
}

