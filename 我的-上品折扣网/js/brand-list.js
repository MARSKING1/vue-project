var li = document.querySelectorAll(".brand-list-first>li");
var s = document.querySelectorAll(".brand-list-second>section");
$(".brand-list-second").stop().hide();
for (var i = 0; i < li.length; i++) {
    li[i].index = i;
    li[i].onmouseenter = function () {
        for (var j = 0; j < li.length; j++) {
            li[j].className = "";
            s[j].className = "";
        }
        this.className = "active";
        s[this.index].className = "active"
    }
}
$(".brand-list-first").on("mouseenter", function () {
    $(".brand-list-second").stop().show();
})

$(".brand-list-first").on("mouseleave", function () {
    $(".brand-list-second").stop().hide();
})



$(".sortleft_l").hover(function () {
    $(this).css({
        backgroundColor: "#f40",

    }).children(".transition").css({
        color: "#f40",
    }).children(".transition .sortleft_l-up").css({
        background: "url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat 0 -29px",
    })
    $(".transition >.strange").css({
        background: "url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -20px -29px",
    })
}, function () {
    $(this).css({
        backgroundColor: " #e4e4e4",
    }).children(".transition").css({
        color: "#000",
    }).children(".transition .sortleft_l-up").css({
        background: "url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat 0 -17px",
    })
    $(".transition >.strange").css({
        background: "url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -20px -17px",
    })
})
$(".range").hover(function () {
    $(this).css({
        backgroundColor: "#fff",       
    }).children().children().children(".btn").css({
        display:"block"
    })
},function(){
    $(this).css({
        zIndex:"default",
        backgroundColor: "#e4e4e4"
    }).children().children().children(".btn").css({
        display:"none"
    })
})
$(".prev").hover(function(){
    $(this).css('color','#f40')
},function(){
    $(this).css('color','#000')
})
/* 下一页 */
$("#jpage>li>.next").hover(function(){
    $(this).css({
        color:'#f40',
    }).children(".next>.next-i").css({
        background:"url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -22px -41px",
    })
},function(){
    $(this).css({
        color:'#000',
    }).children(".next>.next-i").css({
        background:"url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -13px -41px",
    })
})
/* 下面的上一页 */
$(".pagination .pre").hover(function(){
    $(this).css({
        borderColor:'#f40',
        color:'#f40',
    }).children(".pre>i").css({
        background:"url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -18px -41px "
    })
},function(){
    $(this).css({
        borderColor:'#eaeaea',
        color:'#000',
    }).children(".pre>i").css({
        background:"url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat 0px -41px "
    })
})
$(".pagination .now").hover(function(){
    $(this).css({
        backgroundColor:'#f40',
        color:'#f40',
    })
},function(){
    $(this).css({
        backgroundColor:'#fff',
        color:'#000',
    })
})
$(".pagination .next").hover(function(){
    $(this).css({
        borderColor:'#f40',
        color:'#f40',
    }).children(".next>i").css({
        background:"url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -22px -41px "
    })
},function(){
    $(this).css({
        borderColor:'#eaeaea',
        color:'#000',
    }).children(".next>i").css({
        background:"url('../我的-上品折扣网/img/brand-list/sprite.gif') no-repeat -4px -41px "
    })
})
/* 主页面的数据渲染 */
class Brand{
    constructor(options){
        this.url = options.url;
        this.list = options.list;
        this.load() // 请求数据
    }
    load(){
        var that = this
        $.ajax({
            url:this.url,
            success:function(res){
               that.res = res
               that.display()  // 渲染页面
            }
        })
    }
    display(){
        //console.log(this.res)
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `
            <li data-id="${this.res[i].goodsId}">
            <a href="#" class="productImg" target="_blank">
                <img src="${this.res[i].src}">
                <h3 class="productName">
                    <em class="h1">${this.res[i].h1}</em>
                   ${this.res[i].name}
                </h3>
            </a>
            <strong class="price">${this.res[i].price}</strong>
            <del class="gray">${this.res[i].del}</del>
            <div class="my-cart">${this.res[i].val}</div>
        </li>
            `
        }
        this.list.html(str);
        this.init();
    }
    init(){
        var that = this;
        this.list.on("click",".my-cart",function(){
           that.id = $(this).parent().attr("data-id")
           that.setCookie()
        })
    }
    setCookie(){
        // 购物车只能使用一条cookie，cookie只能存字符
        this.goods = JSON.parse($.cookie("goods"));// 这里将字符转化为对象
        if(this.goods == null){
        //第一次存：直接存
            this.goods = [{
                id:this.id, //商品的id
                num:1 // 数量
            }]
        }else{
            //不是第一次存，要判断之前的商品是否跟这次的一致
            var bool = true;
            //遍历之前所有的商品，跟这次的商品进行比较，如果相同，那么就增加数量
            for(var i=0;i<this.goods.length;i++){
                // 之前存了A，这次又点了A
                if(this.goods[i].id == this.id){
                    this.goods[i].num++;
                    //已经存在A，则改变开关状态
                    bool = false;
                }
// 如果遍历完所有对象，开关没有改变，说明找到了重复商品，那么就需要增加新商品
                if(bool = true){
                    //之前存了B，这次点了A
                    this.goods.push({
                        id:this.id,
                        num:1
                    })
                }
            }
        }
        console.log(this.goods)
//  cookie 只能存字符
        $.cookie("goods",JSON.stringify(this.goods))
// 这里要先存一个cookie,才能进行显示，这里将收到的数据转为字符
    }
}
new Brand({
    url:"http://localhost/我的-上品折扣网/data/brand-list.json",
    list:$(".main-content").children("ul")
})
