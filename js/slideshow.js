$(function () {
    $(".mn_slideshow").vegas({
        slides: [
            { src: "img/slide1.jpg" },
            { src: "img/slide2.jpg" },
            { src: "img/slide3.jpg" },
            { src: "img/slide4.jpg" }
        ],
        delay: 15000,
        transitionDuration: 1000,
        transition: 'flash2'
    });
});