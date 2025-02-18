const CLSTAMP = 9543433;

import { a as U } from "./chunk-S3CKZOEC.js";
import { a as F, d as I, e as P } from "./chunk-HGGZBN6Y.js";
import { a as O, c as E, e as N, r as Y, t as Q } from "./chunk-DEMYV6EX.js";
import { j as v, m as d } from "./chunk-XDK3WWOH.js";
import { a as R } from "./chunk-YIHXADVM.js";
import { d as u } from "./chunk-PMCLIEO6.js";
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
    (0, q.jsx)(he.Provider, { value: t, children: e.children })
  );
}
var he = (0, g.createContext)(!1);
var De = Intl.DateTimeFormat().resolvedOptions().timeZone,
  X = document.cookie
    .split(";")
    .find((e) => e.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  Ae = X && decodeURIComponent(X);
function Re() {
  document.cookie = `timezoneName=${De};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
Re();
var M = u(R(), 1);
function Le(e, ...t) {
  let r = [],
    a = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    o = 0,
    n;
  for (; (n = a.exec(e)); ) {
    (o += n[0].length), r.push(n[1]);
    let i = parseInt(n[2]),
      s = n[3] || "",
      l = Le(s, ...t),
      h = (i >= 1 && i <= t.length ? t[i - 1] : null)
        ? M.default.cloneElement(t[i - 1], {}, s ? l : null)
        : s;
    r.push(h);
  }
  return (
    r.push(e.substr(o)), M.default.createElement(M.default.Fragment, null, ...r)
  );
}
function ke(e) {
  return e.toLocaleString(P());
}
var Fe = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function Ee(e, t) {
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
function Ne(e, t, r) {
  let a = new Date(e * 1e3),
    o = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    n = { hour: "numeric", minute: "2-digit" },
    i = P(),
    l = { ...(t?.bForce24HourClock || be(i[0]) ? o : n), ...r };
  return a.toLocaleTimeString(i, l);
}
function Qe() {
  return I().languages[0];
}
var W = "x-valve-request-type",
  G = "x-valve-loader-index",
  J = "x-valve-refetch-payload";
async function* xe(e) {
  let t = "";
  for (;;) {
    let { done: r, value: a } = await e.read();
    if (r || a === void 0) break;
    t += a;
    let o = t.split(`
`);
    if (o.length !== 0) {
      t = o.pop();
      for (let n of o) yield n;
    }
  }
  t !== "" && (yield t);
}
async function* H(e, t, r) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-2WMORTIG.js"));
  let a = new Headers(r);
  a.append(W, "routeData");
  let n = (
    await fetch(e, { credentials: "same-origin", headers: a, signal: t })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!n) throw "no response body reader";
  for await (let i of xe(n)) {
    if (t?.aborted) return;
    yield i;
  }
}
async function Se(e, t, r, a) {
  let o = [],
    n = t.map((i) => [G, i.toString()]);
  r !== void 0 && n.push([J, r]);
  for await (let i of H(e, a, n)) o.push(JSON.parse(i));
  return o;
}
async function B(e, t, r, a) {
  return (await Se(e, [t], r, a))[0];
}
var S = u(R(), 1);
var f = u(R(), 1);
var te = u(d(), 1);
function Ce(e) {
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
      let a = Ce(r._t);
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
    [a, o] = (0, f.useState)(),
    n = (0, f.useCallback)(
      async (i) => {
        let s = new URL(location.href),
          l = s.pathname + s.search + s.hash,
          C = i ? JSON.stringify(i) : "",
          h = l + C;
        if (a) {
          if (a.fetchKey === h) return a.promise;
          a.abortController.abort();
        }
        let m = new AbortController(),
          D = B(l, e.id, i ? C : void 0, m.signal);
        o({ promise: D, abortController: m, fetchKey: h });
        try {
          let _ = await D;
          return r(_), o(void 0), _;
        } catch (_) {
          if (!m.signal.aborted) throw (o(void 0), _);
        }
        return D;
      },
      [e.id, a],
    );
  return (
    (0, f.useEffect)(() => {
      r(e.loaderData);
      {
        let i = ne();
        if (i?.loaderData) {
          let s = [...i.loaderData];
          (s[e.id] = e.loaderData), re({ ...i, loaderData: s });
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
function nt() {
  return ee("useLoaderData").loaderData;
}
function ot() {
  return ee("useRefetchLoader").refetchFn;
}
var L = u(R());
function oe(e) {
  let t = L.useRef(Pe),
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
var Pe = new O({ defaultOptions: { queries: { staleTime: 1 / 0 } } });
var w = u(R(), 1);
var c = u(d(), 1),
  ae = w.default.createContext(void 0);
function ie({ children: e, ...t }) {
  return (0, c.jsx)(ae.Provider, { value: t, children: e });
}
function dt() {
  let e = (0, w.useContext)(ae);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: t, clientAssets: r, loaderData: a } = e;
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
      r.preload.map((o, n) =>
        o.as === "hmr"
          ? (0, c.jsx)("script", { type: "module", src: o.href }, n)
          : o.as === "script"
            ? (0, c.jsx)(
                "link",
                {
                  rel: "modulepreload",
                  href: o.href,
                  as: o.as,
                  integrity: o.integrity,
                  crossOrigin: "anonymous",
                },
                n,
              )
            : (0, c.jsx)(
                "link",
                {
                  rel: "preload",
                  href: o.href,
                  as: o.as,
                  integrity: o.integrity,
                  crossOrigin: "anonymous",
                },
                n,
              ),
      ),
      r.css.map((o, n) =>
        (0, c.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: o.href,
            integrity: o.integrity,
            crossOrigin: "anonymous",
          },
          n,
        ),
      ),
    ],
  });
}
var A = u(R(), 1),
  ce = u(d(), 1),
  ue = (0, A.createContext)({});
function se(e) {
  return (0, ce.jsx)(ue.Provider, {
    value: e.renderContext,
    children: e.children,
  });
}
function mt() {
  return (0, A.useContext)(ue);
}
var p = u(d(), 1);
function de(e) {
  let {
    pageRoutes: t,
    clientAssets: r,
    metadata: a,
    loaderData: o,
    renderContext: n,
  } = e;
  return (
    le(),
    (0, p.jsx)(se, {
      renderContext: n,
      children: (0, p.jsx)(oe, {
        queryClient: e.queryClient,
        children: (0, p.jsx)(N, {
          state: typeof n.queryData == "string" ? z(n.queryData) : n.queryData,
          children: (0, p.jsx)($, {
            children: (0, p.jsx)(ie, {
              metadata: a,
              clientAssets: r,
              loaderData: o,
              children: (0, p.jsx)(Q, {
                ...a?.snr,
                children: (0, p.jsx)(fe, { pageRoutes: t, loaderData: o }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
function fe(e) {
  let { pageRoutes: t, index: r = 0, loaderData: a } = e,
    [o, ...n] = t,
    [i, ...s] = a,
    l;
  return (
    n.length === 0 && (l = history.state?.id),
    (0, p.jsx)(
      j,
      {
        loaderData: i,
        id: r,
        children: (0, p.jsx)(o.Component, {
          children:
            n.length > 0 &&
            (0, p.jsx)(fe, { pageRoutes: n, loaderData: s, index: r + 1 }),
        }),
      },
      l,
    )
  );
}
var k = u(d(), 1);
function me(e) {
  return (
    e !== null && typeof e == "object" && "assetData" in e && "metadata" in e
  );
}
function _e(e, t) {
  history.pushState(e, "", t);
}
function re(e) {
  history.replaceState({ ...history.state, ...e }, "");
}
function ne() {
  if (me(history.state)) return history.state;
}
var y;
function le() {
  (0, S.useEffect)(() => {
    async function e(t) {
      if (
        (y?.abort(),
        (y = new AbortController()),
        me(history.state) && history.state.loaderData)
      )
        try {
          await Me(history.state), (y = void 0);
          return;
        } catch (a) {
          console.error(a);
        }
      let r = new URL(location.href);
      await ge(r.pathname + r.search + r.hash, y?.signal), (y = void 0);
    }
    return (
      window.addEventListener("popstate", e),
      () => {
        y?.abort(), window.removeEventListener("popstate", e);
      }
    );
  }, []);
}
function pe(e, t, r, a) {
  let o = e.filter((n) => n.route?.Component).map((n) => n.route);
  if (o.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = t),
    (0, S.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, k.jsx)(S.StrictMode, {
          children: (0, k.jsx)(de, {
            pageRoutes: o,
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
        let i = n.onNavigate;
        i(t);
      }
    });
}
async function ye(e) {
  let t = 0,
    r = e.css.map(
      (o) =>
        new Promise((n) => {
          if (document.head.querySelector(`link[href="${o.href}"]`)) return n();
          let i = document.createElement("link");
          (i.rel = "preload"),
            (i.as = "style"),
            (i.href = o.href),
            (i.integrity = o.integrity),
            i.addEventListener("load", () => n()),
            i.addEventListener("error", () => n()),
            document.head.appendChild(i);
        }),
    ),
    a = await Promise.all(
      e.js.map(async (o) => {
        let n = await import(o.href);
        return "route" in n && t++, n;
      }),
    );
  return await F(), { cssPromises: r, routeModules: a, routeCount: t };
}
async function Me(e) {
  let { cssPromises: t, routeModules: r } = await ye(e.assetData);
  await Promise.all(t), pe(r, e.assetData, e.loaderData ?? [], e.metadata);
}
function T(e) {
  let t = Math.min(e, 1).toString();
  document.body.style.setProperty("--load-percentage", t);
}
var b, x;
async function ge(e, t) {
  let r,
    a,
    o,
    n = [];
  b && (clearInterval(b), (b = void 0)), x && (clearTimeout(x), (x = void 0));
  let i = 0;
  T(i),
    (x = window.setTimeout(() => {
      b = window.setInterval(() => {
        (i += Math.random() * 0.01), T(i);
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
          : (s.push(m), (i = s.length / (l || 1)), T(i));
      else {
        r = JSON.parse(m);
        let D = await ye(r);
        (n = D.cssPromises), (o = D.routeModules), (l = D.routeCount);
      }
    await Promise.all(n);
  } catch (m) {
    if (m instanceof DOMException && m.name === "AbortError") T(1);
    else throw m;
  }
  if (
    (b && (clearInterval(b), (b = void 0)),
    x && (clearTimeout(x), (x = void 0)),
    t?.aborted)
  )
    return;
  let h = await Promise.all(s.map(V));
  _e({ assetData: r, metadata: a, loaderData: h, id: C }, e), pe(o, r, h, a);
}
async function wt(e) {
  y?.abort(), (y = new AbortController());
  try {
    await ge(e, y.signal);
  } catch (t) {
    console.error(t), (location.href = e);
  }
  y = void 0;
}
export {
  Le as a,
  Re as b,
  ke as c,
  Fe as d,
  Ee as e,
  Ne as f,
  Qe as g,
  H as h,
  Se as i,
  B as j,
  V as k,
  nt as l,
  ot as m,
  _e as n,
  re as o,
  ne as p,
  le as q,
  wt as r,
  dt as s,
  mt as t,
  de as u,
};
