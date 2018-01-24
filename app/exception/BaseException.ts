/**
 * 应用基本异常基类
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 15:37
 */
import format from "string-template";
import {ErrCode} from "./ExceptionCode";

/**
 *  错误信息结构体
 */
export interface ExceptionInfo {
   code? : number,
   message? : string,
   errDetail? : any | ItemObject
}

/**
 * 基本错误异常
 */
export class BaseException extends Error {
    code: number;
    message: string;

    protected errors : any = null;

    constructor(code, message,errDetail=null) {
        super(message);
        this.code = code || ErrCode.ERR_SERVICE_ERROR;
        this.message = message || "Unknown Error";
        this.errors = errDetail  || {};
    }

    /**
     * 显示错误信息
     */
    protected displayError() {
        let displayErrorMessage = format("{message}",{
            code : this.code,
            message : this.message
        });
    }

    /**
     * 获得异常的详情消息
     * @returns {string}
     */
    public getErrorMessage() {
        return this.code + ":" + this.message;
    }

}
