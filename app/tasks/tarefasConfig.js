let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

export function getTarefas() {
    return tarefas;
}

export function setTarefas(valor) {
    tarefas = valor;
}

export function adicionarTarefa(item) {
    tarefas.push(item);
}