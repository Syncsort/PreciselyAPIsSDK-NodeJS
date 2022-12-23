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
import { AddressesByBoundaryRequest } from '../model/addressesByBoundaryRequest';
import { AddressesCount } from '../model/addressesCount';
import { AddressesResponse } from '../model/addressesResponse';
import { ErrorInfo } from '../model/errorInfo';

import { ObjectSerializer, Authentication, Interceptor } from '../model/models';
import { OAuth,oAuthCredInfo } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.precisely.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum AddressesServiceApiApiKeys {
}

export class AddressesServiceApi {
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

    public setApiKey(key: AddressesServiceApiApiKeys, value: string) {
        this.authentications[AddressesServiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.objOAuthCredInfo.access_token = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This service accepts zip code, neighborhood, county, or city names, and returns the total number of addresses associated with these names.
     * @summary Addresses Count by Boundary Name.
     * @param country Name of country. Acceptable values are CAN, USA.
     * @param areaName1 Specifies the largest geographical area, typically a state or province.
     * @param areaName2 Specifies the secondary geographic area, typically a county or district.
     * @param areaName3 Specifies a city or town name.
     * @param areaName4 Specifies a city subdivision or locality/neighborhood.
     * @param postCode Specifies the postcode (ZIP code) in the appropriate format for the country.
     */
    public async getAddressesCountByBoundaryName (country: string, areaName1?: string, areaName2?: string, areaName3?: string, areaName4?: string, postCode?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AddressesCount;  }> {
        const localVarPath = this._basePath + '/addresses/v1/addresscount/byboundaryname';
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

        // verify required parameter 'country' is not null or undefined
        if (country === null || country === undefined) {
            throw new Error('Required parameter country was null or undefined when calling getAddressesCountByBoundaryName.');
        }

        if (areaName1 !== undefined) {
            localVarQueryParameters['areaName1'] = ObjectSerializer.serialize(areaName1, "string");
        }

        if (areaName2 !== undefined) {
            localVarQueryParameters['areaName2'] = ObjectSerializer.serialize(areaName2, "string");
        }

        if (areaName3 !== undefined) {
            localVarQueryParameters['areaName3'] = ObjectSerializer.serialize(areaName3, "string");
        }

        if (areaName4 !== undefined) {
            localVarQueryParameters['areaName4'] = ObjectSerializer.serialize(areaName4, "string");
        }

        if (postCode !== undefined) {
            localVarQueryParameters['postCode'] = ObjectSerializer.serialize(postCode, "string");
        }

        if (country !== undefined) {
            localVarQueryParameters['country'] = ObjectSerializer.serialize(country, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: AddressesCount;  }>((resolve, reject) => {
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
     * This service accepts custom geographic boundaries or drive time & drive distance, returns the total number of addresses within these boundaries.
     * @summary Addresses count by Boundary.
     * @param addressesByBoundaryRequest 
     */
    public async getAddressesCountbyBoundary (addressesByBoundaryRequest: AddressesByBoundaryRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AddressesCount;  }> {
        const localVarPath = this._basePath + '/addresses/v1/addresscount/byboundary';
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

        // verify required parameter 'addressesByBoundaryRequest' is not null or undefined
        if (addressesByBoundaryRequest === null || addressesByBoundaryRequest === undefined) {
            throw new Error('Required parameter addressesByBoundaryRequest was null or undefined when calling getAddressesCountbyBoundary.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(addressesByBoundaryRequest, "AddressesByBoundaryRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: AddressesCount;  }>((resolve, reject) => {
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
     * This service accepts custom geographic boundaries or drive time & drive distance, returns all known & valid addresses within these boundaries.
     * @summary Addresses by Boundary.
     * @param addressesByBoundaryRequest 
     */
    public async getAddressesbyBoundary (addressesByBoundaryRequest: AddressesByBoundaryRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AddressesResponse;  }> {
        const localVarPath = this._basePath + '/addresses/v1/address/byboundary';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml', 'text/csv'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'addressesByBoundaryRequest' is not null or undefined
        if (addressesByBoundaryRequest === null || addressesByBoundaryRequest === undefined) {
            throw new Error('Required parameter addressesByBoundaryRequest was null or undefined when calling getAddressesbyBoundary.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(addressesByBoundaryRequest, "AddressesByBoundaryRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: AddressesResponse;  }>((resolve, reject) => {
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
     * This service accepts zip code, neighborhood, county, or city names, and returns all known & valid addresses associated with these names.
     * @summary Addresses by Boundary Name.
     * @param country Name of country. Acceptable values are CAN, USA.
     * @param areaName1 Specifies the largest geographical area, typically a state or province.
     * @param areaName2 Specifies the secondary geographic area, typically a county or district.
     * @param areaName3 Specifies a city or town name.
     * @param areaName4 Specifies a city subdivision or locality/neighborhood.
     * @param postCode Specifies the postcode (ZIP code) in the appropriate format for the country.
     * @param maxCandidates Maximum number of addresses to be returned in response. Max. value is 100 for XML/JSON, and 2000 for CSV.
     * @param page Response will indicate the page number.
     */
    public async getAddressesbyBoundaryName (country: string, areaName1?: string, areaName2?: string, areaName3?: string, areaName4?: string, postCode?: string, maxCandidates?: string, page?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: AddressesResponse;  }> {
        const localVarPath = this._basePath + '/addresses/v1/address/byboundaryname';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'application/xml', 'text/csv'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'country' is not null or undefined
        if (country === null || country === undefined) {
            throw new Error('Required parameter country was null or undefined when calling getAddressesbyBoundaryName.');
        }

        if (areaName1 !== undefined) {
            localVarQueryParameters['areaName1'] = ObjectSerializer.serialize(areaName1, "string");
        }

        if (areaName2 !== undefined) {
            localVarQueryParameters['areaName2'] = ObjectSerializer.serialize(areaName2, "string");
        }

        if (areaName3 !== undefined) {
            localVarQueryParameters['areaName3'] = ObjectSerializer.serialize(areaName3, "string");
        }

        if (areaName4 !== undefined) {
            localVarQueryParameters['areaName4'] = ObjectSerializer.serialize(areaName4, "string");
        }

        if (postCode !== undefined) {
            localVarQueryParameters['postCode'] = ObjectSerializer.serialize(postCode, "string");
        }

        if (country !== undefined) {
            localVarQueryParameters['country'] = ObjectSerializer.serialize(country, "string");
        }

        if (maxCandidates !== undefined) {
            localVarQueryParameters['maxCandidates'] = ObjectSerializer.serialize(maxCandidates, "string");
        }

        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: AddressesResponse;  }>((resolve, reject) => {
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
