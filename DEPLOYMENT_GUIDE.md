# Employee Management System - Deployment Guide

## 🚀 Deployment Setup Complete!

Your project is now configured for deployment on **Vercel (Frontend)** and **Render (Backend)**.

---

## 📋 Prerequisites

Before deploying, make sure you have:
- ✅ GitHub account
- ✅ Vercel account (sign up at vercel.com)
- ✅ Render account (sign up at render.com)

---

## 🎯 Step-by-Step Deployment Instructions

### Part 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `employee-management-system` (or any name)
   - Keep it **Public** (easier for free deployment)
   - Don't initialize with README (we already have code)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   cd "c:\Users\ayush\OneDrive\Desktop\CRUD (Project1)\full-stack"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

---

### Part 2: Deploy Backend on Render

1. **Go to Render:** https://dashboard.render.com/

2. **Create PostgreSQL Database:**
   - Click "New +" → "PostgreSQL"
   - Name: `ems-database`
   - Database: `ems`
   - User: (auto-generated)
   - Region: Choose closest to you
   - Plan: **Free**
   - Click "Create Database"
   - **COPY the "Internal Database URL"** (you'll need this)

3. **Deploy Backend Service:**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the repository you just created
   - **Root Directory:** `ems-backend`
   - **Name:** `ems-backend`
   - **Region:** Same as database
   - **Branch:** `main`
   - **Build Command:** `./mvnw clean install -DskipTests`
   - **Start Command:** `java -jar target/ems-backend-0.0.1-SNAPSHOT.jar`
   - **Plan:** Free

4. **Add Environment Variables:**
   - Scroll to "Environment Variables"
   - Add these variables:
     ```
     SPRING_PROFILES_ACTIVE=prod
     DATABASE_URL=(paste the Internal Database URL from step 2)
     ```
   - Click "Create Web Service"

5. **Wait for deployment** (5-10 minutes)
   - Copy your backend URL (e.g., `https://ems-backend-xxxx.onrender.com`)

---

### Part 3: Deploy Frontend on Vercel

1. **Go to Vercel:** https://vercel.com/

2. **Import Project:**
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository

3. **Configure Project:**
   - **Framework Preset:** Vite
   - **Root Directory:** `ems-frontend`
   - Click "Edit" on Root Directory and select `ems-frontend`

4. **Add Environment Variable:**
   - Expand "Environment Variables"
   - Add:
     ```
     Name: VITE_API_BASE_URL
     Value: https://YOUR-BACKEND-URL.onrender.com/api/employees
     ```
     (Replace with your actual Render backend URL from Part 2, step 5)

5. **Deploy:**
   - Click "Deploy"
   - Wait for deployment (2-3 minutes)

6. **Get your frontend URL:**
   - Copy the Vercel URL (e.g., `https://your-app.vercel.app`)

---

### Part 4: Update Backend CORS (Important!)

1. **Update your backend CORS:**
   - Copy your Vercel URL
   - On Render dashboard, go to your `ems-backend` service
   - Go to "Environment" → Add variable:
     ```
     Name: ALLOWED_ORIGINS
     Value: https://your-app.vercel.app
     ```
   - Or update the CORS annotation in EmployeeController.java:
     ```java
     @CrossOrigin(origins = "https://your-app.vercel.app")
     ```

2. **Redeploy backend** (if you changed code):
   ```bash
   git add .
   git commit -m "Update CORS for production"
   git push
   ```

---

## ✅ Testing Your Deployment

1. **Visit your Vercel URL** (frontend)
2. **Try adding, editing, and deleting employees**
3. **Check that all CRUD operations work**

---

## 🐛 Troubleshooting

### Backend not starting?
- Check Render logs for errors
- Verify DATABASE_URL is correct
- Make sure PostgreSQL database is running

### Frontend can't connect to backend?
- Check VITE_API_BASE_URL is correct
- Verify backend CORS includes your Vercel domain
- Check browser console for errors

### Free tier limitations:
- **Render:** Backend sleeps after 15 mins of inactivity (first request takes ~30 seconds)
- **Render:** 750 hours/month limit
- **Vercel:** Unlimited frontend hosting

---

## 🔄 Making Updates

After deployment, to update:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push

# Vercel auto-deploys on push
# Render auto-deploys on push
```

---

## 📝 Important URLs to Save

- Frontend (Vercel): https://your-app.vercel.app
- Backend (Render): https://ems-backend-xxxx.onrender.com
- Database (Render): (internal URL only)
- GitHub Repo: https://github.com/YOUR_USERNAME/YOUR_REPO_NAME

---

## 🎉 You're Done!

Your Employee Management System is now live and accessible from anywhere!
