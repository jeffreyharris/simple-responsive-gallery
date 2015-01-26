var JEFF = JEFF || {};

$('.galPhoto').hide();
$('.galPhoto:first').show();
	
JEFF.simpleGallery = function($el){  
	$('.galPhoto').hide();
	$photo = $('#'+ $el.attr('target'));
	$photo.fadeIn(500);	
	$('html,body').animate({scrollTop: $photo.offset().top-10},'slow');
}

$(document).ready(function() {
	$('.singleItem').bind('click', function(e) { 
		e.preventDefault();
		JEFF.simpleGallery($(this));
	});
});
