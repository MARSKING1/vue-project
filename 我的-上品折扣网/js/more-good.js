var lis = document.querySelectorAll(".more_goods ul li");
var div = document.querySelectorAll(".menu_all>div");

for(var i=0;i<li.length;i++){
    lis[i].index = i;
    lis[i].onmouseover = function () {
        for(var j=0; j<lis.length;j++){
            lis[j].className = "";
            div[j].className = ""
        }
        this.className = "menu_1";
        div[this.index].className = "menu_1"
    }
}