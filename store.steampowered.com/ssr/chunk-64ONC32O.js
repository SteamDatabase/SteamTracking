const CLSTAMP = 9493458;

import { a as q } from "./chunk-KZY6NBES.js";
import { a as N, c as T, d as M } from "./chunk-BGAGHGNG.js";
import { a as F, c as U, e as O, r as Q, t as z } from "./chunk-4QLSSORS.js";
import { j as E, l as C, m as u } from "./chunk-IZ7IA66A.js";
import { d as s } from "./chunk-NFYHIITG.js";
var R = s(C(), 1),
  V = s(u(), 1);
function J(e) {
  let [t, r] = (0, R.useState)(!1);
  return (
    (0, R.useEffect)(() => {
      (0, R.startTransition)(() => {
        r(!0);
      });
    }, []),
    (0, V.jsx)(he.Provider, { value: t, children: e.children })
  );
}
var he = (0, R.createContext)(!1);
var ge = Intl.DateTimeFormat().resolvedOptions().timeZone,
  $ = document.cookie
    .split(";")
    .find((e) => e.trim().startsWith("timezoneName"))
    ?.split("=")[1],
  ve = $ && decodeURIComponent($);
function Ce() {
  document.cookie = `timezoneName=${ge};expires=${new Date(Date.now() + 36e5 * 24 * 365).toUTCString()};path=/;Secure;SameSite=None;`;
}
Ce();
var L = s(C(), 1);
function xe(e, ...t) {
  let r = [],
    a = new RegExp(/(.*?)<(\d+)>(.*?)<\/(\2)>/, "gs"),
    o = 0,
    n;
  for (; (n = a.exec(e)); ) {
    (o += n[0].length), r.push(n[1]);
    let i = parseInt(n[2]),
      d = n[3] || "",
      y = xe(d, ...t),
      h = (i >= 1 && i <= t.length ? t[i - 1] : null)
        ? L.default.cloneElement(t[i - 1], {}, d ? y : null)
        : d;
    r.push(h);
  }
  return (
    r.push(e.substr(o)), L.default.createElement(L.default.Fragment, null, ...r)
  );
}
function Ie(e) {
  return e.toLocaleString(M());
}
function Te() {
  return T().languages[0];
}
var B = "x-valve-request-type",
  G = "x-valve-loader-index",
  K = "x-valve-refetch-payload";
async function* Se(e) {
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
async function* k(e, t, r) {
  "TextDecoderStream" in window ||
    (await import("./streampolyfill-7AYN3LDA.js"));
  let a = new Headers(r);
  a.append(B, "routeData");
  let n = (
    await fetch(e, { credentials: "same-origin", headers: a, signal: t })
  ).body
    ?.pipeThrough(new TextDecoderStream())
    .getReader();
  if (!n) throw "no response body reader";
  for await (let i of Se(n)) {
    if (t?.aborted) return;
    yield i;
  }
}
async function we(e, t, r, a) {
  let o = [],
    n = t.map((i) => [G, i.toString()]);
  r !== void 0 && n.push([K, r]);
  for await (let i of k(e, a, n)) o.push(JSON.parse(i));
  return o;
}
async function W(e, t, r, a) {
  return (await we(e, [t], r, a))[0];
}
var A = s(C(), 1);
var l = s(C(), 1);
var te = s(u(), 1);
function Ae(e) {
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
      let a = Ae(r._t);
      return a ? new a(r.v) : r;
    }
    return r;
  });
}
function Z(e) {
  return e ? H(e) : null;
}
var X = Symbol.for("No loader context"),
  Y = (0, l.createContext)(X);
function j(e) {
  let [t, r] = (0, l.useState)(e.loaderData),
    [a, o] = (0, l.useState)(),
    n = (0, l.useCallback)(
      async (i) => {
        let d = new URL(location.href),
          y = d.pathname + d.search + d.hash,
          D = i ? JSON.stringify(i) : "",
          h = y + D;
        if (a) {
          if (a.fetchKey === h) return a.promise;
          a.abortController.abort();
        }
        let f = new AbortController(),
          g = W(y, e.id, i ? D : void 0, f.signal);
        o({ promise: g, abortController: f, fetchKey: h });
        try {
          let P = await g;
          return r(P), o(void 0), P;
        } catch (P) {
          if (!f.signal.aborted) throw (o(void 0), P);
        }
        return g;
      },
      [e.id, a],
    );
  return (
    (0, l.useEffect)(() => {
      r(e.loaderData);
      {
        let i = ne();
        if (i?.loaderData) {
          let d = [...i.loaderData];
          (d[e.id] = e.loaderData), re({ ...i, loaderData: d });
        }
      }
    }, [e.loaderData, e.id]),
    (0, te.jsx)(Y.Provider, {
      value: { loaderData: t, refetchFn: n, fetchState: a },
      children: e.children,
    })
  );
}
function ee(e) {
  let t = (0, l.useContext)(Y);
  if (t === X) throw `Used ${e} outside of LoaderContext`;
  return t;
}
function Ze() {
  return ee("useLoaderData").loaderData;
}
function Xe() {
  return ee("useRefetchLoader").refetchFn;
}
var x = s(C());
function oe(e) {
  let t = x.useRef(De),
    r = e.children;
  return (
    e.debug &&
      (r = [
        ...x.Children.toArray(r),
        x.createElement(q, { key: "ReactQueryDevtools" }),
      ]),
    x.createElement(U, { client: e.queryClient ?? t.current }, r)
  );
}
var De = new F({ defaultOptions: { queries: { staleTime: 1 / 0 } } });
var _ = s(C(), 1);
var c = s(u(), 1),
  ae = _.default.createContext(void 0);
