const CLSTAMP = 9763432;

import { a as t, b as u } from "./chunk-L3QJHUU3.js";
import "./chunk-M3EW5NES.js";
import "./chunk-YFPDMF52.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-XYSM6SIO.js";
import "./chunk-BO4NIEGV.js";
import "./chunk-BIJ6NLIU.js";
import "./chunk-JZKXQUY5.js";
import "./chunk-3B5KHLRS.js";
import "./chunk-A7PP3V6U.js";
import "./chunk-HLHOAM4O.js";
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
