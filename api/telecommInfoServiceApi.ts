/**
 * Precisely APIs
 * Enhance & enrich your data, applications, business processes, and workflows with rich location, information, and identify APIs.
 *
 * The version of the OpenAPI document: 12.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ErrorInfo } from '../model/errorInfo';
import { RateCenterResponse } from '../model/rateCenterResponse';

import { ObjectSerializer, Authentication, Interceptor } from '../model/models';
import { OAuth,oAuthCredInfo } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.precisely.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum TelecommInfoServiceApiApiKeys {
}

export class TelecommInfoServiceApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;
	protected authentications : OAuth;
    protected  oAuthCred : oAuthCredInfo;

	protected interceptors: Interceptor[] = [];
    constructor(oAuthObj: oAuthCredInfo);
    constructor(oAuthObj: oAuthCredInfo,basePath?: string)
    {
    if(oAuthObj)
    {
    this.oAuthCred=oAuthObj;
    }
    if (basePath) {
    this._basePath = basePath;
    }
    }
    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: TelecommInfoServiceApiApiKeys, value: string) {
        this.authentications[TelecommInfoServiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.objOAuthCredInfo.access_token = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * Accepts addresses as input and returns Incumbent Local Exchange Carrier (ILEC) doing-business-as names.
     * @summary Rate Center By Address.
     * @param address The address to be searched
     * @param country 3 letter ISO code of the country to be searched. Allowed values USA,CAN
     * @param areaCodeInfo Specifies whether area code information will be part of response.Allowed values True,False.
     * @param level Level (basic/detail).Allowed values detail,basic.
     */
    public async getRateCenterByAddress (address?: string, country?: string, areaCodeInfo?: string, level?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: RateCenterResponse;  }> {
        const localVarPath = this._basePath + '/telecomm/v1/ratecenter/byaddress';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (address !== undefined) {
            localVarQueryParameters['address'] = ObjectSerializer.serialize(address, "string");
        }

        if (country !== undefined) {
            localVarQueryParameters['country'] = ObjectSerializer.serialize(country, "string");
        }

        if (areaCodeInfo !== undefined) {
            localVarQueryParameters['areaCodeInfo'] = ObjectSerializer.serialize(areaCodeInfo, "string");
        }

        if (level !== undefined) {
            localVarQueryParameters['level'] = ObjectSerializer.serialize(level, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        

   //return this.authentications.oAuth2Password.applyToRequest()
    //.then((data)=>{

       // this.authentications.default.applyToRequest(localVarRequestOptions);
        localVarRequestOptions.headers = {"authorization":"Bearer " + this.oAuthCred.access_token};
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        return new Promise<{ response: http.IncomingMessage; body: RateCenterResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject(response);
                    }
                }
            });
        });


   /* })
    .catch((error) =>{
    return Promise.reject(error);
    });*/
    }
    /**
     * Accepts latitude & longitude as input and returns Incumbent Local Exchange Carrier (ILEC) doing-business-as names.
     * @summary Rate Center By Location.
     * @param longitude Longitude of the location
     * @param latitude Latitude of the location
     * @param areaCodeInfo Specifies whether area code information will be part of response.Allowed values True,False.
     * @param level Level (basic/detail).Allowed values detail,basic.
     */
    public async getRateCenterByLocation (longitude?: string, latitude?: string, areaCodeInfo?: string, level?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: RateCenterResponse;  }> {
        const localVarPath = this._basePath + '/telecomm/v1/ratecenter/bylocation';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        if (longitude !== undefined) {
            localVarQueryParameters['longitude'] = ObjectSerializer.serialize(longitude, "string");
        }

        if (latitude !== undefined) {
            localVarQueryParameters['latitude'] = ObjectSerializer.serialize(latitude, "string");
        }

        if (areaCodeInfo !== undefined) {
            localVarQueryParameters['areaCodeInfo'] = ObjectSerializer.serialize(areaCodeInfo, "string");
        }

        if (level !== undefined) {
            localVarQueryParameters['level'] = ObjectSerializer.serialize(level, "string");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        

   //return this.authentications.oAuth2Password.applyToRequest()
    //.then((data)=>{

       // this.authentications.default.applyToRequest(localVarRequestOptions);
        localVarRequestOptions.headers = {"authorization":"Bearer " + this.oAuthCred.access_token};
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                (<any>localVarRequestOptions).formData = localVarFormParams;
            } else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }

        return new Promise<{ response: http.IncomingMessage; body: RateCenterResponse;  }>((resolve, reject) => {
            localVarRequest(localVarRequestOptions, (error, response, body) => {
                if (error) {
                    reject(error);
                } else {
                    if (response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    } else {
                        reject(response);
                    }
                }
            });
        });


   /* })
    .catch((error) =>{
    return Promise.reject(error);
    });*/
    }
}
