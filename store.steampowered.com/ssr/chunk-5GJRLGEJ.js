const CLSTAMP = 9703338;

import { a as l } from "./chunk-DNN4MHIH.js";
import { k as d, u as m } from "./chunk-CIO44HRJ.js";
import { b as r } from "./chunk-ANX6RKE6.js";
import { s as i } from "./chunk-6ZT5Z6YV.js";
import { o as a } from "./chunk-INHMP3CA.js";
import { a as u } from "./chunk-FO667VDJ.js";
import { d as o } from "./chunk-3UOKURNK.js";
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
