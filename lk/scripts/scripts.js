$(document).ready(function () {

    $(function () {
        new Clipboard('#copy-button');
    });
    $(function () {
        new Clipboard('.key-btn');
    });

    $('.btn-change').on('click', function () {
        $('.profile-contacts__info').hide();
        $('.profile-contacts form').show('easy');
    });

    // VIDEO

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

    // VIDEO TABS

    $('.panel-heading.heading--main').on('click', function () {
        $(this).toggleClass('active');
    });


    $('.partners-content').slimScroll({
        height: '510px',
        size: '4px',
        railOpacity: 0.5,
        color: '#336e7b'
    });
    $('.contacts-requisites').slimScroll({
        height: '110px',
        size: '2px',
        railOpacity: 0.5,
        color: '#336e7b'
    });
    $('.marketing').slimScroll({
        height: '510px',
        size: '4px',
        railOpacity: 0.5,
        color: '#336e7b'
    });


    // KEY ACTIVE

    $('.keys-item').on('click', function () {
        $('.keys-item').removeClass('active');
        $(this).addClass('active');
    });


});


