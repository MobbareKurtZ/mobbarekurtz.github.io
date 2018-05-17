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