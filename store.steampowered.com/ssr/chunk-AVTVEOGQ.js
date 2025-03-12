const CLSTAMP = 9598355;

import { s as _ } from "./chunk-VYVGNWSX.js";
import { c as h } from "./chunk-NCBAOU5T.js";
import { m as W } from "./chunk-DNKCKFVA.js";
import { a as U } from "./chunk-OZ6CSMNN.js";
import { d as l } from "./chunk-XL5OQFLS.js";
var o = l(U(), 1);
var d = "./strings_brazilian-KIGYBQCA.json";
var p = "./strings_bulgarian-HPIWQLBA.json";
var c = "./strings_czech-QSMNRBBA.json";
var S = "./strings_danish-62L53KBA.json";
var b = "./strings_dutch-KINWFNAA.json";
var f = "./strings_english-X27PGJDA.json";
var D = "./strings_finnish-KEBUQCDA.json";
var y = "./strings_french-HIDHNSAA.json";
var w = "./strings_german-BSL36WBA.json";
var k = "./strings_greek-OA4WE7DA.json";
var v = "./strings_hungarian-M2TMRGBA.json";
var z = "./strings_indonesian-HZSSFLBA.json";
var E = "./strings_italian-PRMW6LBA.json";
var C = "./strings_japanese-RTGT5ABA.json";
var R = "./strings_korean-LP3JVYCA.json";
var B = "./strings_latam-2J45GBDA.json";
var N = "./strings_norwegian-N26KNFDA.json";
var j = "./strings_polish-BTKWHDCA.json";
var P = "./strings_portuguese-UWRMKFAA.json";
var x = "./strings_romanian-7UU6NBDA.json";
var L = "./strings_russian-63QCUHCA.json";
var q = "./strings_schinese-C7SE3ACA.json";
var A = "./strings_spanish-N6BKJWBA.json";
var I = "./strings_swedish-GA3HQMAA.json";
var O = "./strings_tchinese-A6HBN3DA.json";
var T = "./strings_thai-AH2LXRBA.json";
var V = "./strings_turkish-P2XWGWDA.json";
var F = "./strings_ukrainian-GYEGNJAA.json";
var J = "./strings_vietnamese-IEWPTPAA.json";
var e = {};
e.brazilian = d;
e.bulgarian = p;
e.czech = c;
e.danish = S;
e.dutch = b;
e.english = f;
e.finnish = D;
e.french = y;
e.german = w;
e.greek = k;
e.hungarian = v;
e.indonesian = z;
e.italian = E;
e.japanese = C;
e.korean = R;
e.latam = B;
e.norwegian = N;
e.polish = j;
e.portuguese = P;
e.romanian = x;
e.russian = L;
e.schinese = q;
e.spanish = A;
e.swedish = I;
e.tchinese = O;
e.thai = T;
e.turkish = V;
e.ukrainian = F;
e.vietnamese = J;
async function g(r) {
  if (e[r]) return (await fetch(new URL(e[r], import.meta.url))).json();
}
var a = h(g);
var t = l(W(), 1),
  M = (0, o.createContext)(-1),
  m = class extends o.Component {
    state = {};
    static getDerivedStateFromError(n) {
      return n instanceof Error
        ? { error: { message: n.message } }
        : { error: JSON.parse(JSON.stringify(n)) };
    }
    render() {
      return this.state.error === void 0
        ? this.props.children
        : (0, t.jsx)(this.props.RenderErrorComponent, {
            error: this.state.error,
            className: this.props.errorClassName,
          });
    }
  };
function jt(r) {
  let n = _(),
    i = (0, o.useContext)(M) + 1;
  (n.deepestRenderedErrorBoundaryId ?? -1) < i &&
    (n.deepestRenderedErrorBoundaryId = i);
  let u = r.RenderErrorComponent ?? De;
  return n.error && i === n.deepestRenderedErrorBoundaryId
    ? (0, t.jsx)(u, { error: n.error, className: r.errorClassName })
    : (0, t.jsx)(M.Provider, {
        value: i,
        children: (0, t.jsx)(m, {
          RenderErrorComponent: u,
          errorClassName: r.errorClassName,
          children: r.children,
        }),
      });
}
function De(r) {
  let n = r.error;
  return typeof n != "object" || n === null
    ? (0, t.jsx)("div", {
        className: r.className,
        children: (0, t.jsx)(s, { hasDetails: !1 }),
      })
    : "localizedErrorMessage" in n && typeof n.localizedErrorMessage == "string"
      ? (0, t.jsxs)("div", {
          className: r.className,
          children: [
            (0, t.jsx)(s, { hasDetails: !0 }),
            (0, t.jsx)("span", { children: n.localizedErrorMessage }),
          ],
        })
      : "stack" in n && typeof n.stack == "string"
        ? (0, t.jsxs)("div", {
            className: r.className,
            children: [
              (0, t.jsx)(s, { hasDetails: !0 }),
              (0, t.jsx)("pre", { children: n.stack }),
            ],
          })
        : (0, t.jsx)("div", {
            className: r.className,
            children: (0, t.jsx)(s, { hasDetails: !1 }),
          });
}
function s(r) {
  return (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)("span", { children: a.Localize("#SomethingWentWrong_title") }),
      r.hasDetails
        ? (0, t.jsx)("p", {
            children: a.Localize("#SomethingWentWrong_subtitle_withDetails"),
          })
        : (0, t.jsx)("p", {
            children: a.Localize("#SomethingWentWrong_subtitle_noDetails"),
          }),
    ],
  });
}
export { jt as a };
