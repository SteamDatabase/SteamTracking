import { n as S, o as m } from "./chunk-32WFVS3N.js";
import { a as w } from "./chunk-N3HNOLVJ.js";
import { e as C } from "./chunk-Y7UWL7HT.js";
var L;
L ??= new Set();
async function x() {
  await Promise.all(L);
}
function f(e) {
  (L ??= new Set()), L.add(e);
}
var d = C(w(), 1);
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
var y = new Map([
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
for (let [e, u] of y.entries()) _.set(u, e);
_.set("sc_schinese", _.get("schinese"));
_.set("korean", _.get("koreana"));
function G(e) {
  return _.get(e);
}
function p(e, ...u) {
  return (
    u.length == 0 ||
      (e = e.replace(/%(?:(\d+)\$)?s/g, function (h, t) {
        if (t <= u.length && t >= 1) {
          let i = u[t - 1];
          return String(i ?? "");
        }
        return h;
      })),
    e
  );
}
function D(e) {
  let u = new Map();
  async function h() {
    await m();
    let n = E(),
      r = new Set(["english"]);
    for (let a of n.languages)
      r.add(a.strLanguage), a.strFallback && r.add(a.strFallback);
    return Promise.all(
      Array.from(r).map((a) =>
        e(a).then((g) => {
          if (!g) return;
          let s = new Map();
          for (let [c, o] of Object.entries(g)) s.set("#" + c, o);
          u.set(a, s);
        }),
      ),
    );
  }
  let t = h(),
    i = !1;
  t.then(() => (i = !0)), f(t);
  function k(n, r) {
    let [a, ...g] = r,
      s =
        u.get(a.strLanguage)?.get(n) ??
        u.get(a.strFallback ?? "english")?.get(n);
    return (
      s ||
      (g.length === 0
        ? (console.error("Couldn't find localization key", n), n)
        : k(n, g))
    );
  }
  return {
    Localize(n, ...r) {
      let a = E().languages,
        g = k(n, a);
      return p(g, ...r);
    },
    LocalizeReact(n, ...r) {
      let a = this.Localize(n);
      if (a === n) return a;
      let g = [],
        s = /(.*?)%(\d+)\$s/g,
        c = 0,
        o;
      for (; (o = s.exec(a)); ) {
        (c += o[0].length), g.push(o[1]);
        let l = parseInt(o[2]);
        l >= 1 && l <= r.length && g.push(r[l - 1]);
      }
      return (
        g.push(a.slice(c)),
        d.default.createElement(d.default.Fragment, null, ...g)
      );
    },
    LocalizeInSpecificLang(n, r, ...a) {
      let g = k(r, [n]);
      return p(g, ...a);
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
function v() {
  return E().languages.map((e) => I(e.strISOCode));
}
function I(e) {
  return e.length == 2 ? `${e}-${S.country_code}` : e;
}
export { G as a, x as b, f as c, D as d, E as e, v as f };
