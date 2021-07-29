const util = require("util");
const crypto = require("crypto");

function a(x, y) {
  console.log(x + y);
}

const dontUseMe = util.deprecate(a, "deprecated");

dontUseMe(1, 2);
a(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((e) => {
    console.error(e);
  });
