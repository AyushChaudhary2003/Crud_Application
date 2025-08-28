# 🗄️ Your Database Configuration

## FreeSQLDatabase Details
- **Host**: sql12.freesqldatabase.com
- **Port**: 3306
- **Database Name**: sql12796422
- **Username**: sql12796422
- **Password**: c8lcKVJtNt

## Connection String
```
jdbc:mysql://sql12.freesqldatabase.com:3306/sql12796422
```

## Vercel Environment Variables
```
DATABASE_URL=jdbc:mysql://sql12.freesqldatabase.com:3306/sql12796422
DATABASE_USERNAME=sql12796422
DATABASE_PASSWORD=c8lcKVJtNt
SPRING_PROFILES_ACTIVE=vercel
```

## SQL to Create Employee Table
```sql
CREATE TABLE employee (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO employee (first_name, last_name, email) VALUES
('Piyush', 'Chaudhary', 'chaudharypiyush016@gmail.com'),
('Ankit', 'Kamat', 'mrexcalibur@gmail.com'),
('Rohit', 'Kumar', 'rohit.kumar@example.com');
```

## Next Steps
1. ✅ Database created
2. ⏳ Wait for password generation
3. 🔗 Access phpMyAdmin 
4. 🗄️ Create employee table
5. 🚀 Deploy to Vercel with environment variables
