const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('400 Bad Request');
  });

router.get("/log-in", (req, res) => {
    const str = [{
        "name": "log in.",
        "msg": "log in!",
        "username": "log in?"
    }];
    res.end(JSON.stringify(str));
});

router.post("/sign-in", (req, res) => {
    res.end("NA");
});

module.exports = router;