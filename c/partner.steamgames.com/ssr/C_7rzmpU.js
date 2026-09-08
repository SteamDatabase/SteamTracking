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
export { _, _ };
