function destroyer(arr) {
  var args = Array.from(arguments);
  var check = args.shift(0);

  const destroy = arr.filter(item => {
    if (!args.includes(item)) {
      return item;
    }
  });
  return destroy;
}


destroyer([1, 2, 3, 1, 2, 3],2,3);
