/* 放大镜下面的share部分 */
var fr = document.querySelector(".f-pic");
var se = document.querySelector(".se-pic");
$(fr).hover(function () {
    $(se).stop().show(16)
}, function () {
    $(se).stop().hide(16)
})
/* 放大镜下面的scroll部分，应用到了选项卡 */
var img = document.querySelectorAll(".MagicZoom>img");
var btn_li = document.querySelectorAll(".nav-pic>li");
var obImg = document.querySelectorAll(".big-box>img")

for (var i = 0; i < btn_li.length; i++) {
    btn_li[i].index = i
    btn_li[i].onclick = function () {
        for (var j = 0; j < btn_li.length; j++) {
            btn_li[j].className = "";
            img[j].className = "";
            obImg[j].className = "";
        }
        this.className = "active";
        img[this.index].className = "active";
        obImg[this.index].className = "active";
    }
}
/* 放大镜 */
var osBox = document.querySelector(".MagicZoom");
var osSpan = document.querySelector(".box-span");
var obBox = document.querySelector(".big-box");


osBox.onmouseover = function(ele){
    osSpan.style.display = "block";
    obBox.style.display = "block";
    //鼠标移动
    osBox.onmousemove = function(eve){
        var e = eve || window.event
        //计算span的距离，使得鼠标始终都在span的中心。
        var l = e.clientX - osBox.offsetLeft - osSpan.offsetWidth*2;
        var t = e.clientY - osBox.offsetTop - osSpan.offsetHeight*2;

         //边界限定
         if(l<0) l=0;
         if(t<0) t=0;
         if(l>osBox.offsetWidth-osSpan.offsetWidth){
             l = osBox.offsetWidth-osSpan.offsetWidth
         }
         if(t>osBox.offsetHeight-osSpan.offsetHeight){
            t = osBox.offsetHeight-osSpan.offsetHeight
        }
        // 设置span移动的位置
        osSpan.style.left = l + "px";      
        osSpan.style.top = t + "px";  
        //计算span移动的比例 
        // 比例 = 当前移动的距离 / 总距离（所能移动的最大距离）
        var x = l / (osBox.offsetWidth-osSpan.offsetWidth)
        var y = t / (osBox.offsetHeight-osSpan.offsetHeight) 
        // 根据span的比例，计算右边大图的移动距离
        // 当前 = 比例 * 总距离
        obImg.style.left = -x * (obImg.offsetWidth-obBox.offsetWidth) + "px";
        obImg.style.top = -y * (obImg.offsetHeight-obBox.offsetHeight) + "px"; 
    }
}
osBox.onmouseout = function(ele){
    osSpan.style.display = "none";
    obBox.style.display = "none";
}
$(obBox).hover(function(){
    $(this).stop().hide(16);
})
