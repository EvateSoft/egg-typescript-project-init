"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 应用基本异常基类
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 15:37
 */
const string_template_1 = require("string-template");
const ExceptionCode_1 = require("./ExceptionCode");
/**
 * 基本错误异常
 */
class BaseException extends Error {
    constructor(code, message, errDetail = null) {
        super(message);
        this.errors = null;
        this.code = code || ExceptionCode_1.ErrCode.ERR_SERVICE_ERROR;
        this.message = message || "Unknown Error";
        this.errors = errDetail || {};
    }
    /**
     * 显示错误信息
     */
    displayError() {
        let displayErrorMessage = string_template_1.default("{message}", {
            code: this.code,
            message: this.message
        });
    }
    /**
     * 获得异常的详情消息
     * @returns {string}
     */
    getErrorMessage() {
        return this.code + ":" + this.message;
    }
}
exports.BaseException = BaseException;
//# sourceMappingURL=BaseException.js.map