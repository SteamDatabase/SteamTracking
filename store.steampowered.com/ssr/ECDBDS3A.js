import { a as t, b as u } from "./chunk-LEYQ6BBR.js";
import "./chunk-ATHK6EP7.js";
import "./chunk-EAMY3WOX.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-WR3CWS4N.js";
import "./chunk-PTDEQQCF.js";
import "./chunk-ZRI7PDSW.js";
import "./chunk-VGO6XGJL.js";
import "./chunk-XLCIZFKQ.js";
import "./chunk-BFLRY2L2.js";
import "./chunk-P2SFXYM5.js";
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
