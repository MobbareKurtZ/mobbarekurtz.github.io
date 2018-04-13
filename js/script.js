$(document).ready(function () {
    //  INDEX PARALLAX
    $(".paroller, [data-paroller-factor]").paroller({
        factor: 0.6,
        type: 'background',
        direction: 'vertical'
    });
    $(function() {
        $.scrollify({
          section : ".snap",
          scrollSpeed: 1500,
        });
      });
});