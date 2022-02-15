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


import localVarRequest from 'request';
import http from 'http';

/* tslint:disable:no-unused-locals */
import { ErrorInfo } from '../model/errorInfo';
import { IPDTaxByAddressBatchRequest } from '../model/iPDTaxByAddressBatchRequest';
import { TaxAddressRequest } from '../model/taxAddressRequest';
import { TaxDistrictResponse } from '../model/taxDistrictResponse';
import { TaxDistrictResponseList } from '../model/taxDistrictResponseList';
import { TaxLocationRequest } from '../model/taxLocationRequest';
import { TaxRateAddressRequest } from '../model/taxRateAddressRequest';
import { TaxRateLocationRequest } from '../model/taxRateLocationRequest';
import { TaxRateResponse } from '../model/taxRateResponse';
import { TaxResponses } from '../model/taxResponses';

import { ObjectSerializer, Authentication, Interceptor } from '../model/models';
import { OAuth,oAuthCredInfo } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'https://api.precisely.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum LocalTaxServiceApiApiKeys {
}

export class LocalTaxServiceApi {
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

    public setApiKey(key: LocalTaxServiceApiApiKeys, value: string) {
        this.authentications[LocalTaxServiceApiApiKeys[key]].apiKey = value;
    }

    set accessToken(token: string) {
        this.authentications.objOAuthCredInfo.access_token = token;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * This is a Batch offering for \'Tax By Address\' service. It accepts a single address, purchase amount or a list of addresses, purchase amounts and retrieve applicable taxes.
     * @summary Post Tax By Address
     * @param taxRateTypeId 
     * @param taxAddressRequest 
     */
    public async getBatchTaxByAddress (taxRateTypeId: string, taxAddressRequest: TaxAddressRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxResponses;  }> {
        const localVarPath = this._basePath + '/localtax/v1/tax/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getBatchTaxByAddress.');
        }

