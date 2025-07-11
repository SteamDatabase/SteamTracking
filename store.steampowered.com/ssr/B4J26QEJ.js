import { a as t, b as u } from "./chunk-NPX7LUHA.js";
import "./chunk-E7TXO5C5.js";
import "./chunk-6R6KJEAN.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-AUDZNT7H.js";
import "./chunk-KRZDEZH4.js";
import "./chunk-ESO2MADC.js";
import "./chunk-MLNLBAGP.js";
import "./chunk-EBKRQ6N4.js";
import "./chunk-QTDHWPQ4.js";
import "./chunk-O6MHZU76.js";
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
