import { getTarefas } from "./tarefasConfig.js";
import salvarNoLocalStorage from "./salvarNoLocalStorage.js";
import { desabilitarBotao, habilitarBotao } from "../global/habilitarDesabilitarBtn.js";

function finalizarEdicao(
  nomeAtual, elementoTexto, paragrafoTarefaAtiva, btnEditar, tarefaAtivada, idTarefa
) {
    elementoTexto.contentEditable = false;
    habilitarBotao(btnEditar);

    const novoNome = elementoTexto.textContent.trim();

    if (novoNome === "") {
      elementoTexto.textContent = nomeAtual;
      return;
    }

    const tarefaEditada = getTarefas().find((t) => t.id === idTarefa);

    if (tarefaEditada) {
      tarefaEditada.descricao = novoNome;
      salvarNoLocalStorage();
    }

    if (tarefaAtivada.value) {
      paragrafoTarefaAtiva.textContent = elementoTexto.textContent.trim();
    }
  }

function editarTarefa(
  elementoTexto, paragrafoTarefaAtiva, btnEditar, tarefaAtivada, idTarefa,
) {
  const nomeAtual = elementoTexto.textContent.trim();

  elementoTexto.contentEditable = true;
  elementoTexto.focus();

  desabilitarBotao(btnEditar);

  elementoTexto.addEventListener("blur", () => {
    finalizarEdicao(nomeAtual, elementoTexto, paragrafoTarefaAtiva, btnEditar, tarefaAtivada, idTarefa);
  });

  elementoTexto.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
      evento.preventDefault();
      finalizarEdicao(nomeAtual, elementoTexto, paragrafoTarefaAtiva, btnEditar, tarefaAtivada, idTarefa);
    }
  });
}

export default editarTarefa;
