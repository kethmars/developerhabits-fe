const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

const CHANNEL_URL = 'https://www.youtube.com/channel/UCJLZwePkNHps5Bv7VwISyTA';

app.use(express.json());

app.get("*", function(req, res) {
    res.redirect(CHANNEL_URL);
});

app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});