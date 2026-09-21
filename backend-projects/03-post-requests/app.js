const express = require('express');
const app = express();

app.use(express.json());

// Our Mock Database array
const usersDB = [
    { name: "System Admin", role: "Superuser", sprintDay: 90 }
];

// 1. GET route to view all users
app.get('/api/users', (req, res) => {
    res.json({ currentUsers: usersDB });
});

// 2. POST route to add a new user
app.post('/api/users', (req, res) => {
    const incomingData = req.body;
    
    // Push the new data into our array
    usersDB.push(incomingData);
    
    res.json({
        status: "Success",
        message: "User added to database!",
        newDatabase: usersDB
    });
});

app.listen(3001, () => {
    console.log("Day 3 Database Server running on port 3001");
});