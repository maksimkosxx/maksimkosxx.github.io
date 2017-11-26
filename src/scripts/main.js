$(document).ready(function () {

    // SCROLL TOP

    $(window).scroll(function(){

        if ($(window).scrollTop() > '300'){
            $('.scroll-btn').css('display', 'block');
        } else {
            $('.scroll-btn').css('display', 'none');
        }
    });
    $('.scroll-btn').on('click', function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 800);
        }
        return false;
    });

    // MOBILE BTN

    $('.mobile-btn').on('click', function () {
        $(this).toggleClass('active').animate(500);
        $('.nav').slideToggle();
    });


    $('.nav li a').on('click', function () {
        $('.nav li').removeClass('active');
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
        }
        return false;
    });


    // VIDEO


    $('.video-btn').on('click', function () {

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

    $('#password-repeat').on('keyup', function () { // Выполняем скрипт при изменении содержимого 2-го поля
        var value_input1 = $("#password").val();
        var value_input2 = $(this).val();
        if (value_input1 != value_input2) {
            $('.pass-repeat_label').html('Пароли не совпадают!').css('color', 'red');
            $('#submit').attr('disabled', 'disabled');
        } else {
            $('#submit').removeAttr('disabled');
            $('.pass-repeat_label').html('Повторите пароль').css('color', '#4d4d4d');
        }
    });

    // MOUSE SCROLL

    $('.btn--mouse').on('click', function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 800);
        }
        return false;
    });

    // FULLPAGE

    if ($(window).width() > 4000) {
        $('#fullpage').fullpage({
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true
        });
        $('section').addClass.removeClass('section--padding');
        $('.btn--mouse').on('click', function () {
            $.fn.fullpage.moveSectionDown();
        });
    } else {
        $('section').removeClass('section').addClass('section--padding');
        $(".btn--mouse").on('click', function () {
            var a = $(this).attr("href");
            return 0 != $(a).length && $("html, body").animate({scrollTop: $(a).offset().top}, 800), !1
        });
    }


    // LESSONS BUTTON

    $('.lessons-item button').on('click', function () {
        $(this).toggleClass('active');
        if($(this).hasClass('active')) {
            $(this).parent().siblings('.lessons-item').children('button').removeClass('active');
        }
        return false;
    });



});