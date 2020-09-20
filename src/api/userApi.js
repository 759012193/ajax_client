import ajax from './index'
import {saveObj, removeObj, getObj} from './../tools/cache-tool'
import config from './../config/config'

// 1. 获取短信验证码
export const  getPhoneCode = (phone)=>ajax('/web/user/phone_code', {phone});

// 2. 注册新会员
export const  regNewUser = (user_name, user_password, user_phone, phone_code)=>ajax('/web/user/reg', {user_name, user_password, user_phone, phone_code}, 'POST');

// 3. 登录
export const  loginUser = (user_phone, user_password)=>ajax('/web/user/login', {user_phone, user_password}, 'POST');

/*
 4. 保存用户登录的信息
*/
export const saveUser = (userObj)=>{
    saveObj(config.PC_CLIENT_KEY, userObj);
};

/*
 5. 删除本地存储的登录信息
*/
export const removeUser = ()=>{
    removeObj(config.PC_CLIENT_KEY);
};

/*
  6. 获取用户信息
 */
export const getUser = ()=>{
    return getObj(config.PC_CLIENT_KEY);
};

/*
  7. 存储登录信息到cookie
*/
export const setCookie = (c_name, c_pwd, exdays)=>{
    let exDate = new Date();
    exDate.setTime(exDate.getTime() + exdays * 24 * 60 * 60 * 1000); // 保存的天数
    // 存储
    window.document.cookie = `user_phone=${c_name};path=/;expires=${exDate.toUTCString()}`;
    window.document.cookie = `user_password=${c_pwd};path=/;expires=${exDate.toUTCString()}`;
};


/*
  8. 读取cookie中的登录信息
*/
export const getCookie = ()=>{
    console.log(document.cookie);
    if(document.cookie.length > 0){
       let data = {};
       let arr = document.cookie.split('; ');
       for(let i=0; i<arr.length; i++){
           let arr2 = arr[i].split('=');
           // 判断
           if(arr2[0] === 'user_phone'){
               data["user_phone"] = arr2[1];
           }else if(arr2[0] === 'user_password'){
               data["user_password"] = arr2[1];
           }
       }
       return data;
    }
};

/*
  9. 退出登录
*/
export const  checkLogout = ()=>ajax('/web/user/logout');

/*
  10. 手机验证码登录
*/
export const  phoneCodeVerify = (user_phone, phone_code)=>ajax('/web/user/verify_code', {user_phone, phone_code}, 'POST');

/*
 11. 重置密码
*/
export const  resetPassword = (user_phone, user_password)=>ajax('/web/user/reset_pwd', {user_phone, user_password}, 'POST');

/*
  12. 获取当前用户收藏的资源
*/
export const  getUserResource = (user_id)=>ajax('/web/user/my_resource', {user_id});

/*
 13. 收藏和取消收藏
*/
export const  favUserResource = (user_id, resource_id)=>ajax('/web/user/fav_resource', {user_id, resource_id}, 'POST');


/*
 14. 提供给外界判断是否登录的函数
*/
export const isLogin = ()=>{
   let userObj =  getObj(config.PC_CLIENT_KEY);
   return !!userObj.token
};

/*
  15. 判断用户是否已经购买该资源
*/
export const  isUserBuyResource = (user_id, resource_id)=>ajax('/web/user/is_buy_resource', {user_id, resource_id}, 'POST');


/*
  16. 用户购买该资源
*/
export const  userBuyResource = (token, user_id, resource_id, resource_price, time)=>ajax('/web/user/buy_resource', {token, user_id, resource_id, resource_price, time}, 'POST');


/*
 17.获取用户信息
*/
export const  getUserInfo = (user_id)=>ajax('/web/user/info', {user_id});

/*
 18.用户更新头像
*/
export const  updateUserIcon = (user_id, icon_url)=>ajax('/web/user/update_icon', {user_id, icon_url}, 'POST');

/*
 19.用户更新签名
*/
export const  updateUserIntro = (user_id, user_intro)=>ajax('/web/user/update_intro', {user_id, user_intro}, 'POST');


/*
 20.获取用户购买的资源
*/
export const  getUserBuyResource = (page_num, page_size, user_id)=>ajax('/web/user/user_buy_resource', {page_num, page_size, user_id}, 'POST');