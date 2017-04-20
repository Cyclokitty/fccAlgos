function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var last = str.substring(str.length - target.length);
  if (last === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
