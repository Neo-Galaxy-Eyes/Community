
module.exports = {
    router: {
        linkActiveClass: 'active',
        extendRoutes(routes, resolve) {
            // nuxt会自动生成默认路由表，无法通过设置去更改，所以需要用些暴力解法去实现清除
            routes.splice(0)
            //这里的实现，是基于思考nuxt里面有没有像vue router那样的设置，而发掘出来的
            routes.push(...[
                {
                    path:'/',
                    component:resolve(__dirname,'pages/layout/'),
                    children:[
                        {
                            path:'/drawing', //这里留空，表示默认子路由
                            name:'drawing',
                            component:resolve(__dirname,'pages/drawing/')
                        },
                        {
                            path:'', //这里留空，表示默认子路由
                            name:'home',
                            component:resolve(__dirname,'pages/home/')
                        },
                        {
                            path:'/login', 
                            name:'login',
                            component:resolve(__dirname,'pages/login/')
                        },
                        {
                            path:'/register', 
                            name:'register',
                            component:resolve(__dirname,'pages/login/')
                        },
                        //这里因为可能是不同用户的个人资料，所以需要采用动态路由
                        {
                            path:'/profile/:username', 
                            name:'profile',
                            component:resolve(__dirname,'pages/profile/')
                        },
                        {
                            path:'/settings', 
                            name:'settings',
                            component:resolve(__dirname,'pages/settings/')
                        },
                        {
                            path:'/editor', 
                            name:'editor',
                            component:resolve(__dirname,'pages/editor/')
                        },
                        {
                            path:'/article/:slug', 
                            name:'article',
                            component:resolve(__dirname,'pages/article/')
                        },
                    ]
                }
            ])
        }
    },

    //这里注册插件，用于触发nuxt的插件机制
    plugins:[
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
  }