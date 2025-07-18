import { t as _ } from "./chunk-WR3CWS4N.js";
import { d as h } from "./chunk-ZRI7PDSW.js";
import { p as W } from "./chunk-XLCIZFKQ.js";
import { a as U } from "./chunk-BFLRY2L2.js";
import { e as l } from "./chunk-P2SFXYM5.js";
var o = l(U(), 1);
var d = "./strings_brazilian-V4KQ2QBA.json";
var p = "./strings_bulgarian-AELWGTCA.json";
var c = "./strings_czech-6GM4ZKAA.json";
var S = "./strings_danish-7MCTBXCA.json";
var b = "./strings_dutch-66JDWCCA.json";
var f = "./strings_english-SG6S66DA.json";
var D = "./strings_finnish-C74TYNBA.json";
var y = "./strings_french-HQPBRKBA.json";
var w = "./strings_german-MCLIG5DA.json";
var k = "./strings_greek-2MM6RSDA.json";
var v = "./strings_hungarian-43G46GBA.json";
var z = "./strings_indonesian-GHXWW6AA.json";
var E = "./strings_italian-2D2IFGCA.json";
var C = "./strings_japanese-S4DSIZDA.json";
var R = "./strings_korean-LDE6W7BA.json";
var B = "./strings_latam-BHL4WZCA.json";
var N = "./strings_norwegian-DKEZ2JCA.json";
var j = "./strings_polish-TCKKL7AA.json";
var P = "./strings_portuguese-X3J4PYAA.json";
var x = "./strings_romanian-7NIEU7AA.json";
var L = "./strings_russian-W6QMRMBA.json";
var O = "./strings_schinese-JLDE57AA.json";
var q = "./strings_spanish-LXVAVRBA.json";
var A = "./strings_swedish-XCKY53AA.json";
var I = "./strings_tchinese-OOZZIFBA.json";
var T = "./strings_thai-FYVYPVDA.json";
var V = "./strings_turkish-OGV743AA.json";
var F = "./strings_ukrainian-R5MYSABA.json";
var J = "./strings_vietnamese-DY4PVTCA.json";
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
e.schinese = O;
e.spanish = q;
e.swedish = A;
e.tchinese = I;
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
