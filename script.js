  jQuery(function(){
	jQuery('.baStory').hide();
	jQuery('.baStory:first').show();
        jQuery('.singleItem').click(function(){  
            jQuery('.baStory').hide();  
			clickedStory = jQuery('#'+ jQuery(this).attr('target'))
			clickedStory.show();
			jQuery('html,body').animate({scrollTop: clickedStory.offset().top-85},'slow');
        });
});
