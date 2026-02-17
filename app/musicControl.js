const btnMusic = document.getElementById("alternar-musica");
const music = new Audio("sons/luna-rise-part-one.mp3");

music.loop = true;

// alterna entre ligar e desligar a música
function controlMusic() {
  btnMusic.addEventListener("change", () => {
    music.paused ? music.play() : music.pause();
  });
}

export default controlMusic;