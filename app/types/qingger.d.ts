/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/21
 * Time: 12:56
 */

/**
 * 错误消息定义
 */
declare interface ExceptionErrorInfo {
    code : number;
    message : string;
}

/**
 * 青鸽产品API接口返回列表数组
 */
declare interface HttpAPIRetItemList<T=any> {
    code : number;

    // 有些接口返回的是content,而有些则返回list
    content? : Array<T>;
    list?   : Array<T>;
    data?   : Array<T>;

    // 出错情况下,一般接口返回message,有些接口可能返回msg
    message? : string
    msg?    : string
}


/**
 * 青鸽产品API接口返回对象数据
 */
declare interface HttpAPIRetItem<T=ItemObject> {
    code : number;

    // 有些接口返回的是content,有些则返回data
    content? : T;
    data?   : T;

    // 出错情况下,一般接口返回message,有些接口可能返回msg
    message? : string
    msg?    : string
}

/**
 *  一般函数返回的对象数据
 */
declare interface FunRetItem<T=ItemObject> {
    code : number;
    content? : T;
    message? : string
}


/**
 * 带有Content.Result字段的成功消息
 */
declare interface HttpAPIRetResultSuccess<T=any> {
   result : T
}


/**
 * 存储的Token结构
 */
export interface TokenInfo {
    token : string;
    refreshTime : number
}


