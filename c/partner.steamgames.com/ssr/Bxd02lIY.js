_();
var _ = _(_(), 1),
  _ = _({
    Button: () => _,
    Icon: () => _,
    MinWidth: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Variant-basic": () => _,
    "Variant-dark": () => _,
    "Variant-ghost": () => _,
    "Variant-inverted": () => _,
    "Variant-outline": () => _,
    "Variant-vibrant": () => _,
    Width: () => _,
    default: () => _,
  }),
  _ = `D8IENuW8Q7w-`,
  _ = `YAnzAmuUUnI-`,
  _ = `_2rTZ-Nig90Q-`,
  _ = `inqz7Zdx9Xg-`,
  _ = `-GZ6XDQ0-34-`,
  _ = `ob-nIzzquk8-`,
  _ = `_-0GNcZrYp-U-`,
  _ = `vCmvVAHC2BY-`,
  _ = `a-Dt3-0cU9Y-`,
  _ = `sFeQogRji0A-`,
  _ = `B2hj-u2WH-0-`,
  _ = `WPxeXV5lR1E-`,
  _ = `fkz-MePtKwI-`,
  _ = {
    Button: _,
    "Size-1": `YAnzAmuUUnI-`,
    Icon: _,
    "Size-2": `inqz7Zdx9Xg-`,
    "Size-3": `-GZ6XDQ0-34-`,
    "Variant-basic": `ob-nIzzquk8-`,
    "Variant-dark": `_-0GNcZrYp-U-`,
    "Variant-inverted": `vCmvVAHC2BY-`,
    "Variant-outline": `a-Dt3-0cU9Y-`,
    "Variant-ghost": `sFeQogRji0A-`,
    "Variant-vibrant": `B2hj-u2WH-0-`,
    Width: _,
    MinWidth: _,
  },
  _ = _({
    ChildContainer: () => _,
    LoadingSpinnerAmin: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Size-4": () => _,
    "Size-5": () => _,
    Spinner: () => _,
    "Variant-bright": () => _,
    "Variant-solid": () => _,
    default: () => _,
  }),
  _ = `gbiIXSGR7ao-`,
  _ = `wrAzvPdtZ8A-`,
  _ = `_4kJaZEhsJxA-`,
  _ = `DRTRL11gTS0-`,
  _ = `YHLaIMyUK2w-`,
  _ = `X9tZo7qpKpQ-`,
  _ = `tDMBfph44YU-`,
  _ = `wAx2yhv-GAU-`,
  _ = `mq55jUiqYgM-`,
  _ = `_1Si7xHUP8cE-`,
  _ = {
    Spinner: _,
    LoadingSpinnerAmin: _,
    "Size-1": `_4kJaZEhsJxA-`,
    "Size-2": `DRTRL11gTS0-`,
    "Size-3": `YHLaIMyUK2w-`,
    "Size-4": `X9tZo7qpKpQ-`,
    "Size-5": `tDMBfph44YU-`,
    "Variant-solid": `wAx2yhv-GAU-`,
    "Variant-bright": `mq55jUiqYgM-`,
    ChildContainer: _,
  },
  _ = _();
function _(_) {
  let {
      size: _ = `3`,
      loading: _ = !0,
      children: _,
      color: _,
      variant: _,
      ..._
    } = _,
    _ = _(`LoadingSpinner`, _);
  return _ || !_
    ? (0, _.jsxs)(_, {
        position: `relative`,
        ..._,
        width: `fit-content`,
        children: [
          (0, _.jsx)(`div`, {
            "data-visibility": !_,
            className: _,
            children: _,
          }),
          _ &&
            (0, _.jsx)(_, {
              position: `absolute`,
              inset: `0`,
              justify: `center`,
              align: `center`,
              children: (0, _.jsx)(_, {
                size: _,
                color: _,
                variant: _,
              }),
            }),
        ],
      })
    : (0, _.jsx)(_, {
        size: _,
        color: _,
        variant: _,
        ..._,
      });
}
function _(_) {
  let { className: _, color: _, ..._ } = _(_, _);
  return (0, _.jsx)(`div`, {
    "data-accent-color": _,
    className: (0, _.default)(_, _),
    ..._,
  });
}
var _ = [
  ..._,
  {
    prop: `size`,
    responsive: !0,
    className: (_) => _[`Size-${_}`],
  },
  {
    prop: `variant`,
    className: (_) => _[`Variant-${_}`],
  },
];
function _(_) {
  let {
      variant: _,
      size: _ = `2`,
      minWidth: _ = `fit-content`,
      color: _,
      loading: _,
      children: _,
      onClick: _,
      icon: _,
      focusable: _,
      navProps: _,
      ..._
    } = _,
    _ = _(),
    _ = _
      ? (0, _.jsx)(_, {
          size: _,
          color: _,
          variant: `bright`,
          children: _,
        })
      : _,
    _ = _ ? void 0 : _,
    _ = _ ?? _?.focusable ?? !!_,
    _ = _(`Button`, _),
    _ = {
      type: `button`,
      ..._(
        {
          ..._,
          variant: _,
          size: _,
          minWidth: _,
          color: _,
          className: (0, _.default)(_, _ && `_2rTZ-Nig90Q-`),
          onClick: _,
        },
        _,
      ),
      children: _,
    };
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        ...(_ || {}),
        focusable: _,
      })
    : (0, _.jsx)(`button`, {
        ..._,
      });
}
function _(_) {
  let {
      variant: _,
      size: _ = `2`,
      minWidth: _ = `fit-content`,
      disabled: _,
      icon: _,
      focusable: _,
      navProps: _,
      ..._
    } = _,
    _ = _(),
    _ = _(`Button`, _),
    _ = _(
      {
        onClick: _ ? _ : void 0,
        "aria-disabled": _,
        ..._,
        variant: _,
        size: _,
        minWidth: _,
        className: (0, _.default)(_, _ && `_2rTZ-Nig90Q-`, _()),
      },
      _,
    );
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ..._,
        ...(_ || {}),
        focusable: _,
      })
    : (0, _.jsx)(`a`, {
        ..._,
      });
}
function _(_) {
  _.preventDefault();
}
var _ = [
    ..._,
    {
      prop: `size`,
      responsive: !0,
      className: (_) => _[`Size-${_}`],
    },
    {
      prop: `variant`,
      className: (_) => _[`Variant-${_}`],
    },
    {
      prop: `color`,
      dataProperty: (_) => [`accent-color`, `${_}`],
    },
    {
      prop: `width`,
      className: _,
      cssProperty: `--width`,
      responsive: !0,
    },
    {
      prop: `minWidth`,
      className: _,
      cssProperty: `--min-width`,
      responsive: !0,
    },
  ],
  _ = _,
  _ = _;
export { _, _, _ };
