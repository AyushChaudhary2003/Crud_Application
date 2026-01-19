package net.javaguides.ems.controller;

import lombok.AllArgsConstructor;
import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.service.EmployeeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Employee REST Controller - API Layer
 * 
 * This controller handles HTTP requests from the frontend and provides REST APIs.
 * It follows RESTful design principles for clean API structure.
 * 
 * REST API Endpoints:
 * - POST /api/employees - Create new employee
 * - GET /api/employees/{id} - Get employee by ID
 * - GET /api/employees - Get all employees
 * - PUT /api/employees/{id} - Update employee
 * - DELETE /api/employees/{id} - Delete employee
 * 
 * Key Features:
 * - CORS enabled for frontend access
 * - Proper HTTP status codes
 * - JSON request/response handling
 * - Exception handling (via global handler)
 * 
 * @author Ayush Chaudhary
 */
@CrossOrigin(origins = {"http://localhost:3000", "https://crud-application-snowy.vercel.app", "https://interjugal-beverly-uncountenanced.ngrok-free.dev"}) // Allow frontend access
@AllArgsConstructor // Lombok: Constructor injection
@RestController // Spring: REST API controller
@RequestMapping("/api/employees") // Base URL for all endpoints
public class EmployeeController {

    private final EmployeeService employeeService; // Business logic layer

    /**
     * CREATE - Add new employee
     * POST /api/employees
     */
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto) {
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED); // 201 Created
    }

    /**
     * READ - Get employee by ID
     * GET /api/employees/{id}
     */
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto); // 200 OK
    }

    /**
     * READ - Get all employees
     * GET /api/employees
     */
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees); // 200 OK
    }

    /**
     * UPDATE - Modify existing employee
     * PUT /api/employees/{id}
     */
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId,
                                                      @RequestBody EmployeeDto updatedEmployee) {
        EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
        return ResponseEntity.ok(employeeDto); // 200 OK
    }

    /**
     * DELETE - Remove employee
     * DELETE /api/employees/{id}
     */
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully!"); // 200 OK
    }

}
