<template>
    <div class="list">
        <!-- header -->
        <header class="top-header fixed-header">
            <a class="icona" href="javascript:;" @click="goback" >
                    <img src="../assets/images/left.png"/>
            </a>
            <h3>男装专区</h3>
                
            <a class="iconb" href="shopcar.html">
                <img src="../assets/images/shopbar.png"/>
            </a>
        </header>
        <div class="contaniner">
		<section class="list">
			<figure><img src="../assets/images/list-ban01.png"/>{{$route.params}}</figure>
			<div class="search">
				<input type="search" placeholder="韩版卫衣" />
				<label><img src="../assets/images/list-search.png"/></label>
			</div>
			<nav>
				<ul>
					<li>
						<a href="#">
							<span>全部</span>
						</a>
					</li>
					<li class="list-active">
						<a href="#">
							<span>销量</span>
							<img src="../assets/images/up-red.png"/>
						</a>
					</li>
					<li>
						<a href="#">
							<span>价格</span>
						</a>
					</li>
					<li>
						<a href="#">
							<span>评价</span>
						</a>
					</li>
				</ul>
			</nav>
			<ul class="wall">
				<div class="wall-column">
				<div class="pic" v-for="i in listone" :key="i.id">
					<router-link active-class="list-router-active" to="./detail">
						<img :src="i.img"/>
						<p>{{i.name}}</p>
						<b>{{i.price}}</b><del>{{i.del}}</del>
					</router-link>
				</div>
			   </div>
			   <div class="wall-column">
				<div class="pic" v-for="j in listtwo" :key="j.id">
					<router-link active-class="list-router-active" to="./detail">
						<img :src="j.img"/>
						<p>{{j.name}}</p>
						<b>{{j.price}}</b><del>{{j.del}}</del>
					</router-link>
				</div>
				</div>
			</ul>
		</section>
	    </div>
    </div>
</template>
<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }    
    },
	data(){return{
		listone:[],
		listtwo:[]
	 }
	},
	mounted(){
		//请求数据
		let url = '/data/list.json';
		this.$http({
			url:url
		}).then((res)=>{
			this.listone = res.data.listone,
			this.listtwo = res.data.listtwo	
		})	
	}
}
</script>
<style>
/*商品列表*/
.contaniner .list{ width: 100%;}
.contaniner .list figure{ width: 100%; height:12em; overflow: hidden;}
.contaniner .list figure img{ width: 100%; min-height: 100%;}
.contaniner .list .search{ width: 100%; background-color: #fff;margin: 2% 0; padding:3% 5%; overflow: hidden;}
.contaniner .list .search input{ width: 80%; font-size: 1.25em; color: #666; border: none;}
.contaniner .list .search label{ width: 5%; float: right; margin-right: 10%;}
.contaniner .list .search label img{ width: 100%;}
.contaniner .list nav{ width: 100%;}
.contaniner .list nav ul{ width: 100%; background-color: #fff;margin: 2% 0;  overflow: hidden;}

.contaniner .list nav ul li{ float: left;padding: 3% 0; text-align: center; width: 25%;}
.contaniner .list nav ul li a{ display: block; width: 100%; color: #666;}
.contaniner .list nav ul li span{ font-size: 1.45em;}
.contaniner .list nav ul li img{ width: 5%;}
.contaniner .list nav ul .list-active a span{ color: #fc605a;}
.contaniner .list .wall{position: relative; display: block; width: 100%; overflow: hidden; margin: 2% 0; z-index: 0;}
.contaniner .list .wall-column {
    display: block;
    position: relative;
    width: 50%;
    float: left;
    padding: 0 2%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.contaniner .list .wall .pic {
    width: 100%;
    margin-bottom: 8%;
    float: left;
    background-color: #fff;
	padding-bottom: 3%;
	position:relative;
}
.contaniner .list .wall .pic a{
	width:100%;
	height: 100%;
	display: block;
}
.contaniner .list .wall .pic img{
	width: 100%
}

.contaniner .list .wall .pic p{ font-size: 1.45em; width: 90%; margin: 2% 5%; text-align: justify; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #333;}
.contaniner .list .wall .pic b{ color: #FC605A; font-size: 1.7em; font-weight: normal; margin-right: 4%; margin-left: 4%; }
.contaniner .list .wall .pic del{ color: #999; font-size: 1.169em; }
</style>

