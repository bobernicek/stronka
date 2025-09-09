function pokazJumpscare() {
  // pokaż obraz
  let obraz = document.getElementById("jumpscare");
  obraz.style.display = "block";

  // uruchom dźwięk w pętli i ustaw głośność
  let dzwiek = document.getElementById("scream");
  dzwiek.currentTime = 0; // od początku
  dzwiek.volume = 1.0; // 100% (najgłośniej jak się da w przeglądarce)
  dzwiek.play();

  // fullscreen z opóźnieniem
  setTimeout(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { 
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }, 100);
}
