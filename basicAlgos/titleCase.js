function titleCase(str) {
  var upperCase = [];
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
    var cap = str[i][0].toUpperCase();
    str[i].slice(0,1);
    str[i][0] = cap;
    str[i] = str[i].join('');
    upperCase.push(str[i]);
  }
  return upperCase.join(' ');
}

titleCase("I'm a little tea pot");
