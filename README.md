# Employee Management System - Complete Full Stack Application

A comprehensive CRUD (Create, Read, Update, Delete) application for managing employees, featuring **multiple backend implementations** and a modern React frontend, all deployable on cloud platforms.

## 🚀 Live Demo

- **Frontend**: [https://crud-frontend-gold.vercel.app](https://crud-frontend-gold.vercel.app) ✅ **DEPLOYED**
- **Node.js Backend API**: [https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app](https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app) ✅ **DEPLOYED**
- **Java Spring Boot Backend**: Available for local development and enterprise deployment

## 🛠️ Technology Stack

### Frontend
- **React 19.1.1** - Modern UI Library
- **Vite 7.1.3** - Lightning Fast Build Tool
- **Bootstrap 5.3.7** - Responsive CSS Framework
- **Axios 1.11.0** - Promise-based HTTP Client
- **React Router DOM 7.8.2** - Client-side Routing

### Backend Options

#### 🔵 Node.js Backend (Production - Vercel)
- **Node.js 18** - JavaScript Runtime
- **Express.js** - Fast Web Framework
- **MySQL2** - Database Driver
- **CORS** - Cross-Origin Resource Sharing
- **✅ Deployed on Vercel**

#### 🔴 Java Spring Boot Backend (Enterprise)
- **Spring Boot 3.3.10** - Enterprise Framework
- **Java 21** - Latest LTS Version
- **Spring Data JPA** - Data Access Layer
- **Hibernate** - ORM Framework
- **Maven** - Project Management
- **Ready for enterprise deployment**

### Database & Deployment
- **MySQL** - FreeSQLDatabase (Cloud)
- **Vercel** - Frontend & Node.js Backend Hosting
- **Railway/Render** - Available for Java backend

## 📁 Project Structure

```
📁 Employee Management System/
├── 📁 ems-frontend/              # React Frontend Application
│   ├── 📁 src/
│   │   ├── 📁 components/        # React Components
│   │   │   ├── EmployeeComponent.jsx
│   │   │   ├── ListEmployeeComponent.jsx
│   │   │   ├── HeaderComponent.jsx
│   │   │   └── FooterComponent.jsx
│   │   ├── 📁 services/          # API Service Layer
│   │   │   └── EmployeeService.js
│   │   └── 📁 assets/            # Static Assets
│   ├── 📁 public/
│   └── 📁 dist/                  # Production Build
│
├── 📁 ems-backend-nodejs/        # Node.js Backend (DEPLOYED ✅)
│   ├── 📁 api/
│   │   └── index.js              # Express Server & API Routes
│   ├── package.json
│   ├── vercel.json               # Vercel Configuration
│   └── README.md
│
├── 📁 ems-backend/               # Java Spring Boot Backend
│   ├── 📁 src/main/java/
│   │   └── 📁 net/javaguides/ems/
│   │       ├── EmsBackendApplication.java
│   │       ├── 📁 controller/    # REST Controllers
│   │       ├── 📁 service/       # Business Logic
│   │       ├── 📁 repository/    # Data Access
│   │       ├── 📁 entity/        # JPA Entities
│   │       ├── 📁 dto/           # Data Transfer Objects
│   │       └── 📁 mapper/        # Object Mapping
│   ├── 📁 src/main/resources/
│   │   └── application.properties
│   ├── pom.xml                   # Maven Configuration
│   └── mvnw, mvnw.cmd           # Maven Wrapper
│
└── 📄 README.md                  # Documentation
```

## 🔧 Features

### Core Functionality
- ✅ **Complete CRUD Operations** - Create, Read, Update, Delete employees
- ✅ **Real-time Data Sync** - Live database integration
- ✅ **Form Validation** - Client & server-side validation
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Responsive Design** - Mobile-first approach

### Technical Features
- ✅ **RESTful API Design** - Standard HTTP methods
- ✅ **CORS Enabled** - Cross-origin requests supported
- ✅ **Multiple Backend Options** - Node.js + Java Spring Boot
- ✅ **Cloud Database** - MySQL on FreeSQLDatabase
- ✅ **Modern UI/UX** - Bootstrap components
- ✅ **Production Ready** - Built & deployed

## 🌐 API Endpoints

Both backends implement identical REST API:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/:id` | Get employee by ID |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

## 🚀 Deployment Status

### ✅ Node.js Backend (Production)
- **Platform**: Vercel Serverless
- **Status**: 🟢 **LIVE**
- **URL**: https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app
- **Database**: Connected to FreeSQLDatabase

### 🔄 Java Spring Boot Backend (Ready)
- **Platform**: Available for Railway/Render/Azure
- **Status**: 🟡 **Ready for Deployment**
- **Build**: ✅ Compiled successfully
- **Database**: Configured for FreeSQLDatabase

### 🔄 React Frontend (Next)
- **Platform**: Vercel
- **Status**: ✅ **DEPLOYED**
- **URL**: https://crud-frontend-gold.vercel.app
- **Build**: ✅ Production build successful
- **API**: Configured for deployed Node.js backend

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

## 🏃‍♂️ Local Development

### Frontend
```bash
cd ems-frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Node.js Backend
```bash
cd ems-backend-nodejs
npm install
npm start
# Runs on http://localhost:3000
```

### Java Spring Boot Backend
```bash
cd ems-backend
./mvnw spring-boot:run
# Runs on http://localhost:8080
```

## 🌟 Project Highlights

- **🎯 Complete Full Stack** - Frontend + Multiple Backend Options
- **☁️ Cloud Ready** - Production deployment on Vercel
- **🏢 Enterprise Ready** - Java Spring Boot for enterprise environments  
- **📱 Modern Stack** - Latest versions of React, Spring Boot, Node.js
- **🔒 Production Database** - Real MySQL database integration
- **🚀 Fast Development** - Vite for instant hot reload
- **📊 Clean Architecture** - Separation of concerns, proper layering

## 👨‍💻 Developer

**Ayush Chaudhary**
- GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
- Full Stack Developer specializing in React, Spring Boot, and Node.js

---

*This project demonstrates proficiency in modern web development technologies including React, Node.js, Java Spring Boot, MySQL, and cloud deployment platforms.*
