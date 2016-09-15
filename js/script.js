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
 /* var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

    ctrl.onclick = function () {


      if(ctrl.className == "glyphicon glyphicon-play") {
        ctrl.className="glyphicon glyphicon-pause";
        yourAudio["play"]();
      }
      else if (ctrl.className == "glyphicon glyphicon-pause"){

        ctrl.className="glyphicon glyphicon-play";
        yourAudio["pause"]();

      }
    };*/
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


