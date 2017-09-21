$(document).ready(function () {

    $('.mobile-btn').on('click', function () {
        $('.header-navigation').slideToggle('');
    });


    $('.video-btn').on("click", function (event) {

        if ($(this).hasClass('play')) {
            $(this).removeClass('play');
            $(this).addClass('pause');

            $('video').get(0).play();

        } else {

            $('.video-btn').removeClass('pause');
            $(this).addClass('play');

            var pl = $('video').get(0);
            pl.pause();

        }
    });

    $('.about-us_slider, .reviews-slider').slick({
        dots: false,
        infinite: true,
        speed: 700,
        fade: true,
        cssEase: 'linear'
    });


    $('.header-navigation__link').click( function(){
        $('.header-navigation__link').removeClass('active');
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('.profession-content__link').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000);
        }
        return false;
    });

    $(window).scroll(function(){

        if ($(window).scrollTop() > '300'){
            $('.scroll-btn').css('display', 'block');
        } else {
            $('.scroll-btn').css('display', 'none');
        }
    });
    $('.scroll-btn').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000);
        }
        return false;
    });

})
;

