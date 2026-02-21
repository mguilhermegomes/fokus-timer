export function desativarTarefasAtivadas() {
  const todasTarefasAtivadas = document.querySelectorAll(
    ".app__section-task-list-item-active",
  );

  todasTarefasAtivadas.forEach((t) => {
    t.classList.remove("app__section-task-list-item-active");
  });
}

function ativarTarefa(
  tarefa, tarefaItem, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva,
) {
  tarefaAtivada.value = tarefa;
  elementoTarefaAtivada.value = tarefaItem;
  paragrafoTarefaAtiva.textContent = tarefa.descricao;
  tarefaItem.classList.add("app__section-task-list-item-active");
}

function desativarTarefa(
  tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva,
) {
  paragrafoTarefaAtiva.textContent = "";
  tarefaAtivada.value = null;
  elementoTarefaAtivada.value = null;
  return;
}

export function ativarOuDesativarTarefa(
  tarefa, tarefaItem, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva,
) {
  tarefaAtivada.value === tarefa && elementoTarefaAtivada.value === tarefaItem
    ? desativarTarefa(tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva)
    : ativarTarefa(tarefa, tarefaItem, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva);
}
