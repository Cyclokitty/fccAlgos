function checkCashRegister(price, cash, cid) {
  // this will hold the type of money and amounts
  var changeBack = [];

  // this is the change to go back to customer
  var change = cash - price;
  //console.log("The change you should get: ", change);

  // this is the total amount in the cash register
  const total = cid.reduce((accum, amount) => {
    return accum += amount[1];
  }, 0);

//  console.log('total: ', total.toFixed(2));

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

  console.log(cid);

  // adding all the like change together:
  let comparer = [].concat(...changeBack);
  let categories =  comparer.filter(item => {
    return isNaN(item);
  });

  var counts = {};
  categories.forEach(item => {
    counts[item] = (counts[item] || 0) + 1;
  });

  let yourChange = [];
  for (var coinage in counts) {
    yourChange.push([coinage, counts[coinage] * values[coinage]]);
  }
  // Here is your change, ma'am.
  return yourChange;
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

//checkCashRegister(21.50, 50.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

//checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
