const express = require('express');
const yargs = require('yargs');
const app = express();

app.use(express.static('public'));

app.get("/", (req, res)=> {
    return res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/basicmoduler", (req,res)=> {
    return res.sendFile(__dirname + "/public/html/basicmoduler.html");
})







const port  = process.env.PORT || 9000;

app.listen(port, (error) => {
    if (error) {
        console.log("Error while starting server!", error);
    }
    console.log("Server has started and is running on port: ", port);
});


