package net.javaguides.ems.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Custom Exception for Resource Not Found scenarios
 * 
 * This exception is thrown when trying to access an employee that doesn't exist.
 * Spring automatically converts this to HTTP 404 (Not Found) response.
 * 
 * Benefits:
 * - Clear error handling for missing resources
 * - Automatic HTTP status code mapping
 * - Custom error messages for better debugging
 * - Consistent error responses across the API
 * 
 * @author Ayush Chaudhary
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND) // Auto-converts to HTTP 404
public class ResourceNotFoundException extends RuntimeException {

    /**
     * Constructor with custom error message
     * @param message Descriptive error message
     */
    public ResourceNotFoundException(String message) {
        super(message);
    }
}
