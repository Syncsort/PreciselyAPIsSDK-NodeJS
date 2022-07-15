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
import { MatchedAddress } from './matchedAddress';
import { PropertyInfoPreferences } from './propertyInfoPreferences';

export class PropertyInfoAddressRequest {
    'preferences': PropertyInfoPreferences;
    'addresses': Array<MatchedAddress>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferences",
            "baseName": "preferences",
            "type": "PropertyInfoPreferences"
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<MatchedAddress>"
        }    ];

    static getAttributeTypeMap() {
        return PropertyInfoAddressRequest.attributeTypeMap;
    }
}

