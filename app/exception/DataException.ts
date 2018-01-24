/**
 * 数据错误异常类
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 15:45
 */
import {BaseException, ExceptionInfo} from "./BaseException";

/**
 * 数据错误异常类
 */
export class DataException extends BaseException {

    /**
     * @param {ExceptionInfo} errExceptionInfo
     */
    constructor(errExceptionInfo : ExceptionInfo) {
        super(errExceptionInfo.code, errExceptionInfo.message,errExceptionInfo.errDetail);
    }

}
