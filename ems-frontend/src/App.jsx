/**
 * Main App Component - Application Root & Routing Configuration
 * 
 * This is the central component that orchestrates the entire Employee Management System.
 * It sets up the application structure, routing, and layout.
 * 
 * Architecture Overview:
 * - Single Page Application (SPA) with client-side routing
 * - Consistent header/footer layout across all pages
 * - Dynamic content area based on current route
 * - Clean URL structure for SEO and user experience
 * 
 * Key Features:
 * - React Router DOM for navigation without page refreshes
 * - Responsive layout that works on all devices
 * - Logical route structure matching user workflows
 * - Professional application shell with modern design
 * 
 * Application Routes:
 * - / (root) → Employee List (default landing page)
 * - /employees → Employee List (explicit employee page)
 * - /add-employee → Add Employee Form
 * - /edit-employee/:id → Edit Employee Form (with dynamic ID)
 * 
 * Technical Stack:
 * - React 19.1.1 (latest) for component architecture
 * - React Router DOM 7.8.2 for client-side routing
 * - Bootstrap 5.3.7 for responsive UI framework
 * - CSS Grid/Flexbox for layout management
 * 
 * @author Ayush Chaudhary
 */
import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  return (
    <BrowserRouter>
      {/* 
        HEADER SECTION
        - Persistent across all routes
        - Contains branding, navigation, and user controls
        - Includes contact information and theme toggle
      */}
      <HeaderComponent />
      
      {/* 
        MAIN CONTENT AREA
        - Dynamic content based on current route
        - Proper semantic HTML structure
        - Responsive container for all page content
      */}
      <main className="main-content">
        {/* 
          ROUTING CONFIGURATION
          - Maps URLs to React components
          - Enables SPA navigation without page reloads
          - Supports both exact matches and parameterized routes
        */}
        <Routes>
          {/* HOME ROUTE - Default landing page */}
          <Route path="/" element={<ListEmployeeComponent />} />
          
          {/* EMPLOYEE LIST - Explicit employee management page */}
          <Route path="/employees" element={<ListEmployeeComponent />} />
          
          {/* ADD EMPLOYEE - Form for creating new employees */}
          <Route path='/add-employee' element={<EmployeeComponent/>} />

          {/* EDIT EMPLOYEE - Form for updating existing employees */}
          {/* :id parameter allows dynamic employee ID in URL */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
        </Routes>
      </main>
      
      {/* 
        FOOTER SECTION
        - Persistent across all routes
        - Contains copyright and additional info
        - Professional application closure
      */}
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
