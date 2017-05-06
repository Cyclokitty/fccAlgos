function whatIsInAName(collection, source) {
  // make an array out of the source keys:
  var keysArr = Object.keys(source);
  console.log(keysArr);
  // filter the collection
  const matches = collection.filter(item => {
    for(var i = 0; i < keysArr.length; i++) {
      if(!item.hasOwnProperty(keysArr[i]) || item[keysArr[i]] !== source[keysArr[i]]) {
        return false;
      }
    }
    return true;
  });
  return matches;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }); 
