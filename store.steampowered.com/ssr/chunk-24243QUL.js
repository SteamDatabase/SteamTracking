import { b as c } from "./chunk-MI57ZERC.js";
import { a } from "./chunk-R2BMK7SA.js";
import { h as s } from "./chunk-I2IQXERY.js";
var f = a({ Methods: ["POST"] });
async function g(t) {
  return c("/wishlist/action/reorder", {
    method: "POST",
    body: JSON.stringify({ rgApps: t }),
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
function R(t, r, e) {
  s(r >= 0 && r < t.length, `Invalid source index: ${r} items: ${t.length}`),
    s(e >= 0 && e < t.length, `Invalid target index: ${e} items: ${t.length}`);
  let o = t.slice(),
    h = o.splice(r, 1);
  o.splice(e, 0, ...h);
  let i = [];
  return (
    o.forEach((n, m) => {
      let p = m + 1;
      n.priority != p && ((n.priority = p), i.push(m));
    }),
    { rgNewItems: o, rgChangedIndicies: i }
  );
}
export { f as a, g as b, R as c };
