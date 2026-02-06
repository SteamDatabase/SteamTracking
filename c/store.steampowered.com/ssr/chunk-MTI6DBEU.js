import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _(_(), 1),
  _ = _(_(), 1),
  _ = (0, _.createContext)({
    instances: {},
    factories: {},
  });
function _(_, _) {
  let _ = (0, _.useContext)(_),
    _ = typeof _ == "string" ? _ : _(..._),
    _ = _;
  for (; _; ) {
    if (_ in _.instances) return _.instances[_];
    if (_ in _.factories) break;
    _ = _.parent;
  }
  let _ = (_?.factories[_] ?? _)();
  return ((_ ?? _).instances[_] = _), _;
}
var _ = _(_(), 1);
function _(_, _) {
  return new _.default(
    async (_) => {
      let _ = [..._],
        _ = await _.GetPlayerLinkDetails(_, {
          steamids: _,
        }),
        _ = new Map();
      return (
        _.Body()
          .accounts()
          .forEach((_) => {
            let _ = _.toObject();
            _.set(_.public_data.steamid, _);
          }),
        _.map((_) => _.get(_) ?? null)
      );
    },
    {
      maxBatchSize: 100,
      cache: !1,
      ..._,
    },
  );
}
function _(_) {
  return _("PlayerLinkDetails", () => _(_));
}
export { _, _ };
