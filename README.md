# 🔴 Circle Popped!

Circle Popped is a fast-paced arcade reflex game where speed and precision are key. Click the targets before they disappear, build your combo, and buy upgrades to achieve the highest score possible!

---

## 🎮 How to Play

1. **Start the Game:** Click the **"Start"** button to begin the round.
2. **Objective:** Click the circular targets as fast as you can.
3. **Avoid Misses:** If you click the background instead of a target, it counts as a **"MISS"** and resets your Combo to 0.
4. **Scoring System:**
   * **0-4 Combo:** 1 Point per click
   * **5-9 Combo:** 2 Points per click
   * **10+ Combo:** 3 Points per click
5. **Game Over:** The round ends when the timer hits 0. Your total **Coins** are calculated based on your final Score.

---

## 🛒 Shop Upgrades

Spend your hard-earned Coins to buy permanent upgrades for the session:

| Upgrade | Cost | Effect |
| :--- | :--- | :--- |
| **Slow Targets** | 20 Coins | Significantly slows down target movement speed. Great for beginners. |
| **Big Targets** | 30 Coins | Doubles the target size (100px). Makes it much harder to miss. |
| **Extra Time** | 40 Coins | Extends the game timer to **120 seconds** (default is 60s). |

---

## ✨ Features

### 🎨 Visuals & Themes
* **Dark Mode (Cyberpunk):** A toggle button switches between a clean Light Mode and a neon Cyberpunk Dark Mode.
* **Visual Feedback:** "POP!" and "MISS!" text floats appear dynamically at the mouse position.
* **Animations:** Targets pulse and glow (CSS Animations).

### 🔊 Audio System
* **SFX:** Custom sounds for Hits, Misses, and Shop purchases.
* **Music:** Background arcade loop that plays during the game.
* **Smart Mute:** Audio automatically pauses on Game Over or Reset.

### ⚙️ Mechanics
* **High Score:** Tracks your best score for the current session.
* **Dynamic Difficulty:** Targets move automatically if not clicked fast enough.
* **Combo System:** Rewards accuracy over spam clicking.