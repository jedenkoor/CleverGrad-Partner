$(document).ready(function () {
	
	var projectTabContainers = $('.project-main-slider-wrap');
	projectTabContainers.hide().filter(':last').fadeIn('slow');
	$('.project-main-slider-navigation__item').filter(':last').addClass('selected');
	$('.project-main-slider').filter(':last').slick({
		slidesToShow: 1,
  	slidesToScroll: 1,
		infinite: true,
		lazyLoad: 'progressive',
	});
	$('.project-main-slider-navigation__item').click(function (e) {
		if( $(this).hasClass('selected') ){
			return false;
		}
		if( this.hash == '#floors' ){
			$(document).find('.project-main-slider-navigation__bar').removeClass('gallery-bar');
		} else {
			$(document).find('.project-main-slider-navigation__bar').addClass('gallery-bar');
		}
		console.log(this.hash);
		e.preventDefault();
		projectTabContainers.hide();
		projectTabContainers.filter(this.hash).fadeIn('slow');
		$('.project-main-slider.slick-initialized').slick('unslick');
		projectTabContainers.filter(this.hash).find('.project-main-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			lazyLoad: 'progressive',
		});
		$('.project-main-slider-navigation__item').removeClass('selected');
		$(this).addClass('selected');
	});
	$('.project-main-slider-navigation__bar').click(function (e) {
		projectTabContainers.hide();
		if( !$(this).hasClass('gallery-bar') ){
			projectTabContainers.filter('#gallery').fadeIn('slow');
			$('.project-main-slider.slick-initialized').slick('unslick');
			projectTabContainers.filter('#gallery').find('.project-main-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				lazyLoad: 'progressive',
			});
			$('.project-main-slider-navigation__item').removeClass('selected');
			$('.project-main-slider-navigation li:last-child a').addClass('selected');
			$(this).addClass('gallery-bar');
		} else {
			projectTabContainers.filter('#floors').fadeIn('slow');
			$('.project-main-slider.slick-initialized').slick('unslick');
			projectTabContainers.filter('#floors').find('.project-main-slider').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				lazyLoad: 'progressive',
			});
			$('.project-main-slider-navigation__item').removeClass('selected');
			$('.project-main-slider-navigation li:first-child a').addClass('selected');
			$(this).removeClass('gallery-bar');
		}
	});

});

