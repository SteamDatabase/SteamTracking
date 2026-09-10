_();
var _ = _({
    TextLink: () => _,
    TextLinkButton: () => _,
    Truncate: () => _,
    "Underline-always": () => _,
    "Underline-auto": () => _,
    "Underline-hover": () => _,
    "Underline-never": () => _,
    default: () => _,
  }),
  _ = `tEcMq-I-lRg-`,
  _ = `lIObVcVDNR8-`,
  _ = `_3313PM0GCHI-`,
  _ = `EuZlR-CTcaY-`,
  _ = `ZVurbohLIZM-`,
  _ = `MhcW6UA5-LA-`,
  _ = `kyBbJiUN23c-`,
  _ = {
    TextLink: _,
    TextLinkButton: _,
    Truncate: _,
    "Underline-always": `EuZlR-CTcaY-`,
    "Underline-never": `ZVurbohLIZM-`,
    "Underline-auto": `MhcW6UA5-LA-`,
    "Underline-hover": `kyBbJiUN23c-`,
  },
  _ = _();
function _(_) {
  let { underline: _ = `auto`, focusable: _, navProps: _, ..._ } = _,
    _ = _(),
    _ = _ ?? _?.focusable ?? !!_.href,
    _ = _(
      {
        ..._,
        underline: _,
        className: _,
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
var _ = [
  ..._,
  {
    prop: `underline`,
    className: (_) => _[`Underline-${_}`],
  },
];
function _(_) {
  let { underline: _ = `auto`, focusable: _, navProps: _, ..._ } = _,
    _ = _(),
    _ = _ ?? _?.focusable ?? !!_.onClick,
    _ = (0, _.jsx)(`span`, {
      role: `button`,
      ..._(
        {
          ..._,
          underline: _,
          className: _,
        },
        _,
      ),
    });
  return _ && (_ || _)
    ? (0, _.jsx)(_, {
        ...(_ || {}),
        focusable: _,
        children: _,
      })
    : _;
}
export { _, _ };
