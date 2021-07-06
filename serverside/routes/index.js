var express = require("express");
var fs = require("fs");
var router = express.Router();
const tf = require("@tensorflow/tfjs");

function sigmoid(z) {
  return tf.tensor1d([1]).div(tf.exp(z.mul(-1)).add(1));
}
function h(x, theta) {
  return sigmoid(tf.matMul(x, theta));
}

function predict(x, theta) {
  const x_tf = tf.tensor2d(x, [1, 13]);
  const theta_tf = tf.tensor2d(theta, [13, 1]);
  const h1 = h(x_tf, theta_tf);
  return h1;
}

/* GET home page. */
router
  .get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  })
  .post("/", function (req, res, next) {
    fs.readFile("./public/training_result.json", "utf8", function (
      err,
      data_thetas
    ) {
      if (err) next(err);
      // Do all calculation here
      var thetas = JSON.parse(data_thetas);
      var key = [];
      var theta_values = [];
      var body;
      try {
        body = JSON.parse(Object.keys(req.body)[0]);
      } catch {
        body = req.body;
      }
      var user_input = [];
      for (var theta in thetas) {
        key.push(theta);
        theta_values.push(thetas[theta]);
      }
      key.forEach((item) => {
        if (item === "ef_sc") {
          user_input.push(body.ejection_fraction * body.serum_creatinine);
        } else if (item === "ejection_fraction") {
          user_input.push(body.ejection_fraction * body.ejection_fraction);
        } else {
          user_input.push(body[item]);
        }
      });
      const theta_values1 = new Float32Array(theta_values);
      const user_input1 = new Float32Array(user_input);
      var value = predict(user_input1, theta_values1);
      value.array().then((result) => {
        var death_or_not;
        if (result[0][0] >= 0.5) {
          death_or_not = 1;
        } else {
          death_or_not = 0;
        }
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Content-Type", "application/json");
        res.json({ death_prob: result, result: death_or_not });
      });
    });
  });

module.exports = router;
