const CLSTAMP = 9545617;

import { a as t, b as u } from "./chunk-ZFAHS6QL.js";
import "./chunk-WAL2OECO.js";
import "./chunk-K4PL46YA.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-EC244L7F.js";
import "./chunk-S2JYY5NI.js";
import "./chunk-L4X6MDS2.js";
import "./chunk-P7FJYUXW.js";
import "./chunk-QTORK3PE.js";
import "./chunk-SAZNMYRS.js";
import "./chunk-TFJQIY2G.js";
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
