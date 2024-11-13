import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';

class Dropdown {

	constructor ($container) {
		this.$container = $container;
    this.update();
	}

	update () {
		const $container = this.$container;
		const $btn = $container.find(`[${ 'data-dropdown-btn' }]`);

		$btn.find('a').on('click', function(event){
			event.stopPropagation(); 
		});

		$btn.on('click', function(event){	
			event.preventDefault();
			let href = $(this).attr('data-dropdown-link');
			
			if (href !== '') {
				event.preventDefault();

				$btn.removeClass('droped');
				$('[data-dropdown-content]').slideUp(300);

				const target = $('[data-dropdown-content="'+href+'"]');
				if(target.length > 0)  {
					if ( target.is(':hidden') ) {
						target.slideDown(300);	
						$(this).addClass('droped');
					} else {
						target.slideUp(300);
						$(this).removeClass('droped');
					}
				}
			}
		});
	}

	init () {
	}
}

$.fn.dropdown = createPlugin(Dropdown, {
	'api': ['instance', 'update']
});

