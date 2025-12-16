
import { state } from './state.js';
import { timeElement } from './elements.js';
import { setupTarget } from './target.js';

let onGameFinishedCallback = null;

export function registerGameFinishedCallback(callback) {
    onGameFinishedCallback = callback;
}

// Handle Timer
export function updateTimer(miliseconds) {
    if (state.time != null) // Safe - Clear exits time
    {
        clearInterval(state.time); // Stop any old timer so they don't stack
    }

    state.time = setInterval(controlTimer, miliseconds);
}

export function movingTargets(moveSpeed = 700) {
    if (state.movementTimer != null) clearInterval(state.movementTimer);

    state.movementTimer = setInterval(function () {
        const currentTarget = document.querySelector('.target');
        // if (currentTarget) {
        //    spawnFeedbacks("Moved", currentTarget.style.left, currentTarget.style.top, "red");
        // }
        setupTarget();
    }, moveSpeed);
}

export function controlTimer() {
    state.timeLeft--;
    timeElement.innerText = state.timeLeft; // Update HUD

    // Check for Game Over
    if (state.timeLeft <= 0) {
        // Stop Clocks
        clearInterval(state.time);
        clearInterval(state.movementTimer);

        if (onGameFinishedCallback) {
            onGameFinishedCallback();
        }
    }
}
