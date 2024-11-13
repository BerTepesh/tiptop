import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../components/slider';

class VideoSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			'arrows': true,
			'dots': false
		});
	}

	constructor ($container, opts) {
		super ($container, opts);
	}
}

$.fn.videoSlider = createPlugin(VideoSlider);