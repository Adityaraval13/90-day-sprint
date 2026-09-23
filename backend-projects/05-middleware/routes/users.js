const express = require('express');

// Create a mini-app just for user routes
const router = express.Router();

// Notice it is router.get, not app.get!
// We also don't need to write '/api/users' here. We will handle that in app.js.
router.get('/', (req, res) => {
    res.json({ message: "You hit the GET route from the Users Router!" });
});

router.post('/', (req, res) => {
    res.json({ message: "You hit the POST route from the Users Router!" });
});

// Export this mini-app so app.js can find it
module.exports = router;