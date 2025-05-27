import { r as u } from "./chunk-M3UGQD2B.js";
function a(o, ...r) {
  let s = o.match(/(?:^|\/)(:[^/]+)/g);
  if (!s) return o;
  let e = o;
  return (
    s.forEach((t, R) => {
      let n = r[R];
      t.startsWith("/") && (n = "/" + n), (e = e.replace(t, n));
    }),
    e
  );
}
function i() {
  async function o(r, s) {
    let e = await fetch(r, s);
    if (e.status > 399) {
      let t = await e.text();
      try {
        t = JSON.parse(t);
      } catch {}
      throw t;
    }
    return e.json();
  }
  return {
    BuildRouteURL: a,
    FetchFromAPIRoute: o,
    NavigateToRoute: u,
    RouteURL_t: "",
  };
}
var {
  BuildRouteURL: y,
  FetchFromAPIRoute: l,
  NavigateToRoute: P,
  RouteURL_t: f,
} = i();
export { y as a, l as b };
