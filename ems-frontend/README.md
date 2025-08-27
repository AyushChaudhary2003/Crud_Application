# Employee Management System - Frontend

A modern, responsive web application for managing employee data with full CRUD (Create, Read, Update, Delete) operations. Built with React, Vite, and Bootstrap for a seamless user experience.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.7-indigo)
![Axios](https://img.shields.io/badge/Axios-1.11.0-green)

## 🚀 Features

- **Complete CRUD Operations**: Create, read, update, and delete employee records
- **Responsive Design**: Optimized for desktop and mobile devices using Bootstrap
- **Form Validation**: Client-side validation for all employee data inputs
- **React Router**: Seamless navigation between different views
- **Modern UI**: Clean and professional interface
- **API Integration**: Connects to backend REST API using Axios

## 🛠️ Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Bootstrap 5.3.7
- **HTTP Client**: Axios 1.11.0
- **Routing**: React Router DOM 7.8.2
- **Linting**: ESLint 9.33.0

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher)
- **Backend API** running on `http://localhost:8080`

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AyushChaudhary2003/Crud_Application.git
cd Crud_Application/ems-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will start running on `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
ems-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── EmployeeComponent.jsx     # Add/Edit employee form
│   │   ├── FooterComponent.jsx       # Footer component
│   │   ├── HeaderComponent.jsx       # Header component
│   │   └── ListEmployeeComponent.jsx # Employee list view
│   ├── services/
│   │   └── EmployeeService.js        # API service functions
│   ├── App.css                       # Application styles
│   ├── App.jsx                       # Main application component
│   ├── index.css                     # Global styles
│   └── main.jsx                      # Application entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔗 API Integration

The frontend connects to a REST API with the following endpoints:

- `GET /api/employees` - Fetch all employees
- `POST /api/employees` - Create new employee
- `GET /api/employees/{id}` - Fetch employee by ID
- `PUT /api/employees/{id}` - Update employee
- `DELETE /api/employees/{id}` - Delete employee

**Base URL**: `http://localhost:8080`

## 🎯 Key Components

### EmployeeComponent
- Handles both adding new employees and editing existing ones
- Includes form validation for all fields
- Dynamic page title based on operation (Add/Update)

### ListEmployeeComponent
- Displays all employees in a responsive table
- Provides actions for updating and deleting employees
- Includes "Add Employee" button for creating new records

### HeaderComponent
- Navigation bar with application branding
- Consistent header across all pages

### FooterComponent
- Fixed footer with copyright information
- Maintains consistent page layout

## 🎨 Styling

The application uses Bootstrap 5.3.7 for:
- Responsive grid system
- Form styling and validation feedback
- Button components
- Table styling
- Navigation components

Custom CSS is minimal and focused on specific layout adjustments.

## 🔧 Configuration

### Vite Configuration
The application is configured to run on port 3000 for development.

### ESLint Configuration
Code quality is maintained using ESLint with React-specific rules.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Known Issues

- Backend API must be running on port 8080 for the application to work properly
- Form validation is client-side only; server-side validation is recommended

## 🚀 Future Enhancements

- [ ] Add search and filter functionality
- [ ] Implement pagination for large datasets
- [ ] Add employee photo upload feature
- [ ] Include employee departments and roles
- [ ] Add data export functionality (CSV, PDF)
- [ ] Implement user authentication
- [ ] Add unit and integration tests

## 👨‍💻 Author

**Ayush Chaudhary**
- GitHub: [@AyushChaudhary2003](https://github.com/AyushChaudhary2003)
- Email: ayushiaf.ac@gmail.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the fast build tool
- Bootstrap team for the responsive framework
- Axios team for the HTTP client library

---

⭐ If you found this project helpful, please give it a star on GitHub!
