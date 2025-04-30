const CLSTAMP = 9703338;

import { a as t, b as u } from "./chunk-5GJRLGEJ.js";
import "./chunk-DNN4MHIH.js";
import "./chunk-QBQELJ7R.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-CIO44HRJ.js";
import "./chunk-F7TFDDWC.js";
import "./chunk-ANX6RKE6.js";
import "./chunk-6ZT5Z6YV.js";
import "./chunk-INHMP3CA.js";
import "./chunk-FO667VDJ.js";
import "./chunk-3UOKURNK.js";
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
