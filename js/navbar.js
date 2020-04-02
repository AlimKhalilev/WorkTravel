$('.close_button').click(function () {
    var header = $(".section-nav");
    var overlay = $(".overlay");
    var navbar = $(".section-nav-links");
    var button = $(".close_button");
    var body = $("body");

    if (!navbar.is(':visible')) {
        navbar.slideDown('normal');
        body.css("overflow-y", "hidden");
        header.css("z-index", "4");
        overlay.css("visibility", "visible");
        overlay.css("opacity", "0.7");
    } 
    else {
        navbar.slideUp('normal');
        body.css("overflow-y", "");
        overlay.css("visibility", "");
        overlay.css("opacity", "");
        setTimeout("$('.section-nav').css('z-index', '')", 500);
    }
});

$(".button-primary").on("click",function(event){
    $(this).append("<span class='ripple-effect'>");
    $(this).find(".ripple-effect").css({
        left: event.pageX-$(this).offset().left,
        top: event.pageY-$(this).offset().top
    }).animate({
        opacity: 0,
        }, 1500, function() {
        $(this).remove();
    });
});

$(".registration").on("click",function(event){
    $(".overlay").css("visibility", "visible");
    $(".overlay").css("opacity", "0.7");
    $("body").css("overflow-y", "hidden");
    if ($(window).width() <= '578') {
        $(".modal-form").css("top", "70px");
    }
    else {
        $(".modal-form").css("top", "150px");
    }
});

$(".overlay, .modal-form-title > span").on("click",function(event){
    if ($(".modal-form").css("top") == "-999px") {
        $('.close_button').click();
        $('.close_button > input').prop('checked', false);
    }
    else {
        $(".overlay").css("visibility", "");
        $(".overlay").css("opacity", "");
        $(".modal-form").css("top", "");
        $("body").css("overflow-y", "");
    }
});

$(function() {
    $('#select').selectric();
});