function countLetters (input) {
  var result = {};
  var newArray = input.split(" ").join("");


    for (var i = 0; i < newArray.length; i++) {

      if (result[newArray[i]] === undefined) {
        result[newArray[i]] = 1;
      } else {
        result[newArray[i]] += 1;
      }
    }
    return result
  }




console.log(countLetters("lighthouse in the house"));


