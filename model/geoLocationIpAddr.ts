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
import { Accuracy } from './accuracy';
import { GeolocationGeometry } from './geolocationGeometry';
import { IpInfo } from './ipInfo';

export class GeoLocationIpAddr {
    'geometry'?: GeolocationGeometry;
    'accuracy'?: Accuracy;
    'ipInfo'?: IpInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "geometry",
            "baseName": "geometry",
            "type": "GeolocationGeometry"
        },
        {
            "name": "accuracy",
            "baseName": "accuracy",
            "type": "Accuracy"
        },
        {
            "name": "ipInfo",
            "baseName": "ipInfo",
            "type": "IpInfo"
        }    ];

    static getAttributeTypeMap() {
        return GeoLocationIpAddr.attributeTypeMap;
    }
}

