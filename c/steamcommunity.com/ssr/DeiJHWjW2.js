_();
var _ = _(_()),
  _ = _();
function _(_) {
  let { labelledBy: _ } = _ || {},
    [_, _] = _.useState(void 0),
    _ = _.useMemo(
      () => ({
        setHeaderId: _,
      }),
      [],
    );
  return {
    headerId: _ || _,
    context: _,
  };
}
function _(_) {
  let {
      active: _,
      onDismiss: _,
      className: _,
      modalClassName: _,
      bGamepadUIScrollWithin: _,
      children: _,
      ..._
    } = _,
    { headerId: _, context: _ } = _({
      labelledBy: _[`aria-labelledby`],
    });
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: (0, _.jsx)(_, {
      active: _,
      children: (0, _.jsx)(_, {
        onEscKeypress: _,
        className: _,
        bGamepadUIScrollWithin: _,
        children: (0, _.jsx)(_, {
          role: `dialog`,
          "aria-labelledby": _,
          className: _,
          ..._,
          children: _,
        }),
      }),
    }),
  });
}
export { _ };
