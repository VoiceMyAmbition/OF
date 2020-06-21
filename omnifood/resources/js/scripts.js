/* global $*/ /* eslint-env jQuery */

$(document).ready(function () {
    
    $('.js--section-features').waypoint(function(direcion){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    }); 

    /* Scroll on buttons *//*
    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
    });

    /* Navigation scroll */

    $(function () {
        var $root = $('html, body');



        $('a[href^="#"]').click(function () {

            $root.animate({

                scrollTop: $($.attr(this, 'href')).offset().top

            }, 1000);



            return false;

        });
    });

    /* Animations on scroll 
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated animate__fadeInUp');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated animate__pulse');
    }, {
        offset: '50%'
    }); */
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('js--wp-2').waypoint(function (direction) {
        $('js--wp-2').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%'
    });
  
});