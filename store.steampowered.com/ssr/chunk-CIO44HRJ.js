const CLSTAMP = 9703338;

import { b as O } from "./chunk-F7TFDDWC.js";
import { b as F, e as v, f as _ } from "./chunk-ANX6RKE6.js";
import { f as I, s as E, u as N } from "./chunk-6ZT5Z6YV.js";
import { l as k, o as d } from "./chunk-INHMP3CA.js";
import { a as x } from "./chunk-FO667VDJ.js";
import { d as s } from "./chunk-3UOKURNK.js";
var y = s(x(), 1),
  Y = s(d(), 1);
function U(e) {
  let [t, r] = (0, y.useState)(!1);
  return (
    (0, y.useEffect)(() => {
      (0, y.startTransition)(() => {
        r(!0);
      });
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
  Ce = $ && decodeURIComponent($);
function ye() {
  document.cookie = `timezoneName=${ge};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
ye();
var P = s(x(), 1);
function he(e, ...t) {
  let r = [],
    a = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    i = 0,
    n;
  for (; (n = a.exec(e)); ) {
    (i += n[0].length), r.push(n[1]);
    let o = parseInt(n[2]),
      u = n[3] || "",
      l = he(u, ...t),
      h = (o >= 1 && o <= t.length ? t[o - 1] : null)
        ? P.default.cloneElement(t[o - 1], {}, u ? l : null)
        : u;
    r.push(h);
  }
  return (
    r.push(e.substr(i)), P.default.createElement(P.default.Fragment, null, ...r)
  );
}
function Ae(e) {
  return e.toLocaleString(_());
}
var He = {
  PerYear: 31536e3,
  PerMonth: 2628e3,
  PerWeek: 604800,
  PerDay: 86400,
  PerHour: 3600,
  PerMinute: 60,
};
function Fe(e, t) {
  let r = new Date(e * 1e3),
    a = { year: "numeric", month: "short", day: "numeric", ...t };
  return r.toLocaleDateString(_(), a);
}
function De(e) {
  let t = new Date();
  t.setHours(15);
  let r = t.toLocaleTimeString(e, { hour: "numeric" }),
    a = t.toLocaleTimeString(e, { hour: "numeric", hour12: !1 });
  return r == a;
}
function ve(e, t, r) {
  let a = new Date(e * 1e3),
    i = { hour: "numeric", minute: "2-digit", hourCycle: "h23" },
    n = { hour: "numeric", minute: "2-digit" },
    o = _(),
    l = { ...(t?.bForce24HourClock || De(o[0]) ? i : n), ...r };
  return a.toLocaleTimeString(o, l);
}
function Ee() {
  return v().languages[0];
}
var Q = "x-valve-request-type",
  q = "x-valve-loader-index",
  X = "x-valve-refetch-payload";
async function* Le(e) {
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
async function* T(e, t, r) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-HLOO4IBT.js"));
  let a = new Headers(r);
  a.append(Q, "routeData");
  let n = (
    await fetch(e, { credentials: "same-origin", headers: a, signal: t })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!n) throw "no response body reader";
  for await (let o of Le(n)) {
    if (t?.aborted) return;
    yield o;
  }
}
async function Re(e, t, r, a) {
  let i = [],
    n = t.map((o) => [q, o.toString()]);
  r !== void 0 && n.push([X, r]);
  for await (let o of T(e, a, n)) i.push(JSON.parse(o));
  return i;
}
async function W(e, t, r, a) {
  return (await Re(e, [t], r, a))[0];
}
var b = s(x(), 1);
var f = s(x(), 1);
var K = s(d(), 1);
function xe(e) {
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
      let a = xe(r._t);
      return a ? new a(r.v) : r;
    }
    return r;
  });
}
function G(e) {
  return e ? H(e) : null;
}
var J = Symbol.for("No loader context"),
  B = (0, f.createContext)(J);
function V(e) {
  let [t, r] = (0, f.useState)(e.loaderData),
    [a, i] = (0, f.useState)(),
    n = (0, f.useCallback)(
      async (o) => {
        let u = new URL(location.href),
          l = u.pathname + u.search + u.hash,
          S = o ? JSON.stringify(o) : "",
          h = l + S;
        if (a) {
          if (a.fetchKey === h) return a.promise;
          a.abortController.abort();
        }
        let m = new AbortController(),
          D = W(l, e.id, o ? S : void 0, m.signal);
        i({ promise: D, abortController: m, fetchKey: h });
        try {
          let C = await D;
          return r(C), i(void 0), C;
        } catch (C) {
          if (!m.signal.aborted) throw (i(void 0), C);
        }
        return D;
      },
      [e.id, a],
    );
  return (
    (0, f.useEffect)(() => {
      r(e.loaderData);
      {
        let o = ee();
        if (o?.loaderData) {
          let u = [...o.loaderData];
          (u[e.id] = e.loaderData), j({ ...o, loaderData: u });
        }
      }
    }, [e.loaderData, e.id]),
    (0, K.jsx)(B.Provider, {
      value: { loaderData: t, refetchFn: n, fetchState: a },
      children: e.children,
    })
  );
}
function Z(e) {
  let t = (0, f.useContext)(B);
  if (t === J) throw `Used ${e} outside of LoaderContext`;
  return t;
}
function je() {
  return Z("useLoaderData").loaderData;
}
function et() {
  return Z("useRefetchLoader").refetchFn;
}
var w = s(x(), 1);
var M = s(x(), 1),
  oe = s(d(), 1),
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
var c = s(d(), 1),
  ae = w.default.createContext(void 0);
function ie({ children: e, ...t }) {
  return (0, c.jsx)(ae.Provider, { value: t, children: e });
}
function it() {
  let e = (0, w.useContext)(ae);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: t, clientAssets: r, loaderData: a } = e,
    i = ne();
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1${k.IN_MOBILE ? ",user-scalable=no" : ""}`,
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
var p = s(d(), 1);
function ue(e) {
  let {
    pageRoutes: t,
    clientAssets: r,
    metadata: a,
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
              metadata: a,
              clientAssets: r,
              loaderData: i,
              children: (0, p.jsx)(N, {
                ...a?.snr,
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
  let { pageRoutes: t, index: r = 0, loaderData: a } = e,
    [i, ...n] = t,
    [o, ...u] = a,
    l;
  return (
    n.length === 0 && (l = history.state?.id),
    (0, p.jsx)(
      V,
      {
        loaderData: o,
        id: r,
        children: (0, p.jsx)(i.Component, {
          children:
            n.length > 0 &&
            (0, p.jsx)(ce, { pageRoutes: n, loaderData: u, index: r + 1 }),
        }),
      },
      l,
    )
  );
}
var z = s(d(), 1);
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
  (0, b.useEffect)(() => {
    async function e(t) {
      if (
        (g?.abort(),
        (g = new AbortController()),
        le(history.state) && history.state.loaderData)
      )
        try {
          await Se(history.state), (g = void 0);
          return;
        } catch (a) {
          console.error(a);
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
function de(e, t, r, a) {
  let i = e.filter((n) => n.route?.Component).map((n) => n.route);
  if (i.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = t),
    (0, b.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, z.jsx)(b.StrictMode, {
          children: (0, z.jsx)(ue, {
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
async function fe(e) {
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
async function Se(e) {
  let { cssPromises: t, routeModules: r } = await fe(e.assetData);
  await Promise.all(t), de(r, e.assetData, e.loaderData ?? [], e.metadata);
}
function A(e) {
  let t = Math.min(e, 1).toString();
  document.body.style.setProperty("--load-percentage", t);
}
var L, R;
async function me(e, t) {
  let r,
    a,
    i,
    n = [];
  L && (clearInterval(L), (L = void 0)), R && (clearTimeout(R), (R = void 0));
  let o = 0;
  A(o),
    (R = window.setTimeout(() => {
      L = window.setInterval(() => {
        (o += Math.random() * 0.01), A(o);
      }, 50);
    }, 200));
  let u = [],
    l = 0,
    S = (history.state?.id ?? -1) + 1;
  try {
    for await (let m of T(e, t))
      if (r)
        a === void 0
          ? (a = JSON.parse(m))
          : (u.push(m), (o = u.length / (l || 1)), A(o));
      else {
        r = JSON.parse(m);
        let D = await fe(r);
        (n = D.cssPromises), (i = D.routeModules), (l = D.routeCount);
      }
    await Promise.all(n);
  } catch (m) {
    if (m instanceof DOMException && m.name === "AbortError") A(1);
    else throw m;
  }
  if (
    (L && (clearInterval(L), (L = void 0)),
    R && (clearTimeout(R), (R = void 0)),
    t?.aborted)
  )
    return;
  let h = await Promise.all(u.map(G));
  be({ assetData: r, metadata: a, loaderData: h, id: S }, e), de(i, r, h, a);
}
async function xt(e) {
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
  Ae as c,
  He as d,
  Fe as e,
  ve as f,
  Ee as g,
  T as h,
  Re as i,
  W as j,
  G as k,
  je as l,
  et as m,
  be as n,
  j as o,
  ee as p,
  se as q,
  xt as r,
  ne as s,
  it as t,
  ue as u,
};
