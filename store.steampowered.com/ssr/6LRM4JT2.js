const CLSTAMP = 9754532;

import { a as t, b as u } from "./chunk-44MT5ZEZ.js";
import "./chunk-MA4LOVOH.js";
import "./chunk-XIOQUOJK.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-CXLJBM3V.js";
import "./chunk-E5CRAERM.js";
import "./chunk-6DD6CJSV.js";
import "./chunk-E7MLRWUE.js";
import "./chunk-OLODGTF5.js";
import "./chunk-DQ6P3SYT.js";
import "./chunk-XI7ETPFA.js";
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
