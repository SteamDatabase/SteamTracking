import { a as t, b as u } from "./chunk-T4URIVGD.js";
import "./chunk-ZSBICAKO.js";
import "./chunk-I4BCDFNF.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-P55UMZFD.js";
import "./chunk-USMZQ456.js";
import "./chunk-QAZZD66A.js";
import "./chunk-R2DII6BZ.js";
import "./chunk-IWW7GU2Z.js";
import "./chunk-HFH74SGA.js";
import "./chunk-DGTYJ2T6.js";
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
