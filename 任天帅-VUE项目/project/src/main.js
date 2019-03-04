import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false
//全局暴露
import './assets/css/base.css'
import './assets/css/loaders.min.css'
import './assets/css/loading.css'
import './assets/css/style.css'
import './assets/js/jquery.min.js'
//引入axios
import axios from 'axios';
Vue.prototype.$http=axios;
// 路由钩子
/* Vue.beforeEach((to,from,next)=>{
    to
    next()
}) */
//loading组件
import loading from './components/loading'
Vue.use(loading) //把它注册到全局

// 配置axios拦截器
axios.interceptors.request.use(function (config) {
  // 发送请求成功时，拦截，做点事，config=请求时的配置
  // 显示loading
  vm.$data.bLoading=true;
  return config;
}, function (error) {
  return Promise.reject(error);
});
// 响应拦截
axios.interceptors.response.use(function (response) {
  //隐藏loading
  vm.$data.bLoading=false
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});
// 配置动画
import 'animate.css'; //全局暴露
//状态管理的引入
import store from './store'








let vm = new Vue({
  data:{
    //控制组件是否出来,将此指令放到组件的最底层
    bFoot:true,
    bLoading:true
  },
  router, //路由的搭建
  render: h => h(App)
}).$mount('#app')
