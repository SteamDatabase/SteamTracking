var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = `rFPyDezD-xE-`,
  _ = `cdNyC6dv2kE-`,
  _ = _(),
  _ = Object.assign(_, {
    Root: _,
    Content: _,
  });
function _(_) {
  let { children: _, className: _, ..._ } = _;
  return (0, _.jsx)(_.Root, {
    ..._,
    children: (0, _.jsx)(_.Content, {
      className: _,
      children: _,
    }),
  });
}
function _(_) {
  let {
      onClose: _,
      className: _,
      navID: _,
      children: _,
      allowScrollBehind: _,
      ..._
    } = _,
    [_, _] = _.useState(!1),
    _ = _.useCallback((_) => {
      _ &&
        (_.showModal(),
        _.ownerDocument.defaultView &&
          _(
            _.ownerDocument.body.scrollHeight >
              _.ownerDocument.defaultView.innerHeight,
          ));
    }, []),
    _ = _.useCallback(
      (_) => {
        _.target == _.currentTarget && _(`backdropclick`);
      },
      [_],
    );
  return (0, _.jsx)(_, {
    navID: _ ?? `ModalDialog`,
    onClose: _,
    children: (0, _.jsx)(`dialog`, {
      ref: _,
      className: (0, _.default)(_, !_ && _ && `aHbF6AHXFR4-`, _),
      onClose: () => _(`onclose`),
      onClick: _,
      ..._,
      children: (0, _.jsx)(_, {
        children: _,
      }),
    }),
  });
}
function _(_) {
  let { navID: _, onClose: _, children: _ } = _,
    _ = _.useCallback(() => _(`cancelbutton`), [_]),
    _ = _.useRef(void 0);
  return (
    _(_, !0, !0),
    _()
      ? (0, _.jsx)(_, {
          navID: _ ?? `ModalDialog`,
          onCancelButton: _,
          modal: !0,
          navTreeRef: _,
          children: _,
        })
      : (0, _.jsx)(_.Fragment, {
          children: _,
        })
  );
}
function _(_) {
  let { className: _, children: _ } = _;
  return (0, _.jsx)(`div`, {
    className: (0, _.default)(_, _),
    onClick: (_) => _.stopPropagation(),
    children: _,
  });
}
export { _ };
