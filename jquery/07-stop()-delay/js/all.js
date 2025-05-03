$(document).ready(function(){
    $(".btn").click(function(event){
        $(".card1").stop().delay(0).fadeToggle(3000);
        $(".card2").stop().delay(1000).fadeToggle(2000);
        $(".card3").stop().delay(2000).fadeToggle(1000);
    });

});

//其他動作事件、效果請參考: https://overapi.com/jquery