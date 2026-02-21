// funções
import scrollToEnd from "./global/scrollToEnd.js";
import limparTextArea from "./tasks/limparTextarea.js";
import esconderForm from "./tasks/esconderForm.js";
import exibirTarefas from "./tasks/exibirTarefas.js";
import definirTarefaConcluida from "./tasks/definirTarefaConcluida.js";
import salvarNoLocalStorage from "./tasks/salvarNoLocalStorage.js";
import { desabilitarBotao } from "./global/habilitarDesabilitarBtn.js";
import { getTarefas, adicionarTarefa } from "./tasks/tarefasConfig.js";
import { verificarExistenciaTarefas, verificarExistenciaTarefasConcluidas } from "./tasks/existenciaTarefas.js";
import { removerTarefasConcluidas, removerTodasTarefas } from "./tasks/removerTarefas.js";

// --------------------------------------------------------------------------------------

const btnAdicionarTarefa = document.querySelector(".app__button--add-task");
const btnCancelarTarefa = document.querySelector(".app__form-footer__button--cancel");
const btnDeletarTarefa = document.querySelector(".app__form-footer__button--delete");
const btnLimparTarefas = document.getElementById("btn-remover-todas");
const btnLimparTarefasConcluidas = document.getElementById("btn-remover-concluidas");
const formTarefas = document.querySelector(".app__form-add-task");
const textarea = document.querySelector(".app__form-textarea");
const listaDeTarefas = document.querySelector(".app__section-task-list");
const paragrafoTarefaAtiva = document.querySelector(".app__section-active-task-description");

const tarefaAtivada = {
  value: null,
};
const elementoTarefaAtivada = {
  value: null,
};

btnAdicionarTarefa.addEventListener("click", () => {
  formTarefas.classList.toggle("hidden");
  formTarefas.ariaHidden = formTarefas.ariaHidden === "true" ? "false" : "true";
  scrollToEnd();
});

formTarefas.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const tarefa = {
    id: crypto.randomUUID(),
    descricao: textarea.value.trim(),
    status: null,
  };

  adicionarTarefa(tarefa);
  salvarNoLocalStorage();

  exibirTarefas(
    tarefa, listaDeTarefas, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva
  );

  verificarExistenciaTarefas(btnLimparTarefas);
  limparTextArea(textarea);
  esconderForm(formTarefas);
});

btnCancelarTarefa.addEventListener("click", () => {
  limparTextArea(textarea);
  esconderForm(formTarefas);
});

btnDeletarTarefa.addEventListener("click", () => {
  limparTextArea(textarea);
});

document.addEventListener("FocoFinalizado", () => {
  if (tarefaAtivada.value && elementoTarefaAtivada.value) {
    paragrafoTarefaAtiva.textContent = null;
    const idTarefaAtivada = elementoTarefaAtivada.value.getAttribute("data-id");
    const tarefaConcluida = getTarefas().find(
      (tarefa) => tarefa.id === idTarefaAtivada,
    );
    tarefaConcluida.status = "completed";
    definirTarefaConcluida(elementoTarefaAtivada.value);
    verificarExistenciaTarefasConcluidas(btnLimparTarefasConcluidas);
    salvarNoLocalStorage();
  }
});

btnLimparTarefasConcluidas.addEventListener("click", () => {
  removerTarefasConcluidas(listaDeTarefas);
  desabilitarBotao(btnLimparTarefasConcluidas);
});

btnLimparTarefas.addEventListener("click", () => {
  removerTodasTarefas(listaDeTarefas);
  desabilitarBotao(btnLimparTarefas);
});

getTarefas().forEach((tarefa) =>
  exibirTarefas(
    tarefa, listaDeTarefas, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva)
);

verificarExistenciaTarefasConcluidas(btnLimparTarefasConcluidas);
verificarExistenciaTarefas(btnLimparTarefas);
