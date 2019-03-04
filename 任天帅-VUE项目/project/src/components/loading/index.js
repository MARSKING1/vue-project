//vue.use(plugin) 要求plugin如果是对象，要有install方法,并传递Vue ,如果是函数，直接调用+传递
//通用组件 loading


import loading from './components/loading.vue';


export default {
  // key:value
  install:function(Vue){
    // console.log('install...',Vue);
    // Vue.component('componentname',componentvarname)
    // Vue.component('router-link',RouterLink)
    // Vue.component('router-view',RouterView)
    Vue.component('loading',loading);
  }
}

// export default (Vue)=>{}