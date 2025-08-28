package net.javaguides.ems.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;
import net.javaguides.ems.exception.ResourceNotFoundException;
import net.javaguides.ems.mapper.EmployeeMapper;
import net.javaguides.ems.repository.EmployeeRepository;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Employee Service Implementation - Business Logic Layer
 * 
 * This class contains the actual business logic for employee operations.
 * It sits between the REST controller and the database repository.
 * 
 * What this class does:
 * - Implements the EmployeeService interface
 * - Handles data conversion between DTOs and Entities
 * - Manages business rules and validation
 * - Coordinates database operations
 * 
 * Key Features:
 * - Uses Spring's dependency injection
 * - Automatic transaction management
 * - Error handling with custom exceptions
 * - Clean separation of concerns
 * 
 * @author Ayush Chaudhary
 */
@Service // Spring annotation: Makes this a service component
@AllArgsConstructor // Lombok: Creates constructor for dependency injection
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository; // Database access

    /**
     * Create new employee
     * Flow: DTO -> Entity -> Save to DB -> Entity -> DTO
     */
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        // Convert DTO to Entity for database storage
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        
        // Save to database (Spring handles transaction)
        Employee savedEmployee = employeeRepository.save(employee);
        
        // Convert back to DTO for API response
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    /**
     * Find employee by ID
     * Uses Optional to handle cases where employee might not exist
     */
    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    /**
     * Get all employees
     * Uses Java Streams to convert list of entities to list of DTOs
     */
    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        
        // Convert each Employee entity to EmployeeDto using streams
        return employees.stream()
                .map(EmployeeMapper::mapToEmployeeDto)
                .collect(Collectors.toList());
    }

    /**
     * Update existing employee
     * First checks if employee exists, then updates and saves
     */
    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
        // Check if employee exists first
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee not found with id: " + employeeId)
        );

        // Update the fields
        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        // Save updated employee
        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    /**
     * Delete employee
     * Validates employee exists before attempting deletion
     */
    @Override
    public void deleteEmployee(Long employeeId) {
        // Validate employee exists before deletion
        employeeRepository.findById(employeeId).orElseThrow(
                () -> new ResourceNotFoundException("Employee not found with id: " + employeeId)
        );

        // Delete the employee
        employeeRepository.deleteById(employeeId);
    }

}
