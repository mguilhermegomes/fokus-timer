import criarElementoTarefa from "./criarElementoTarefa.js";

function exibirTarefas(
  tarefa, listaTarefas, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva,
) {
  listaTarefas.appendChild(
    criarElementoTarefa(
      tarefa, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva
    )
  );
}

export default exibirTarefas;
