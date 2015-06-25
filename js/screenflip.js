$(document).ready(function() {
       $('#load').show(200).delay(7000).hide(0); 
       $('#page').hide(0).delay(7000).show(1);
  });

   var time = 7200;
    setTimeout(function() {
        $('body').css("background-color", "#f5f7f7");
        $('body').css("overflow-x", "hidden");
        $('body').css("overflow-y", "visible");
    }, time);


// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

}

// Check if it's time to start the animation.
function checkAnimation() {
    var $elem = $('.path');

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('start');
    } else {
        $elem.removeClass('start');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});
