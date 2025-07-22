import { a as t, b as u } from "./chunk-BBE3L65K.js";
import "./chunk-JNHGKY4K.js";
import "./chunk-6A3EC7Z4.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-IWKERGOV.js";
import "./chunk-SEXDIPWB.js";
import "./chunk-BIOLO7FT.js";
import "./chunk-XAVWBSYL.js";
import "./chunk-2JQZQ44F.js";
import "./chunk-7HR4H3FY.js";
import "./chunk-6LV3XD5Z.js";
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
