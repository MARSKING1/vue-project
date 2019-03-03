 class Cart{
     constructor(options){
        this.url = options.url;
        this.body  = options.tbody;
        this.load()
     }
     load(){
         var that = this;
         $.ajax({
             url:this.url,
             success:function(res){
                 that.res = res
                 //拿到数据的同时，也要拿到所有的cookie
                that.getCookie()
             }
         })
     }
     getCookie(){
         //然后将cookie解析为数组
         this.goods = JSON.parse($.cookie("goods"))
         this.display()
     }
     display(){
        // console.log(this.goods)
         // 判断ajax获取的数据的序号与cookie获取的数据的序号是否相同
         var str="";
        for(var i=0;i<this.res.length;i++){
            for(var j=0;j<this.goods.length;j++){
                if(this.res[i].goodsId === this.goods[j].id){
                    str += `<tr>
                    <td><input type="checkbox"></td>
                    <td><img src="${this.res[i].src}"/></td>
                    <td>${this.res[i].name}</td>
                    <td>${this.res[i].price}</td>
                    <td><input type="number" value="${this.goods[j].num}"></td>
                    <td><em data-index="${this.res[i].goodsId}">删除</em></td>
                </tr>`
                }
            }
        }
        this.body.html(str);
        this.init()
     }
     init(){
       // 删除需要同时删除dom元素 和cookie
       var that = this;
       // 删除事件
       this.body.on("click","em",function(){
           var id = $(this).attr("data-index")
           $(this).parent().parent().remove()
           that.changeCookie(id,function(i){
               that.goods.splice(i,1)
           })
       }) 
        // 修改事件
        this.body.on("input","input",function(){
            var num = $(this).val();
            var id = $(this).parent().next("td").children("em").attr("data-index");
            that.changeCookie(id,function(i){
                that.goods[i].num = num
            })
        })
     }
     //  删除修改 cookie 事件
     changeCookie(id,callback){
         for(var i=0;i<this.goods.length;i++){
             if(this.goods[i].id == id){
                 callback(i)
             }
         }
        $.cookie("goods",JSON.stringify(this.goods)) 
     }
 }
 new Cart({
     url:"http://localhost/我的-上品折扣网/data/brand-list.json",
     tbody:$("tbody")
 })