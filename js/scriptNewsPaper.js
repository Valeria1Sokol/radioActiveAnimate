settings = {
    //Model Popup
    objModalPopupBtn: ".modalButton",
    objModalCloseBtn: ".overlay, .closeBtn",
    objModalDataAttr: "data-popup"
}
//$(settings.objModalPopupBtn).bind("click", function () {
//    if ($(this).attr(settings.objModalDataAttr)) {
//
//        var strDataPopupName = $(this).attr(settings.objModalDataAttr);
//
//
//        //Fade In Modal Pop Up
//        $(".overlay, #" + strDataPopupName).fadeIn();
//
//    }
//});
$('.btbL').bind("click", function () {
    $('.modalImg').css({
        backgroundImage: 'url(./img/poster3.png)',
//        width: '60%'
    });

    $('.infoL').css({
        display: 'flex'
    })
    $('.infoC').css({
        display: 'none'
    })
    $('.infoR').css({
        display: 'none'
    })
    $('.btnSience').css({
        display: 'none'
    })
    $('.btnImpact').css({
        display: 'flex'
    })
    $('.btnRebel').css({
        display: 'none'
    })
    if ($(this).attr(settings.objModalDataAttr)) {

        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();

    }
});
$('.btbC').bind("click", function () {
    if ($(this).attr(settings.objModalDataAttr)) {
        $('.modalImg').css({
            backgroundImage: 'url(./img/poster1.png)',
//            width: '66%'
        });
        $('.infoL').css({
            display: 'none'
        })
        $('.infoC').css({
            display: 'flex'
        })
        $('.infoR').css({
            display: 'none'
        });
        $('.btnSience').css({
            display: 'none'
        })
        $('.btnImpact').css({
            display: 'none'
        })
        $('.btnRebel').css({
            display: 'flex'
        })
        $('.modalWrapper').css({
            'align-items': 'flex-start'
        })

        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();

    }

});
$('.btbR').bind("click", function () {
    if ($(this).attr(settings.objModalDataAttr)) {
        $('.modalImg').css({
            backgroundImage: 'url(./img/poster2.png)',
//            width: '74%'
        });
        $('.infoL').css({
            display: 'none'
        })
        $('.infoC').css({
            display: 'none'
        })
        $('.infoR').css({
            display: 'flex'
        })
        $('.modalWrapper').css({
            'align-items': 'flex-start'
        })
        $('.btnSience').css({
            display: 'flex'
        })
        $('.btnImpact').css({
            display: 'none'
        })
        $('.btnRebel').css({
            display: 'none'
        })
        var strDataPopupName = $(this).attr(settings.objModalDataAttr);


        //Fade In Modal Pop Up
        $(".overlay, #" + strDataPopupName).fadeIn();

    }
});

//On clicking the modal background
$(settings.objModalCloseBtn).bind("click", function () {
    $(".modal").fadeOut();
});




