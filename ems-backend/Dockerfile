# Use official OpenJDK 21 runtime as base image
FROM openjdk:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy maven wrapper and pom.xml
COPY mvnw .
COPY mvnw.cmd .
COPY .mvn .mvn
COPY pom.xml .

# Download dependencies (this step is cached if pom.xml doesn't change)
RUN ./mvnw dependency:go-offline -B

# Copy source code
COPY src src

# Build the application
RUN ./mvnw clean package -DskipTests

# Expose port 8080
EXPOSE 8080

# Create application properties for container
RUN echo "spring.application.name=ems-backend" > src/main/resources/application-docker.properties && \
    echo "spring.datasource.url=jdbc:mysql://mysql:3306/ems" >> src/main/resources/application-docker.properties && \
    echo "spring.datasource.username=root" >> src/main/resources/application-docker.properties && \
    echo "spring.datasource.password=rootpassword" >> src/main/resources/application-docker.properties && \
    echo "spring.jpa.hibernate.ddl-auto=update" >> src/main/resources/application-docker.properties && \
    echo "spring.jpa.show-sql=true" >> src/main/resources/application-docker.properties

# Run the application with Docker profile
CMD ["java", "-jar", "-Dspring.profiles.active=docker", "target/ems-backend-0.0.1-SNAPSHOT.jar"]