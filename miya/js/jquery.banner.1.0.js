;(function($){
	"use strict";

	$.fn.banner = function(options){
		var that = this;
		this.LOCAL = {
			index:0,
			iPrev:options.items.length-1,
			listOnoff:false
		}
		
//		除非autoPlay为false,否则都是true
		if(options.autoPlay === undefined || typeof options.autoPlay != "boolean"){
			this.LOCAL.autoPlay = true
		}else{
			this.LOCAL.autoPlay = options.autoPlay
		}
//		除非delayTime为数值,否则都是2000
		if(options.delayTime === undefined || typeof options.delayTime != "number"){
			this.LOCAL.delayTime = 2000
		}else{
			this.LOCAL.delayTime = options.delayTime;
		}
//		除非moveTime为数值,否则都是200
		if(options.moveTime === undefined || typeof options.moveTime != "number"){
			this.LOCAL.moveTime = 200
		}else{
			this.LOCAL.moveTime = options.moveTime;
		}
		
//		判断list是否有,有,就做功能,没有就不做处理
		if(options.list != undefined && options.list.length > 0){
			options.list.eq(0).css({background:"#fa4b9b"})
			this.LOCAL.listOnoff = true;
			
			options.list.on("click",function(){
//				当当前索引与点击的索引相等,不做处理
//				if(that.LOCAL.index == $(this).index()){
//					console.log("不动")
//				}
//				当当前索引 小于 点击的索引相等,向左走
				if(that.LOCAL.index < $(this).index()){
//					console.log("左")
					that.LOCAL.listMove(1,$(this).index())
				}
//				当当前索引 大于 点击的索引相等,向右走
				if(that.LOCAL.index > $(this).index()){
//					console.log("右")
					that.LOCAL.listMove(-1,$(this).index())
				}
				that.LOCAL.index = $(this).index();
				
//				根据鼠标点击的当前项的索引,添加当前项的样式
				options.list.eq($(this).index()).css({backgroundColor:"#fa4b9b"}).siblings().css({backgroundColor:""})
			})

			this.LOCAL.listMove = function(type,index){
				options.items.eq(that.LOCAL.index).css({
					left:0
				}).stop().animate({
					left:-options.items.eq(0).width() * type
				},that.LOCAL.moveTime).end().eq(index).css({
					left:options.items.eq(0).width() * type
				}).stop().animate({
					left:0
				},that.LOCAL.moveTime)
			}
		}
		
//		判断左右按钮是否有,有,就做功能,没有就不做处理
		if(options.left != undefined && options.left.length > 0 && options.right != undefined && options.right.length > 0){
			
			options.left.on("click",function(){
				if(that.LOCAL.index == 0){
//					当进来的是第一张了,下次要设置为最后一张
//					同时要走的是第一张
					that.LOCAL.index = options.items.length-1;
					that.LOCAL.iPrev = 0
				}else{
//					正常情况下:当前要进来的图片的索引是递减
//					要走的就是进来的上一张
					that.LOCAL.index--;
					that.LOCAL.iPrev = that.LOCAL.index + 1;
				}
//				console.log(that.LOCAL.iPrev,that.LOCAL.index)
				that.LOCAL.btnMove(1)
			})
			
			options.right.on("click",this.LOCAL.right)
			
		}
//		左右按钮的move，根据正负号决定方向
		that.LOCAL.btnMove = function(type){
			options.items.eq(that.LOCAL.iPrev).css({
				left:0
			}).stop().animate({
				left:options.items.eq(0).width() * type
			},that.LOCAL.moveTime).end().eq(that.LOCAL.index).css({
				left:-options.items.eq(0).width() * type
			}).stop().animate({
				left:0
			},that.LOCAL.moveTime)
			
			if(that.LOCAL.listOnoff){
				options.list.eq(that.LOCAL.index).css({backgroundColor:"#fa4b9b"}).siblings().css({backgroundColor:""})
			}
		}
		this.LOCAL.right = function(){
			if(that.LOCAL.index == options.items.length-1){
//					当进来的是最后一张了,下次要设置为第一张
//					同时要走的是最后一张
				that.LOCAL.index = 0;
				that.LOCAL.iPrev = options.items.length-1;
			}else{
//					正常情况下:当前要进来的图片的索引是递增
//					要走的就是进来的上一张
				that.LOCAL.index++;
				that.LOCAL.iPrev = that.LOCAL.index - 1;
			}
//				console.log(that.LOCAL.iPrev,that.LOCAL.index)
			that.LOCAL.btnMove(-1)
		}
		
//		判断是否自动播放
		if(this.LOCAL.autoPlay){
//			this.LOCAL.timer = setInterval(function(){
//				options.right.trigger("click");
//			},2000)
//			this.hover(function(){
//				clearInterval(that.LOCAL.timer)
//			},function(){
//				that.LOCAL.timer = setInterval(function(){
//					options.right.trigger("click");
//				},2000)
//			})
			
//			每隔指定的时间,执行右按钮的时间处理函数
			this.LOCAL.timer = setInterval(function(){
				that.LOCAL.right()
			},this.LOCAL.delayTime)
			
//			鼠标进入大框,停止,离开,继续
			this.hover(function(){
				clearInterval(that.LOCAL.timer)
			},function(){
				that.LOCAL.timer = setInterval(function(){
					that.LOCAL.right()
				},that.LOCAL.delayTime)
			})
		}
	}
	
})(jQuery);
