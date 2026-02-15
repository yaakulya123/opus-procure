# Spring Boot RESTful API with PostgreSQL

A RESTful API built with Spring Boot and PostgreSQL for user management.

## Prerequisites

- Java 25
- Maven 3.6+
- PostgreSQL 12+

## Database Setup

### 1. Install PostgreSQL
```bash
# macOS with Homebrew
brew install postgresql@16
brew services start postgresql@16

# Ubuntu/Debian
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

### 2. Create Database
```bash
# Connect to PostgreSQL
psql -U postgres

# In psql, run:
CREATE DATABASE demo_db;

# Exit psql
\q
```

Or use the provided SQL script:
```bash
psql -U postgres -f database-setup.sql
```

### 3. Configure Database Connection

Edit `src/main/resources/application.properties` and update:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/demo_db
spring.datasource.username=postgres
spring.datasource.password=your_password_here
```

## Running the Application

### Using Maven
```bash
./mvnw spring-boot:run
```

Or if Maven is installed globally:
```bash
mvn spring-boot:run
```

The application will start on **http://localhost:8080**

## API Endpoints

### Base URL: `http://localhost:8080/api/users`

### 1. Health Check
```bash
GET /api/users/health
```

### 2. Get All Users
```bash
GET /api/users
```

### 3. Get User by ID
```bash
GET /api/users/{id}
```

### 4. Create User
```bash
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

### 5. Update User
```bash
PUT /api/users/{id}
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 28
}
```

### 6. Delete User
```bash
DELETE /api/users/{id}
```

## Testing with curl

```bash
# Health check
curl http://localhost:8080/api/users/health

# Create a user
curl -X POST http://localhost:8080/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice","email":"alice@example.com","age":25}'

# Get all users
curl http://localhost:8080/api/users

# Get user by ID
curl http://localhost:8080/api/users/1

# Update user
curl -X PUT http://localhost:8080/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Smith","email":"alice.smith@example.com","age":26}'

# Delete user
curl -X DELETE http://localhost:8080/api/users/1
```

## Project Structure

```
src/
├── main/
│   ├── java/com/example/demo/
│   │   ├── DemoApplication.java        # Main application class
│   │   ├── controller/
│   │   │   └── UserController.java     # REST endpoints
│   │   ├── service/
│   │   │   └── UserService.java        # Business logic
│   │   ├── repository/
│   │   │   └── UserRepository.java     # Database access
│   │   ├── model/
│   │   │   └── User.java               # JPA entity
│   │   └── dto/
│   │       └── UserRequest.java        # Request data transfer object
│   └── resources/
│       └── application.properties      # Configuration
```

## Technologies Used

- **Spring Boot 4.0.2** - Application framework
- **Spring Data JPA** - Database access
- **PostgreSQL** - Database
- **Maven** - Build tool
- **Jakarta Persistence (JPA)** - ORM specification

## Database Schema

The `users` table is automatically created with the following structure:

| Column | Type    | Constraints          |
|--------|---------|---------------------|
| id     | BIGINT  | PRIMARY KEY, AUTO   |
| name   | VARCHAR | NOT NULL            |
| email  | VARCHAR | NOT NULL, UNIQUE    |
| age    | INTEGER |                     |
