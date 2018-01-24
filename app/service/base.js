"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/3
 * Time: 16:47
 */
const egg_1 = require("egg");
/**
 * 所有服务的基类
 */
class BaseService extends egg_1.Service {
    constructor(ctx) {
        super(ctx);
    }
    /**
     *
     * @return {Context}
     */
    getAppContext() {
        return this.ctx;
    }
    /**
     *
     * @return {Application}
     */
    getApplication() {
        return this.app;
    }
    /**
     *
     * @return {Service}
     */
    getAppService() {
        return this.service;
    }
    /**
     *
     * @return {EggAppConfig}
     */
    getAppConfig() {
        return this.config;
    }
}
exports.default = BaseService;
//# sourceMappingURL=base.js.map