import { getTarefas } from "./tarefasConfig.js";
import { desabilitarBotao, habilitarBotao } from "../global/habilitarDesabilitarBtn.js";

export function verificarExistenciaTarefas(btnLimparTarefas) {
  return getTarefas().length === 0
    ? desabilitarBotao(btnLimparTarefas)
    : habilitarBotao(btnLimparTarefas);
}

export function verificarExistenciaTarefasConcluidas(btnLimparTarefasConcluidas) {
  const tarefasCompletas = getTarefas().filter(
    (tarefa) => tarefa.status === "completed",
  );
  return tarefasCompletas.length === 0
    ? desabilitarBotao(btnLimparTarefasConcluidas)
    : habilitarBotao(btnLimparTarefasConcluidas);
}
