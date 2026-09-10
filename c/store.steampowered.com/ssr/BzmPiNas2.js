var _ = _(_(), 1),
  _ = _(),
  _ = _.forwardRef(function (_, _) {
    let {
        onExplicitFocusLevelChanged: _,
        onOKButton: _,
        onCancelButton: _,
        navRef: _,
        focusable: _,
        ..._
      } = _,
      _ = _.useRef(null),
      { fnOnOKButton: _, fnOnCancelButton: _ } = _({
        navRefPanel: _,
        onOKButton: _,
        onCancelButton: _,
        onExplicitFocusLevelChanged: _,
      }),
      _ = _(_, _);
    return (0, _.jsx)(_, {
      ..._,
      onOKButton: _,
      onCancelButton: _,
      navRef: _,
      ref: _,
      focusable: _ !== !1,
    });
  });
_.forwardRef(function (_, _) {
  let { onOKButton: _, onCancelButton: _, navRef: _, focusable: _, ..._ } = _,
    _ = _.useRef(null),
    _ = _.useRef(null),
    { fnOnOKButton: _, fnOnCancelButton: _ } = _({
      navRefPanel: _,
      onOKButton: _,
      onCancelButton: _,
      fnFocusChildren: _.useCallback((_, _) => _.FocusVisibleChild(), []),
    }),
    _ = _(_, _),
    _ = _(_, _);
  return (0, _.jsx)(_, {
    ..._,
    onOKButton: (_) => _?.(_),
    onCancelButton: _,
    navRef: _,
    ref: _,
    focusable: _ !== !1,
  });
});
function _(_) {
  let {
    navRefPanel: _,
    onOKButton: _,
    onCancelButton: _,
    onExplicitFocusLevelChanged: _,
    fnFocusChildren: _,
  } = _;
  return (
    (_ ??= _),
    {
      fnOnOKButton: _.useCallback(
        (_) => {
          let _ = _.current;
          return _?.BHasFocus() && _(_, _.detail.button)
            ? (_ && _(!0), !0)
            : _
              ? _(_)
              : !1;
        },
        [_, _, _, _],
      ),
      fnOnCancelButton: _.useCallback(
        (_) => {
          let _ = _.current;
          return _.Node().GetFocusable() == `self`
            ? _.BFocusWithin() && !_.BHasFocus() && _.TakeFocus(_.detail.button)
              ? (_ && _(!1), !0)
              : _
                ? _(_)
                : !1
            : (console.warn(
                `PanelGroup is not focusable - ignoring cancel action`,
              ),
              !1);
        },
        [_, _, _],
      ),
    }
  );
}
function _(_, _) {
  return _.ChildTakeFocus(_);
}
export { _ };
