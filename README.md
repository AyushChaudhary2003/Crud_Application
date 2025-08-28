# 🏢 Employee Management System (EMS)

A modern, full-stack web application for managing employee data with complete CRUD operations, built using Spring Boot and React.

## 🚀 Tech Stack

**Backend Technologies:**
- **Java 21** - Core programming language
- **Spring Boot 3.3.10** - Application framework with embedded Tomcat server
- **Spring Data JPA** - Data persistence and ORM layer
- **Hibernate** - Object-Relational Mapping (ORM) framework
- ## 🔧 Technology Deep Dive

### What is CRUD?
**CRUD** represents the four basic operations of persistent storage:
- **Create** - Add new employee records (POST)
- **Read** - Retrieve employee data (GET)
- **Update** - Modify existing records (PUT)
- **Delete** - Remove records (DELETE)

### What is Maven?
**Maven** is a build automation tool for Java projects:
- **Dependency Management**: Automatically downloads required libraries
- **Build Lifecycle**: Standardized compile, test, package process
- **Project Structure**: Convention over configuration
- **Plugin System**: Extensible build functionality

**Key Maven Commands:**
```bash
./mvnw clean          # Clean previous builds
./mvnw compile        # Compile source code
./mvnw test           # Run unit tests
./mvnw package        # Create JAR file
./mvnw spring-boot:run # Run Spring Boot application
```

### What is Vite?
**Vite** is a modern frontend build tool:
- **Fast Development**: Lightning-fast hot module replacement (HMR)
- **ES Modules**: Native ES module support
- **Optimized Builds**: Efficient production bundles with Rollup
- **Plugin Ecosystem**: Rich plugin system for various frameworks

### React Concepts Used

**Functional Components:**
```jsx
function EmployeeComponent() {
  const [employee, setEmployee] = useState({});
  
  useEffect(() => {
    // Load employee data
  }, []);
  
  return <div>Employee Form</div>;
}
```

**Key React Features:**
- **JSX**: JavaScript syntax extension for HTML-like code
- **useState Hook**: Manages component state
- **useEffect Hook**: Handles side effects (API calls)
- **React Router**: Client-side navigation

### Bootstrap Integration
**Bootstrap 5.3.7** provides:
- **Responsive Grid**: Mobile-first layout system
- **Pre-built Components**: Forms, buttons, tables, cards
- **Utility Classes**: Spacing, colors, typography helpers
- **CSS Variables**: Customizable design system

---

## 🚨 Troubleshooting Guide

### Common Backend Issues

**Problem: Port 8080 already in use**
```bash
# Find process using port 8080
netstat -ano | findstr :8080

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or change port in application.properties
server.port=8081
```

**Problem: MySQL connection failed**
- ✅ Verify MySQL is running: `net start mysql80`
- ✅ Check username/password in `application.properties`
- ✅ Ensure database `ems` exists
- ✅ Verify MySQL port (default: 3306)

**Problem: Java version mismatch**
```bash
# Check Java version
java -version

# Should show Java 21 or higher
# If not, update JAVA_HOME environment variable
```

### Common Frontend Issues

**Problem: npm install fails**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

**Problem: Port 3000 already in use**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- --port 3001
```

**Problem: CORS errors**
- ✅ Backend includes `@CrossOrigin` annotations
- ✅ Check browser developer console for specific errors
- ✅ Verify frontend runs on port 3000

### Build Issues

**Problem: Backend won't compile**
```bash
# Clean and retry
./mvnw clean compile

# Check for syntax errors in Java files
# Verify MySQL connector dependency in pom.xml
```

**Problem: Frontend build fails**
```bash
# Check for TypeScript/ESLint errors
npm run lint

# Fix dependency issues
npm audit fix

# Clear Vite cache
rm -rf node_modules/.vite
```

---

## 🛠️ Development Workflow

### Adding New Features

**Backend Development:**
1. Create new entity in `entity/` package
2. Add repository interface in `repository/` package
3. Implement service in `service/impl/` package
4. Create REST controller in `controller/` package
5. Test with Postman or curl

**Frontend Development:**
1. Create new components in `components/` folder
2. Add API calls to `services/` folder
3. Update routing in `App.jsx`
4. Style with Bootstrap classes
5. Test in browser

### Testing Strategy

**Backend Testing:**
```bash
# Run all tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=EmployeeServiceTest

# Run with coverage
./mvnw jacoco:report
```

**Frontend Testing:**
```bash
# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📚 Learning Resources

