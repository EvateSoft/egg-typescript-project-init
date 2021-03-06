/**
 * 客户端连接实例
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 10:08
 */

import {AxiosError, AxiosRequestConfig, AxiosResponse} from "axios";
import {BaseAuthType, BaseHttpRequestOption, BaseHttpRequestParams} from "./baseHttpType";
import {ErrCode} from "../../exception/ExceptionCode";
import {DataException} from "../../exception/DataException";
import {HttpException} from "../../exception/HttpException";
import {empty, isset} from "../utils/functions";
import httpUtil from "../utils/httpUtil";

const _ = require("lodash");
const format = require("string-template");
const axios = require('axios');

/**
 * HTTP连接工具类
 */
class HttpClient {

    /** 基本信息保存 */
    protected baseHttpRequestOptions : BaseHttpRequestOption;

    /** 头部结构信息 */
    protected headers : ItemObject;

    /** 认证类型 */
    protected authType : BaseAuthType = BaseAuthType.NONE;

    protected method = 'GET';
    protected baseURL = '';
    protected urlPath = '/';
    protected postParams = {};
    protected queryParams = {};
    protected timeout = 10000;



    constructor() {
        let defaultRequestConfig : BaseHttpRequestOption = {
            name:'defaultName',
            method : "GET",
            baseURL : '',
            path : '/',
            auth : false,
            headers : {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        };
        this.initConfig(defaultRequestConfig);
    }


    protected checkHttpResponseStatus(response:AxiosResponse) {
        return response && response.status>=200 && response.status<400;
        //throw new HttpException(ErrCode.ERR_HTTP_REQUEST_ERROR,)
    }

    /**
     * 对于请求选项进行初始化
     * @param {BaseHttpRequestOption} options
     * @returns {HttpClient}
     */
    public initConfig(options:BaseHttpRequestOption) {
        this.clearAllParams();
        this.baseHttpRequestOptions = options;
        this.method     = _.defaultTo(this.baseHttpRequestOptions.method,"GET");
        this.baseURL    = _.defaultTo(this.baseHttpRequestOptions.baseURL,"");
        this.urlPath    = _.defaultTo(this.baseHttpRequestOptions.path,"/");
        this.authType   = _.defaultTo(this.baseHttpRequestOptions.authType,BaseAuthType.NONE);
        this.headers    =  _.defaultTo(this.baseHttpRequestOptions.headers,{});
        this.timeout    = _.defaultTo(this.baseHttpRequestOptions.timeout,10000);
        return this;
    }


    /**
     * 设置认证信息
     * @param authInfo
     * @returns {HttpClient}
     */
    public auth(authInfo:any) {
        switch(this.authType) {
            // 对于Token认证，设置头信息
            case BaseAuthType.TOKEN:
                if (!isset(authInfo,"token")) {
                    throw new DataException({
                        code : ErrCode.ERR_DATA_TOKEN_NOT_VALID,
                        message: "AuthToken.token Not Set"
                    });
                }
                let headerKey = !empty(authInfo.headerKey) ? authInfo.headerKey : "Authorization";
                this.headers[headerKey] = "Bearer "+authInfo.token;
                 break;
            case BaseAuthType.CRM_AUTH:
            case BaseAuthType.PORTAL_AUTH:
                break;
        }
        return this;
    }


    /**
     * 设置Auth-Token
     * @param {string} token
     * @param {string} authTokenKey
     * @returns {HttpClient}
     * @throws {HttpException}
     */
    public authForToken(token:string,authTokenKey=null) : HttpClient {
        if (empty(token)) {
            throw new DataException({
                code : ErrCode.ERR_DATA_TOKEN_NOT_VALID,
                message : "Token设置无效"
            });
        }

        this.authType = BaseAuthType.TOKEN;
        return this.auth({token:token , headerKey: authTokenKey});
    }

    /**
     * @param {BaseHttpRequestParams} allParams
     * @returns {HttpClient}
     */
    public setAllParams(allParams:BaseHttpRequestParams) : HttpClient {
        if (empty(allParams)) {
            return this;
        }
        if (isset(allParams,"queryParams")) {
             this.setQueryParams(allParams.queryParams);
        }
        if (isset(allParams,"postParams")) {
            this.setPostParams(allParams.postParams);
        }
        if (isset(allParams,"pathParams")) {
            this.setPathParams(allParams.pathParams);
        }
        if (isset(allParams,"headerParams")) {
            this.addHeaders(allParams.headerParams);
        }
        if (isset(allParams,"authToken")) {
            this.authForToken(allParams.authToken,allParams.authTokenKey||null);
        }


        return this;
    }


    /**
     * 清除掉requestParams
     * @returns {HttpClient}
     */
    public clearAllParams() : HttpClient {
        this.queryParams = {};
        this.postParams = {};
        return this;
    }

    /**
     * 增加Header节
     * @param {ItemObject} headerParams
     * @returns {HttpClient}
     */
    public addHeaders(headerParams:ItemObject) : HttpClient {
        this.headers = _.merge({},this.headers,headerParams);
        return this;
    }


    /**
     * 设置路径上的
     * @param {ItemObject} queryParams
     * @returns {HttpClient}
     */
    public setQueryParams(queryParams:ItemObject) : HttpClient {
        if (!empty(queryParams)) {
            this.queryParams = queryParams;
            this.urlPath = httpUtil.setUrlQueryParams(this.urlPath,this.queryParams);
        }
        return this;
    }

    /**
     * 设置POST数据
     * @param {ItemObject} postParams
     * @returns {HttpClient}
     */
    public setPostParams(postParams:ItemObject) : HttpClient {
        if (!empty(postParams)) {
            this.postParams = postParams;
        }
        return this;
    }

    /**
     * @param {ItemObject} pathParams
     * @returns {HttpClient}
     */
    public setPathParams(pathParams:ItemObject) : HttpClient {
        if (isset(this.baseHttpRequestOptions,"path")) {
            this.urlPath = format(this.baseHttpRequestOptions.path,pathParams);
        }

        return this;
    }


    /**
     * 设置Axios的请求体
     * @returns {AxiosRequestConfig}
     */
    protected parseRequestOptions() : AxiosRequestConfig {
       let options = {
           method   : this.method,
           baseURL  : this.baseURL,
           url      : this.urlPath,
           timeout  : this.timeout,
           headers  : this.headers
       };

       if (!empty(this.postParams)) {
           options["data"] = this.postParams;
       }

       return options;
    }


    /**
     * 返回Http的数据
     * @param {AxiosResponse} response
     * @returns {any}
     */
    protected resolveHttpData(response:AxiosResponse) : any {
        return response.data;
    }


    /**
     * 发送HTTP请求
     * @param {BaseHttpRequestOption} resOptions
     * @param {ItemObject} requestParams
     * @returns {Promise}
     */
    public sendRequest(resOptions:BaseHttpRequestOption=null,
                       requestParams:BaseHttpRequestParams=null) {
        if (!empty(resOptions)) {
            this.initConfig(resOptions);
        }
        if (!empty(requestParams)) {
            this.setAllParams(requestParams);
        }

        let self = this;
        let requestConfig = this.parseRequestOptions();
        return axios(requestConfig).then(function (response : AxiosResponse)  {
             return self.resolveHttpData(response);
        }).catch(function (err:AxiosError) {
            throw new HttpException(err.response.status,
                err.response.statusText,
                err.response.data);
        });
    }

    /**
     * 带有Token的API请求
     * @param {BaseHttpRequestOption} resOptions
     * @param {BaseHttpRequestParams} requestParams
     * @param {FnReturnPromise<string>} authTokenCallback : TOKEN取得的回调函数，此函数会返回一个Promise，决议值为token
     * @param cbArgs
     * @returns {Promise<AxiosResponse<any>>}
     */
    public sendRequestWithToken(resOptions:BaseHttpRequestOption=null,
                                requestParams:BaseHttpRequestParams=null,
                                authTokenCallback : FnReturnPromise<string>=null,
                                ...cbArgs) {
       if(empty(authTokenCallback)) {
           return this.sendRequest(resOptions,requestParams);
       } else {
           let self = this;
           let [cbCaller,...othCbArgs] = cbArgs;
           return authTokenCallback.call(cbCaller,...othCbArgs).then(function(token:string) {
               if(empty(token)) {
                   throw new DataException({code : ErrCode.ERR_POST_TOKEN_INVALID,message : "TOKEN没有设置"});
               }

               requestParams.authToken = token;
               requestParams.authTokenKey = resOptions.authTokenKey || null;
               return self.sendRequest(resOptions,requestParams);
           });
       }
    }
}

export default new HttpClient();
