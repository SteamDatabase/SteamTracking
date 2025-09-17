import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
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
export { _, _ };
