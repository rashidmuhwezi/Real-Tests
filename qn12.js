function reverseWord(word) {
    var reversed = word.split("").reverse().join("");
    return reversed;
  }
  var original = "Rashid";
  var reversed = reverseWord(original);
  console.log("Original word: " + original);
  console.log("Reversed word: " + reversed);
  