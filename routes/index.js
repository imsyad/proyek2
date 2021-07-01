var express = require("express");
var fs = require("fs");
var router = express.Router();
const tf = require("@tensorflow/tfjs");

function c() {
  // This is example of Tensorflow
  const a = tf.tensor2d([1, 2], [1, 2]);
  const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
  return a.matMul(b);
}

/* GET home page. */
router
  .get("/", function (req, res, next) {
    console.log(c());
    res.render("index", { title: "Express" });
  })
  .post("/", function (req, res, next) {
    fs.readFile("./public/model.json", "utf8", function (err, data) {
      if (err) next(err);
      // Do all calculation here
      // Assign the result here for sending back to the user
      var hasil = { example: "hello world" };
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(hasil);
    });
  });

module.exports = router;
