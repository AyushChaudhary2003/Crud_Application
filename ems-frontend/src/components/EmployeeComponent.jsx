/**
 * EmployeeComponent - Add/Edit Employee Form
 * 
 * This component handles both creating new employees and editing existing ones.
 * It's a dual-purpose form that adapts based on whether an ID is present in the URL.
 * 
 * Key Features:
 * - Dual functionality: Add new or edit existing employee
 * - Comprehensive form validation with real-time feedback
 * - Professional UI with Bootstrap styling and custom gradients
 * - Visual feedback (valid/invalid states) for better UX
 * - Responsive design for all screen sizes
 * - Route-based operation detection (add vs edit)
 * 
 * State Management:
 * - firstName, lastName, email: Form field values
 * - errors: Validation error messages for each field
 * - id: URL parameter determining add vs edit mode
 * 
 * Validation Rules:
 * - All fields are required
 * - Names must be at least 2 characters
 * - Email must match valid email pattern
 * - Real-time validation with visual feedback
 * 
 * @author Ayush Chaudhary
 */
import React, { useEffect, useState } from 'react';
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  // Form state management - controlled components
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Extract ID from URL parameters to determine add vs edit mode
  const { id } = useParams();

  // Validation error state for each form field
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  // React Router hook for programmatic navigation
  const navigator = useNavigate();

  /**
   * Component initialization effect
   * 
   * Purpose: If editing (ID exists), fetch and populate employee data
   * Dependencies: [id] - runs when ID changes or component mounts
   * 
   * Edit Mode Flow:
   * 1. Check if ID exists in URL
   * 2. Fetch employee data from API
   * 3. Populate form fields with existing data
   * 4. Handle errors gracefully
   */
  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          // Populate form fields with existing employee data
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
        })
        .catch((error) => {
          console.error('Error fetching employee data:', error);
          // In production, you might want to show an error message to the user
        });
    }
  }, [id]); // Dependency array ensures this runs when ID changes 

  /**
   * Form submission handler - handles both create and update operations
   * 
   * Process Flow:
   * 1. Prevent default form submission behavior
   * 2. Validate all form fields
   * 3. If valid, determine operation type (create vs update)
   * 4. Call appropriate API endpoint
   * 5. Navigate back to employee list on success
   * 6. Handle errors gracefully
   * 
   * Technical Details:
   * - Uses the same form for both operations (DRY principle)
   * - Validation prevents API calls with invalid data
   * - Provides user feedback through navigation
   */
  function saveOrUpdateEmployee(e) {
    e.preventDefault(); // Prevent default form submission

    // Only proceed if form validation passes
    if (validateForm()) {
      // Create employee object from form state
      const employee = { firstName, lastName, email };
      console.log('Submitting employee data:', employee);

      if (id) {
        // UPDATE MODE: Employee ID exists, so we're editing
        updateEmployee(id, employee)
          .then((response) => {
            console.log('Employee updated successfully:', response.data);
            navigator('/employees'); // Return to employee list
          })
          .catch((error) => {
            console.error('Error updating employee:', error);
            // In production, show user-friendly error message
          });
      } else {
        // CREATE MODE: No ID, so we're adding new employee
        createEmployee(employee)
          .then((response) => {
            console.log('Employee created successfully:', response.data);
            navigator('/employees'); // Return to employee list
          })
          .catch((error) => {
            console.error('Error creating employee:', error);
            // In production, show user-friendly error message
          });
      }
    }
    // If validation fails, errors are displayed automatically
  }

  /**
   * Comprehensive Form Validation Function
   * 
   * This function validates all form fields and provides detailed error messages.
   * It uses a copy of the errors state to batch all updates together.
   * 
   * Validation Rules:
   * 1. First Name: Required, minimum 2 characters
   * 2. Last Name: Required, minimum 2 characters  
   * 3. Email: Required, must match valid email pattern
   * 
   * Technical Implementation:
   * - Uses regular expressions for email validation
   * - Trims whitespace to handle user input variations
   * - Provides specific error messages for better UX
   * - Returns boolean to indicate overall form validity
   * 
   * Error Handling Strategy:
   * - Clear previous errors before validation
   * - Set specific error messages for each field
   * - Update UI immediately with validation results
   */
  function validateForm() {
    let valid = true; // Track overall form validity
    const errorsCopy = { ...errors }; // Create copy to batch updates

    // FIRST NAME VALIDATION
    if (firstName.trim()) {
      // Name is provided, check minimum length
      if (firstName.trim().length < 2) {
        errorsCopy.firstName = 'First name must be at least 2 characters';
        valid = false;
      } else {
        errorsCopy.firstName = ''; // Clear any previous error
      }
    } else {
      // Name is required
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    // LAST NAME VALIDATION  
    if (lastName.trim()) {
      // Name is provided, check minimum length
      if (lastName.trim().length < 2) {
        errorsCopy.lastName = 'Last name must be at least 2 characters';
        valid = false;
      } else {
        errorsCopy.lastName = ''; // Clear any previous error
      }
    } else {
      // Name is required
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    // EMAIL VALIDATION
    if (email.trim()) {
      // Email is provided, validate format using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        errorsCopy.email = 'Please enter a valid email address';
        valid = false;
      } else {
        errorsCopy.email = ''; // Clear any previous error
      }
    } else {
      // Email is required
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    // Update the errors state with all validation results
    setErrors(errorsCopy);
    return valid; // Return overall validity
  }

  /**
   * Dynamic Page Title Function
   * 
   * Returns different JSX based on the operation mode:
   * - Edit Mode: Shows "Update Employee" with edit icon
   * - Add Mode: Shows "Add New Employee" with plus icon
   * 
   * UI Design:
   * - Uses Font Awesome icons for visual context
   * - Different colors for different operations (blue for edit, green for add)
   * - Consistent styling with Bootstrap classes
   */
  function pageTitle() {
    if (id) {
      // EDIT MODE: Employee ID exists
      return (
        <h2 className="text-center text-primary mb-4">
          <i className="fas fa-user-edit me-2"></i>
          Update Employee
        </h2>
      );
    } else {
      // ADD MODE: No employee ID
      return (
        <h2 className="text-center text-success mb-4">
          <i className="fas fa-user-plus me-2"></i>
          Add New Employee
        </h2>
      );
    }
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-gradient text-white text-center py-4" 
                 style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
              {pageTitle()}
            </div>
            <div className="card-body p-5">
              <form onSubmit={saveOrUpdateEmployee}>
                {/* First Name Field */}
                <div className="form-group mb-4">
                  <label className="form-label fw-bold">
                    <i className="fas fa-user me-2 text-primary"></i>
                    First Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    value={firstName}
                    className={`form-control form-control-lg ${errors.firstName ? 'is-invalid' : firstName ? 'is-valid' : ''}`}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{borderRadius: '25px'}}
                  />
                  {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                  {firstName && !errors.firstName && <div className="valid-feedback">Looks good!</div>}
                </div>

                {/* Last Name Field */}
                <div className="form-group mb-4">
                  <label className="form-label fw-bold">
                    <i className="fas fa-user me-2 text-primary"></i>
                    Last Name <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    value={lastName}
                    className={`form-control form-control-lg ${errors.lastName ? 'is-invalid' : lastName ? 'is-valid' : ''}`}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{borderRadius: '25px'}}
                  />
                  {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                  {lastName && !errors.lastName && <div className="valid-feedback">Looks good!</div>}
                </div>

                {/* Email Field */}
                <div className="form-group mb-4">
                  <label className="form-label fw-bold">
                    <i className="fas fa-envelope me-2 text-primary"></i>
                    Email Address <span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    value={email}
                    className={`form-control form-control-lg ${errors.email ? 'is-invalid' : email && !errors.email ? 'is-valid' : ''}`}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{borderRadius: '25px'}}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  {email && !errors.email && <div className="valid-feedback">Valid email address!</div>}
                </div>

                {/* Action Buttons */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-5">
                  <button 
                    type="button"
                    className="btn btn-outline-secondary btn-lg me-md-2"
                    onClick={() => navigator('/employees')}
                    style={{borderRadius: '25px'}}
                  >
                    <i className="fas fa-times me-2"></i>
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="btn btn-lg"
                    style={{
                      borderRadius: '25px',
                      background: id ? 'linear-gradient(135deg, #007bff 0%, #6610f2 100%)' : 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                      border: 'none',
                      color: 'white'
                    }}
                  >
                    <i className={`fas ${id ? 'fa-save' : 'fa-plus'} me-2`}></i>
                    {id ? 'Update Employee' : 'Add Employee'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
