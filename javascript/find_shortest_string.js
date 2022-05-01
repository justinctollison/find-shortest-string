function findShortestString(arr) {
  // type your code here
  let shortestString = arr.reduce(function(a, b) {
    return a.length <= b.length ? a: b;
  })
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
//iterate over the array, find the string with the shortest amount of characters, return this string.
//count the numbers of characters in each array element, return the minimum element
//use reduce method on each element of the array that uses a reducer function comparing each elements length and using it