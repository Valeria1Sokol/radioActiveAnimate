// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal]
var btn00 = document.getElementById("dot11");
var btn11 = document.getElementById("dot12");
var btn22 = document.getElementById("dot13");
var btn33 = document.getElementById("dot14");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBtn")[0];

// When the user clicks on the button, open the modal 
btn00.onclick = function () {
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
    $('.dontGiveUp').css({
        display: 'none'
    })
     $('.modalImg').css({
        backgroundImage: 'none',
    });
    $('.main_box').addClass('fade1');
        $('.pay').removeClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
        $('.challenge').removeClass('fade1');
}
btn11.onclick = function () {
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
    $('.dontGiveUp').css({
        display: 'none'
    })
     $('.modalImg').css({
        backgroundImage: 'none',
    });
     $('.main_box').removeClass('fade1');
         $('.pay').addClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
        $('.challenge').removeClass('fade1');
}

btn22.onclick = function () {
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
    $('.dontGiveUp').css({
        display: 'none'
    });
    $('.modalImg').css({
        backgroundImage: 'url(./img/the_seed.png)'
    });
      $('.main_box').removeClass('fade1');
         $('.pay').removeClass('fade1');
        $('.challenge').addClass('fade1');
        $('.dontGiveUp').removeClass('fade1');
    $('.modalImg').addClass('fade1');
    
}
btn33.onclick = function () {
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
    $('.dontGiveUp').css({
        display: 'flex'
    });
    $('.modalImg').css({
        backgroundImage: 'url(./img/power.png)'
    });
    $('.main_box').removeClass('fade1');
         $('.pay').removeClass('fade1');
        $('.dontGiveUp').addClass('fade1');
        $('.challenge').removeClass('fade1');
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
