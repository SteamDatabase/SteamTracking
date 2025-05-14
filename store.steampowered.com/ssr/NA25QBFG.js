const CLSTAMP = 9747147;

import { a as t, b as u } from "./chunk-AOFDQOSE.js";
import "./chunk-KNG4L46O.js";
import "./chunk-M3WO6V5R.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-AHVUMKVA.js";
import "./chunk-CHTUTBRI.js";
import "./chunk-XUGOCNZ3.js";
import "./chunk-7UPELSJT.js";
import "./chunk-ZMDWE6JA.js";
import "./chunk-G6S37JGU.js";
import "./chunk-QC3S7CJP.js";
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
