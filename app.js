const express = require('express');
const app = express();

const fs = require('fs');

//Definerer directory "public" som static mappen
app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const header = fs.readFileSync(__dirname + "/public/header/header.html").toString();
const navMenu = fs.readFileSync(__dirname + "/public/nav-menu/nav-menu.html").toString();

const index = fs.readFileSync(__dirname + "/public/html/index.html").toString();
const basicModules = fs.readFileSync(__dirname + "/public/html/basicmoduler.html").toString();
const javaScript = fs.readFileSync(__dirname + "/public/html/javascript.html").toString();

//GET requests for at vise websidens sider
app.get("/", (req, res)=> {
    return res.send(header + navMenu + index);
});

app.get("/basicmoduler", (req,res)=> {
    return res.send(header + navMenu + basicModules);
});

app.get("/javascript", (req,res)=> {
    return res.send(header + navMenu + javaScript);
});







//Serveren
const port  = process.env.PORT || 9000;

app.listen(port, (error) => {
    if (error) {
        console.log("Error while starting server!", error);
    }
    console.log("Server has started and is running on port: ", port);
});


