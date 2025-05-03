//啟動jquery文件
$(document).ready(function(){

    //加入click動作事件（event 全名叫做「event handlers」也就是事件處理器，它會記錄使用者的所有行為）
    $(".btn-t").click(function(event){
        
        //增加active css的效果
        $(".photo").toggleClass('active');

    });


});

//其他動作事件、效果請參考: https://overapi.com/jquery