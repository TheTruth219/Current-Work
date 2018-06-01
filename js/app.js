$(document).ready(function() {
  $('.icon-three').click(function() {
    $('.icon-three').toggleClass('active-three');
  });

  new WOW().init();

  ///////Page Disable while loading////////////////////////////////////////////
  setTimeout(function() {
    $("section").removeClass("disable");
  }, 7000)


  $(".fa-chevron-down").hover(function() {

    $(this).removeClass("fa-lg");
    $(this).addClass("fa-2x");},
    function() {
      $(this).removeClass("fa-2x");
      $(this).addClass("fa-lg");

  });




});
