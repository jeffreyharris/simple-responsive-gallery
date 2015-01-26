  jQuery(function(){
	jQuery('.galPhoto').hide();
	jQuery('.galPhoto:first').show();
        jQuery('.singleItem').click(function(){  
            jQuery('.galPhoto').hide();  
			clickedStory = jQuery('#'+ jQuery(this).attr('target'))
			clickedStory.show();
			jQuery('html,body').animate({scrollTop: clickedStory.offset().top-85},'slow');
        });
});
