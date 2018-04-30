$(function () {
    $(".mn_slideshow").vegas({
        slides: [
            { src: "img/slide1.jpg", text: "TITLE1" },
            { src: "img/slide2.jpg", text: "TITLE2" },
            { src: "img/slide3.jpg", text: "TITLE3" },
            { src: "img/slide4.jpg", text: "TITLE4" }
        ],
        delay: 10000,
        txttarget: '.title',
        transitionDuration: 1000,
        transition: 'flash2'
    });
});

$(function () {
    $(".prodimg").vegas({
        slides: [
            { src: "img/jacket.jpg"},
            { src: "img/tshirt.jpg"},
            { src: "img/swshirt.jpg"},
        ],
        autoplay: false,
        transitionDuration: 600,
    });
    $('.nextimg').click(function(){
        $(".prodimg").vegas('options', 'transition', 'slideLeft2').vegas('next');
    });
    $('.previmg').click(function(){
        $(".prodimg").vegas('options', 'transition', 'slideRight2').vegas('previous');
    });
});