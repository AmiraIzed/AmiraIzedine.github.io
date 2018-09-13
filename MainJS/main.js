/* jQuery & JS goes here. */


jQuery(document).ready(function ($) {

    console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");

    // Initialize wowjs 
    new WOW().init();

    /*-------------------
    MAGNIFICO STARTER - 
    Code from a starter example by the creator. 
    https://codepen.io/dimsemenov/pen/hutrb
    -------------------*/
    $('.with-caption').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',

        image: {
            verticalFit: true,
            titleSrc: function (item) {
              
                var caption = item.el.attr('title');
                return caption;
            }
        },

        //This will let us click through images 
                gallery: {
            enabled: true
        },
    });
});
