(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
  
  "use strict";

    /*---------------------------------------------------- */
    /* Preloader
    ------------------------------------------------------ */ 
   $(window).load(function() {

      // fade out the loading animation first
        $("#loader").fadeOut("slow", function(){

        // fade out the preloader that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

    });
    
    // Scrolls to the selected menu item on the page
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
})(jQuery); // end of jQuery name space