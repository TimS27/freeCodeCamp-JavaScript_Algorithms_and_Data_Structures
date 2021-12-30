function rot13(str) {

  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arr = str.split("");
  let regEx = /[a-z]/i;

  for (let i = 0; i < arr.length; i++) {
    
    if (regEx.test(arr[i])) {

      //find indices of letters in str in alphabet
      let indices = [];
      let idx = alphabet.indexOf(arr[i]);
      while (idx != -1) {
        indices.push(idx);
        idx = alphabet.indexOf(arr[i], idx + 1);
      }

      //handle shifts past last letter
      if (parseInt(indices.join(""))+13 <= 25) {
        arr[i] = alphabet[parseInt(indices.join(""))+13];
      }
      else  {
        arr[i] = alphabet[parseInt(indices.join(""))+13-26];
      }
    }
  }
  return arr.join("");
}
