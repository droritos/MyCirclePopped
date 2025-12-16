
// Game State
export const state = {
    currentCombo: 0,
    currentScore: 0,
    bestScore: 0,
    currentMisses: 0,
    myCoins: 0,

    // Stats
    movingSpeed: 700,
    targetSize: 50, // Matching '.target' width/height from CSS file
    totalTime: 60,

    // Timer Data
    timeLeft: 60, // Seconds
    time: null,
    movementTimer: null
};
