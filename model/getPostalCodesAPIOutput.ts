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
import { GetPostalCodesAPIOutputUserFields } from './getPostalCodesAPIOutputUserFields';

export class GetPostalCodesAPIOutput {
    /**
    * These fields are returned, unmodified, in the user_fields section of the response.
    */
    'userFields'?: Array<GetPostalCodesAPIOutputUserFields>;
    /**
    * The validated ZIP Code or postal code.
    */
    'postalCode'?: string;
    /**
    * City.Type
    */
    'cityType'?: string;
    /**
    * Reports the success or failure of the match attempt.
    */
    'status'?: string;
    /**
    * Reason for failure, if there is one.
    */
    'statusCode'?: string;
    /**
    * Description of the problem, if there is one.
    */
    'statusDescription'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userFields",
            "baseName": "user_fields",
            "type": "Array<GetPostalCodesAPIOutputUserFields>"
        },
        {
            "name": "postalCode",
            "baseName": "PostalCode",
            "type": "string"
        },
        {
            "name": "cityType",
            "baseName": "City.Type",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string"
        },
        {
            "name": "statusCode",
            "baseName": "Status.Code",
            "type": "string"
        },
        {
            "name": "statusDescription",
            "baseName": "Status.Description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetPostalCodesAPIOutput.attributeTypeMap;
    }
}

