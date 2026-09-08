var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _({
    Indicator: () => _,
    IndicatorPosition: () => _,
    Item: () => _,
    SegmentedControl: () => _,
    SegmentedControlBox: () => _,
    "Size-1": () => _,
    "Size-3": () => _,
    "Variant-basic": () => _,
    "Variant-dim": () => _,
    "Variant-inset": () => _,
    "Variant-inset-glass": () => _,
    default: () => _,
    disabled: () => _,
  }),
  _ = `Ct5z95Ec-fU-`,
  _ = `EVNlC9c2y-U-`,
  _ = `UO1--Z7W-a8-`,
  _ = `n-gwDQrkkUM-`,
  _ = `L5RG2a-Ajh8-`,
  _ = `qMjsk7qGBls-`,
  _ = `DSCGUYmH8PQ-`,
  _ = `Wh2kJd7EgSU-`,
  _ = `zMFAGLjCYkQ-`,
  _ = `XZG3GtpXWvY-`,
  _ = `dEQ-gZ9-RTM-`,
  _ = `NI2QkHzo6HI-`,
  _ = {
    SegmentedControlBox: _,
    Indicator: _,
    SegmentedControl: _,
    IndicatorPosition: _,
    Item: _,
    "Size-1": `qMjsk7qGBls-`,
    "Size-3": `DSCGUYmH8PQ-`,
    disabled: _,
    "Variant-basic": `zMFAGLjCYkQ-`,
    "Variant-inset": `XZG3GtpXWvY-`,
    "Variant-inset-glass": `dEQ-gZ9-RTM-`,
    "Variant-dim": `NI2QkHzo6HI-`,
  },
  _ = _(),
  _ = (0, _.createContext)(null);
function _(_) {
  let {
      variant: _,
      radius: _,
      size: _,
      status: _,
      children: _,
      value: _,
      onValueChange: _,
    } = _,
    [_, _] = (0, _.useState)({}),
    _ = (0, _.useCallback)(
      (_, _) =>
        _((_) => ({
          ..._,
          [_]: _,
        })),
      [],
    ),
    _ = (0, _.useCallback)(
      (_, _) =>
        _((_) => {
          let _ = {
            ..._,
          };
          return _[_] === _ && delete _[_], _;
        }),
      [],
    ),
    _ = (_) => {
      let _ = 0;
      switch (_.key) {
        case ` `:
        case `Enter`:
        case `ArrowRight`:
          _ = 1;
          break;
        case `ArrowLeft`:
          _ = -1;
          break;
      }
      if (_) {
        let _ = Array.from(Object.values(_)).sort(_),
          _;
        if (_ === null) _ = _ > 0 ? 0 : _.length - 1;
        else {
          let _ = _[_],
            _ = _.findIndex((_) => _ === _);
          _(
            typeof _ == `number`,
            `Could not find current segmented value position`,
          ),
            (_ = _ + _);
        }
        let _ = _[_ < 0 ? _.length + _ : _ % _.length],
          _ = Object.keys(_).find((_) => _[_] === _);
        typeof _ == `string`
          ? (_(_), _.stopPropagation(), _.preventDefault())
          : console.error(`Could not find next segmeneted value`);
      }
    },
    _ = _(`SegmentedControl`, _),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        register: _,
        unregister: _,
        radius: _,
        size: _,
      }),
      [_, _, _, _, _, _],
    );
  return (0, _.jsx)(_, {
    clickable: !1,
    hoverable: !1,
    focusable: !1,
    variant: _,
    radius: _,
    size: _,
    status: _,
    className: (0, _.default)(_, _[`Variant-${_}`]),
    tabIndex: 0,
    onKeyDown: _,
    children: (0, _.jsx)(_.Provider, {
      value: _,
      children: (0, _.jsxs)(_, {
        className: _,
        style: {
          "--outer-radius": `var(--radius-${_})`,
        },
        children: [
          _,
          _ !== null &&
            (0, _.jsx)(_, {
              radius: _,
            }),
        ],
      }),
    }),
  });
}
function _(_) {
  let { value: _, children: _, disabled: _ } = _,
    _ = (0, _.useContext)(_),
    [_, _] = (0, _.useState)(),
    { register: _, unregister: _ } = _ || {};
  if (
    ((0, _.useEffect)(
      () => (!_ || !_ || !_ ? () => {} : (_(_, _), () => _(_, _))),
      [_, _, _, _],
    ),
    !_)
  )
    return null;
  let { value: _, onValueChange: _, radius: _, size: _ } = _,
    _ = _ === _,
    _ = (_) => {
      _.stopPropagation(), _.preventDefault(), !(_ || _) && _(_);
    },
    _ = _ === void 0 ? _ : _;
  return (0, _.jsx)(_, {
    justify: `center`,
    align: `center`,
    ref: _,
    onClick: _,
    "data-selected": _ ? `true` : `false`,
    className: (0, _.default)(_, _ && _[`Size-${_}`], _ ? _ : ``),
    children: _,
  });
}
function _(_) {
  let { options: _, getOptionLabel: _ = (_) => _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    ..._,
    children: _.map((_) =>
      (0, _.jsx)(
        _.Item,
        {
          value: _,
          children: _(_),
        },
        _,
      ),
    ),
  });
}
(_.Item = _), (_.Root = _);
function _(_) {
  let { radius: _ } = _;
  return (0, _.jsx)(_, {
    className: _,
    children: (0, _.jsx)(`div`, {
      className: _,
    }),
  });
}
function _(_, _) {
  let _ = _.compareDocumentPosition(_);
  return _ & Node.DOCUMENT_POSITION_FOLLOWING
    ? -1
    : _ & Node.DOCUMENT_POSITION_PRECEDING
      ? 1
      : 0;
}
export { _ };
