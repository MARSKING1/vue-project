<template>
    <swipe class="vue-swipe" autoplay="3000" :showIndicators="showIndicators">
        <swipe-item class="swiper-slide" v-for="item in slide" :key="item.id">
            <a href="javascript:;">
                <img :src="item.img"/>
            </a>
        </swipe-item>
    </swipe>
</template>
<script> 
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
    data(){
        return{
            'showIndicators':false
        }
    },
    components:{
        'swipe':Swipe,
        'swipe-item':SwipeItem
    },
    props:["slide","slide"]
}
</script>
<style>
.vue-swipe{
  height: 200px;
  font-size: 30px;
  text-align: center;
}
</style>

