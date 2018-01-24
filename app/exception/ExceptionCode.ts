/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 10:50
 */

/** 数据设置错误 */

export const ErrCode  = {
    ERR_RET0_SUCCESS : 0,
    ERR_RET1_SUCCESS : 1,
    ERR_FUN_RET_SUCCESS : 0,

    ERR_HTTP_STATUS_OK : 200,     // HTTP STATUS成功状态

    ERR_HTTP_STATUS_AUTH_FAILED : 401,      // HTTP STATUS=401,用户授权失败
    ERR_HTTP_STATUS_NOT_FOUND  : 404,       // HTTP STATUS=404,找不到API接口
    ERR_HTTP_STATUS_NOT_ACCEPT : 406,       // HTTP STATUS=406,接口调用失败

    ERR_HTTP_SERVER_ERROR : 500,           // HTTP STATUS=500 服务错误

    /* 成功 */
    ERR_QS_API_SUCCESS  : 20000,  // 青鸽产品API返回成功

    /* 数据错误 */
    ERR_DATA_SET_ERROR : 10001,          // 数据设置错误
    ERR_DATA_TOKEN_NOT_VALID : 10002,    // TOKEN设置错误
    ERR_DATA_OBJECT_NOT_EXIST : 10003,   // 数据对象错误(null,undefined)
    ERR_POST_TOKEN_INVALID  : 10004,     // 请求TOKEN失败
    ERR_PARAMS_SET_ERROR : 10005,        // 参数设置错误
    ERR_DATA_CHECK_ERROR : 10006,        // 数据检查失败
    ERR_TOKEN_NOT_FOUND : 10007,        // 找不到Token
    ERR_SMS_LOGIN_TOKEN_INVALID : 10008,    // 短信登录TOKEN错误

    ERR_DINGDING_JSSDK_ERROR : 11000,    // dingding JSSDK API 错误


    /* 事件数据错误 */
    ERR_EVENT_BODY_ERROR : 12000,       // EVENT事件数据体格式错误

    /* API错误 */
    ERR_API_DATA_SUBMIT_ERROR : 30001,   // 提交的数据有误

    /* 应用错误 */
    ERR_APP_OBJECT_NOT_EXIST : 40001, // 对象设置
    ERR_APP_CORPID_NOT_FOUND : 40002, // 无法找到corpId
    ERR_DB_OBJECT_NOT_EXIST  : 40003, // 无法找到数据库对象

    ERR_APP_PLATFORM_ERROR   : 40003, // 登录平台错误
    ERR_APP_SCAN_ERROR : 40005, // 扫码错误

    /* HTTP调用错误 */
    ERR_HTTP_REQUEST_ERROR : 40001,  // HTTP请求错误

    /* HTTP=>API状态错误定义 */
    ERR_API_HTTP_BASE_ERROR   : 50000, //基本的错误
    ERR_API_HTTP_SERVER_ERROR : 50500, // 服务器错误
    ERR_API_HTTP_NOT_FOUND    : 50404, // 找不到资源


    ERR_SERVICE_ERROR    : 80001     // 服务调用出错
};
