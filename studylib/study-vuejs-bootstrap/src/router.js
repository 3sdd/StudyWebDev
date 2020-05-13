import Vue from "vue"
import Router from "vue-router"
import Home from "./components/Home.vue"
import PageA from "./components/PageA.vue"
import PageB from "./components/PageB.vue"
import PageC from "./components/PageC.vue"



Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            name:"home",
            component:Home
        },{
            path:"/pagea",
            name:"Page A",
            component:PageA
        },{
            path:"/pageb",
            name:"Page B",
            component:PageB
        },{
            path:"/pagec",
            name:"Page C",
            component:PageC
        },
    ]
})