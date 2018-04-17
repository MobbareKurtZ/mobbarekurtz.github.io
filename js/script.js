$(document).ready(function () {
    //  TITLE GLITCH
    $('.glitch').glitch({ minint: 1, maxint: 5, maxglitch: 15, hshift: 5, vshift: 10, direction: 'random' });
    //  NAVBAR SCROLL WIDTH
    $(function () {
        $(window).scroll(function () {
            var vw = $(window).width();
            var pos = $('#in2').offset().top;
            var scroll_pos = $(this).scrollTop();
            var newSize = scroll_pos * (vw / (pos - 60));
            $(".underlay").width(newSize);
        });
    });
});