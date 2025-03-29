const CLSTAMP = 9643551;

import { a as t, b as u } from "./chunk-27EGJHLF.js";
import "./chunk-5PQMM7W6.js";
import "./chunk-UMOUHD5C.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-UZBUZZHA.js";
import "./chunk-5UBRMNIN.js";
import "./chunk-5B3GZGH4.js";
import "./chunk-RSFMXIKC.js";
import "./chunk-5DRJZ3VL.js";
import "./chunk-65YUODX3.js";
import "./chunk-6W5PXMM2.js";
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
