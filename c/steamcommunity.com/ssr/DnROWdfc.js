var _ = _(_(), 1),
  _ = _(),
  _ = Symbol(`CoercingTextInputNotParseable`);
function _(_) {
  let {
      value: _,
      onValueChange: _,
      valueToString: _,
      valueFromString: _,
      checkValidText: _,
      onBlur: _,
      onKeyDown: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(null),
    _ = _ ?? (_ === void 0 ? `` : _(_)),
    _ = (_) => {
      let _ = _(_);
      _ !== _ && _ === _(_) ? (_(null), _(_)) : (!_ || _(_, _)) && _(_);
    },
    _ = () => {
      if (_ !== null) {
        let _ = _(_);
        _ !== _ && _(_), _(null);
      }
    };
  return (0, _.jsx)(_, {
    value: _,
    onTextChange: _,
    onKeyDown: (_) => {
      _.key === `Enter` && _(), _ && _(_);
    },
    onBlur: (_) => {
      _(), _ && _(_);
    },
    ..._,
  });
}
export { _, _ };
