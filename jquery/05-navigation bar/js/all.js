$(document).ready(function(){

    $(".btn-w").click(function(event){
        $("body").toggleClass("active-body-background");
        $(".btn-w-1").delay(100).fadeToggle(300);
        $(".btn-w-2").delay(200).fadeToggle(200);
        $(".btn-w-3").delay(300).fadeToggle(100);

    });

    $(".dropdown").click(function(event){
        event.preventDefault();  //取消預設超連結功能
        $(".dropdown").toggleClass("active-click");
        $(".dropdown-menu").slideToggle().addClass("active-gray");
    });

});