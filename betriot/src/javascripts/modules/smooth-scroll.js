import $ from 'jquery';

$(function () {	
	let menu = $('.navigation'),
		offset = $(window).width() > 992 ? 40 : 15,
		offsetScroll = $(window).width() > 567 ? 200 : 50,
		topMenuHeight = $('.header').outerHeight() + offset,
		menuItems = menu.find('a[href*="#"]'),
		scrollItems = menuItems.map(function () {
			const hash 		= $(this).prop('hash'),
						target	= $(hash);

						
						

			if (target.length) { return target; }
		});

	menuItems.click(function (e) {
		e.preventDefault();
		if ($(this).attr('hash') !== '' && $(this).attr('hash') !== 'reviews-section') { // && $(this).attr('hash') !== 'lastSection'
			event.preventDefault();
			const hash = $(this).prop('hash');
			const target	= $(hash);			

			if (target.length > 0) {
				$('html, body').animate({
					scrollTop: target.offset().top - $('.header').height() - offset
				}, 200, function () { });
			}
		}
	});

	$('a#reviews-section').click(function (e) {
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $(document).height() - $(window).height()
		}, 200, function () { });
	});

	$(window).scroll(function () {
		let fromTop = $(this).scrollTop() + topMenuHeight;


		let cur = scrollItems.map(function () {
			if($(window).scrollTop()+$(window).height()>=$(document).height()){
				return $('#reviews-section');				
			}
				
			if ($(this).offset().top - offsetScroll < fromTop)
				return this;
		});

		cur = cur[cur.length - 1];

		var id = cur && cur.length ? cur[0].id : "";		

		menuItems.removeClass("active");
		if (id) {
			menuItems.parent().end().filter("[href*='" + id + "']").addClass("active");
		}

	})
});

