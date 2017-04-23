function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  test = test.split('');
  target = target.split('');
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
  }
  }
  return true;
 }

 mutation(["Hello", "hey"]);
