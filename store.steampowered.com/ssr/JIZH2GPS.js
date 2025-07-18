import { a as t, b as u } from "./chunk-LW4YHQPP.js";
import "./chunk-5GQXUOM2.js";
import "./chunk-JFIWTN3S.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-65YMABNY.js";
import "./chunk-SB2MMXKX.js";
import "./chunk-RR2M2CJG.js";
import "./chunk-TBGOSV3U.js";
import "./chunk-IN63BXCF.js";
import "./chunk-K32VMO2L.js";
import "./chunk-UUUEXOLW.js";
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
