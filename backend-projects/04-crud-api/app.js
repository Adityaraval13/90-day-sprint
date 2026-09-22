const express = require('express');
const app = express();
app.use(express.json());

// Mock Database (Changed to 'let' so we can modify it!)
let usersDB = [
    { id: 1, name: "Aditya", role: "Developer" },
    { id: 2, name: "System Admin", role: "Superuser" }
];

// PUT: Update an existing user's data
app.put('/api/users/:id', (req, res) => {
    // Grab the ID from the URL and convert it to a number
    const targetId = parseInt(req.params.id);
    const updatedInfo = req.body;

    // Search for the user
    let user = usersDB.find(u => u.id === targetId);

    if (user) {
        // Update their role if the body contains a new one
        user.role = updatedInfo.role || user.role;
        res.json({ message: "User updated successfully!", user: user });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// DELETE: Remove a user from the database
app.delete('/api/users/:id', (req, res) => {
    const targetId = parseInt(req.params.id);
    const initialLength = usersDB.length;

    // Filter out the deleted user and reassign the database
    usersDB = usersDB.filter(u => u.id !== targetId);

    if (usersDB.length < initialLength) {
        res.json({ message: "User deleted!", currentUsers: usersDB });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(3001, () => {
    console.log("Day 4 CRUD Server running on port 3001");
});