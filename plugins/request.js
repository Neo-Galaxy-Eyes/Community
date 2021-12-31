
//这里面的部分相对于nuxt而言，是插件般的存在

import axios from 'axios'

export const request = axios.create({
    baseURL:'https://conduit.productionready.io'
})

//context是这里插件机制的上下文对象，这里用于获取store的state
export default ({ store }) => {

    request.interceptors.request.use(function (config) {
        const {user} = store.state
        if(user && user.token){
            config.headers.Authorization = `Token ${user.token}`
        }
        
        //返回config请求配置对象
        return config;
      }, function (error) {
        // 请求还没有发出，就失败了，走这里面的逻辑
        return Promise.reject(error);
    });
}

