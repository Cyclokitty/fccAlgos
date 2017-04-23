function bouncer(arr) {
  var bouncy = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      bouncy.push(arr[i]);
    }
  }
  // Don't show a false ID to this bouncer.
  return bouncy;
}

bouncer([7, "ate", "", false, 9]);
