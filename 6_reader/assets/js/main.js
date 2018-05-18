$(document).ready(function() {

  $(".menu").mouseenter(function() {
      $(".nav").addClass("active");
    });
      $(".nav").mouseleave(function() {
      $(".nav").removeClass("active");
    });

  $(".other").mouseenter(function() {
        $(".othernav").addClass("active");
      });
        $(".othernav").mouseleave(function() {
        $(".othernav").removeClass("active");
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
