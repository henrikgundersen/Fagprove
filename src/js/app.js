﻿$(function () {

    var hero1 = 'particles';
    var hero2 = 'particles-quotes';

    // Initialize Particles JS Hero 1
    particlesJS.load(hero1, 'src/js/lib/cfg/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    // Check if  Particles JS Hero 2 exists
    if ($('#' + hero2).length) {
        // Initialize Particles JS Hero 2
        particlesJS.load(hero2, 'src/js/lib/cfg/particles.json', function () {
            console.log('callback - particles.js config loaded');
        });
    }

    // Config and initialize Early-bird countdown
    $('.countdown').countdown({
        date: "October 28, 2015 23:59:59"
    });

    // Hamburger-menu animation toggle
    $('#hamburger-menu').click(function () {
        $(this).toggleClass('open');
        $(".main-menu").toggleClass("toggled");
    });

    // Select tickets toggle section
    ticketsToggleClass = '.select-tickets-header';
    $(ticketsToggleClass).click(function () {
        $(ticketsToggleClass).parent().removeClass('toggled');
        $(this).parent().addClass('toggled');

        // Close the one you NOT clicked on
        $(ticketsToggleClass).each(function () {
            if ($(this).parent().hasClass('toggled')) {
                $(this).next().slideDown();
            } else {
                $(this).next().slideUp();
            };
        });

    });

});
