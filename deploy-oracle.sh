#!/bin/bash

# Update system
sudo yum update -y

# Install Java 21
sudo yum install -y java-21-openjdk java-21-openjdk-devel

# Install Git
sudo yum install -y git

# Create app directory
sudo mkdir -p /opt/ems-backend
sudo chown $USER:$USER /opt/ems-backend

# Clone repository
cd /opt/ems-backend
git clone https://github.com/AyushChaudhary2003/Crud_Application.git .

# Navigate to backend
cd ems-backend

# Set executable permissions
chmod +x mvnw

# Build application
./mvnw clean package -DskipTests

# Set environment variables
export DATABASE_URL="jdbc:mysql://sql12.freesqldatabase.com:3306/sql12796422"
export DATABASE_USERNAME="sql12796422"
export DATABASE_PASSWORD="c8lcKVJtNt"
export SPRING_PROFILES_ACTIVE="vercel"

# Run application
java -jar target/ems-backend-0.0.1-SNAPSHOT.jar
