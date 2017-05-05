function palindrome(str) {
  var reverseIt = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').join('');
  var compare = str.replace(/[^0-9a-z]/gi, '').toLowerCase().split('').reverse().join('');
  if (compare.valueOf() == reverseIt.valueOf()) {
    return true;
  } else {
    return false;
  }
}



palindrome("rhino");
