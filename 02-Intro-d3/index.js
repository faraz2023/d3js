const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

// set up the path to the public directory
public_dir = path.join(__dirname, "./public");
//only for static files
app.use(express.static(public_dir));

//Setting Up Handlebars engine
//set up path to customize views directory path
const viewsPath = path.join(__dirname, "./templates/views");
//set up path for partials directory
const partialsPath = path.join(__dirname, "./templates/partials");
//set up views folder
app.set("views", viewsPath);
//setting up handlebars
app.set("view engine", "hbs");
//set up partials
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
  message = "hello to you from node.Welcome to d3js";
  res.render("index", { message });
});

app.listen(3004, () => {
  console.log("Server is running");
});


