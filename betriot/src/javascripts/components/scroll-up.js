import $ from 'jquery';

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > $(document).height() / 2 - $(window).height() / 2) {
			$('.scroll-up').show();
		} else {
			$('.scroll-up').hide();
		}

    // if($(window).scrollTop() + $(window).height() + 200 >= $(document).height()){
    //   $('.scroll-up').addClass('down');		
    // } else {
    //   $('.scroll-up').removeClass('down');		
    // }
	});
 
	$('.scroll-up').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});