        // verify required parameter 'taxAddressRequest' is not null or undefined
        if (taxAddressRequest === null || taxAddressRequest === undefined) {
            throw new Error('Required parameter taxAddressRequest was null or undefined when calling getBatchTaxByAddress.');
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
            body: ObjectSerializer.serialize(taxAddressRequest, "TaxAddressRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: TaxResponses;  }>((resolve, reject) => {
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
     * This is a Batch offering for \'Tax By Location\' service. It accepts a single location coordinate, purchase amount or a list of location coordinates, purchase amounts and retrieve applicable tax.
     * @summary Post Tax By Location
     * @param taxRateTypeId 
     * @param taxLocationRequest 
     */
    public async getBatchTaxByLocation (taxRateTypeId: string, taxLocationRequest: TaxLocationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxResponses;  }> {
        const localVarPath = this._basePath + '/localtax/v1/tax/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getBatchTaxByLocation.');
        }

        // verify required parameter 'taxLocationRequest' is not null or undefined
        if (taxLocationRequest === null || taxLocationRequest === undefined) {
            throw new Error('Required parameter taxLocationRequest was null or undefined when calling getBatchTaxByLocation.');
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
            body: ObjectSerializer.serialize(taxLocationRequest, "TaxLocationRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: TaxResponses;  }>((resolve, reject) => {
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
     * This is a Batch offering for \'Taxrate By Address\' service. It accepts a single address or a list of addresses and retrieve applicable tax rates.
     * @summary Post Taxrate By Address
     * @param taxRateTypeId 
     * @param taxRateAddressRequest 
     */
    public async getBatchTaxRateByAddress (taxRateTypeId: string, taxRateAddressRequest: TaxRateAddressRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxResponses;  }> {
        const localVarPath = this._basePath + '/localtax/v1/taxrate/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getBatchTaxRateByAddress.');
        }

        // verify required parameter 'taxRateAddressRequest' is not null or undefined
        if (taxRateAddressRequest === null || taxRateAddressRequest === undefined) {
            throw new Error('Required parameter taxRateAddressRequest was null or undefined when calling getBatchTaxRateByAddress.');
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
            body: ObjectSerializer.serialize(taxRateAddressRequest, "TaxRateAddressRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: TaxResponses;  }>((resolve, reject) => {
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
     * This is a Batch offering for \'Taxrate By Location\' service. It accepts a single location coordinate or a list of location coordinates and retrieve applicable tax rates.
     * @summary Post Taxrate By Location
     * @param taxRateTypeId 
     * @param taxRateLocationRequest 
     */
    public async getBatchTaxRateByLocation (taxRateTypeId: string, taxRateLocationRequest: TaxRateLocationRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxResponses;  }> {
        const localVarPath = this._basePath + '/localtax/v1/taxrate/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getBatchTaxRateByLocation.');
        }

        // verify required parameter 'taxRateLocationRequest' is not null or undefined
        if (taxRateLocationRequest === null || taxRateLocationRequest === undefined) {
            throw new Error('Required parameter taxRateLocationRequest was null or undefined when calling getBatchTaxRateByLocation.');
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
            body: ObjectSerializer.serialize(taxRateLocationRequest, "TaxRateLocationRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: TaxResponses;  }>((resolve, reject) => {
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
     * Retrieves IPD (Insurance Premium District) tax rates applicable to a specific address. This service accepts address as input and returns one or many IPD tax rate details for that region in which address falls.
     * @summary Get IPD Tax by Address
     * @param address The address to be searched.
     * @param returnLatLongFields Y or N (default is N) - Returns Latitude Longitude Fields.
     * @param latLongFormat (default is Decimal) - Returns Desired Latitude Longitude Format.
     */
    public async getIPDTaxByAddress (address: string, returnLatLongFields?: string, latLongFormat?: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxDistrictResponse;  }> {
        const localVarPath = this._basePath + '/localtax/v1/taxdistrict/ipd/byaddress';
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

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling getIPDTaxByAddress.');
        }

        if (address !== undefined) {
            localVarQueryParameters['address'] = ObjectSerializer.serialize(address, "string");
        }

        if (returnLatLongFields !== undefined) {
            localVarQueryParameters['returnLatLongFields'] = ObjectSerializer.serialize(returnLatLongFields, "string");
        }

        if (latLongFormat !== undefined) {
            localVarQueryParameters['latLongFormat'] = ObjectSerializer.serialize(latLongFormat, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: TaxDistrictResponse;  }>((resolve, reject) => {
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
     * This is a Batch offering for \'IPD Tax rates By Address\'. It accepts multiple addresses as parameters along with geocoding and matching preferences and returns one or many IPD tax rate details for each address.
     * @summary Get IPD Tax for batch requests.
     * @param iPDTaxByAddressBatchRequest 
     */
    public async getIPDTaxByAddressBatch (iPDTaxByAddressBatchRequest: IPDTaxByAddressBatchRequest, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxDistrictResponseList;  }> {
        const localVarPath = this._basePath + '/localtax/v1/taxdistrict/ipd/byaddress';
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

        // verify required parameter 'iPDTaxByAddressBatchRequest' is not null or undefined
        if (iPDTaxByAddressBatchRequest === null || iPDTaxByAddressBatchRequest === undefined) {
            throw new Error('Required parameter iPDTaxByAddressBatchRequest was null or undefined when calling getIPDTaxByAddressBatch.');
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
            body: ObjectSerializer.serialize(iPDTaxByAddressBatchRequest, "IPDTaxByAddressBatchRequest")
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

        return new Promise<{ response: http.IncomingMessage; body: TaxDistrictResponseList;  }>((resolve, reject) => {
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
     * This service calculates and returns taxes applicable at a specific address. Address, purchase amount and supported tax rate type are inputs to the service.
     * @summary Get Tax By Address
     * @param taxRateTypeId The tax rate id
     * @param address The address to be searched.
     * @param purchaseAmount The amount on which tax to be calculated
     */
    public async getSpecificTaxByAddress (taxRateTypeId: string, address: string, purchaseAmount: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }> {
        const localVarPath = this._basePath + '/localtax/v1/tax/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxByAddress.');
        }

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling getSpecificTaxByAddress.');
        }

        // verify required parameter 'purchaseAmount' is not null or undefined
        if (purchaseAmount === null || purchaseAmount === undefined) {
            throw new Error('Required parameter purchaseAmount was null or undefined when calling getSpecificTaxByAddress.');
        }

        if (address !== undefined) {
            localVarQueryParameters['address'] = ObjectSerializer.serialize(address, "string");
        }

        if (purchaseAmount !== undefined) {
            localVarQueryParameters['purchaseAmount'] = ObjectSerializer.serialize(purchaseAmount, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }>((resolve, reject) => {
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
     * This service calculates and returns tax applicable at a specific location. Longitude, latitude, purchase amount and supported tax rate type are inputs to the service.
     * @summary Get Tax By Location
     * @param taxRateTypeId The tax rate id
     * @param latitude Latitude of the location
     * @param longitude Longitude of the location
     * @param purchaseAmount The amount on which tax to be calculated
     */
    public async getSpecificTaxByLocation (taxRateTypeId: string, latitude: string, longitude: string, purchaseAmount: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }> {
        const localVarPath = this._basePath + '/localtax/v1/tax/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxByLocation.');
        }

        // verify required parameter 'latitude' is not null or undefined
        if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling getSpecificTaxByLocation.');
        }

        // verify required parameter 'longitude' is not null or undefined
        if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling getSpecificTaxByLocation.');
        }

        // verify required parameter 'purchaseAmount' is not null or undefined
        if (purchaseAmount === null || purchaseAmount === undefined) {
            throw new Error('Required parameter purchaseAmount was null or undefined when calling getSpecificTaxByLocation.');
        }

        if (latitude !== undefined) {
            localVarQueryParameters['latitude'] = ObjectSerializer.serialize(latitude, "string");
        }

        if (longitude !== undefined) {
            localVarQueryParameters['longitude'] = ObjectSerializer.serialize(longitude, "string");
        }

        if (purchaseAmount !== undefined) {
            localVarQueryParameters['purchaseAmount'] = ObjectSerializer.serialize(purchaseAmount, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }>((resolve, reject) => {
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
     * Retrieves tax rates applicable to a specific address. This service accepts address and supported tax rate type as inputs to retrieve applicable tax rates.
     * @summary Get Taxrate By Address
     * @param taxRateTypeId The tax rate id
     * @param address The address to be searched.
     */
    public async getSpecificTaxRateByAddress (taxRateTypeId: string, address: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }> {
        const localVarPath = this._basePath + '/localtax/v1/taxrate/{taxRateTypeId}/byaddress'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxRateByAddress.');
        }

        // verify required parameter 'address' is not null or undefined
        if (address === null || address === undefined) {
            throw new Error('Required parameter address was null or undefined when calling getSpecificTaxRateByAddress.');
        }

        if (address !== undefined) {
            localVarQueryParameters['address'] = ObjectSerializer.serialize(address, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }>((resolve, reject) => {
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
     * Retrieves tax rates applicable to a specific location. This service accepts longitude, latitude and supported tax rate type as inputs to retrieve applicable tax rates.
     * @summary Get Taxrate By Location
     * @param taxRateTypeId The tax rate id
     * @param latitude Latitude of the location
     * @param longitude Longitude of the location
     */
    public async getSpecificTaxRateByLocation (taxRateTypeId: string, latitude: string, longitude: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }> {
        const localVarPath = this._basePath + '/localtax/v1/taxrate/{taxRateTypeId}/bylocation'
            .replace('{' + 'taxRateTypeId' + '}', encodeURIComponent(String(taxRateTypeId)));
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

        // verify required parameter 'taxRateTypeId' is not null or undefined
        if (taxRateTypeId === null || taxRateTypeId === undefined) {
            throw new Error('Required parameter taxRateTypeId was null or undefined when calling getSpecificTaxRateByLocation.');
        }

        // verify required parameter 'latitude' is not null or undefined
        if (latitude === null || latitude === undefined) {
            throw new Error('Required parameter latitude was null or undefined when calling getSpecificTaxRateByLocation.');
        }

        // verify required parameter 'longitude' is not null or undefined
        if (longitude === null || longitude === undefined) {
            throw new Error('Required parameter longitude was null or undefined when calling getSpecificTaxRateByLocation.');
        }

        if (latitude !== undefined) {
            localVarQueryParameters['latitude'] = ObjectSerializer.serialize(latitude, "string");
        }

        if (longitude !== undefined) {
            localVarQueryParameters['longitude'] = ObjectSerializer.serialize(longitude, "string");
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

        return new Promise<{ response: http.IncomingMessage; body: TaxRateResponse;  }>((resolve, reject) => {
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
