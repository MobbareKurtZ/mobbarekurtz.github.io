var scroll_pos = 0;
var bar_width = 0;

jQuery(window).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (jQuery(window).scrollTop() < 0) {
        scroll_pos = 0 - 0 * scroll_pos;

    }
    else {
        bar_width = 0 + 0.62 * scroll_pos;
    }
    jQuery(".underlay").width(bar_width);

});

AOS.init();

$(document).ready(function () {
    //  INDEX PARALLAX ${scroll_color}
    $(".paroller, [data-paroller-factor]").paroller({
        factor: 0.6,
        type: 'background',
        direction: 'vertical'
    });
    /*$(function() {
        $.scrollify({
          section : ".snap",
          scrollSpeed: 1500,
        });
      });*/
});