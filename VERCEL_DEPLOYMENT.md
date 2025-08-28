# Vercel Deployment Guide

## 🚀 Deploy to Vercel

### Prerequisites
1. GitHub account
2. Vercel account (free)
3. PlanetScale account (free MySQL cloud database)

### Step 1: Set up Cloud Database (PlanetScale)

1. Go to [PlanetScale](https://planetscale.com) and create a free account
2. Create a new database named `ems-database`
3. Get your connection details:
   - Database URL
   - Username  
   - Password
4. Create the employees table:
   ```sql
   CREATE TABLE employee (
       id BIGINT PRIMARY KEY AUTO_INCREMENT,
       first_name VARCHAR(100) NOT NULL,
       last_name VARCHAR(100) NOT NULL,
       email VARCHAR(100) UNIQUE NOT NULL
   );
   ```

### Step 2: Deploy Backend to Vercel

1. **Push your code to GitHub** (if not already done):
   ```bash
   cd ems-backend
   git add .
   git commit -m "Add Vercel deployment configuration"
   git push origin main
   ```

2. **Build the JAR file**:
   ```bash
   ./mvnw clean package -DskipTests
   ```

3. **Deploy to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `ems-backend` folder
   - Set environment variables:
     - `DATABASE_URL`: Your PlanetScale connection string
     - `DATABASE_USERNAME`: Your PlanetScale username
     - `DATABASE_PASSWORD`: Your PlanetScale password
     - `SPRING_PROFILES_ACTIVE`: `vercel`
   - Deploy

### Step 3: Deploy Frontend to Vercel

1. **Update the API URL**:
   - Edit `ems-frontend/.env.production`
   - Replace `https://your-backend.vercel.app` with your actual backend URL

2. **Deploy to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `ems-frontend` folder
   - Vercel will auto-detect it's a React app
   - Deploy

### Step 4: Update CORS Configuration

1. Once you have your frontend URL, update the backend CORS:
   - Edit `EmployeeController.java`
   - Replace the CORS origins with your actual frontend URL
   - Redeploy the backend

### Alternative: Deploy as Monorepo

You can also deploy both frontend and backend from the same repository:

1. **Create root vercel.json**:
   ```json
   {
     "builds": [
       {
         "src": "ems-frontend/package.json",
         "use": "@vercel/static-build",
         "config": {
           "distDir": "dist"
         }
       },
       {
         "src": "ems-backend/target/ems-backend-0.0.1-SNAPSHOT.jar",
         "use": "@vercel/java"
       }
     ],
     "routes": [
       {
         "src": "/api/(.*)",
         "dest": "/ems-backend/target/ems-backend-0.0.1-SNAPSHOT.jar"
       },
       {
         "src": "/(.*)",
         "dest": "/ems-frontend/$1"
       }
     ]
   }
   ```

## 🔧 Environment Variables Setup

### Backend Environment Variables (Vercel)
```
DATABASE_URL=mysql://username:password@host:port/database?sslmode=require
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
SPRING_PROFILES_ACTIVE=vercel
PORT=8080
```

### Frontend Environment Variables (Vercel)
```
REACT_APP_API_URL=https://your-backend-url.vercel.app/api/employees
```

## 🌐 Alternative Cloud Database Options

### 1. Railway MySQL
- Free tier available
- Easy setup
- Connection string provided

### 2. Aiven MySQL
- Free tier available  
- High performance
- Global deployment

### 3. Google Cloud SQL
- Pay-as-you-go
- Managed MySQL
- High availability

## 📝 Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Cloud database created and configured
- [ ] Backend JAR file built
- [ ] Backend deployed to Vercel with environment variables
- [ ] Frontend deployed to Vercel
- [ ] CORS configuration updated with actual URLs
- [ ] Database tables created
- [ ] Test all CRUD operations

## 🐛 Troubleshooting

### Backend Issues
- Check Vercel function logs
- Verify database connection string
- Ensure JAR file is properly built

### Frontend Issues  
- Check API URL in production environment
- Verify CORS configuration
- Check browser network tab for API calls

### Database Issues
- Verify connection credentials
- Check database whitelist/firewall settings
- Ensure database is running

## 📚 Useful Commands

```bash
# Build backend
cd ems-backend
./mvnw clean package -DskipTests

# Build frontend  
cd ems-frontend
npm run build

# Test locally
npm run dev
java -jar -Dspring.profiles.active=vercel target/ems-backend-0.0.1-SNAPSHOT.jar
```
