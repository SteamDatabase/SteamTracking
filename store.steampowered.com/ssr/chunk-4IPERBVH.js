const CLSTAMP = 9564007;

import { k as d, l as R } from "./chunk-3XUDDVHM.js";
import { a as h } from "./chunk-YWB64WUS.js";
import { d as C } from "./chunk-EBDYFHBQ.js";
var l;
l ??= new Set();
async function x() {
  await Promise.all(l);
}
function y(t) {
  (l ??= new Set()), l.add(t);
}
var S = C(h(), 1);
function m(t, ...a) {
  return (
    a.length == 0 ||
      (t = t.replace(/%(?:(\d+)\$)?s/g, function (p, s) {
        if (s <= a.length && s >= 1) {
          let i = a[s - 1];
          return String(i ?? "");
        }
        return p;
      })),
    t
  );
}
function G(t) {
  let a = new Map();
  async function p() {
    await R();
    let n = f(),
      r = new Set(["english"]);
    for (let e of n.languages)
      r.add(e.strLanguage), e.strFallback && r.add(e.strFallback);
    return Promise.all(
      Array.from(r).map((e) =>
        t(e).then((o) => {
          if (!o) return;
          let g = new Map();
          for (let [u, c] of Object.entries(o)) g.set("#" + u, c);
          a.set(e, g);
        }),
      ),
    );
  }
  let s = p();
  y(s);
  function i(n, r) {
    let [e, ...o] = r,
      g =
        a.get(e.strLanguage)?.get(n) ??
        a.get(e.strFallback ?? "english")?.get(n);
    return (
      g ||
      (o.length === 0
        ? (console.error("Couldn't find localization key", n), n)
        : i(n, o))
    );
  }
  return {
    Localize(n, ...r) {
      let e = f().languages,
        o = i(n, e);
      return m(o, ...r);
    },
    LocalizeReact(n, ...r) {
      let e = this.Localize(n);
      if (e === n) return e;
      let o = [],
        g = /(.*?)%(\d+)\$s/g,
        u = 0,
        c;
      for (; (c = g.exec(e)); ) {
        (u += c[0].length), o.push(c[1]);
        let L = parseInt(c[2]);
        L >= 1 && L <= r.length && o.push(r[L - 1]);
      }
      return (
        o.push(e.slice(u)),
        S.default.createElement(S.default.Fragment, null, ...o)
      );
    },
    LocalizeInSpecificLang(n, r, ...e) {
      let o = i(r, [n]);
      return m(o, ...e);
    },
    Ready() {
      return s;
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
function N() {
  return f().languages.map((t) => w(t.strISOCode));
}
function w(t) {
  return t.length == 2 ? `${t}-${d.country_code}` : t;
}
export { x as a, y as b, G as c, f as d, N as e };
