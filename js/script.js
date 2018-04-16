/*var scroll_pos = 0;
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

});*/

$(document).ready(function () {
    //  TITLE GLITCH
    $('.glitch').glitch({ minint: 1, maxint: 5, maxglitch: 15, hshift: 5, vshift: 10, direction: 'random' });
    //  TITLE CHANGE
    $(function () {
        i = 0;
        texts = ["TITLE2", "TITLE3", "TITLE4", "TITLE1"];
        setInterval(function () {
            $('.title').text(texts[i % texts.length]);
            i++;
        }, 15000);
    });

    $(function () {
        $(window).scroll(function () {
            var vh = $(window).height();
            var vw = $(window).width();
            var scroll_pos = $(this).scrollTop();
            var newSize = scroll_pos * (vw / (vh - 60));
            $(".underlay").width(newSize);
        });
    });

    //  INDEX PARALLAX
    /*$(".paroller, [data-paroller-factor]").paroller({
        factor: 0.6,
        type: 'background',
        direction: 'vertical'
    });*/





    /*$(function() {
        $.scrollify({
          section : ".snap",
          scrollSpeed: 1500,
        });
      });*/
});