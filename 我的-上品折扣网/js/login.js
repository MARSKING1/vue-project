$("#btn").click(function () {
    $.ajax({
        url: "http://www.liyangyf.com/ctrl/login.php",
        data: {
            user: $("#user").val(),
            pass: $("#pass").val(),
        },
        success:function(res){
            console.log(res)
            switch(res){ 
                case "0":
                $("#eMsg")[0].innerHTML = "密码不能为空"
                break;
                case "1":
                $("#eMsg")[0].innerHTML = "：用户名密码为空，并且客户端没有cookie"
                break;
                default:
                res = JSON.parse(res);
                console.log(res)
                $("#eMsg")[0].innerHTML = "欢迎"+res.user+"登录本系统"+"3秒后进入上品折扣首页"
                setInterval(function(){
                    location.href = "index.html"
                },3000)
            }
        }
    })
})
$("#zc").click(function(){
    setTimeout(function(){
        location.href = "register.html";
    },1000)
})