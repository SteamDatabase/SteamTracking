const CLSTAMP = 9493458;

import { a as l } from "./chunk-WBD6ESNQ.js";
import { h as d, r as m } from "./chunk-64ONC32O.js";
import { a as r } from "./chunk-BGAGHGNG.js";
import { r as i } from "./chunk-4QLSSORS.js";
import { l as u, m as a } from "./chunk-IZ7IA66A.js";
import { d as o } from "./chunk-NFYHIITG.js";
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
