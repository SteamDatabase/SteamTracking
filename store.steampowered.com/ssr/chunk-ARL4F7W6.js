import { d as g, g as f } from "./chunk-YNM2VFD3.js";
import { l as y, n as C } from "./chunk-TOQ2MPT3.js";
import { t as a, w as p } from "./chunk-JZPVZYYE.js";
import { b as s, e as u } from "./chunk-K6H3YACU.js";
var i = 1 / 0;
function Q() {
  let n = f(),
    e = p(),
    t = s();
  return u(b(t, e, n));
}
function c(n, e) {
  return {
    queryKey: ["CategoryHubDefinitions", e.language],
    queryFn: () => H(n, e),
    staleTime: i,
  };
}
function d(n, e, t) {
  return {
    queryKey: ["CategoryHubDefinitions", t.language, "MapByID"],
    queryFn: async () => {
      let o = await n.fetchQuery(c(e, t));
      return new Map(o.map((r) => [r.hubcategoryid, r]));
    },
    staleTime: i,
  };
}
function b(n, e, t) {
  return {
    queryKey: ["CategoryHubDefinitions", t.language, "MapByHandle"],
    queryFn: async () => {
      let o = await n.fetchQuery(c(e, t));
      return new Map(o.map((r) => [r.handle, r]));
    },
    staleTime: i,
  };
}
async function H(n, e) {
  let t = a.Init(y);
  g(e, t);
  let o = await C.GetContentHubConfig(n, t);
  if (!o.BSuccess())
    throw `Error loading category hub definitions: ${o.GetErrorMessage()}`;
  return o.Body().toObject().hubconfigs || [];
}
export { Q as a, d as b };
