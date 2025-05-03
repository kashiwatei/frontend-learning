$(document).ready(function(){
    $("section").click(function(event){
        $(this).find("h1").toggleClass("animate__wobble"); //find(), 由父層向下搜尋子層元素
    });

});

//其他動作事件、效果請參考: https://overapi.com/jquery

//其他animate.css參考：https://animate.style/#attention_seekers