const CLSTAMP = 9541513;

import { a as t, b as u } from "./chunk-256YANVT.js";
import "./chunk-IWXRAESS.js";
import "./chunk-XTJCCDZU.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-KNYEK5IL.js";
import "./chunk-YLDI7JFZ.js";
import "./chunk-F3RAUVBG.js";
import "./chunk-E3Q3BISX.js";
import "./chunk-U3DDDKCE.js";
import "./chunk-AN2GMBNX.js";
import "./chunk-NZ23YTAN.js";
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
