function RLEMethod(data) {
  let output = '';

  for (let i = 0; i < data.length; i++) {
    let counter = 1;
    let currentElem = data[i];

    for (let j = i + 1; j < data.length; j++) {
      if (currentElem !== data[j]) {
        break;
      }

      i++;
      counter++;
    }

    output += counter + ' ' + currentElem + ' ';
  }

  return output.slice(0, -1);
}

module.exports = { RLEMethod };
