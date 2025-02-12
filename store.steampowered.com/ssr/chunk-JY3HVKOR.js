const CLSTAMP = 9528552;

import { y as t, z as _ } from "./chunk-W37LTHRO.js";
import { g as r } from "./chunk-DZQUBPPO.js";
function l(n, e) {
  n.Body().set_context(a(e));
}
function a(n) {
  let e = new _();
  return (
    n || e.set_country_code(r.COUNTRY),
    e.set_language(r.LANGUAGE),
    r.EREALM != 0 && e.set_steam_realm(r.EREALM),
    e
  );
}
function p(n, e) {
  n.Body().set_data_request(t.fromObject(e));
}
export { l as a, a as b, p as c };
