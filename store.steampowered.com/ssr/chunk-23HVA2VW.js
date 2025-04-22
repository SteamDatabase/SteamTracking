const CLSTAMP = 9686915;

import { g as D } from "./chunk-5K6FDJIS.js";
import { h as P } from "./chunk-JSQE5DBY.js";
import { q as y } from "./chunk-CG2AVMMX.js";
import { o as p } from "./chunk-NSLGW32G.js";
import { a as d } from "./chunk-ASFGMT32.js";
import { d as o } from "./chunk-BWYQWJMA.js";
var u = o(d());
var s = o(d(), 1),
  _ = o(p(), 1),
  L = (0, s.createContext)({ instances: {}, factories: {} });
function f(a, i) {
  let n = (0, u.useContext)(L),
    e = typeof a == "string" ? a : y(...a),
    t = n;
  for (; t; ) {
    if (e in t.instances) return t.instances[e];
    if (e in t.factories) break;
    t = t.parent;
  }
  let r = (n.factories[e] ?? i)();
  return (n.instances[e] = r), r;
}
var m = o(P(), 1);
function k(a, i) {
  return new m.default(
    async (n) => {
      let e = [...n],
        t = await D.GetPlayerLinkDetails(a, { steamids: e }),
        c = new Map();
      return (
        t
          .Body()
          .accounts()
          .forEach((r) => {
            let l = r.toObject();
            c.set(l.public_data.steamid, l);
          }),
        e.map((r) => c.get(r) ?? null)
      );
    },
    { maxBatchSize: 100, cache: !1, ...i },
  );
}
function T(a) {
  return f("PlayerLinkDetails", () => k(a));
}
export { k as a, T as b };
