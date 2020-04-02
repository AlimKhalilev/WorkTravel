$('.section-reviews-cards-card-button > button').click(function () {
    var span = $(this).children().first();
    var img = $(this).children("img");
    var subtitle = $(this).parent().prev();
    var card = $(this).parent().parent();

    if (!subtitle.hasClass("hidden")) {
        subtitle.addClass("hidden");
        span.text("Подробнее");
        img.css("transform", "");
        if ($(window).width() <= '578') {
            $("body,html").animate({
                scrollTop: $(card).offset().top - 65
            },0);
        }
    }
    else {
        subtitle.removeClass("hidden");
        span.text("Скрыть");
        img.css("transform", "rotate(0deg)");
    }
});