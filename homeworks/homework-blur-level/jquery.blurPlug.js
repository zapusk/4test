(function($){

	$.fn.blurPlug = function(conf){


		var conf = $.extend({
			filter: 'blur'
		}, conf)



		var start = function(){

			var section = $(this).parent();
			var bgImg = $(this).css('background-image');
			// $(this).find( 'img' ); *****
			section.append('<div class="filtered">');
			$('.filtered').css('background-image', bgImg);
			////////////////////////////
			//////TODO: Switch. Css method
			////////////////////////////
			switch (conf.filter) {
				case 'blur':
					var blurIntensity = +prompt('Введите интенсивность blur(1-10)','');
					$('.filtered').css('filter','blur('+blurIntensity+'px)');
					break;
				case 'grayscale':
					var grayscaleIntensity = +prompt('Введите интенсивность grayscale(1-100)','');
					$('.filtered').css('filter','grayscale('+grayscaleIntensity+'%)');
					break;
				default: alert('Такого эффекта нет!')}
		}

		return this.each(start)
	}
}(jQuery))