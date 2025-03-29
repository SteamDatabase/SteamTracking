const CLSTAMP = 9643551;

import { a as l } from "./chunk-5PQMM7W6.js";
import { k as d, u as m } from "./chunk-UZBUZZHA.js";
import { b as r } from "./chunk-5B3GZGH4.js";
import { r as i } from "./chunk-RSFMXIKC.js";
import { o as a } from "./chunk-5DRJZ3VL.js";
import { a as u } from "./chunk-65YUODX3.js";
import { d as o } from "./chunk-6W5PXMM2.js";
var c = o(u(), 1),
  p = o(l(), 1);
function s() {
  let e = document.querySelector("head meta[property='valve:snr']")?.content;
  return {
    title: document.title,
    description: document.querySelector("head meta[property='description']")
      ?.content,
    shareTitle: document.querySelector("head meta[property='og:title']")
      ?.content,
    shareImage: document.querySelector("head meta[property='og:image']")
      ?.content,
    snr: e ? i.ParseSNR(e) : void 0,
    csp: void 0,
  };
}
var n = o(a(), 1);
async function S() {
  let e = await Promise.all(
    window.SSR?.clientAssets?.js.map((t) => import(t.href)) ?? [],
  );
  return (
    await r(),
    e.filter((t) => "route" in t && "Component" in t.route).map((t) => t.route)
  );
}
async function P() {
  if (window.SSR?.reactRoot) return;
  let e = await S();
  if (((window.SSR ??= {}), !window.SSR.clientAssets))
    throw "Missing SSR clientAssets";
  window.SSR.reactRoot = (0, p.hydrateRoot)(
    document,
    (0, n.jsx)(c.StrictMode, {
      children: (0, n.jsx)(m, {
        pageRoutes: e,
        clientAssets: window.SSR.clientAssets,
        metadata: s(),
        loaderData: (window.SSR.loaderData ?? []).map(d),
        renderContext: window.SSR.renderContext ?? {},
      }),
    }),
  );
}
export { s as a, P as b };
