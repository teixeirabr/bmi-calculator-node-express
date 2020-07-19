const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = +req.body.num1;
  let num2 = +req.body.num2;

  let result = num1 + num2;

  res.send(`The result is ${result}`);
});

app.get("/bmiCalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let result = weight / (height * height);

  res.send(`Your BMI is ${result}`);
});

let port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port} !!!`));
