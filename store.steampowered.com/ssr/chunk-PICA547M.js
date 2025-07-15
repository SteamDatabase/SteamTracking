import { a as u } from "./chunk-3GMFNQR5.js";
import { e as i } from "./chunk-VTJ2AC5Q.js";
var e = i(u()),
  o = (0, e.createContext)(void 0),
  A = o.Provider;
function d(t) {
  let { steamid: c, children: n } = t,
    r = (0, e.useMemo)(() => ({ useActiveAccount: () => c ?? "" }), [c]);
  return (0, e.createElement)(A, { value: r }, n);
}
function v() {
  let t = (0, e.useContext)(o);
  if (!t)
    throw new Error("called useActiveAccount outside of ActiveAccountProvider");
  return t.useActiveAccount();
}
export { d as a, v as b };
