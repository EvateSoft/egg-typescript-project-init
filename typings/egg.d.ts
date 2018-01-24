/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 18:31
 */

import HomeController from "../app/controller/home";
import IORedis from "ioredis";
import {Mongoose,Model} from "mongoose";

//
declare module 'egg' {

    export interface Application {
        name : string;
        redis : IORedis.Redis;
        mongoose : Mongoose;
        validation : (rules:ItemObject,resObj:ItemObject) => boolean;
    }

    export interface Context {

    }


    export interface EggAppConfig {
        [index:string] : any
    }

    export interface IController {
        home : HomeController;
    }

    export interface IService {

    }
}