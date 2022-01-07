function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let changeSum = 0;
  let money = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  let changeAvailable = [];
  let changeSumAfter = 0;
  let changeFinal = [
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
    ];
  let changeOutput = [];

  //calculate total change available
  for (let i = 0; i < cid.length; i++) {
    changeSum += cid[i][1];
  }

  //Quick check if funds are sufficient
  if (change > changeSum.toFixed(2))  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  //create new changeAvailable array to work with
  for (let i = 0; i < cid.length; i++) {
    changeAvailable.push(cid[i][1]);
  }

  //calculate change composition
  for (let i = changeAvailable.length - 1; i >= 0; i--)  {

    while (money[i] <= change && changeAvailable[i] > 0 && change > 0) {
      
        change = Number((change - money[i]).toFixed(2));
        changeAvailable[i] = Number((changeAvailable[i] - money[i]).toFixed(2));
        console.log(changeAvailable);
        changeFinal[i][1] += money[i];
    }
  }

  //calculate change sum left after handing out change
  for (let i = 0; i < cid.length; i++) {
    changeSumAfter += changeAvailable[i];
  }

  //creating array representing change thats handed out
  for (let i = 0; i < changeFinal.length; i++) {
    if (changeFinal[i][1] != 0) {
      changeOutput.unshift(changeFinal[i]);
    }
  }

  //case decision
  if (change > 0)  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change == 0 && changeSumAfter == 0) {
    return {status: "CLOSED", change: [...cid]};
  } else {
    return {status: "OPEN", change: changeOutput}
  }
}
