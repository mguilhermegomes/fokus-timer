export function habilitarBotao(btn) {
  btn.disabled = false;
  btn.style.opacity = 1;
  btn.style.cursor = "pointer";
}

export function desabilitarBotao(btn) {
  btn.disabled = true;
  btn.style.opacity = 0.7;
  btn.style.cursor = "not-allowed";
}