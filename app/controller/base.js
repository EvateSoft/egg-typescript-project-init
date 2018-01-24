"use strict";
/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/3
 * Time: 13:39
 */
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
const ExceptionCode_1 = require("../exception/ExceptionCode");
/**
 * 基类Controller
 */
class BaseController extends egg_1.Controller {
    constructor(ctx) {
        super(ctx);
        this.appContent = null;
        this.appRedis = null;
        /**
         * 验证提交请求的数据用
         * @type {any}
         */
        this.createRule = null;
        this.appContent = ctx;
        this.appRedis = this.app.redis;
    }
    /**
     *
     * @param {ItemObject} data
     * @return {Promise<void>}
     */
    async respond(data) {
        this.appContent.body = {
            code: ExceptionCode_1.ErrCode.ERR_QS_API_SUCCESS,
            content: data
        };
        return true;
    }
    /**
     * 获得请求Body
     * @return {RequestArrayBody | RequestObjectBody}
     */
    getRequestBody() {
        return this.appContent.request.body;
    }
    /**
     * 获得请求Query集合
     * @return {any}
     */
    getRequestQueries() {
        return this.appContent.query;
    }
    /**
     * 获得某个请求query item
     * @param {string} item
     * @return {any}
     */
    getRequestQueryItem(item) {
        return this.appContent.query[item];
    }
}
exports.default = BaseController;
//# sourceMappingURL=base.js.map