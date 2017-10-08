$(function(){
	$(".owl-carousel").owlCarousel({
		items:1
	});
	$('.nav-btn').on('click',function () {
		$('.menu').stop(true,true).slideToggle(500);
	});
});

var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	if ($(window).scrollTop() >= 200){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function(){
	$("html,body").animate({scrollTop:0}, 900)
});