/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:44
 */

import BaseController from "./base";

export default class HomeController extends BaseController {

    /**
     * Index Home
     * @return {Promise<void>}
     */
    public async index() {
        console.log(this.config.env);
        this.respond({
            message:"hello egg.",
        });
    }

}