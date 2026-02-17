import contextoConfig from "./contextoConfig.js";
import { getTimerDuration, setTimerDuration, setTimerPaused } from "../timer/timerConfig.js";
import atualizarInterface from "./atualizarInterface.js";
import { redefinirTimer } from "../timer/timerControl.js";
import { redefinirBtnTimer } from "../timer/atualizarERedefinirBtnTimer.js";
import { desabilitarBotao } from "../habilitarDesabilitarBtn.js";

// Com base no contexto, modifica fundo, imagem e titulo. Redefine as configurações do timer
function alterarContexto(btn, contexto, btnRestart) {
  btn.addEventListener("click", () => {
    const config = contextoConfig[contexto];
    if (!config) return;

    atualizarInterface(contexto, config);

    setTimerDuration(config.duracao);
    setTimerPaused();
    redefinirTimer(getTimerDuration());
    redefinirBtnTimer();
    desabilitarBotao(btnRestart);
    btnRestart.setAttribute("data-contexto", contexto);
  });
}

export default alterarContexto;