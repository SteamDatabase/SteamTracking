const CLSTAMP = 9580955;

import { a as U } from "./chunk-S33DKKWZ.js";
import { a as F, d as I, e as P } from "./chunk-HL5J6CF5.js";
import { a as O, c as E, e as N, s as Y, u as Q } from "./chunk-FB3EMUNJ.js";
import { j as v, m as d } from "./chunk-P7UTOOWD.js";
import { a as R } from "./chunk-2M6UGZTQ.js";
import { d as u } from "./chunk-HHQ2KM4L.js";
var g = u(R(), 1),
  q = u(d(), 1);
function $(e) {
  let [t, r] = (0, g.useState)(!1);
  return (
    (0, g.useEffect)(() => {
      (0, g.startTransition)(() => {
        r(!0);
      });
    }, []),
    (0, q.jsx)(De.Provider, { value: t, children: e.children })
  );
}
var De = (0, g.createContext)(!1);
var Re = Intl.DateTimeFormat().resolvedOptions().timeZone,
  X = document.cookie
    .split(";")
    .find((e) => e.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  Te = X && decodeURIComponent(X);
function Le() {
  document.cookie = `timezoneName=${Re};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
Le();
var M = u(R(), 1);
function xe(e, ...t) {
  let r = [],
    a = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    i = 0,
    n;
  for (; (n = a.exec(e)); ) {
    (i += n[0].length), r.push(n[1]);
    let o = parseInt(n[2]),
      s = n[3] || "",
      l = xe(s, ...t),
      h = (o >= 1 && o <= t.length ? t[o - 1] : null)
        ? M.default.cloneElement(t[o - 1], {}, s ? l : null)
        : s;
    r.push(h);
  }
  return (
    r.push(e.substr(i)), M.default.createElement(M.default.Fragment, null, ...r)
  );
}
function ve(e) {
  return e.toLocaleString(P());
}
var Ie = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function Ne(e, t) {
  let r = new Date(e * 1e3),
    a = { year: "numeric", month: "short", day: "numeric", ...t };
  return r.toLocaleDateString(P(), a);
}
function be(e) {
  let t = new Date();
  t.setHours(15);
  let r = t.toLocaleTimeString(e, { hour: "numeric" }),
    a = t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
  return r == a;
}
function Ue(e, t, r) {
  let a = new Date(e * 1e3),
    i = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    n = { hour: "numeric", minute: "2-digit" },
    o = P(),
    l = { ...(t?.bForce24HourClock || be(o[0]) ? i : n), ...r };
  return a.toLocaleTimeString(o, l);
}
function $e() {
  return I().languages[0];
}
var W = "x-valve-request-type",
  G = "x-valve-loader-index",
  J = "x-valve-refetch-payload";
async function* Se(e) {
  let t = "";
  for (;;) {
    let { done: r, value: a } = await e.read();
    if (r || a === void 0) break;
    t += a;
    let i = t.split(`
`);
    if (i.length !== 0) {
      t = i.pop();
      for (let n of i) yield n;
    }
  }
  t !== "" && (yield t);
}
async function* H(e, t, r) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-ZSCK2T55.js"));
  let a = new Headers(r);
  a.append(W, "routeData");
  let n = (
    await fetch(e, { credentials: "same-origin", headers: a, signal: t })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!n) throw "no response body reader";
  for await (let o of Se(n)) {
    if (t?.aborted) return;
    yield o;
  }
}
async function Ce(e, t, r, a) {
  let i = [],
    n = t.map((o) => [G, o.toString()]);
  r !== void 0 && n.push([J, r]);
  for await (let o of H(e, a, n)) i.push(JSON.parse(o));
  return i;
}
async function B(e, t, r, a) {
  return (await Ce(e, [t], r, a))[0];
}
var S = u(R(), 1);
var f = u(R(), 1);
var te = u(d(), 1);
function Pe(e) {
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
function z(e) {
  return JSON.parse(e, (t, r) => {
    if (r && typeof r == "object" && "_t" in r) {
      let a = Pe(r._t);
      return a ? new a(r.v) : r;
    }
    return r;
  });
}
function V(e) {
  return e ? z(e) : null;
}
var Z = Symbol.for("No loader context"),
  K = (0, f.createContext)(Z);
function j(e) {
  let [t, r] = (0, f.useState)(e.loaderData),
    [a, i] = (0, f.useState)(),
    n = (0, f.useCallback)(
      async (o) => {
        let s = new URL(location.href),
          l = s.pathname + s.search + s.hash,
          C = o ? JSON.stringify(o) : "",
          h = l + C;
        if (a) {
          if (a.fetchKey === h) return a.promise;
          a.abortController.abort();
        }
        let m = new AbortController(),
          D = B(l, e.id, o ? C : void 0, m.signal);
        i({ promise: D, abortController: m, fetchKey: h });
        try {
          let _ = await D;
          return r(_), i(void 0), _;
        } catch (_) {
          if (!m.signal.aborted) throw (i(void 0), _);
        }
        return D;
      },
      [e.id, a],
    );
  return (
    (0, f.useEffect)(() => {
      r(e.loaderData);
      {
        let o = ne();
        if (o?.loaderData) {
          let s = [...o.loaderData];
          (s[e.id] = e.loaderData), re({ ...o, loaderData: s });
        }
      }
    }, [e.loaderData, e.id]),
    (0, te.jsx)(K.Provider, {
      value: { loaderData: t, refetchFn: n, fetchState: a },
      children: e.children,
    })
  );
}
function ee(e) {
  let t = (0, f.useContext)(K);
  if (t === Z) throw `Used ${e} outside of LoaderContext`;
  return t;
}
function ot() {
  return ee("useLoaderData").loaderData;
}
function at() {
  return ee("useRefetchLoader").refetchFn;
}
var L = u(R());
function oe(e) {
  let t = L.useRef(_e),
    r = e.children;
  return (
    e.debug &&
      (r = [
        ...L.Children.toArray(r),
        L.createElement(U, { key: "ReactQueryDevtools" }),
      ]),
    L.createElement(E, { client: e.queryClient ?? t.current }, r)
  );
}
var _e = new O({ defaultOptions: { queries: { staleTime: 1 / 0 } } });
var A = u(R(), 1);
var w = u(R(), 1),
  se = u(d(), 1),
  ae = (0, w.createContext)({});
function ie(e) {
  return (0, se.jsx)(ae.Provider, {
    value: e.renderContext,
    children: e.children,
  });
}
function ue() {
  return (0, w.useContext)(ae);
}
var c = u(d(), 1),
  ce = A.default.createContext(void 0);
function le({ children: e, ...t }) {
  return (0, c.jsx)(ce.Provider, { value: t, children: e });
}
function pt() {
  let e = (0, A.useContext)(ce);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: t, clientAssets: r, loaderData: a } = e,
    i = ue();
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1${v.IN_MOBILE ? ",user-scalable=no" : ""}`,
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
          content: Y.ComputeLinkPrefix(
            t.snr.domain,
            t.snr.controller,
            t.snr.method,
            t.snr.submethod,
          ),
        }),
      r.preload.map((n, o) =>
        n.as === "hmr"
          ? (0, c.jsx)("script", { type: "module", src: n.href }, o)
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
                  o,
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
                o,
              ),
      ),
      r.css.map((n, o) =>
        (0, c.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: n.href,
            integrity: n.integrity,
            crossOrigin: "anonymous",
          },
          o,
        ),
      ),
    ],
  });
}
var p = u(d(), 1);
function fe(e) {
  let {
    pageRoutes: t,
    clientAssets: r,
    metadata: a,
    loaderData: i,
    renderContext: n,
  } = e;
  return (
    de(),
    (0, p.jsx)(ie, {
      renderContext: n,
      children: (0, p.jsx)(oe, {
        queryClient: e.queryClient,
        children: (0, p.jsx)(N, {
          state: typeof n.queryData == "string" ? z(n.queryData) : n.queryData,
          children: (0, p.jsx)($, {
            children: (0, p.jsx)(le, {
              metadata: a,
              clientAssets: r,
              loaderData: i,
              children: (0, p.jsx)(Q, {
                ...a?.snr,
                children: (0, p.jsx)(me, { pageRoutes: t, loaderData: i }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
function me(e) {
  let { pageRoutes: t, index: r = 0, loaderData: a } = e,
    [i, ...n] = t,
    [o, ...s] = a,
    l;
  return (
    n.length === 0 && (l = history.state?.id),
    (0, p.jsx)(
      j,
      {
        loaderData: o,
        id: r,
        children: (0, p.jsx)(i.Component, {
          children:
            n.length > 0 &&
            (0, p.jsx)(me, { pageRoutes: n, loaderData: s, index: r + 1 }),
        }),
      },
      l,
    )
  );
}
var k = u(d(), 1);
function pe(e) {
  return (
    e !== null && typeof e == "object" && "assetData" in e && "metadata" in e
  );
}
function Me(e, t) {
  history.pushState(e, "", t);
}
function re(e) {
  history.replaceState({ ...history.state, ...e }, "");
}
function ne() {
  if (pe(history.state)) return history.state;
}
var y;
function de() {
  (0, S.useEffect)(() => {
    async function e(t) {
      if (
        (y?.abort(),
        (y = new AbortController()),
        pe(history.state) && history.state.loaderData)
      )
        try {
          await we(history.state), (y = void 0);
          return;
        } catch (a) {
          console.error(a);
        }
      let r = new URL(location.href);
      await he(r.pathname + r.search + r.hash, y?.signal), (y = void 0);
    }
    return (
      window.addEventListener("popstate", e),
      () => {
        y?.abort(), window.removeEventListener("popstate", e);
      }
    );
  }, []);
}
function ye(e, t, r, a) {
  let i = e.filter((n) => n.route?.Component).map((n) => n.route);
  if (i.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = t),
    (0, S.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, k.jsx)(S.StrictMode, {
          children: (0, k.jsx)(fe, {
            pageRoutes: i,
            clientAssets: t,
            loaderData: r,
            metadata: a,
            renderContext: {},
          }),
        }),
      );
    }),
    e.forEach((n) => {
      if ("onNavigate" in n) {
        let o = n.onNavigate;
        o(t);
      }
    });
}
async function ge(e) {
  let t = 0,
    r = e.css.map(
      (i) =>
        new Promise((n) => {
          if (document.head.querySelector(`link[href="${i.href}"]`)) return n();
          let o = document.createElement("link");
          (o.rel = "preload"),
            (o.as = "style"),
            (o.href = i.href),
            (o.integrity = i.integrity),
            o.addEventListener("load", () => n()),
            o.addEventListener("error", () => n()),
            document.head.appendChild(o);
        }),
    ),
    a = await Promise.all(
      e.js.map(async (i) => {
        let n = await import(i.href);
        return "route" in n && t++, n;
      }),
    );
  return await F(), { cssPromises: r, routeModules: a, routeCount: t };
}
async function we(e) {
  let { cssPromises: t, routeModules: r } = await ge(e.assetData);
  await Promise.all(t), ye(r, e.assetData, e.loaderData ?? [], e.metadata);
}
function T(e) {
  let t = Math.min(e, 1).toString();
  document.body.style.setProperty("--load-percentage", t);
}
var x, b;
async function he(e, t) {
  let r,
    a,
    i,
    n = [];
  x && (clearInterval(x), (x = void 0)), b && (clearTimeout(b), (b = void 0));
  let o = 0;
  T(o),
    (b = window.setTimeout(() => {
      x = window.setInterval(() => {
        (o += Math.random() * 0.01), T(o);
      }, 50);
    }, 200));
  let s = [],
    l = 0,
    C = (history.state?.id ?? -1) + 1;
  try {
    for await (let m of H(e, t))
      if (r)
        a === void 0
          ? (a = JSON.parse(m))
          : (s.push(m), (o = s.length / (l || 1)), T(o));
      else {
        r = JSON.parse(m);
        let D = await ge(r);
        (n = D.cssPromises), (i = D.routeModules), (l = D.routeCount);
      }
    await Promise.all(n);
  } catch (m) {
    if (m instanceof DOMException && m.name === "AbortError") T(1);
    else throw m;
  }
  if (
    (x && (clearInterval(x), (x = void 0)),
    b && (clearTimeout(b), (b = void 0)),
    t?.aborted)
  )
    return;
  let h = await Promise.all(s.map(V));
  Me({ assetData: r, metadata: a, loaderData: h, id: C }, e), ye(i, r, h, a);
}
async function At(e) {
  y?.abort(), (y = new AbortController());
  try {
    await he(e, y.signal);
  } catch (t) {
    console.error(t), (location.href = e);
  }
  y = void 0;
}
export {
  xe as a,
  Le as b,
  ve as c,
  Ie as d,
  Ne as e,
  Ue as f,
  $e as g,
  H as h,
  Ce as i,
  B as j,
  V as k,
  ot as l,
  at as m,
  Me as n,
  re as o,
  ne as p,
  de as q,
  At as r,
  ue as s,
  pt as t,
  fe as u,
};
