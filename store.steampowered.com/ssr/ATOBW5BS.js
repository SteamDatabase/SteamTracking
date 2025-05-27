import { a as t, b as u } from "./chunk-UW4TWW3M.js";
import "./chunk-7OI2E3GI.js";
import "./chunk-ZZ5A7DLN.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-M3UGQD2B.js";
import "./chunk-PY4LZC3O.js";
import "./chunk-QNRKMJHO.js";
import "./chunk-BWTNRR3X.js";
import "./chunk-ULAVP4UJ.js";
import "./chunk-ZSSATMFM.js";
import "./chunk-2B3UHFKJ.js";
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
