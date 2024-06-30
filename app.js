const express = require("express");
const bodyParser = require("body-parser");

// Creating an instance of express
var app = express();

// Setting the view engine to EJS (Embedded JavaScript)
app.set("view engine", "ejs");

// Parsing URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));
// Serving static files from the 'public' directory
app.use(express.static("public"));

// importing mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo");

// creating schema
const trySchema = new mongoose.Schema({
    name: String
});

// creating a model to work with
const item = mongoose.model("task", trySchema);


// task 1 in mongoose 1
const todo = new item({
    name: "Create some videos"
});

//code line : todo.save()



// task 2 in mongoose
const todo2 = new item({
    name: "Learn DSA"
});


// task 3 in mongoose
const todo3 = new item({
    name: "Learn React"
});

// task 4 in mongoose 
const todo4 = new item({
    name: "Take rest"
});

// saving them in  the server
/*
todo2.save();
todo3.save();
todo4.save();
*/


// Handling GET requests to the root URL ("/")
app.get("/", function(req, res){
    // Finding all items (tasks) in the collection
    item.find({})
        .then(foundItem => {
             // Rendering the 'list' view and passing the found items to it
            res.render("list", {ejes: foundItem});
        })
        .catch(err => {
            console.log(err);
        });
});

// Handling POST requests to the "/delete" URL
app.post("/delete", function(req, res){
    const checked = req.body.checkbox1;
    item.findByIdAndDelete(checked)
        .then(() => {
            // Logging a message to the console upon successful deletion
            console.log("Deleted");
            res.redirect("/");
        })
        .catch(err => {
            // Handle error
            console.error(err);
            res.status(500).send("Failed to delete item");
        });
});



// Handling POST requests to the root URL ("/") for inserting new tasks
app.post("/", function(req, res){
    // Getting the name of the new task from the request body
    const ItemName = req.body.one;
    // Creating a new task with the provided name
    const todo5 = new item({
        name: ItemName
    });
    todo5.save();
    res.redirect("/");
});


// connecting to local host
app.listen("12000", function(){
    console.log("Server started");
});
