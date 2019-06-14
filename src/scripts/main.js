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

	var villageTabContainers = $('.selection-villagemain-tab');
	villageTabContainers.hide().filter(':first').fadeIn('slow');
	$('.selection-villagemain-navigation__item').filter(':first').addClass('selected');
	$('.selection-villagemain-navigation__item').click(function (e) {
		if( $(this).hasClass('selected') ){
			return false;
		}
		e.preventDefault();
		villageTabContainers.hide();
		villageTabContainers.filter(this.hash).fadeIn('slow');
		$('.selection-villagemain-navigation__item').removeClass('selected');
		$(this).addClass('selected');
	});

	$(document).find('[name="tel"]').inputmask({
		mask: "+7 (999) 999-99-99",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});
	$(document).find('[name="email"]').inputmask({ 
		alias: "email",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});

});

$(document).on('click', '.selection-housemain-item-main-right__btn', function (e) {
	e.preventDefault();
	if( $(this).hasClass('housemain-item-selected__btn') ){
		return false;
	}
	$(document).find('.selection-housemain-item').addClass('disabled');
	$(this).closest('.selection-housemain-item').removeClass('disabled');
	$(this).closest('.selection-housemain-item').addClass('selected');
	$(this).closest('.selection-housemain-wrap').find('.selection-housemain-select-wrap').slideDown();
	$(this).siblings('.selection-housemain-item-main-right__btn-wrap').delay(250).fadeIn('fast');
	$(this).fadeOut('fast');
});

$(document).on('click', '.selection-housemain-select__cancel', function (e) {
	e.preventDefault();
	$(this).closest('.selection-housemain-select-wrap').slideUp();
	$(document).find('.selection-housemain-item').removeClass('disabled selected');
	$(this).closest('.selection-housemain-select-wrap').siblings('.selection-housemain-item').find('.selection-housemain-item-main-right__btn-wrap').fadeOut('fast');
	$(this).closest('.selection-housemain-select-wrap').siblings('.selection-housemain-item').find('.selection-housemain-item-main-right__btn').delay(250).fadeIn('fast');
	$(this).closest('.selection-housemain-select-wrap').siblings('.selection-housemain-item').find('.selection-housemain-item__selected').fadeOut('fast');
});

if( screen.width < 768 ){

	$(document).on('click', '.selection-housemain-item__img', function (e) {
		if( $(this).closest('.selection-housemain-item').hasClass('selected') ){
			return false;
		}
		$(document).find('.selection-housemain-item').addClass('disabled');
		$(this).closest('.selection-housemain-item').removeClass('disabled');
		$(this).closest('.selection-housemain-item').addClass('selected');
		$(this).closest('.selection-housemain-wrap').find('.selection-housemain-select-wrap').slideDown();
		$(this).closest('.selection-housemain-wrap').find('.selection-housemain-item__selected').css("display", "flex").hide().fadeIn('fast');
	});
	$(document).on('click', 'a.selection-housemain-item', function (e) {
			e.preventDefault();
	});

	$(document).on('click', '.partners-page-projects-items-item-top', function (e) {
		e.preventDefault();
		$(this).toggleClass('out');
		$(this).next().slideToggle();
	});

	$(document).on('click', '.selection-housemain-item-top', function(){
		$(this).toggleClass('out');
		$(this).next().slideToggle();
	});

}

$(document).on('blur', 'input:not(input[name="tel"]):not(input[name="email"]), textarea', function(){
	if( $(this).val() != '' ){
			$(this).addClass('input-border');
	} else {
			$(this).removeClass('input-border');
	}
});
$(document).on('blur', 'input[name="tel"], input[name="email"]', function(){
	if ( $(this).inputmask("isComplete") ){
			$(this).addClass('input-border');
	} else {
			$(this).removeClass('input-border');
	}
});
$(document).on('click', 'button[type="submit"]', function(){
	let inputs = $(this).closest('form').find('input[data-required=""]'),
			temp = true;
	if( $(this).closest('form').find('input[name="tel"][data-required=""]').length != 0 ){
		if ( !$(this).closest('form').find('input[name="tel"][data-required=""]').hasClass('input-border') ) {
			$(this).closest('form').find('input[name="tel"][data-required=""]').addClass('input-err');
			temp = false;
		} else {
			$(this).closest('form').find('input[name="tel"][data-required=""]').removeClass('input-err');
		}
	}
	if( $(this).closest('form').find('input[name="email"][data-required=""]').length != 0 ){
		if ( !$(this).closest('form').find('input[name="email"][data-required=""]').hasClass('input-border') ) {
			$(this).closest('form').find('input[name="email"][data-required=""]').addClass('input-err');
				temp = false;
		} else {
			$(this).closest('form').find('input[name="email"][data-required=""]').removeClass('input-err');
		}
	}
	for (var i = 0; i < inputs.length; i++) {
			if ( !inputs.eq(i).hasClass('input-border') ) {
					inputs.eq(i).addClass('input-err');
					temp = false;
			} else {
					inputs.eq(i).removeClass('input-err');
			}
	}
	console.log(temp)
	if( temp == false ){
			return false;
	}
});