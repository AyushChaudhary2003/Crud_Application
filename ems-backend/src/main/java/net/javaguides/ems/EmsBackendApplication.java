package net.javaguides.ems;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Employee Management System - Main Application Class
 * 
 * This is a Spring Boot application that provides REST APIs for managing employees.
 * 
 * Technologies Used:
 * - Java 21
 * - Spring Boot 3.3.10 (with embedded Tomcat server)
 * - MySQL Database with JPA/Hibernate
 * - RESTful API design
 * 
 * Features:
 * - Create, Read, Update, Delete employees
 * - MySQL database integration
 * - Cross-origin support for React frontend
 * 
 * @author Ayush Chaudhary
 */
@SpringBootApplication // Enables Spring Boot auto-configuration
public class EmsBackendApplication {

	/**
	 * Main method - starts the Spring Boot application
	 * Runs embedded Tomcat server on port 8080
	 */
	public static void main(String[] args) {
		SpringApplication.run(EmsBackendApplication.class, args);
	}

}
