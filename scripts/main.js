
import { startButton, resetButton, themeButton, upgradeSlowTargetButton, bigTargetButton, extraTimeButton, arena } from './elements.js';
import { startGame, resetGame, FinishGame } from './game.js';
import { toggleTheme } from './ui.js';
import { upgradeSlowTargets, upgradeBigTargets, upgradeMoreTime } from './shop.js';
import { onMiss } from './score.js';
import { registerGameFinishedCallback } from './timer.js';

// Register Callbacks
registerGameFinishedCallback(FinishGame);

// Buttons Events
startButton?.addEventListener('click', startGame);
resetButton?.addEventListener('click', resetGame);
themeButton?.addEventListener('click', toggleTheme);

upgradeSlowTargetButton?.addEventListener('click', upgradeSlowTargets);
bigTargetButton?.addEventListener('click', upgradeBigTargets);
extraTimeButton?.addEventListener('click', upgradeMoreTime);

// Arena
arena?.addEventListener('mousedown', onMiss);
