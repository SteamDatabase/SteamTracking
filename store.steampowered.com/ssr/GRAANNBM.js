const CLSTAMP = 9632766;

import { a as t, b as u } from "./chunk-OPVVZ3WV.js";
import "./chunk-C6Y57LO4.js";
import "./chunk-KSQX7BAC.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-H354JS66.js";
import "./chunk-F4MSXNEO.js";
import "./chunk-GBLXIPAV.js";
import "./chunk-22AQQJVE.js";
import "./chunk-VYUEDQJZ.js";
import "./chunk-3I3KBY56.js";
import "./chunk-BDMPFFNE.js";
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
