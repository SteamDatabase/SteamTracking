const CLSTAMP = 9426784;

import { a as U } from "./chunk-OAAXPZFI.js";
import { a as w, b as z, c as P, d as j } from "./chunk-S72P3T2G.js";
import { a as E, c as C, e as N, r as F, t as q } from "./chunk-2VL5IIJI.js";
import { j as W, l as D, m as $ } from "./chunk-7TMFNHZK.js";
import { d as T } from "./chunk-KV5NJC5W.js";
var h = T(D(), 1),
  Z = T($(), 1);
function J(e) {
  let [n, a] = (0, h.useState)(!1);
  return (
    (0, h.useEffect)(() => {
      (0, h.startTransition)(() => {
        a(!0);
      });
    }, []),
    (0, Z.jsx)(Ge.Provider, { value: n, children: e.children })
  );
}
var Ge = (0, h.createContext)(!1);
var Ve = Intl.DateTimeFormat().resolvedOptions().timeZone,
  K = document.cookie
    .split(";")
    .find((e) => e.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  wn = K && decodeURIComponent(K);
function Be() {
  document.cookie = `timezoneName=${Ve};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
Be();
var k = T(D(), 1);
function en(e, ...n) {
  let a = [],
    t = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    i = 0,
    s;
  for (; (s = t.exec(e)); ) {
    (i += s[0].length), a.push(s[1]);
    let r = parseInt(s[2]),
      _ = s[3] || "",
      S = en(_, ...n),
      X = (r >= 1 && r <= n.length ? n[r - 1] : null)
        ? k.default.cloneElement(n[r - 1], {}, _ ? S : null)
        : _;
    a.push(X);
  }
  return (
    a.push(e.substr(i)), k.default.createElement(k.default.Fragment, null, ...a)
  );
}
function En(e) {
  return e.toLocaleString(j());
}
var G = "./localization_brazilian-BZY3XKDA.json";
var V = "./localization_bulgarian-4MC2HTCA.json";
var B = "./localization_czech-XCABYBDA.json";
var ee = "./localization_danish-GTQD6OAA.json";
var ne = "./localization_dutch-K3G7S7AA.json";
var ie = "./localization_english-KZHDUXDA.json";
var se = "./localization_finnish-QULTPTBA.json";
var ae = "./localization_french-FRG75SCA.json";
var te = "./localization_german-5RIYN4DA.json";
var re = "./localization_greek-UPLQVJDA.json";
var oe = "./localization_hungarian-UV6R5RBA.json";
var me = "./localization_indonesian-F2GIAWBA.json";
var ue = "./localization_italian-FIPIJFAA.json";
var _e = "./localization_japanese-CJHJFMCA.json";
var Te = "./localization_koreana-IRYAPFBA.json";
var de = "./localization_latam-VZ2XZHDA.json";
var $e = "./localization_norwegian-F73P2RAA.json";
var ce = "./localization_polish-5ZNDR4BA.json";
var le = "./localization_portuguese-3JZGGFDA.json";
var Me = "./localization_romanian-KUQXECCA.json";
var Se = "./localization_russian-RNJVXKAA.json";
var ge = "./localization_schinese-GPGXM5DA.json";
var he = "./localization_spanish-Y3O46WDA.json";
var Xe = "./localization_swedish-5MB23MDA.json";
var Re = "./localization_tchinese-TTDMHQBA.json";
var De = "./localization_thai-7E46JYCA.json";
var ve = "./localization_turkish-CJXBQCCA.json";
var ye = "./localization_ukrainian-XKSMP4AA.json";
var be = "./localization_vietnamese-H53SQYDA.json";
var o = {};
o.brazilian = G;
o.bulgarian = V;
o.czech = B;
o.danish = ee;
o.dutch = ne;
o.english = ie;
o.finnish = se;
o.french = ae;
o.german = te;
o.greek = re;
o.hungarian = oe;
o.indonesian = me;
o.italian = ue;
o.japanese = _e;
o.koreana = Te;
o.latam = de;
o.norwegian = $e;
o.polish = ce;
o.portuguese = le;
o.romanian = Me;
o.russian = Se;
o.schinese = ge;
o.spanish = he;
o.swedish = Xe;
o.tchinese = Re;
o.thai = De;
o.turkish = ve;
o.ukrainian = ye;
o.vietnamese = be;
async function Q(e) {
  if (o[e]) return (await fetch(new URL(o[e], import.meta.url))).json();
}
var u = z(Q);
var m = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function ns(e, n, a) {
  let t;
  typeof n == "boolean"
    ? (t = { eSuffix: n ? 0 : 1, bForceSingleUnits: a, bHighGranularity: !1 })
    : (t = { eSuffix: 1, bForceSingleUnits: !1, bHighGranularity: !1, ...n });
  let i = "TimeInterval_";
  t.eSuffix == 1
    ? (i = "TimeSince_")
    : t.eSuffix == 2 && (i = "TimeRemaining_");
  let s = (r) => Math.floor(r);
  if (
    (t.bAllowDecimal && (s = (r) => Math.round(r * 10) / 10),
    e >= m.PerYear * 2)
  )
    return u.Localize(`#${i}XYears`, s(e / m.PerYear));
  if (e >= m.PerYear)
    return (
      (e -= m.PerYear),
      e >= m.PerMonth * 2 && !t.bForceSingleUnits
        ? u.Localize(`#${i}1YearXMonths`, s(e / m.PerMonth))
        : u.Localize(`#${i}1Year`)
    );
  if (e >= m.PerMonth * 2) return u.Localize(`#${i}XMonths`, s(e / m.PerMonth));
  if (e >= m.PerWeek * 2) return u.Localize(`#${i}XWeeks`, s(e / m.PerWeek));
  if (e >= m.PerWeek) return u.Localize(`#${i}1Week`, s(e / m.PerWeek));
  if (e >= m.PerDay * 2) return u.Localize(`#${i}XDays`, s(e / m.PerDay));
  if (e >= m.PerDay)
    return (
      (e -= m.PerDay),
      e >= m.PerHour * 2 && !t.bForceSingleUnits
        ? u.Localize(`#${i}1DayXHours`, s(e / m.PerHour))
        : u.Localize(`#${i}1Day`)
    );
  if (e >= m.PerHour * 2) return u.Localize(`#${i}XHours`, s(e / m.PerHour));
  if (e >= m.PerHour)
    return (
      (e -= m.PerHour),
      e >= m.PerMinute * 2 && !t.bForceSingleUnits
        ? u.Localize(`#${i}1HourXMinutes`, s(e / m.PerMinute))
        : u.Localize(`#${i}1Hour`)
    );
  if (e >= m.PerMinute * 2) {
    let r = Math.floor(e / m.PerMinute),
      _ = e % m.PerMinute;
    return !t.bHighGranularity || _ == 0
      ? u.Localize(`#${i}XMinutes`, s(e / m.PerMinute))
      : _ == 1
        ? u.Localize(`#${i}XMinutes1Second`, r)
        : u.Localize(`#${i}XMinutesXSeconds`, r, _);
  } else if (e >= m.PerMinute) {
    let r = e % m.PerMinute;
    return !t.bHighGranularity || r == 0
      ? u.Localize(`#${i}1Minute`)
      : r == 1
        ? u.Localize(`#${i}1Minute1Second`)
        : u.Localize(`#${i}1MinuteXSeconds`, r);
  } else
    return t.bHighGranularity
      ? e == 1
        ? u.Localize(`#${i}1Second`)
        : u.Localize(`#${i}XSeconds`, e)
      : u.Localize(`#${i}LessThanAMinute`);
}
function as() {
  return P().languages[0];
}
var Ie = "x-valve-request-type",
  fe = "x-valve-loader-index",
  He = "x-valve-refetch-payload";
async function* Yn(e) {
  let n = "";
  for (;;) {
    let { done: a, value: t } = await e.read();
    if (a || t === void 0) break;
    n += t;
    let i = n.split(`
`);
    if (i.length !== 0) {
      n = i.pop();
      for (let s of i) yield s;
    }
  }
  n !== "" && (yield n);
}
async function* O(e, n, a) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-J53LX7RG.js"));
  let t = new Headers(a);
  t.append(Ie, "routeData");
  let s = (
    await fetch(e, { credentials: "same-origin", headers: t, signal: n })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!s) throw "no response body reader";
  for await (let r of Yn(s)) {
    if (n?.aborted) return;
    yield r;
  }
}
async function An(e, n, a, t) {
  let i = [],
    s = n.map((r) => [fe, r.toString()]);
  a !== void 0 && s.push([He, a]);
  for await (let r of O(e, t, s)) i.push(JSON.parse(r));
  return i;
}
async function ke(e, n, a, t) {
  return (await An(e, [n], a, t))[0];
}
var I = T(D(), 1);
var c = T(D(), 1);
var Le = T($(), 1);
function Qn(e) {
  switch (e) {
    case 0:
      return Uint8Array;
    case 1:
      return Int8Array;
    case 2:
      return Uint8ClampedArray;
    case 3:
      return Int16Array;
    case 4:
      return Uint16Array;
    case 5:
      return Int32Array;
    case 6:
      return Uint32Array;
    case 7:
      return Float32Array;
    case 8:
      return Float64Array;
    case 9:
      return Set;
    case 10:
      return Map;
  }
}
function L(e) {
  return JSON.parse(e, (n, a) => {
    if (a && typeof a == "object" && "_t" in a) {
      let t = Qn(a._t);
      return t ? new t(a.v) : a;
    }
    return a;
  });
}
function pe(e) {
  return e ? L(e) : null;
}
var Ye = Symbol.for("No loader context"),
  Ae = (0, c.createContext)(Ye);
