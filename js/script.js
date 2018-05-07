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
    var vh = $(window).height();
    $('.cart').height(vh - $("#navbar").height());

    $(".paroller").paroller({ factor: '-0.3', type: 'background', direction: 'vertical' });
    //  TITLE GLITCH
    $('.glitch').glitch({
        minint: 1,
        maxint: 5,
        maxglitch: 15,
        hshift: 5,
        vshift: 10,
        direction: 'random'
    });

    if ($("#wrapper_in").length) {
        $(window).scroll(function (event) {
            var scrollPos = $(this).scrollTop();
            if ($("#insec2").offset().top - 60 < scrollPos) {
                $(".navfiller").addClass("ulfull");
            };
            if ($("#insec2").offset().top - 60 > scrollPos) {
                $(".navfiller").removeClass("ulfull");
            };
        });
    };

    //  NAV MENU
    $('.hamburger').click(function () {
        if ($('.nav').hasClass('navdown') == false) {
            var vw = $(window).width();
            $('.overlay').addClass('olon');
            if ($('.cart').hasClass('cartout')) {
                $('.cart').removeClass('cartout');
                if ($("#wrapper_in").length) {
                    $('.cartfill').removeClass('cartfiller');
                };
                $("#cross").removeClass("animatetop");
                $("#cartic").removeClass("animatebottom");
            };
            $('.cart').removeClass('cartout');
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
        } else {
            $('.hamburger').removeClass('is-active');
            $('.overlay').removeClass('olon');
            $('.nav').removeClass('navdown');
            if ($("#wrapper_in").length) {
                setTimeout(function () {
                    $('.navfiller').removeClass('ulfull');
                }, 400);
            };
        };
    });

    $(".overlay").click(function () {
        $('.hamburger').removeClass('is-active');
        $('.overlay').removeClass('olon');
        $('.nav').removeClass('navdown');
        if ($("#wrapper_in").length) {
            setTimeout(function () {
                $('.navfiller').removeClass('ulfull');
            }, 400);
        };
    });

    //  CART
    $("#cartic").click(function () {
        if ($('.nav').hasClass('navdown')) {
            $('.hamburger').removeClass('is-active');
            $('.nav').removeClass('navdown');
            setTimeout(function () {
                $('.navfiller').removeClass('ulfull');
            }, 400);
        };
        $('.cart').addClass('cartout');
        $('.overlay').addClass('olon');
        if ($("#wrapper_in").length) {
            $('.cartfill').addClass('cartfiller');
        };
        $("#cartic").addClass("animatebottom");
        $("#cross").addClass("animatetop");
    });
    $("#cross, .overlay").click(function () {
        $('.overlay').removeClass('olon');
        $('.cart').removeClass('cartout');
        if ($("#wrapper_in").length) {
            $('.cartfill').removeClass('cartfiller');
        };
        $("#cross").removeClass("animatetop");
        $("#cartic").removeClass("animatebottom");
    });

    //  ADD CART 
    $(".addcart").click(function () {
        $('.cart h4').hide();
        var cp = $(".cartprod").length + 1
        var wear = $(this).siblings('h3').text();
        var price = $(this).siblings('h4').text();
        var bg = $(this).parent().siblings('a').css('background-image');
        var cart_elmt = `<div class="cartprod cp${cp}"> <div class="cpimg"></div><article class="cptxt"><h2>${wear}</h2><h3>${price}</h3></article><i class="material-icons md-36 md-light cpdel">close</i></div>`;
        $('.cart').append(cart_elmt);
        $('#cartic h3').text(cp);
        $(`.cp${cp} .cpimg`).css('background-image', bg);
    });

    $('.addprod').click(function () {
        $('.cart h4').hide();
        var cp = $(".cartprod").length + 1
        var bg = "url('img/jacket.jpg')"
        var cart_elmt = `<div class="cartprod cp${cp}"> <div class="cpimg"></div><article class="cptxt"><h2>Product</h2><h3>$1337</h3></article><i class="material-icons md-36 md-light cpdel">close</i></div>`;
        $('.cart').append(cart_elmt);
        $('#cartic h3').text(cp);
        $(`.cp${cp} .cpimg`).css('background-image', bg);
    });

    $('.cart').on('click', '.cpdel', function () {
        $(this).parent().remove();
        var cp = $(".cartprod").length + 1
        if (cp == 1) {
            $('#cartic h3').text('');
            $('.cart h4').show();
        } else {
            $('#cartic h3').text(cp - 1);
        };
    });

    //  CATEGORIES
    $(window).scroll(function (event) {
        var scrollPos = $(this).scrollTop();
        if (80 < scrollPos) {
            $(".altbtnsmall").addClass("altbtndown");
        };
        if (80 > scrollPos) {
            $(".altbtnsmall").removeClass("altbtndown");
        };
    });
    $(".catbtn").click(function () {
        $(".cat").toggleClass("catout");
    });
    $(".closebtn").click(function () {
        $(".cat").removeClass("catout");
    });
    $(".mencat1, .wmencat1").click(function () {
        $(".cat").removeClass("catout");
        if ($(window).width() < 601) {
            $('html, body').animate({
                scrollTop: $("#jackets").offset().top - 60
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#jackets").offset().top - 90
            }, 1000);
        };
    });
    $(".mencat2, .wmencat2").click(function () {
        $(".cat").removeClass("catout");
        if ($(window).width() < 601) {
            $('html, body').animate({
                scrollTop: $("#swshirts").offset().top - 60
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#swshirts").offset().top - 90
            }, 1000);
        };
    });
    $(".mencat3, .wmencat3").click(function () {
        $(".cat").removeClass("catout");
        if ($(window).width() < 601) {
            $('html, body').animate({
                scrollTop: $("#tshirts").offset().top - 60
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#tshirts").offset().top - 90
            }, 1000);
        };
    });
    $(".mencat4, .wmencat4").click(function () {
        $(".cat").removeClass("catout");
        if ($(window).width() < 601) {
            $('html, body').animate({
                scrollTop: $("#shoes").offset().top - 60
            }, 1000);
        } else {
            $('html, body').animate({
                scrollTop: $("#shoes").offset().top - 90
            }, 1000);
        };
    });
});