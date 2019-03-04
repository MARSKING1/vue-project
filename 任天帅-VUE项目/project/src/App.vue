<template>
  <div id="app">
    <loading v-show="$root.$data.bLoading"></loading>
    <!-- 利用transition做动画 -->
    <transition   
      enter-active-class="animated fadeIn"
     >
      <router-view></router-view> 
    </transition>
    <footbar v-show="$root.$data.bFoot"></footbar>
  </div>
</template>
<script>
//引入
import home from './components/home.vue'
import footbar from './components/footbar.vue'
import assort from './components/assort.vue'
import shopcar from './components/shopcar.vue'
import self from './components/self.vue'
import login from './components/login.vue'
import sign from './components/sign.vue'
import list from './components/list.vue'
import detail from './components/detail.vue'
import error from './components/error.vue'

export default {
  name:'app',
  components:{
    home,footbar//,assort,shopcar,self,login,sign,list,detail,error
  },
  methods:{
    checkRouteChange(to){   //这个函数会接收两个参数，一个新值，一个老值
       let path = to.path
       //然后开始做判断，是非用到footbar组件
      if(/list|login|sign|detail/.test(path)){
        this.$root.$data.bFoot = false
      }
      if(/home|assort|shopcar|self/.test(path)){
          this.$root.$data.bFoot = true
      }
    }
  },
  //路由侦听
  watch:{
    $route:{
      deep:true, //深度观测
      immediate:true, // watch一上来就检测
      handler:'checkRouteChange' //处理路由变化
    }
  }
}
</script>


