const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
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

//todo.save()



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

app.get("/", function(req, res){
    item.find({})
        .then(foundItem => {
            res.render("list", {ejes: foundItem});
        })
        .catch(err => {
            console.log(err);
        });
});

app.post("/delete", function(req, res){
    const checked = req.body.checkbox1;
    item.findByIdAndDelete(checked)
        .then(() => {
            console.log("Deleted");
            res.redirect("/");
        })
        .catch(err => {
            // Handle error
            console.error(err);
            res.status(500).send("Failed to delete item");
        });
});



// post for inseting
app.post("/", function(req, res){
    const ItemName = req.body.one;
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