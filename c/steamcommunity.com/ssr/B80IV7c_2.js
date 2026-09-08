_();
var _ = _({
    Color: () => _,
    HitSlop: () => _,
    "IconSize-1": () => _,
    "IconSize-2": () => _,
    "IconSize-3": () => _,
    "IconSize-4": () => _,
    "IconSize-5": () => _,
    "IconSize-6": () => _,
    "IconSize-7": () => _,
    "IconSize-8": () => _,
    "IconSize-9": () => _,
    IconSizeDefault: () => _,
    default: () => _,
  }),
  _ = `_1L8GJofqjzg-`,
  _ = `rWPJIq88Xb0-`,
  _ = `_2-X3prp16-8-`,
  _ = `Q6ZxYbePR18-`,
  _ = `HaKinX2HVOA-`,
  _ = `YXESGnbjni8-`,
  _ = `EMxEJopGxi8-`,
  _ = `Kiv4A4Ybq-s-`,
  _ = `eZs0-7vOQ-c-`,
  _ = `lSQmOCUwZBU-`,
  _ = `INF-xd7GDWw-`,
  _ = `ChFRjeuyico-`,
  _ = {
    Color: _,
    IconSizeDefault: _,
    "IconSize-1": `_2-X3prp16-8-`,
    "IconSize-2": `Q6ZxYbePR18-`,
    "IconSize-3": `HaKinX2HVOA-`,
    "IconSize-4": `YXESGnbjni8-`,
    "IconSize-5": `EMxEJopGxi8-`,
    "IconSize-6": `Kiv4A4Ybq-s-`,
    "IconSize-7": `eZs0-7vOQ-c-`,
    "IconSize-8": `lSQmOCUwZBU-`,
    "IconSize-9": `INF-xd7GDWw-`,
    HitSlop: _,
  },
  _ = _();
function _(_) {
  let { viewBoxSize: _ = 20, ..._ } = _,
    _ = _.size ? void 0 : _;
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 ${_} ${_}`,
    ..._(
      {
        className: _,
        ..._,
      },
      _,
    ),
  });
}
var _ = [
  ..._,
  {
    prop: `size`,
    responsive: !0,
    className: (_) => _[`IconSize-${_}`],
  },
  {
    prop: `color`,
    className: _,
    cssProperty: (_) => [`--icon-color`, _(_)],
  },
  {
    prop: `hitSlop`,
    className: _,
    cssProperty: (_) => [`--hit-slop-custom`, typeof _ == `string` ? _ : ``],
  },
  _.find(({ prop: _ }) => _ === `cursor`),
];
export { _ };
