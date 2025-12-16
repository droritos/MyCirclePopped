
import { arena, themeButton } from './elements.js';

// Effects - FEEDBACKS
export function spawnFeedbacks(text, x, y, color) {
    // 1. Create the element
    const feedback = document.createElement('div');
    feedback.innerText = text;
    feedback.classList.add('feedback-text');

    // 2. Position it exactly where the target was
    feedback.style.left = x + 'px';
    feedback.style.top = y + 'px';
    feedback.style.color = color;

    // 3. Add to arena
    if (arena) {
        arena.appendChild(feedback);
    }

    // 4. Destroy(gameObject, 1f) - Cleanup after animation
    setTimeout(() => {
        feedback.remove();
    }, 800);
}

// Settings
export function toggleTheme() {
    document.body.classList.toggle('medieval-theme');

    // Change button text based on mode
    if (document.body.classList.contains('medieval-theme')) {
        themeButton.innerText = "Switch to Cyberpunk";
    } else {
        themeButton.innerText = "Switch to Medieval";
    }
}
