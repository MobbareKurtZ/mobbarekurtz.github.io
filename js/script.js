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
    //  NAVBAR SCROLL WIDTH
    $(function () {
        $(window).scroll(function () {
            var vh = $(window).height();
            var vw = $(window).width();
            var scroll_pos = $(this).scrollTop();
            var newSize = scroll_pos * (vw / (vh - 60));
            $(".underlay").width(newSize);
        });
    });
});