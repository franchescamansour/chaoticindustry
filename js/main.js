var $btn = $(".buttons-play-pause");
var audio = $(".listen").get(0);

$btn.on('click', function () {
  if (audio.paused) {
    audio.play();
    $btn.addClass("btnpause")
  } else {
    audio.pause();
    $btn.removeClass("btnplaying")
  }
});
