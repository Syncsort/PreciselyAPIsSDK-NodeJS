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
import { AddressesPreferences } from './addressesPreferences';
import { Geometry } from './geometry';

export class AddressesByBoundaryRequest {
    'preferences'?: AddressesPreferences;
    'geometry'?: Geometry;
    'geometryAsText'?: string;
    'latitude'?: number;
    'longitude'?: number;
    'travelTime'?: string;
    'travelTimeUnit'?: string;
    'travelDistance'?: string;
    'travelDistanceUnit'?: string;
    'travelMode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "preferences",
            "baseName": "preferences",
            "type": "AddressesPreferences"
        },
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "Geometry"
        },
        {
            "name": "geometryAsText",
            "baseName": "geometryAsText",
            "type": "string"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "travelTime",
            "baseName": "travelTime",
            "type": "string"
        },
        {
            "name": "travelTimeUnit",
            "baseName": "travelTimeUnit",
            "type": "string"
        },
        {
            "name": "travelDistance",
            "baseName": "travelDistance",
            "type": "string"
        },
        {
            "name": "travelDistanceUnit",
            "baseName": "travelDistanceUnit",
            "type": "string"
        },
        {
            "name": "travelMode",
            "baseName": "travelMode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AddressesByBoundaryRequest.attributeTypeMap;
    }
}

