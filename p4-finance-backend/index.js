require("dotenv").config(); // Load environment variables
const express = require("express");
const connectDB = require("./config/db"); // Import the DB connection function
const cors = require("cors");

connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Enable JSON parsing
app.use(cors()); // Enable CORS for frontend requests

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