function Qe(e) {
  let [n, a] = (0, c.useState)(e.loaderData),
    [t, i] = (0, c.useState)(),
    s = (0, c.useCallback)(
      async (r) => {
        let _ = new URL(location.href),
          S = _.pathname + _.search + _.hash,
          f = r ? JSON.stringify(r) : "",
          X = S + f;
        if (t) {
          if (t.fetchKey === X) return t.promise;
          t.abortController.abort();
        }
        let l = new AbortController(),
          R = ke(S, e.id, r ? f : void 0, l.signal);
        i({ promise: R, abortController: l, fetchKey: X });
        try {
          let H = await R;
          return a(H), i(void 0), H;
        } catch (H) {
          if (!l.signal.aborted) throw (i(void 0), H);
        }
        return R;
      },
      [e.id, t],
    );
  return (
    (0, c.useEffect)(() => {
      a(e.loaderData);
      {
        let r = We();
        if (r?.loaderData) {
          let _ = [...r.loaderData];
          (_[e.id] = e.loaderData), xe({ ...r, loaderData: _ });
        }
      }
    }, [e.loaderData, e.id]),
    (0, Le.jsx)(Ae.Provider, {
      value: { loaderData: n, refetchFn: s, fetchState: t },
      children: e.children,
    })
  );
}
function Oe(e) {
  let n = (0, c.useContext)(Ae);
  if (n === Ye) throw `Used ${e} outside of LoaderContext`;
  return n;
}
function hs() {
  return Oe("useLoaderData").loaderData;
}
function Xs() {
  return Oe("useRefetchLoader").refetchFn;
}
var v = T(D());
function we(e) {
  let n = v.useRef(On),
    a = e.children;
  return (
    e.debug &&
      (a = [
        ...v.Children.toArray(a),
        v.createElement(U, { key: "ReactQueryDevtools" }),
      ]),
    v.createElement(C, { client: e.queryClient ?? n.current }, a)
  );
}
var On = new E({ defaultOptions: { queries: { staleTime: 1 / 0 } } });
var p = T(D(), 1);
var d = T($(), 1),
  ze = p.default.createContext(void 0);
