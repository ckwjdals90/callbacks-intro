
var newArray = [];

function map(array, elm) {
  array.forEach(function(element) {
    newArray.push(elm(element));
  });
  console.log(newArray);
}

function elm(index) {
   return index.length;
}



map(["ground", "control", "to", "major", "tom"], elm);
      // => { return elm.length }
//return [6, 7, 2, 5, 3]