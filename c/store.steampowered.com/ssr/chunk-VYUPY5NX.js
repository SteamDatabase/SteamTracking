import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = _.createContext(void 0),
  _ = _.Provider,
  _ = () => {
    let _ = _.useContext(_);
    if (!_)
      throw new Error(
        "called useActiveServiceTransportContext outside of ServiceTransportProvider",
      );
    return _;
  };
function _(_) {
  let { useStorage: _, children: _ } = _,
    _,
    _;
  if ("useActiveCMInterface" in _) _ = _ = _.useActiveCMInterface;
  else if ("useActiveSteamInterface" in _) _ = _.useActiveSteamInterface;
  else
    return (
      _(
        _,
        "neither useActiveCMInterface nor useActiveSteamInterface were provided",
      ),
      _
    );
  let _ = _.useMemo(
    () => ({
      useActiveSteamInterface: _,
      useActiveCMInterface: _,
      useStorage: _,
    }),
    [_, _, _],
  );
  return _.createElement(
    _,
    {
      value: _,
    },
    _,
  );
}
var _ = () => _().useActiveSteamInterface()?.GetServiceTransport(),
  _ = () => _().useActiveSteamInterface().GetAnonymousServiceTransport(),
  _ = () => _().useStorage(),
  _ = () => _().useActiveSteamInterface();
export { _, _, _, _, _ };
