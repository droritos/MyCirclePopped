
import { state } from './state.js';
import { coinElement } from './elements.js';
import { playSound, sfxChing } from './audio.js';

export function TryBuyUpgrade(upgradeCost) {
    if (state.myCoins < upgradeCost) {
        alert("You Are Poor!! Missing " + (upgradeCost - state.myCoins) + " Coins");
        return false;
    }

    // SFX
    playSound(sfxChing);

    // Buy Upgrade And Update Text
    state.myCoins -= upgradeCost;
    coinElement.innerText = state.myCoins;
    return true;
}

export function upgradeSlowTargets() {
    if (TryBuyUpgrade(20))
        state.movingSpeed = 1200;
}

export function upgradeBigTargets() {
    if (TryBuyUpgrade(30))
        state.targetSize = 100;
}

export function upgradeMoreTime() {
    if (TryBuyUpgrade(40))
        state.totalTime = 120;
}
