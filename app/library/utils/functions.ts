/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2017/11/21
 * Time: 22:38
 */
const _  = require("lodash");
const hasValue = require("has-value");

/**
 * 判断是否为空
 * @param val
 * @param {string} props
 * @returns {boolean}
 */
export function empty(val:any, props:string=null) :boolean {
   if (!val)
        return true;

   if (_.isNumber(val) || _.isString(val) || _.isBoolean(val)) {
        return !val;
   }


   return !hasValue(val, props);
}

/**
 * 判断变量是否被设置
 * @param val
 * @param {string} props
 */
export function isset(val:any, props:string=null) {
    if (!val)
        return false;
    return hasValue(val,props);
}

// 更新商品主图的情况下，色号默认为空
/**
 * 将字符串数字和数字转换成timestamp,如果是秒的，则需要扩1000倍，转成毫秒。
 * @param variable
 * @return {any}
 */
export function convertToTSNumber(variable:any) {
    let tsVar = variable;
    if(tsVar.toString().match(/^\d+$/)) {
        return tsVar<9999999999 ? tsVar*1000 : tsVar;
    }
    return tsVar;
}


/**
 * 判断元素是否在数组中存在
 * @param {T} search
 * @param {Array<T>} arr
 * @param {number} index
 * @return {boolean}
 */
export function in_array<T=any>(search:T,arr:Array<T>,index:number=0){
    if(_.isArray(arr)) {
        return arr.includes(search,index);
    } else {
        return false;
    }
}


/**
 * 生成初始数组
 * @param {number} index
 * @return {any[]}
 */
export function generate_index_array(index:number) {
    let ret = new Array(index);
    for(let i=0;i<index;i++) {
        ret[i] = i;
    }
    return ret;
}


export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

/**
 * 获得时间戳，以秒为单位
 * @param args
 * @return {number}
 */
export function getSecTimestamp(...args) :number {
    return Date.parse(new Date(...args))/1000;
}

/**
 * timeout函数的Promise封装
 * @param ms
 * @return {Promise<any>}
 */
export function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * sleep函数封装
 * @param ts
 * @param fn
 * @param args
 * @return {Promise<any>}
 */
export async function sleep(ts,fn, ...args) {
    await timeout(ts);
    return fn(...args);
}