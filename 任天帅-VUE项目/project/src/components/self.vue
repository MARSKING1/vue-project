<template>
    <div class="self">
    <header class="self-header" v-for="item in selfhead" :key="item.id">
		<figure><img :src="item.aImg"/></figure>
		<dl>
			<dt>{{item.nHead}}</dt>
			<dd>
				<img :src="item.bImg"/>
				<span>{{item.num}}</span>
				<span>{{item.name}}</span>
			</dd>
		</dl>
		<button>{{item.button}}</button>
	</header>

    <div class="contaniner fixed-contb">
		<section class="self">
			<dl>
				<dt>
					<a href="order.html">
						<img src="../assets/images/self-icon.png"/>
						<b>全部订单</b>
						<span><img src="../assets/images/right.png"/></span>
					</a>
				</dt>
				<dd>
					<ul>
						<li v-for="i in selfone" :key="i.id">
							<a href="javascript:;">
								<img :src="i.aImg"/>
								<p>{{i.aName}}</p>
							</a>
						</li>
					</ul>
				</dd>
			</dl>
			
			<ul class="self-icon">
				<li v-for="j in selftwo" :key="j.id">
					<a href="javascript:;">
						<img :src="j.bImg"/>
						<p>{{j.bName}}</p>
						<span><img :src="j.cImg"/></span>
					</a>
				</li>
			</ul>
			<ul class="self-icon">
				<li v-for="k in selfthree" :key="k.id">
					<a href="javascript:;">
						<img :src="k.bImg"/>
						<p>{{k.bName}}</p>
						<span><img :src="k.cImg"/></span>
					</a>
				</li>
			</ul>
			<router-link to="./login"><input type="button" value="退出" /></router-link>
			
		</section>
	</div>

    </div>
</template>
<script>
export default {
    	data(){
		return {
            selfhead:[],
            selfone:[],
            selftwo:[],
            selfthree:[]
	}},
	mounted(){
		//请求数据
		let url = '/data/self.json';
		this.$http({
			url:url
		}).then((res)=>{
			this.selfhead = res.data.selfhead,
			this.selfone = res.data.selfone,
			this.selftwo = res.data.selftwo,
			this.selfthree = res.data.selfthree
		})
	}
}
</script>
