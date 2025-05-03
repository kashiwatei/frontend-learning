$(document).ready(function(){
    $(".box").click(function(event){
        // $(this).toggleClass("active"); // this 自己
        // $(this).parent().toggleClass("active");  //parent 父層
        $(this).toggleClass("active").siblings().removeClass("active");  //siblings 同個父層下的同代子層
    });
});

//其他動作事件、效果請參考: https://overapi.com/jquery