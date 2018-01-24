/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 10:02
 */

/**
 * 基本验证类型
 */
export enum BaseAuthType {
    NONE,
    TOKEN,
    CRM_AUTH,
    PORTAL_AUTH
}

/**
 * 应用API的提交请求的基本信息
 */
export interface BaseHttpRequestOption {
    name        : string;
    baseURL     : string;
    path        : string;
    method      : string;          // "GET" | "POST" | "DELETE" | "HEAD" | "PUT";
    version?    : string|number;
    auth?       : boolean;
    authType?   : BaseAuthType;
    headers?    : any;
    timeout?    : number;
    debug?      : boolean;
    fromJson?   : boolean;
    authTokenKey? : string;       // 定义包装TOKEN的HEADER的key名称
    reqLimit?   : number;         // 请求的限制时间(seconds)
    queryParams? : Array<any>;
    postParams? : Array<any>;
}

/**
 * 调用时请求的参数
 */
export interface BaseHttpRequestParams {
    queryParams? : ItemObject;
    postParams?  : ItemObject;
    pathParams?  : ItemObject;
    headerParams?: ItemObject;
    authToken?   : string;
    authTokenKey? : string;       // 定义包装TOKEN的HEADER的key名称
}
