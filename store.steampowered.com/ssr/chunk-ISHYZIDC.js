const CLSTAMP = 9745740;

import { g as r, h as s } from "./chunk-RVORUIT3.js";
import { j as o } from "./chunk-J54OJ3XM.js";
function B(t, e) {
  t.Body().set_context(a(e));
}
function a(t) {
  let e = new s();
  return (
    t || e.set_country_code(o.COUNTRY),
    e.set_language(o.LANGUAGE),
    o.EREALM != 0 && e.set_steam_realm(o.EREALM),
    e
  );
}
function _(t, e) {
  t.Body().set_data_request(r.fromObject(e));
}
export { B as a, a as b, _ as c };
