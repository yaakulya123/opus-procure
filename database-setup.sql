-- PostgreSQL Database Setup Script
-- Run this script to create the database for the Spring Boot application

-- Create database (run as postgres superuser)
CREATE DATABASE demo_db;

-- Connect to the database
\c demo_db;

-- Optional: Create a specific user for the application
-- CREATE USER demo_user WITH PASSWORD 'your_password';
-- GRANT ALL PRIVILEGES ON DATABASE demo_db TO demo_user;

-- The 'users' table will be automatically created by Hibernate
-- when you run the Spring Boot application with spring.jpa.hibernate.ddl-auto=update
