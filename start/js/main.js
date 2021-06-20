$(document).ready(function(){
$('#cart').hover(
  function () {
	$('.dropdown-menu',this).stop().slideDown(100);
  },
  function () {
    $('.dropdown-menu',this).stop().slideUp(100);
  }
);
$('#account').hover(
  function () {
	$('.dropdown-menu',this).stop().slideDown(100);
  },
  function () {
    $('.dropdown-menu',this).stop().slideUp(100);
  }
);
$('#help').hover(
  function () {
	$('.dropdown-menu',this).stop().slideDown(100);
  },
  function () {
    $('.dropdown-menu',this).stop().slideUp(100);
  }
);

});