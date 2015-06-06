'use strict';

(function($) {
  $(document).ready(function() {
    // Add your jQuery code here
    //var fullHeight = window.screen.height;
    $('.item').hover(function() {
      $(this).toggleClass('hightlight');
      });
    $('#toggleButton').on('click', function() {
    	$('.nav').find('.toggleMenu').fadeToggle(300);
    });
    //$('a[href*=#]:not([href=#])').click(function() {
      //if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
        //var target = $(this.hash);
        //target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        //if (target.length) {
          //$('html,body').animate({
            //scrollTop: target.offset().top
          //}, 1000);
          //return false;
        //}
      //}
    //});
    var sticky = new Waypoint.Sticky({
      element: $('.nav')[0]
    });
    sticky();
  });
})(jQuery);
