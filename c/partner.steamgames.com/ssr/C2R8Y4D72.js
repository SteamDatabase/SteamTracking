function _() {
  return _().languages.map((_) => _(_.strISOCode));
}
function _(_) {
  return _.length == 2 && _.COUNTRY ? `${_}-${_.COUNTRY}` : _;
}
export { _ };
