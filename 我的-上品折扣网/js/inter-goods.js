var p = document.querySelectorAll(".brand-title>p")
var uls = document.querySelectorAll(".brand-cont>ul")
for (var i = 0; i < p.length; i++) {
    p[i].index = i

    p[i].onmouseover = function () {
        for (var j = 0; j < p.length; j++) {
            p[j].className = "";
            uls[j].className = "";
        }
        this.className = "act";
        uls[this.index].className = "act"
    }
}