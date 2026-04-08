# 🤖 AI Mock Interview Platform

An advanced AI-powered mock interview web application that helps users prepare for real-world interviews through intelligent question generation, performance analysis, and actionable feedback.

---

## 📌 Overview

The **AI Mock Interview Platform** is a full-stack web application designed to simulate realistic interview scenarios. It leverages modern web technologies and AI APIs to generate dynamic interview questions, evaluate responses, and provide structured feedback.

This platform is ideal for:

* Students preparing for placements
* Developers practicing technical interviews
* Professionals improving communication and behavioral responses

---

## 🚀 Features

### 🎯 AI-Driven Interview System

* Automatically generates interview questions using AI
* Supports multiple domains (technical, behavioral, etc.)

### 🧠 Personalized Interview Experience

* Questions adapt based on:

  * Selected job role
  * Experience level
  * Interview type

### 📊 Performance Evaluation

* Detailed feedback after each session
* Strengths & weaknesses analysis
* Actionable improvement suggestions

### 📝 Question Bank

* Wide variety of curated and AI-generated questions
* Covers multiple difficulty levels

### ⭐ Interview Scoring System

* Provides an overall performance score
* Helps track progress over time

### 🕘 Interview History

* Access previously attempted interviews
* Review feedback and improve iteratively

---

## 🏗️ Tech Stack

### Frontend

* **Next.js** – React framework for SSR and performance
* **Tailwind CSS** – Utility-first styling

### Backend & Database

* **PostgreSQL** – Relational database
* **Drizzle ORM** – Type-safe database queries
* **Neon DB** – Serverless PostgreSQL hosting

### AI Integration

* **Google Gemini API** – Question generation & feedback analysis

### Other Tools

* **Node.js** – Runtime environment
* **REST APIs** – Communication layer

---

## 📂 Project Structure

```
AI-Mock-Interview/
│── app/                 # Main application routes (Next.js)
│── components/          # Reusable UI components
│── lib/                 # Utility and helper functions
│── utils/               # Common logic
│── public/              # Static assets
│── drizzle.config.js    # Database configuration
│── tailwind.config.js   # Tailwind CSS config
│── package.json         # Dependencies & scripts
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/codesbyharshit510/Ai-Mock-Interview-.git
cd Ai-Mock-Interview-
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
```

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

## 🧪 Usage Guide

1. **Sign Up / Login**
2. **Select Interview Type**

   * Technical / Behavioral
   * Choose role & difficulty
3. **Start Interview**

   * Answer AI-generated questions
4. **Get Feedback**

   * Review detailed performance insights
5. **Track Progress**

   * Revisit past interviews and improve

---

## 🔐 Environment Variables

| Variable                     | Description                  |
| ---------------------------- | ---------------------------- |
| `DATABASE_URL`               | PostgreSQL connection string |
| `NEXT_PUBLIC_GEMINI_API_KEY` | Gemini API key               |

---

## 📸 Screenshots (Optional)

> Add screenshots here for better presentation
> Example:
>
> * Dashboard
> * Interview screen
> * Feedback report

---

## 🤝 Contributing

Contributions are welcome!

### Steps:

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 🐛 Issues

If you find any bugs or want to request a feature, please open an issue.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Harshit**

* GitHub: https://github.com/codesbyharshit510

---

## 💡 Future Improvements

* Voice-based interview simulation
* Video response analysis
* Resume-based question generation
* AI-based hiring recommendations

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

---
