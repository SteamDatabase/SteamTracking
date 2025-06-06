import { a as t, b as u } from "./chunk-JC4QC5I3.js";
import "./chunk-4L6MBN57.js";
import "./chunk-UEIGV6EC.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-QGSYTW2L.js";
import "./chunk-DONOAANF.js";
import "./chunk-4XH6SGD6.js";
import "./chunk-K6H3YACU.js";
import "./chunk-5YP5UM3C.js";
import "./chunk-XK4A2GMR.js";
import "./chunk-YJNKACMS.js";
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
