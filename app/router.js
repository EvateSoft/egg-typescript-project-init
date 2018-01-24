"use strict";
/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:43
 */
module.exports = (app) => {
    const { router, controller } = app;
    router.get("/", controller.home.index);
};
//# sourceMappingURL=router.js.map