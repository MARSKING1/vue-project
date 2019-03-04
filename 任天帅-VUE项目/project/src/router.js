import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//引入
import home from './components/home.vue'
import assort from './components/assort.vue'
import shopcar from './components/shopcar.vue'
import self from './components/self.vue'
import error from './components/error.vue'
import login from './components/login.vue'
import sign from './components/sign.vue'
import list from './components/list.vue'
import detail from './components/detail.vue'

let routes = [{      //路由的配置
    name:'home',
    path: '/home',
    component: home
  },
  {
    name:'assort',
    path: '/assort',
    component: assort
  },
  {
    name:'shopcar',
    path: '/shopcar',
    component: shopcar
  },
  {
    name:'self',
    path: '/self',
    component: self
  },
  {
    name:'login',
    path: '/login',
    component: login
  },
  {
    name:'sign',
    path: '/sign',
    component: sign
  },
  {
    name : "list",
    path: '/list',
    component: list,
  },
  {
    name:'detail',
    path: '/detail',
    component: detail
  },
  {
    path: '/',
    component: home
  },
  {
    name:'error',
    path: '*',
    component: error
  },

]
export default new Router({  //实例化路由对象的创建
  routes,
  //滚动行为的控制：
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0} //对于所有的路由导航，简单地让页面滚动到顶部
  }
})