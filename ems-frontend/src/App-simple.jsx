import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('App component mounted');
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      console.log('Fetching employees...');
      const response = await fetch('https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app/api/employees');
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Employees data:', data);
      setEmployees(data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching employees:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <header style={{backgroundColor: '#1976d2', color: 'white', padding: '1rem', textAlign: 'center', marginBottom: '2rem'}}>
        <h1>Employee Management System</h1>
      </header>
      
      <div className="container">
        <h2 className="text-center mb-4">List of Employees</h2>
        
        {loading && (
          <div className="alert alert-info" role="alert">
            <div className="spinner-border spinner-border-sm me-2" role="status"></div>
            Loading employees...
          </div>
        )}
        
        {error && (
          <div className="alert alert-danger" role="alert">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {!loading && !error && (
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table className="table table-striped table-hover">
                    <thead className="table-dark">
                      <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.length > 0 ? (
                        employees.map(employee => (
                          <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center text-muted">
                            No employees found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <footer style={{backgroundColor: '#343a40', color: 'white', textAlign: 'center', padding: '1rem', marginTop: '3rem'}}>
        <p>&copy; 2025 Ayush Chaudhary. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
