/* 从首页到其他页面 */
$("#club").on("click",function () {
    console.log("haha")
    setInterval(function () {
        location.href = "vip-center.html"
    },2000)
})
$(".deng").on("click",function () {
    setInterval(function () {
        location.href = "login.html"
    },2000)
})
$(".zhu").on("click",function () {
    setInterval(function () {
        location.href = "register.html"
    },2000)
})
$(".top_guang").on("click",function () {
    setInterval(function () {
        location.href = "activity.html"
    },2000)
})
/* 首页二级菜单的渲染页面 */
class Caidan{
    constructor(options){
        this.url = options.url;
        this.section = options.section;
        this.load()
    }
    load(){
        var that = this
        $.ajax({
            url:this.url,
            success:function(res){
              //  console.log(res)
                that.res = res
                that.diaplay()
            }
        })
    }
    diaplay(){
        var str = "";
        for(var i=0; i<this.res.length;i++){
            str += `
            <section class="active">
            <div class="section_l">
    <div class="section-brand">
        <h4>${this.res[i].h1}</h4>
        <a href="">${this.res[i].a1}</a>
        <a href="">${this.res[i].a2}</a>
        <a href="">${this.res[i].a3}</a>
        <a href="">${this.res[i].a4}</a>
        <a href="">${this.res[i].a5}</a>
        <a href="">${this.res[i].a6}</a>
        <a href="">${this.res[i].a7}</a>
        <a href="">${this.res[i].a8}</a>
        <a href="">${this.res[i].a9}</a>
    </div>
    <div class="section-brand">
        <h4>${this.res[i].h2}</h4>
        <a href="">${this.res[i].b1}</a>
        <a href="">${this.res[i].b2}</a>
        <a href="">${this.res[i].b3}</a>
    </div>
    <div class="section-brand">
        <h4>${this.res[i].h3}</h4>
        <a href="">${this.res[i].c1}</a>
        <a href="">${this.res[i].c2}</a>
        <a href="">${this.res[i].c3}</a>
        <a href="">${this.res[i].c4}</a>
        <a href="">${this.res[i].c5}</a>
    </div>
    <div class="section-brand">
        <h4>${this.res[i].h4}</h4>
        <a href="">${this.res[i].d1}</a>
        <a href="">${this.res[i].d2}</a>
        <a href="">${this.res[i].d3}</a>
    </div>
    <div class="section-brand">
        <h4 >${this.res[i].h5}</h4>
        <a href="">${this.res[i].e1}</a>
        <a href="">${this.res[i].e2}</a>
        <a href="">${this.res[i].e3}</a>
        <a href="">${this.res[i].e4}</a>
    </div>
</div>
<div class="section_r">
    <ul>
        <li><a href=""><img src="${this.res[i].img1}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img2}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img3}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img4}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img5}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img6}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img7}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img8}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img9}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img10}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img11}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img12}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img13}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img14}" alt=""></a></li>
        <li><a href=""><img src="${this.res[i].img15}" alt=""></a></li>
    </ul>
    <span class="section-bom"><img src="${this.res[i].img16}g" alt=""></span>
</div>
</section>
            `
        }
        this.section.html(str)
    }
}
new Caidan({
    url:"http://localhost/我的-上品折扣网/data/index.json",
    section:$(".brand-list-second")
})
/* 楼层渲染 */
/*  class Floor{
     constructor(options){
        this.url = options.url;
        this.floorlist = options.floorlist;
        this.load()
     }
     load(){
         var that = this;
         $.ajax({
             url:this.url,
             success:function(res){
                 console.log(res)
                that.res = res
                that.display()
             }
         })
     }
     display(){
         var str = "";
         for(var i=0;i<this.res.length;i++){
             str += `
    <div class="gd-hd">
        <i></i>
        ${this.res[i].gd-hd}
    </div>
    <!--左边-->
    <div class="f-l">
    <div class="f-l-t">
        <div class="temwrap">
            <ul>
                <li>
                    <a href=""><img src="${this.res[i].img1}" alt=""></a>
                    <a href=""><img src="${this.res[i].img2}" alt=""></a>
                    <a href=""><img src="${this.res[i].img3}" alt=""></a>
                    <a href=""><img src="${this.res[i].img4}" alt=""></a>
                    <a href=""><img src="${this.res[i].img5}" alt=""></a>
                    <a href=""><img src="${this.res[i].img6}" alt=""></a>
                    <a href=""><img src="${this.res[i].img7}" alt=""></a>
                    <a href=""><img src="${this.res[i].img8}" alt=""></a>
                </li>
                <li>
                    <a href=""><img src="${this.res[i].img9}" alt=""></a>
                    <a href=""><img src="${this.res[i].img10}" alt=""></a>
                    <a href=""><img src="${this.res[i].img11}" alt=""></a>
                    <a href=""><img src="${this.res[i].img12}" alt=""></a>
                    <a href=""><img src="${this.res[i].img13}" alt=""></a>
                    <a href=""><img src="${this.res[i].img14}" alt=""></a>
                    <a href=""><img src="${this.res[i].img15}" alt=""></a>
                    <a href=""><img src="${this.res[i].img16}" alt=""></a>
                </li>
            </ul>
        </div>
        <ul class="brand-nav">
            <li class="active">
               ${this.res[i].li1}
            </li>
            <li>
                ${this.res[i].li2}
            </li>
        </ul>
    </div>
        <script src="js/f-l-t.js"></script>
    <div class="f-l-b">
        <ul>
            <li><a href="" class="h1">${this.res[i].li3}</a></li>
            <li><a href="" class="h1">${this.res[i].li4}</a></li>
            <li><a href="" class="h1">${this.res[i].li5}</a></li>
            <li><a href="" class="h1">${this.res[i].li6}</a></li>
            <li><a href="" class="h1">${this.res[i].li7}</a></li>
            <li><a href="" class="h1">${this.res[i].li8}</a></li>
            <li><a href="" class="h1">${this.res[i].li9}</a></li>
            <li><a href="" class="h1">${this.res[i].li10}</a></li>
            <li><a href="" class="h1">${this.res[i].li11}</a></li>
            <li><a href="" class="h1">${this.res[i].li12}</a></li>
            <li><a href="" class="h1">${this.res[i].li13}</a></li>
            <li><a href="" class="h1">${this.res[i].li14}</a></li>
            <li><a href="" class="h1">${this.res[i].li15}</a></li>
            <li><a href="" class="h1">${this.res[i].li16}</a></li>
            <li><a href="" class="h1">${this.res[i].li17}</a></li>
        </ul>
    </div>
    </div>
    <!--中间-->
    <div class="f-m">
        <ul class="f-m-img">
            <li><a href="#"><img src="${this.res[i].mid-1}"></a></li>
            <li><a href="#"><img src="${this.res[i].mid-2}"></a></li>
        </ul>
        <ul class="f-m-t">
            <li class="active">
                <span>${this.res[i].mid-3}</span>
                <span>${this.res[i].mid-4}</span>
            </li>
            <li>
                <span>${this.res[i].mid-5}</span>
                <span>${this.res[i].mid-6}</span>
            </li>
        </ul>
    </div>
    <script src="js/f-m.js"></script>
    <!--右边-->
    <div class="f-r">
        <ul class="f-r-list">
            <li>
                <a href="">
                    <img src="${this.res[i].left-src1}">
                </a>
                <h3><a href="">${this.res[i].left-name1}</a></h3>
                <strong>${this.res[i].left-price1}</strong>
            </li>
            <li>
                <a href="">
                    <img src="${this.res[i].left-src2}">
                </a>
                <h3>
                    <a href="">${this.res[i].left-name2}</a>
                </h3>
                <strong>${this.res[i].left-price2}</strong>
            </li>
            <li>
                <a href="">
                    <img src="${this.res[i].left-src3}">
                </a>
                <h3>
                    <a href="">${this.res[i].left-name3}</a>
                </h3>
                <strong>${this.res[i].left-price3}</strong>
            </li>
            <li>
                <a href="">
                    <img src="${this.res[i].left-src4}">
                </a>
                <h3>
                    <a href="">${this.res[i].left-name4}</a>
                </h3>
                <strong>${this.res[i].left-price4}</strong>
            </li>
            <li>
                <a href="">
                    <img src="${this.res[i].left-src5}">
                </a>
                <h3>
                    <a href="">${this.res[i].left-name5}</a>
                </h3>
                <strong>${this.res[i].left-price5}</strong>
            </li>
            <li>
                <a href="">
                    <img src="${this.res[i].left-src6}">
                </a>
                <h3>
                    <a href="">${this.res[i].left-name6}</a>
                </h3>
                <strong>${this.res[i].left-price6}</strong>
            </li>
        </ul>
    </div>
</div>
             `
         }
         this.floorlist.html(str)
     }
 }
 new Floor({
     url:"http://localhost/我的-上品折扣网/data/floor.json",
     floorlist:$(".my-six-floor")
 }) */