const tf = require("@tensorflow/tfjs");

const a = tf.tensor2d([1, 2], [1, 2]);
const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);

const c = () => {
  console.log(a.matMul(b));
};
