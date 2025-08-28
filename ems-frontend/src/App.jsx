import './App.css'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

/**
 * Main App Component - Application Root
 * 
 * This is the main component that sets up routing for the entire application.
 * Uses React Router for client-side navigation between different pages.
 * 
 * Features:
 * - Single Page Application (SPA) with multiple views
 * - Client-side routing (no page refreshes)
 * - Consistent header and footer across all pages
 * - Clean URL structure for different operations
 * 
 * Routes:
 * - / and /employees - Show list of all employees
 * - /add-employee - Form to add new employee
 * - /edit-employee/:id - Form to edit existing employee
 * 
 * Technologies:
 * - React 19.1.1 for UI components
 * - React Router DOM for navigation
 * - Bootstrap for responsive styling
 * 
 * @author Ayush Chaudhary
 */
function App() {
  return (
    <BrowserRouter>
      {/* Header appears on all pages */}
      <HeaderComponent />
      
      {/* Route definitions - which component to show for each URL */}
      <Routes>
        {/* Home page - shows employee list */}
        <Route path="/" element={<ListEmployeeComponent />} />
        
        {/* Employee list page */}
        <Route path="/employees" element={<ListEmployeeComponent />} />
        
        {/* Add new employee form */}
        <Route path='/add-employee' element={<EmployeeComponent/>} />

        {/* Edit existing employee form (with ID parameter) */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent />} />
      </Routes>
      
      {/* Footer appears on all pages */}
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
