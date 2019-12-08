/*categorywise photo*/
$(function() {
	var selectedClass = "";
	$(".fil-cat").click(function(){
	selectedClass = $(this).attr("data-rel");
   $("#portfolio").fadeTo(100, 0.1);
	$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
  setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('scale-anm');
    $("#portfolio").fadeTo(300, 1);
  }, 300);

});
});
/*categorywise photo*/
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
document.querySelectorAll('.modal-button').forEach(function(el) {
    el.addEventListener('click', function() {
    var target = document.querySelector(el.getAttribute('data-target'));
    target.classList.add('is-active');
    target.querySelector('.modal-close').addEventListener('click',   function() {
        target.classList.remove('is-active');
     });
  });
});
