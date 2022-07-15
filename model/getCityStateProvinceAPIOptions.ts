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

export class GetCityStateProvinceAPIOptions {
    /**
    * Output VanityCity.
    */
    'outputVanityCity'?: string = 'N';
    /**
    * PerformCanadianProcessing.
    */
    'performCanadianProcessing'?: string = 'Y';
    /**
    * MaximumResults.
    */
    'maximumResults'?: string = '10';
    /**
    * PerformUSProcessing.
    */
    'performUSProcessing'?: string = 'Y';

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "outputVanityCity",
            "baseName": "OutputVanityCity",
            "type": "string"
        },
        {
            "name": "performCanadianProcessing",
            "baseName": "PerformCanadianProcessing",
            "type": "string"
        },
        {
            "name": "maximumResults",
            "baseName": "MaximumResults",
            "type": "string"
        },
        {
            "name": "performUSProcessing",
            "baseName": "PerformUSProcessing",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetCityStateProvinceAPIOptions.attributeTypeMap;
    }
}

