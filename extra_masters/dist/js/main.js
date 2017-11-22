$(document).ready(function () {


    // NAVIGATION SCROLL

    $('.nav li a').on('click', function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
        }
        return false;
    });

    // MENU MOBILE

    $('.nav-mobile').on('click', function () {
        $(this).toggleClass('active');
        $('.nav-main').slideToggle();
    });


    $('.nav-main > li').on('click', function () {
        $(this).addClass('active');
        $(this).children('.sub-menu').toggleClass('active');
    });
    $('.nav .sub-menu > li').on('click', function () {
        $(this).addClass('active');
        $(this).children('ul').toggleClass('active');
    });

    function tabs() {
        $('.portfolio-tabs__item').on('click', function () {

            var click_id = $(this).attr('id');
            var item = '#item_' + click_id;

            $('.portfolio-tabs__item').removeClass('active');
            $('.portfolio-content__item').removeClass('active');
            $(this).addClass('active');
            $(item).addClass('active');
        });

        $('.btn-more').on('click', function () {
            $(this).hide();
            $(this).siblings('.portfolio-content__images').children('img').removeClass('hidden');
        });
    }

    tabs();

    // SHOW MORE REVIEWS

    $(function () {
        $('.reviews-item').slice(0, 3).show().css('display', 'flex');
        $('.review-more').on('click', function (e) {
            e.preventDefault();
            $('.reviews-item:hidden').slice(0, 3).slideDown().css('display', 'flex');
            if ($('.reviews-item:hidden').length == 0) {
                $('.review-more').fadeOut('slow');
            }
            $('html,body').animate({
                scrollTop: $(this).offset().top
            }, 1500);
        });
    });


    // POPUPS

    $('.btn-order').on('click', function (event) {
        event.preventDefault();

        var title = $(this).attr('data-title');

        $('.wrapper-popup').fadeIn(400,
            function () {
                $('body').css('overflow', 'hidden');
                $('.popup--order')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });

        if ($(this).is('[data-title]')) {

            $('.popup--order .popup-title, .popup--order button').html(title);
        }

    });
    $('.btn-review').on('click', function (event) {
        event.preventDefault();

        var title = $(this).attr('data-title');

        $('.wrapper-popup').fadeIn(400,
            function () {
                $('body').css('overflow', 'hidden');
                $('.popup--review')
                    .css('display', 'block')
                    .animate({opacity: 1}, 200);
            });

        if ($(this).is('[data-title]')) {

            $('.popup--review .popup-title, .popup--review .btn').html('Оставить отзыв');
        }
    });
    $('.popup-close, .wrapper-popup').on('click', function () {
        $('body').css('overflow', 'auto');
        $('.popup')
            .animate({opacity: 0}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('.wrapper-popup').fadeOut(400);
                }
            );
    });


});

