const CLSTAMP = 9436633;

import { a as t, b as u } from "./chunk-T4JPLIYI.js";
import "./chunk-N2G45KUD.js";
import "./chunk-HARQEWHC.js";
import {
  f as m,
  g,
  h as p,
  l as A,
  m as e,
  n as w,
  o as C,
  p as h,
} from "./chunk-7PJ262LW.js";
import "./chunk-C7U4GKJZ.js";
import "./chunk-A3NIIBTB.js";
import "./chunk-ZMMFZQH3.js";
import "./chunk-6MX6RJBJ.js";
import "./chunk-ZNRRU3QM.js";
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
