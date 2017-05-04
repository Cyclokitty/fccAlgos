function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  const diff = newArr.filter(item => {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  });
  return diff;
}

diffArray([1, 2, 3, 5, 7], [1, 2, 3, 4, 5]);
