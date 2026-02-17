import { timerConfig, getTimerDuration, setTimerPaused, setTimerDuration, decrementTimer } from "./timerConfig.js";
import { habilitarBotao, desabilitarBotao } from "../habilitarDesabilitarBtn.js";
import { redefinirBtnTimer } from "./atualizarERedefinirBtnTimer.js";
import { pausarTimer } from "./iniciarEPausar.js";

const timer = document.getElementById("timer");
const audioTimerEsgotado = new Audio("sons/beep.mp3");
export const btnTimer = document.getElementById("start-pause");
export const btnTimerRestart = document.getElementById("restart");

// diminui o timer e exibe na tela
export function contagemRegressiva() {
  if (getTimerDuration() <= 0) {
    audioTimerEsgotado.play();
    alert("Tempo finalizado");
    pausarTimer();
    setTimerPaused();
    redefinirBtnTimer();
    habilitarBotao(btnTimerRestart);
    desabilitarBotao(btnTimer);
    return;
  }

  decrementTimer();
  mostrarTempoNaTela();
}

// mostra o tempo na tela formatado para minutos e segundos
export function mostrarTempoNaTela() {
  const tempo = new Date(getTimerDuration() * 1000);
  const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {
    minute: "2-digit",
    second: "2-digit",
  });

  timer.textContent = `${tempoFormatado}`;
}

// pausa o timer, redefine para a duração padrão e exibe na tela
export function redefinirTimer(duracaoTimer) {
  pausarTimer();
  setTimerDuration(duracaoTimer);
  mostrarTempoNaTela();
}
