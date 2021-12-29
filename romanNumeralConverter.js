function convertToRoman(num) {
  let result = "";
  let builders = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};

  for (let i in builders) {
    console.log(builders[i]);
    while (builders[i] <= num) {
      num -= builders[i];
      result += i;
    }
  }
  return result;
}
