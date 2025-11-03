# Tennis Scoreboard

## How it works

- **script.js** – handles the game logic (`pointWon()`, `score()`, `getSets()`)
- **app.js** – connects the logic to the user interface and updates the display
- **index.html** – the visual scoreboard with buttons and Tailwind styling

When a player scores:

1. `pointWon(player)` adds a point to the correct player
2. `score()` returns the current score in tennis terms ("Love", "Deuce", "Advantage", etc.)
3. The scoreboard updates instantly in the browser

---

## Features

- Handles all tennis scoring rules
- Displays **Deuce**, **Advantage**, and **Game** correctly
- Supports **sets** (each “Game” increases a set count)
- Responsive, minimal design built with Tailwind

---

## How to run

1. Clone or download this project
2. Open `index.html` with **Live Server** in VS Code
3. Click the buttons to simulate points
4. Use **Restart match** to reset the game
