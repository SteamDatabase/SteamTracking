import { b as O } from "./chunk-SB2MMXKX.js";
import { b as v, e as F, f as C } from "./chunk-RR2M2CJG.js";
import { f as I, t as E, v as N } from "./chunk-TBGOSV3U.js";
import { m as k, p as f } from "./chunk-IN63BXCF.js";
import { a as S } from "./chunk-K32VMO2L.js";
import { e as u } from "./chunk-UUUEXOLW.js";
var y = u(S(), 1),
  Y = u(f(), 1);
function U(e) {
  let [t, r] = (0, y.useState)(!1);
  return (
    (0, y.useEffect)(() => {
      (0, y.startTransition)(() => r(!0));
    }, []),
    (0, Y.jsx)(pe.Provider, { value: t, children: e.children })
  );
}
var pe = (0, y.createContext)(!1);
var ge = Intl.DateTimeFormat().resolvedOptions().timeZone,
  $ = document.cookie
    .split(";")
    .find((e) => e.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  Pe = $ && decodeURIComponent($);
function ye() {
  document.cookie = `timezoneName=${ge};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
ye();
var P = u(S(), 1);
function he(e, ...t) {
  let r = [],
    o = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    i = 0,
    n;
  for (; (n = o.exec(e)); ) {
    (i += n[0].length), r.push(n[1]);
    let a = parseInt(n[2]),
      s = n[3] || "",
      l = he(s, ...t),
      R = (a >= 1 && a <= t.length ? t[a - 1] : null)
        ? P.default.cloneElement(t[a - 1], {}, s ? l : null)
        : s;
    r.push(R);
  }
  return (
    r.push(e.substr(i)), P.default.createElement(P.default.Fragment, null, ...r)
  );
}
function Te(e) {
  return e.toLocaleString(C());
}
var ze = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function Fe() {
  return F().languages[0];
}
function qe(e, t, r) {
  let o;
  t === void 0 || t === !0 || t === !1
    ? (o = { weekday: r ? "long" : "short", year: t ? void 0 : "numeric" })
    : (o = t);
  let i = new Date(e * 1e3),
    n = {
      weekday: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
      ...o,
    };
  return i.toLocaleDateString(C(), n);
}
function Xe(e, t) {
  let r = new Date(e * 1e3),
    o = { year: "numeric", month: "short", day: "numeric", ...t };
  return r.toLocaleDateString(C(), o);
}
function De(e) {
  let t = new Date();
  t.setHours(15);
  let r = t.toLocaleTimeString(e, { hour: "numeric" }),
    o = t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
  return r == o;
}
function Ge(e, t, r) {
  let o = new Date(e * 1e3),
    i = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    n = { hour: "numeric", minute: "2-digit" },
    a = C(),
    l = { ...(t?.bForce24HourClock || De(a[0]) ? i : n), ...r };
  return o.toLocaleTimeString(a, l);
}
var Q = "x-valve-request-type",
  W = "x-valve-loader-index",
  q = "x-valve-refetch-payload";
async function* xe(e) {
  let t = "";
  for (;;) {
    let { done: r, value: o } = await e.read();
    if (r || o === void 0) break;
    t += o;
    let i = t.split(`
`);
    if (i.length !== 0) {
      t = i.pop();
      for (let n of i) yield n;
    }
  }
  t !== "" && (yield t);
}
async function* T(e, t, r) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-CIOVASCB.js"));
  let o = new Headers(r);
  o.append(Q, "routeData");
  let n = (
    await fetch(e, { credentials: "same-origin", headers: o, signal: t })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!n) throw "no response body reader";
  for await (let a of xe(n)) {
    if (t?.aborted) return;
    yield a;
  }
}
async function Le(e, t, r, o) {
  let i = [],
    n = t.map((a) => [W, a.toString()]);
  r !== void 0 && n.push([q, r]);
  for await (let a of T(e, o, n)) i.push(JSON.parse(a));
  return i;
}
async function X(e, t, r, o) {
  return (await Le(e, [t], r, o))[0];
}
var _ = u(S(), 1);
var m = u(S(), 1);
var K = u(f(), 1);
function Re(e) {
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
function H(e) {
  return JSON.parse(e, (t, r) => {
    if (r && typeof r == "object" && "_t" in r) {
      let o = Re(r._t);
      return o ? new o(r.v) : r;
    }
    return r;
  });
}
function G(e) {
  return e ? H(e) : null;
}
var J = Symbol.for("No loader context"),
  B = (0, m.createContext)(J);
function V(e) {
  let [t, r] = (0, m.useState)(e.loaderData),
    [o, i] = (0, m.useState)(),
    n = (0, m.useCallback)(
      async (a) => {
        let s = new URL(location.href),
          l = s.pathname + s.search + s.hash,
          h = a ? JSON.stringify(a) : "",
          R = l + h;
        if (o) {
          if (o.fetchKey === R) return o.promise;
          o.abortController.abort();
        }
        let b = new AbortController(),
          d = X(l, e.id, a ? h : void 0, b.signal);
        i({ promise: d, abortController: b, fetchKey: R });
        try {
          let D = await d;
          return r(D), i(void 0), D;
        } catch (D) {
          if (!b.signal.aborted) throw (i(void 0), D);
        }
        return d;
      },
      [e.id, o],
    );
  return (
    (0, m.useEffect)(() => {
      r(e.loaderData);
      {
        let a = ee();
        if (a?.loaderData) {
          let s = [...a.loaderData];
          (s[e.id] = e.loaderData), j({ ...a, loaderData: s });
        }
      }
    }, [e.loaderData, e.id]),
    (0, K.jsx)(B.Provider, {
      value: { loaderData: t, refetchFn: n, fetchState: o },
      children: e.children,
    })
  );
}
function Z(e) {
  let t = (0, m.useContext)(B);
  if (t === J) throw `Used ${e} outside of LoaderContext`;
  return t;
}
function tt() {
  return Z("useLoaderData").loaderData;
}
function rt() {
  return Z("useRefetchLoader").refetchFn;
}
var w = u(S(), 1);
var M = u(S(), 1),
  oe = u(f(), 1),
  te = (0, M.createContext)({});
function re(e) {
  return (0, oe.jsx)(te.Provider, {
    value: e.renderContext,
    children: e.children,
  });
}
function ne() {
  return (0, M.useContext)(te);
}
var c = u(f(), 1),
  ae = w.default.createContext(void 0);
function ie({ children: e, ...t }) {
  return (0, c.jsx)(ae.Provider, { value: t, children: e });
}
function ut() {
  let e = (0, w.useContext)(ae);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: t, clientAssets: r, loaderData: o } = e,
    i = ne();
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1${k.IN_MOBILE_WEBVIEW ? ",user-scalable=no" : ""}`,
      }),
      (0, c.jsx)("meta", { name: "theme-color", content: "#171a21" }),
      t?.title && (0, c.jsx)("title", { children: t.title }),
      t?.description &&
        (0, c.jsx)("meta", { property: "description", content: t.description }),
      t?.shareTitle &&
        (0, c.jsx)("meta", { property: "og:title", content: t.shareTitle }),
      t?.shareImage &&
        (0, c.jsx)("meta", { property: "og:image", content: t.shareImage }),
      t?.snr &&
        (0, c.jsx)("meta", {
          property: "valve:snr",
          content: E.ComputeLinkPrefix(
            t.snr.domain,
            t.snr.controller,
            t.snr.method,
            t.snr.submethod,
          ),
        }),
      r.preload.map((n, a) =>
        n.as === "hmr"
          ? (0, c.jsx)("script", { type: "module", src: n.href }, a)
          : n.as === "script"
            ? i.static
              ? null
              : (0, c.jsx)(
                  "link",
                  {
                    rel: "modulepreload",
                    href: n.href,
                    as: n.as,
                    integrity: n.integrity,
                    crossOrigin: "anonymous",
                  },
                  a,
                )
            : (0, c.jsx)(
                "link",
                {
                  rel: "preload",
                  href: n.href,
                  as: n.as,
                  integrity: n.integrity,
                  crossOrigin: "anonymous",
                },
                a,
              ),
      ),
      r.css.map((n, a) =>
        (0, c.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: n.href,
            integrity: n.integrity,
            crossOrigin: "anonymous",
          },
          n.href,
        ),
      ),
    ],
  });
}
var p = u(f(), 1);
function ue(e) {
  let {
    pageRoutes: t,
    clientAssets: r,
    metadata: o,
    loaderData: i,
    renderContext: n,
  } = e;
  return (
    se(),
    (0, p.jsx)(re, {
      renderContext: n,
      children: (0, p.jsx)(O, {
        queryClient: e.queryClient,
        children: (0, p.jsx)(I, {
          state: typeof n.queryData == "string" ? H(n.queryData) : n.queryData,
          children: (0, p.jsx)(U, {
            children: (0, p.jsx)(ie, {
              metadata: o,
              clientAssets: r,
              loaderData: i,
              children: (0, p.jsx)(N, {
                ...o?.snr,
                children: (0, p.jsx)(ce, { pageRoutes: t, loaderData: i }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
function ce(e) {
  let { pageRoutes: t, index: r = 0, loaderData: o } = e,
    [i, ...n] = t,
    [a, ...s] = o,
    l;
  return (
    n.length === 0 && (l = history.state?.id),
    (0, p.jsx)(
      V,
      {
        loaderData: a,
        id: r,
        children: (0, p.jsx)(i.Component, {
          children:
            n.length > 0 &&
            (0, p.jsx)(ce, { pageRoutes: n, loaderData: s, index: r + 1 }),
        }),
      },
      l,
    )
  );
}
var z = u(f(), 1);
function le(e) {
  return (
    e !== null && typeof e == "object" && "assetData" in e && "metadata" in e
  );
}
function be(e, t) {
  history.pushState(e, "", t);
}
function j(e) {
  history.replaceState({ ...history.state, ...e }, "");
}
function ee() {
  if (le(history.state)) return history.state;
}
var g;
function se() {
  (0, _.useEffect)(() => {
    async function e(t) {
      if (
        (g?.abort(),
        (g = new AbortController()),
        le(history.state) && history.state.loaderData)
      )
        try {
          await Se(history.state), (g = void 0);
          return;
        } catch (o) {
          console.error(o);
        }
      let r = new URL(location.href);
      await me(r.pathname + r.search + r.hash, g?.signal), (g = void 0);
    }
    return (
      window.addEventListener("popstate", e),
      () => {
        g?.abort(), window.removeEventListener("popstate", e);
      }
    );
  }, []);
}
function de(e, t, r, o, i) {
  let n = e.filter((a) => a.route?.Component).map((a) => a.route);
  if (n.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = t),
    (0, _.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, z.jsx)(_.StrictMode, {
          children: (0, z.jsx)(ue, {
            pageRoutes: n,
            clientAssets: t,
            loaderData: r,
            metadata: o,
            renderContext: i,
          }),
        }),
      );
    }),
    e.forEach((a) => {
      if ("onNavigate" in a) {
        let s = a.onNavigate;
        s(t);
      }
    });
}
async function fe(e) {
  let t = 0,
    r = e.css.map(
      (i) =>
        new Promise((n) => {
          let a = i.href.replace(/\\/g, "/");
          if (
            Array.from(document.head.querySelectorAll("link[href]")).some(
              (h) => h.href === a,
            )
          )
            return n();
          let s = document.createElement("link");
          (s.rel = "preload"),
            (s.as = "style"),
            (s.href = a),
            (s.integrity = i.integrity),
            (s.crossOrigin = "anonymous");
          function l() {
            document.head.removeChild(s), n();
          }
          s.addEventListener("load", l),
            s.addEventListener("error", l),
            document.head.appendChild(s);
        }),
    ),
    o = await Promise.all(
      e.js.map(async (i) => {
        let n = await import(i.href);
        return "route" in n && t++, n;
      }),
    );
  return await v(), { cssPromises: r, routeModules: o, routeCount: t };
}
async function Se(e) {
  let { cssPromises: t, routeModules: r } = await fe(e.assetData);
  await Promise.all(t),
    de(r, e.assetData, e.loaderData ?? [], e.metadata, e.renderContext);
}
function A(e) {
  let t = Math.min(e, 1).toString();
  document.body.style.setProperty("--load-percentage", t);
}
var x, L;
async function me(e, t) {
  let r,
    o,
    i,
    n,
    a = [];
  x && (clearInterval(x), (x = void 0)), L && (clearTimeout(L), (L = void 0));
  let s = 0;
  A(s),
    (L = window.setTimeout(() => {
      x = window.setInterval(() => {
        (s += Math.random() * 0.01), A(s);
      }, 50);
    }, 200));
  let l = [],
    h = 0,
    R = (history.state?.id ?? -1) + 1;
  try {
    for await (let d of T(e, t))
      if (r)
        o === void 0
          ? (o = JSON.parse(d))
          : i === void 0
            ? (i = JSON.parse(d))
            : (l.push(d), (s = l.length / (h || 1)), A(s));
      else {
        r = JSON.parse(d);
        let D = await fe(r);
        (a = D.cssPromises), (n = D.routeModules), (h = D.routeCount);
      }
    await Promise.all(a);
  } catch (d) {
    if (d instanceof DOMException && d.name === "AbortError") A(1);
    else throw d;
  }
  if (
    (x && (clearInterval(x), (x = void 0)),
    L && (clearTimeout(L), (L = void 0)),
    t?.aborted)
  )
    return;
  let b = await Promise.all(l.map(G));
  be({ assetData: r, metadata: o, loaderData: b, renderContext: i, id: R }, e),
    de(n, r, b, o, i);
}
async function St(e) {
  g?.abort(), (g = new AbortController());
  try {
    await me(e, g.signal);
  } catch (t) {
    console.error(t), (location.href = e);
  }
  g = void 0;
}
export {
  he as a,
  ye as b,
  Te as c,
  ze as d,
  qe as e,
  Xe as f,
  Ge as g,
  Fe as h,
  T as i,
  Le as j,
  X as k,
  G as l,
  tt as m,
  rt as n,
  be as o,
  j as p,
  ee as q,
  se as r,
  St as s,
  ne as t,
  ut as u,
  ue as v,
};
