const CLSTAMP = 9747952;

import { a as t, b as u } from "./chunk-IOWUCUHP.js";
import "./chunk-G5KMDJB4.js";
import "./chunk-FEQE54EQ.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-QUHZ4ZST.js";
import "./chunk-VNQTEQES.js";
import "./chunk-SFWMCXLN.js";
import "./chunk-4TZCLWZQ.js";
import "./chunk-YOJO3FN3.js";
import "./chunk-6EKZGJX7.js";
import "./chunk-F346NYSN.js";
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
