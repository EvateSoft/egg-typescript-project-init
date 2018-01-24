/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:43
 */

import {Application} from "egg";

export = (app:Application) => {
    const {router,controller} = app;

    router.get("/",controller.home.index);
}