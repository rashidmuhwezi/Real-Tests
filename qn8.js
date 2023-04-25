function getFirstNElements(array, n) {
    return array.slice(0, n);
  }
//console.log(array, n[1, "one", 4, "party", "plane"])
let myArray = ["network", "book", "nime", "plane", 1, 5, "pen", "nic"];
let result = getFirstNElements(myArray, 1);
console.log(result);
 