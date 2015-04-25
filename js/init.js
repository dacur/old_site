(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

window.onload = function() {
  var elevator = new Elevator({
    mainAudio: './music/audio.mp3',
    endAudio: './music/end-audio.mp3'
  });
}

$('.elevator').on('click', function(){
	elevator.elevate();
});