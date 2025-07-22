import { d as f, g as a } from "./chunk-DQ3BV63O.js";
import { l as p, n as g } from "./chunk-JW7T2CRK.js";
import { t as C, w as u } from "./chunk-YZ7EZJUY.js";
import { b as i, e as s } from "./chunk-ID2H2UTY.js";
var y = 1 / 0;
function d() {
  let n = a(),
    e = u(),
    t = i();
  return s(b(t, e, n));
}
function x() {
  let n = a(),
    e = u(),
    t = i();
  return s(H(t, e, n));
}
function c(n, e) {
  return {
    queryKey: ["CategoryHubDefinitions", e.language],
    queryFn: () => _(n, e),
    staleTime: y,
  };
}
function b(n, e, t) {
  return {
    queryKey: ["CategoryHubDefinitions", t.language, "MapByID"],
    queryFn: async () => {
      let o = await n.fetchQuery(c(e, t));
      return new Map(o.map((r) => [r.hubcategoryid, r]));
    },
    staleTime: y,
  };
}
function H(n, e, t) {
  return {
    queryKey: ["CategoryHubDefinitions", t.language, "MapByHandle"],
    queryFn: async () => {
      let o = await n.fetchQuery(c(e, t));
      return new Map(o.map((r) => [r.handle, r]));
    },
    staleTime: y,
  };
}
async function _(n, e) {
  let t = C.Init(p);
  f(e, t);
  let o = await g.GetContentHubConfig(n, t);
  if (!o.BSuccess())
    throw `Error loading category hub definitions: ${o.GetErrorMessage()}`;
  return o.Body().toObject().hubconfigs || [];
}
export { d as a, x as b, b as c };
