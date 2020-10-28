const express = require('express');
const app = express();



//Definerer directory "public" som static mappen
app.use(express.static('public'));

//GET requests for at vise websidens sider
app.get("/", (req, res)=> {
    return res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/basicmoduler", (req,res)=> {
    return res.sendFile(__dirname + "/public/html/basicmoduler.html");
});

app.get("/javascript", (req,res)=> {
    return res.sendFile(__dirname + "/public/html/javascript.html");
});




//Oprettelse af server
const port  = process.env.PORT || 9000;

app.listen(port, (error) => {
    if (error) {
        console.log("Error while starting server!", error);
    }
    console.log("Server has started and is running on port: ", port);
});


