# Tennis Scoreboard

## How it works
- `script.js` → Contains the tennis game logic (`pointWon()`, `score()`, `getSets()`)  
- `app.js` → Handles the buttons and score updates in the UI  
- `index.html` → Displays the scoreboard and buttons using Tailwind styling  

## When a player scores, the app:
1. Calls `pointWon(player)` → adds a point for that player  
2. Calls `score()` → returns the correct tennis term (“Love”, “Thirty”, “Deuce”, etc.)  
3. Updates the displayed score in real time  

---

## Features
- Handles all tennis scoring rules  
- Displays **Deuce**, **Advantage**, and **Game** correctly  
- Supports **sets** (each “Game” increases a set count)  
- Clean, responsive design using Tailwind  

---

##  How to run
1. Clone or download this project  
2. Open `index.html` with **Live Server** in VS Code  
3. Click the buttons to simulate points  
4. Use **Restart match** to reset the game  

