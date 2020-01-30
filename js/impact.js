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
        $('.main_box').addClass('fade1');
        $('.contant_box').removeClass('fade1');
        $('.contant_box3').removeClass('fade1');
        $('.contant_box2').removeClass('fade1');
        
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').removeClass('pulse2');

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
        $('.main_box').removeClass('fade1');
         $('.contant_box').addClass('fade1');
        $('.contant_box3').removeClass('fade1');
        $('.contant_box2').removeClass('fade1');
          
        $('#dot1d').addClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').removeClass('pulse2');
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
        $('#dot1d').css({
            transform: 'scale(1)'
        });
        $('#dot2d').css({
            transform: 'scale(2)'
        });
        $('#dot3d').css({
            transform: 'scale(1)'
        });
        $('.main_box').removeClass('fade1');
         $('.contant_box').removeClass('fade1');
        $('.contant_box2').addClass('fade1');
        $('.contant_box3').removeClass('fade1');
          
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').addClass('pulse2');
        $('#dot3d').removeClass('pulse2');
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
        $('#dot1d').css({
            transform: 'scale(1)'
        });
        $('#dot2d').css({
            transform: 'scale(1)'
        });
        $('#dot3d').css({
            transform: 'scale(2)'
        });
        $('.main_box').removeClass('fade1');
         $('.contant_box').removeClass('fade1');
        $('.contant_box3').addClass('fade1');
        $('.contant_box2').removeClass('fade1');
          
        $('#dot1d').removeClass('pulse2');
        $('#dot2d').removeClass('pulse2');
        $('#dot3d').addClass('pulse2');
    })
