const CLSTAMP = 9686915;

import { a as t, b as u } from "./chunk-SRVUTVCI.js";
import "./chunk-I3SVF3F3.js";
import "./chunk-IPQZLWOT.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-7727KNBX.js";
import "./chunk-GENZKDKH.js";
import "./chunk-QZ7GSAER.js";
import "./chunk-CG2AVMMX.js";
import "./chunk-NSLGW32G.js";
import "./chunk-ASFGMT32.js";
import "./chunk-BWYQWJMA.js";
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
