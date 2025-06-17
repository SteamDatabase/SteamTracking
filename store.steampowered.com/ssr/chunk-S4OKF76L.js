import { g as r, h as s } from "./chunk-5O2F7XGK.js";
import { j as o } from "./chunk-Q25332SL.js";
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
