/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/3
 * Time: 13:39
 */

import {Controller} from "egg";
import {ErrCode} from "../exception/ExceptionCode";
import {Context} from "egg";
import IORedis from "ioredis";

/**
 * 基类Controller
 */
export default class BaseController extends Controller {

    protected appContent:Context = null;
    protected appRedis: IORedis.Redis = null;


    public constructor(ctx:Context) {
        super(ctx);
        this.appContent = ctx;
        this.appRedis = this.app.redis;
    }

    /**
     * 验证提交请求的数据用
     * @type {any}
     */
    protected createRule : ItemObject = null;


    /**
     *
     * @param {ItemObject} data
     * @return {Promise<void>}
     */
    protected async respond(data:ItemObject) {
        this.appContent.body = {
            code : ErrCode.ERR_QS_API_SUCCESS,
            content : data
        };
        return true;
    }

    /**
     * 获得请求Body
     * @return {RequestArrayBody | RequestObjectBody}
     */
    protected getRequestBody() {
        return this.appContent.request.body;
    }


    /**
     * 获得请求Query集合
     * @return {any}
     */
    protected getRequestQueries() : ItemObject {
        return this.appContent.query;
    }


    /**
     * 获得某个请求query item
     * @param {string} item
     * @return {any}
     */
    protected getRequestQueryItem(item:string) : any {
        return this.appContent.query[item];
    }
}

