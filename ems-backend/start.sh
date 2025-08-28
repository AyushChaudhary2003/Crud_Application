#!/bin/bash
java -Dserver.port=$PORT -Dspring.profiles.active=vercel -jar target/ems-backend-0.0.1-SNAPSHOT.jar
