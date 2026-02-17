import { timerConfig, getTimerStatus, setTimerPaused, setTimerPlaying, setTimerInterval } from "./timerConfig.js";
import { habilitarBotao } from "../habilitarDesabilitarBtn.js";
import { contagemRegressiva } from "./timerControl.js";

const audioPlay = new Audio("sons/play.wav");
const audioPause = new Audio("sons/pause.mp3");

// inicia o timer com setInterval
export function iniciarTimer(btnRestart) {
  if (getTimerStatus() === "playing") {
    pausarTimer();
    setTimerPaused();
    audioPause.play();
    return;
  }

  setTimerInterval(setInterval(contagemRegressiva, 1000));
  setTimerPlaying();
  habilitarBotao(btnRestart);
  audioPlay.play();
}

// pausa o timer com clearInterval e limpa o intervalo de tempo
export function pausarTimer() {
  clearInterval(timerConfig.interval);
  setTimerInterval(null);
}