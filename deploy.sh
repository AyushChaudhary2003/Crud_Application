#!/bin/bash

echo "Building and deploying Employee Management System..."

# Navigate to backend
cd ems-backend

echo "Building backend..."
./mvnw clean package -DskipTests

echo "Starting backend..."
nohup java -jar -Dspring.profiles.active=production target/ems-backend-0.0.1-SNAPSHOT.jar > backend.log 2>&1 &

cd ../ems-frontend

echo "Building frontend..."
npm run build

echo "Installing serve to run frontend..."
npm install -g serve

echo "Starting frontend..."
nohup serve -s dist -l 3000 > frontend.log 2>&1 &

echo "Deployment complete!"
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:8080"
echo "Backend logs: ems-backend/backend.log"
echo "Frontend logs: ems-frontend/frontend.log"
