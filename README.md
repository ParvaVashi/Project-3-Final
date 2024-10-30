# 🌟 **Project-3-Final** 🌟

Welcome to **Project-3-Final**! This full-stack application combines a robust backend with a dynamic frontend. Follow the steps below to install and run the project locally. Happy coding! 🎉

---

## 🛠️ Prerequisites 🛠️

Before you get started, ensure the following are installed on your system:

1. 📦 **[Node.js](https://nodejs.org/)** - Make sure you have the latest stable version.
2. 💽 **[MongoDB Compass](https://www.mongodb.com/products/compass)** - For database management and easy visualization.

---

## 🚀 Getting Started 🚀

### Step 1️⃣: **Clone the Repository & Setup**

In your terminal, run the following commands to set up the project in a single terminal session:

```bash
# Clone the repository
git clone https://github.com/ParvaVashi/Project-3-Final.git

# Navigate into the project directory
cd Project-3-Final

# Set up the Backend
cd backend
npm install
# Replace MONGO_URI in the backend/.env file with your MongoDB URI from MongoDB Compass
node app.js &  # Starts backend in the background

# Set up the Frontend
cd ../frontend
npm install
npm start  # Starts frontend in the same terminal

🎉 Your Project Is Up and Running! 🎉
With both servers active, the application should be fully operational! 👏💻

📝 Note: Make sure MongoDB is running in the background while working with the application.
