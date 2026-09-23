const express = require('express');
const app = express();

// 1. Import your new router file
const usersRouter = require('./routes/users');

// 2. Custom Middleware
const requestLogger = (req, res, next) => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(`[${currentTime}] New ${req.method} request to ${req.url}`);
    next(); 
};
app.use(requestLogger);

// 3. Connect the Router
// This tells Express: "Any request that starts with /api/users should be handled by the usersRouter"
app.use('/api/users', usersRouter);

app.listen(3001, () => {
    console.log("Day 5 Modular Server running on port 3001");
});