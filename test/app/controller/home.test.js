"use strict";
/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:52
 */
Object.defineProperty(exports, "__esModule", { value: true });
const { app, assert } = require("egg-mock/bootstrap");
describe("test/app/controller/home.test.js", function () {
    let appIns = app;
    it("should assert", async function () {
        const pkg = require("../../../package.json");
        assert(appIns.config.keys.startsWith(pkg.name));
    });
    it("should GET /", async function () {
        return appIns.httpRequest()
            .get('/')
            .expect({ "code": 20000, "content": { "message": "hello egg." } })
            .expect(200);
    });
});
//# sourceMappingURL=home.test.js.map