
import { state } from './state.js';
import { scoreElement, timeElement, coinElement, arena, bestScoreElement } from './elements.js';
import { bgMusic, playSound } from './audio.js';
import { updateTimer, movingTargets } from './timer.js';
import { setupTarget } from './target.js';
import { GetCoins, updateBestScore } from './score.js';

// Handle Game
export function startGame() {
    playSound(bgMusic);
    state.currentScore = 0;
    state.currentCombo = 0;
    state.currentMisses = 0;
    state.timeLeft = state.totalTime; // seconds

    scoreElement.innerText = state.currentScore;
    timeElement.innerText = state.timeLeft;
    coinElement.innerText = state.myCoins;
    //bestScoreElement.innerText = bestScore;

    if (arena) {
        arena.innerHTML = ''; // Clear arena
    }
    updateTimer(1000);

    setupTarget();
    movingTargets();
}

export function resetGame() {
    // Reload page
    location.reload();
}

export function FinishGame() {
    GetCoins();
    alert("Game Over! Final Score: " + state.currentScore);
    if (arena) {
        arena.innerHTML = ''; // Remove the target
    }

    updateBestScore();
}
