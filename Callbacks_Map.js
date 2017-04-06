

function map(someWords,someFunction){
  var storing_Array = [];
    // ARRAY
    for (i of someWords)
      {
        storing_Array.push(someFunction(i));
      }

      console.log(storing_Array);
}

var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});