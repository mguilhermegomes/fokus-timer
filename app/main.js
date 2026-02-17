// funções
import { controlActiveButton } from "./activeButton.js";
import alterarContexto from "./contexto/alterarContexto.js";
import controlMusic from "./musicControl.js";
import { habilitarBotao, desabilitarBotao } from "./habilitarDesabilitarBtn.js";
import { iniciarTimer } from "./timer/iniciarEPausar.js";
import { redefinirTimer, mostrarTempoNaTela } from "./timer/timerControl.js";
import contextoConfig from "./contexto/contextoConfig.js";
import { getTimerInterval, setTimerPaused } from "./timer/timerConfig.js";
import { atualizarBtnTimer, redefinirBtnTimer } from "./timer/atualizarERedefinirBtnTimer.js";

// variáveis
import { btnTimer, btnTimerRestart, } from "./timer/timerControl.js";

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
