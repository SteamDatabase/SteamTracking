import { a as t, b as u } from "./chunk-AOPNBKEU.js";
import "./chunk-7ZNB57HM.js";
import "./chunk-WPXXG3ZM.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-V4PQJSF5.js";
import "./chunk-UADAA2YO.js";
import "./chunk-IWD5Y773.js";
import "./chunk-OELMNAT4.js";
import "./chunk-T4K7M5DN.js";
import "./chunk-4KB54E2E.js";
import "./chunk-QCEAHXA2.js";
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
