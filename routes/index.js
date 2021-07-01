var express = require("express");
var fs = require("fs");
var router = express.Router();
const tf = require("@tensorflow/tfjs");

function sigmoid(z) {
  return 1 / (1 + tf.exp(-z));
}
function h(x, theta) {
  const a = tf.tensor2d(x, [1, 13]);
  const b = tf.tensor2d(theta, [13, 1]);
  return sigmoid(tf.matMul(a, b));
}

function predict(x, theta) {
  // This is example of Tensorflow
  const x_tf = tf.tensor2d(x, [1, 13]);
  const theta_tf = tf.tensor2d(theta, [13, 1]);

  const h1 = h(x_tf, theta_tf);
  var res;
  if (h1 >= 0.5) {
    res = 1;
  } else {
    res = 0;
  }
  return [h1, res];
}

/* GET home page. */
router
  .get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  })
  .post("/", function (req, res, next) {
    fs.readFile("./public/training_result.json", "utf8", function (
      err,
      data_theta
    ) {
      if (err) next(err);
      // Do all calculation here
      var theta = JSON.parse(data_theta);
      console.log(theta);
      console.log(theta.values());
      // Assign the result here for sending back to the user
      var hasil = { example: "hello world" };
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(hasil);
    });
  });

module.exports = router;
