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
import { StartEndPoint } from './startEndPoint';

export class Matrix {
    'distance'?: number;
    'distanceUnit'?: string;
    'endPoint'?: StartEndPoint;
    'startPoint'?: StartEndPoint;
    'time'?: number;
    'timeUnit'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "distance",
            "baseName": "distance",
            "type": "number"
        },
        {
            "name": "distanceUnit",
            "baseName": "distanceUnit",
            "type": "string"
        },
        {
            "name": "endPoint",
            "baseName": "endPoint",
            "type": "StartEndPoint"
        },
        {
            "name": "startPoint",
            "baseName": "startPoint",
            "type": "StartEndPoint"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "timeUnit",
            "baseName": "timeUnit",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Matrix.attributeTypeMap;
    }
}

