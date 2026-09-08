var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `Qhm6jOAQZog-`,
  _ = `EnFuoPFRUQw-`,
  _ = `Psv8L3U3Y44-`,
  _ = `_0Yp9qPJ4rvQ-`,
  _ = `sI7wun-GD7g-`,
  _ = `EJ5nTwCNNaQ-`,
  _ = `-O4XGIBjnX8-`,
  _ = `yXbd0191s9A-`,
  _ = `_2FdmsjGPIgk-`,
  _ = _();
function _(_) {
  let { _: _ = `div`, focusable: _, navProps: _, ref: _, ..._ } = _,
    _ = _(),
    _ = _(
      {
        ..._,
        className: (0, _.default)(_.className, _),
      },
      _,
    ),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(_, {
      ref: _,
      ..._,
    }),
    _ = _(_.direction ?? `row`);
  return _
    ? (0, _.jsx)(_, {
        ...(_ || {}),
        focusable: _,
        "flow-children": _,
        children: _,
      })
    : _;
}
var _ = [
  ..._,
  {
    prop: `direction`,
    responsive: !0,
    className: _,
    cssProperty: `--direction`,
  },
  {
    prop: `justify`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--justify`, _(_)],
  },
  {
    prop: `align`,
    responsive: !0,
    className: _,
    cssProperty: `--align`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--gap`, `var(--spacing-${_})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--gap-x`, `var(--spacing-${_})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--gap-y`, `var(--spacing-${_})`],
  },
  {
    prop: `wrap`,
    responsive: !0,
    className: _,
    cssProperty: `--wrap`,
  },
  {
    prop: `inline`,
    responsive: !0,
    className: _,
  },
];
function _(_) {
  return /^(between|around|evenly)$/.test(_) ? `space-${_}` : _;
}
var _ = (0, _.createContext)({
  Button: `basic`,
  Checkbox: `basic`,
  Combobox: `basic`,
  LoadingSpinner: `basic`,
  SegmentedControl: `basic`,
  Select: `basic`,
  TextArea: `basic`,
  TextInput: `basic`,
});
function _(_) {
  let { variants: _ = {}, children: _ } = _,
    _ = (0, _.use)(_);
  return (0, _.jsx)(_, {
    value: {
      ..._,
      ..._,
    },
    children: _,
  });
}
function _(_) {
  return (0, _.use)(_)[_];
}
function _(_, _) {
  let _ = _(_);
  return !_ || _ === "default" ? _ : _;
}
export { _, _, _ };
