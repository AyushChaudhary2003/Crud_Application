# Employee Management System - Node.js Backend for Vercel

This is a Node.js backend API that replaces the Spring Boot backend and works perfectly with Vercel.

## Features

- ✅ Full CRUD operations for employees
- ✅ MySQL database integration (FreeSQLDatabase)
- ✅ CORS enabled for frontend access
- ✅ Vercel serverless deployment ready
- ✅ Same API endpoints as Spring Boot version

## API Endpoints

- `GET /api/employees` - Get all employees
- `GET /api/employees/:id` - Get employee by ID
- `POST /api/employees` - Create new employee
- `PUT /api/employees/:id` - Update employee
- `DELETE /api/employees/:id` - Delete employee

## Deployment to Vercel

1. Push this code to your GitHub repository
2. Import the project in Vercel
3. Select this folder (`ems-backend-nodejs`) as the root directory
4. Deploy - no environment variables needed (database config is hardcoded)

## Local Development

```bash
npm install
npm start
```

The API will be available at `http://localhost:3000`
