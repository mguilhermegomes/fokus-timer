import { getTarefas, setTarefas } from "./tarefasConfig.js";
import salvarNoLocalStorage from "./salvarNoLocalStorage.js";

export function removerTarefasConcluidas(listaTarefas) {
  const tarefasNaoConcluidas = getTarefas().filter(
    (tarefa) => tarefa.status != "completed",
  );
  const todasTarefasConcluidas = listaTarefas.querySelectorAll(
    `[data-status="completed"]`,
  );
  todasTarefasConcluidas.forEach((tarefa) => tarefa.remove());
  setTarefas(tarefasNaoConcluidas);
  salvarNoLocalStorage();
}

export function removerTodasTarefas(listaTarefas) {
  setTarefas([]);
  listaTarefas.replaceChildren();
  localStorage.clear();
}
