import { a as t, b as u } from "./chunk-DUVRFYFR.js";
import "./chunk-V7G34TQA.js";
import "./chunk-M5DCUNOX.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-74RRFUOB.js";
import "./chunk-K75ZEVSZ.js";
import "./chunk-VH5DJ4WZ.js";
import "./chunk-PSCCDOEL.js";
import "./chunk-2D3WJG7W.js";
import "./chunk-LVUPLWFD.js";
import "./chunk-KSKAYT7Z.js";
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
