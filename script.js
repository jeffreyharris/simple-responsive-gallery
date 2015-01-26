var JEFF = JEFF || {};

$('.galPhoto').hide();
$('.galPhoto:first').show();
	
JEFF.simpleGallery = function($el){  
	$photo = $('#'+ $el.attr('target'));
		
	$('.galPhoto').hide( 0, function() {
		$photo.show();
	});
		
	$('html,body').animate({scrollTop: $photo.offset().top-10},'slow');
}

$(document).ready(function() {
	$('.singleItem').bind('click', function(e) { 
		e.preventDefault();
		JEFF.simpleGallery($(this));
	});
});
