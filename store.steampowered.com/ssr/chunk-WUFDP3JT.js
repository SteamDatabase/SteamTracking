const CLSTAMP = 9406869;

import { a as p } from "./chunk-RGIGYI2H.js";
import { g as u } from "./chunk-ZUI3JXBC.js";
function y(e, ...r) {
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
function d() {
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
  return { BuildRouteURL: y, FetchFromAPIRoute: e, RouteURL_t: "" };
}
var { BuildRouteURL: h, FetchFromAPIRoute: c, RouteURL_t: f } = d();
var M = p({ Methods: ["POST"] });
async function A(e) {
  return c("/wishlist/action/reorder", {
    method: "POST",
    body: JSON.stringify({ rgApps: e }),
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
function U(e, r, o) {
  u(r >= 0 && r < e.length, `Invalid source index: ${r} items: ${e.length}`),
    u(o >= 0 && o < e.length, `Invalid target index: ${o} items: ${e.length}`);
  let t = e.slice(),
    s = t.splice(r, 1);
  t.splice(o, 0, ...s);
  let n = [];
  return (
    t.forEach((i, R) => {
      let a = R + 1;
      i.priority != a && ((i.priority = a), n.push(R));
    }),
    { rgNewItems: t, rgChangedIndicies: n }
  );
}
export { h as a, M as b, A as c, U as d };
