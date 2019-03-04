<template>
<div class="shoocar">
	<header class="page-header">
		<h3>购物车</h3>
	</header>
	
	<div class="contaniner fixed-contb">
		<section class="shopcar">
			<div class="shopcar-checkbox">
				<label for="shopcar" onselectstart="return false"></label>
				<input type="checkbox" id="shopcar"/>
			</div>
			
			<figure><img :src="shopcar.aImg"/></figure>
			<dl>
				<dt>{{shopcar.name}}</dt>
				<dd>{{shopcar.color}}</dd>
				<dd>{{shopcar.distance}}</dd>
				<div class="add">
					<span>-</span>
					<input type="text" value="3" />
					<span>+</span>
				</div>
				<h3>{{shopcar.price}}</h3>
				<small><img :src="shopcar.bImg"/></small>
			</dl>
		</section>
		<!--去结算-->
		<div style="margin-bottom: 16%;"></div>	
	</div>
</div>
</template>
<script>
import '../assets/js/jquery.min.js'
export default{
    mounted(){
            $(".shopcar-checkbox label").on('touchstart',function(){
        if($(this).hasClass('shopcar-checkd')){
            $(".shopcar-checkbox label").removeClass("shopcar-checkd")
        }else{
            $(".shopcar-checkbox label").addClass("shopcar-checkd")
        }
        }) 
	},
	data(){
		return {
			shopcar:[],
	}},
	mounted(){
		//请求数据
		let url = '/data/shopcar.json';
		this.$http({
			url:url
		}).then((res)=>{
			this.shopcar = res.data	
		})
	}
}
</script>

