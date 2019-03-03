var side = document.querySelector(".side-show-back");
$(document).scroll(function () {
   if($(document).scrollTop()>=800){
       side.style.display = "block";
   } else {
       side.style.display = "none";
   }
});
    var bool = false;
    $(side).on("click",function (e) {
        bool = !bool
    });
   animation();
    function animation() {
        requestAnimationFrame(animation);
        if(!bool) return;
        var elem = $(document.documentElement);
        var num = elem.scrollTop();
        if(num<=0){
            bool = false;
            return;
        }
            num -= 100;
            elem.scrollTop(num)
    }
