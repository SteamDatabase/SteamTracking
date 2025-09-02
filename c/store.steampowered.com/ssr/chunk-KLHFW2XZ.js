import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  return ["PlayerLinkDetails", _];
}
function _(_, _) {
  let _ =
    typeof _ == "number"
      ? _.InitFromAccountID(_, _.EUNIVERSE).ConvertTo64BitString()
      : _;
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (_) {
        let _ = await _.load(_);
        return delete _?.private_data?.account_name, _;
      }
      return null;
    },
    enabled: !!_,
  };
}
function _(_) {
  let _ = _(),
    _ = _(_);
  return _(_(_, _));
}
export { _, _ };
