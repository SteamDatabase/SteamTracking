const CLSTAMP = 9721150;

import { a as t, b as u } from "./chunk-5KTHG4TX.js";
import "./chunk-SG36H7XQ.js";
import "./chunk-ZSSJHNDW.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-JE2HAVJT.js";
import "./chunk-Q7RL4AKZ.js";
import "./chunk-XQQSKCLJ.js";
import "./chunk-F6YY564A.js";
import "./chunk-NWZKTGYW.js";
import "./chunk-GO5F37EK.js";
import "./chunk-GCN6TXSS.js";
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
