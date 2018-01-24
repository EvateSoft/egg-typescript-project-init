"use strict";
/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:44
 */
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class HomeController extends base_1.default {
    /**
     * Index Home
     * @return {Promise<void>}
     */
    async index() {
        console.log(this.config.env);
        this.respond({
            message: "hello egg.",
        });
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.js.map