### Spring Boot
- [Spring Boot Official Documentation](https://spring.io/projects/spring-boot)
- [Spring Data JPA Guide](https://spring.io/guides/gs/accessing-data-jpa/)
- [Building REST APIs](https://spring.io/guides/gs/rest-service/)

### React
- [React Official Documentation](https://react.dev/)
- [React Hooks Guide](https://react.dev/reference/react)
- [React Router Documentation](https://reactrouter.com/)

### Database
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [JPA/Hibernate Tutorial](https://hibernate.org/orm/documentation/)

---

## 🤝 Contributing

### Development Setup
1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch: `git checkout -b feature/amazing-feature`
4. **Make** your changes
5. **Test** thoroughly
6. **Commit** with clear messages: `git commit -m 'Add amazing feature'`
7. **Push** to your fork: `git push origin feature/amazing-feature`
8. **Create** a Pull Request

### Code Standards
- **Java**: Follow Google Java Style Guide
- **JavaScript**: Follow Airbnb JavaScript Style Guide
- **Comments**: Document complex logic
- **Tests**: Write unit tests for new features
- **Commits**: Use conventional commit messages

---

## 📄 Important Notes

### OpenJDK-24 Folder
⚠️ **Note**: The `ems-frontend/OpenJDK-24/` folder is **NOT needed** for this project and should be removed. It appears to be accidentally placed in the frontend directory. This project only requires:

- **System-wide Java 21+** for backend development
- **Node.js 18+** for frontend development

The OpenJDK folder in the frontend is unnecessary and takes up space. If you encounter permission issues removing it, you can:
1. Restart your computer and try again
2. Use administrator privileges
3. Or simply ignore it (it won't affect functionality)

---

## 👨‍💻 Author

**Ayush Chaudhary**
- 📧 **Email**: [ayushiaf.ac@gmail.com](mailto:ayushiaf.ac@gmail.com)
- 🐙 **GitHub**: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
- 🔗 **LinkedIn**: [Connect with Ayush](https://www.linkedin.com/in/ayush-chaudhary-652598259/)

---

## 🙏 Acknowledgments

- **Spring Framework Team** for excellent documentation and framework
- **React Team** for the amazing UI library
- **MySQL** for reliable database management
- **Bootstrap Team** for responsive design framework
- **Vite Team** for fast build tooling

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### ⭐ If this project helped you, please give it a star!

**Happy Coding! 🚀**

*Built with ❤️ by Ayush Chaudhary*

</div>QL 8.0** - Relational database management system
- **Maven** - Build automation and dependency management

**Frontend Technologies:**
- **React 19.1.1** - JavaScript library for building user interfaces
- **Vite 7.1.3** - Modern build tool and development server
- **React Router DOM** - Client-side routing for single-page application
- **Axios** - HTTP client for API communication
- **Bootstrap 5.3.7** - CSS framework for responsive design
- **ESLint** - Code linting and formatting

## ✨ Features

- **CRUD Operations**: Create, Read, Update, Delete employee records
- **REST API**: RESTful web services with proper HTTP methods
- **Responsive Design**: Mobile-first Bootstrap interface
- **Form Validation**: Client and server-side data validation
- **Database Integration**: MySQL with JPA/Hibernate ORM
- **Real-time Updates**: Instant UI updates after operations
- **Search Functionality**: Filter employees by name or email
- **Professional UI**: Clean, modern interface with dark/light themes

## 🌐 What is REST API?

**REST (Representational State Transfer)** is an architectural style for designing web services. Our EMS uses REST principles:

- **Stateless**: Each request contains all needed information
- **Resource-based**: URLs represent resources (employees)
- **HTTP Methods**: Standard methods for different operations
- **JSON Format**: Data exchange in JSON format

### REST Endpoints in EMS:
```
GET    /api/employees     → Retrieve all employees
GET    /api/employees/1   → Retrieve employee with ID 1
POST   /api/employees     → Create new employee
PUT    /api/employees/1   → Update employee with ID 1
DELETE /api/employees/1   → Delete employee with ID 1
```

## 🏗️ What is Spring Boot?

**Spring Boot** is a Java framework that simplifies application development:

- **Auto-Configuration**: Automatically configures components based on classpath
- **Embedded Server**: Built-in Tomcat server (no external deployment needed)
- **Starter Dependencies**: Pre-configured dependency bundles
- **Production Ready**: Built-in monitoring, health checks, and metrics

### Key Spring Boot Components:
- **@RestController**: Handles HTTP requests and responses
- **@Service**: Contains business logic
- **@Repository**: Data access layer
- **@Entity**: JPA entities representing database tables

## 🗄️ Database & JPA

**JPA (Java Persistence API)** with **Hibernate** provides:
- **Object-Relational Mapping**: Java objects ↔ Database tables
- **Automatic Query Generation**: No manual SQL required
- **Database Independence**: Works with multiple databases
- **Lazy Loading**: Efficient data loading strategies

### Employee Entity Structure:
```java
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name")
    private String firstName;
    
    @Column(name = "last_name") 
    private String lastName;
    
    @Column(name = "email_id")
    private String email;
}
```

---

## 📋 Prerequisites

Before running this application, ensure you have:

- **Java Development Kit (JDK) 21** or higher
- **MySQL Server 8.0** or higher  
- **Node.js 18.0** or higher
- **npm 9.0** or higher
- **Git** (for cloning the repository)

## 🔧 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AyushChaudhary2003/Crud_Application.git
cd Crud_Application
```

### 2. Database Setup

**Create MySQL Database:**
```sql
-- Connect to MySQL
mysql -u root -p

-- Create database
CREATE DATABASE ems;

-- Use the database (optional - Spring Boot will auto-create tables)
USE ems;
```

**Configure Database Connection:**

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

# Server Configuration
server.port=8080
```

### 3. Backend Setup (Spring Boot)
```bash
# Navigate to backend directory
cd ems-backend

# Clean and compile the project
./mvnw clean compile

# Install dependencies (optional)
./mvnw dependency:resolve
```

### 4. Frontend Setup (React)
```bash
# Navigate to frontend directory
cd ems-frontend

# Install dependencies
npm install

# Verify installation
npm list --depth=0
```

---

## Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AyushChaudhary2003/Crud_Application.git
cd Crud_Application
```

### 2. Database Setup
```sql
-- Create database
CREATE DATABASE ems;
```

Update `ems-backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

### 3. Backend Setup
```bash
cd ems-backend
./mvnw clean compile
```

### 4. Frontend Setup
```bash
cd ems-frontend
npm install
```

---

## 🚀 Running the Application

### Method 1: Quick Start (Recommended)

**Step 1: Start Backend Server (Terminal 1)**
```powershell
# Navigate to project root
cd "C:\path\to\your\project\full-stack"

# Go to backend directory
cd ems-backend

# Start Spring Boot application (Windows)
.\mvnw.cmd spring-boot:run

# For Linux/Mac
./mvnw spring-boot:run
```

**Step 2: Start Frontend Server (Terminal 2)**
```powershell
# Open new terminal, navigate to project root
cd "C:\path\to\your\project\full-stack"

# Go to frontend directory
cd ems-frontend

# Start React development server
npm run dev
```

### Method 2: Build and Run JAR (Production)
```bash
# Build backend JAR
cd ems-backend
./mvnw clean package

# Run JAR file
java -jar target/ems-backend-0.0.1-SNAPSHOT.jar

# In another terminal, start frontend
cd ems-frontend
npm run build
npm run preview
```

### 🌍 Access the Application

Once both servers are running:

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend (React)** | http://localhost:3000 | User interface |
| **Backend (Spring Boot)** | http://localhost:8080 | REST API server |
| **API Endpoints** | http://localhost:8080/api/employees | Employee CRUD API |

### ✅ Verify Installation

**Test Backend API:**
```powershell
# Using PowerShell
Invoke-WebRequest -Uri "http://localhost:8080/api/employees" -Method GET

# Using curl (if available)
curl http://localhost:8080/api/employees
```

**Test Frontend:**
- Open browser → http://localhost:3000
- You should see the Employee Management System interface

### 🛑 Stop the Application
- **Backend**: Press `Ctrl + C` in backend terminal
- **Frontend**: Press `Ctrl + C` in frontend terminal

---

## 📡 REST API Documentation

### Base URL
```
http://localhost:8080/api
```

### Employee API Endpoints

| HTTP Method | Endpoint | Description | Request Body | Response |
|-------------|----------|-------------|--------------|----------|
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

**Create Employee (POST):**
```bash
curl -X POST http://localhost:8080/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }'
```

**Get All Employees (GET):**
```bash
curl -X GET http://localhost:8080/api/employees
```

**Update Employee (PUT):**
```bash
curl -X PUT http://localhost:8080/api/employees/1 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane", 
    "lastName": "Smith",
    "email": "jane.smith@example.com"
  }'
```

**Delete Employee (DELETE):**
```bash
curl -X DELETE http://localhost:8080/api/employees/1
```

---

## 🗄️ Database Schema

### Employee Table Structure
```sql
CREATE TABLE employee (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email_id VARCHAR(255) NOT NULL UNIQUE,
    
    CONSTRAINT UK_email UNIQUE (email_id)
);
```

### Sample Data
```sql
INSERT INTO employee (first_name, last_name, email_id) VALUES
('Ayush', 'Chaudhary', 'ayush@company.com'),
('Priya', 'Sharma', 'priya@company.com'),
('Rahul', 'Kumar', 'rahul@company.com');
```

---

## 🎨 Architecture Overview

### System Architecture
```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    JPA/SQL    ┌─────────────────┐
│                 │ ◄─────────────► │                 │ ◄───────────► │                 │
│  React Frontend │                │ Spring Boot     │               │  MySQL Database │
│  (Port: 3000)   │                │ Backend         │               │  (Port: 3306)   │
│                 │                │ (Port: 8080)    │               │                 │
└─────────────────┘                └─────────────────┘               └─────────────────┘
        │                                    │                                 │
        ▼                                    ▼                                 ▼
   Vite Dev Server                    Embedded Tomcat                   Employee Table
   React Components                   REST Controllers                  Auto-generated
   Bootstrap UI                       Service Layer                     by Hibernate
   Axios HTTP Client                  JPA Repository
```

### Data Flow Architecture
```
Frontend (React)                 Backend (Spring Boot)              Database (MySQL)
─────────────────                ─────────────────────              ────────────────

User Interaction                                                     
      │                                                              
      ▼                                                              
React Component                                                      
      │                                                              
      ▼                                                              
Axios HTTP Request ────────────► @RestController                    
                                        │                            
                                        ▼                            
                                 @Service Layer                      
                                        │                            
                                        ▼                            
                                 @Repository ──────────────────────► Employee Table
                                        │                                    │
                                        ▼                                    │
                                 JPA Entity ◄────────────────────────────────┘
                                        │                            
                                        ▼                            
JSON Response ◄──────────────── HTTP Response                       
      │                                                              
      ▼                                                              
State Update                                                         
      │                                                              
      ▼                                                              
UI Re-render                                                         
```

### Layer-wise Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                       │
│  React Components │ Bootstrap UI │ React Router │ Axios     │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼ HTTP/REST API
┌─────────────────────────────────────────────────────────────┐
│                     CONTROLLER LAYER                        │
│  @RestController │ @RequestMapping │ @CrossOrigin           │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼ Service Calls
┌─────────────────────────────────────────────────────────────┐
│                      SERVICE LAYER                          │
│  @Service │ Business Logic │ Data Validation │ DTO Mapping  │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼ Repository Calls
┌─────────────────────────────────────────────────────────────┐
│                     REPOSITORY LAYER                        │
│  @Repository │ JPA Methods │ Custom Queries │ Pagination    │
└─────────────────────────────────────────────────────────────┘
                                │
                                ▼ JPA/Hibernate
┌─────────────────────────────────────────────────────────────┐
│                       DATA LAYER                            │
│  @Entity │ MySQL Database │ Employee Table │ Relationships  │
└─────────────────────────────────────────────────────────────┘
```

### MVC Pattern Implementation

**Model (Data Layer):**
- `Employee.java` - JPA Entity
- `EmployeeRepository.java` - Data Access Layer
- `EmployeeService.java` - Business Logic Layer

**View (Presentation Layer):**
- React Components (JSX)
- Bootstrap CSS Framework
- Responsive Web Interface

**Controller (API Layer):**
- `EmployeeController.java` - REST API Endpoints
- HTTP Request/Response handling
- JSON data serialization

---

## 📁 Project Structure

### Backend Structure (ems-backend)
```
ems-backend/
├── src/main/java/net/javaguides/ems/
│   ├── controller/
│   │   └── EmployeeController.java    # REST API endpoints
│   ├── service/
│   │   ├── EmployeeService.java       # Service interface
│   │   └── impl/
│   │       └── EmployeeServiceImpl.java # Business logic
│   ├── repository/
│   │   └── EmployeeRepository.java    # JPA data access
│   ├── entity/
│   │   └── Employee.java              # JPA entity/model
│   ├── dto/
│   │   └── EmployeeDto.java           # Data transfer object
│   ├── mapper/
│   │   └── EmployeeMapper.java        # Entity-DTO conversion
│   └── EmsBackendApplication.java     # Main Spring Boot class
├── src/main/resources/
│   └── application.properties         # Database configuration
├── src/test/java/                     # Unit tests
├── pom.xml                            # Maven dependencies
└── mvnw, mvnw.cmd                     # Maven wrapper scripts
```

### Frontend Structure (ems-frontend)
```
ems-frontend/
├── src/
│   ├── components/
│   │   ├── EmployeeComponent.jsx      # Add/Edit employee form
│   │   ├── ListEmployeeComponent.jsx  # Employee list table
│   │   ├── HeaderComponent.jsx        # Navigation header
│   │   └── FooterComponent.jsx        # Footer
│   ├── services/
│   │   └── EmployeeService.js         # Axios API calls
│   ├── App.jsx                        # Main app component
│   ├── App.css                        # Application styles
│   ├── index.css                      # Global styles
│   └── main.jsx                       # React entry point
├── public/
│   ├── index.html                     # HTML template
│   └── vite.svg                       # Favicon
├── package.json                       # NPM dependencies
├── vite.config.js                     # Vite build configuration
└── eslint.config.js                   # Code linting rules
```

---

## Author

**Ayush Chaudhary**
-  Email: ayushiaf.ac@gmail.com
- 🐙 GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
