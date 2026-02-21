export const timerConfig = {
    duracao: 1500,
    interval: null,
    status: "paused",
}

export function getTimerDuration() {
    return timerConfig.duracao;
}

export function getTimerInterval() {
    return timerConfig.interval;
}

export function getTimerStatus() {
    return timerConfig.status;
}

export function setTimerDuration(duration) {
    timerConfig.duracao = duration;
}

export function setTimerInterval(interval) {
    timerConfig.interval = interval;
}

export function setTimerPaused() {
    timerConfig.status = "paused";
}

export function setTimerPlaying() {
    timerConfig.status = "playing";
}

export function decrementTimer() {
    timerConfig.duracao -= 1;
}