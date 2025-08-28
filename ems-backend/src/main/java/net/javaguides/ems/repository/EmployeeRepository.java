package net.javaguides.ems.repository;

import net.javaguides.ems.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Employee Repository - Database Access Layer
 * 
 * This interface handles all database operations for Employee entity.
 * Spring Data JPA automatically provides implementation at runtime.
 * 
 * What you get for free:
 * - save() - Create or update employee
 * - findById() - Find employee by ID
 * - findAll() - Get all employees
 * - deleteById() - Delete employee by ID
 * - count() - Count total employees
 * - existsById() - Check if employee exists
 * 
 * Benefits:
 * - No need to write SQL queries for basic operations
 * - Automatic transaction management
 * - Type safety with generics (Employee, Long)
 * - Easy to test with mock implementations
 * 
 * @author Ayush Chaudhary
 */
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // No methods needed - Spring Data JPA provides all basic CRUD operations!
    
    /*
     * You can add custom methods like:
     * 
     * Optional<Employee> findByEmail(String email);
     * List<Employee> findByFirstNameContaining(String name);
     * List<Employee> findAllByOrderByLastNameAsc();
     */

}
