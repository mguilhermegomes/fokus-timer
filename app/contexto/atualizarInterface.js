const html = document.querySelector("html");
const imgEstado = document.querySelector(".app__image");
const tituloEstado = document.querySelector(".app__title").firstChild;
const tituloDestaqueEstado = document.querySelector(".app__title-strong");

function atualizarInterface(contexto, config) {
  html.setAttribute("data-contexto", contexto);

  imgEstado.setAttribute("src", config.imagem);

  tituloEstado.textContent = config.titulo.principal;
  tituloDestaqueEstado.textContent = config.titulo.destaque;
}

export default atualizarInterface;