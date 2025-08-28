# Employee Management System - Full Stack Application

A complete CRUD (Create, Read, Update, Delete) application for managing employees, built with React frontend and Node.js backend, deployed on Vercel.

## 🚀 Live Demo

- **Frontend**: [Coming Soon - Deploy frontend next]
- **Backend API**: [https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app](https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app)

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - UI Library
- **Vite 7.1.3** - Build Tool
- **Bootstrap 5.3.7** - CSS Framework
- **Axios 1.11.0** - HTTP Client
- **React Router DOM 7.8.2** - Routing

### Backend
- **Node.js 18** - Runtime Environment
- **Express.js** - Web Framework
- **MySQL** - Database (FreeSQLDatabase)
- **CORS** - Cross-Origin Resource Sharing

### Deployment
- **Vercel** - Frontend & Backend Hosting
- **FreeSQLDatabase** - MySQL Database Hosting

## 📁 Project Structure

```
├── ems-frontend/          # React Frontend Application
│   ├── src/
│   │   ├── components/    # React Components
│   │   ├── services/      # API Service Layer
│   │   └── assets/        # Static Assets
│   ├── public/
│   └── dist/              # Build Output
│
├── ems-backend-nodejs/    # Node.js Backend API
│   ├── api/
│   │   └── index.js       # Main API Server
│   ├── package.json
│   └── vercel.json        # Vercel Configuration
│
└── README.md              # Project Documentation
```

## 🔧 Features

- ✅ **Complete CRUD Operations** - Create, Read, Update, Delete employees
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Real-time Data** - Live database integration
- ✅ **Form Validation** - Client-side and server-side validation
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Modern UI** - Clean and intuitive interface
- ✅ **RESTful API** - Standard REST endpoints
- ✅ **CORS Enabled** - Cross-origin requests supported

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

## 🚀 Deployment

### Backend (Vercel) ✅ DEPLOYED
1. Node.js serverless functions
2. MySQL database integration
3. CORS configured for frontend access

### Frontend (Vercel) - Next Step
1. Connect to GitHub repository
2. Auto-deploys on main branch updates
3. Environment variables configured for production API

## 💾 Database Schema

```sql
CREATE TABLE employees (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 👨‍💻 Developer

**Ayush Chaudhary**
- GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
