// funções
import { controlActiveButton } from "./pomodoro/activeButton.js";
import alterarContexto from "./pomodoro/contexto/alterarContexto.js";
import controlMusic from "./pomodoro/musicControl.js";
import { habilitarBotao, desabilitarBotao } from "./global/habilitarDesabilitarBtn.js";
import { iniciarTimer } from "./pomodoro/timer/iniciarEPausar.js";
import { redefinirTimer, mostrarTempoNaTela } from "./pomodoro/timer/timerControl.js";
import contextoConfig from "./pomodoro/contexto/contextoConfig.js";
import { getTimerInterval, setTimerPaused } from "./pomodoro/timer/timerConfig.js";
import {
  atualizarBtnTimer,
  redefinirBtnTimer,
} from "./pomodoro/timer/atualizarERedefinirBtnTimer.js";

// variáveis
import { btnTimer, btnTimerRestart } from "./pomodoro/timer/timerControl.js";

// -----------------------------------------------------------------------

const btnFoco = document.getElementById("btnFoco");
const btnCurto = document.getElementById("btnCurto");
const btnLongo = document.getElementById("btnLongo");

alterarContexto(btnFoco, "foco", btnTimerRestart); // Altera para foco
alterarContexto(btnCurto, "descanso-curto", btnTimerRestart); // Altera para descanso curto
alterarContexto(btnLongo, "descanso-longo", btnTimerRestart); // Alterar para descanso longo

controlActiveButton();
controlMusic();
desabilitarBotao(btnTimerRestart);

// Altera o ícone para play ou pause, muda o texto para "Começar" ou "Pausar" e inicia o timer
btnTimer.addEventListener("click", () => {
  atualizarBtnTimer();
  iniciarTimer(btnTimerRestart);
});

btnTimerRestart.addEventListener("click", () => {
  const contexto = btnTimerRestart.getAttribute("data-contexto");
  const config = contextoConfig[contexto];
  if (!config) return;

  setTimerPaused();
  redefinirTimer(config.duracao);
  redefinirBtnTimer();
  habilitarBotao(btnTimer);
  if (!getTimerInterval()) desabilitarBotao(btnTimerRestart); // Se nulo (falsy), desativa o botão
});

mostrarTempoNaTela();