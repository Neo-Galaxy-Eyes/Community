
export default function({store,redirect}){
    //TODO 路由跳转
    if(store.state.user){
        return redirect('/')
    }
}