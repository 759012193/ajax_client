import axios from 'axios'

//  配置请求拦截器(request)
axios.interceptors.request.use(function (config) {
    // ...
    return config;
}, function (error) {
    // ...
    return Promise.reject(error);
});

//  配置响应拦截器(response)
axios.interceptors.response.use(function (response) {
    if(response.status === 200){
        return  Promise.resolve(response.data)
    }else {
        return  Promise.reject(response.data)
    }
}, function (error) {
    // ...
    return Promise.reject(error);
});


export default function ajax(url = '', params = {}, type = 'GET') {
    // 1. 返回promise
    return new Promise((resolve, reject)=>{
          // 1.0 变量
          let promise;

         // 1.1 判断请求的类型
         if(type.toUpperCase() === 'GET'){ // get请求
             params['plan'] = randomCode(20);
             promise = axios({
                 url,
                 params
             })
         }else if(type.toUpperCase() === 'POST'){ // post请求
             promise = axios({
                 method: 'post',
                 url,
                 data: params
             })
         }

         // 1.2 处理结果并返回
        promise.then((response)=>{
            resolve(response);
        }).catch((error)=>{
            reject(error);
        });
    });
}

/**
 * 生成一个指定长度的随机数
 * @param length
 */
function randomCode(length) {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let result = '';
    for(let i=0; i<length; i++){
        let index = Math.ceil(Math.random() * 9);
        result += chars[index];
    }
    return result;
}
