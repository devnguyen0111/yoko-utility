function prettyNumber(number) {
  const pattern = /(-?\d+)(\d{3})/;
  return number.toString().replace(pattern, ",");
}

module.exports = { prettyNumber };
