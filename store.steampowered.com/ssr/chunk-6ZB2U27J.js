import { b as l } from "./chunk-UASR744O.js";
import { r as o, w as s } from "./chunk-5YCHQL3Y.js";
import { e as i } from "./chunk-TBGOSV3U.js";
import { m as a } from "./chunk-IN63BXCF.js";
function u(t) {
  return ["PlayerLinkDetails", t];
}
function y(t, r) {
  let e =
    typeof r == "number"
      ? o.InitFromAccountID(r, a.EUNIVERSE).ConvertTo64BitString()
      : r;
  return {
    queryKey: u(e),
    queryFn: async () => {
      if (e) {
        let n = await t.load(e);
        return delete n?.private_data?.account_name, n;
      }
      return null;
    },
    enabled: !!e,
  };
}
function L(t) {
  let r = s(),
    e = l(r);
  return i(y(e, t));
}
export { y as a, L as b };
