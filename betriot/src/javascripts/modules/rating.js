import $ from 'jquery';

$(function(){
	$('.rating .star').click(function(){
		$('.rating .star').removeClass('active');
		$(this).toggleClass('active');
		return false;
	});
});