const allBtnEstados = document.querySelectorAll(".app__card-button");

// procura nos botões de contexto aquele que está ativo e remove esse estado
function btnRemoveActive(buttons) {
  buttons.forEach((btn) => {
    if (btn.classList.contains("active")) btn.classList.remove("active");
  });
}

// controla o estilo de ativo do botão. Adiciona e remove a classe "active"
export function controlActiveButton() {
  allBtnEstados.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.classList.contains("active")) {
        btnRemoveActive(allBtnEstados);
        btn.classList.add("active");
      }
    });
  });
}
