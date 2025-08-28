# 🏢 Employee Management System (EMS)

<div align="center">

![Java](https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.10-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, full-stack Employee Management System built with Spring Boot and React**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [API Documentation](#-api-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Frontend Structure](#-frontend-structure)
- [Backend Structure](#-backend-structure)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

The **Employee Management System (EMS)** is a comprehensive full-stack web application designed to streamline employee data management. Built with modern technologies, it provides a clean, intuitive interface for performing CRUD (Create, Read, Update, Delete) operations on employee records.

### ✨ Key Highlights

- 🚀 **Modern Tech Stack**: Spring Boot 3.3.10 + React 19.1.1
- 🎨 **Responsive UI**: Bootstrap-powered responsive design
- 🔄 **Real-time Updates**: Instant data synchronization
- 🗄️ **Robust Database**: MySQL integration with JPA/Hibernate
- 🛡️ **Data Validation**: Comprehensive input validation
- 📱 **Mobile Friendly**: Works seamlessly across devices

---

## 🚀 Features

### Core Functionality
- ✅ **Employee Registration**: Add new employees with complete details
- 📖 **Employee Directory**: View all employees in a clean, organized table
- ✏️ **Profile Updates**: Edit employee information seamlessly
- 🗑️ **Record Management**: Delete employee records with confirmation
- 🔍 **Data Validation**: Form validation for data integrity

### Technical Features
- 🔌 **RESTful API**: Clean, well-documented REST endpoints
- 🔄 **State Management**: Efficient React state handling
- 🎯 **Error Handling**: Comprehensive error management
- 📊 **Database Persistence**: Reliable MySQL data storage
- 🌐 **CORS Support**: Cross-origin resource sharing enabled

---

## 🛠️ Tech Stack

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Java** | 21 | Core programming language |
| **Spring Boot** | 3.3.10 | Application framework |
| **Spring Data JPA** | 3.3.10 | Data persistence layer |
| **Hibernate** | 6.5.3 | ORM framework |
| **MySQL** | 8.0+ | Primary database |
| **Maven** | 3.9+ | Dependency management |

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.1.1 | UI library |
| **Vite** | 7.1.3 | Build tool & dev server |
| **React Router DOM** | 7.8.2 | Client-side routing |
| **Axios** | 1.11.0 | HTTP client |
| **Bootstrap** | 5.3.7 | CSS framework |
| **ESLint** | 9.33.0 | Code linting |

---

## 🏗️ System Architecture

```
┌─────────────────┐    HTTP/REST API    ┌─────────────────┐    JPA/Hibernate    ┌─────────────────┐
│                 │ ◄──────────────────► │                 │ ◄──────────────────► │                 │
│  React Frontend │                     │ Spring Boot     │                     │  MySQL Database │
│  (Port: 3000)   │                     │ Backend         │                     │  (Port: 3306)   │
│                 │                     │ (Port: 8080)    │                     │                 │
└─────────────────┘                     └─────────────────┘                     └─────────────────┘
        │                                       │                                       │
        ▼                                       ▼                                       ▼
   Vite Dev Server                         Tomcat Server                          Employee Table
   React Components                        REST Controllers                       - id (Primary Key)
   Bootstrap Styling                       Service Layer                          - first_name
   Axios HTTP Client                       Repository Layer                       - last_name
                                          JPA Entities                            - email_id
```

---

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

### Required Software
- ☕ **Java Development Kit (JDK) 21 or higher**
- 🗄️ **MySQL Server 8.0 or higher**
- 🌐 **Node.js 18.0 or higher**
- 📦 **npm 9.0 or higher**
- 🔧 **Git** (for cloning the repository)

### Optional Tools
- 🛠️ **MySQL Workbench** (for database management)
- 🔍 **Postman** (for API testing)
- 💻 **VS Code** or **IntelliJ IDEA** (recommended IDEs)

---

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AyushChaudhary2003/Crud_Application.git
cd Crud_Application
```

### 2. Database Setup

#### Create Database
```sql
-- Connect to MySQL as root user
mysql -u root -p

-- Create database
CREATE DATABASE ems;

-- Use the database
USE ems;

-- The application will automatically create the employee table
```

#### Configure Database Connection
Navigate to `ems-backend/src/main/resources/application.properties` and update:
```properties
# MySQL Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.show-sql=true

server.port=8080
```

### 3. Backend Setup (Spring Boot)

```bash
# Navigate to backend directory
cd ems-backend

# Clean and compile the project
./mvnw clean compile

# Run tests (optional)
./mvnw test

# Install dependencies
./mvnw dependency:resolve
```

### 4. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd ../ems-frontend

# Install dependencies
npm install

# Verify installation
npm list
```

---

## 🚀 Running the Application

### Method 1: Development Mode (Recommended)

#### Terminal 1 - Start Backend Server
```bash
# Navigate to backend directory
cd ems-backend

# Start Spring Boot application
./mvnw spring-boot:run

# For Windows
.\mvnw.cmd spring-boot:run
```

**Expected Output:**
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v3.3.10)

Started EmsBackendApplication in X.XXX seconds
Tomcat started on port 8080 (http) with context path '/'
```

#### Terminal 2 - Start Frontend Server
```bash
# Navigate to frontend directory
cd ems-frontend

# Start development server
npm run dev
```

**Expected Output:**
```
VITE v7.1.3  ready in XXXms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
```

### Method 2: Production Build

#### Build Frontend for Production
```bash
cd ems-frontend
npm run build
npm run preview
```

#### Package Backend
```bash
cd ems-backend
./mvnw package
java -jar target/ems-backend-0.0.1-SNAPSHOT.jar
```

---

## 🌐 Access the Application

Once both servers are running:

- **Frontend (React)**: http://localhost:3000
- **Backend (Spring Boot)**: http://localhost:8080
- **API Base URL**: http://localhost:8080/api

### Health Check
Test if the backend is running:
```bash
curl http://localhost:8080/api/employees
```

---

## 📡 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Endpoints

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/employees` | Get all employees | None | Array of employees |
| `GET` | `/employees/{id}` | Get employee by ID | None | Employee object |
| `POST` | `/employees` | Create new employee | Employee JSON | Created employee |
| `PUT` | `/employees/{id}` | Update employee | Employee JSON | Updated employee |
| `DELETE` | `/employees/{id}` | Delete employee | None | 200 OK |

### Employee JSON Structure
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

### Sample API Calls

#### Create Employee
```bash
curl -X POST http://localhost:8080/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }'
```

#### Update Employee
```bash
curl -X PUT http://localhost:8080/api/employees/1 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com"
  }'
```

#### Delete Employee
```bash
curl -X DELETE http://localhost:8080/api/employees/1
```

---

## 🗄️ Database Schema

### Employee Table
```sql
CREATE TABLE employee (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email_id VARCHAR(255) NOT NULL UNIQUE
);
```

### Sample Data
```sql
INSERT INTO employee (first_name, last_name, email_id) VALUES
('Ayush', 'Chaudhary', 'ayush@example.com'),
('Piyush', 'Chaudhary', 'piyush@example.com'),
('Ankit', 'Kamat', 'ankit@example.com');
```

---

## 🎨 Frontend Structure

```
ems-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── EmployeeComponent.jsx      # Add/Edit employee form
│   │   ├── ListEmployeeComponent.jsx  # Employee list & table
│   │   ├── HeaderComponent.jsx        # Navigation header
│   │   └── FooterComponent.jsx        # Footer component
│   ├── services/
│   │   └── EmployeeService.js         # API service layer
│   ├── App.jsx                        # Main app component
│   ├── App.css                        # App styles
│   ├── index.css                      # Global styles
│   └── main.jsx                       # App entry point
├── package.json
├── vite.config.js
└── eslint.config.js
```

### Key Components

#### `ListEmployeeComponent.jsx`
- Displays all employees in a responsive table
- Provides edit and delete functionality
- Handles navigation to add new employees

#### `EmployeeComponent.jsx`
- Handles both add and edit operations
- Form validation and error handling
- Responsive form design with Bootstrap

#### `EmployeeService.js`
- Centralized API calls using Axios
- Error handling and response processing
- Base URL configuration

---

## 🏗️ Backend Structure

```
ems-backend/
├── src/main/java/net/javaguides/ems/
│   ├── controller/
│   │   └── EmployeeController.java    # REST API endpoints
│   ├── service/
│   │   ├── EmployeeService.java       # Service interface
│   │   └── impl/
│   │       └── EmployeeServiceImpl.java # Service implementation
│   ├── repository/
│   │   └── EmployeeRepository.java    # JPA repository
│   ├── entity/
│   │   └── Employee.java              # JPA entity
│   ├── dto/
│   │   └── EmployeeDto.java           # Data transfer object
│   ├── mapper/
│   │   └── EmployeeMapper.java        # Entity-DTO mapper
│   ├── exception/
│   │   └── ResourceNotFoundException.java # Custom exception
│   └── EmsBackendApplication.java     # Main application class
└── src/main/resources/
    └── application.properties         # Configuration file
```

### Architecture Pattern
- **Controller Layer**: Handles HTTP requests and responses
- **Service Layer**: Contains business logic
- **Repository Layer**: Data access abstraction
- **Entity Layer**: JPA entities for database mapping
- **DTO Layer**: Data transfer objects for API communication

---

## 🛠️ Development & Testing

### Backend Testing
```bash
cd ems-backend
./mvnw test
./mvnw spring-boot:run -Dspring-boot.run.profiles=test
```

### Frontend Testing
```bash
cd ems-frontend
npm run lint
npm run build
```

### Manual Testing Checklist
- [ ] Create new employee
- [ ] View employee list
- [ ] Edit existing employee
- [ ] Delete employee
- [ ] Form validation
- [ ] API error handling
- [ ] Responsive design

---

## 🚨 Troubleshooting

### Common Issues

#### Backend Won't Start
```bash
# Check Java version
java -version

# Check if port 8080 is in use
netstat -an | grep 8080

# Check MySQL connection
mysql -u root -p -e "SHOW DATABASES;"
```

#### Frontend Build Errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version
npm --version
```

#### Database Connection Issues
1. Verify MySQL is running
2. Check username/password in `application.properties`
3. Ensure database `ems` exists
4. Verify MySQL port (default: 3306)

#### CORS Errors
- Backend includes `@CrossOrigin` annotations
- Check browser developer console for specific errors
- Verify frontend is running on port 3000

---

## 📦 Deployment

### Production Deployment Options

#### Option 1: Traditional Server
```bash
# Build frontend
cd ems-frontend
npm run build

# Package backend
cd ../ems-backend
./mvnw package

# Deploy JAR file
java -jar target/ems-backend-0.0.1-SNAPSHOT.jar
```

#### Option 2: Docker (Future Enhancement)
```dockerfile
# Future: Docker configuration
# Backend Dockerfile
# Frontend Dockerfile
# docker-compose.yml
```

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow Java naming conventions
- Use meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Ayush Chaudhary**
- GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
- Email: [ayushiaf.ac@gmail.com]

---

## 🙏 Acknowledgments

- Spring Boot community for excellent documentation
- React team for the amazing framework
- Bootstrap for responsive design components
- MySQL for reliable database solutions
- Vite for lightning-fast development experience

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star!

**Happy Coding! 🚀**

</div>
