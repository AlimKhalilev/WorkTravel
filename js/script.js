$(document).ready(function() {
    var displayToTop = false;

    $(window).scroll(function(){
        var scrollPos = $(document).scrollTop();
        if (scrollPos >= 700 && displayToTop === false) {
            $(".to-top").css("opacity", "1");
            displayToTop = true;
        }
        if (scrollPos <= 700 && displayToTop === true) {
            $(".to-top").css("opacity", "");
            displayToTop = false;
        }
    });

    $('.section-vacancy-cards').lightSlider({
        item:3,
        slideMove: 2,
        slideMargin: "",
        controls: false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 600,
        responsive : [
            {
                breakpoint: 1000,
                settings: {
                    item:2,
                    slideMove:1
                  }
            },
            {
                breakpoint: 578,
                settings: {
                    item: 1,
                    slideMove: 1
                  }
            }
        ]
    });  
});

$(".to-top").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});