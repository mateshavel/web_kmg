'use strict';

// Document ready
$(function(){

     navScroll.init();
     navScroll.navDrop();

    /* course menu scrolling */
    $('.course-link').on('click', function (event) {
        event.preventDefault();

        var hash = this.hash;
        scrollToAnchor(hash, 70);
    });

    /* Anchor menu smooth scrolling */
    // $('.anchor-menu a, .anchor-btn').on('click', function (event) {
    $('.anchor-btn').on('click', function (event) {
        event.preventDefault();

        var hash = this.hash;
        scrollToAnchor(hash, 0);
    });


    // Multimedia masonry
    if( $('body').hasClass('multimedia-page') ) {
        $('.card-columns').masonry({
            itemSelector: '.card',
            columnWidth: '.card',
            horizontalOrder: true,
            gutter: 25
        });
        $('.card-columns').imagesLoaded().progress( function() {
            $('.card-columns').masonry('layout');
        });
    }

    // Smooth scroll to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

    /* Google map region select */
    $('ul.region-list li a.map-zoom').on('click', function (event) {
        event.preventDefault();
        var regionId = $(this).data('region'),
            position = dataRegions[regionId];
        newLocation(position.lat, position.lng, position.zoom);
    });

    /* Club map interaction */
    $('#clubs-select').on('change', function() {
        var region = $(this).val(),
            selectedRegion = $('.club-selctor-mobile .clubs-list').find('.' + region);
        $('.club-selctor-mobile .clubs-list .koordinator').addClass('display-none-kraj');
        selectedRegion.removeClass('display-none-kraj');
    });

    /* Instructors slider */
    $('#instructors-slider').on('slide.bs.carousel', function (event) {
        var $event = $(event.relatedTarget),
            idx = $event.index(),
            itemsPerSlide = 4,
            totalItems = $('.carousel-item').length;

        if (idx >= totalItems-(itemsPerSlide+1)) {
            var it = (itemsPerSlide+1) - (totalItems - idx);
            for (var i=0; i<it; i++) {
                // append slides to end
                if (event.direction === "left") {
                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                }
                else {
                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                }
            }
        }
    });

    //swipe efect for homepage carousel
    $('#km-carousel').bcSwipe({ threshold: 50 });

    /* My Account Toggle Info form */
    $('.edit-info').on('click', function(ev) {
        ev.preventDefault();
        $('.form-info').find('input[type=text]').prop('readonly', false)
            .removeClass('form-control-plaintext')
            .addClass('form-control input-custom');
        $('.form-info-submit').removeClass('invisible');
    });

    /* BOOTSTRAP FROM VALIDATION Newsletter Abo */
    window.addEventListener("load", function() {
        var form = document.getElementById("km-email-abo");
        form.addEventListener("submit", function(event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    }, false);
});

function scrollToAnchor(hash, offset) {
    $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
    }, 500, function(){
        // when done, add hash to url
        // (default click behaviour)
        // window.location.hash = hash;
    });
}


/* zajistí fixování css na fixed header*/
var $header = $('header'),
    $headerHeight = $header.height();

var navScroll = {

    init:function(){
        $(window).on('scroll',function(){
            navScroll.navDrop();
        })
    },

    navDrop:function(){
        var $scrollTop = $(window).scrollTop();

        if($scrollTop > $headerHeight){
            $header.addClass('black-fix');
        }
        else if($scrollTop == 0) {
            $header.removeClass('black-fix');
        }

    }
};

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('header').addClass('black-fix');
    }
    else {
        $('header').removeClass('black-fix');
    }
})