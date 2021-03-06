const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 7000

//Routes
const blogRoute = require("./route/blog.js");

//connect to the database // for now, the password will be in the file
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://runaway-database:2gn5YAq0BRwLc7tF@runaway-mrvci.mongodb.net/<dbname>?retryWrites=true&w=majority", {useNewUrlParser=true});

app.get("/", function(req,res){
    return res.status(200).send("Hello World");
})

//Route function called
blogRoute(app,mongoose);








app.listen(PORT,() => {
    console.log("Hopefully the server is running on "+ PORT);
})
module.exports = app;