const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("I'm from NGINX");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})