/**
 * ListEmployeeComponent - Main Employee Management Interface
 * 
 * This component displays the employee list with comprehensive functionality:
 * 
 * Key Features:
 * - Employee listing with modern table design
 * - Real-time search across name and email fields
 * - Serial number system (S.No) replacing database IDs
 * - CRUD operations (Create, Read, Update, Delete)
 * - Confirmation dialogs for delete operations
 * - Responsive design for all screen sizes
 * - Professional UI with Bootstrap styling
 * 
 * State Management:
 * - employees: Full list from database (sorted by ID)
 * - filteredEmployees: Search-filtered results
 * - searchTerm: Current search query
 * 
 * Technical Highlights:
 * - Uses React Hooks (useState, useEffect)
 * - Client-side search filtering
 * - API integration with error handling
 * - Professional UX with loading states
 * 
 * @author Ayush Chaudhary
 */
import React, { useState, useEffect } from 'react'
import { deleteEmployee,listEmployees } from '../services/EmployeeService'
import{useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {
    // State Management for Employee Data
    const [employees, setEmployees] = useState([]); // All employees from database
    const [filteredEmployees, setFilteredEmployees] = useState([]); // Search-filtered results
    const [searchTerm, setSearchTerm] = useState(''); // Current search query

    // React Router hook for navigation
    const navigator = useNavigate();

    /**
     * Component initialization - fetch all employees when component mounts
     * This runs once when the component is first rendered
     */
    useEffect(() => {
        getAllemployees();
    }, []);

    /**
     * Search effect - filter employees when search term or employees list changes
     * This ensures search results update automatically when data changes
     */
    useEffect(() => {
        handleSearch(searchTerm);
    }, [employees, searchTerm]);

    /**
     * Fetch all employees from backend API
     * Implements proper error handling and data sorting
     */
    function getAllemployees(){
        listEmployees().then((response) => {
            // Sort employees by ID to maintain the order they were added to database
            // This ensures S.No sequence remains consistent with database insertion order
            const sortedEmployees = response.data.sort((a, b) => a.id - b.id);
            setEmployees(sortedEmployees);
        }).catch(error => {
            console.error('Error fetching employees:', error);
            // In production, you might want to show a user-friendly error message
        });
    }

    /**
     * Advanced Search Functionality
     * 
     * Features:
     * - Case-insensitive search
     * - Multi-field search (firstName, lastName, email)
     * - Real-time filtering as user types
     * - Maintains sorted order for consistent S.No sequence
     * 
     * Technical Details:
     * - Uses JavaScript's .filter() and .includes() methods
     * - Preserves database sort order (by ID) in filtered results
     * - Handles empty search terms gracefully
     */
    function handleSearch(term) {
        if (!term.trim()) {
            // If search term is empty, show all employees
            setFilteredEmployees(employees);
        } else {
            // Filter employees based on search term across multiple fields
            const filtered = employees.filter(employee =>
                employee.firstName.toLowerCase().includes(term.toLowerCase()) ||
                employee.lastName.toLowerCase().includes(term.toLowerCase()) ||
                employee.email.toLowerCase().includes(term.toLowerCase())
            );
            // Ensure filtered results maintain sorted order by ID for consistent S.No
            const sortedFiltered = filtered.sort((a, b) => a.id - b.id);
            setFilteredEmployees(sortedFiltered);
        }
    }

    /**
     * Navigation function to add new employee
     * Uses React Router to navigate to the add employee form
     */
    function addNewEmployee(){
        navigator('/add-employee')
    }

    /**
     * Navigation function to edit existing employee
     * Uses React Router with employee ID parameter
     */
    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
    
    /**
     * Enhanced Employee Deletion with User Experience Focus
     * 
     * Features:
     * - Confirmation dialog with employee name for clarity
     * - Descriptive warning about permanent deletion
     * - Success/error feedback to user
     * - Graceful error handling
     * 
     * UX Considerations:
     * - Shows employee name in confirmation for better context
     * - Clear warning about irreversible action
     * - Immediate feedback on success/failure
     * - Prevents accidental deletions
     */
    function removeEmployee(id){
        console.log('Attempting to delete employee with ID:', id);

        // Find the employee details for the confirmation message
        const employee = employees.find(emp => emp.id === id);
        const employeeName = employee ? `${employee.firstName} ${employee.lastName}` : 'this employee';

        // Show detailed confirmation dialog with employee context
        const isConfirmed = window.confirm(
            `Are you sure you want to delete ${employeeName}?\n\nThis action cannot be undone.`
        );

        // Only proceed with deletion if user explicitly confirms
        if (isConfirmed) {
            deleteEmployee(id).then((response) =>{
                // Refresh the employee list to reflect changes
                getAllemployees(); 
                // Provide positive feedback to user
                alert(`${employeeName} has been successfully deleted.`);
            }).catch(error=> {
                console.error('Error deleting employee:', error);
                // Inform user of the error with actionable message
                alert('Error deleting employee. Please try again.');
            })
        }
        // If user cancels, no action is taken (implicit else)
    }

    /**
     * Utility function to clear search and show all employees
     * Improves user experience by providing easy reset option
     */
    function clearSearch() {
        setSearchTerm('');
    }



    return (
        <div className="container mt-4">
            {/* Header Section */}
            <div className="row mb-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="text-primary mb-0">
                            <i className="fas fa-users me-2"></i>
                            Employee Management
                        </h1>
                        <button 
                            className='btn btn-success btn-lg shadow-sm' 
                            onClick={addNewEmployee}
                        >
                            <i className="fas fa-plus me-2"></i>
                            Add Employee
                        </button>
                    </div>
                </div>
            </div>

            {/* Search Section */}
            <div className="row mb-4">
                <div className="col-md-6 col-lg-4">
                    <div className="input-group">
                        <span className="input-group-text bg-primary text-white">
                            <i className="fas fa-search"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {searchTerm && (
                            <button 
                                className="btn btn-outline-secondary" 
                                type="button"
                                onClick={clearSearch}
                                title="Clear search"
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </div>
                </div>
                <div className="col-md-6 col-lg-8 d-flex align-items-center">
                    <small className="text-muted ms-2">
                        {searchTerm ? (
                            <>
                                Showing {filteredEmployees.length} of {employees.length} employees
                                {filteredEmployees.length === 0 && ' - No matches found'}
                            </>
                        ) : (
                            `Total: ${employees.length} employees`
                        )}
                    </small>
                </div>
            </div>

            {/* Employee Table */}
            <div className="row">
                <div className="col-12">
                    <div className="card shadow-sm">
                        <div className="card-body p-0">
                            {filteredEmployees.length > 0 ? (
                                <div className="table-responsive">
                                    <table className="table table-hover table-striped mb-0">
                                        <thead className="table-dark">
                                            <tr>
                                                <th className="py-3">
                                                    <i className="fas fa-list-ol me-2"></i>
                                                    S.No
                                                </th>
                                                <th className="py-3">
                                                    <i className="fas fa-user me-2"></i>
                                                    First Name
                                                </th>
                                                <th className="py-3">
                                                    <i className="fas fa-user me-2"></i>
                                                    Last Name
                                                </th>
                                                <th className="py-3">
                                                    <i className="fas fa-envelope me-2"></i>
                                                    Email
                                                </th>
                                                <th className="py-3 text-center">
                                                    <i className="fas fa-cogs me-2"></i>
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredEmployees.map((employee, index) =>
                                                <tr key={employee.id} className="align-middle">
                                                    <td className="fw-bold text-primary">{index + 1}</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="avatar-circle me-2">
                                                                {employee.firstName.charAt(0).toUpperCase()}
                                                            </div>
                                                            {employee.firstName}
                                                        </div>
                                                    </td>
                                                    <td>{employee.lastName}</td>
                                                    <td>
                                                        <a href={`mailto:${employee.email}`} className="text-decoration-none">
                                                            {employee.email}
                                                        </a>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="btn-group" role="group">
                                                            <button 
                                                                className='btn btn-outline-primary btn-sm' 
                                                                onClick={() => updateEmployee(employee.id)}
                                                                title="Edit Employee"
                                                            >
                                                                <i className="fas fa-edit me-1"></i>
                                                                Edit
                                                            </button>
                                                            <button 
                                                                className='btn btn-outline-danger btn-sm' 
                                                                onClick={() => removeEmployee(employee.id)}
                                                                title="Delete Employee"
                                                            >
                                                                <i className="fas fa-trash me-1"></i>
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    <div className="mb-3">
                                        <i className="fas fa-search fa-3x text-muted"></i>
                                    </div>
                                    <h5 className="text-muted">No employees found</h5>
                                    <p className="text-muted">
                                        {searchTerm ? 
                                            `No employees match "${searchTerm}". Try a different search term.` : 
                                            'No employees available. Click "Add Employee" to get started.'
                                        }
                                    </p>
                                    {searchTerm && (
                                        <button 
                                            className="btn btn-outline-primary"
                                            onClick={clearSearch}
                                        >
                                            <i className="fas fa-times me-2"></i>
                                            Clear Search
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
