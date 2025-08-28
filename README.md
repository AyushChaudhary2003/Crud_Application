# 🏢 Employee Management System (EMS)

A modern, full-stack web application for managing employee data with complete CRUD operations, built using Spring Boot and React.

## 🚀 Tech Stack

**Backend:**
- Java 21 + Spring Boot 3.3.10
- Spring Data JPA + Hibernate
- MySQL 8.0 + Maven

**Frontend:**
- React 19.1.1 + Vite 7.1.3
- Bootstrap 5.3.7 + Axios

## ✨ Features

- **CRUD Operations**: Create, Read, Update, Delete employee records
- **REST API**: RESTful web services with proper HTTP methods
- **Responsive Design**: Mobile-first Bootstrap interface
- **Database Integration**: MySQL with JPA/Hibernate ORM

## 📋 Prerequisites

- **Java 21+**
- **MySQL 8.0+**  
- **Node.js 18+**
- **npm 9+**

## 🔧 Quick Setup

### 1. Clone Repository
```bash
git clone https://github.com/AyushChaudhary2003/Crud_Application.git
cd Crud_Application
```

### 2. Database Setup
```sql
CREATE DATABASE ems;
```

Update `ems-backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ems
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD
```

### 3. Run Application
```bash
# Backend (Terminal 1)
cd ems-backend
./mvnw spring-boot:run

# Frontend (Terminal 2) 
cd ems-frontend
npm install
npm run dev
```

### 4. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/employees

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
