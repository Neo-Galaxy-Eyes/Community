
const cookieparser = process.server ? require('cookieparser') : undefined

//确保服务端渲染期间运行的都是同一个实例（每次都会调用函数来生成对象）而不发生数据冲突
export const state = () => {
    return {
        //当前用户的登录状态
        user:null
    }
}

export const mutations = {
    setUser(state,user){
        state.user = user
    }
}

export const actions = {
    //这个是nuxt里面的一个特殊action方法，会在服务端渲染期间自动调用
    //用于初始化容器数据，传递数据给客户端使用
    nuxtServerInit ({ commit }, { req }) {
        let user = null
        if (req.headers.cookie) {
        //cookie字符串转js对象，可能会因为格式不对而报错，所以做try处理 
        const parsed = cookieparser.parse(req.headers.cookie)
          try {
            user = JSON.parse (parsed.user)
          } catch (err) {
            // No valid cookie found
            console.log('多半是对象格式不对',err)
          }
        }
        //提交mutation
        commit('setUser', user)
    }
}