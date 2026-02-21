import { getTarefas } from "./tarefasConfig.js";

function salvarNoLocalStorage() {
  localStorage.setItem("tarefas", JSON.stringify(getTarefas()));
}

export default salvarNoLocalStorage;
