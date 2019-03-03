$(".brand-list-first").stop().hide();
$(".brand-list-second").stop().hide();
$(".brand-list_h").hover(function () {
    $(".brand-list-first").stop().show(10);
},function () {

})
$(".brand-list-first").hover(function(){
    $(".brand-list-second").stop().show();
},function () {
    $(".brand-list-second").stop().hide();
})

$(".brand-list-second").hover(function () {
    $(".brand-list-first").stop().show(10);
    $(this).stop().show()
},function () {
    $(".brand-list-first").stop().hide(10);
    $(this).stop().hide()
})

$(".at-bc").on("click",function () {
    setInterval(function () {
        location.href = "index.html"
    },2000)
})


