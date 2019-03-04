<template>
    <div class="detailfoot">
        <footer class="detail-footer fixed-footer">
            <a href="#" class="go-car">
                <input type="button" value="加入购物车"/>
            </a>
            <a href="javascript:;" class="buy">
                立即购买
            </a>
        </footer> 
    </div>
</template>
<style>
/*详情页底部*/
.detail-footer{  width: 92%; background-color: #fff; border-top: solid 1px #c8c8c8; padding:3% 4%;}
.detail-footer .go-car{ width:55% ; display: block; float: left;}

.detail-footer .buy{ width:40%; margin-left: 5%; font-size: 1.35em; display: block; float: left; background-color: #FC605A; color: #fff; text-align: center;padding: 4% 0; border-radius: 0.4em;}

.detail-footer .go-car input[type="button"]{ width:90%; font-size: 1.35em; border:solid 1px #c8c8c8; color: #666; background-color: rgba(0,0,0,0) ; padding:7% 0; padding-left: 10%;border-radius: 0.4em; background-image: url(../assets/images/shopbar-red.png); background-repeat: no-repeat; background-size:14%; background-position: 12% }
</style>
