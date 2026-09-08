var _ = _(_(), 1);
function _() {
  let _ = {},
    _ = _(_);
  if (_)
    try {
      let _ = JSON.parse(_);
      _ &&
        typeof _ == `object` &&
        (_(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportWidth = {
            value: _._._,
            source: _._._,
          }),
        _(_._, `number`) &&
          _._._ > 0 &&
          (_.viewportHeight = {
            value: _._._,
            source: _._._,
          }));
    } catch (_) {
      console.error(`Failed to parse existing client hints cookie: "${_}"`);
    }
  return _;
}
function _(_) {
  let _ = {};
  _.viewportWidth &&
    (_._ = {
      _: _.viewportWidth.value,
      _: _.viewportWidth.source,
    }),
    _.viewportHeight &&
      (_._ = {
        _: _.viewportHeight.value,
        _: _.viewportHeight.source,
      }),
    Object.keys(_).length === 0 ? _(_) : _(_, JSON.stringify(_));
}
function _(_, _) {
  if (!_ || typeof _ != `object`) return !1;
  let _ = _;
  return typeof _._ != `number` || _._ === void 0
    ? !1
    : typeof _ == `string`
      ? typeof _._ === _
      : _(_._);
}
function _() {
  let _ = _();
  return (
    _.viewportWidth?.source === _.Fallback &&
      (_.viewportWidth.value = window.innerWidth),
    _.viewportHeight?.source === _.Fallback &&
      (_.viewportHeight.value = window.innerHeight),
    _
  );
}
var _ = _(),
  _ = (function (_) {
    return (
      (_[(_.None = 0)] = `None`),
      (_[(_.Header = 1)] = `Header`),
      (_[(_.Fallback = 2)] = `Fallback`),
      _
    );
  })({}),
  _ = (0, _.createContext)({});
function _(_) {
  let [_] = (0, _.useState)(_);
  return (
    (0, _.useEffect)(() => {
      let _ = [];
      if (_.viewportWidth?.source === 2 || _.viewportHeight?.source === 2) {
        let _ = () =>
          _({
            ..._,
            viewportWidth:
              _.viewportWidth?.source === 2
                ? {
                    value: window.innerWidth,
                    source: 2,
                  }
                : _.viewportWidth,
            viewportHeight:
              _.viewportHeight?.source === 2
                ? {
                    value: window.innerHeight,
                    source: 2,
                  }
                : _.viewportHeight,
          });
        document.addEventListener(`resize`, _),
          _.push(() => document.removeEventListener(`resize`, _));
      }
      return () => _.forEach((_) => _());
    }, [_]),
    (0, _.jsx)(_, {
      value: _,
      children: _.children,
    })
  );
}
function _() {
  return (0, _.useContext)(_);
}
export { _, _ };
