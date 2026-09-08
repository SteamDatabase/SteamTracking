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
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 16,
    children: (0, _.jsx)(`path`, {
      _: `M13.8182 1.94629L5.77816 9.98184L2.40483 6.61296L0.835938 8.18184L5.77816 13.1285L15.387 3.51518L13.8182 1.94629Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = _({
    Checkbox: () => _,
    Disabled: () => _,
    Icon: () => _,
    Root: () => _,
    "Variant-dark": () => _,
    "Variant-light": () => _,
    "Variant-outline": () => _,
    default: () => _,
  }),
  _ = `VjNCePsQmsc-`,
  _ = `QPV4SlYdS2g-`,
  _ = `rvacKoOmp6o-`,
  _ = `rBJoTb2lSk4-`,
  _ = `LwnSjH9Layo-`,
  _ = `KDP8ul6OEiY-`,
  _ = `w3z-m0K0jes-`,
  _ = {
    Root: _,
    "Variant-light": `QPV4SlYdS2g-`,
    "Variant-dark": `rvacKoOmp6o-`,
    "Variant-outline": `rBJoTb2lSk4-`,
    Disabled: _,
    Checkbox: _,
    Icon: _,
  },
  _ = _(_(), 1);
function _(_) {
  let {
      checked: _,
      onChange: _,
      disabled: _,
      children: _,
      ref: _,
      variant: _,
      color: _,
      align: _ = `center`,
      ..._
    } = _,
    _ = _ === `indeterminate`,
    _ = _ ? _ : _,
    _ = () => {
      _ || (_ && _(_ ? !0 : !_));
    },
    _ = (_) => {
      _ || (_.key === ` ` && (_(), _.preventDefault(), _.stopPropagation()));
    },
    _ = _(`Checkbox`, _);
  return (0, _.jsxs)(_, {
    align: _,
    ref: _,
    role: `checkbox`,
    "aria-checked": _ ? `mixed` : _,
    "data-state": _(_),
    className: (0, _.default)(_, _[`Variant-${_}`], _ && `LwnSjH9Layo-`),
    onClick: _,
    tabIndex: 0,
    onKeyDown: _,
    cursor: `default`,
    "aria-disabled": _,
    "data-accent-color": _,
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
        children:
          _ &&
          (0, _.jsx)(_, {
            className: `w3z-m0K0jes-`,
          }),
      }),
      _,
    ],
  });
}
function _(_) {
  return _ === `indeterminate` ? _ : _ ? `checked` : `unchecked`;
}
function _(_) {
  return (0, _.jsx)(`svg`, {
    viewBox: `0 0 16 16`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    children: (0, _.jsx)(`path`, {
      _: `M14.6663 7.11133H1.33301V9.33355H14.6663V7.11133Z`,
      fill: `currentColor`,
    }),
  });
}
export { _, _, _ };
