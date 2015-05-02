'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
    var fullHeight = window.screen.height;
    $('.item').hover(function() {
      $(this).toggleClass('hightlight');
      });
    $(window).scroll(function() {
    	if ($(this).scrollTop() > fullHeight){
    		$('.nav').addClass('is-fixed');
    	} else {
    		$('.is-fixed').removeClass('is-fixed');
    	}
    });
    $('#toggleButton').on('click', function() {
    	$('.nav').find('.toggleMenu').fadeToggle(300);
    });
  });
})(jQuery);
