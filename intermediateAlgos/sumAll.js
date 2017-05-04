function sumAll(arr) {
  var range = [];
  if (arr[0] < arr[1]) {
    let num = arr[0];
    while (num <= arr[1]) {
      range.push(num);
      num++;
      }
  } else if (arr[0] > arr[1]) {
      let num = arr[0];
      while (num >= arr[1]) {
        range.push(num);
        num--;
      }
  }
  let summed = range.reduce((accum, num) => {
    return accum + num;
  }, 0);
  return summed;
}
