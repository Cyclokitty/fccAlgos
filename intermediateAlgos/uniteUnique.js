function uniteUnique(arr) {
  const these = [];
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      if (these.indexOf(arguments[i][j]) < 0) {
        these.push(arguments[i][j]);
      }
    }
  }
  return these;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// or:

function flatStuff(arr) {
  // take the arrays and turn into one array
  let flat = [].concat(...arguments);
  console.log(flat);

  // filter thru the arrays and return the unique items
  return flat.filter((item, index, self) => {
    return self.indexOf(item) === index;
  });
}

flatStuff([1, 3, 2], [5, 2, 1, 4], [2, 1]);
