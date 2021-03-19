$('.section-faq-table-item-top-img').click(function () {
    //var src = "http://www.stud-hub.com.ua/wp-content/themes/worktravel";
    var src = "";
    var comments = $(this).parent().next();
    var child = $(this).children();
    var title = $(this).prev();

    if (!comments.is(':visible')) {
        comments.slideDown('normal', function () {
            child.attr("src", src + "./dist/img/faq-close.svg");
            title.css("color", "#4041B5");
        });
    } else {
        comments.slideUp('normal', function () {
            child.attr("src", src + "./dist/img/faq-open.svg");
            title.css("color", "");
        });
    }
});