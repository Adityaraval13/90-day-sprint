const express = require('express');
const app = express();

// Our Mock Database
const usersDB = [
    { id: 1, username: "aditya", role: "Software Developer", status: "Building APIs" },
    { id: 2, username: "rishi", role: "Healthcare Admin", company: "Meditab" },
    { id: 3, username: "alice", role: "Frontend Engineer", company: "TechCorp" }
];

// The colon ":" creates a dynamic variable called "username"
app.get(app.get('/api/users/:username', (req, res) => {
    // 1. Grab the username from the URL and make it lowercase to avoid case issues
    const requestedUser = req.params.username.toLowerCase();
    
    // 2. Search the database array
    const foundUser = usersDB.find(user => user.username === requestedUser);
    
    // 3. Send back the result (or an error if not found)
    if (foundUser) {
        res.json({ status: "Success", data: foundUser });
    } else {
        // We use .status(404) to tell the browser the data doesn't exist
        res.status(404).json({ status: "Error", message: "User not found in database" });
    }
}));

app.listen(3000, () => {
    console.log("Day 2 Server running on http://localhost:3000");
});