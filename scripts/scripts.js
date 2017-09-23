
$(document).ready(function () {

    // SHOW-HIDE USERNAME

    $('.btn--show').on('click', function () {

        var field = $('.input-group input[name="partner"]');

        $(this).toggleClass('show');

        if($(this).hasClass('show')) {
            field.attr('type','text');
        } else {
            field.attr('type','password');
        }
    });

    // VIDEO

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



});


