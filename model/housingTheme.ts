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
import { IndividualValueVariable } from './individualValueVariable';
import { RangeVariable } from './rangeVariable';

export class HousingTheme {
    'boundaryRef'?: string;
    'individualValueVariable'?: Array<IndividualValueVariable>;
    'rangeVariable'?: Array<RangeVariable>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "boundaryRef",
            "baseName": "boundaryRef",
            "type": "string"
        },
        {
            "name": "individualValueVariable",
            "baseName": "individualValueVariable",
            "type": "Array<IndividualValueVariable>"
        },
        {
            "name": "rangeVariable",
            "baseName": "rangeVariable",
            "type": "Array<RangeVariable>"
        }    ];

    static getAttributeTypeMap() {
        return HousingTheme.attributeTypeMap;
    }
}

