const CLSTAMP = 9564007;

import { a as t, b as u } from "./chunk-5ESZZCOF.js";
import "./chunk-NNUIWCB6.js";
import "./chunk-DSUMRHOI.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-EVWZSVGT.js";
import "./chunk-H7RKZFUK.js";
import "./chunk-4IPERBVH.js";
import "./chunk-LZAL7VQZ.js";
import "./chunk-3XUDDVHM.js";
import "./chunk-YWB64WUS.js";
import "./chunk-EBDYFHBQ.js";
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
