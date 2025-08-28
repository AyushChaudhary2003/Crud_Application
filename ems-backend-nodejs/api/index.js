const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database configuration
const dbConfig = {
  host: 'sql12.freesqldatabase.com',
  port: 3306,
  user: 'sql12796422',
  password: 'c8lcKVJtNt',
  database: 'sql12796422',
  ssl: false,
  timezone: 'UTC'
};

// Create database connection pool
const pool = mysql.createPool(dbConfig);

// Initialize database table
async function initDatabase() {
  try {
    const connection = await pool.getConnection();
    
    // Create employees table if it doesn't exist
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS employees (
        id BIGINT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    connection.release();
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
}

// Initialize database on startup
initDatabase();

// Routes

// Get all employees
app.get('/api/employees', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, first_name as firstName, last_name as lastName, email FROM employees ORDER BY id');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get employee by ID
app.get('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute('SELECT id, first_name as firstName, last_name as lastName, email FROM employees WHERE id = ?', [id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new employee
app.post('/api/employees', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const [result] = await pool.execute(
      'INSERT INTO employees (first_name, last_name, email) VALUES (?, ?, ?)',
      [firstName, lastName, email]
    );
    
    const [newEmployee] = await pool.execute(
      'SELECT id, first_name as firstName, last_name as lastName, email FROM employees WHERE id = ?',
      [result.insertId]
    );
    
    res.status(201).json(newEmployee[0]);
  } catch (error) {
    console.error('Error creating employee:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Update employee
app.put('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;
    
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const [result] = await pool.execute(
      'UPDATE employees SET first_name = ?, last_name = ?, email = ? WHERE id = ?',
      [firstName, lastName, email, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    
    const [updatedEmployee] = await pool.execute(
      'SELECT id, first_name as firstName, last_name as lastName, email FROM employees WHERE id = ?',
      [id]
    );
    
    res.json(updatedEmployee[0]);
  } catch (error) {
    console.error('Error updating employee:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      res.status(409).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Delete employee
app.delete('/api/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const [result] = await pool.execute('DELETE FROM employees WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    
    res.json({ message: 'Employee deleted successfully!' });
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Employee Management System API is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Employee Management System API',
    version: '1.0.0',
    endpoints: {
      'GET /api/employees': 'Get all employees',
      'GET /api/employees/:id': 'Get employee by ID',
      'POST /api/employees': 'Create new employee',
      'PUT /api/employees/:id': 'Update employee',
      'DELETE /api/employees/:id': 'Delete employee'
    }
  });
});

const PORT = process.env.PORT || 3000;

// For Vercel, we need to export the app
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
