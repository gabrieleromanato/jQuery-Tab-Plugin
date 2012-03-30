/** jQuery Tab Plugin
  * @author Gabriele Romanato <http://blog.gabrieleromanato.com>
  * @version 1.0
  * @requires jQuery 1.4+
  * Usage: $(element).tab(options)
  *        menu: jQuery element used for navigation
  *        tabs: jQuery elements used as tabs
  *        activeClass: current item CSS class
  */

(function($) {

	$.fn.tab = function(options) {
	
		var that = this;
		var defaults = {
		
			menu: $('#tabs-nav', that),
			tabs: $('div.tab', that),
			activeClass: 'active'
		
		};
		
		options = $.extend(defaults, options);
		
		var Tab = {
		
			prepare: function() {
				options.tabs.not(':first').hide();
				$('a:first', options.menu).addClass(options.activeClass);
			
			},
			
			handle: function() {
			
				$('a', options.menu).each(function() {
				
					var $a = $(this);
					var tabID = $a.attr('href');
					var currentTab = $(tabID);
					
					$a.click(function(event) {
					
						if(currentTab.is(':hidden')) {
						
							currentTab.show().parent().find(options.tabs).not(currentTab).hide();
							$a.addClass(options.activeClass).parents(options.menu).find('a').not($a).
							removeClass(options.activeClass);						
						}
					
						event.preventDefault();
					
					});
				
				});
			
			},
			
			init: function() {
			
				this.prepare();
				this.handle();
			
			}
		
		};
	
	
		return that.each(function() {
		
			Tab.init();
		
		
		});
	};

})(jQuery);
