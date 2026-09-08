var _ = _(_(), 1),
  _ = {
    name: `profileScreenshotView`,
    options: {
      path: `/`,
      secure: !0,
      maxAge: 10 * 365 * 24 * 60 * 60 * 1e3,
    },
    preferenceControls: {
      isTechnicallyNecessary: !0,
    },
  };
function _(_) {
  _(_, _);
}
var _ = {
  name: `workshop_preferences_v3`,
  options: {
    path: `/`,
    secure: !0,
    maxAge: 365 * 24 * 60 * 60 * 1e3,
  },
  preferenceControls: {
    isTechnicallyNecessary: !0,
  },
};
function _(_) {
  Object.keys(_).length == 0 ? _(_) : _(_, JSON.stringify(_));
}
var _ = _(),
  _ = (0, _.createContext)(void 0),
  _ = (_) => {
    let { userPreferences: _ } = _,
      [_, _] = (0, _.useState)(_),
      _ = (0, _.useCallback)(
        (_) => {
          let _ = {
            ..._,
            ..._,
          };
          _(_), _(_);
        },
        [_],
      ),
      _ = (0, _.useMemo)(
        () => ({
          preferences: _,
          setPreferences: _,
        }),
        [_, _],
      );
    return (0, _.jsx)(_.Provider, {
      value: _,
      children: _.children,
    });
  },
  _ = () => (0, _.useContext)(_);
export { _, _, _ };
