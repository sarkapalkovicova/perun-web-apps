/**
 * Perun RPC API
 * Perun Remote Procedure Calls Application Programming Interface
 *
 * The version of the OpenAPI document: 3.10.0
 * Contact: perun@cesnet.cz
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

import { Group } from '../model/group';
import { PerunException } from '../model/perunException';
import { PerunPrincipal } from '../model/perunPrincipal';
import { SetRoleWithGroupComplementaryObject } from '../model/setRoleWithGroupComplementaryObject';
import { SetRoleWithUserComplementaryObject } from '../model/setRoleWithUserComplementaryObject';
import { UnsetRoleWithGroupComplementaryObject } from '../model/unsetRoleWithGroupComplementaryObject';
import { UnsetRoleWithUserComplementaryObject } from '../model/unsetRoleWithUserComplementaryObject';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class AuthzResolverService {

    protected basePath = 'https://perun.cesnet.cz/krb/rpc';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }



    /**
     * Get all groups of managers (authorizedGroups) for complementaryObject and role
     * @param role 
     * @param complementaryObjectId Property id of complementaryObject to get managers for
     * @param complementaryObjectName Property beanName of complementaryObject, meaning object type (Vo | Group | Facility | ... )
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthzAdminGroups(role: string, complementaryObjectId: number, complementaryObjectName: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Group>>;
    public getAuthzAdminGroups(role: string, complementaryObjectId: number, complementaryObjectName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Group>>>;
    public getAuthzAdminGroups(role: string, complementaryObjectId: number, complementaryObjectName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Group>>>;
    public getAuthzAdminGroups(role: string, complementaryObjectId: number, complementaryObjectName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getAuthzAdminGroups.');
        }
        if (complementaryObjectId === null || complementaryObjectId === undefined) {
            throw new Error('Required parameter complementaryObjectId was null or undefined when calling getAuthzAdminGroups.');
        }
        if (complementaryObjectName === null || complementaryObjectName === undefined) {
            throw new Error('Required parameter complementaryObjectName was null or undefined when calling getAuthzAdminGroups.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (role !== undefined && role !== null) {
            queryParameters = queryParameters.set('role', <any>role);
        }
        if (complementaryObjectId !== undefined && complementaryObjectId !== null) {
            queryParameters = queryParameters.set('complementaryObjectId', <any>complementaryObjectId);
        }
        if (complementaryObjectName !== undefined && complementaryObjectName !== null) {
            queryParameters = queryParameters.set('complementaryObjectName', <any>complementaryObjectName);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<Array<Group>>(`${this.configuration.basePath}/json/authzResolver/getAdminGroups`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets all rich admins
     * Returns all managers for complementaryObject and role with specified attributes.
     * @param role 
     * @param complementaryObjectId Property id of complementaryObject to get managers for
     * @param complementaryObjectName Property beanName of complementaryObject, meaning object type (Vo | Group | Facility | ... )
     * @param specificAttributes list of specified attributes which are needed in object richUser
     * @param allUserAttributes When true, do not specify attributes through list and return them all in objects richUser. Ignoring list of specific attributes
     * @param onlyDirectAdmins When true, return only direct users of the complementary object for role with specific attributes
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAuthzRichAdmins(role: string, complementaryObjectId: number, complementaryObjectName: string, specificAttributes: Array<string>, allUserAttributes?: boolean, onlyDirectAdmins?: boolean, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public getAuthzRichAdmins(role: string, complementaryObjectId: number, complementaryObjectName: string, specificAttributes: Array<string>, allUserAttributes?: boolean, onlyDirectAdmins?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public getAuthzRichAdmins(role: string, complementaryObjectId: number, complementaryObjectName: string, specificAttributes: Array<string>, allUserAttributes?: boolean, onlyDirectAdmins?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public getAuthzRichAdmins(role: string, complementaryObjectId: number, complementaryObjectName: string, specificAttributes: Array<string>, allUserAttributes?: boolean, onlyDirectAdmins?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (role === null || role === undefined) {
            throw new Error('Required parameter role was null or undefined when calling getAuthzRichAdmins.');
        }
        if (complementaryObjectId === null || complementaryObjectId === undefined) {
            throw new Error('Required parameter complementaryObjectId was null or undefined when calling getAuthzRichAdmins.');
        }
        if (complementaryObjectName === null || complementaryObjectName === undefined) {
            throw new Error('Required parameter complementaryObjectName was null or undefined when calling getAuthzRichAdmins.');
        }
        if (specificAttributes === null || specificAttributes === undefined) {
            throw new Error('Required parameter specificAttributes was null or undefined when calling getAuthzRichAdmins.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (role !== undefined && role !== null) {
            queryParameters = queryParameters.set('role', <any>role);
        }
        if (complementaryObjectId !== undefined && complementaryObjectId !== null) {
            queryParameters = queryParameters.set('complementaryObjectId', <any>complementaryObjectId);
        }
        if (complementaryObjectName !== undefined && complementaryObjectName !== null) {
            queryParameters = queryParameters.set('complementaryObjectName', <any>complementaryObjectName);
        }
        if (specificAttributes) {
            specificAttributes.forEach((element) => {
                queryParameters = queryParameters.append('specificAttributes', <any>element);
            })
        }
        if (allUserAttributes !== undefined && allUserAttributes !== null) {
            queryParameters = queryParameters.set('allUserAttributes', <any>allUserAttributes);
        }
        if (onlyDirectAdmins !== undefined && onlyDirectAdmins !== null) {
            queryParameters = queryParameters.set('onlyDirectAdmins', <any>onlyDirectAdmins);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<any>(`${this.configuration.basePath}/json/authzResolver/getRichAdmins`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Gets current user
     * Returns object representing the currently authenticated user.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPerunPrincipal(observe?: 'body', reportProgress?: boolean): Observable<PerunPrincipal>;
    public getPerunPrincipal(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<PerunPrincipal>>;
    public getPerunPrincipal(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<PerunPrincipal>>;
    public getPerunPrincipal(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<PerunPrincipal>(`${this.configuration.basePath}/json/authzResolver/getPerunPrincipal`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns all roles as an AuthzRoles object for a given user.
     * @param userId id of User
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getUserRoles(userId: number, observe?: 'body', reportProgress?: boolean): Observable<{ [key: string]: { [key: string]: Array<number>; }; }>;
    public getUserRoles(userId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<{ [key: string]: { [key: string]: Array<number>; }; }>>;
    public getUserRoles(userId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<{ [key: string]: { [key: string]: Array<number>; }; }>>;
    public getUserRoles(userId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getUserRoles.');
        }

        let queryParameters = new HttpParams({encoder: this.encoder});
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        return this.httpClient.get<{ [key: string]: { [key: string]: Array<number>; }; }>(`${this.configuration.basePath}/json/authzResolver/getUserRoles`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set role for authorizedGroup and complementaryObject
     * @param setRoleWithGroupComplementaryObject 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setRoleWithGroupComplementaryObject(setRoleWithGroupComplementaryObject: SetRoleWithGroupComplementaryObject, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setRoleWithGroupComplementaryObject(setRoleWithGroupComplementaryObject: SetRoleWithGroupComplementaryObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setRoleWithGroupComplementaryObject(setRoleWithGroupComplementaryObject: SetRoleWithGroupComplementaryObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setRoleWithGroupComplementaryObject(setRoleWithGroupComplementaryObject: SetRoleWithGroupComplementaryObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (setRoleWithGroupComplementaryObject === null || setRoleWithGroupComplementaryObject === undefined) {
            throw new Error('Required parameter setRoleWithGroupComplementaryObject was null or undefined when calling setRoleWithGroupComplementaryObject.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/json/authzResolver/setRole/g-co`,
            setRoleWithGroupComplementaryObject,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Set role for user and complementaryObject
     * @param setRoleWithUserComplementaryObject 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public setRoleWithUserComplementaryObject(setRoleWithUserComplementaryObject: SetRoleWithUserComplementaryObject, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public setRoleWithUserComplementaryObject(setRoleWithUserComplementaryObject: SetRoleWithUserComplementaryObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public setRoleWithUserComplementaryObject(setRoleWithUserComplementaryObject: SetRoleWithUserComplementaryObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public setRoleWithUserComplementaryObject(setRoleWithUserComplementaryObject: SetRoleWithUserComplementaryObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (setRoleWithUserComplementaryObject === null || setRoleWithUserComplementaryObject === undefined) {
            throw new Error('Required parameter setRoleWithUserComplementaryObject was null or undefined when calling setRoleWithUserComplementaryObject.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/json/authzResolver/setRole/u-co`,
            setRoleWithUserComplementaryObject,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unset role for authorizedGroup and complementaryObject
     * @param unsetRoleWithGroupComplementaryObject 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unsetRoleWithGroupComplementaryObject(unsetRoleWithGroupComplementaryObject: UnsetRoleWithGroupComplementaryObject, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unsetRoleWithGroupComplementaryObject(unsetRoleWithGroupComplementaryObject: UnsetRoleWithGroupComplementaryObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unsetRoleWithGroupComplementaryObject(unsetRoleWithGroupComplementaryObject: UnsetRoleWithGroupComplementaryObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unsetRoleWithGroupComplementaryObject(unsetRoleWithGroupComplementaryObject: UnsetRoleWithGroupComplementaryObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (unsetRoleWithGroupComplementaryObject === null || unsetRoleWithGroupComplementaryObject === undefined) {
            throw new Error('Required parameter unsetRoleWithGroupComplementaryObject was null or undefined when calling unsetRoleWithGroupComplementaryObject.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/json/authzResolver/unsetRole/g-co`,
            unsetRoleWithGroupComplementaryObject,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Unset role for user and complementaryObject
     * @param unsetRoleWithUserComplementaryObject 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public unsetRoleWithUserComplementaryObject(unsetRoleWithUserComplementaryObject: UnsetRoleWithUserComplementaryObject, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public unsetRoleWithUserComplementaryObject(unsetRoleWithUserComplementaryObject: UnsetRoleWithUserComplementaryObject, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public unsetRoleWithUserComplementaryObject(unsetRoleWithUserComplementaryObject: UnsetRoleWithUserComplementaryObject, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public unsetRoleWithUserComplementaryObject(unsetRoleWithUserComplementaryObject: UnsetRoleWithUserComplementaryObject, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (unsetRoleWithUserComplementaryObject === null || unsetRoleWithUserComplementaryObject === undefined) {
            throw new Error('Required parameter unsetRoleWithUserComplementaryObject was null or undefined when calling unsetRoleWithUserComplementaryObject.');
        }

        let headers = this.defaultHeaders;

        // authentication (ApiKeyAuth) required
        if (this.configuration.apiKeys && this.configuration.apiKeys["Authorization"]) {
            headers = headers.set('Authorization', this.configuration.apiKeys["Authorization"]);
        }

        // authentication (BasicAuth) required
        if (this.configuration.username || this.configuration.password) {
            headers = headers.set('Authorization', 'Basic ' + btoa(this.configuration.username + ':' + this.configuration.password));
        }
        // authentication (BearerAuth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        const httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.configuration.basePath}/json/authzResolver/unsetRole/u-co`,
            unsetRoleWithUserComplementaryObject,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
