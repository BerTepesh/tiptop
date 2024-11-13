import $ from 'jquery';

$(function () {
	let isWide = false // $(window).width() >= 1440;

	if ($(window).scrollTop() > 100) {
		if (!isWide) {		
			$(".header_sticky").addClass("active");
		}
	}
	
	$(window).scroll(function () {
		if (!isWide) {		
			if ($(window).scrollTop() < 1) {
				$(".header_sticky").removeClass("sticky");
				$(".header_sticky").removeClass("active");
				$('.p-container').css('padding-top', 0)
			} else if ($(window).scrollTop() > 500) {
				$(".header_sticky").removeClass("sticky");
				$(".header_sticky").addClass("active");
				$('.p-container').css('padding-top', $(".header_sticky").height())
			} else {
				$(".header_sticky").addClass("sticky");
			}
		}
	});
	
	// $(window).on('resize', function(){
	// 	isWide = $(window).width() >= 1440;
	// });
});