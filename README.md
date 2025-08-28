# Employee Management System

A full-stack web application for managing employee data with CRUD operations.

## Tech Stack

**Frontend:**
- React 19.1.1
- Bootstrap 5.3.7
- Axios for API calls
- Vite for build tooling

**Backend:**
- Spring Boot 3.3.10
- Java 21
- MySQL Database
- JPA/Hibernate

## Features

- ✅ View all employees
- ✅ Add new employees
- ✅ Edit employee details
- ✅ Delete employees
- ✅ Responsive design
- ✅ REST API

## API Endpoints

- `GET /api/employees` - Get all employees
- `GET /api/employees/{id}` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/{id}` - Update employee
- `DELETE /api/employees/{id}` - Delete employee

## Deployment

Configured for deployment on Vercel with cloud database integration.

### Environment Variables Required:
```
DATABASE_URL=your_mysql_connection_string
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
SPRING_PROFILES_ACTIVE=vercel
```

## Local Development

1. **Backend**: `./mvnw spring-boot:run` (runs on port 8080)
2. **Frontend**: `npm run dev` (runs on port 3000)

## Author

**Ayush Chaudhary** - [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
