<template>
    <section class="shop">
        <h3>
            <a href="javascript:;" class="hd">
                服装
                <span><img src="../assets/images/right.png"/></span>
            </a>
        </h3>
        <dl>
            <dd v-for="item in homeshop" :key="item.id"
            >
                <router-link :to='{name : "list" , params:{ id : item.id } }' class="god">
                    <img :src="item.homeImg" />
                    <b>{{item.homeName}}</b>
                </router-link>
            </dd>
        </dl>
    </section>
</template>
<style>
 .shop{ width: 100%; margin-top: 5%;margin-bottom: 21%}
 .shop h3{ width: 90%; font-size: 1.4875em; padding:3% 5%;background-color: #fff; overflow: hidden;}
 .shop h3 span{ float: right; width:4%; display: block; }
 .shop h3 span img{ width: 100%; display: block; }
 .shop h3 .hd{ width: 100%;color: #45c018; display: block;}
 .shop dl{ margin: 2% 0; width: 100%; overflow: hidden;}
 .shop dl dd{  width: 44%; min-height: 11em; max-height: 15em;  overflow: hidden; margin: 0 3%; float: left; position: relative;margin-bottom:1%}
 .shop dl dd .god{  width: 100%; display: block; height: 100%;}
 .shop dl dd img{  width: 100%;height: 100%; display: block;}
 .shop dl dd b{position: absolute; bottom: 0; left: 0; display: block; width: 80%; padding: 5% 10%; color: #fff; font-weight: normal; font-size: 1.16em; background-color: rgba(0,0,0,0.5)}
</style>
<script>
// 这里homeshop通过props接收来自home传过来的数据
export default {
    props:['homeshop','dataName'],
}
</script>