function ie({ children: e, ...t }) {
  return (0, c.jsx)(ae.Provider, { value: t, children: e });
}
function ot() {
  let e = (0, _.useContext)(ae);
  if (!e) throw new Error("Used <Head /> outside of router context");
  let { metadata: t, clientAssets: r, loaderData: a } = e;
  return (0, c.jsxs)(c.Fragment, {
    children: [
      (0, c.jsx)("meta", {
        name: "viewport",
        content: `width=device-width,initial-scale=1${E.IN_MOBILE ? ",user-scalable=no" : ""}`,
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
      r.preload.map((o, n) =>
        o.as === "script"
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
var v = s(C(), 1),
  ce = s(u(), 1),
  se = (0, v.createContext)({});
function de(e) {
  return (0, ce.jsx)(se.Provider, {
    value: e.renderContext,
    children: e.children,
  });
}
function it() {
  return (0, v.useContext)(se);
}
var m = s(u(), 1);
function le(e) {
  let {
    pageRoutes: t,
    clientAssets: r,
    metadata: a,
    loaderData: o,
    renderContext: n,
  } = e;
  return (
    ue(),
    (0, m.jsx)(de, {
      renderContext: n,
      children: (0, m.jsx)(oe, {
        queryClient: e.queryClient,
        children: (0, m.jsx)(O, {
          state: typeof n.queryData == "string" ? H(n.queryData) : n.queryData,
          children: (0, m.jsx)(J, {
            children: (0, m.jsx)(ie, {
              metadata: a,
              clientAssets: r,
              loaderData: o,
              children: (0, m.jsx)(z, {
                ...a?.snr,
                children: (0, m.jsx)(fe, { pageRoutes: t, loaderData: o }),
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
    [i, ...d] = a,
    y;
  return (
    n.length === 0 && (y = history.state?.id),
    (0, m.jsx)(
      j,
      {
        loaderData: i,
        id: r,
        children: (0, m.jsx)(o.Component, {
          children:
            n.length > 0 &&
            (0, m.jsx)(fe, { pageRoutes: n, loaderData: d, index: r + 1 }),
        }),
      },
      y,
    )
  );
}
var I = s(u(), 1);
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
var p;
function ue() {
  (0, A.useEffect)(() => {
    async function e(t) {
      if (
        (p?.abort(),
        (p = new AbortController()),
        me(history.state) && history.state.loaderData)
      )
        try {
          await Le(history.state), (p = void 0);
          return;
        } catch (a) {
          console.error(a);
        }
      let r = new URL(location.href);
      await Re(r.pathname + r.search + r.hash, p?.signal), (p = void 0);
    }
    return (
      window.addEventListener("popstate", e),
      () => {
        p?.abort(), window.removeEventListener("popstate", e);
      }
    );
  }, []);
}
function ye(e, t, r, a) {
  let o = e.filter((n) => n.route?.Component).map((n) => n.route);
  if (o.length === 0) throw "no routemodule with a component, can't render";
  (window.SSR ??= {}),
    (window.SSR.clientAssets = t),
    (0, A.startTransition)(() => {
      window.SSR?.reactRoot?.render(
        (0, I.jsx)(A.StrictMode, {
          children: (0, I.jsx)(le, {
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
async function pe(e) {
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
  return await N(), { cssPromises: r, routeModules: a, routeCount: t };
}
async function Le(e) {
  let { cssPromises: t, routeModules: r } = await pe(e.assetData);
  await Promise.all(t), ye(r, e.assetData, e.loaderData ?? [], e.metadata);
}
function b(e) {
  let t = Math.min(e, 1).toString();
  document.body.style.setProperty("--load-percentage", t);
}
var S, w;
async function Re(e, t) {
  let r,
    a,
    o,
    n = [];
  S && (clearInterval(S), (S = void 0)), w && (clearTimeout(w), (w = void 0));
  let i = 0;
  b(i),
    (w = window.setTimeout(() => {
      S = window.setInterval(() => {
        (i += Math.random() * 0.01), b(i);
      }, 50);
    }, 200));
  let d = [],
    y = 0,
    D = (history.state?.id ?? -1) + 1;
  try {
    for await (let f of k(e, t))
      if (r)
        a === void 0
          ? (a = JSON.parse(f))
          : (d.push(f), (i = d.length / (y || 1)), b(i));
      else {
        r = JSON.parse(f);
        let g = await pe(r);
        (n = g.cssPromises), (o = g.routeModules), (y = g.routeCount);
      }
    await Promise.all(n);
  } catch (f) {
    if (f instanceof DOMException && f.name === "AbortError") b(1);
    else throw f;
  }
  if (
    (S && (clearInterval(S), (S = void 0)),
    w && (clearTimeout(w), (w = void 0)),
    t?.aborted)
  )
    return;
  let h = await Promise.all(d.map(Z));
  Pe({ assetData: r, metadata: a, loaderData: h, id: D }, e), ye(o, r, h, a);
}
async function St(e) {
  p?.abort(), (p = new AbortController());
  try {
    await Re(e, p.signal);
  } catch (t) {
    console.error(t), (location.href = e);
  }
  p = void 0;
}
export {
  xe as a,
  Ce as b,
  Ie as c,
  Te as d,
  k as e,
  we as f,
  W as g,
  Z as h,
  Ze as i,
  Xe as j,
  Pe as k,
  re as l,
  ne as m,
  ue as n,
  St as o,
  ot as p,
  it as q,
  le as r,
};
