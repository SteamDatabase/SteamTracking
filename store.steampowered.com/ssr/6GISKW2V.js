import { a as t, b as u } from "./chunk-C5HSOVXU.js";
import "./chunk-TLZYMTJU.js";
import "./chunk-QEWMQERG.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-6AUPWTFQ.js";
import "./chunk-XA5IZHNA.js";
import "./chunk-RNS2O5JQ.js";
import "./chunk-OEXNR4NM.js";
import "./chunk-ZZOBHWVT.js";
import "./chunk-3GMFNQR5.js";
import "./chunk-VTJ2AC5Q.js";
function n(s) {
  if (
    (window.SSR?.reactRoot ||
      e({
        assetData: s,
        metadata: t(),
        loaderData: window.SSR?.loaderData ?? [],
        id: 0,
        renderContext: window.SSR?.renderContext ?? {},
      }),
    0)
  )
    var a;
}
if (!window.SSR?.reactRoot) {
  if (!window.SSR?.clientAssets) throw "Missing SSR clientAssets";
  n(window.SSR?.clientAssets);
}
export {
  u as ClientReactInit,
  p as FetchLoader,
  g as FetchLoaders,
  m as FetchRouteData,
  C as NavigateToRoute,
  A as getPageHistoryState,
  n as onNavigate,
  w as pushPageHistoryState,
  e as replacePageHistoryState,
  h as useClientSideNavigation,
};
