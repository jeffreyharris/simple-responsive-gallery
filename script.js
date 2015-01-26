  $(function(){
	$('.galPhoto').hide();
	$('.galPhoto:first').show();
        $('.singleItem').click(function(){  
            $('.galPhoto').hide();  
			clickedStory = $('#'+ $(this).attr('target'))
			clickedStory.show();
			$('html,body').animate({scrollTop: clickedStory.offset().top-10},'slow');
        });
});

