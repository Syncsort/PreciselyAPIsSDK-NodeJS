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

export class EventsCount {
    'total'?: string;
    'r0'?: string;
    'r1'?: string;
    'r2'?: string;
    'r3'?: string;
    'r4'?: string;
    'r5'?: string;
    'r6'?: string;
    'r7'?: string;
    'r0Ge'?: string;
    'r1Ge'?: string;
    'r2Ge'?: string;
    'r3Ge'?: string;
    'r4Ge'?: string;
    'r5Ge'?: string;
    'r6Ge'?: string;
    'r7Ge'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "string"
        },
        {
            "name": "r0",
            "baseName": "r0",
            "type": "string"
        },
        {
            "name": "r1",
            "baseName": "r1",
            "type": "string"
        },
        {
            "name": "r2",
            "baseName": "r2",
            "type": "string"
        },
        {
            "name": "r3",
            "baseName": "r3",
            "type": "string"
        },
        {
            "name": "r4",
            "baseName": "r4",
            "type": "string"
        },
        {
            "name": "r5",
            "baseName": "r5",
            "type": "string"
        },
        {
            "name": "r6",
            "baseName": "r6",
            "type": "string"
        },
        {
            "name": "r7",
            "baseName": "r7",
            "type": "string"
        },
        {
            "name": "r0Ge",
            "baseName": "r0_ge",
            "type": "string"
        },
        {
            "name": "r1Ge",
            "baseName": "r1_ge",
            "type": "string"
        },
        {
            "name": "r2Ge",
            "baseName": "r2_ge",
            "type": "string"
        },
        {
            "name": "r3Ge",
            "baseName": "r3_ge",
            "type": "string"
        },
        {
            "name": "r4Ge",
            "baseName": "r4_ge",
            "type": "string"
        },
        {
            "name": "r5Ge",
            "baseName": "r5_ge",
            "type": "string"
        },
        {
            "name": "r6Ge",
            "baseName": "r6_ge",
            "type": "string"
        },
        {
            "name": "r7Ge",
            "baseName": "r7_ge",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EventsCount.attributeTypeMap;
    }
}

