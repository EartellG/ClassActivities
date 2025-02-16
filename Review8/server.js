// create server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = 4040;

let tasks = [
  { id: 1, title: "Learn Express.js", status: "Pending" },
  { id: 2, title: "Build a simple app", status: "In Progress" },
  { id: 3, title: "Finish capstone project", status: "In Progress" },
  { id: 4, title: "Graduate Savvy Coders", status: "In Progress" }
];

// Middleware
app.use(cors());
app.use(express.json());

// Get all tasks
app.get("/tasks", (request, response) => {
  response.json(tasks);
});
// Add a new task

// Update task status

// Delete a task

// Start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
