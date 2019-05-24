$(function() {

	$('#my-menu').mmenu({
		extensions: ['widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src="img/logo2.png" alt="Phototime">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function(){
		$('.hamburger').removeClass('is-active');
	});
});

// Карусель design начало

	$('.carousel-design').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		},100);
	});

	$('.carousel-design').owlCarousel({
		loop: true, 
		nav: true,
		smartSpeed: 700,
		navText:['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
		}
	});

// Карусель design конец

// Карусель community начало

	$('.carousel-community').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		},100);
	});

	$('.carousel-community').owlCarousel({
		loop: true, 
		nav: true,
		autoHeight: true,
		smartSpeed: 700,
		navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 1
			},
			800: {
				items: 1
			},
			992: {
				items: 2
			}
		}
	});

// Карусель community конец

// preloader

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
})
// preloader

 // переход меню
	function slowScroll (id) {
		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 500);
	}
	// переход меню
// Кнопка наверх начало
$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});

$('.top').click(function(){
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
// Кнопка наверх конец