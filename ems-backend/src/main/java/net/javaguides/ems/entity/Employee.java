package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * Employee Entity - Database Model
 * 
 * This class represents an employee in the database.
 * Uses JPA annotations to map Java object to database table.
 * 
 * Key Features:
 * - Maps to 'employee' table in MySQL database
 * - Auto-generated ID (primary key)
 * - Email must be unique across all employees
 * - Uses Lombok to reduce boilerplate code
 * 
 * @author Ayush Chaudhary
 */
@Getter // Lombok: Creates getter methods automatically
@Setter // Lombok: Creates setter methods automatically
@NoArgsConstructor // Lombok: Creates default constructor (needed by JPA)
@AllArgsConstructor // Lombok: Creates constructor with all fields
@Entity // JPA: Marks this as a database entity
@Table(name = "employee") // JPA: Maps to 'employee' table
public class Employee {

    @Id // Primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increment ID
    private Long id;

    @Column(name = "first_name") // Maps to 'first_name' column
    private String firstName;

    @Column(name = "last_name") // Maps to 'last_name' column
    private String lastName;

    @Column(name = "email_id", nullable = false, unique = true) // Email must be unique and not null
    private String email;

}
