function sumFibs(num) {
  var fibo = [1, 1];
  var i = 0;
  while (num > fibo[fibo.length - 1]) {
    fibo.push(fibo[i] + fibo[i + 1]);
    i++;
  }

  if (fibo[fibo.length-1] > num) {
    fibo.pop();
  }

  const add = fibo.filter(item => {
    if (item % 2 !== 0) {
      return item;
    }
  });

  return add.reduce((accum, item) => {
    return accum + item;
  }, 0);
}

sumFibs(4);
