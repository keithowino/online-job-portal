# Job Portal Web App

A modern job portal web application built with **React.js**, **Tailwind CSS**, and **Firebase**, following a hands-on learning approach. This project focuses on understanding real-world Firebase integration, including authentication, database management, and storage.

---

## 🚀 Project Overview

This application allows users to:

- Browse available job listings
- Post new job opportunities
- Interact with job data in real-time
- (Planned) Authenticate users and manage accounts using Firebase

The primary goal of this project is to **learn Firebase through practical implementation** while building a functional, scalable frontend using React.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Backend / BaaS:** Firebase (Firestore, Authentication, Storage)
- **Package Manager:** npm

---

## 📂 Project Structure (High-Level)

```
job-portal/
│── public/
│── src/
│   ├── components/
│   ├── pages/
│   ├── firebase/
│   ├── App.jsx
│   └── main.jsx
│── package.json
│── README.md
```

---

## ⚙️ Getting Started

### 1. Fork the Repository

Forking creates your own copy of the project.

1. Go to:
   👉 https://github.com/keithowino/online-job-portal
2. Click the **Fork** button (top-right corner)
3. Select your GitHub account

---

### 2. Clone the Repository

Clone your forked repo to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/online-job-portal.git
```

Navigate into the project:

```bash
cd online-job-portal
```

---

### 3. Install Dependencies

Install all required packages:

```bash
npm install
```

---

### 4. Run the Development Server

Start the app locally:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 🔥 Firebase Setup (Upcoming / Required)

Firebase will be used for:

- Authentication (login/signup)
- Firestore database (job listings)
- Storage (optional: resumes, images)

### Step-by-Step Setup

1. Go to Firebase Console
   👉 https://console.firebase.google.com/

2. Click **"Add Project"**

3. Enter your project name (e.g., `job-portal-app`)

4. Disable Google Analytics (optional)

5. Create the project

---

### Add Web App to Firebase

1. Click **Web (</>) icon**
2. Register your app
3. Copy the Firebase config object

---

### Install Firebase SDK

Inside your project:

```bash
npm install firebase
```

---

### Create Firebase Config File

Create a file:

```
src/firebase/firebase.js
```

Add your config:

```javascript
import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "YOUR_API_KEY",
	authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
	projectId: "YOUR_PROJECT_ID",
	storageBucket: "YOUR_PROJECT_ID.appspot.com",
	messagingSenderId: "XXXX",
	appId: "XXXX",
};

const app = initializeApp(firebaseConfig);

export default app;
```

---

### Enable Firebase Services

Inside Firebase Console:

#### Authentication

- Go to **Authentication → Sign-in method**
- Enable **Email/Password**

#### Firestore Database

- Go to **Firestore Database**
- Click **Create database**
- Start in **test mode** (for development)

#### Storage (Optional)

- Go to **Storage**
- Click **Get Started**

---

## 🌍 Live Demo

- Portfolio: https://pickaxe-and-shovel.vercel.app
- Project Repo: https://github.com/keithowino/online-job-portal

_(Live deployment of this project will be added later)_

---

## 📌 Future Improvements

- User authentication (login/signup)
- Job filtering and search
- Protected routes
- Admin dashboard for posting jobs
- Resume upload functionality
- Deployment (Vercel / Netlify)

---

## 🤝 Contributing

Contributions are welcome.

### Steps:

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make your changes
4. Commit:

```bash
git commit -m "Add your message"
```

5. Push:

```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request

---

## 📧 Contact

- Email: [designsolutions1629@gmail.com](mailto:designsolutions1629@gmail.com)
- Portfolio: https://pickaxe-and-shovel.vercel.app

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🧠 Learning Note

This project is part of a **hands-on learning journey** focused on:

- Understanding Firebase in real-world scenarios
- Building scalable frontend applications
- Improving full-stack development skills incrementally

---
