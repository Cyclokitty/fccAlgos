function checkCashRegister(price, cash, cid) {
  // this will hold the type of money and amounts
  var changeBack = [];

  // this is the change to go back to customer
  var change = cash - price;
  console.log("The change you should get: ", change);

  // this is the total amount in the cash register
  const total = cid.reduce((accum, amount) => {
    return accum += amount[1];
  }, 0);

  console.log('total: ', total.toFixed(2));

  if (change === total ) {
    return "Closed";
  }

  if (change > total) {
    return "Insufficient Funds";
  }

  // coin and bills value:
  let values = { 'ONE HUNDRED': 100, 'TWENTY': 20, 'TEN': 10, 'FIVE': 5, 'ONE': 1, 'QUARTER': 0.25, 'DIME': 0.10, 'NICKEL': 0.05, 'PENNY': 0.01 };

  // let's solve this algo!
  for (var item in values) {
    while (change >= values[item]) {
      changeBack.push([item, values[item]]);
      change -= values[item];
      for (var i = 0; i < cid.length; i++) {
        if (cid[i][0] === item) {
          cid[i][1] -= values[item];
        }
      }
    }
  }

  // Here is your change, ma'am.

  // checking if cid changes after change made
  console.log(cid);

  return changeBack;
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

checkCashRegister(21.50, 50.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
