const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4()

app.use(express.urlencoded({extended: true}));



app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.static('public'));
app.use('/public', express.static('public'));

//app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__filename, "style.css")));

let posts = [
    {
        id: uuidv4(),
        username : "Chameli Devi",
        content : "I love Coding!",
    },
    {
        id: uuidv4(),
        username : "Shashank Soni",
        content : "Fresher",
    },
    {
        id: uuidv4(),
        username : "Coder",
        content : "Error",
    },
];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
    // res.render('index.ejs', { async: true });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({id, username, content });
    // res.send("post request is working");
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id);
    // console.log(post);
    res.render("show.ejs", { post });
});

app.patch("/posts", (req, res) => {
    let { id } = req.params;
    console.log(id);
    res.send("patch request is working");
    
});

app.listen(port, () => {
    console.log("listening to port : 8080");
});