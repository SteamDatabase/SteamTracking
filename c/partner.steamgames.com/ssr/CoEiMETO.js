_();
var _ = _(_(), 1),
  _ = _({
    LineClamp: () => _,
    Text: () => _,
    TextAlign: () => _,
    "TextSize-1": () => _,
    "TextSize-2": () => _,
    "TextSize-3": () => _,
    "TextSize-4": () => _,
    "TextSize-5": () => _,
    "TextSize-6": () => _,
    "TextSize-7": () => _,
    "TextSize-8": () => _,
    "TextSize-9": () => _,
    TextWeight: () => _,
    Truncate: () => _,
    WhiteSpace: () => _,
    default: () => _,
  }),
  _ = `IokSIloSPlA-`,
  _ = `NWgTAn1-iiQ-`,
  _ = `f3GH0Lt-WcY-`,
  _ = `VVwUDw-BQqg-`,
  _ = `UEx0MpggIp8-`,
  _ = `E-F5JVsCXEo-`,
  _ = `cgwmRarnhq0-`,
  _ = `ppHk56Ca6pc-`,
  _ = `im1yqKy2APs-`,
  _ = `XmAwnj5Lt94-`,
  _ = `iGtlkk28Cug-`,
  _ = `h9k0m4mdzeY-`,
  _ = `yXwEBVt-iw4-`,
  _ = `-jRzZNDvN4c-`,
  _ = `khl85WpotP8-`,
  _ = {
    Text: _,
    Truncate: _,
    "TextSize-1": `f3GH0Lt-WcY-`,
    "TextSize-2": `VVwUDw-BQqg-`,
    "TextSize-3": `UEx0MpggIp8-`,
    "TextSize-4": `E-F5JVsCXEo-`,
    "TextSize-5": `cgwmRarnhq0-`,
    "TextSize-6": `ppHk56Ca6pc-`,
    "TextSize-7": `im1yqKy2APs-`,
    "TextSize-8": `XmAwnj5Lt94-`,
    "TextSize-9": `iGtlkk28Cug-`,
    TextWeight: _,
    TextAlign: _,
    LineClamp: _,
    WhiteSpace: _,
  },
  _ = _();
function _(_) {
  let { _: _ = `span`, ref: _, className: _, ..._ } = _;
  return (0, _.jsx)(_, {
    ref: _,
    ..._(
      {
        ..._,
        className: (0, _.default)(_, _),
      },
      _,
    ),
  });
}
var _ = [
    {
      prop: `weight`,
      responsive: !0,
      className: _,
      cssProperty: (_) => [`--text-weight`, `var(--font-weight-${_})`],
    },
    {
      prop: `align`,
      responsive: !0,
      className: _,
      cssProperty: `--text-align`,
    },
    {
      prop: `color`,
      responsive: !0,
      cssProperty: (_, _, _) => [
        `--text-color`,
        _(_, _(_.contrast, _) ?? `body`),
      ],
    },
    {
      prop: `contrast`,
      responsive: !0,
      cssProperty: (_, _, _) => [
        `--text-color`,
        _(_(_.color, _) ?? `text-body`, _),
      ],
    },
    {
      prop: `truncate`,
      className: _,
    },
    {
      prop: `lineClamp`,
      responsive: !0,
      className: _,
      cssProperty: `--line-clamp`,
    },
    {
      prop: `whiteSpace`,
      className: _,
      cssProperty: `--white-space`,
    },
  ],
  _ = [
    ..._,
    ..._,
    {
      prop: `size`,
      responsive: !0,
      className: (_) => _[`TextSize-${_}`],
    },
  ];
export { _, _, _ };
