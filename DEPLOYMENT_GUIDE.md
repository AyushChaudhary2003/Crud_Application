# Employee Management System - Deployment Guide

## 🚀 Deployment: Vercel (Frontend) + ngrok (Backend)

Your project is configured for deployment with:
- **Frontend:** Vercel (free, permanent hosting)
- **Backend:** Local + ngrok (free tunnel, requires your PC running)

---

## 📋 Prerequisites

- ✅ GitHub account (https://github.com)
- ✅ Vercel account (https://vercel.com) - free, no credit card
- ✅ ngrok account (https://ngrok.com) - free, no credit card
- ✅ Backend running locally on port 8080
- ✅ MySQL database running locally

---

## 🎯 Deployment Steps

### Step 1: Start Backend Locally

Make sure your Spring Boot backend is running:
```bash
cd ems-backend
.\mvnw.cmd spring-boot:run
```

Backend should be running on `http://localhost:8080`

---

### Step 2: Setup ngrok

1. **Install ngrok** (already done if you followed setup)

2. **Sign up at ngrok:**
   - Go to https://dashboard.ngrok.com/signup
   - Sign up (free, no credit card)
   - Copy your authtoken from the dashboard

3. **Configure ngrok:**
   ```bash
   ngrok config add-authtoken YOUR_AUTHTOKEN
   ```

4. **Start ngrok tunnel:**
   ```bash
   ngrok http 8080
   ```

5. **Copy your ngrok URL** from the terminal output:
   - Look for: `Forwarding https://xxxxx.ngrok-free.dev -> http://localhost:8080`
   - Copy the `https://xxxxx.ngrok-free.dev` URL

---

### Step 3: Update Frontend Configuration

Update the production API URL in `.env.production`:
```
VITE_API_BASE_URL=https://YOUR-NGROK-URL.ngrok-free.dev/api/employees
```

Commit and push:
```bash
git add .
git commit -m "Update ngrok URL"
git push
```

---

### Step 4: Deploy Frontend to Vercel

1. **Go to Vercel:**
   - Visit https://vercel.com/new
   - Sign in with GitHub

2. **Import Repository:**
   - Click "Import Project"
   - Select `Crud_Application` repository

3. **Configure Project:**
   - **Framework Preset:** Vite
   - **Root Directory:** Click "Edit" → Select `ems-frontend` ⚠️ **Important!**
   - **Build Command:** `npm run build` (auto-fills)
   - **Output Directory:** `dist` (auto-fills)

4. **Add Environment Variable:**
   - Expand "Environment Variables"
   - **Name:** `VITE_API_BASE_URL`
   - **Value:** `https://YOUR-NGROK-URL.ngrok-free.dev/api/employees`
   - Click "Add"

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Copy your Vercel URL (e.g., `https://your-app.vercel.app`)

---

## ✅ Testing Your Deployment

1. **Make sure ngrok is still running** (check terminal)
2. **Visit your Vercel URL** in a browser
3. **Test all features:**
   - View employee list
   - Add new employee
   - Edit employee
   - Delete employee

---

## ⚠️ Important Notes

### ngrok Requirements:
- **Your computer must be running** for the website to work
- **ngrok must be active** in the terminal
- **Backend must be running** on port 8080
- **MySQL must be running** locally

### ngrok URL Changes:
- Free tier: URL changes when you restart ngrok
- When URL changes, you must:
  1. Update `.env.production` with new URL
  2. Commit and push to GitHub
  3. Vercel will auto-redeploy

### To keep the same URL:
- Don't close the ngrok terminal
- Or upgrade to ngrok paid plan for permanent URLs

---

## 🐛 Troubleshooting

### Frontend shows "Network Error"?
- Check if ngrok is still running
- Check if backend is running on port 8080
- Verify the ngrok URL in Vercel environment variables

### ngrok shows "ERR_NGROK_..."?
- Make sure you're using the latest ngrok version
- Check your authtoken is configured correctly

### Backend not responding?
- Restart Spring Boot backend
- Check MySQL is running
- Verify port 8080 is not blocked by firewall

---

## 🔄 Making Updates

### Update Frontend Code:
```bash
git add .
git commit -m "Update message"
git push
```
Vercel auto-deploys on push

### Update Backend Code:
1. Stop backend (Ctrl+C)
2. Make your changes
3. Restart backend: `.\mvnw.cmd spring-boot:run`
4. ngrok continues to work (no changes needed)

---

## 📝 Your URLs

- **Frontend (Vercel):** (you'll get this after deployment)
- **Backend (ngrok):** https://interjugal-beverly-uncountenanced.ngrok-free.dev
- **GitHub Repo:** https://github.com/AyushChaudhary2003/Crud_Application

---

## 🎉 You're Live!

Your Employee Management System is now live and accessible from anywhere!
