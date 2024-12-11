const CLSTAMP = 9406869;

import { P as s, aa as c } from "./chunk-342AXII3.js";
import { a as D } from "./chunk-XWB4YTRP.js";
import { l as R, m as n } from "./chunk-D4VJXM5Y.js";
import { d as t } from "./chunk-G7GZWTND.js";
var m = t(D()),
  o = t(R());
var i = "pzmZZp2K-Ek-";
var l = t(n());
function C(f) {
  let { onClose: e, className: d, navID: g, children: p } = f,
    u = o.useCallback((a) => {
      a && a.showModal();
    }, []),
    v = o.useCallback(
      (a) => {
        a.target == a.currentTarget && e();
      },
      [e],
    ),
    r = o.useRef();
  return (
    c(r, !0, !0),
    (0, l.jsx)(s, {
      navID: g ?? "ModalDialog",
      onCancelButton: e,
      modal: !0,
      navTreeRef: r,
      children: (0, l.jsx)("dialog", {
        ref: u,
        className: (0, m.default)(i, d),
        onClose: e,
        onClick: v,
        children: p,
      }),
    })
  );
}
export { C as a };
