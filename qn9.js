function swapCase(str) {
    var result = "";
    for (var i = 0; i < str.length; i++) {
      var char = str.charAt(i);
      if (char === char.toUpperCase()) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
    }
    return result;
  }
const str= ("HOW ARE YOU ?", "am always fine.")
console.log(swapCase(str))