
var countdownGenerator = function (x) {
  var from = x + 1;
  // var timePast = -1;

  return function () {
    // timePast += 1;
    from += -1;
    if (from == 0) {
      console.log("Blast Off!");
    } if (from > 0) {
      console.log("T-minus", from);
    } if (from < 0) {
      console.log("Rockets already gone, bub!");
    }
  };


};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!