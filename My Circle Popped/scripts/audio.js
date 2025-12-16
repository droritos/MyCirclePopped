
// SFX
export const sfxPop = new Audio('SFX/pop.mp3');
export const sfxChing = new Audio('SFX/ching.mp3');
export const sfxMiss = new Audio('SFX/miss.mp3');

// --- BACKGROUND MUSIC ---
export const bgMusic = new Audio('SFX/backgroundMusic.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.01;

export function playSound(sound) {
    sound.currentTime = 0; // Rewind sound to the start
    sound.play();          // Play it immediately
}
