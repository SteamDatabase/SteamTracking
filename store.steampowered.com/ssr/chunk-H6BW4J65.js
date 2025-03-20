const CLSTAMP = 9621725;

import { y as t, z as _ } from "./chunk-FLM2RWKS.js";
import { i as r } from "./chunk-K34HL7TB.js";
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
function d(n, e) {
  n.Body().set_data_request(t.fromObject(e));
}
export { l as a, a as b, d as c };
