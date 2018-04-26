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
    if ($("#wrapper_in").length) {
        $(function () {
            $(window).scroll(function () {
                var vw = $(window).width();
                var pos = $('#insec2').offset().top;
                var scrollPos = $(this).scrollTop();
                var newSize = scrollPos * (vw / (pos - 60));
                $(".navfiller").width(newSize);
            });
        });
    };

    //  NAV MENU
    $('.hamburger').clickToggle(function () {
        var vw = $(window).width();
        $('.hamburger').addClass('is-active');
        if ($("#wrapper_in").length) {
            $('.navfiller').addClass('ulfull');
        };
        if ($(".navfiller").width() > vw) {
            $('.nav').addClass('navdown');
        } else {
            setTimeout(function () {
                $('.nav').toggleClass('navdown');
            }, 100);
        }
    }, function () {
        $('.hamburger').removeClass('is-active');
        $('.nav').removeClass('navdown');
        if ($("#wrapper_in").length) {
            setTimeout(function () {
                $('.navfiller').removeClass('ulfull');
            }, 400);
        };
    });

    //  CART
    var vh = $(window).height();
    $(".cart").height(vh - 60);
    $("#cartic").click(function () {
        if ($('.nav').hasClass('navdown')) {
            $('.hamburger').removeClass('is-active');
            $('.nav').removeClass('navdown');
            setTimeout(function () {
                $('.navfiller').removeClass('ulfull');
            }, 400);
        };
        $('.cart').addClass('cartout');
        if ($("#wrapper_in").length) {
            $('.cartfill').addClass('cartfiller');
        };
        $("#cartic").addClass("animatebottom");
        $("#cross").addClass("animatetop");
    });
    $("#cross").click(function () {
        $('.cart').removeClass('cartout');
        if ($("#wrapper_in").length) {
            $('.cartfill').removeClass('cartfiller');
        };
        $("#cross").removeClass("animatetop");
        $("#cartic").removeClass("animatebottom");
    });

    //  CAT&COL
    $(".catbtn").click(function () {
        $(".cat").toggleClass("catout");
    });
});