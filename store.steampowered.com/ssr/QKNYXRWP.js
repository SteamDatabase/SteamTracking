const CLSTAMP = 9728496;

import { a as t, b as u } from "./chunk-6L7BUEKM.js";
import "./chunk-KZFGCRXZ.js";
import "./chunk-QIBPIVZJ.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-FZNPXQGK.js";
import "./chunk-XW2DBGS3.js";
import "./chunk-75UJ75RG.js";
import "./chunk-YRUH6LBC.js";
import "./chunk-4PA5Y6JZ.js";
import "./chunk-NLJB2KUH.js";
import "./chunk-CKLXZZTE.js";
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
