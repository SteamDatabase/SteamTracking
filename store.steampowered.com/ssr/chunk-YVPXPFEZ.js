const CLSTAMP = 9413726;

import { k as R, l as h } from "./chunk-H6MD6SRD.js";
import { d as C } from "./chunk-ENIO5D24.js";
var l;
l ??= new Set();
async function x() {
  await Promise.all(l);
}
function y(t) {
  (l ??= new Set()), l.add(t);
}
var S = C(h(), 1);
function m(t, ...s) {
  return (
    s.length == 0 ||
      (t = t.replace(/%(?:(\d+)\$)?s/g, function (c, a) {
        if (a <= s.length && a >= 1) {
          let i = s[a - 1];
          return String(i ?? "");
        }
        return c;
      })),
    t
  );
}
function G(t) {
  let s = p(),
    c = new Map(),
    a = new Set(["english"]);
  for (let e of s.languages)
    a.add(e.strLanguage), e.strFallback && a.add(e.strFallback);
  let i = Promise.all(
    Array.from(a).map((e) =>
      t(e).then((r) => {
        if (!r) return;
        let n = new Map();
        for (let [o, g] of Object.entries(r)) n.set("#" + o, g);
        c.set(e, n);
      }),
    ),
  );
  y(i);
  function f(e, r) {
    let [n, ...o] = r,
      g =
        c.get(n.strLanguage)?.get(e) ??
        c.get(n.strFallback ?? "english")?.get(e);
    return (
      g ||
      (o.length === 0
        ? (console.error("Couldn't find localization key", e), e)
        : f(e, o))
    );
  }
  return {
    Localize(e, ...r) {
      let n = p().languages,
        o = f(e, n);
      return m(o, ...r);
    },
    LocalizeReact(e, ...r) {
      let n = this.Localize(e);
      if (n === e) return n;
      let o = [],
        g = /(.*?)%(\d+)\$s/g,
        d = 0,
        u;
      for (; (u = g.exec(n)); ) {
        (d += u[0].length), o.push(u[1]);
        let L = parseInt(u[2]);
        L >= 1 && L <= r.length && o.push(r[L - 1]);
      }
      return (
        o.push(n.slice(d)),
        S.default.createElement(S.default.Fragment, null, ...o)
      );
    },
    LocalizeInSpecificLang(e, r, ...n) {
      let o = f(r, [e]);
      return m(o, ...n);
    },
    Ready() {
      return i;
    },
  };
}
function p() {
  if (!("SSR" in window)) throw "SSR missing";
  return (
    window.SSR.renderContext?.localizationSettings ?? {
      languages: [{ strLanguage: "english", eSource: 5, strISOCode: "en" }],
    }
  );
}
function N() {
  return p().languages.map((t) => w(t.strISOCode));
}
function w(t) {
  return t.length == 2 ? `${t}-${R.country_code}` : t;
}
export { x as a, G as b, p as c, N as d };
