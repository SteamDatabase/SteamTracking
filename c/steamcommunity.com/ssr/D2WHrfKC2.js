_();
var _ = _({
    Handle: () => _,
    Root: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    Track: () => _,
    default: () => _,
  }),
  _ = `-WaXN-Umpbg-`,
  _ = `LNi2h6kYm5g-`,
  _ = `jA4kFrjtkac-`,
  _ = `gAeRHDkWt5M-`,
  _ = `XWjEvL39Yi4-`,
  _ = `Tcizn-cHysY-`,
  _ = {
    Root: _,
    "Size-1": `LNi2h6kYm5g-`,
    "Size-2": `jA4kFrjtkac-`,
    "Size-3": `gAeRHDkWt5M-`,
    Track: _,
    Handle: _,
  },
  _ = _();
function _(_) {
  return (0, _.jsxs)(_.Root, {
    ..._,
    children: [(0, _.jsx)(_.Track, {}), (0, _.jsx)(_.Handle, {})],
  });
}
function _(_) {
  let { value: _, onChange: _, size: _ = `2`, color: _, ref: _ } = _;
  return (0, _.jsx)(_, {
    ref: _,
    role: `switch`,
    "aria-checked": !!_,
    onClick: () => _(!_),
    onKeyDown: (_) => {
      (_.key === ` ` || _.key === `Enter`) &&
        (_(!_), _.preventDefault(), _.stopPropagation());
    },
    tabIndex: 0,
    "data-accent-color": _,
    ..._(
      {
        size: _,
        className: _,
      },
      _,
    ),
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    ..._,
  });
}
function _(_) {
  return (0, _.jsx)(`div`, {
    className: _,
    ..._,
  });
}
var _ = Object.assign(_, {
    Root: _,
    Track: _,
    Handle: _,
  }),
  _ = [
    ..._,
    {
      prop: `size`,
      className: (_) => _[`Size-${_}`],
      responsive: !0,
    },
  ],
  _ = _({
    Separator: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Size-4": () => _,
    default: () => _,
  }),
  _ = `_5kifY2M9UO4-`,
  _ = `_2mcUp1HQ5aU-`,
  _ = `sOfOs3KoyvY-`,
  _ = `_3Nr-Bhzmilg-`,
  _ = `xcVf7F5T31E-`,
  _ = {
    Separator: _,
    "Size-1": `_2mcUp1HQ5aU-`,
    "Size-2": `sOfOs3KoyvY-`,
    "Size-3": `_3Nr-Bhzmilg-`,
    "Size-4": `xcVf7F5T31E-`,
  };
function _(_) {
  let { orientation: _ = `horizontal`, size: _ = `1`, ..._ } = _;
  return (0, _.jsx)(`div`, {
    role: `separator`,
    "aria-orientation": _,
    ..._(
      {
        ..._,
        size: _,
        className: _,
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  {
    prop: `size`,
    className: (_) => _[`Size-${_}`],
    responsive: !0,
  },
  {
    prop: `color`,
    cssProperty: (_) => [`--separator-color`, _(_)],
  },
];
export { _, _ };
