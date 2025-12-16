
import { state } from './state.js';
import { arena, comboElement } from './elements.js';
import { getRandomVector2 } from './utils.js';
import { spawnFeedbacks } from './ui.js';
import { playSound, sfxPop } from './audio.js';
import { increaseScore } from './score.js';

export function setupTarget() {
    // 1. Check if a target already exists
    let targetInstance = document.querySelector('.target');
    let target;

    const arenaHeight = arena?.clientHeight;
    const arenaWidth = arena?.clientWidth;
    // 2. If NO target exists, create one (First spawn or after a click)
    if (!targetInstance)
        target = createTarget(targetInstance);
    else
        target = targetInstance;

    // 3. Set Position    
    const pos = getRandomVector2(arenaWidth, arenaHeight, state.targetSize);
    setTargetPosition(target, pos);
}

function createTarget(targetInstance) {
    targetInstance = document.createElement('div');
    targetInstance.classList.add('target');

    targetInstance.addEventListener('mousedown', handleTargetClick);

    let currentTargetSize = state.targetSize;

    targetInstance.style.width = currentTargetSize + 'px';
    targetInstance.style.height = currentTargetSize + 'px';

    if (arena) {
        arena.appendChild(targetInstance);
    }

    return targetInstance;
}

function setTargetPosition(tagetInstance, randomPosition) {
    tagetInstance.style.left = randomPosition.x + 'px';
    tagetInstance.style.top = randomPosition.y + 'px';
}

function handleTargetClick(event) {
    if (arena) {
        arena.innerHTML = '';
    }
    event.stopPropagation(); // Tell the browser to ignore clicks so Misses wont get calls


    const target = event.target;
    // const x = parseInt(target.style.left); 
    // parseInt might be unsafe if style is empty or "10px" (works for "10px"), handling safely below
    // However, keeping original logic mostly intact, but using event coords for feedback might be better visually if target moves?
    // Original used style.left, let's keep it but ensure safe parsing if needed, though previously it was guaranteed set.

    // In original code: const x = parseInt(target.style.left);
    // Since spawnFeedbacks uses these for positioning the "POP!" text.
    const x = parseInt(target.style.left) || 0;
    const y = parseInt(target.style.top) || 0;

    // Effects
    spawnFeedbacks("POP!", x, y, "cyan"); // <--- EFFECT!
    playSound(sfxPop);


    state.currentCombo++;
    comboElement.innerText = state.currentCombo;

    increaseScore();

    setupTarget();

    //movingTargets(); // Reset the 700 ms timer
}
