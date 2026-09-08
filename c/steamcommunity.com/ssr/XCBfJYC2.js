var _ = (function (_) {
  return (
    (_[(_.k_ESteamRealmUnknown = 0)] = `k_ESteamRealmUnknown`),
    (_[(_.k_ESteamRealmGlobal = 1)] = `k_ESteamRealmGlobal`),
    (_[(_.k_ESteamRealmChina = 2)] = `k_ESteamRealmChina`),
    _
  );
})({});
function _(_) {
  return _ === _.k_ESteamRealmChina;
}
var _ = _(_()),
  _ = !1,
  _ = !1,
  _ = !1,
  _ = !1;
function _() {
  return _ || _(), _;
}
function _() {
  return _ || _(), _;
}
function _() {
  return _() || _();
}
function _() {
  if (!navigator?.userAgent) return;
  let _ = navigator.userAgent.match(/Valve Steam ([^\/]*)\//);
  if (_ && _.length == 2) return _[1];
}
function _(_, _) {
  return !!(
    (window &&
      window.location &&
      window.location.href &&
      window.location.href.match(`[?&]` + _ + `=`)) ||
    (typeof navigator < `u` &&
      navigator.userAgent &&
      navigator.userAgent.toLowerCase().indexOf(_.toLowerCase()) != -1)
  );
}
function _() {
  let _ = navigator,
    _ = _ && _.maxTouchPoints && _.maxTouchPoints > 1;
  (_ = _(`Valve Steam Tenfoot`, `force_tenfoot_client_view`)),
    _(`Valve Steam GameOverlay`, `force_overlay_view`),
    _ || _(`Valve Steam Client`, `force_client_view`),
    _(`macintosh`, `force_mac_view`),
    (_ =
      _(`iphone`, `force_ios_view`) ||
      _(`ipad`, `force_ios_view`) ||
      _(`ipod`, `force_ios_view`) ||
      (_(`macintosh`, `force_ios_view`) && _)),
    (_ = _(`android`, `force_android_view`)),
    (_ = !0);
}
var _ = _.createContext({}),
  _ = (_) => {
    let _ = _.useContext(_);
    return (
      _(
        _?.bSuppressAssert || _.IN_GAMEPADUI !== void 0,
        `Trying to use ConfigContext without a provider!  Add ConfigContextRoot to application.`,
      ),
      _
    );
  };
function _(_) {
  let { IN_GAMEPADUI: _, IN_DESKTOPUI: _, IN_VR: _, children: _ } = _,
    _ = _({
      bSuppressAssert: !0,
    }),
    _ = _()?.startsWith(`Gamepad VR`) ?? !1,
    _ = _.useMemo(
      () => ({
        IN_GAMEPADUI: _ ?? _?.IN_GAMEPADUI ?? _()?.startsWith(`Gamepad`) ?? !1,
        IN_DESKTOPUI: _ ?? _?.IN_DESKTOPUI ?? !1,
        IN_VR: _ ?? _?.IN_VR ?? _,
      }),
      [_, _, _, _, _],
    );
  return _.createElement(
    _.Provider,
    {
      value: _,
    },
    _,
  );
}
function _(_) {
  return _(_)?.IN_GAMEPADUI;
}
function _(_) {
  return _(_)?.IN_DESKTOPUI;
}
function _(_) {
  return _(_)?.IN_VR;
}
function _() {
  return _.EREALM === _.k_ESteamRealmChina;
}
function _() {
  return _.PLATFORM == `windows`;
}
function _() {
  return _.PLATFORM == `macos`;
}
function _() {
  return _.PLATFORM == `linux`;
}
function _() {
  return _.IN_CHROMEOS;
}
function _() {
  return _.IS_STEAMOS;
}
function _(_, _) {
  return _.length != 0 && _.startsWith(_);
}
var _ = `unknown`;
function _() {
  if (!window || !window.location || !window.location.href)
    return console.warn(`Unable to determine base url!`), _;
  let _ = window.location.href;
  return _(_, _.STORE_BASE_URL)
    ? _.STORE_BASE_URL
    : _(_, _.COMMUNITY_BASE_URL)
      ? _.COMMUNITY_BASE_URL
      : _(_, _.CHAT_BASE_URL)
        ? _.CHAT_BASE_URL
        : _(_, _.PARTNER_BASE_URL)
          ? _.PARTNER_BASE_URL
          : _(_, _.HELP_BASE_URL)
            ? _.HELP_BASE_URL
            : _(_, _.STEAMTV_BASE_URL)
              ? _.STEAMTV_BASE_URL
              : _(_, _.STATS_BASE_URL)
                ? _.STATS_BASE_URL
                : _(_, _.INTERNAL_STATS_BASE_URL)
                  ? _.INTERNAL_STATS_BASE_URL
                  : _(_, _.STORE_CHECKOUT_BASE_URL)
                    ? _.STORE_CHECKOUT_BASE_URL
                    : _(_, `https://steamloopback.host`)
                      ? `https://steamloopback.host`
                      : ``;
}
function _() {
  return `community`;
}
function _(_, _) {
  _ != null &&
    (typeof _ == `function` ? _(_) : `current` in _ && (_.current = _));
}
function _(..._) {
  return _.useCallback((_) => {
    for (let _ of _) _(_, _);
  }, _);
}
function _(..._) {
  if (!(!_ || _.length === 0))
    return _.length === 1
      ? _[0]
      : (_) =>
          _.forEach((_) => {
            if (_) typeof _ == `function` ? _(_) : (_.current = _);
            else return;
          });
}
function _(_, _) {
  let _ = _.useRef(void 0);
  return _.useCallback((_) => {
    _.current && _.current(), (_.current = _(_));
  }, _);
}
function _(_) {
  let _ = _.useRef(null);
  return {
    refWithValue: _,
    refForElement: _(_, _),
  };
}
function _(_, _) {
  let _ = _.useRef(!1);
  _.useLayoutEffect(
    () => () => {
      _.current && _(_, void 0);
    },
    [_],
  ),
    _.useLayoutEffect(() => {
      (_ || _.current) && (_(_, _), (_.current = !!_));
    }, [_, _]);
}
function _(_, _, _, _) {
  _.useEffect(() => {
    let _ = _ && `current` in _ ? _.current : _;
    if (!(!_ || !_))
      return _.addEventListener(_, _, _), () => _.removeEventListener(_, _);
  }, [_, _, _]);
}
function _(_, _, _) {
  return _(
    (_) => {
      if (!(!_ || !_))
        return _.addEventListener(_, _, _), () => _.removeEventListener(_, _);
    },
    [_, _],
  );
}
function _(_, _, _, _) {
  _.useEffect(() => {
    if (!(!_ || !_))
      return _.addEventListener(_, _, _), () => _.removeEventListener(_, _, _);
  }, [_, _, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    `message`,
    _.useCallback(
      function (_) {
        _.data === _ && _(_, _);
      },
      [_, _, _],
    ),
    _,
  );
}
function _() {
  let [_, _] = _.useState(!1);
  return [
    _,
    {
      onPointerEnter: _.useCallback((_) => {
        (!_ || !(`pointerType` in _) || _.pointerType === `mouse`) && _(!0);
      }, []),
      onPointerLeave: _.useCallback(
        () =>
          window.sessionStorage &&
          window.sessionStorage.getItem(`DEBUG_StickyHovers`) != `true` &&
          _(!1),
        [],
      ),
    },
  ];
}
function _(_) {
  let _ = _.useRef(null);
  return (
    _.useEffect(() => {
      _ &&
        _.current &&
        _.current.focus({
          preventScroll: !0,
        });
    }, [_, _]),
    _
  );
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
