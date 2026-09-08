var _ = _(_(), 1),
  _ = _();
function _() {
  return _.createRef();
}
var _ = _(`div`, {
    bDOMElementFocusByDefault: !1,
  }),
  _ = _(`button`, {
    bActivateByDefault: (_) => _.type === `submit`,
  }),
  _ = _(`a`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _ = _.forwardRef(function (_, _) {
    let { href: _ = `#`, ..._ } = _;
    return (0, _.jsx)(_, {
      ref: _,
      href: _,
      ..._,
    });
  }),
  _ = _(`input`),
  _ = _(`textarea`);
_(`img`, {
  bDOMElementFocusByDefault: !1,
}),
  _(`label`, {
    bActivateByDefault: !0,
    bDOMElementFocusByDefault: !1,
  }),
  _(`section`, {
    bFocusableByDefault: !1,
  }),
  _(`form`, {
    bFocusableByDefault: !1,
  }),
  _(`summary`, {
    bActivateByDefault: !0,
  }),
  _(`details`, {
    bFocusableByDefault: !1,
  });
function _(_, _, _ = !1) {
  _.useEffect(() => {
    let _ = _.current;
    _ && (_ ? _.Activate(_) : _.Deactivate());
  }, [_, _, _]);
}
export { _, _, _, _, _, _, _ };
