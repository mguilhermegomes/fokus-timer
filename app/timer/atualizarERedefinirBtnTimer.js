const iconBtnTimer = document.querySelector("#start-pause > img");
const textoBtnTimer = document.querySelector("#start-pause > span");
const btnTimerConfig = {
  estado: "play",
  textoPlay: "Começar",
  iconPlay: "/imagens/play_arrow.png",
  textoPause: "Pausar",
  iconPause: "/imagens/pause.png",
  textoContinuar: "Continuar",
};

export function atualizarBtnTimer() {
  const modo = btnTimerConfig.estado;
  if (modo === "play") {
    iconBtnTimer.setAttribute("src", btnTimerConfig.iconPause);
    textoBtnTimer.textContent = btnTimerConfig.textoPause;
    btnTimerConfig.estado = "pause";
  } else {
    iconBtnTimer.setAttribute("src", btnTimerConfig.iconPlay);
    textoBtnTimer.textContent = btnTimerConfig.textoContinuar;
    btnTimerConfig.estado = "play";
  }
}

export function redefinirBtnTimer() {
  iconBtnTimer.setAttribute("src", btnTimerConfig.iconPlay);
  textoBtnTimer.textContent = btnTimerConfig.textoPlay;
  btnTimerConfig.estado = "play";
}
