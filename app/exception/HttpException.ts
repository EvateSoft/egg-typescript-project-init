/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 10:48
 */

import {BaseException} from "./BaseException";
import {ErrCode} from "./ExceptionCode";

/**
 * HTTP客户端异常
 */
export class HttpException extends BaseException {

    /** Http状态代码 */
    protected status: number;
    /** Http状态码的说明 */
    protected statusText: string;

    /** Http返回的数据 */
    protected httpResponseData: any;


    /** 应用层API返回的错误代码 */
    protected appErrCode: number;
    /** 应用层API返回的错误消息 */
    protected appErrMessage: string;

    /**
     * @param {number} httpStatusCode
     * @param {string} httpStatusText
     * @param {any} responseData
     */
    constructor( httpStatusCode: number, httpStatusText: string, responseData: any = null) {


        let appCode = responseData.code || httpStatusCode;
        let appMessage = responseData.message || httpStatusText;

        switch(httpStatusCode) {
            case ErrCode.ERR_HTTP_STATUS_NOT_FOUND:
                appCode = httpStatusCode;
                //appMessage = "调用接口失败,接口不存在";
                appMessage = "";
                break;
            case ErrCode.ERR_HTTP_STATUS_NOT_ACCEPT:
                appCode = httpStatusCode;
                //appMessage = "调用接口失败,接口调用/返回失败:";
                appMessage = "调用API接口返回出错." + (responseData.message || '');
                break;
        }

        super(appCode, appMessage);

        this.status = httpStatusCode;
        this.statusText = httpStatusText;
        this.httpResponseData = responseData;
        this.appErrCode = appCode;
        this.appErrMessage = appMessage;
    }

}