function Pe({ children: e, ...n }) {
  return (0, d.jsx)(ze.Provider, { value: n, children: e });
}
function fs() {
  let e = (0, p.useContext)(ze);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: n, clientAssets: a, loaderData: t } = e;
  return (0, d.jsxs)(d.Fragment, {
    children: [
      (0, d.jsx)("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1${W.IN_MOBILE ? ",user-scalable=no" : ""}`,
      }),
      (0, d.jsx)("meta", { name: "theme-color", content: "#171a21" }),
      n?.title && (0, d.jsx)("title", { children: n.title }),
      n?.description &&
        (0, d.jsx)("meta", { property: "description", content: n.description }),
      n?.shareTitle &&
        (0, d.jsx)("meta", { property: "og:title", content: n.shareTitle }),
      n?.shareImage &&
        (0, d.jsx)("meta", { property: "og:image", content: n.shareImage }),
      n?.snr &&
        (0, d.jsx)("meta", {
          property: "valve:snr",
          content: F.ComputeLinkPrefix(
            n.snr.domain,
            n.snr.controller,
            n.snr.method,
            n.snr.submethod,
          ),
        }),
      a.preload.map((i, s) =>
        i.as === "script"
          ? (0, d.jsx)(
              "link",
              {
                rel: "modulepreload",
                href: i.href,
                as: i.as,
                integrity: i.integrity,
                crossOrigin: "anonymous",
              },
              s,
            )
          : (0, d.jsx)(
              "link",
              {
                rel: "preload",
                href: i.href,
                as: i.as,
                integrity: i.integrity,
                crossOrigin: "anonymous",
              },
              s,
            ),
      ),
      a.css.map((i, s) =>
        (0, d.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: i.href,
            integrity: i.integrity,
            crossOrigin: "anonymous",
          },
          s,
        ),
      ),
    ],
  });
}
var Y = T(D(), 1),
  Ce = T($(), 1),
  je = (0, Y.createContext)({});
