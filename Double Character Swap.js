const doubleSwap = (str, a, b) =>
  str.replace(new RegExp(`([${a}])|[${b}]`, 'g'), (match, g1) =>
    match === g1 ? b : a
  );