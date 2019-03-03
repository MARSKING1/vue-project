$("#register").click(function(){
    $.ajax({
        url:"http://www.liyangyf.com/ctrl/register.php",
        data:{
            user:$("#user").val(),
            pass:$("#password").val(),
           /*  repass:$("#configurePassword").val(),
            tel:$("#mobile").val(), */
        },
        success:function(res){
            console.log(res)
            switch(res){
                case "0":
                $(".pass-warn")[0].innerHTML = "你的用户名已被注册，请换个吧"
                break;
                case "1":
                $(".pass-warn")[0].innerHTML = "您已注册成功，3秒钟将进入登录页面"
                setTimeout(function(){
                    location.href = "login.html";
                },3000)
                break;
                case "2":
                $(".pass-warn")[0].innerHTML = "请至少输入用户名和密码"
                break; 
            }
        }
    })

})
$("#btn-green").click(function(){
    setTimeout(function(){
        location.href = "login.html";
    },1000)
})