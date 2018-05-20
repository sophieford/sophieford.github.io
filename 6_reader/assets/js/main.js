$(document).ready(function() {

  $(".b-styles").mouseenter(function() {
      $(".m-styles").addClass("active");

    });

    $(".b-texts").mouseenter(function() {
        $(".m-texts").addClass("active");

      });

  $(".menu").mouseleave(function() {
      $(this).removeClass("active");
    });

    $('.b-style1').click(function() {
      $('body').toggleClass('change-style1');
    });

    $('.b-style2').click(function() {
      $('body').toggleClass('change-style2');
    });

    $('.b-style3').click(function() {
      $('body').toggleClass('change-style2');
    });

    $('.b-red').click(function() {
      $('body').toggleClass('change-red');
    });

    $('.b-blue').click(function() {
      $('body').toggleClass('change-blue');
    });
    $('.b-green').click(function() {
      $('body').toggleClass('change-green');
    });
    $('.b-pink').click(function() {
      $('body').toggleClass('change-pink');
    });
    $('.b-yellow').click(function() {
      $('body').toggleClass('change-yellow');
    });
    $('.b-purple').click(function() {
      $('body').toggleClass('change-purple');
    });
    $('.b-orange').click(function() {
      $('body').toggleClass('change-orange');
    });
// Add jQuery here

// EACH CLICK FUCNTION TARGETS THE correct .b-tag FROM THE NAVIGATION
// HIDES ALL .item BY ADDING A CLASS OF HIDE with .addClass 'hide' (A)
// AND REMOVES CLASS OF SHOW FROM ALL .item WITH .removeClass 'show'

// THEN TARGETS THE RIGHT TAGGED ITEM WITH .item.tag
// ADDS THE CLASS OF 'show'
// REMOVES THE CLASS OF 'hide' THAT WAS PREVIOUSLY APPLIED (A)

$(".b-text1").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.text1").addClass("show");
  $(".item.text1").removeClass("hide");
});

$(".b-text2").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.text2").addClass("show");
  $(".item.text2").removeClass("hide");
});

$(".b-text3").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.text3").addClass("show");
  $(".item.text3").removeClass("hide");
});

$(".b-moreinfo1").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.moreinfo1").addClass("show");
  $(".item.moreinfo1").removeClass("hide");
});

$(".b-moreinfo2").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.moreinfo2").addClass("show");
  $(".item.moreinfo2").removeClass("hide");
});

$(".b-moreinfo3").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.moreinfo3").addClass("show");
  $(".item.moreinfo3").removeClass("hide");
});

$(".b-moreinfo4").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.moreinfo4").addClass("show");
  $(".item.moreinfo4").removeClass("hide");
});

$(".b-moreinfo5").click(function() {
  $(".item").addClass("hide");
  $(".item").removeClass("show");

  $(".item.moreinfo5").addClass("show");
  $(".item.moreinfo5").removeClass("hide");
});
// dont remvoe this line
});
