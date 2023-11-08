const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const data = require("./data");
const Portfolio = require("./src/models/portfolio");
const portfolioRoute = require("./src/routes/portfolioRoute");

dotenv.config();

// MongoDB connection URI
const dbURL = process.env.MONGODB_URI || "mongodb+srv://lotoDEE:malcomx0147@cluster0.xs1zhyd.mongodb.net/ATAfrica";

// Connect to MongoDB
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("DB Connection Successful!"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/user/portfolio", portfolioRoute);

// Insert portfolio data into the database
async function insertPortfolioData() {
  try {
    // Clear existing portfolio data if needed
    await Portfolio.deleteMany({});

    // Insert new portfolio data from the 'data' variable
    const portfolios = await Portfolio.create(data);

    // Log a success message when data is inserted
    console.log("Portfolio data inserted successfully.");
  } catch (error) {
    // Handle any errors that occur during the insertion
    console.error("Error inserting portfolio data:", error);
  }
}

// Uncomment the following line if you want to insert portfolio data
// insertPortfolioData();

// Set the port for the server
const port = process.env.PORT || 5000;

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app and server
module.exports = { app, server };