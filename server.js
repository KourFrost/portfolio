const express = require("express");
const expressApp = express();
const port_choice = 8080;
expressApp.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

expressApp.use(express.static(__dirname + "/public"));

const server = expressApp.listen(process.env.PORT || port_choice, () => {
    const port = server.address().port;
    console.log("App now running on port", port);
});