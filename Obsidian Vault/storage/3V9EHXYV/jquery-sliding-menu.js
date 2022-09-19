
/*
 *
 *	jQuery Sliding Menu Plugin
 *	Mobile app list-style navigation in the browser
 *
 *	Written by Ali Zahid
 *	http://designplox.com/jquery-sliding-menu
 *
 */
(function ($)
{
	var usedIds = [];
	$.fn.menu = function (options)
	{
		var selector = this.selector;
		var settings = $.extend(
				{
					dataJSON: false,
					backLabel: ''

				}, options);
		return this.each(function () {
			var self = this,
					menu = $(self),
					data;
			var menuWidth = $(window).width();
			if ($(window).width() > 1210) {
				menuWidth = 1210;
			}

			data = $('ul.menu-panel');
			menu.addClass('sliding-menu');
			var rootPanel = $('.menu-panel-root');
			rootPanel.width(menuWidth);
			$(data).each(function (index, item) {
				var panel = $(item);
				panel.width(menuWidth);
			});
			var currentPanel = rootPanel;
			$('.sliding-menu-wrapper').width(11 * menuWidth);
			menu.wrapInner(wrapper);
			var wrapper = $('.sliding-menu-wrapper', menu);

			////////////////Height of menu when sliding menu has opened /////////////////////
			var GetParentMenuSizeMobileStart = 765;
			$('#menu').css('cssText', 'height:' + GetParentMenuSizeMobileStart + 'px !important');

			$('a', self).on('click', function (e)
			{

				var isMobile = {
					Android: function () {
						return navigator.userAgent.match(/Android/i);
					},
					BlackBerry: function () {
						return navigator.userAgent.match(/BlackBerry/i);
					},
					iOS: function () {
						return navigator.userAgent.match(/iPhone|iPod|iPad/i);
					},
					Opera: function () {
						return navigator.userAgent.match(/Opera Mini/i);
					},
					Windows: function () {
						return navigator.userAgent.match(/IEMobile/i);
					},
					any: function () {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
					}};

				var href = $(this).attr('href'),
						label = $(this).text();

				menuWidth = $(window).width();
				if ($(window).width() > 1210) {
					menuWidth = 1210;
				}
				if (wrapper.is(':animated'))
				{
					e.preventDefault();
					return;
				}

				if (href == '#')
				{
					e.preventDefault();

				}
				else if (href.indexOf('#menu-panel') == 0)
				{
					var target = $(href),
							isBack = $(this).hasClass('back'),
							marginLeft = parseInt(wrapper.css('margin-left'));

					if (isBack)
					{
						if (href == '#menu-panel-back')
						{
							target = currentPanel.prev();
						}

						wrapper.stop(true, true).animate(
								{
									'marginLeft': marginLeft + menuWidth,
								}, 'fast');

						if (!isMobile.any()) {
							var GetParentMenuSize = $('ul#menupanel-menutop').height();
							$("#contbox").css('cssText', 'height:' + GetParentMenuSize + 'px !important');
						}

						if (isMobile.any()) {
							var ScrollMenu = $("#contbox");
							ScrollMenu.scrollTop(0);

							var GetParentMenuSizeMobile = $('ul#menupanel-menutop').height() + 40;
							$('#menu').css('cssText', 'height:' + GetParentMenuSizeMobile + 'px !important');
						}

					}
					else
					{
						target.insertAfter(currentPanel);
						if (settings.backLabel === true)
						{
							$('.back', target).text(label);
						}
						else
						{
							$('.back', target).text(settings.backLabel);

							if (!isMobile.any()) {
								var GetChildMenuSize = $('ul#menupanel-menutop+ul').height();
								$("#contbox").css('cssText', 'height:' + GetChildMenuSize + 'px !important');
							}
						}


						wrapper.stop(true, true).animate(
								{
									marginLeft: marginLeft - menuWidth
								}, 'fast');


						if (isMobile.any()) {
							var ScrollMenu = $("#contbox");
							ScrollMenu.scrollTop(0);


							var GetChildMenuSize = $('ul#menupanel-menutop+ul').height() + 40;
							$("#menu").css('cssText', 'height:' + GetChildMenuSize + 'px !important');
						}

					}

					
					menu.stop(true, true).animate(
							{
								height: target.height()

							}, 'fast');
					e.preventDefault();
				}

				$(".back").toggleClass('hidecont');
			});
			return this;
		});
	};

}(jQuery));

window.addEventListener("orientationchange", function () {
	$('#MenuModal').foundation('reveal', 'close');
}, false);
