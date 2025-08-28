# Use official OpenJDK 21 runtime as base image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy maven wrapper and pom.xml
COPY mvnw .
COPY mvnw.cmd .
COPY .mvn .mvn
COPY pom.xml .

# Make mvnw executable
RUN chmod +x ./mvnw

# Download dependencies (this step is cached if pom.xml doesn't change)
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src src

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose port (Railway will set PORT environment variable)
EXPOSE ${PORT:-8080}

# Run the application with production profile
CMD ["java", "-jar", "-Dserver.port=${PORT:-8080}", "target/ems-backend-0.0.1-SNAPSHOT.jar"]