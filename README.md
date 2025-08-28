# 🏢 Employee Management System (EMS)

<div align="center">

![Java](https://img.shields.io/badge/Java-21-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.10-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, full-stack Employee Management System built with Spring Boot and React**

> 🚀 **Quick Start**: This project is ready for local development! Follow the [Running the Application](#-running-the-application) section to get started in minutes.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation--setup) • [Quick Start](#-running-the-application) • [API Documentation](#-api-documentation)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Technical Concepts Explained](#-technical-concepts-explained)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation & Setup](#-installation--setup)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Frontend Structure](#-frontend-structure)
- [Backend Structure](#-backend-structure)
- [Development & Testing](#-development--testing)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Author](#-author)
- [Code Documentation](#-code-documentation)

---

## 🌟 Overview

The **Employee Management System (EMS)** is a comprehensive full-stack web application designed to streamline employee data management. Built with modern technologies, it provides a clean, intuitive interface for performing CRUD (Create, Read, Update, Delete) operations on employee records.

### ✨ Key Highlights

- 🚀 **Modern Tech Stack**: Spring Boot 3.3.10 + React 19.1.1
- 🎨 **Professional UI**: Bootstrap-powered responsive design with dark/light themes
- 🔄 **Real-time Features**: Instant search, theme switching, and data synchronization
- 🗄️ **Robust Database**: MySQL integration with JPA/Hibernate ORM
- 🛡️ **Data Validation**: Comprehensive input validation with visual feedback
- 📱 **Mobile Friendly**: Responsive design that works seamlessly across all devices
- 💼 **Interview Ready**: Extensively commented code for technical discussions
- 🔗 **Professional Networking**: Integrated email and LinkedIn contact options

---

## 🚀 Features

### Core Functionality
- ✅ **Employee Registration**: Add new employees with complete details
- 📖 **Employee Directory**: View all employees with serial number system (S.No)
- 🔍 **Advanced Search**: Real-time search across name and email fields
- ✏️ **Profile Updates**: Edit employee information seamlessly
- 🗑️ **Smart Deletion**: Delete employee records with confirmation dialogs
- � **Data Validation**: Comprehensive form validation for data integrity
- 🌓 **Theme Toggle**: Professional dark/light mode switching

### Professional Features
- 📧 **Direct Contact**: Email integration for immediate communication
- 🔗 **LinkedIn Integration**: Professional networking connection
- 📱 **Responsive Design**: Mobile-first approach for all devices
- 🎨 **Modern UI**: Clean, professional interface with Bootstrap styling

### Technical Features
- 🔌 **RESTful API**: Clean, well-documented REST endpoints
- 🔄 **State Management**: Efficient React state handling with hooks
- 🎯 **Error Handling**: Comprehensive error management throughout
- 📊 **Database Persistence**: Reliable MySQL data storage with JPA
- 🌐 **CORS Support**: Cross-origin resource sharing enabled
- 📝 **Code Documentation**: Extensive comments for interview readiness

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

## 📚 Technical Concepts Explained

### 🌐 What is REST API?

**REST (Representational State Transfer)** is an architectural style for designing networked applications. A REST API is a set of rules and conventions for building web services that allow different software applications to communicate over HTTP.

#### Key Principles of REST:
- **Stateless**: Each request contains all information needed to process it
- **Client-Server**: Clear separation between frontend and backend
- **Cacheable**: Responses can be cached to improve performance
- **Uniform Interface**: Consistent way to interact with resources

#### HTTP Methods Used in Our EMS:
| Method | Purpose | Example |
|--------|---------|---------|
| `GET` | Retrieve data | Get all employees or specific employee |
| `POST` | Create new resource | Add new employee |
| `PUT` | Update existing resource | Modify employee details |
| `DELETE` | Remove resource | Delete employee record |

#### REST API Endpoints in EMS:
```
GET    /api/employees     → Get all employees
GET    /api/employees/1   → Get employee with ID 1
POST   /api/employees     → Create new employee
PUT    /api/employees/1   → Update employee with ID 1
DELETE /api/employees/1   → Delete employee with ID 1
```

### 🏗️ What is Spring Boot?

**Spring Boot** is a Java framework that simplifies the development of production-ready applications. It provides:

- **Auto-Configuration**: Automatically configures your application based on dependencies
- **Embedded Server**: Built-in Tomcat server (no need for external deployment)
- **Starter Dependencies**: Pre-configured dependency bundles
- **Production Features**: Health checks, metrics, externalized configuration

#### Key Spring Boot Components in EMS:
- **@RestController**: Marks a class as REST API controller
- **@Service**: Business logic layer component
- **@Repository**: Data access layer component
- **@Entity**: JPA entity representing database table

### 🗄️ What is JPA/Hibernate?

**JPA (Java Persistence API)** is a specification for managing relational data in Java applications.
**Hibernate** is the most popular JPA implementation.

#### Benefits:
- **Object-Relational Mapping (ORM)**: Maps Java objects to database tables
- **Database Independence**: Write once, run on any database
- **Automatic SQL Generation**: No need to write SQL queries manually
- **Lazy Loading**: Efficient data loading strategies

#### JPA Annotations in EMS:
```java
@Entity                    // Marks class as database entity
@Id                       // Primary key field
@GeneratedValue           // Auto-generated primary key
@Column                   // Maps field to database column
```

### ⚛️ What is React?

**React** is a JavaScript library for building user interfaces, developed by Facebook.

#### Key Concepts:
- **Components**: Reusable UI building blocks
- **JSX**: JavaScript syntax extension for writing HTML-like code
- **State**: Component data that can change over time
- **Props**: Data passed from parent to child components
- **Hooks**: Functions that let you use state and lifecycle features

#### React Features in EMS:
- **Functional Components**: Modern React component style
- **useState Hook**: Manages component state
- **useEffect Hook**: Handles side effects (API calls)
- **React Router**: Client-side navigation

### 🎨 What is Bootstrap?

**Bootstrap** is a popular CSS framework for building responsive, mobile-first websites.

#### Features Used in EMS:
- **Grid System**: Responsive layout structure
- **Components**: Pre-built UI components (buttons, forms, tables)
- **Utilities**: Helper classes for spacing, colors, typography
- **Responsive Design**: Mobile-first approach

### 🔧 What is Maven?

**Maven** is a build automation and project management tool for Java projects.

#### Key Features:
- **Dependency Management**: Automatically downloads and manages libraries
- **Build Lifecycle**: Standardized build process
- **Project Structure**: Standard directory layout
- **Plugins**: Extensible build functionality

#### Maven Commands Used:
```bash
./mvnw clean compile    # Clean and compile project
./mvnw spring-boot:run  # Run Spring Boot application
./mvnw package         # Create JAR file
```

### 🌐 What is CORS?

**CORS (Cross-Origin Resource Sharing)** is a security feature that allows controlled access to resources from different domains.

#### Why Needed:
- **Same-Origin Policy**: Browsers block requests between different origins
- **API Access**: Frontend (port 3000) needs to access backend (port 8080)
- **Security**: Prevents malicious websites from accessing your API

#### CORS Configuration in EMS:
```java
@CrossOrigin(origins = "http://localhost:3000")
```

### 📦 What is Vite?

**Vite** is a modern build tool for JavaScript projects, focusing on speed and developer experience.

#### Advantages:
- **Fast Development**: Hot module replacement (HMR)
- **Modern JavaScript**: ES modules support
- **Optimized Builds**: Efficient production bundles
- **Plugin Ecosystem**: Rich plugin system

### 🔄 What is CRUD?

**CRUD** stands for the four basic operations that can be performed on data:

- **Create**: Add new records (POST request)
- **Read**: Retrieve existing records (GET request)  
- **Update**: Modify existing records (PUT request)
- **Delete**: Remove records (DELETE request)

#### CRUD Operations in EMS:
- **Create**: Add new employee
- **Read**: View employee list and individual details
- **Update**: Edit employee information
- **Delete**: Remove employee from system

### 🏛️ What is MVC Architecture?

**MVC (Model-View-Controller)** is a design pattern that separates application logic:

- **Model**: Data and business logic (Entity, Repository, Service)
- **View**: User interface (React components)
- **Controller**: Handles requests and responses (REST Controller)

#### MVC in EMS:
- **Model**: Employee entity, EmployeeService, EmployeeRepository
- **View**: React components (ListEmployeeComponent, EmployeeComponent)
- **Controller**: EmployeeController with REST endpoints

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

## � Project Structure

This project has been cleaned and optimized for professional development and interviews:

```
📁 Employee Management System/
├── 📁 .vscode/                 # VS Code settings (minimal, useful)
│   └── 📄 settings.json        # Java & build configuration
├── 📁 ems-backend/            # Spring Boot backend
│   ├── 📁 src/main/java/      # Java source code with extensive comments
│   │   └── 📁 net/javaguides/ems/
│   │       ├── 📄 EmsBackendApplication.java
│   │       ├── 📁 controller/  # REST API endpoints
│   │       ├── 📁 service/     # Business logic layer
│   │       ├── 📁 entity/      # JPA entities
│   │       ├── 📁 repository/  # Data access layer
│   │       ├── 📁 dto/         # Data transfer objects
│   │       ├── 📁 mapper/      # Entity-DTO mapping
│   │       └── 📁 exception/   # Custom exceptions
│   ├── 📁 src/main/resources/ # Application properties
│   ├── 📁 target/             # Compiled classes (auto-generated)
│   ├── 📄 pom.xml             # Maven configuration
│   ├── 📄 mvnw & mvnw.cmd     # Maven wrapper
│   └── 📄 .gitignore          # Git ignore rules
├── 📁 ems-frontend/           # React frontend
│   ├── 📁 src/                # React source code with comprehensive comments
│   │   ├── 📄 App.jsx         # Main application component
│   │   ├── 📄 App.css         # Application styles with dark/light themes
│   │   ├── 📁 components/     # Reusable React components
│   │   │   ├── 📄 HeaderComponent.jsx      # Navigation with contact links
│   │   │   ├── 📄 ListEmployeeComponent.jsx # Employee list with search & S.No
│   │   │   ├── 📄 EmployeeComponent.jsx     # Add/Edit employee form
│   │   │   └── 📄 FooterComponent.jsx       # Application footer
│   │   └── 📁 services/       # API communication layer
│   │       └── 📄 EmployeeService.js        # Axios-based API calls
│   ├── 📁 public/             # Static assets
│   │   └── 📄 vite.svg        # Vite logo
│   ├── 📁 node_modules/       # Dependencies (auto-generated)
│   ├── 📄 package.json        # NPM configuration
│   ├── 📄 vite.config.js      # Vite build configuration
│   ├── 📄 .env.development    # Development environment variables
│   └── 📄 .gitignore          # Git ignore rules
└── 📄 README.md               # This comprehensive documentation
```

### 🧹 **Recently Cleaned Up**

This project has been professionally cleaned to remove:
- ❌ Deployment configuration files (Docker, Vercel, Railway, etc.)
- ❌ Duplicate documentation and test files
- ❌ Alternative backend implementations
- ❌ Mock data files
- ❌ Failed deployment artifacts

**Result**: Clean, focused codebase perfect for interviews and portfolio presentation.

---

## �🔧 Installation & Setup

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

### 🔥 **Quick Start Commands**

#### **Step 1: Start Backend Server (Terminal 1)**
```powershell
# Navigate to project root
cd "C:\Users\ayush\OneDrive\Desktop\CRUD (Project1)\full-stack"

# Go to backend directory
cd ems-backend

# Start Spring Boot application
.\mvnw.cmd spring-boot:run
```

#### **Step 2: Start Frontend Server (Terminal 2)**
```powershell
# Open new terminal and navigate to project root
cd "C:\Users\ayush\OneDrive\Desktop\CRUD (Project1)\full-stack"

# Go to frontend directory
cd ems-frontend

# Start React development server
npm run dev
```

### 📊 **Expected Output**

#### Backend (Spring Boot) - Terminal 1:
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::               (v3.3.10)

2025-XX-XX 10:XX:XX.XXX  INFO --- [main] n.j.ems.EmsBackendApplication
Started EmsBackendApplication in 3.245 seconds (JVM running for 3.567)
Tomcat started on port(s): 8080 (http) with context path ''
```

#### Frontend (React + Vite) - Terminal 2:
```
VITE v7.1.3  ready in 324 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help

ready in 324ms.
```

### 🌍 **Access Points**

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:3000 | React application interface |
| **Backend API** | http://localhost:8080 | Spring Boot REST API |
| **Employee API** | http://localhost:8080/api/employees | Employee CRUD endpoints |

### ✅ **Verification Steps**

#### 1. Test Backend API:
```powershell
# Test API endpoint
Invoke-WebRequest -Uri "http://localhost:8080/api/employees" -Method GET
```

#### 2. Test Frontend:
- Open browser and navigate to http://localhost:3000
- You should see the Employee Management System interface

### 🛑 **Stopping the Application**

#### Stop Backend:
- In Terminal 1: Press `Ctrl + C`

#### Stop Frontend:
- In Terminal 2: Press `Ctrl + C`

### 🔄 **Alternative Running Methods**

#### Method 1: Using Maven Wrapper (Current)
```powershell
# Backend
cd ems-backend
.\mvnw.cmd spring-boot:run

# Frontend  
cd ems-frontend
npm run dev
```

#### Method 2: Using Java JAR (Production)
```powershell
# Build JAR file
cd ems-backend
.\mvnw.cmd clean package

# Run JAR file
java -jar target\ems-backend-0.0.1-SNAPSHOT.jar
```

#### Method 3: IDE Integration
- **IntelliJ IDEA**: Right-click `EmsBackendApplication.java` → Run
- **VS Code**: Open integrated terminal and run commands above

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

**Windows/PowerShell Commands:**
```powershell
# Check Java version
java -version

# Check if port 8080 is in use
netstat -an | findstr 8080

# Stop any Java processes if needed
Get-Process | Where-Object {$_.ProcessName -eq "java"} | Stop-Process -Force

# Check MySQL connection
mysql -u root -p -e "SHOW DATABASES;"
```

**Common Solutions:**
- Ensure MySQL is running
- Verify `application.properties` database credentials
- Check if port 8080 is already in use
- Remove any duplicate controller files (e.g., VercelHandler.java)

#### Frontend Build Errors

**Windows/PowerShell Commands:**
```powershell
# Clear node modules and reinstall
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue
npm install

# Check Node.js version
node --version
npm --version

# Kill any Node processes if needed
Get-Process | Where-Object {$_.ProcessName -eq "node"} | Stop-Process -Force
```

**Common Solutions:**
- Ensure Node.js version 18+ is installed
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall dependencies

#### Database Connection Issues
1. Verify MySQL is running
2. Check username/password in `application.properties`
3. Ensure database `ems` exists
4. Verify MySQL port (default: 3306)

#### Mapping Conflicts (Spring Boot)
**Error**: `Ambiguous mapping. Cannot map 'employeeController' method`

**Solution**: Remove duplicate controller files:
```powershell
# Remove any duplicate handlers
Remove-Item "src\main\java\net\javaguides\ems\api\VercelHandler.java" -Force -ErrorAction SilentlyContinue
```

This error occurs when multiple controllers have the same REST endpoint mappings.

#### CORS Errors
- Backend includes `@CrossOrigin` annotations
- Check browser developer console for specific errors
- Verify frontend is running on port 3000

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

## ‍💻 Author

**Ayush Chaudhary**
- 🔗 **LinkedIn**: [Connect with Ayush](https://www.linkedin.com/in/ayush-chaudhary-652598259/)
- 📧 **Email**: [ayushiaf.ac@gmail.com](mailto:ayushiaf.ac@gmail.com)
- 🐙 **GitHub**: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
- 💼 **Portfolio**: This Employee Management System showcases full-stack development skills

---

## 📝 Code Documentation

This project includes comprehensive comments throughout the codebase for:
- **Interview Preparation**: Detailed explanations of technical concepts
- **Learning Reference**: Clear documentation of design patterns and best practices
- **Maintenance**: Easy understanding for future enhancements
- **Code Review**: Professional-level commenting standards

### Backend Documentation
- **Controllers**: REST API endpoint documentation with HTTP methods
- **Services**: Business logic explanation with transaction handling
- **Entities**: JPA annotations and database mapping details
- **Repositories**: Data access patterns and query explanations

### Frontend Documentation
- **Components**: React hooks usage and state management patterns
- **Services**: API integration and error handling strategies
- **Routing**: SPA navigation and URL parameter handling
- **Styling**: Bootstrap integration and responsive design principles

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
