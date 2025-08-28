import React, { useState, useEffect } from 'react'
import { deleteEmployee,listEmployees } from '../services/EmployeeService'
import{useNavigate} from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigator = useNavigate();

    useEffect(() => {
        console.log('ListEmployeeComponent mounted');
        console.log('About to call getAllEmployees');
        getAllemployees();

    }, []);

    function getAllemployees(){
        console.log('getAllEmployees called');
        setLoading(true);
        setError(null);
        
        listEmployees().then((response) => {
            console.log('API Response:', response.data);
            setEmployees(response.data);
            setLoading(false);
        }).catch(error => {
            console.error('API Error:', error);
            setError(error.message);
            setLoading(false);
        });
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }
    
    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) =>{
            getAllemployees(); 
        }).catch(error=> {
            console.error(error);
        })
    }



    return (
        <div className="container">
            <h1 className="text-center mb-4">List of Employees</h1>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee</button>
            
            {loading && <div className="alert alert-info">Loading employees...</div>}
            {error && <div className="alert alert-danger">Error: {error}</div>}
            
            <div className="row justify-content-center">
                <div className="col-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                        <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                            style={{marginLeft: '10px'}}
                                            >Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListEmployeeComponent;
