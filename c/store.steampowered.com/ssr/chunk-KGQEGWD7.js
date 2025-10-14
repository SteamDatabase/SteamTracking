import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_()),
  _ = (0, _.createContext)(void 0),
  _ = _.Provider;
function _(_) {
  let { steamid: _, children: _ } = _,
    _ = (0, _.useMemo)(
      () => ({
        useActiveAccount: () => (!_ || _ == "0" ? "" : _),
      }),
      [_],
    );
  return (0, _.createElement)(
    _,
    {
      value: _,
    },
    _,
  );
}
function _() {
  let _ = (0, _.useContext)(_);
  if (!_)
    throw new Error("called useActiveAccount outside of ActiveAccountProvider");
  return _.useActiveAccount();
}
export { _, _ };
