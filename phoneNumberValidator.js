function telephoneCheck(str) {
  let regExExclude = /[^0-9-\s\(\)]/g;
  let format1 = /^1?\s?\d{3}-\d{3}-\d{4}$/;
  let format2 = /^1?\s?\(\d{3}\)\d{3}-\d{4}$/;
  let format3 = /^1?\s?\(\d{3}\)\s\d{3}-\d{4}$/;
  let format4 = /^1?\s?\d{3}\s\d{3}\s\d{4}$/;
  let format5 = /^1?\s?1\s\d{3}\s\d{3}\s\d{4}$/;
  let format6 = /^1?\s?\d{10}$/;

  if (regExExclude.test(str)) {
    return false;
  } else if (format1.test(str)||format2.test(str)||format3.test(str)||format4.test(str)||format5.test(str)||format6.test(str))  {
    return true;
  } else  {
    return false;
  }
}
