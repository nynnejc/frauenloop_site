
/*audio player*/    
function play(sound){
 var audio = document.getElementById("audio");
 audio.setAttribute('src', sound);
 audio.play();
}
function stopAudio(){
 var audio = document.getElementById("audio");
 audio.pause();
}

// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
      target: '.navbar-fixed-top',
      offset: 51
    });

/*swip for mobile*/
    $(document).ready(function() {  

          //Enable swiping...
          $(".carousel-inner").swipe( {
            //Generic swipe handler for all directions
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
              $(this).parent().carousel('next'); 
            },
            swipeRight: function() {
              $(this).parent().carousel('prev'); 
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold:0
          });
        });
/*scroll down*/ 
$(function() {
  $('.nav a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    