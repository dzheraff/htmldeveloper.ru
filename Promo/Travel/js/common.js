$(function() {

	$(document).scroll(function(){
		$('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
	});
		AOS.init();

});

$(window).on('load', function(){
	$('.preloader').delay(500).fadeOut('slow');
});

// $(window).on('load', function () {
//   $preloader = $('.preloader'),
//     $pulse = $preloader.find('.pulse');
//   $pulse.fadeOut();
//   $preloader.delay(350).fadeOut('slow');
// });

