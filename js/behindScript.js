if (window.innerWidth >= '1025') {
$('#dot0d').click(function () {
        $('.intro1').animate({
            opacity: 1
        }, 500);
        $('.intro2').animate({
            opacity: 0
        }, 500);
        $('.intro3').animate({
            opacity: 0
        }, 500);
        $('.intro4').animate({
            opacity: 0
        }, 500);
        $('.intro5').animate({
            opacity: 0
        }, 500)
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').removeClass('pulse2');
        $('#dot4d').removeClass('pulse2');
        $('.main_box').add('fade1');
        $('.contant_box').removeClass('fade1');
        $('.contant_box_bottom').removeClass('fade1');
        $('.contant_box_top').removeClass('fade1');
        $('.contant_box3').removeClass('fade1');
        $('.contant_box4').removeClass('fade1');

    })
    $('#dot1d').click(function () {
        $('.intro1').animate({
            opacity: 0
        }, 500);
        $('.intro2').animate({
            opacity: 1
        }, 500);
        $('.intro3').animate({
            opacity: 0
        }, 500)
        $('.intro4').animate({
            opacity: 0
        }, 500);
        $('.intro5').animate({
            opacity: 0
        }, 500);
        $('.main_box').removeClass('fade1');
        $('.contant_box').addClass('fade1');
        $('.contant_box3').removeClass('fade1');
        $('.contant_box_bottom').removeClass('fade1');
        $('.contant_box_top').removeClass('fade1');
        $('.contant_box4').removeClass('fade1');
        $('#dot1d').addClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').removeClass('pulse2');
        $('#dot4d').removeClass('pulse2');
    })
    $('#dot2d').click(function () {
        $('.intro1').animate({
            opacity: 0
        }, 500);
        $('.intro2').animate({
            opacity: 0
        }, 500);
        $('.intro3').animate({
            opacity: 1
        }, 500)
        $('.intro4').animate({
            opacity: 0
        }, 500);
        $('.intro5').animate({
            opacity: 0
        }, 500);

        $('.main_box').removeClass('fade1');
        $('.contant_box').removeClass('fade1');
        $('.contant_box_bottom').addClass('fade1');
        $('.contant_box_top').addClass('fade1');
        $('.contant_box3').removeClass('fade1');
        $('.contant_box4').removeClass('fade1');
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').addClass('pulse2');
        $('#dot3d').removeClass('pulse2');
        $('#dot4d').removeClass('pulse2');
    })
    $('#dot3d').click(function () {
        $('.intro1').animate({
            opacity: 0
        }, 500);
        $('.intro2').animate({
            opacity: 0
        }, 500);
        $('.intro3').animate({
            opacity: 0
        }, 500)
        $('.intro4').animate({
            opacity: 1
        }, 500);
        $('.intro5').animate({
            opacity: 0
        }, 500);
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').addClass('pulse2');
        $('#dot4d').removeClass('pulse2');
        $('.main_box').removeClass('fade1');
        $('.contant_box').removeClass('fade1');
        $('.contant_box_bottom').removeClass('fade1');
        $('.contant_box_top').removeClass('fade1');
        $('.contant_box3').addClass('fade1');
        $('.contant_box4').removeClass('fade1');
    })
    $('#dot4d').click(function () {
        $('.intro1').animate({
            opacity: 0
        }, 500);
        $('.intro2').animate({
            opacity: 0
        }, 500);
        $('.intro3').animate({
            opacity: 0
        }, 500)
        $('.intro4').animate({
            opacity: 0
        }, 500);
        $('.intro5').animate({
            opacity: 1
        }, 500);
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').removeClass('pulse2');
        $('#dot4d').addClass('pulse2');
        $('.main_box').removeClass('fade1');
        $('.contant_box').removeClass('fade1');
        $('.contant_box_bottom').removeClass('fade1');
        $('.contant_box_top').removeClass('fade1');
        $('.contant_box3').removeClass('fade1');
        $('.contant_box4').addClass('fade1');
    })
}