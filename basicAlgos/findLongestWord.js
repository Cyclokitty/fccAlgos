function findLongestWord(str) {
  var words = str.split(' ');
  var big = 0;
  for (var i = 0; i < words.length; i++) {
    if (big > words[i].length) {
      big = big;
    } else if (big < words[i].length) {
      big = words[i].length;
    }
  }
  return big;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
