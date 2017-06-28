function checkCashRegister(price, cash, cid) {
  Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    if (Array.isArray(subArray)) {
      results.push(...subArray);
    }
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};
  var change = cash - price;
  var total = cid.concatAll();
  console.log(total);
   // map total for the amount in cid

  if (change === cid ) {
    return "Closed";
  }

  if (change > cid) {
    return "Insufficient Funds";
  }
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
