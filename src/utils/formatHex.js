function formatHex(hex, gap = 32, limith = 50) {
  const structuredHex = [];

  if (hex.length) {
    for (let i = 0; i < hex.length; i += gap) {
      structuredHex.push(hex.slice(i, i + gap));
    }
  }

  const formatedHex = structuredHex.map((elem) =>
    elem.match(/.{2}/g).join(' '),
  );

  return [
    structuredHex.join('').slice(0, gap * limith),
    formatedHex.slice(0, limith),
  ];
}

module.exports = { formatHex };
