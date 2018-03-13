$(document).ready(function () {


    // NAVIGATION SCROLL

    $('.header-nav > li a').on('click', function () {
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 1500);
        }
        return false;
    });


    // Scroll to video

    $('.hero-content__link').on('click', function () {

        $('html, body').animate({scrollTop: $('#video').offset().top}, 1500);

        return false;
    });

    // VIDEO youtube

    $(function () {
        $('.youtube').each(function () {
            // По YouTube ID, находим превью картинку
            $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

            // Добавляем кнопку play
            $(this).append($('<div/>', {'class': 'play'}));

            $('.youtube .play').on('click', function () {

                $(this).parents().addClass('active');
            });

            $(document).delegate('#' + this.id, 'click', function () {
                // Создаем iFrame с параметром autoplay
                var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
                if ($(this).data('params')) iframe_url += '&' + $(this).data('params');

                var iframe = $('<iframe/>', {
                    'frameborder': '0',
                    'src': iframe_url,
                    'width': $(this).width(),
                    'height': $(this).height()
                });

                $(this).replaceWith(iframe);
            });
        });
    });

    // Datepicker


    $(function () {
        $('#date').datepicker();
    });


    // Slick

    $('.reviews-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // Reviews tabs

    $('.reviews-tabs__button').on('click', function () {

        var click_id = $(this).attr('id');
        var item = '#item_' + click_id;

        $('.reviews-tabs__button').removeClass('active');
        $('.reviews-tabs__content').hide('easy').removeClass('active');
        $(this).addClass('active');
        $(item).show('easy').addClass('active');
    });

    // Hide portfolio

    $('.portfolio-btn').on('click', function () {


        if ($(this).hasClass('show')) {
            $('.portfolio-item').slice(4).fadeIn();
            $(this).removeClass('show').addClass('hide').html('Скрыть');
            $('html,body').animate({
                scrollTop: $(this).offset().bottom
            }, 1500);
        } else {
            $(this).removeClass('hide').addClass('show').html('Показать');
            $('.portfolio-item').slice(4).fadeOut();

            $('html, body').animate({scrollTop: $('#portfolio').offset().top}, 1500);
        }

    });


    // POPUPS open
    function popups() {

        var btn = $('.btn');

        btn.on('click', function (e) {
            e.preventDefault();

            $('.wrapper-popup--order').fadeIn(400,
                function () {
                    $('body').css('overflow', 'hidden');
                    $('.wrapper-popup--order + .popup')
                        .css('display', 'block')
                        .animate({opacity: 1}, 200);
            });
        });

        // POPUPS close

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
    }

    popups();


    // VALIDATION

    $('form').each(function () {
        $(this).validate({
            errorPlacement: function () {
                return false;
            },
            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('.wrapper-popup--thanks').fadeIn(400,
                            function () {
                                $('body').css('overflow', 'hidden');
                                $('.wrapper-popup--thanks + .popup')
                                    .css('display', 'block')
                                    .animate({opacity: 1}, 200);
                            });
                    },
                    error: function () {
                        alert('Данные заполнены некорректно');
                    }
                });
                return false;
            }
        });
    });


    // MOBILE MENU

    // $('.mobile-btn').on('click', function () {
    //     $('.nav').slideToggle();
    //     $(this).toggleClass('active');
    // });


    // PHONE MASK

    // $(function () {
    //     $('input[name=phone]').inputmask("+7 (999) 999-99-99");
    // });


});
