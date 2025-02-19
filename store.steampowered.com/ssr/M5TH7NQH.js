const CLSTAMP = 9547330;

import { a as t, b as u } from "./chunk-EH26KPO7.js";
import "./chunk-DM22IAUX.js";
import "./chunk-SUPDU7FQ.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-RXZZUJCY.js";
import "./chunk-Y7U34FHE.js";
import "./chunk-SI6EXUXU.js";
import "./chunk-LZ45WXT5.js";
import "./chunk-ORVXQIOR.js";
import "./chunk-G7LI47US.js";
import "./chunk-TW65PMSD.js";
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
