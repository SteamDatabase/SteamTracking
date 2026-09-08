var _ = _(_(), 1),
  _ = _(),
  _ = {
    resultsView: `grid`,
    priceTimeScale: `month`,
    searchSort: 0,
  },
  _ = (0, _.createContext)({
    prefs: _,
    onChange: () =>
      console.error(
        `Cannot update market display preferences. Missing provider.`,
      ),
  });
function _(_) {
  let { prefs: _, onChange: _, children: _ } = _,
    _ = (0, _.useRef)(_);
  _.current = _;
  let _ = (0, _.useMemo)(
      () => ({
        ..._,
        ..._,
      }),
      [_],
    ),
    _ = (0, _.useCallback)(
      (_) => {
        let _ = (_) => {
          let _ = {
            ..._,
          };
          for (let [_, _] of Object.entries(_)) _[_] === _ && delete _[_];
          return _;
        };
        _(
          typeof _ == `function`
            ? (_) => {
                let _ = _({
                  ..._,
                  ..._,
                });
                return _(_);
              }
            : _,
        );
      },
      [_],
    ),
    _ = (0, _.useMemo)(
      () => ({
        prefs: _,
        onChange: _,
      }),
      [_, _],
    );
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _() {
  let { prefs: _, onChange: _ } = (0, _.useContext)(_);
  return [_, _];
}
function _(_) {
  let [_, _] = _();
  return [
    _ === `resultsView` ? `grid` : _[_],
    (0, _.useCallback)(
      (_) =>
        _((_) => ({
          ..._,
          [_]: _,
        })),
      [_, _],
    ),
  ];
}
var _ = (0, _.createContext)({
  bShowAdminActions: !1,
  eligibility: {
    bEligible: !0,
  },
});
function _(_) {
  let { children: _, value: _ } = _;
  return (0, _.jsx)(_, {
    value: _,
    children: _,
  });
}
function _() {
  return (0, _.useContext)(_);
}
function _() {
  return _().bShowAdminActions;
}
function _() {
  return _().eligibility;
}
export { _, _, _, _, _, _ };
