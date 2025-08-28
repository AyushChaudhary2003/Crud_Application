package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

/**
 * Employee Mapper - Data Conversion Utility
 * 
 * This class converts data between Entity (database) and DTO (API) objects.
 * Keeps the conversion logic in one place for easy maintenance.
 * 
 * Why use mappers?
 * - Separate database structure from API structure
 * - Easy to maintain and modify
 * - Type-safe conversions
 * - Can add validation or transformation logic here
 * 
 * @author Ayush Chaudhary
 */
public class EmployeeMapper {

    /**
     * Convert Employee Entity to DTO
     * Used when sending data to frontend via API
     */
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    /**
     * Convert Employee DTO to Entity
     * Used when saving data from API to database
     */
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
