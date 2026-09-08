var _ = _(_(), 1),
  _ = _(),
  _ = _.createContext(!1);
function _(_, _, _) {
  return (0, _.useMemo)(
    () =>
      _
        ? _
        : async (_) => {
            if (!(_ && (_(_), _.defaultPrevented)) && !_.ctrlKey)
              return _.preventDefault(), _(_);
          },
    [_, _, _],
  );
}
function _(_) {
  let _ = `steam://`;
  return _(_.EREALM) && (_ = `steamchina://`), _ + _;
}
var _ = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  _ = _.memo(function (_) {
    let {
        _: _,
        external: _,
        openInNewWindow: _,
        onClick: _,
        snr: _,
        gamepadFocusable: _ = !0,
        ref: _,
        ..._
      } = _,
      _ = _,
      _ = _(),
      _ = _().manifest,
      _ = _(),
      _ = _.useContext(_);
    _ &&
      (_ = _(
        typeof _ == `boolean`
          ? _
          : {
              ..._,
              ..._,
            },
        _,
      ));
    let { bIsExternal: _, targetRoute: _ } = _.useMemo(() => {
      let _ = _;
      if (_ || _ || _)
        return {
          bIsExternal: !0,
          targetRoute: _,
        };
      if (_.test(_)) {
        let _ = new URL(location.href),
          _ = new URL(_.startsWith(`//`) ? _.protocol + _ : _);
        if (_.origin !== _.origin)
          return {
            bIsExternal: !0,
            targetRoute: _,
          };
        _ = _.pathname + _.search + _.hash;
      }
      return _ === !1 ||
        _?.routes.some((_) => _.match(new RegExp(_.regex, `i`)))
        ? {
            bIsExternal: !1,
            targetRoute: _,
          }
        : {
            bIsExternal: !0,
            targetRoute: _,
          };
    }, [_, _, _, _?.routes, _]);
    _ && !_ && (_.target ??= `_top`),
      _ &&
        (_.IN_CLIENT
          ? (_ = _(`openurl/${_}`))
          : ((_.target ??= `_blank`), (_.rel ??= `noreferrer noopener`)));
    let _ = _(_, _, _);
    return (0, _.jsx)(_ && _ ? _ : `a`, {
      ref: _,
      href: _,
      onClick: _,
      ..._,
    });
  });
export { _ };
