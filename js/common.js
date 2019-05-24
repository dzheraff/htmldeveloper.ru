$(function() {
	// Меню начало
	$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	// Меню конец
	// Эффект появления начало
		AOS.init();
	// Эффект появления конец
	});
	

	
});
	// Прелоадер начало
$(window).on('load', function(){
	$('.loader').delay(1000).fadeOut('slow');
});
	// Прелоадер конец

	
