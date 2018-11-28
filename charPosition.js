function countLetters (input) {
  var result = {};
  var newArray = input.split(" ").join("");

    for (var i = 0; i < newArray.length; i++) {

      if (result[newArray[i]] === undefined) {
        result[newArray[i]] = [i];
      } else {
        result[newArray[i]].push(i);
      }
    }
    return result;
  }


console.log(countLetters("lighthouse in the house"));