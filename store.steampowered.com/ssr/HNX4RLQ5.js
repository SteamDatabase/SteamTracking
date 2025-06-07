import { a as t, b as u } from "./chunk-4TKOYZIP.js";
import "./chunk-SZZ7PZHX.js";
import "./chunk-CLSTIK7N.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-VBE5CM6H.js";
import "./chunk-ANMTSBLX.js";
import "./chunk-6WDKI3T7.js";
import "./chunk-VQUKEJ3T.js";
import "./chunk-JDZRYYPH.js";
import "./chunk-BGXQT2NR.js";
import "./chunk-DWMTCHDI.js";
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
