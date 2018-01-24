/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:29
 */

import {Application} from "egg";
const path = require("path");

module.exports = (appInfo:Application) => {
   return {
       keys : appInfo.name + '_1514950179057_XXX',

       /**
        * 日志记录配置
        * @see https://www.npmjs.com/package/egg-logger
        */
       logger : {
           dir : path.join(appInfo.baseDir,'logs'),
       },

   }
};