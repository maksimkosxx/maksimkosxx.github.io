$(document).ready(function () {

    $('.mobile-btn').on('click', function () {
        $('.header-navigation').slideToggle('');
    });


    $('.video-btn').on("click", function(event) {

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


})
;

