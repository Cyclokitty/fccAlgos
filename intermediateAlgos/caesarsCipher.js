function rot13(str) { // LBH QVQ VG!
  const decipher = [];
  const cipher = str.split('');
  const maxAlpha = 65 + 26;
  for (let i = 0; i < cipher.length; i++) {
    let num = cipher[i].charCodeAt() + 13;
    if (cipher[i] === ' ' || cipher[i] === '.' || cipher[i] === '?' || cipher[i] === '!') {
      decipher.push(cipher[i]);
    } else if (num < maxAlpha) {
        decipher.push(String.fromCharCode(num));
    } else if (num >= maxAlpha) {
        decipher.push(String.fromCharCode(num - maxAlpha + 65));
    }
  }
  return decipher.join('');
}

// Change the inputs below to test

rot13("SERR PBQR PNZC?");
