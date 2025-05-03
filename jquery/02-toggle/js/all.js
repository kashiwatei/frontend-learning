//啟動jquery文件
$(document).ready(function(){

    //加入click動作事件（event 全名叫做「event handlers」也就是事件處理器，它會記錄使用者的所有行為）
    $(".btn-s").click(function(event){
        
        //效果：上下滑動
        $(".card").slideToggle(2000);

    });

    //加入click動作事件
    $(".btn-t").click(function(event){
        
        //效果：開啟/隱藏
        $(".text").toggle(2000);

    });

    //加入click動作事件
    $(".btn-f").click(function(event){
        
        //效果：淡入/淡出
        $(".photo").fadeToggle(2000);

    });

});

//其他動作事件、效果請參考: https://overapi.com/jquery