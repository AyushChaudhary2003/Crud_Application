import axios from "axios";

// Hardcoded API URL for production deployment
const REST_API_BASE_URL = 'https://crud-project-qkf2douv8-ayushs-projects-31542b2b.vercel.app/api/employees';

console.log('Using API URL:', REST_API_BASE_URL);

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);
