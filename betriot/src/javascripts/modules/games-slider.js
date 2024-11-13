import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../components/slider';

class GamesSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			'arrows': true,
			'dots': false,
			'infinite': true,
			'slidesToShow': 5,
			'slidesToScroll': 1,
			'responsive': [
				{
					breakpoint: 1440,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 765,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
			]
		});
	}

	constructor ($container, opts) {
		super ($container, opts);
	}
}

$.fn.gamesSlider = createPlugin(GamesSlider);