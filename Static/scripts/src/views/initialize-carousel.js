define(['jquery', 'underscore', 'lib/owl.carousel', 'base/modules/rtl'], function ($) {
    'use strict';
    function init(container) {
        $('.car-carousel').owlCarousel({
            items:1,
            loop:true,
            margin:10,
            nav:false,
            center:true,
            stagePadding:250,
            responsive:{
                0:{
                    items:1,
                    stagePadding: 0
                },
                900:{
                    items:1,
                    stagePadding: 250
                },
                1000:{
                    //items:5
                }
            }
        });
        var i = 1;
        $('.owl-theme').find('.owl-dot').each(function () {
            $(this).text(i);
            i++;
        });
    }
    return {
        init: function (container) {
            init(container);
        }
    };
});
