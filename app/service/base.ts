/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/3
 * Time: 16:47
 */
import {Context,Service,Application,IService,EggAppConfig} from "egg";


/**
 * 所有服务的基类
 */
export default class BaseService extends Service {
    constructor(ctx:Context) {
       super(ctx);
    }

    /**
     *
     * @return {Context}
     */
    protected getAppContext() : Context {
        return this.ctx;
    }

    /**
     *
     * @return {Application}
     */
    protected getApplication() : Application {
        return this.app;
    }

    /**
     *
     * @return {Service}
     */
    protected getAppService() : IService {
        return this.service;
    }

    /**
     *
     * @return {EggAppConfig}
     */
    protected getAppConfig() : EggAppConfig {
        return this.config;
    }

}