"use strict";
/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 10:50
 */
Object.defineProperty(exports, "__esModule", { value: true });
/** 数据设置错误 */
exports.ErrCode = {
    ERR_RET0_SUCCESS: 0,
    ERR_RET1_SUCCESS: 1,
    ERR_FUN_RET_SUCCESS: 0,
    ERR_HTTP_STATUS_OK: 200,
    ERR_HTTP_STATUS_AUTH_FAILED: 401,
    ERR_HTTP_STATUS_NOT_FOUND: 404,
    ERR_HTTP_STATUS_NOT_ACCEPT: 406,
    ERR_HTTP_SERVER_ERROR: 500,
    /* 成功 */
    ERR_QS_API_SUCCESS: 20000,
    /* 数据错误 */
    ERR_DATA_SET_ERROR: 10001,
    ERR_DATA_TOKEN_NOT_VALID: 10002,
    ERR_DATA_OBJECT_NOT_EXIST: 10003,
    ERR_POST_TOKEN_INVALID: 10004,
    ERR_PARAMS_SET_ERROR: 10005,
    ERR_DATA_CHECK_ERROR: 10006,
    ERR_TOKEN_NOT_FOUND: 10007,
    ERR_SMS_LOGIN_TOKEN_INVALID: 10008,
    ERR_DINGDING_JSSDK_ERROR: 11000,
    /* 事件数据错误 */
    ERR_EVENT_BODY_ERROR: 12000,
    /* API错误 */
    ERR_API_DATA_SUBMIT_ERROR: 30001,
    /* 应用错误 */
    ERR_APP_OBJECT_NOT_EXIST: 40001,
    ERR_APP_CORPID_NOT_FOUND: 40002,
    ERR_DB_OBJECT_NOT_EXIST: 40003,
    ERR_APP_PLATFORM_ERROR: 40003,
    ERR_APP_SCAN_ERROR: 40005,
    /* HTTP调用错误 */
    ERR_HTTP_REQUEST_ERROR: 40001,
    /* HTTP=>API状态错误定义 */
    ERR_API_HTTP_BASE_ERROR: 50000,
    ERR_API_HTTP_SERVER_ERROR: 50500,
    ERR_API_HTTP_NOT_FOUND: 50404,
    ERR_SERVICE_ERROR: 80001 // 服务调用出错
};
//# sourceMappingURL=ExceptionCode.js.map