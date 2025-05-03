$(document).ready(function(){
    $(".btn").click(function(event){
        $(this).parent().parent().remove();
    });
});

//其他動作事件、效果請參考: https://overapi.com/jquery

//其他animate.css參考：https://animate.style/#attention_seekers