$(function() {
    'use strict';
    var myNav = $('.navbar');
    $(window).on('scroll', function() {
        //myCondition
        if ($(window).scrollTop() >= myNav.height()) {
            if (!myNav.hasClass('scrolled')) {
                myNav.addClass('scrolled');
            }
        } else {
            myNav.removeClass('scrolled');
        }

    })

})