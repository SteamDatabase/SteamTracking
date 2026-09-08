var _ = _(_(), 1),
  _ = _(),
  _ = {
    _: `rotate( 180, 10, 10 )`,
    left: `rotate( 90, 10, 10 )`,
    right: `rotate( 270, 10, 10 )`,
  };
function _(_) {
  let { direction: _ = `down` } = _,
    _ = _[_];
  return (0, _.jsx)(_, {
    ..._,
    children: (0, _.jsx)(`path`, {
      transform: _,
      _: `M5.14541 6.89977L10.0063 12.2027L14.8671 6.89977C15.3557 6.36674 16.145 6.36674 16.6336 6.89977C17.1221 7.4328 17.1221 8.29385 16.6336 8.82688L10.8832 15.1002C10.3946 15.6333 9.60537 15.6333 9.11678 15.1002L3.36644 8.82688C2.87785 8.29385 2.87785 7.4328 3.36644 6.89977C3.85503 6.38041 4.65682 6.36674 5.14541 6.89977Z`,
      fill: `currentColor`,
    }),
  });
}
function _(_) {
  let {
      children: _,
      state: _,
      placement: _ = `bottom-end`,
      popoverWidth: _ = `dropdown`,
      popoverMaxHeight: _,
      ..._
    } = _,
    [_, _] = (0, _.useState)(null),
    [_, _] = (0, _.useState)(null),
    _ = (0, _.useMemo)(
      () =>
        _.rgOptions.findIndex((_) =>
          _.multiselect ? _.selectedValue.includes(_) : _ === _.selectedValue,
        ),
      [_.selectedValue, _.rgOptions, _.multiselect],
    ),
    _ = (0, _.useRef)(null),
    _ = {
      ..._,
      ..._,
      focusedValue: _,
      onFocusChange: _,
      refPopover: _,
      setOpen: (_) => {
        _ && _(_.multiselect ? _.selectedValue[0] : _.selectedValue),
          _.setOpen(_);
      },
      focusedIndex: _,
      onFocusedIndexChange: _,
    },
    _ = _({
      open: _.bOpen,
      onOpenChange: _.setOpen,
      width: _,
      maxHeight: _,
      placement: _,
      selectedIndex: _,
      setSelectedIndex: (_) => _.onItemSelectionChange(_.rgOptions[_]),
      activeIndex: _,
      setActiveIndex: _,
      gutter: `4`,
      interactions: {
        click: !0,
        typeahead: !0,
      },
      role: `select`,
      scroll: !0,
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_.Root, {
      state: _,
      children: _,
    }),
  });
}
function _(_) {
  let { refPopover: _ } = _(`<Select.Options>`);
  return (0, _.jsx)(_.Positioner, {
    ref: _,
    children: _.children,
  });
}
function _(_) {
  let { value: _, children: _, disabled: _, ..._ } = _,
    {
      onItemSelectionChange: _,
      multiselect: _,
      selectedValue: _,
      maxSelected: _,
    } = _(`<SelectTrigger>`),
    _ = typeof _ == `string` ? _ : void 0,
    _ = !1,
    _ = !1;
  _
    ? ((_ = Array.isArray(_) && _.includes(_)),
      (_ = !!_ && Array.isArray(_) && _.length >= _))
    : (_ = _ === _);
  let _ = _ || (_ && !_);
  return (0, _.jsxs)(_.Item, {
    label: _,
    onSelect: () => _(_),
    selected: _,
    disabled: _,
    ..._,
    children: [
      _ &&
        (0, _.jsxs)(_, {
          gap: `2`,
          align: `center`,
          children: [
            (0, _.jsx)(_, {
              checked: _,
              variant: `dark`,
            }),
            _,
          ],
        }),
      !_ && _,
    ],
  });
}
function _(_) {
  let { children: _, render: _ } = _,
    {
      bOpen: _,
      setOpen: _,
      selectedValue: _,
      variant: _,
      size: _,
      radius: _,
      status: _,
      rgOptions: _,
      multiselect: _,
      onClear: _,
      focusedValue: _,
      onFocusChange: _,
      onSelectionChange: _,
      clearable: _,
      focusedIndex: _,
      onItemSelectionChange: _,
      onFocusedIndexChange: _,
      refPopover: _,
      placeholder: _,
      maxSelected: _,
      ..._
    } = _(`<SelectTrigger>`),
    _ = {
      tabIndex: 0,
      role: `combobox`,
      onClick: () => _(!_),
      children: _,
    },
    _ = _ ? Array.isArray(_) && _.length > 0 : !!_,
    _ = _(
      _,
      (0, _.jsx)(_, {
        afterContent:
          _ && _
            ? (0, _.jsx)(_, {
                onClick: _,
                cursor: `pointer`,
                hitSlop: !0,
              })
            : (0, _.jsx)(_, {}),
        variant: _(`Select`, _),
        size: _,
        radius: _,
        status: _,
        hasValue: _,
        tabIndex: 0,
        cursor: `pointer`,
        ..._,
      }),
      _,
      void 0,
    );
  return (0, _.jsx)(_.Anchor, {
    children: _,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    weight: `medium`,
    truncate: !0,
    contrast: `title`,
    children: _.children,
  });
}
function _(_) {
  return (0, _.jsx)(_, {
    contrast: `description`,
    truncate: !0,
    children: _.children,
  });
}
function _(_) {
  return _(_, !1);
}
function _(_, _) {
  let { onSelectionChange: _, selectedValue: _, ..._ } = _,
    [_, _] = (0, _.useState)(!1),
    _ = (0, _.useCallback)(
      (_) => {
        _(_), _ || _(!1);
      },
      [_, _],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        _(_ ? [] : null), _.stopPropagation(), _.preventDefault();
      },
      [_, _],
    );
  return {
    onSelectionChange: _,
    onItemSelectionChange: (0, _.useCallback)(
      (_) => {
        if (!_) _(_);
        else {
          let _ = _,
            _ = _.indexOf(_);
          if (_ === -1) _(_.concat(_));
          else return _(_.slice(0, _).concat(_.slice(_ + 1)));
        }
      },
      [_, _, _],
    ),
    onClear: _,
    bOpen: _,
    setOpen: _,
    multiselect: _,
    selectedValue: _,
    ..._,
  };
}
var _ = {
  Root: _,
  Option: _,
  Options: _,
  Trigger: _,
  Value: _,
  Placeholder: _,
};
function _(_) {
  return typeof _ == `string`
    ? _
    : typeof _ == `number`
      ? _.toString()
      : (console.error(
          `Could not use default option labeler on Select option value. Custom labeler requried`,
          _,
        ),
        ``);
}
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: _ = _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
    }),
    _ = _ != null,
    _ = _ ? _(_) : ``;
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _);
function _(_) {
  return _(_, !0);
}
var _ = _;
function _(_) {
  let {
      selectedValue: _,
      onSelectionChange: _,
      options: _,
      placeholder: _,
      getOptionLabel: _ = _,
      maxSelected: _,
      ..._
    } = _,
    _ = _({
      onSelectionChange: _,
      selectedValue: _,
      rgOptions: _,
      placeholder: _,
      maxSelected: _,
    }),
    _ = Array.isArray(_) && _.length > 0,
    _ = ``;
  if (_) {
    let _ = _.map((_) => _(_));
    _ =
      `ListFormat` in Intl
        ? new Intl.ListFormat(_().strISOCode).format(_)
        : _.join(`, `);
  }
  return (0, _.jsxs)(_.Root, {
    state: _,
    ..._,
    children: [
      (0, _.jsxs)(_.Trigger, {
        children: [
          _ &&
            (0, _.jsx)(_.Value, {
              children: _,
            }),
          !_ &&
            (0, _.jsx)(_.Placeholder, {
              children: _,
            }),
        ],
      }),
      (0, _.jsx)(_.Options, {
        children: _.rgOptions.map((_, _) =>
          (0, _.jsx)(
            _.Option,
            {
              value: _,
              children: _(_),
            },
            _,
          ),
        ),
      }),
    ],
  });
}
var _ = Object.assign(_, _),
  _ = (0, _.createContext)(null);
function _(_) {
  let _ = (0, _.useContext)(_);
  return _ || console.error(`${_} must be used within a <Select>!`), _;
}
export { _, _, _, _, _ };
