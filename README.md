# 🏢 Employee Management System (EMS)

A modern, full-stack web application for managing employee data with complete CRUD operations, built using Spring Boot and React. This project demonstrates proficiency in backend development, frontend development, database design, and REST API architecture.

## 🚀 Tech Stack

**Backend:**
- **Java 21** - Core programming language
- **Spring Boot 3.3.10** - Application framework with embedded Tomcat
- **Spring Data JPA** - Data persistence and ORM layer
- **Hibernate** - Object-Relational Mapping framework
- **MySQL 8.0** - Relational database management system
- **Maven** - Build automation and dependency management

**Frontend:**
- **React 19.1.1** - JavaScript library for building user interfaces
- **Vite 7.1.3** - Modern build tool and development server
- **React Router DOM** - Client-side routing for single-page application
- **Axios** - HTTP client for API communication
- **Bootstrap 5.3.7** - CSS framework for responsive design
- **ESLint** - Code linting and formatting

## ✨ Key Features & Technical Highlights

- **Complete CRUD Operations**: Create, Read, Update, Delete employee records
- **RESTful API Design**: Follows REST principles with proper HTTP methods and status codes
- **Responsive UI**: Mobile-first design using Bootstrap framework
- **Form Validation**: Client-side and server-side data validation
- **Database Integration**: MySQL with JPA/Hibernate ORM mapping
- **Real-time Updates**: Instant UI updates after API operations
- **Error Handling**: Comprehensive error handling on both frontend and backend
- **Clean Architecture**: Separation of concerns with layered architecture
- **Cross-Origin Support**: CORS configuration for frontend-backend communication

## 🏗️ System Architecture

### High-Level Architecture
```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    JPA/SQL    ┌─────────────────┐
│                 │ ◄─────────────► │                 │ ◄───────────► │                 │
│  React Frontend │                │ Spring Boot     │               │  MySQL Database │
│  (Port: 3000)   │                │ Backend         │               │  (Port: 3306)   │
│                 │                │ (Port: 8080)    │               │                 │
└─────────────────┘                └─────────────────┘               └─────────────────┘
```

### MVC Pattern Implementation

**Model (Data Layer):**
- `Employee.java` - JPA Entity with database mappings
- `EmployeeRepository.java` - Data Access Layer extending JpaRepository
- `EmployeeService.java` - Business Logic Layer with service implementations

**View (Presentation Layer):**
- React Components with JSX
- Bootstrap CSS Framework for styling
- Responsive Web Interface with modern UI/UX

**Controller (API Layer):**
- `EmployeeController.java` - REST API Endpoints
- HTTP Request/Response handling
- JSON data serialization/deserialization

## 📋 Prerequisites

- **Java Development Kit (JDK) 21** or higher
- **MySQL Server 8.0** or higher  
- **Node.js 18.0** or higher
- **npm 9.0** or higher
- **Git** (for version control)

## 🔧 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/AyushChaudhary2003/Crud_Application.git
cd Crud_Application
```

### 2. Database Configuration
```sql
-- Create database
CREATE DATABASE ems;
```

Update `ems-backend/src/main/resources/application.properties`:
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

### 3. Backend Setup
```bash
cd ems-backend
./mvnw clean compile
./mvnw spring-boot:run
```

### 4. Frontend Setup
```bash
cd ems-frontend
npm install
npm run dev
```

### 5. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/employees

## 📡 REST API Documentation

### Base URL: `http://localhost:8080/api`

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/employees` | Retrieve all employees | None | Array of employees |
| `GET` | `/employees/{id}` | Retrieve employee by ID | None | Employee object |
| `POST` | `/employees` | Create new employee | Employee JSON | Created employee |
| `PUT` | `/employees/{id}` | Update existing employee | Employee JSON | Updated employee |
| `DELETE` | `/employees/{id}` | Delete employee | None | 200 OK |

### Employee Data Model
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john.doe@example.com"
}
```

### Sample API Requests

