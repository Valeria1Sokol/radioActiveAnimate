       $('.share').click(function () {
           $(".modal2").css({
               display: 'flex'
           });
       });
       $('.footerIcon_loc').click(function () {
           $(".location").css({
               display: 'flex'
           });
       });
       $('.boxClose').click(function () {
           $(".modal2").css({
               display: 'none'
           });
       });
       $('.header_btn_box_m').click(function () {
           $(".modal2").css({
               display: 'flex'
           });
       });

if (window.innerWidth>='1025')
    {
       var modal1 = document.getElementById("closeAll");
       var check = document.getElementsByClassName("menuCheck");

       // When the user clicks anywhere outside of the modal, close it
       window.onclick = function (event) {
           if (event.target == modal1) {
               $('.menuCheck').prop('checked', false);
           }
       } 
    }
       
