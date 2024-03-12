import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)
import home from '../components/HomePage.vue'

const routes=new VueRouter[
    {
        path:'/',
        name:home,
        components:HomePage
    }
]
const router=new VueRouter({
    mode:history,
    router
})
export default router;