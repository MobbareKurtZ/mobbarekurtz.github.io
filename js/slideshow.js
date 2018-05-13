$(function () {
    $(".mn_slideshow").vegas({
        slides: [
            { src: "img/tshirt.jpg", text: "TSHIRT" },
            { src: "img/wswshirt.jpg", text: "SWEATSHIRT" },
            { src: "img/jacket.jpg", text: "JACKET" },
            { src: "img/wshoes.jpg", text: "SHOES" }
        ],
        delay: 10000,
        txttarget: '.title',
        transitionDuration: 1000,
        transition: 'flash2'
    });
});
/*
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
});*/