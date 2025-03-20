const CLSTAMP = 9621725;

import { m as R, n as y } from "./chunk-K34HL7TB.js";
import { a as w } from "./chunk-LTXTEHOA.js";
import { d as h } from "./chunk-GT4J6GNR.js";
var l;
l ??= new Set();
async function A() {
  await Promise.all(l);
}
function C(t) {
  (l ??= new Set()), l.add(t);
}
var S = h(w(), 1);
function d(t, ...a) {
  return (
    a.length == 0 ||
      (t = t.replace(/%(?:(\d+)\$)?s/g, function (p, i) {
        if (i <= a.length && i >= 1) {
          let g = a[i - 1];
          return String(g ?? "");
        }
        return p;
      })),
    t
  );
}
function b(t) {
  let a = new Map();
  async function p() {
    await y();
    let n = f(),
      r = new Set(["english"]);
    for (let e of n.languages)
      r.add(e.strLanguage), e.strFallback && r.add(e.strFallback);
    return Promise.all(
      Array.from(r).map((e) =>
        t(e).then((o) => {
          if (!o) return;
          let s = new Map();
          for (let [u, c] of Object.entries(o)) s.set("#" + u, c);
          a.set(e, s);
        }),
      ),
    );
  }
  let i = p(),
    g = !1;
  i.then(() => (g = !0)), C(i);
  function L(n, r) {
    let [e, ...o] = r,
      s =
        a.get(e.strLanguage)?.get(n) ??
        a.get(e.strFallback ?? "english")?.get(n);
    return (
      s ||
      (o.length === 0
        ? (console.error("Couldn't find localization key", n), n)
        : L(n, o))
    );
  }
  return {
    Localize(n, ...r) {
      let e = f().languages,
        o = L(n, e);
      return d(o, ...r);
    },
    LocalizeReact(n, ...r) {
      let e = this.Localize(n);
      if (e === n) return e;
      let o = [],
        s = /(.*?)%(\d+)\$s/g,
        u = 0,
        c;
      for (; (c = s.exec(e)); ) {
        (u += c[0].length), o.push(c[1]);
        let m = parseInt(c[2]);
        m >= 1 && m <= r.length && o.push(r[m - 1]);
      }
      return (
        o.push(e.slice(u)),
        S.default.createElement(S.default.Fragment, null, ...o)
      );
    },
    LocalizeInSpecificLang(n, r, ...e) {
      let o = L(r, [n]);
      return d(o, ...e);
    },
    Ready() {
      return i;
    },
    IsReady() {
      return g;
    },
  };
}
function f() {
  if (!("SSR" in window)) throw "SSR missing";
  return (
    window.SSR.renderContext?.localizationSettings ?? {
      languages: [{ strLanguage: "english", eSource: 5, strISOCode: "en" }],
    }
  );
}
function O() {
  return f().languages.map((t) => x(t.strISOCode));
}
function x(t) {
  return t.length == 2 ? `${t}-${R.country_code}` : t;
}
export { A as a, C as b, b as c, f as d, O as e };
