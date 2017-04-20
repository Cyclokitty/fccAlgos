function largestOfFour(arr) {
  var largest = [];
  for (var i = 0; i < arr.length; i++) {
    var big = Math.max.apply(null, arr[i]);
    largest.push(big);
  }
return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Note: Math.max() returns the largest of zero or more numbers
// .apply is used so it can find the max element in an array
