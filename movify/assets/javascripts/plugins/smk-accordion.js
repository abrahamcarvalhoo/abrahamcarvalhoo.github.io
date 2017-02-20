/**
 * SMK Accordion jQuery Plugin v1.3
 * ----------------------------------------------------
 * Author: Smartik
 * Author URL: http://smartik.ws/
 * License: MIT
 */
;(function ( $ ) {

	$.fn.smk_Accordion = function( options ) {

		if (this.length > 1){
			this.each(function() {
				$(this).smk_Accordion(options);
			});
			return this;
		}

		// Defaults
		var settings = $.extend({
			animation:  true,
			showIcon:   false,
			closeAble:  true,
			closeOther: true,
			slideSpeed: 200,
			activeIndex: false
		}, options );

		if( $(this).data('close-able') )    settings.closeAble = $(this).data('close-able');
		if( $(this).data('animation') )     settings.animation = $(this).data('animation');
		if( $(this).data('show-icon') )     settings.showIcon = $(this).data('show-icon');
		if( $(this).data('close-other') )   settings.closeOther = $(this).data('close-other');
		if( $(this).data('slide-speed') )   settings.slideSpeed = $(this).data('slide-speed');
		if( $(this).data('active-index') )  settings.activeIndex = $(this).data('active-index');

		// Cache current instance
		// To avoid scope issues, use 'plugin' instead of 'this'
		// to reference this class from internal events and functions.
		var plugin = this;

		//"Constructor"
		var init = function() {
			plugin.createStructure();
			plugin.clickHead();
		}

		// Add .smk_accordion class
		this.createStructure = function() {

			//Add Class
			plugin.addClass('smk_accordion');
			if( settings.showIcon ){
				plugin.addClass('acc_with_icon');
			}

			//Create sections if they were not created already
			if( plugin.find('.item').length < 1 ){
				plugin.children().addClass('item');
			}

			//Add classes to accordion head and content for each section
			plugin.find('.item').each(function(index, elem){
				var childs = $(elem).children();
				$(childs[0]).addClass('head-c');
				$(childs[1]).addClass('content');
			});

			//Append icon
			if( settings.showIcon ){
				plugin.find('.head-c').prepend('<div class="acc_icon_expand"></div>');
			}

			//Hide inactive
			plugin.find('.item .content').not('.active .content').hide();

			//Active index
			if( settings.activeIndex === parseInt(settings.activeIndex) ){
				if(settings.activeIndex === 0){
					plugin.find('.item').addClass('active').show();
					plugin.find('.item .content').addClass('active').show();
				}
				else{
					plugin.find('.item').eq(settings.activeIndex - 1).addClass('active').show();
					plugin.find('.item .content').eq(settings.activeIndex - 1).addClass('active').show();
				}
			}

		}

		// Action when the user click accordion head
		this.clickHead = function() {

			plugin.on('click', '.head-c', function(){

				var s_parent = $(this).parent();

				if( s_parent.hasClass('active') == false ){
					if( settings.closeOther ){
						plugin.find('.content').slideUp(settings.slideSpeed);
						plugin.find('.item').removeClass('active');
					}
				}

				if( s_parent.hasClass('active') ){
					if( false !== settings.closeAble ){
						s_parent.children('.content').slideUp(settings.slideSpeed);
						s_parent.removeClass('active');
					}
				}
				else{
					$(this).next('.content').slideDown(settings.slideSpeed);
					s_parent.addClass('active');
				}

			});

		}

		//"Constructor" init
		init();
		return this;

	};


}( jQuery ));
