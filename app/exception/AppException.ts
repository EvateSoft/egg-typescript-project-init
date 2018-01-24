/**
 * 数据错误异常类
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 15:45
 */
import {BaseException, ExceptionInfo} from "./BaseException";

/**
 * 应用错误异常类
 */
export class AppException extends BaseException {

    /**
     * @param {ExceptionInfo} errExceptionInfo
     */
    constructor(errExceptionInfo : ExceptionInfo) {
        super(errExceptionInfo.code, errExceptionInfo.message,errExceptionInfo.errDetail);
    }

}
