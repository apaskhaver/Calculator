const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//for regular calculator
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  res.send(" = " + (num1 + num2));
});

//for BMI calculator
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var height = parseFloat(req.body.height);
  var weight = parseFloat(req.body.weight);

  res.send("Your BMI is " + (weight / Math.pow(height, 2)) +
  "<br> < 18.5 = underweight" +
  "<br> > 25 = overweight");
});

app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
