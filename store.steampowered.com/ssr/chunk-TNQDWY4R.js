const CLSTAMP = 9511701;

import { a as U } from "./chunk-GVHKDXDE.js";
import { a as F, c as I, d as _ } from "./chunk-MFIZ7YX2.js";
import { a as O, c as E, e as N, r as Q, t as Y } from "./chunk-5GHSG7P2.js";
import { j as v, l as R, m as d } from "./chunk-AOQ5VFYG.js";
import { d as s } from "./chunk-GO2YC36H.js";
var g = s(R(), 1),
  q = s(d(), 1);
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
var w = s(R(), 1);
function Le(e, ...t) {
  let r = [],
    o = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    a = 0,
    n;
  for (; (n = o.exec(e)); ) {
    (a += n[0].length), r.push(n[1]);
    let i = parseInt(n[2]),
      u = n[3] || "",
      l = Le(u, ...t),
      h = (i >= 1 && i <= t.length ? t[i - 1] : null)
        ? w.default.cloneElement(t[i - 1], {}, u ? l : null)
        : u;
    r.push(h);
  }
  return (
    r.push(e.substr(a)), w.default.createElement(w.default.Fragment, null, ...r)
  );
}
function ke(e) {
  return e.toLocaleString(_());
}
function Ie(e, t) {
  let r = new Date(e * 1e3),
    o = { year: "numeric", month: "short", day: "numeric", ...t };
  return r.toLocaleDateString(_(), o);
}
function be(e) {
  let t = new Date();
  t.setHours(15);
  let r = t.toLocaleTimeString(e, { hour: "numeric" }),
    o = t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
  return r == o;
}
function Oe(e, t, r) {
  let o = new Date(e * 1e3),
    a = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    n = { hour: "numeric", minute: "2-digit" },
    i = _(),
    l = { ...(t?.bForce24HourClock || be(i[0]) ? a : n), ...r };
  return o.toLocaleTimeString(i, l);
}
function Ue() {
  return I().languages[0];
}
var W = "x-valve-request-type",
  G = "x-valve-loader-index",
  J = "x-valve-refetch-payload";
async function* xe(e) {
  let t = "";
  for (;;) {
    let { done: r, value: o } = await e.read();
    if (r || o === void 0) break;
    t += o;
    let a = t.split(`
`);
    if (a.length !== 0) {
      t = a.pop();
      for (let n of a) yield n;
    }
  }
  t !== "" && (yield t);
}
async function* z(e, t, r) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-2HSYWXQ6.js"));
  let o = new Headers(r);
  o.append(W, "routeData");
  let n = (
    await fetch(e, { credentials: "same-origin", headers: o, signal: t })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!n) throw "no response body reader";
  for await (let i of xe(n)) {
    if (t?.aborted) return;
    yield i;
  }
}
async function Se(e, t, r, o) {
  let a = [],
    n = t.map((i) => [G, i.toString()]);
  r !== void 0 && n.push([J, r]);
  for await (let i of z(e, o, n)) a.push(JSON.parse(i));
  return a;
}
async function V(e, t, r, o) {
  return (await Se(e, [t], r, o))[0];
}
var S = s(R(), 1);
var f = s(R(), 1);
var te = s(d(), 1);
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
function H(e) {
  return JSON.parse(e, (t, r) => {
    if (r && typeof r == "object" && "_t" in r) {
      let o = Ce(r._t);
      return o ? new o(r.v) : r;
    }
    return r;
  });
}
function Z(e) {
  return e ? H(e) : null;
}
var B = Symbol.for("No loader context"),
  K = (0, f.createContext)(B);
function j(e) {
  let [t, r] = (0, f.useState)(e.loaderData),
    [o, a] = (0, f.useState)(),
    n = (0, f.useCallback)(
      async (i) => {
        let u = new URL(location.href),
          l = u.pathname + u.search + u.hash,
          C = i ? JSON.stringify(i) : "",
          h = l + C;
        if (o) {
          if (o.fetchKey === h) return o.promise;
          o.abortController.abort();
        }
        let m = new AbortController(),
          D = V(l, e.id, i ? C : void 0, m.signal);
        a({ promise: D, abortController: m, fetchKey: h });
        try {
          let P = await D;
          return r(P), a(void 0), P;
        } catch (P) {
          if (!m.signal.aborted) throw (a(void 0), P);
        }
        return D;
      },
      [e.id, o],
    );
  return (
    (0, f.useEffect)(() => {
      r(e.loaderData);
      {
        let i = ne();
        if (i?.loaderData) {
          let u = [...i.loaderData];
          (u[e.id] = e.loaderData), re({ ...i, loaderData: u });
        }
      }
    }, [e.loaderData, e.id]),
    (0, te.jsx)(K.Provider, {
      value: { loaderData: t, refetchFn: n, fetchState: o },
      children: e.children,
    })
  );
}
function ee(e) {
  let t = (0, f.useContext)(K);
  if (t === B) throw `Used ${e} outside of LoaderContext`;
  return t;
}
function tt() {
  return ee("useLoaderData").loaderData;
}
function rt() {
  return ee("useRefetchLoader").refetchFn;
}
var L = s(R());
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
var M = s(R(), 1);
var c = s(d(), 1),
  ae = M.default.createContext(void 0);
