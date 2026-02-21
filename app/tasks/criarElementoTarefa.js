import editarTarefa from "./editarTarefa.js";
import definirTarefaConcluida from "./definirTarefaConcluida.js";
import { desativarTarefasAtivadas, ativarOuDesativarTarefa } from "./ativarDesativarTarefa.js";

function criarElementoTarefa(
  tarefa, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva
) {
  const tarefaItem = document.createElement("li");
  const tarefaSVG = document.createElement("svg");
  const tarefaDescricao = document.createElement("p");
  const tarefaBtn = document.createElement("button");
  const tarefaBtnImg = document.createElement("img");

  tarefaItem.classList.add("app__section-task-list-item");
  tarefaDescricao.classList.add("app__section-task-list-item-description");
  tarefaBtn.classList.add("app_button-edit");

  tarefaItem.dataset.id = tarefa.id;

  tarefaSVG.innerHTML = `
          <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `;
  tarefaDescricao.textContent = tarefa.descricao;
  tarefaBtnImg.setAttribute("src", "imagens/edit.png");
  tarefaBtn.appendChild(tarefaBtnImg);

  tarefaBtn.onclick = () => {
    editarTarefa(
      tarefaDescricao, paragrafoTarefaAtiva, tarefaBtn, tarefaAtivada, tarefa.id
    );
  };

  tarefaItem.appendChild(tarefaSVG);
  tarefaItem.appendChild(tarefaDescricao);
  tarefaItem.appendChild(tarefaBtn);

  tarefaItem.onclick = () => {
    desativarTarefasAtivadas();
    ativarOuDesativarTarefa(
      tarefa, tarefaItem, tarefaAtivada, elementoTarefaAtivada, paragrafoTarefaAtiva
    );
  };

  if (tarefa.status === "completed") definirTarefaConcluida(tarefaItem);

  return tarefaItem;
}

export default criarElementoTarefa;
