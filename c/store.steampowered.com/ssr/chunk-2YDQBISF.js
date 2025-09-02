import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_(), 1);
var _ = _(_());
function _(_, _) {
  _ != null &&
    (typeof _ == "function" ? _(_) : "current" in _ && (_.current = _));
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
            if (_) typeof _ == "function" ? _(_) : (_.current = _);
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
  let _ = _.useRef(null),
    _ = _(_, _);
  return {
    refWithValue: _,
    refForElement: _,
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
function _(_, _) {
  _.useLayoutEffect(() => {
    if (!(!_ || !_)) return _.classList.add(_), () => _.classList.remove(_);
  }, [_, _]);
}
function _(_, _, _, _) {
  return _(
    _,
    "message",
    function (_) {
      _.includes(_.data) && _(this, _);
    },
    _,
  );
}
function _() {
  let [, _] = _.useState(0);
  return _.useCallback(() => _((_) => _ + 1), []);
}
function _(_, _) {
  _.useLayoutEffect(() => {
    if (!_ || !_) return;
    let _ = _.Register(_);
    return () => _.Unregister();
  }, [_, _]);
}
function _(_) {
  return _;
}
function _() {}
function _(_) {
  return _.useSyncExternalStore(
    _ ? _.SyncStore : _,
    _ ? _.GetValue : _,
    _ ? _.GetValue : _,
  );
}
function _(_, _) {
  let [_, _] = _.useState(_);
  return (
    _.useEffect(() => {
      if (_) {
        _(!0);
        return;
      } else {
        let _ = window.setTimeout(() => _(!1), _);
        return () => window.clearTimeout(_);
      }
    }, [_, _]),
    _
  );
}
function _(_, _) {
  return _(_, _) || _;
}
function _(_ = !1) {
  let [_, _] = _.useState(_),
    _ = _.useCallback(() => _(!0), []),
    _ = _.useCallback(() => _(!1), []);
  return [_, _, _];
}
function _(_, ..._) {
  let _ = [],
    _ = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    _ = 0,
    _;
  for (; (_ = _.exec(_)); ) {
    (_ += _[0].length), _.push(_[1]);
    let _ = parseInt(_[2]),
      _ = _[3] || "",
      _ = _(_, ..._),
      _ = (_ >= 1 && _ <= _.length ? _[_ - 1] : null)
        ? _.cloneElement(_[_ - 1], {}, _ ? _ : null)
        : _;
    _.push(_);
  }
  return _.push(_.slice(_)), _.createElement(_.Fragment, null, ..._);
}
export { _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _ };
