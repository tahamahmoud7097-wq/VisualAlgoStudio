## VisualAlgoStudio

- This is my personal algorithm + data structure playground.
- I experiment with implementations in Python and Node.js, benchmark them, and then port stable versions into VisualAlgoStudio with good visualizations + soon will add explanations and copy-paste-able snippets for implementations but that's for later as I'm currently focusing on structure to make it modular and visualizations as these are the most important and difficult parts

## Repo Structure

- **/references** -> temporary folder for algorithms I’m currently porting or testing.

- **(app.tsx)** -> the homepage and main routing system

- **(app.css)** -> main CSS styling file / stylesheet

- **/pages** -> has the different category pages, types.ts and helpers.tsx for, well types and helpers

- Once algo code is ported successfully, it gets removed from references.


## Current Focus

- Learning how to use backend with Node.js, express.js and SQLite properly.

- Learning new algorithms, I'm currently learning more about pathfinding like A*, dijkstra and more.

## How to run locally

1) **Install Node.js** (if not installed already) which comes with npm (Node package manager) which you use to install dependencies and start the development server.

2. **Clone the repository:**
   ```sh
   git clone https://github.com/tahamahmoud7097-wq/VisualAlgoStudio.git
   cd VisualAlgoStudio
   ```
3) **Install dependencies** 
- Run: 
   ```sh 
   npm install
   ```

- if you get errors try:
   ```sh 
   npm install --legacy-peer-deps
   ```

4) **Start development server** with npm start which will open your app in http://localhost:3000 in your browser where you can preview your changes.

**Then you can work on the project!**

## Roadmap

- Port existing Python algos into Node.js

- Add benchmarking utilities in Node

- Integrate SQLite for auth experiments

- Build React + Express projects using these algos

## About This Project

- This project is built entirely on **mobile (Termux + Acode)**.  
Why? Because I wanted to prove that you don’t need a full PC setup to experiment with serious algorithms, data structures, and backend/frontend stacks and also because I do not have access to a PC/laptop currently.

- So if you see me not using some “standard library” or “common tool,” it’s usually because I’m working within mobile limitations — or because I’m deliberately re-implementing stuff for learning.

## Project Intent

VisualAlgoStudio is dedicated to teaching algorithms and data structures for free, in a fun and accessible way.

If you fork or modify this project:
- Please keep it open source and accessible.
- Please do not commercialize it.
- Please prioritize educational goals.

The project is licensed under [AGPL v3](https://www.gnu.org/licenses/agpl-3.0.html) to ensure all modifications remain open source.

⚠️ This repo is work-in-progress. Lots of files/routes are placeholders or temporary experiments, most of the algorithms in sorting are polished but will still be ported to Node.js as they are just expirements for now, though their current structure will stay similar in Node.js.
