/*page loader animation*/
$(window).on('load', function () {
      //alert("Window Loaded");
       $('#loader').fadeOut();
 });
/*page loader animation ends*/
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
/*to allow carousel gesture*/
var  testimonial_view=false;
Hammer(document.getElementById('testimonial')).on('swiperight', function(e) {
 testimonial_view =true;
});
Hammer(document.getElementById('testimonial')).on('swipeleft', function(e) {
 testimonial_view =true;
});
/*to allow carousel gesture*/
Hammer(document.getElementById('rightcontent')).on('swiperight', function(e) {
  if($(window).width() <= 768){
    if( ! testimonial_view)
    {
      openNav();
      $(".navbar-burger").toggleClass("is-active");
      $(".sidenav").toggleClass("is-active");
    }
    testimonial_view=false;
}
});
Hammer(document.getElementById('rightcontent')).on('swipeleft', function(e) {
  if($(window).width() <= 768){
    if( ! testimonial_view)
    {
    closeNav();
    $(".navbar-burger").toggleClass("is-active");
    $(".sidenav").toggleClass("is-active");
    }
    testimonial_view=false;
}
});
/*Gesture using hammer.js*/
$('.carousel.carousel-slider').carousel({fullWidth: true});
