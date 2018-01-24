/**
 * 系统定义全局变量
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/30
 * Time: 10:39
 */

export namespace GlobalVariables
{
    export const NO = 0;
    export const YES = 1;

    export const FAILED = 0;
    export const SUCCESS = 1;
    export const HTTP_SUCCESS = 200;
    export const APP_SUCESS = 20000;


    /* 表示关闭，结束... */
    export const CLOSE = 0;
    /* 表示打开、启用... */
    export const OPEN = 1;

    /* 表示删除 */
    export const DELETE = 9;

    /* 特殊标志 */
    export const SPECIAL_9 = 9;
    export const SPECIAL_99 = 99;

    /* 表示隐藏 */
    export const HIDE = 0;
    /* 表示显示 */
    export const SHOW = 1;

    /* 禁用 */
    export const DISABLE = 0;
    /* 启用 */
    export const ENABLE = 1;

    /* 下标 */
    export const OFFSET = 0;

    /* MD5签名 */
    export const SIGN_MD5 = 'MD5';
    /* SHA1签名 */
    export const SIGN_SHA1 = "SHA1";

    /* 升序排序*/
    export const SORT_ASCENDING = "ascending";
    /* 倒序排序 */
    export const SORT_DESCENDING = "descending";


    export const SORT_MONGOOSE_ASCENDING = 1;       //  mongoose ascending order.
    export const SORT_MONGOOSE_DESCENDING = -1;     //  mongoose descending order


    export const STS_CREATED       = 'created';    // 状态，创建成功
    export const STS_UPDATED       = 'updated';    // 状态，更新成功
    export const STS_DELETED       = 'deleted';    // 状态，删除成功
    export const STS_SEND          = 'send';       // 状态，发送成功
    export const STS_FAILED        = 'failed';     // 状态，操作失败

    export const SEX_MALE          = 1;            // 性别男,微信中以1表示
    export const SEX_FEMALE        = 2;            // 性别女，微信中以2表示



    export const ITEMKEY_HOURS        = "hours";            // 时间间隔单位：小时
    export const ITEMKEY_DAY        = "day";            // 时间间隔单位：天
    export const ITEMKEY_MONTH        = "month";            // 时间间隔单位：月

    export const ITEM_SITEVISITCNT         = "siteVisitCnt";            // 获取内容，网点浏览量
    export const ITEM_SITEVISTORCNT        = "siteVistorCnt";            // 获取内容，网点访问数
    export const ITEM_SITENEWVISTORCNT     = "siteNewVistorCnt";            // 获取内容，网点的新访客数
    export const ITEM_PRODUCTVISIT         = "productVisit";            // 获取内容，商品浏览量
    export const ITEM_PRODUCTVISTOR        = "productVistor";            // 获取内容，商品访客数
    export const ITEM_ORDERCNT             = "orderCnt";            // 获取内容，订单量
    export const ITEM_ORDERPAYCNT         = "orderPayCnt";            // 获取内容，付款订单量



    export const INCLUDE_ALL        = "all";            // 包含的数据类型: all,site,product,order
    export const INCLUDE_SITE        = "site";            // 包含的数据类型: all,site,product,order
    export const INCLUDE_PRODUCT        = "product";            // 包含的数据类型: all,site,product,order
    export const INCLUDE_ORDER        = "order";            // 包含的数据类型: all,site,product,order

}
