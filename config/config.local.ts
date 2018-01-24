/**
 * Created by Qingger Corp.
 * User: jsspf
 * Date: 2018/1/24
 * Time: 19:20
 */

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