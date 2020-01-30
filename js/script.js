var open = $(".main2");
var widthW = window.innerWidth;
var widthH = window.innerHeight;
console.log(widthH);
console.log(widthW);
if (widthW >= '1024') {
    open.each(function () {
        var openB = $(this);
        var k = 1;
        openB.find(".marie").click(function () {

            $('.about_box_m').animate({
                opacity: 1,
            }, 1000);
            $('.about_box_p').animate({
                opacity: 0,
            }, 100);
            $('.about_box_m').css({
                zIndex: 3
            });
            $('.about_box_p').css({
                zIndex: 0
            });
            $('.about_box').css({
                display: 'none'
            });
        });

        openB.find(".pierre").click(function () {
            $('.about_box').css({
                display: 'none'
            });
            $('.about_box_p').animate({
                opacity: 1,
            }, 1000);
            $('.about_box_m').animate({
                opacity: 0,
            }, 100);
            $('.about_box_p').css({
                zIndex: 3
            });
            $('.about_box_m').css({
                zIndex: 0
            });
        });

    })
} else


if (widthW <= '1023') {
    open.each(function () {
        var openB = $(this);
        var k = 1;
        openB.find(".marie").click(function () {
            $('.about_box').css({
                display: 'none'
            });
            $('.about_box_m').animate({
                opacity: 1
            }, 1000);
            $('.about_box_m').css({
                zIndex: 2
            });
            $('.about_box_p').animate({
                opacity: 0
            }, 100);
            $('.about_box_p').css({
                zIndex: 0
            });

        });

        openB.find(".pierre").click(function () {
            $('.about_box').css({
                display: 'none'
            });
            $('.about_box_p').animate({
                opacity: 1
            }, 1000);
            $('.about_box_p').css({
                zIndex: 2
            });
            $('.about_box_m').css({
                zIndex: 0
            });
            $('.about_box_m').animate({
                opacity: 0
            }, 100);


        });

    })
}
