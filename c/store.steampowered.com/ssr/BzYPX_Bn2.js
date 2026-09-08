var _ = _(_(), 1),
  _ = _({
    Heading: () => _,
    "HeadingSize-1": () => _,
    "HeadingSize-2": () => _,
    "HeadingSize-3": () => _,
    "HeadingSize-4": () => _,
    "HeadingSize-5": () => _,
    "HeadingSize-6": () => _,
    "HeadingSize-7": () => _,
    "HeadingSize-8": () => _,
    "HeadingSize-9": () => _,
    default: () => _,
  }),
  _ = `_4mSfgGkNpzc-`,
  _ = `bTh1lhLtKoI-`,
  _ = `sQgovjcuEkA-`,
  _ = `MboGA1-Gl-U-`,
  _ = `VkUR-s5Z05M-`,
  _ = `uY9w5f4Hdo4-`,
  _ = `FGz00pv8-mU-`,
  _ = `CtMZK6uzbrA-`,
  _ = `ffMpBM7ReNg-`,
  _ = `Y5mPFJFVnGg-`,
  _ = {
    Heading: _,
    "HeadingSize-1": `bTh1lhLtKoI-`,
    "HeadingSize-2": `sQgovjcuEkA-`,
    "HeadingSize-3": `MboGA1-Gl-U-`,
    "HeadingSize-4": `VkUR-s5Z05M-`,
    "HeadingSize-5": `uY9w5f4Hdo4-`,
    "HeadingSize-6": `FGz00pv8-mU-`,
    "HeadingSize-7": `CtMZK6uzbrA-`,
    "HeadingSize-8": `ffMpBM7ReNg-`,
    "HeadingSize-9": `Y5mPFJFVnGg-`,
  },
  _ = _();
function _(_) {
  let { depth: _ } = (0, _.useContext)(_);
  return (0, _.jsx)(_.Provider, {
    value: {
      depth: _ + 1,
    },
    children: (0, _.jsx)(_, {
      ..._,
    }),
  });
}
var _ = _.createContext({
  depth: 0,
});
function _() {
  return (0, _.useContext)(_).depth;
}
var _ = _(_(), 1);
function _(_) {
  let { level: _ = `auto`, className: _, color: _ } = _;
  return (0, _.jsx)(_(_, _()), {
    ..._(
      {
        ..._,
        className: (0, _.default)(_(), _, _),
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  ..._,
  {
    prop: `size`,
    responsive: !0,
    className: (_) => _[`HeadingSize-${_}`],
  },
];
function _(_, _) {
  if (_ === `auto` && _ === 0) return `h1`;
  let _ = _ === `auto` ? _.toString() : _;
  return /^[1-6]$/.test(_)
    ? `h` + _
    : _ === `auto`
      ? (console.error(`<Section> nesting has exceeded "h6" for headings.`),
        `h6`)
      : (console.error(`Attempt to render invalid heading level, "${_}".`),
        `h1`);
}
var _ = `aw6Om0V9rvM-`,
  _ = `JK-hJppX9RA-`,
  _ = `_2GVSg8ucdBQ-`,
  _ = `C-0M0HTDB9k-`,
  _ = `h29gfnl4-P8-`,
  _ = `TTvtyy-O6d4-`,
  _ = `sjEnCLd5Iq4-`,
  _ = `E1sDapPG5SA-`,
  _ = `ceESDIKzHN4-`,
  _ = `UDAlpJ-4UQA-`,
  _ = `n3f-K2WKjHg-`,
  _ = `_0g7EUvQYawk-`,
  _ = `ucEF73mqM1M-`,
  _ = `OuXQJkyCPsg-`;
function _(_) {
  let { _: _ = `div`, ref: _, focusable: _, navProps: _, ..._ } = _,
    _ = _(),
    _ = _(
      {
        ..._,
        className: (0, _.default)(_, _.className),
      },
      _,
    ),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(_, {
      ref: _,
      ..._,
    });
  return _
    ? (0, _.jsx)(_, {
        "flow-children": `grid`,
        ...(_ || {}),
        focusable: _,
        children: _,
      })
    : _;
}
var _ = [
  ..._,
  {
    prop: `display`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-display`,
  },
  {
    prop: `columns`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-columns`,
  },
  {
    prop: `rows`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-rows`,
  },
  {
    prop: `autoColumns`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-columns`,
  },
  {
    prop: `autoRows`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-rows`,
  },
  {
    prop: `autoFlow`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-auto-flow`,
  },
  {
    prop: `areas`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-areas`,
  },
  {
    prop: `flow`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-flow`,
  },
  {
    prop: `alignContent`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-align-content`,
  },
  {
    prop: `justifyContent`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-justify-content`,
  },
  {
    prop: `alignItems`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-align-items`,
  },
  {
    prop: `justifyItems`,
    responsive: !0,
    className: _,
    cssProperty: `--grid-justify-items`,
  },
  {
    prop: `gap`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--grid-gap`, `var(--spacing-${_})`],
  },
  {
    prop: `gapX`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--grid-gap-x`, `var(--spacing-${_})`],
  },
  {
    prop: `gapY`,
    responsive: !0,
    className: _,
    cssProperty: (_) => [`--grid-gap-y`, `var(--spacing-${_})`],
  },
];
export { _, _, _ };
