/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/16
 * Time: 14:14
 */

const _ = require('lodash');
const Uri = require("jsuri");
const collect = require("collect.js");
const qs = require("qs");
import {empty} from "./functions";


export default {

    /**
     * 根据URL获得Host
     * @param {string} url
     * @param {boolean} withProtocol
     * @returns {string}
     */
    getUrlHost: function (url: string="", withProtocol = true): string {
        let jsUrlObj = new Uri(url);
        let port = jsUrlObj.port();
        let host = jsUrlObj.host()  + ((port == 80 || port == 443) ? "" : ":"+port)
        return withProtocol ? jsUrlObj.protocol()   + "://" + host : host;
    },



    /**
     * setUrlQueryParams('http://abc.com',{a:1,b:2}); ==> http://abc.com/?a=1&b=2
     * 设置URL的Params
     * @param {string} url
     * @param params
     * @returns {string}
     */
    setUrlQueryParams: function (url: string, params: ItemObject): string {
        let jsUrlObj = new Uri(url);
        if (!empty(params)) {
            collect(params).each(function (item, key) {
                if (jsUrlObj.hasQueryParam(key)) {
                    jsUrlObj.replaceQueryParam(key, item);
                } else {
                    jsUrlObj.addQueryParam(key, item);
                }
            })
        }
        return jsUrlObj.toString();
    },


    /**
     * 将URL中的query解析成对象字面量格式
     * @param {string} url
     * @returns {Object}
     */
    getURLQueryAllParams : function (url:string) : Object {
        // 将字符串头一个?替换掉
        let queryString = _.replace(new Uri(url).query(),/^\?/,'');
        return qs.parse(queryString);
    },


    /**
     * URL上是否带有queryItem参数
     * @param {string} queryItem
     * @param {string} url
     * @returns {boolean}
     */
    hasQueryItem : function (queryItem:string,url:string="") {
        url = !!url ? url : this.getCurrentUrl();
        return new Uri(url).hasQueryParam(queryItem);
    },

    /**
     * 获得某一个query参数的值
     * @param {string} queryItem
     * @param {string} url
     * @returns {string}
     */
    getURLQueryItem : function (queryItem:string,url:string="") : string {
        url = url ? url : this.getCurrentUrl();
        return new Uri(url).getQueryParamValue(queryItem);
    }
}
