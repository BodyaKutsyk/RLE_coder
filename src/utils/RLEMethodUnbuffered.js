function RLEMethodUnbuffered(data) {
  let output = '';

  for (let i = 0; i < data.length; i++) {
    const unrepeated = [];
    let counterOfRepeated = 1;

    if (data[i] === data[i + 1]) {
      for (let j = i + 1; j < data.length; j++) {
        if (data[i] !== data[j]) {
          break;
        }

        counterOfRepeated++;
      }

      output += '[' + counterOfRepeated + ' ' + data[i] + ']' + ' ';
      i += counterOfRepeated;
    }

    if (data[i + 1] && data[i] !== data[i + 1]) {
      unrepeated.push(data[i]);
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] === data[j + 1]) {
          break;
        }

        if (
          unrepeated[unrepeated.length - 1] !== data[j] &&
          data[j] !== data[j + 1]
        ) {
          unrepeated.push(data[j]);
          i++;
        }
      }

      output += '(' + unrepeated.length + ' ' + unrepeated.join(' ') + ') ';
    }
  }

  return output.slice(0, -1);
}

module.exports = { RLEMethodUnbuffered };
