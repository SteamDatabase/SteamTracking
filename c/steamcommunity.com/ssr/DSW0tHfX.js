var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `PC-T-1dYXe4-`,
  _ = `HoPMNUPOwr8-`,
  _ = _();
function _(_) {
  let {
    value: _,
    onValueChange: _,
    options: _,
    getOptionLabel: _,
    disabled: _,
    ..._
  } = _;
  return (0, _.jsx)(_.Root, {
    value: _,
    onValueChange: _,
    disabled: _,
    ..._,
    children: _.map((_) => {
      let _ = _ ? _(_) : _;
      return (0, _.jsx)(
        _.Option,
        {
          value: _,
          children: _,
        },
        _,
      );
    }),
  });
}
function _(_) {
  let { value: _, onValueChange: _, disabled: _, render: _, ..._ } = _,
    _ = (0, _.useRef)(null),
    _ = (0, _.useCallback)((_, _) => {
      if (!_.current) return;
      let _ = [..._.current.querySelectorAll(`[data-radio-id]`)];
      if (_.length !== 0)
        for (let _ = 0; _ < _.length; _++) {
          let _ = _[_];
          if (_.dataset.radioId && _.dataset.radioId === _) {
            let _ = _[(_ + _ + _.length) % _.length];
            _.click(), _.focus();
          }
        }
    }, []),
    _ = (0, _.useCallback)((_) => _(_, 1), [_]),
    _ = (0, _.useCallback)((_) => _(_, -1), [_]),
    _ = (0, _.useMemo)(
      () => ({
        value: _,
        onValueChange: _,
        bDisabled: _,
        onSelectNext: _,
        onSelectPrev: _,
      }),
      [_, _, _, _, _],
    ),
    _ = {
      role: `radiogroup`,
      "aria-disabled": _,
      ref: _,
      ..._,
    },
    _ = _(
      _,
      (0, _.jsx)(_, {
        direction: `column`,
        gap: `2`,
        role: `radiogroup`,
        "aria-disabled": _,
        ..._,
      }),
      _,
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _(_) {
  let { value: _, ref: _, children: _, render: _ } = _,
    _ = (0, _.useContext)(_),
    _ = (0, _.useId)();
  if (!_)
    return (
      console.error(
        `<RadioGroup.Option> must be rendered within a <RadioGroup.Root>`,
      ),
      null
    );
  let {
      value: _,
      onValueChange: _,
      bDisabled: _,
      onSelectNext: _,
      onSelectPrev: _,
    } = _,
    _ = _ === _,
    _ = () => {
      _ || _ || _(_);
    };
  return _(
    _,
    (0, _.jsx)(_, {
      bDisabled: _,
    }),
    {
      role: `radio`,
      "aria-checked": _,
      "aria-disabled": _,
      "data-radio-id": _,
      onClick: _,
      onKeyDown: (_) => {
        if (!_)
          switch (_.key) {
            case ` `:
              _(), _.preventDefault(), _.stopPropagation();
              break;
            case `ArrowRight`:
            case `ArrowDown`:
              _(_), _.preventDefault(), _.stopPropagation();
              break;
            case `ArrowLeft`:
            case `ArrowUp`:
              _(_), _.preventDefault(), _.stopPropagation();
              break;
          }
      },
      tabIndex: _ ? 0 : -1,
      ref: _,
      children: _,
    },
    {
      bSelected: _,
      bDisabled: _,
    },
  );
}
function _(_) {
  let { children: _, className: _, bDisabled: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    cursor: `default`,
    gap: `2`,
    className: (0, _.default)(_, _ && `uJHS-6Gu0K0-`),
    ..._,
    children: [
      (0, _.jsx)(`div`, {
        className: _,
      }),
      (0, _.jsx)(_, {
        children: _,
      }),
    ],
  });
}
var _ = Object.assign(_, {
    Root: _,
    Option: _,
  }),
  _ = (0, _.createContext)(null);
export { _ };
