var $btn = $(".buttons-play-pause");
var audio = $(".listen").get(0);

$btn.on('click', function () {
  if (audio.paused) {
    audio.play();
    $btn.addClass("btnsplaying")
  } else {
    audio.pause();
    $btn.removeClass("btnsplaying")
  }
});
