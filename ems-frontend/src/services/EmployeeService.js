import axios from "axios";

/**
 * Employee Service - API Communication Layer
 * 
 * This module handles all HTTP requests to the backend API.
 * Uses Axios library for making REST API calls.
 * 
 * Benefits:
 * - Centralized API configuration
 * - Consistent error handling across the app
 * - Easy to modify API endpoints
 * - Clean separation between UI and API logic
 * 
 * All functions return Axios promises that can be handled with .then() and .catch()
 * or with async/await syntax in the components.
 * 
 * @author Ayush Chaudhary
 */

// Base URL for all employee API endpoints
const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

/**
 * Fetch all employees from the backend
 * @returns Promise with list of employees
 */
export const listEmployees = () => axios.get(REST_API_BASE_URL);

/**
 * Create a new employee
 * @param {Object} employee - Employee data (firstName, lastName, email)
 * @returns Promise with created employee data
 */
export const createEmployee = (employee) => axios.post(REST_API_BASE_URL, employee);

/**
 * Get a specific employee by ID
 * @param {number} employeeId - Unique employee identifier
 * @returns Promise with employee data
 */
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);

/**
 * Update an existing employee
 * @param {number} employeeId - Employee ID to update
 * @param {Object} employee - Updated employee data
 * @returns Promise with updated employee data
 */
export const updateEmployee = (employeeId, employee) => axios.put(REST_API_BASE_URL + '/' + employeeId, employee);

/**
 * Delete an employee
 * @param {number} employeeId - Employee ID to delete
 * @returns Promise with deletion confirmation
 */
export const deleteEmployee = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId);
