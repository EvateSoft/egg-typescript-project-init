/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:44
 */

import BaseController from "./base";
import {Photo} from "../model/mysql/entity/Photo";

export default class HomeController extends BaseController {

    /**
     * Index Home
     * @return {Promise<void>}
     */
    public async index() {
        const photo = new Photo();
        photo.name = 'P1';
        photo.fileName = 'p1.png';
        photo.isPublished = true;
        photo.views = 0;
        await this.app.qinggerTypeorm.manager.save(photo);
        this.respond({
            message:"hello egg.",
        });
    }

}