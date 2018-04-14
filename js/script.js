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

$(document).ready(function () {
    //  TITLE GLITCH
    $('.glitch').glitch({ minint: 1, maxint: 5, maxglitch: 15, hshift: 5, vshift: 10, direction: 'random' });
    //  TITLE CHANGE
    var quotes = ["TITLE1","TITLE2","TITLE3","TITLE4"];
    var i = 0;
    function loop() {
        if (i > 3) i = 0;
        $('.title').text(quotes[i]);
        i++;
        setTimeout(loop, 15000);
    }
    loop();
    
    //  INDEX PARALLAX
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