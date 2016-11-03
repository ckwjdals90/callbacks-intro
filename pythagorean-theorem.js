
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function (inputObj) {
  var x = Math.pow(inputObj.x, 2);
  var y = Math.pow(inputObj.y, 2);
  var z = Math.sqrt(x + y);
  return z;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);