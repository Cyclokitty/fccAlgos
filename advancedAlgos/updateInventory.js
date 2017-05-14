function updateInventory(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0,  len = arr2.length; j < len; j++) {
        if(arr1[i][1] === arr2[j][1]) {
          arr1[i][0] = arr1[i][0] + arr2[j][0];
          arr2.splice(j, 1);
          j--;
          len--;
        }
      }
    }

    arr1 = arr1.concat(arr2);
    return arr1.sort((a,b) => {
      if (a[1] < b[1]) {
        return -1;
      }
      if (a[1] > b[1]) {
        return 1;
      }
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
