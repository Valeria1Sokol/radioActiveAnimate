// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn0 = document.getElementById("dot0d");
var btn1 = document.getElementById("dot1d");
var btn2 = document.getElementById("dot2d");
var btn3 = document.getElementById("dot3d");
var btn4 = document.getElementById("dot4d");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];
if (window.innerWidth <= '1024') {


    // When the user clicks on the button, open the modal 
    btn0.onclick = function () {
        modal.style.display = "block";
        $('.main_box').css({
            display: 'flex'
        });
        $('.pay').css({
            display: 'none'
        });
        $('.challenge').css({
            display: 'none'
        });
        $('.cause').css({
            display: 'none'
        });
        $('.dontGiveUp').css({
            display: 'none'
        })
        $('.modalImg').css({
            backgroundImage: 'none',
        });

        $('.main_box').addClass('fade1');
        $('.pay').removeClass('fade1');
        $('.challenge').removeClass('fade1');
        $('.cause').removeClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
        $('.modalImg').removeClass('fade1');
    }
    btn1.onclick = function () {
        modal.style.display = "block";
        $('.main_box').css({
            display: 'none'
        });
        $('.pay').css({
            display: 'flex'
        });
        $('.challenge').css({
            display: 'none'
        });
        $('.cause').css({
            display: 'none'
        });
        $('.dontGiveUp').css({
            display: 'none'
        })
        $('.modalImg').css({
            backgroundImage: 'none',
        });
        $('.main_box').removeClass('fade1');
        $('.pay').addClass('fade1');
        $('.challenge').removeClass('fade1');
        $('.cause').removeClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
        $('.modalImg').removeClass('fade1');
    }
    btn2.onclick = function () {
        modal.style.display = "block";
        $('.main_box').css({
            display: 'none'
        });
        $('.pay').css({
            display: 'none'
        });
        $('.challenge').css({
            display: 'flex'
        });
        $('.cause').css({
            display: 'none'
        });
        $('.dontGiveUp').css({
            display: 'none'
        })
        $('.modalImg').css({
            backgroundImage: 'none',
        });
        $('.main_box').removeClass('fade1');
        $('.pay').removeClass('fade1');
        $('.challenge').addClass('fade1');
        $('.cause').removeClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
        $('.modalImg').removeClass('fade1');
    }
    btn3.onclick = function () {
        modal.style.display = "block";
        $('.main_box').css({
            display: 'none'
        });
        $('.pay').css({
            display: 'none'
        });
        $('.challenge').css({
            display: 'none'
        });
        $('.cause').css({
            display: 'flex'
        });
        $('.dontGiveUp').css({
            display: 'none'
        });
        $('.modalImg').css({
            backgroundImage: 'url(./img/behind_img_bottom1.png)'
        });
        $('.main_box').removeClass('fade1');
        $('.pay').removeClass('fade1');
        $('.challenge').removeClass('fade1');
        $('.cause').addClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
        $('.modalImg').addClass('fade1');

    }
    btn4.onclick = function () {
        modal.style.display = "block";
        $('.main_box').css({
            display: 'none'
        });
        $('.pay').css({
            display: 'none'
        });
        $('.challenge').css({
            display: 'none'
        });
        $('.cause').css({
            display: 'none'
        });
        $('.dontGiveUp').css({
            display: 'flex'
        });
        $('.modalImg').css({
            backgroundImage: 'url(./img/behind_img_bottom2.png)'
        });
        $('.main_box').removeClass('fade1');
        $('.pay').removeClass('fade1');
        $('.challenge').removeClass('fade1');
        $('.cause').removeClass('fade1');
        $('.dontGiveUp').addClass('fade1');
        $('.modalImg').addClass('fade1');
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

