$(document).ready(function(){

    $(".btn-w").click(function(event){
        $("body").toggleClass("active-body-background");
        $(".content p").toggleClass("active-font-color");
    });

    // 變換字型大小
    $(".btn-w-l").click(function(event){
        $(".content p").css("font-size","20px");
    });

    $(".btn-w-m").click(function(event){
        $(".content p").css("font-size","16px");
    });

    $(".btn-w-s").click(function(event){
        $(".content p").css("font-size","12px");
    });

    $(".dropdown").click(function(event){
        event.preventDefault();  //取消預設超連結功能
        $(".dropdown").toggleClass("active-click");
        $(".dropdown-menu").slideToggle().addClass("active-color");
    });

    //廣告 close 效果
    $(".ad a").click(function(event){
        event.preventDefault();
        $(".ad").fadeOut();
    });

    //scrollTop 滑動效果（錨點）
    $(".scroll-top").click(function(event){
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        });
    });
});