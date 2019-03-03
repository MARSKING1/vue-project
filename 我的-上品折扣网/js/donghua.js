var box = document.querySelector(".head-bom-r")
var ul = document.getElementById("head-bom-r-ul")
setInterval(function () {
    ul.style.top = ul.offsetTop - 42 + "px"
    if(ul.offsetTop <= -160 ){
        ul.style.top = 0
    }
},3000)