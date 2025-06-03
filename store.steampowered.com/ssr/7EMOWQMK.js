import { a as t, b as u } from "./chunk-F4WTJEXJ.js";
import "./chunk-EAIAD2OL.js";
import "./chunk-HPBLEJNB.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-PO6AE2FE.js";
import "./chunk-X2WX4KSG.js";
import "./chunk-ASGXZXEK.js";
import "./chunk-AGB23OGL.js";
import "./chunk-AOJZQCTP.js";
import "./chunk-FE3UJBDM.js";
import "./chunk-O6NXYQVQ.js";
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
