function pairElement(str) {
  str = str.split('');
  const dna = str.map(letter => {
    if (letter === 'G') {
      return [letter, 'C'];
    } else if (letter === 'C') {
      return [letter, 'G'];
    } else if (letter === 'T') {
      return [letter, 'A'];
    } else if (letter === 'A') {
      return [letter, 'T'];
    }
  });
  return dna;
}

pairElement("GCTAAT");
