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