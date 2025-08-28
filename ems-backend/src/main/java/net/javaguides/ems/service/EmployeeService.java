package net.javaguides.ems.service;

import net.javaguides.ems.dto.EmployeeDto;
import java.util.List;

/**
 * Employee Service Interface - Business Logic Contract
 * 
 * This interface defines what operations our employee service can perform.
 * Using interfaces makes the code easier to test and maintain.
 * 
 * Benefits of using interfaces:
 * - Easy to create mock implementations for testing
 * - Can have multiple implementations (database, cache, etc.)
 * - Clear contract of what the service does
 * - Follows dependency inversion principle
 * 
 * @author Ayush Chaudhary
 */
public interface EmployeeService {
    
    /**
     * Create a new employee
     * @param employeeDto Employee information to save
     * @return Saved employee with generated ID
     */
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    /**
     * Find employee by their ID
     * @param employeeId Unique employee identifier
     * @return Employee information
     * @throws ResourceNotFoundException if employee doesn't exist
     */
    EmployeeDto getEmployeeById(Long employeeId);

    /**
     * Get all employees in the system
     * @return List of all employees
     */
    List<EmployeeDto> getAllEmployees();

    /**
     * Update existing employee information
     * @param employeeId ID of employee to update
     * @param updatedEmployee New employee information
     * @return Updated employee data
     * @throws ResourceNotFoundException if employee doesn't exist
     */
    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    /**
     * Remove employee from system
     * @param employeeId ID of employee to delete
     * @throws ResourceNotFoundException if employee doesn't exist
     */
    void deleteEmployee(Long employeeId);

}
