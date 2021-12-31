<template>
    <div>
        <div class="settings-page">
            <div class="container page">
                <div class="row">

                    <div class="col-md-10 offset-md-1 col-xs-12">
                        <form>
                            <fieldset>
                                <fieldset class="form-group">
                                    <input type="text" class="form-control form-control-lg" placeholder="Article Title">
                                </fieldset>
                                <fieldset class="form-group">
                                    <input type="text" class="form-control" placeholder="What's this article about?">
                                </fieldset>
                                <fieldset class="form-group">
                                    <textarea type="text" class="form-control" rows="8" placeholder="Write your article"></textarea>
                                </fieldset>
                                <fieldset class="form-group">
                                    <input type="text" class="form-control" placeholder="Enter tags">
                                    <div class="tag-list"></div>
                                </fieldset>
                                <button class="btn btn-lg pull-xs-right btn-primary" type="button">
                                    Publish Article
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    //在路由匹配组件之前，会先执行这里的中间件进行处理 服务端和客户端都可以用此拦截
    middleware:'authenticated',
    name:'editor'
}
</script>

<style>

</style>