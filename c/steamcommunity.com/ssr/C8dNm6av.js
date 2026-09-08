function _(_, _) {
  let _ = _.bUseBinary1K ? 1024 : 1e3,
    _ = _ * _,
    _ = _ * _,
    _ = _ * _;
  return _ > _
    ? {
        nNum: _ / _,
        strPrefix: `Tera`,
      }
    : _ > _
      ? {
          nNum: _ / _,
          strPrefix: `Giga`,
        }
      : _ > _
        ? {
            nNum: _ / _,
            strPrefix: `Mega`,
          }
        : _ > _
          ? {
              nNum: _ / _,
              strPrefix: `Kilo`,
            }
          : {
              nNum: _,
              strPrefix: ``,
            };
}
function _(_, _, _, _) {
  let _ = _;
  _ =
    typeof _ == `number`
      ? {
          nDigitsAfterDecimal: _,
          bUseBinary1K: _ || _ === void 0,
          bValueIsInBytes: !_,
          bValueIsRate: _,
          nMinimumDigitsAfterDecimal: 0,
        }
      : {
          nDigitsAfterDecimal: 2,
          bUseBinary1K: !0,
          bValueIsInBytes: !0,
          bValueIsRate: !1,
          nMinimumDigitsAfterDecimal: 0,
          ..._,
        };
  let { nNum: _, strPrefix: _ } = _(_, _),
    _ = `#${_}${_.bValueIsInBytes ? `bytes` : `bits`}${_.bValueIsRate ? `_PerSecond` : ``}`;
  return _.Localize(
    _,
    _.toLocaleString(_(), {
      minimumFractionDigits: _.nMinimumDigitsAfterDecimal,
      maximumFractionDigits: _.nDigitsAfterDecimal,
    }),
  );
}
function _(_, _ = 0) {
  let _;
  return (
    _ &&
      (_ = {
        maximumFractionDigits: _,
      }),
    _ ? _.toLocaleString(_(), _) : `` + _
  );
}
export { _, _ };
