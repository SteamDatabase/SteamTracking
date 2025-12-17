import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  let _ = _(),
    _ = _();
  return _(_(_.GetAnonymousServiceTransport(), _, _));
}
function _(_, _, _) {
  return {
    queryKey: ["LocalizedTagNames", _],
    queryFn: async () => {
      let _ = `LocalizedTagNames2_${_}`,
        _ = await _.GetObject(_),
        _ = _.Init(_);
      _.Body().set_language(_),
        _?.version_hash && _.Body().set_have_version_hash(_.version_hash);
      let _ = await _.GetTagList(_, _),
        _;
      if (_.GetEResult() == 1)
        (_ = _.Body().toObject()), _ && _.StoreObject(_, _);
      else if (_.GetEResult() == 29) _ = _ || void 0;
      else if (_)
        console.warn(
          "Couldn't load updated tag localization, will continue with what we have from storage.",
        ),
          (_ = _);
      else throw _.GetErrorMessage();
      let _ = {};
      return (_?.tags || []).forEach(({ tagid: _, name: _ }) => (_[_] = _)), _;
    },
    staleTime: 3600 * 1e3,
  };
}
function _(_, _) {
  let { data: _ } = _(_);
  return _ && _[_];
}
var _ = [24904, 9130, 5611, 6650, 12095];
var _ = _(_());
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = _.createContext({
    AddImpression: () => {
      console.log("Impression Tracking not enabled");
    },
    BIsValid: () => !1,
  });
function _() {
  return _.useContext(_);
}
function _(_) {
  return (0, _.jsx)(_.Provider, {
    value: _.ImpressionTracker,
    children: _.children,
  });
}
function _(_) {
  let { appID: _, feature: _, depth: _, children: _ } = _,
    _ = _(_, _),
    _ = _(),
    [_, _] = _.default.useState(void 0),
    _ = _.default.useCallback(
      (_) => {
        _.isIntersecting &&
          _((_) =>
            _?.appID == _ && _?.snr == _
              ? _
              : {
                  appID: _,
                  snr: _,
                },
          );
      },
      [_, _],
    );
  (0, _.useEffect)(() => {
    _ && _.appID != null && _.AddImpression(_.appID, _.snr);
  }, [_, _]);
  let _ = _(_),
    _ = _ && (!_ || (_.appID != _ && _.snr != _)),
    _ = _(_.props.ref, _ ? _ : void 0);
  return _.default.cloneElement(_, {
    ref: _,
  });
}
export { _, _, _, _, _ };
