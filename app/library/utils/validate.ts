/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/7
 * Time: 18:01
 */

const Parameter = require("parameter");

export interface Validation {
    validate : (rules:ItemObject,toValidateObj:ItemObject) => any;
}


export const validator : Validation = new Parameter({
    // translate: function() {
    //     var args = Array.prototype.slice.call(arguments);
    //     // Assume there have I18n.t method for convert language.
    //     return I18n.t.apply(I18n, args);
    // }
});


