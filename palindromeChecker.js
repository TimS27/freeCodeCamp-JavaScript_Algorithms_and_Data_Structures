function palindrome(str) {

  var newStr = str.match(/[a-z0-9]/ig).join("").toUpperCase();

  for (let i = 0; i < newStr.length; i++)
  {
    if (newStr[i] != newStr[newStr.length -1 - i]) 
    {
      return false;
    }
  }
  return true;
}
