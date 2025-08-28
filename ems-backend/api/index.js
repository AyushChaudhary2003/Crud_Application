const { spawn } = require('child_process');
const path = require('path');

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // For now, return a simple response indicating the Java backend should be deployed elsewhere
    const response = {
      message: "Java Spring Boot backend cannot run directly on Vercel serverless functions",
      suggestion: "Please deploy the backend to Railway, Render, or Heroku",
      frontend_deployment: "You can deploy the React frontend on Vercel pointing to your backend URL",
      status: "backend_deployment_required"
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
