function truncateString(str, num) {
  // Clear out that junk in your trunk
  console.log(str.length);
  if (str.length > num) {
    str = str.substring(0, num);
    return str + '...';
  } else {
    return str.substring(0, num);
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
