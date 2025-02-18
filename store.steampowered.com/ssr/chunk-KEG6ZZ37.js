const CLSTAMP = 9545617;

import { a as d } from "./chunk-4G46QXET.js";
import { r as p } from "./chunk-EC244L7F.js";
import { g as u } from "./chunk-P7FJYUXW.js";
function l(e, ...r) {
  let o = e.match(/(?:^|\/)(:[^/]+)/g);
  if (!o) return e;
  let t = e;
  return (
    o.forEach((s, n) => {
      let i = r[n];
      s.startsWith("/") && (i = "/" + i), (t = t.replace(s, i));
    }),
    t
  );
}
function c() {
  async function e(r, o) {
    let t = await fetch(r, o);
    if (t.status > 399) {
      let s = await t.text();
      try {
        s = JSON.parse(s);
      } catch {}
      throw s;
    }
    return t.json();
  }
  return {
    BuildRouteURL: l,
    FetchFromAPIRoute: e,
    NavigateToRoute: p,
    RouteURL_t: "",
  };
}
var {
  BuildRouteURL: P,
  FetchFromAPIRoute: y,
  NavigateToRoute: g,
  RouteURL_t: x,
} = c();
var U = d({ Methods: ["POST"] });
async function A(e) {
  return y("/wishlist/action/reorder", {
    method: "POST",
    body: JSON.stringify({ rgApps: e }),
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
function _(e, r, o) {
  u(r >= 0 && r < e.length, `Invalid source index: ${r} items: ${e.length}`),
    u(o >= 0 && o < e.length, `Invalid target index: ${o} items: ${e.length}`);
  let t = e.slice(),
    s = t.splice(r, 1);
  t.splice(o, 0, ...s);
  let n = [];
  return (
    t.forEach((i, a) => {
      let R = a + 1;
      i.priority != R && ((i.priority = R), n.push(a));
    }),
    { rgNewItems: t, rgChangedIndicies: n }
  );
}
export { P as a, U as b, A as c, _ as d };
