_();
var _ = _(_(), 1),
  _ = _();
function _(_) {
  let {
      rows: _ = 3,
      resize: _ = `none`,
      ref: _,
      value: _,
      onTextChange: _,
      onChange: _,
      disabled: _,
      variant: _,
      ..._
    } = _,
    _ = (_) => {
      _ || (_(_.target.value), _ && _(_));
    },
    _ = _(`TextArea`, _);
  return (0, _.jsx)(`textarea`, {
    ref: _,
    ..._({
      ..._,
      className: (0, _.default)(_(), _()),
      style: {
        resize: _,
      },
      cursor: `text`,
      disabled: _,
      variant: _,
    }),
    value: _ || ``,
    onChange: _,
    rows: _,
    readOnly: _,
    "aria-disabled": _,
  });
}
export { _ };
