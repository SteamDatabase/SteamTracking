import { n as S, o as m } from "./chunk-3UC64NIE.js";
import { a as w } from "./chunk-EWNBABYZ.js";
import { e as y } from "./chunk-5WT7BLXL.js";
var L;
L ??= new Set();
async function P() {
  await Promise.all(L);
}
function C(a) {
  (L ??= new Set()), L.add(a);
}
var f = y(w(), 1);
var R = [
    "sc_schinese",
    "schinese",
    "tchinese",
    "japanese",
    "koreana",
    "thai",
    "bulgarian",
    "czech",
    "danish",
    "german",
    "english",
    "spanish",
    "latam",
    "greek",
    "french",
    "italian",
    "indonesian",
    "hungarian",
    "dutch",
    "norwegian",
    "polish",
    "portuguese",
    "brazilian",
    "romanian",
    "russian",
    "finnish",
    "swedish",
    "turkish",
    "vietnamese",
    "ukrainian",
  ],
  z = new Set(R);
var x = new Map([
  ["en", "english"],
  ["de", "german"],
  ["fr", "french"],
  ["it", "italian"],
  ["ko", "koreana"],
  ["es-419", "latam"],
  ["es", "spanish"],
  ["zh", "schinese"],
  ["zh-cn", "schinese"],
  ["zh-tw", "tchinese"],
  ["ru", "russian"],
  ["th", "thai"],
  ["ja", "japanese"],
  ["pt-br", "brazilian"],
  ["pt", "portuguese"],
  ["pl", "polish"],
  ["da", "danish"],
  ["nl", "dutch"],
  ["fi", "finnish"],
  ["nb", "norwegian"],
  ["no", "norwegian"],
  ["sv", "swedish"],
  ["hu", "hungarian"],
  ["cs", "czech"],
  ["ro", "romanian"],
  ["tr", "turkish"],
  ["bg", "bulgarian"],
  ["el", "greek"],
  ["uk", "ukrainian"],
  ["vn", "vietnamese"],
  ["id", "indonesian"],
]);
var _ = new Map();
for (let [a, u] of x.entries()) _.set(u, a);
_.set("sc_schinese", _.get("schinese"));
_.set("korean", _.get("koreana"));
function G(a) {
  return _.get(a);
}
function d(a, ...u) {
  return (
    u.length == 0 ||
      (a = a.replace(/%(?:(\d+)\$)?s/g, function (l, t) {
        if (t <= u.length && t >= 1) {
          let i = u[t - 1];
          return String(i ?? "");
        }
        return l;
      })),
    a
  );
}
function D(a) {
  let u = new Map();
  async function l() {
    await m();
    let n = E(),
      g = new Set(["english"]);
    for (let e of n.languages)
      g.add(e.strLanguage), e.strFallback && g.add(e.strFallback);
    return Promise.all(
      Array.from(g).map((e) =>
        a(e).then((r) => {
          if (!r) return;
          let s = new Map();
          for (let [c, o] of Object.entries(r)) s.set("#" + c, o);
          u.set(e, s);
        }),
      ),
    );
  }
  let t = l(),
    i = !1;
  t.then(() => (i = !0)), C(t);
  function h(n, g) {
    let [e, ...r] = g,
      s =
        u.get(e.strLanguage)?.get(n) ??
        u.get(e.strFallback ?? "english")?.get(n);
    return (
      s ||
      (r.length === 0
        ? (console.error("Couldn't find localization key", n), n)
        : h(n, r))
    );
  }
  function k(n, ...g) {
    let e = E().languages,
      r = h(n, e);
    return d(r, ...g);
  }
  return {
    Localize(n, ...g) {
      return k(n, ...g);
    },
    LocalizeReact(n, ...g) {
      let e = this.Localize(n);
      if (e === n) return e;
      let r = [],
        s = /(.*?)%(\d+)\$s/g,
        c = 0,
        o;
      for (; (o = s.exec(e)); ) {
        (c += o[0].length), r.push(o[1]);
        let p = parseInt(o[2]);
        p >= 1 && p <= g.length && r.push(g[p - 1]);
      }
      return (
        r.push(e.slice(c)),
        f.default.createElement(f.default.Fragment, null, ...r)
      );
    },
    LocalizePlural(n, g, ...e) {
      return g === 1 || g === "1" ? k(n, g, ...e) : k(n + "_Plural", g, ...e);
    },
    LocalizeInSpecificLang(n, g, ...e) {
      let r = h(g, [n]);
      return d(r, ...e);
    },
    Ready() {
      return t;
    },
    IsReady() {
      return i;
    },
  };
}
function E() {
  if (!("SSR" in window)) throw "SSR missing";
  return (
    window.SSR.renderContext?.localizationSettings ?? {
      languages: [{ strLanguage: "english", eSource: 5, strISOCode: "en" }],
    }
  );
}
function $() {
  return E().languages.map((a) => I(a.strISOCode));
}
function I(a) {
  return a.length == 2 ? `${a}-${S.country_code}` : a;
}
export { G as a, P as b, C as c, D as d, E as e, $ as f };
