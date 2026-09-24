# 🏋️ Fit Log

**Fit Log** is a modern fitness workout tracking web application built with Next.js. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, search and sort workouts, and keep their selected workouts stored locally in the browser.

## 🚀 Technologies Used

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **DaisyUI 5**
- **React Context API**
- **Browser Local Storage**
- **Next.js Image Optimization**

## ✨ Key Features

### 1. Workout Library

Users can browse available workouts and view useful information such as:

- Workout name
- Muscle groups
- Equipment
- Difficulty
- Duration
- Calories burned
- Rating

### 2. Workout Details

Each workout has a dedicated details page containing:

- Workout description
- Exercise instructions
- Sets and reps
- Equipment
- Difficulty
- Duration
- Calories
- Rating
- Muscle groups

Invalid workout IDs are handled using a custom **404 Not Found** page.

### 3. Today's Workout Plan

Users can add workouts to their daily workout plan.

- Maximum of **5 workouts** can be added
- Duplicate workouts cannot be added
- Users can remove workouts
- Users can mark workouts as completed
- Navbar automatically displays the current plan count

### 4. Saved Workouts

Users can save workouts for later.

- Duplicate saved workouts are prevented
- Saved workouts are displayed separately from Today's Plan
- Users can view workout details
- Users can remove workouts from the saved list
- Navbar automatically displays the saved workout count

### 5. Search, Sort & Persistent State

The **My Plan** page includes:

- Separate **Today's Plan** and **Saved** tabs
- Search functionality for each tab
- Search by workout name, equipment, difficulty, or muscle group
- Sort workouts by:
  - Duration
  - Calories
  - Rating
- Summary showing total exercises, minutes, and calories
- Context API for shared application state
- Local Storage persistence so selected workouts remain available after refreshing the browser

---

## 📦 Clone and Run the Project Locally

Follow these steps to run Fit Log on your local computer.

### Step 1 — Install Node.js

Make sure **Node.js** is installed on your computer.

You can check it by running:

```bash
node -v
```

Also check npm:

```bash
npm -v
```

If Node.js is not installed, download and install it from:

https://nodejs.org/

---

### Step 2 — Clone the Repository

Open your terminal, Git Bash, PowerShell, or VS Code terminal and run:

```bash
git clone https://github.com/TanvirRahman888/fit-log.git
```

This will download the project to your computer.

---

### Step 3 — Go to the Project Folder

```bash
cd fit-log
```

---

### Step 4 — Install Dependencies

Run:

```bash
npm install
```

This will install all required packages from `package.json`.

---

### Step 5 — Start the Development Server

Run:

```bash
npm run dev
```

The development server will start.

You should see something similar to:

```text
Local: http://localhost:3000
```

---

### Step 6 — Open the Project

Open your browser and visit:

```text
http://localhost:3000
```

You should now see the **Fit Log** application running locally.

---

## 🛠 Available Scripts

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production build:

```bash
npm run start
```

Run ESLint:

```bash
npm run lint
```

---

## 📁 Basic Project Structure

```text
fit-log/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── myplan/
│   │   ├── workouts/
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── components/
│   │   ├── footer/
│   │   ├── navbar/
│   │   ├── MyPlan/
│   │   └── workouts/
│   │
│   ├── context/
│   │   └── WorkoutContext.tsx
│   │
│   └── types/
│
├── package.json
├── next.config.ts
└── README.md
```

---

## 🔗 Repository

GitHub Repository:

https://github.com/TanvirRahman888/fit-log

---

## 👨‍💻 Author

**Tanvir Rahman**

GitHub: https://github.com/TanvirRahman888