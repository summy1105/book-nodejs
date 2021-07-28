const { odd, even } = require("./var");

function checkOddOrEvent(num) {
  if (num % 2) {
    return odd;
  } else return even;
}

module.exports = checkOddOrEvent;
