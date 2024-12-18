const CLSTAMP = 9421178;

import { a as t, b as u } from "./chunk-A66XOPZW.js";
import "./chunk-JPWWO5NS.js";
import "./chunk-7KP5DCCN.js";
import {
  f as m,
  g,
  h as p,
  l as A,
  m as e,
  n as w,
  o as C,
  p as h,
} from "./chunk-THVLHPPD.js";
import "./chunk-VZD2MOMB.js";
import "./chunk-ON2A2HQH.js";
import "./chunk-KGWHYCK2.js";
import "./chunk-KVKZQJGH.js";
import "./chunk-L3HTMYAC.js";
function s(n) {
  if (
    (window.SSR?.reactRoot ||
      e({
        assetData: n,
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
  s(window.SSR?.clientAssets);
}
export {
  u as ClientReactInit,
  p as FetchLoader,
  g as FetchLoaders,
  m as FetchRouteData,
  h as NavigateToRoute,
  w as getPageHistoryState,
  s as onNavigate,
  A as pushPageHistoryState,
  e as replacePageHistoryState,
  C as useClientSideNavigation,
};
