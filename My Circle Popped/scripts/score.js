
import { state } from './state.js';
import { scoreElement, comboElement, missElement, coinElement, bestScoreElement } from './elements.js';
import { spawnFeedbacks } from './ui.js';
import { playSound, sfxMiss } from './audio.js';

export function increaseScore() {
    let amountToIncreas;
    if (state.currentCombo >= 10)
        amountToIncreas = 3;
    else if (state.currentCombo >= 5)
        amountToIncreas = 2;
    else
        amountToIncreas = 1;

    state.currentScore += amountToIncreas;
    scoreElement.innerText = state.currentScore;
}

// Misses
export function onMiss(event) {
    // Visuals
    const x = event.offsetX;
    const y = event.offsetY;

    spawnFeedbacks("MISS!", x, y, "red");
    playSound(sfxMiss);

    // Logic
    state.currentCombo = 0;
    state.currentMisses++;

    comboElement.innerText = state.currentCombo;
    missElement.innerText = state.currentMisses;
}

export function GetCoins() {
    let coinsToGet = (state.currentScore + state.currentCombo) - state.currentMisses;
    state.myCoins += coinsToGet;
    coinElement.innerText = state.myCoins;

    alert("Coins Got " + coinsToGet);
}

export function updateBestScore() {
    // Calculate Best Score
    if (state.bestScore < state.currentScore)
        state.bestScore = state.currentScore;

    if (bestScoreElement)
        bestScoreElement.innerText = state.bestScore;
}
