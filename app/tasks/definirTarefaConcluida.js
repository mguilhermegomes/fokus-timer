function definirTarefaConcluida(elementoTarefa) {
  elementoTarefa.classList.add("task-disabled");
  elementoTarefa.classList.add("app__section-task-list-item-complete");
  elementoTarefa.classList.remove("app__section-task-list-item-active");
  elementoTarefa.dataset.status = "completed";
}

export default definirTarefaConcluida;
