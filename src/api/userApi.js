import ajax from './index'
/*import {saveObj, removeObj, getObj} from "../tools/cache-tool";
import config from './../config/config'*/

// 1. 获取短信验证码
export const getPhoneCode = (phone)=>ajax('/web/user/phone_code', {phone});

// 2. 注册新会员
export const regNewUser = (user_name, user_password, user_phone, phone_code)=>ajax('/web/user/reg', {user_name, user_password, user_phone, phone_code}, 'post');
