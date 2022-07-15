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
import { SpecialPurposeDistrict } from './specialPurposeDistrict';
import { TaxCounty } from './taxCounty';
import { TaxPlace } from './taxPlace';
import { TaxState } from './taxState';

export class TaxJurisdiction {
    'state'?: TaxState;
    'county'?: TaxCounty;
    'place'?: TaxPlace;
    'spds'?: Array<SpecialPurposeDistrict>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "state",
            "baseName": "state",
            "type": "TaxState"
        },
        {
            "name": "county",
            "baseName": "county",
            "type": "TaxCounty"
        },
        {
            "name": "place",
            "baseName": "place",
            "type": "TaxPlace"
        },
        {
            "name": "spds",
            "baseName": "spds",
            "type": "Array<SpecialPurposeDistrict>"
        }    ];

    static getAttributeTypeMap() {
        return TaxJurisdiction.attributeTypeMap;
    }
}

