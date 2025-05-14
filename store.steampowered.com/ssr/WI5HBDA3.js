const CLSTAMP = 9743610;

import { a as t, b as u } from "./chunk-H5GFFNRS.js";
import "./chunk-ZHBEJGH6.js";
import "./chunk-GZZL5N6R.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-ZZMTVKXO.js";
import "./chunk-5NI523EF.js";
import "./chunk-B2MMXAK5.js";
import "./chunk-TLVJYK4P.js";
import "./chunk-ZKA6WK4Y.js";
import "./chunk-G4PN4QF7.js";
import "./chunk-WWI2VL5L.js";
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
