<template>
  <div class="home">
      <headbar></headbar>
      <slider :slide="slide" :dataName="'slide'"></slider>
      <!-- 第一个homeshop是props，第二个是子组件，数据名是homeshop -->
      <homeshop :homeshop="homeshop" :dataName = "'homeshop'"></homeshop>
  </div>
</template>
<script>
//引用

import headbar from './headbar.vue'
import slider from "./slider.vue";
import homeshop from "./homeshop.vue";

export default {
  components: {
    slider,
    homeshop,headbar
  },
  data(){
    return{
      homeshop:[],  //这里存数据
      slide:[]
   }
  },
  mounted(){
    //显示Loading
      this.$root.$data.bLoading = true;
    //在这里请求数据
    let url = '/data/home.json';
    this.$http({
      
      url:url,
      
      /*  这里是用note请求数据的方法
      url:"http://localhost:3000/index"
      params:{start:0,count:0}  从哪里开始要数据，要几条*/  
    }).then(
      //获取数据,然后把数据发给homeshop这个子组件，因此要给子组件加props
      //res=>this.home = this.res.data 
      (res)=>{
        //隐藏loading
        setTimeout(()=>{
        this.$root.$data.bLoading = false;
        this.homeshop = res.data.homeshop
        this.slide = res.data.slide
        },300)

      }
    )
  }
};
</script>
