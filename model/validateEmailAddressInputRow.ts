/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 11.9.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { GetPostalCodesAPIOutputUserFields } from './getPostalCodesAPIOutputUserFields';

export class ValidateEmailAddressInputRow {
    /**
    * These fields are returned, unmodified, in the user_fields section of the response.
    */
    'userFields'?: Array<GetPostalCodesAPIOutputUserFields>;
    /**
    * Enables or disables real-time confirmation. If the deliverability of an email address cannot be determined via our knowledge base, a real-time confirmation can be attempted.
    */
    'rtc'?: string;
    /**
    * Specifies whether to check if the email address is fictitious. For example, bgates@microsoft.com.
    */
    'bogus'?: string;
    /**
    * Specifies whether to check if the email address has a non-personal handle, such as info@, sales@, or webmaster@. For example, sales@example.com.
    */
    'role'?: string;
    /**
    * Specifies whether to check if the email address appears on the Direct Marketing Association\'s Do Not Email list (Electronic Mail Preference Service).
    */
    'emps'?: string;
    /**
    * Specifies whether to check if the email address is associated with a domain that has restrictions on commercial email per the FCC.
    */
    'fccwireless'?: string;
    /**
    * Specifies whether to check if the email address handle contains derogatory words.
    */
    'language'?: string;
    /**
    * Specifies whether to check if the owner of the email address is known to submit spam complaints.
    */
    'complain'?: string;
    /**
    * Specifies whether to check if the email address originates from a website that provides temporary email addresses, or if the email address appears to be temporary
    */
    'disposable'?: string;
    /**
    * One character code controlling the advanced suggestion behavior.The possible values are: a, c, and n
    */
    'atc'?: string;
    /**
    * The email address you want to validate.
    */
    'emailAddress'?: string;
    /**
    * Specifies the timeout for real-time confirmation. See the description of the rtc parameter. Specify the timeout value in milliseconds. Valid values are 0 to 4000. By default, the system allows 1200 milliseconds for this check.
    */
    'rtcTimeout'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "userFields",
            "baseName": "user_fields",
            "type": "Array<GetPostalCodesAPIOutputUserFields>"
        },
        {
            "name": "rtc",
            "baseName": "rtc",
            "type": "string"
        },
        {
            "name": "bogus",
            "baseName": "bogus",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "string"
        },
        {
            "name": "emps",
            "baseName": "emps",
            "type": "string"
        },
        {
            "name": "fccwireless",
            "baseName": "fccwireless",
            "type": "string"
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string"
        },
        {
            "name": "complain",
            "baseName": "complain",
            "type": "string"
        },
        {
            "name": "disposable",
            "baseName": "disposable",
            "type": "string"
        },
        {
            "name": "atc",
            "baseName": "atc",
            "type": "string"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        },
        {
            "name": "rtcTimeout",
            "baseName": "rtc_timeout",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ValidateEmailAddressInputRow.attributeTypeMap;
    }
}

