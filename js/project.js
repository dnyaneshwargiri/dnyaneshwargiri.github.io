$(document).ready(function() {
// Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".sidenav").toggleClass("is-active");
  });
});
function openNav() {
  $(".navbar-burger").toggleClass("is-active");
  document.getElementById("navbarBasicExample").style.width = "250px";
  document.getElementById("rightcontent").style.marginLeft = "250px";
}
function closeNav() {
  document.getElementById("navbarBasicExample").style.width = "0";
  document.getElementById("rightcontent").style.marginLeft= "0";
}
/*Gesture using hammer.js*/
Hammer(document.getElementById('rightcontent')).on('swiperight', function(e) {
  if($(window).width() <= 768){
      openNav();
      $(".navbar-burger").toggleClass("is-active");
      $(".sidenav").toggleClass("is-active");
  }
});
Hammer(document.getElementById('rightcontent')).on('swipeleft', function(e) {
  if($(window).width() <= 768){
    closeNav();
    $(".navbar-burger").toggleClass("is-active");
    $(".sidenav").toggleClass("is-active");
}
});
/*Gesture using hammer.js*/
