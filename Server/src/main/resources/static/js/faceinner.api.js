/**
 * api 接口地址
 *
 *
 * @type {{}}
 */




var api = {

    /* 忘记密码 */
    "user.forget": '/api/user/forget',

    /* 注册 */
    "user.register": '/api/user/register',

    /* 修改密码 */
    "user.changepass": '/api/user/changepass',

    /* 登录接口 */
    "user.login": '/api/login',




    /* 登录用户的信息 */
    "user.login.info": '/api/user/login/info',

    /* 注销 */
    "user.loginout": '/api/user/loginout',


    /* 发布秘密 */
    "secret.publish": '/api/secret/publish',
    /* 附近秘密 */
    "secret.near": '/api/secret/near',


    /* 用户设备 */
    "user.device": '/api/user/device/',
    "user.device.validate": '/api/user/device/validate',
    "user.device.mapping": '/api/user/device/mapping/',





};


/**
 * 对外暴露接口
 */
define([], function () {
    return api;

});