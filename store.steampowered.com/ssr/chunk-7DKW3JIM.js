const CLSTAMP = 9715040;

import { d as t, e as _ } from "./chunk-UKC4WXIL.js";
import { i as r } from "./chunk-O5D3JVGU.js";
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
