_();
var _ = _();
function _(_) {
  return (0, _.jsx)(_, {
    ..._,
    viewBoxSize: 12,
    children: (0, _.jsx)(`path`, {
      _: `M10.7068 2.46964L9.53012 1.29297L6.00012 4.81964L2.47012 1.29297L1.29346 2.46964L4.82012 5.99964L1.29346 9.52964L2.47012 10.7063L6.00012 7.17964L9.53012 10.7063L10.7068 9.52964L7.18012 5.99964L10.7068 2.46964Z`,
      fill: `currentColor`,
    }),
  });
}
var _ = _(_(), 1),
  _ = _({
    Clickable: () => _,
    ControlBox: () => _,
    Disabled: () => _,
    Focusable: () => _,
    Hoverable: () => _,
    "Size-1": () => _,
    "Size-2": () => _,
    "Size-3": () => _,
    "Variant-bare": () => _,
    "Variant-basic": () => _,
    "Variant-dim": () => _,
    "Variant-highlight": () => _,
    "Variant-inset": () => _,
    "Variant-inset-focus": () => _,
    "Variant-inset-glass": () => _,
    "Variant-underline": () => _,
    default: () => _,
  }),
  _ = `Fn08FaIrTv4-`,
  _ = `HnEaqdWTeoM-`,
  _ = `uvMq4Z5tbyE-`,
  _ = `UQqUC6sKvjE-`,
  _ = `_3iK9RtloeNU-`,
  _ = `_3bnbAhXFQpc-`,
  _ = `_2Mm-osVPrVw-`,
  _ = `PgQLUbneMyk-`,
  _ = `dAY68bR6VYY-`,
  _ = `_55ClRagjKfI-`,
  _ = `pXN5O3YW9VE-`,
  _ = `yMOo9ZLp2rI-`,
  _ = `XErSNxxGDFg-`,
  _ = `CXXoYYvuiEQ-`,
  _ = `kWN4eyLc82I-`,
  _ = `wADIJe9yvFU-`,
  _ = {
    "Variant-basic": `Fn08FaIrTv4-`,
    "Size-3": `HnEaqdWTeoM-`,
    "Variant-inset": `uvMq4Z5tbyE-`,
    "Variant-inset-focus": `UQqUC6sKvjE-`,
    Focusable: _,
    "Variant-inset-glass": `_3bnbAhXFQpc-`,
    "Variant-underline": `_2Mm-osVPrVw-`,
    "Variant-dim": `PgQLUbneMyk-`,
    "Variant-highlight": `dAY68bR6VYY-`,
    "Variant-bare": `_55ClRagjKfI-`,
    ControlBox: _,
    Hoverable: _,
    Clickable: _,
    Disabled: _,
    "Size-1": `kWN4eyLc82I-`,
    "Size-2": `wADIJe9yvFU-`,
  };
function _(_) {
  let { children: _, beforeContent: _, afterContent: _, hasValue: _, ..._ } = _;
  return (0, _.jsxs)(_, {
    ..._(_),
    align: `center`,
    "data-has-value": !!_,
    children: [
      _ &&
        (0, _.jsx)(_, {
          paddingRight: `2`,
          children: _,
        }),
      (0, _.jsx)(_, {
        flexGrow: `1`,
        minWidth: `0`,
        children: _,
      }),
      _ &&
        (0, _.jsx)(_, {
          paddingLeft: `2`,
          children: _,
        }),
    ],
  });
}
function _(_) {
  let {
      variant: _ = `basic`,
      size: _ = `2`,
      radius: _,
      focusable: _ = !0,
      hoverable: _ = !0,
      clickable: _ = !0,
      disabled: _,
      className: _,
      status: _,
      ..._
    } = _,
    _ = _ === `underline` ? `none` : _;
  return _(
    {
      ..._,
      radius: _,
      "data-status": _,
      className: (0, _.default)(
        _,
        _ && !_ && `_3iK9RtloeNU-`,
        _ && !_ && `yMOo9ZLp2rI-`,
        _ && !_ && `XErSNxxGDFg-`,
        _ && `CXXoYYvuiEQ-`,
        _[`Variant-${_}`],
        _[`Size-${_}`],
        _,
      ),
    },
    _,
  );
}
export { _, _, _ };
