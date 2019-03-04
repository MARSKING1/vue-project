<template>
    <div class="assort">
	<header class="page-header fixed-header">
		<input type="search"  /> 
		<span>
			<img src="../assets/images/serach.png"/>
		</span>
	</header>
	
	<div class="contaniner fixed-cont">
		<aside class="assort"> 
			<ul>
				<li v-for="item in assort" :key="item.id">
					<img :src="item.aImage"/>
					<span>{{item.aName}}</span>
				</li>
			</ul>
		</aside>
		
		<section class="assort-cont">
			<figure>
				<a href="#">
					<img src="../assets/images/classify-ph01.png"/>
				</a>
			</figure>
			<dl >
				<dt>宝宝营养</dt>
				<dd v-for="i in assortone" :key="i.id">
					<a href="#">
						<img :src="i.bImage"/>
						<p>{{i.bName}}</p>
					</a>
				</dd>
			</dl>
			<dl> 
				<dt>妈妈专区</dt>
				<dd v-for="s in assortone" :key="s.id">
					<a href="#">
						<img :src="s.bImage"/>
						<p>{{s.bName}}</p>
					</a>
				</dd>
			</dl>
		</section>
	</div>
    </div>
</template>
<style>
body{
	background: #fff;
}
</style>
<script>
export default {
	data(){
		return {
			assort:[],
			assortone:[],
			assorttwo:[],
	}},
	mounted(){
		//请求数据
		let url = '/data/assort.json';
		this.$http({
			url:url
		}).then((res)=>{
			this.$root.$data.bLoading = false;
			this.assort = res.data.assort,
			this.assortone = res.data.assortone,
			this.assorttwo = res.data.assorttwo	
		})
	}
}
</script>



