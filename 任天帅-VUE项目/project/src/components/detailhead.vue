<template>
    <div class="detailhead">
    <header class="detail-header fixed-header">
		<a href="javascript:;" @click='goback'><img src="../assets/images/detail-left.png"/></a>
		
		<a href="javascript" class="right"><img src="../assets/images/shopbar.png"/></a>
	</header>
    </div>
</template>
<script>
export default {
    methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.detail-header{ width: 90%; padding: 3% 5%; z-index: 2;overflow: hidden; 
-webkit-transition:background-color 0.8s ;
-moz-transition: background-color 0.8s;
-ms-transition: background-color 0.8s;
-o-transition: background-color 0.8s;
transition:background-color 0.8s ;	
transition: background-color 0.8s;
}

.change{height: 5%;background-color:#fff;}
.detail-header a{display: block; float: left; width: 12%; height: 0; padding-bottom:12%; border-radius: 50%; background-color: rgba(255,255,255,0.7);}
.detail-header .right{ float: right;  }
.detail-header .right img{ float: right;width: 50%;  margin:15% 24%;}
.detail-header a img{width: 40%; vertical-align: middle; margin: 16% 20%;}
</style>



