$(document).ready(function () {
    $(".mobile-btn").on("click", function () {
        $(this).toggleClass("active").animate(500), $(".nav").slideToggle()
    }),


        $(".nav li a").on("click", function () {
            var a = $(this).attr("href");
            return 0 != $(a).length && ($(".nav li"),
                $("html, body").animate({scrollTop: $(a).offset().top}, 800)), !1
        }),


        // $(".btn--mouse").on("click", function () {
        //     var a = $(this).attr("href");
        //     return 0 != $(a).length && $("html, body").animate({scrollTop: $(a).offset().top}, 800), !1
        // }),

        $(".video-btn").on("click", function () {
            if ($(this).hasClass("play")) $(this).removeClass("play"), $(this).addClass("pause"), $("video").get(0).play(); else {
                $(".video-btn").removeClass("pause"), $(this).addClass("play");
                $("video").get(0).pause()
            }
        })


    $('#password-repeat').on('keyup', function () { // Выполняем скрипт при изменении содержимого 2-го поля
        var value_input1 = $("#password").val();
        var value_input2 = $(this).val();
        if (value_input1 != value_input2) {
            $('.pass-repeat_label').html('Пароли не совпадают!').css('color','red');
            $('#submit').attr('disabled', 'disabled');
        } else {
            $('#submit').removeAttr('disabled');
            $('.pass-repeat_label').html('Повторите пароль').css('color','#4d4d4d');
        }
    });


    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 50
    //     ){
    //         $('.header').addClass('sticky');
    //         $('.sticky').animate({
    //             opacity: 1
    //         }, 200);
    //     }
    //     else{
    //         $('.header').removeClass('sticky');
    //     }
    // });

    // FULLPAGE SCROLL

    if ($(window).width() > 1280) {
        $('#fullpage').fullpage({
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true
        });
    } else {

    }
    $('.btn--mouse').on('click', function(){
        $.fn.fullpage.moveSectionDown();
    });




});