function ie({ children: e, ...t }) {
  return (0, c.jsx)(ae.Provider, { value: t, children: e });
}
function ct() {
  let e = (0, M.useContext)(ae);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: t, clientAssets: r, loaderData: o } = e;
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
          content: Q.ComputeLinkPrefix(
            t.snr.domain,
            t.snr.controller,
            t.snr.method,
            t.snr.submethod,
          ),
        }),
      r.preload.map((a, n) =>
        a.as === "script"
          ? (0, c.jsx)(
              "link",
              {
                rel: "modulepreload",
                href: a.href,
                as: a.as,
                integrity: a.integrity,
                crossOrigin: "anonymous",
              },
              n,
            )
          : (0, c.jsx)(
              "link",
              {
                rel: "preload",
                href: a.href,
                as: a.as,
                integrity: a.integrity,
                crossOrigin: "anonymous",
              },
              n,
            ),
      ),
      r.css.map((a, n) =>
        (0, c.jsx)(
          "link",
          {
            rel: "stylesheet",
            href: a.href,
            integrity: a.integrity,
            crossOrigin: "anonymous",
          },
          n,
        ),
      ),
    ],
  });
}
var A = s(R(), 1),
  ce = s(d(), 1),
  se = (0, A.createContext)({});
function ue(e) {
  return (0, ce.jsx)(se.Provider, {
    value: e.renderContext,
    children: e.children,
  });
}
function dt() {
  return (0, A.useContext)(se);
}
var p = s(d(), 1);
function de(e) {
  let {
    pageRoutes: t,
    clientAssets: r,
    metadata: o,
    loaderData: a,
    renderContext: n,
  } = e;
  return (
    le(),
    (0, p.jsx)(ue, {
      renderContext: n,
      children: (0, p.jsx)(oe, {
        queryClient: e.queryClient,
        children: (0, p.jsx)(N, {
          state: typeof n.queryData == "string" ? H(n.queryData) : n.queryData,
          children: (0, p.jsx)($, {
            children: (0, p.jsx)(ie, {
              metadata: o,
              clientAssets: r,
              loaderData: a,
              children: (0, p.jsx)(Y, {
                ...o?.snr,
                children: (0, p.jsx)(fe, { pageRoutes: t, loaderData: a }),
              }),
            }),
          }),
        }),
      }),
    })
  );
}
function fe(e) {
  let { pageRoutes: t, index: r = 0, loaderData: o } = e,
    [a, ...n] = t,
    [i, ...u] = o,
    l;
  return (
    n.length === 0 && (l = history.state?.id),
    (0, p.jsx)(
      j,
      {
        loaderData: i,
        id: r,
        children: (0, p.jsx)(a.Component, {
          children:
            n.length > 0 &&
            (0, p.jsx)(fe, { pageRoutes: n, loaderData: u, index: r + 1 }),
        }),
      },
      l,
    )
  );
}
var k = s(d(), 1);
function me(e) {
  return (
    e !== null && typeof e == "object" && "assetData" in e && "metadata" in e
  );
}
function Pe(e, t) {
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
          await we(history.state), (y = void 0);
          return;
        } catch (o) {
          console.error(o);
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
function pe(e, t, r, o) {
  let a = e.filter((n) => n.route?.Component).map((n) => n.route);
  if (a.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = t),
    (0, S.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, k.jsx)(S.StrictMode, {
          children: (0, k.jsx)(de, {
            pageRoutes: a,
            clientAssets: t,
            loaderData: r,
            metadata: o,
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
      (a) =>
        new Promise((n) => {
          if (document.head.querySelector(`link[href="${a.href}"]`)) return n();
          let i = document.createElement("link");
          (i.rel = "preload"),
            (i.as = "style"),
            (i.href = a.href),
            (i.integrity = a.integrity),
            i.addEventListener("load", () => n()),
            i.addEventListener("error", () => n()),
            document.head.appendChild(i);
        }),
    ),
    o = await Promise.all(
      e.js.map(async (a) => {
        let n = await import(a.href);
        return "route" in n && t++, n;
      }),
    );
  return await F(), { cssPromises: r, routeModules: o, routeCount: t };
}
async function we(e) {
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
    o,
    a,
    n = [];
  b && (clearInterval(b), (b = void 0)), x && (clearTimeout(x), (x = void 0));
  let i = 0;
  T(i),
    (x = window.setTimeout(() => {
      b = window.setInterval(() => {
        (i += Math.random() * 0.01), T(i);
      }, 50);
    }, 200));
  let u = [],
    l = 0,
    C = (history.state?.id ?? -1) + 1;
  try {
    for await (let m of z(e, t))
      if (r)
        o === void 0
          ? (o = JSON.parse(m))
          : (u.push(m), (i = u.length / (l || 1)), T(i));
      else {
        r = JSON.parse(m);
        let D = await ye(r);
        (n = D.cssPromises), (a = D.routeModules), (l = D.routeCount);
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
  let h = await Promise.all(u.map(Z));
  Pe({ assetData: r, metadata: o, loaderData: h, id: C }, e), pe(a, r, h, o);
}
async function Pt(e) {
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
  Ie as d,
  Oe as e,
  Ue as f,
  z as g,
  Se as h,
  V as i,
  Z as j,
  tt as k,
  rt as l,
  Pe as m,
  re as n,
  ne as o,
  le as p,
  Pt as q,
  ct as r,
  dt as s,
  de as t,
};
