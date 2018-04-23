//  CLICK TOGGLE
(function ($) {
    $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));

$(document).ready(function () {
    //  TITLE GLITCH
    $('.glitch').glitch({
        minint: 1,
        maxint: 5,
        maxglitch: 15,
        hshift: 5,
        vshift: 10,
        direction: 'random'
    });
    //  NAVBAR SCROLL WIDTH
    $(function () {
        $(window).scroll(function () {
            var vw = $(window).width();
            var pos = $('#insec2').offset().top;
            var scrollPos = $(this).scrollTop();
            var newSize = scrollPos * (vw / (pos - 60));
            $(".underlay").width(newSize);
        });
    });

    //  NAV MENU
    $('.hamburger').clickToggle(function () {
        var vw = $(window).width();
        $('.hamburger').addClass('is-active');
        $('.underlay').addClass('ulfull');
        if ($(".underlay").width() > vw) {
            $('.nav').addClass('navdown');
        } else {
            setTimeout(function () {
                $('.nav').toggleClass('navdown');
            }, 100);
        }
    }, function () {
        var vw = $(window).width();
        $('.hamburger').removeClass('is-active');
        $('.nav').removeClass('navdown');
        setTimeout(function () {
            $('.underlay').removeClass('ulfull');
        }, 400);
    });

    //  CART
    var vh = $(window).height();
    $(".cart").height(vh - 60);
    $('.cartic').click(function () {
        $('.cart').toggleClass('cartout');
        $('.underlay').toggleClass('ulfull');
    });
});