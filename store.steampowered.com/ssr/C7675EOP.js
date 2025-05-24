import { a as t, b as u } from "./chunk-EQRZFBJG.js";
import "./chunk-C27O67RK.js";
import "./chunk-OS5OWQDG.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-5RUL6AKW.js";
import "./chunk-4Z5Z3QES.js";
import "./chunk-3PHHZIMZ.js";
import "./chunk-3LPBMLIJ.js";
import "./chunk-RUYVYIOK.js";
import "./chunk-WJKEW7TD.js";
import "./chunk-RVRE4EKH.js";
function n(s) {
  if (
    (window.SSR?.reactRoot ||
      e({
        assetData: s,
        metadata: t(),
        loaderData: window.SSR?.loaderData ?? [],
        id: 0,
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
