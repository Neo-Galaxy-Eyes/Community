<template>
    <div>
        <!-- 顶部导航栏 -->
        <nav class="navbar navbar-light">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <!-- nuxt匹配到路由以后，会自动添加类名nuxt-link-active，匹配到哪一个就动态给哪一个添加，不匹配的没有，包含关系的也有（除非使用exact） -->
                        <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
                    </li>
                    <template v-if="user">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/editor">
                                <i class="ion-compose"></i>&nbsp;New Post
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/settings">
                                <i class="ion-gear-a"></i>&nbsp;Settings
                            </nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/profile/132">
                                <img class="user-pic" :src="user.image" style="width:10px;height:10px;background-color:red">
                                {{user.username}}
                            </nuxt-link>
                        </li>
                    </template>

                    <template v-else>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>

        <!-- 子路由 -->
        <nuxt-child />

        <!-- 底部导航栏 -->
        <footer>
            <div class="container">
                <a href="/" class="logo-font">conduit</a>
                <span class="attribution">
                    An interactive learninig project form Thinkster.
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default{
    name:'layout',
    computed:{
        ...mapState(['user'])
    }
}
</script>

<style>

</style>