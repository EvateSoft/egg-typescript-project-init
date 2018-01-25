/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 19:20
 */

const path = require('path');

exports.cluster = {
    listen : {
        port : 7001
    }
};

/**
 * mongoose配置
 * @type {{}}
 */
exports.mongoose = {
    url : 'mongodb://developer:qN5vdz4KXyxrCG@61.160.245.8:27017/test',
    options : {useMongoClient : true}
};

/**
 * 日志记录配置
 * @see https://www.npmjs.com/package/egg-logger
 */
exports.logger = {
    level : 'DEBUG'
};

exports.redis = {
    client: {
        port: 6379,          // Redis port
        host: '127.0.0.1',   // Redis host
        // password: 'auth',
        password: null,
        db: 0,
    },
};


exports.cors = {
    origin: '*',  // {string|Function}
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'  // {string|Array}
};

exports.security = {
    // csrf防范
    csrf : { enable : false }
    // domainWhiteList: [ 'http://localhost:8010','http://localhost:8012'],
};

/**
 * 数据库配置
 * @type {ItemObject}
 */
exports.qinggerTypeorm = {
    type : 'mysql',
    host : "61.160.245.8",
    port : 33020,
    username : 'evu_shipfi',
    password : '4WPdXE2v',
    database : 'test',
    // Setting synchronize makes sure your entities will be synced with the database, every time you run the application.
    synchronize: true,
    logging: true,

    entities : [
        // If you are executing your .js file then try to specify path to .js files instead of .ts
        "app/model/mysql/entity/**/*.js"
        // path.resolve(__dirname,"/app/model/mysql/entity/**/*.ts")
    ],
    migrations : [
        // If you are executing your .js file then try to specify path to .js files instead of .ts
        "app/model/mysql/migration/**/*.js"
        // path.resolve(__dirname,"/app/model/mysql/migration/**/*.ts")
    ],
    subscribers : [
        // If you are executing your .js file then try to specify path to .js files instead of .ts
        "app/model/mysql/subscriber/**/*.js"
        // path.resolve(__dirname,"/app/model/mysql/subscriber/**/*.ts")
    ],
    "cli": {
        "entitiesDir": "app/model/mysql/entity",
        "migrationsDir": "app/model/mysql/migration",
        "subscribersDir": "app/model/mysql/subscriber"
    }
};