function Ee(e) {
  return (0, Ce.jsx)(je.Provider, {
    value: e.renderContext,
    children: e.children,
  });
}
function ks() {
  return (0, Y.useContext)(je);
}
var M = T($(), 1);
function Ue(e) {
  let {
    pageRoutes: n,
    clientAssets: a,
    metadata: t,
    loaderData: i,
    renderContext: s,
  } = e;
  return (
    Ne(),
    (0, M.jsx)(Ee, {
      renderContext: s,
      children: (0, M.jsx)(we, {
        queryClient: e.queryClient,
        children: (0, M.jsx)(N, {
          state: typeof s.queryData == "string" ? L(s.queryData) : s.queryData,
          children: (0, M.jsx)(J, {
            children: (0, M.jsx)(Pe, {
              metadata: t,
              clientAssets: a,
              loaderData: i,
              children: (0, M.jsx)(q, {
                ...t?.snr,
                children: (0, M.jsx)(Fe, { pageRoutes: n, loaderData: i }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
function Fe(e) {
  let { pageRoutes: n, index: a = 0, loaderData: t } = e,
    [i, ...s] = n,
    [r, ..._] = t,
    S;
  return (
    s.length === 0 && (S = history.state?.id),
    (0, M.jsx)(
      Qe,
      {
        loaderData: r,
        id: a,
        children: (0, M.jsx)(i.Component, {
          children:
            s.length > 0 &&
            (0, M.jsx)(Fe, { pageRoutes: s, loaderData: _, index: a + 1 }),
        }),
      },
      S,
    )
  );
}
var x = T($(), 1);
function qe(e) {
  return (
    e !== null && typeof e == "object" && "assetData" in e && "metadata" in e
  );
}
function Ln(e, n) {
  history.pushState(e, "", n);
}
function xe(e) {
  history.replaceState({ ...history.state, ...e }, "");
}
function We() {
  if (qe(history.state)) return history.state;
}
var g;
function Ne() {
  (0, I.useEffect)(() => {
    async function e(n) {
      if (
        (g?.abort(),
        (g = new AbortController()),
        qe(history.state) && history.state.loaderData)
      )
        try {
          await xn(history.state), (g = void 0);
          return;
        } catch (t) {
          console.error(t);
        }
      let a = new URL(location.href);
      await Ke(a.pathname + a.search + a.hash, g?.signal), (g = void 0);
    }
    return (
      window.addEventListener("popstate", e),
      () => {
        g?.abort(), window.removeEventListener("popstate", e);
      }
    );
  }, []);
}
function Je(e, n, a, t) {
  let i = e.filter((s) => s.route?.Component).map((s) => s.route);
  if (i.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = n),
    (0, I.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, x.jsx)(I.StrictMode, {
          children: (0, x.jsx)(Ue, {
            pageRoutes: i,
            clientAssets: n,
            loaderData: a,
            metadata: t,
            renderContext: {},
          }),
        }),
      );
    }),
    e.forEach((s) => {
      if ("onNavigate" in s) {
        let r = s.onNavigate;
        r(n);
      }
    });
}
async function Ze(e) {
  let n = 0,
    a = e.css.map(
      (i) =>
        new Promise((s) => {
          if (document.head.querySelector(`link[href="${i.href}"]`)) return s();
          let r = document.createElement("link");
          (r.rel = "preload"),
            (r.as = "style"),
            (r.href = i.href),
            (r.integrity = i.integrity),
            r.addEventListener("load", () => s()),
            r.addEventListener("error", () => s()),
            document.head.appendChild(r);
        }),
    ),
    t = await Promise.all(
      e.js.map(async (i) => {
        let s = await import(i.href);
        return "route" in s && n++, s;
      }),
    );
  return await w(), { cssPromises: a, routeModules: t, routeCount: n };
}
async function xn(e) {
  let { cssPromises: n, routeModules: a } = await Ze(e.assetData);
  await Promise.all(n), Je(a, e.assetData, e.loaderData ?? [], e.metadata);
}
function A(e) {
  let n = Math.min(e, 1).toString();
  document.body.style.setProperty("--load-percentage", n);
}
var y, b;
async function Ke(e, n) {
  let a,
    t,
    i,
    s = [];
  y && (clearInterval(y), (y = void 0)), b && (clearTimeout(b), (b = void 0));
  let r = 0;
  A(r),
    (b = window.setTimeout(() => {
      y = window.setInterval(() => {
        (r += Math.random() * 0.01), A(r);
      }, 50);
    }, 200));
  let _ = [],
    S = 0,
    f = (history.state?.id ?? -1) + 1;
  try {
    for await (let l of O(e, n))
      if (a)
        t === void 0
          ? (t = JSON.parse(l))
          : (_.push(l), (r = _.length / (S || 1)), A(r));
      else {
        a = JSON.parse(l);
        let R = await Ze(a);
        (s = R.cssPromises), (i = R.routeModules), (S = R.routeCount);
      }
    await Promise.all(s);
  } catch (l) {
    if (l instanceof DOMException && l.name === "AbortError") A(1);
    else throw l;
  }
  if (
    (y && (clearInterval(y), (y = void 0)),
    b && (clearTimeout(b), (b = void 0)),
    n?.aborted)
  )
    return;
  let X = await Promise.all(_.map(pe));
  Ln({ assetData: a, metadata: t, loaderData: X, id: f }, e), Je(i, a, X, t);
}
async function Ns(e) {
  g?.abort(), (g = new AbortController());
  try {
    await Ke(e, g.signal);
  } catch (n) {
    console.error(n), (location.href = e);
  }
  g = void 0;
}
export {
  en as a,
  Be as b,
  En as c,
  ns as d,
  as as e,
  O as f,
  An as g,
  ke as h,
  pe as i,
  hs as j,
  Xs as k,
  Ln as l,
  xe as m,
  We as n,
  Ne as o,
  Ns as p,
  fs as q,
  ks as r,
  Ue as s,
};
