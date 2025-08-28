@echo off
echo Building and deploying Employee Management System...

cd ems-backend
echo Building backend...
call mvnw.cmd clean package -DskipTests

echo Starting backend...
start "Backend" java -jar -Dspring.profiles.active=production target/ems-backend-0.0.1-SNAPSHOT.jar

cd ..\ems-frontend
echo Building frontend...
call npm run build

echo Installing serve to run frontend...
call npm install -g serve

echo Starting frontend...
start "Frontend" serve -s dist -l 3000

echo Deployment complete!
echo Frontend: http://localhost:3000
echo Backend: http://localhost:8080
pause
