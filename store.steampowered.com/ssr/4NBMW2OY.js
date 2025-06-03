import { a as t, b as u } from "./chunk-7EBRLYQW.js";
import "./chunk-A4VWSOYZ.js";
import "./chunk-VJPZYCMJ.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-4VKA2KBS.js";
import "./chunk-OBDVEAKL.js";
import "./chunk-Z2FS4WYT.js";
import "./chunk-L6RGR3N5.js";
import "./chunk-JDBBCCT6.js";
import "./chunk-HQTHL7VH.js";
import "./chunk-EPSJNLX6.js";
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
