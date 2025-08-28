package net.javaguides.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Employee Data Transfer Object (DTO)
 * 
 * This class is used to transfer employee data between the API and frontend.
 * DTOs help separate the API contract from the database structure.
 * 
 * Why use DTOs?
 * - Security: Hide internal database structure from clients
 * - Flexibility: API can evolve without changing database
 * - Performance: Send only needed data to frontend
 * - Validation: Add API-specific validation rules
 * 
 * @author Ayush Chaudhary
 */
@Getter // Lombok: Creates getter methods
@Setter // Lombok: Creates setter methods  
@NoArgsConstructor // Lombok: Default constructor (needed for JSON conversion)
@AllArgsConstructor // Lombok: Constructor with all fields
public class EmployeeDto {
    
    private Long id; // Employee unique identifier
    private String firstName; // Employee first name
    private String lastName; // Employee last name
    private String email; // Employee email address (must be unique)

}
