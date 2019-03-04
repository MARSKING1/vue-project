<template>
    <footer class="page-footer fixed-footer">
		<ul>
			
				<router-link  tag="li" to="./home" active-class='foot-router-active'>
					<img src="../assets/images/footer001.png"/>
					<p class="fei">首页</p>
				</router-link>
			
			
				<router-link  tag="li" to="./assort" active-class='foot-router-active'>
					<img src="../assets/images/footer002.png"/>
					<p class="fei">分类</p>
				</router-link>
			
			
				<router-link  tag="li" to="./shopcar" active-class='foot-router-active'>
					<img src="../assets/images/footer003.png"/>
					<p class="fei">购物车</p>
				</router-link>
			
			
				<router-link  tag="li" to="./self" active-class='foot-router-active'>
					<img src="../assets/images/footer004.png"/>
					<p class="fei">个人中心</p>
				</router-link>
			
		</ul>
	</footer>
</template>
<style>
.foot-router-active .fei{
	color: red
}


</style>


