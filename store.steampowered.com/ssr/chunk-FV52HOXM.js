const CLSTAMP = 9754532;

import { d as g, g as f } from "./chunk-6PWIKCXD.js";
import { i as C, k as p } from "./chunk-X7IQNE52.js";
import { t as y, w as c } from "./chunk-D5QYMZPL.js";
import { b as u, e as a } from "./chunk-E7MLRWUE.js";
var s = 1 / 0;
function Q() {
  let n = f(),
    e = c(),
    t = u();
  return a(l(t, e, n));
}
function b(n, e) {
  return {
    queryKey: ["CategoryHubDefinitions", e.language],
    queryFn: () => H(n, e),
    staleTime: s,
  };
}
function x(n, e, t) {
  return {
    queryKey: ["CategoryHubDefinitions", t.language, "MapByID"],
    queryFn: async () => {
      let r = await n.fetchQuery(b(e, t));
      return new Map(r.map((o) => [o.hubcategoryid, o]));
    },
    staleTime: s,
  };
}
function l(n, e, t) {
  return {
    queryKey: ["CategoryHubDefinitions", t.language, "MapByHandle"],
    queryFn: async () => {
      let r = await n.fetchQuery(b(e, t));
      return new Map(r.map((o) => [o.handle, o]));
    },
    staleTime: s,
  };
}
async function H(n, e) {
  let t = y.Init(C);
  g(e, t);
  let r = await p.GetContentHubConfig(n, t);
  if (!r.BSuccess())
    throw `Error loading category hub definitions: ${r.GetErrorMessage()}`;
  let o = r.Body().toObject().hubconfigs || [];
  return (
    o.forEach((i) => {
      !i.url_path &&
        i.type === "tagids" &&
        (i.url_path = `category/${encodeURIComponent(i.handle)}/`);
    }),
    o
  );
}
export { Q as a, x as b, l as c };