**Create Employee:**
```bash
POST /api/employees
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

**Update Employee:**
```bash
PUT /api/employees/1
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com"
}
```

## 🗄️ Database Design

### Employee Table Schema
```sql
CREATE TABLE employee (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email_id VARCHAR(255) NOT NULL UNIQUE
);
```

### JPA Entity Mapping
```java
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}
```

## 📁 Project Structure

### Backend Architecture (ems-backend)
```
src/main/java/net/javaguides/ems/
├── controller/
│   └── EmployeeController.java       # REST API endpoints
├── service/
│   ├── EmployeeService.java          # Service interface
│   └── impl/
│       └── EmployeeServiceImpl.java  # Business logic implementation
├── repository/
│   └── EmployeeRepository.java       # JPA data access layer
├── entity/
│   └── Employee.java                 # JPA entity model
├── dto/
│   └── EmployeeDto.java              # Data transfer object
├── mapper/
│   └── EmployeeMapper.java           # Entity-DTO conversion
└── EmsBackendApplication.java        # Spring Boot main class
```

### Frontend Architecture (ems-frontend)
```
src/
├── components/
│   ├── EmployeeComponent.jsx         # Add/Edit employee form
│   ├── ListEmployeeComponent.jsx     # Employee list and table
│   ├── HeaderComponent.jsx           # Navigation header
│   └── FooterComponent.jsx           # Application footer
├── services/
│   └── EmployeeService.js            # Axios API service calls
├── App.jsx                           # Main application component
├── App.css                           # Application-specific styles
├── index.css                         # Global styles
└── main.jsx                          # React application entry point
```

## 🎯 Technical Implementation Details

### Backend Implementation
- **Spring Boot Auto-Configuration**: Leverages Spring Boot's auto-configuration for rapid development
- **JPA Repository Pattern**: Uses Spring Data JPA for database operations with minimal boilerplate
- **RESTful Design**: Implements proper REST conventions with appropriate HTTP status codes
- **CORS Configuration**: Configured for cross-origin requests from React frontend
- **Exception Handling**: Comprehensive error handling with proper HTTP status codes

### Frontend Implementation
- **React Hooks**: Uses useState and useEffect for state management and lifecycle methods
- **Component-Based Architecture**: Modular, reusable React components
- **React Router**: Client-side routing for single-page application navigation
- **Axios Integration**: Promise-based HTTP client for API communication
- **Bootstrap Integration**: Responsive design with Bootstrap components and utilities

### Key Technical Decisions
1. **Separation of Concerns**: Clear separation between presentation, business, and data layers
2. **RESTful API Design**: Following REST principles for scalable and maintainable API
3. **Database Normalization**: Proper database design with constraints and relationships
4. **Error Handling**: Both client-side and server-side validation and error management
5. **Modern JavaScript**: ES6+ features and React best practices

## 🔧 Development & Testing

### Backend Testing
```bash
# Run unit tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=EmployeeServiceTest

# Generate test coverage report
./mvnw jacoco:report
```

### Frontend Development
```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Code linting
npm run lint

# Preview production build
npm run preview
```

## 🚀 Deployment Considerations

### Production Readiness Features
- **Environment Configuration**: Separate configurations for development and production
- **Build Optimization**: Vite build optimization for frontend, Maven packaging for backend
- **Database Migrations**: Hibernate DDL auto-update for schema management
- **Error Logging**: Comprehensive logging for debugging and monitoring
- **Security**: Basic security configurations and validation

### Deployment Options
- **Traditional Deployment**: JAR file deployment on application servers
- **Containerization**: Docker containers for both frontend and backend
- **Cloud Deployment**: Compatible with AWS, Azure, Google Cloud platforms
- **Database**: MySQL on cloud or on-premises

## 💡 Future Enhancements

- **Authentication & Authorization**: JWT-based user authentication
- **Pagination**: Server-side pagination for large datasets
- **Search & Filtering**: Advanced search and filtering capabilities
- **File Upload**: Employee profile picture upload functionality
- **API Documentation**: Swagger/OpenAPI documentation
- **Unit Testing**: Comprehensive test coverage for both frontend and backend
- **Containerization**: Docker containers for easy deployment

## Author

**Ayush Chaudhary**
- 📧 Email: ayushiaf.ac@gmail.com
- 🐙 GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
- 🔗 LinkedIn: [Connect with Ayush](https://www.linkedin.com/in/ayush-chaudhary-652598259/)

---

*This project demonstrates full-stack development capabilities including backend API development, frontend user interface design, database integration, and modern web development practices.*

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/employees` | Get all employees |
| `GET` | `/api/employees/{id}` | Get employee by ID |
| `POST` | `/api/employees` | Create new employee |
| `PUT` | `/api/employees/{id}` | Update employee |
| `DELETE` | `/api/employees/{id}` | Delete employee |

### Employee JSON Structure
```json
{
  "id": 1,
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john.doe@example.com"
}
```

## 📁 Project Structure

```
ems-backend/
├── src/main/java/net/javaguides/ems/
│   ├── controller/EmployeeController.java
│   ├── service/EmployeeService.java
│   ├── repository/EmployeeRepository.java
│   ├── entity/Employee.java
│   └── EmsBackendApplication.java
└── src/main/resources/application.properties

ems-frontend/
├── src/
│   ├── components/
│   ├── services/EmployeeService.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Author

**Ayush Chaudhary**
- GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
