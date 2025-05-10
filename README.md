# 🏎️ Pit Stop Scoreboard

A playful Mario Kart-inspired scoreboard app where users can add racers, select characters, and submit their race position. Points are assigned based on classic kart scoring logic, and the app is styled with a colorful, arcade aesthetic.

---

## ✅ Functional Features (as of now)

- 👤 **Add Racers**: Users can input names and choose a Mario Kart character
- 🔢 **Race Input**: Users select their final race placement from 1st to 12th
- 🧮 **Points Calculation**: Based on placement:
  - 1st: 15 pts
  - 2nd: 12 pts
  - 3rd: 10 pts
  - 4th: 8 pts
  - 5th: 6 pts
  - 6th: 4 pts
  - 7th: 2 pts
  - 8th–12th: 1 pt
- 🎨 **Custom Styling**: Arcade-like layout with playful fonts and bright buttons
- ✅ **Racer State**: Context API manages racers and updates their scores

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **React Router**
- **Context API** (for managing racer data)

---

## 🚧 Coming Soon

- 🔄 Real-time multiplayer support via **Socket.IO**
- 📺 Shared scoreboard view for all players
- 🏁 Round tracking and champion logic


## 🧪 How to Run Locally

```bash
git clone https://github.com/jmg1410/pit-stop-scoreboard.git
cd pit-stop-scoreboard
npm install
npm run dev


