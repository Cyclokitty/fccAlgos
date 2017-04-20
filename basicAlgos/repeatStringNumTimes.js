function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num <= 0) {
    return '';
  } else {
  return Array(num + 1).join(str);
  }
}

repeatStringNumTimes("abc", 3);
