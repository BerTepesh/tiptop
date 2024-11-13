import $ from 'jquery';

$(function(){
	$("[data-item='baseSelectValue']").click(function() {
		$(this).toggleClass('active');
		return false;
	});

	$("[data-item='baseSelectItem']").click(function() {
		let btn = $("[data-item='baseSelectValue']");
		btn.text($(this).text());	
		btn.removeClass('active');	
		return false;
	});

	$(document).mouseup( function(e){ 
		var div = $("[data-item='baseSelect']"); 
		if ( !div.is(e.target) 
		    && div.has(e.target).length === 0 ) { 
			div.find("[data-item='baseSelectValue']").removeClass('active'); 
		}
	});
});