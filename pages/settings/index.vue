<template>
    <div>
        <div class="setting-page">
            <div class="container page">
                <div class="row">

                    <div class="col-md-6 offset-md-3 col-xs-12">
                        <h1 class="text-xs-center">Your Settings</h1>
                        
                        <form>
                            <fieldset>
                                <fieldset class="form-group">
                                    <input type="form-control" placeholder="URL of profile picture">
                                </fieldset>
                                <fieldset class="form-group">
                                    <input type="form-control form-control-lg" placeholder="Your Name">
                                </fieldset>
                                <fieldset class="form-group">
                                    <textarea type="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                                </fieldset>
                                <fieldset class="form-group">
                                    <input type="form-control form-control-lg" placeholder="Email">
                                </fieldset>
                                <fieldset class="form-group">
                                    <input type="form-control form-control-lg" placeholder="Password">
                                </fieldset>
                                <button class="btn btn-lg btn-primary pull-xs-right">
                                    Update Settings
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
    middleware:'authenticated',
    name:'settings'
}
</script>

<style>

</style>