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
    if (window.innerWidth >= '769') {
        $('.modalImg .img1').css({
            display: 'flex'
        });
        $('.modalImg .img2').css({
            display: 'none'
        });
        $('.modalImg .img3').css({
            display: 'none'
        });
    } else {
        $('.modalImg .img1').css({
            display: 'none'
        });
        $('.modalImg .img2').css({
            display: 'none'
        });
        $('.modalImg .img3').css({
            display: 'none'
        });
    }

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
        if (window.innerWidth >= '769') {
            $('.modalImg .img2').css({
                display: 'flex'
            });
            $('.modalImg .img1').css({
                display: 'none'
            });
            $('.modalImg .img3').css({
                display: 'none'
            });
        } else {
            $('.modalImg .img1').css({
                display: 'none'
            });
            $('.modalImg .img2').css({
                display: 'none'
            });
            $('.modalImg .img3').css({
                display: 'none'
            });
        }
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
        if (window.innerWidth >= '769') {
            $('.modalImg .img3').css({
                display: 'flex'
            });
            $('.modalImg .img2').css({
                display: 'none'
            });
            $('.modalImg .img1').css({
                display: 'none'
            });
        } else {
            $('.modalImg .img1').css({
                display: 'none'
            });
            $('.modalImg .img2').css({
                display: 'none'
            });
            $('.modalImg .img3').css({
                display: 'none'
            });
        }
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
