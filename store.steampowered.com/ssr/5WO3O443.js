const CLSTAMP = 9475757;

import { a as t, b as u } from "./chunk-5YZWII7H.js";
import "./chunk-ND7R7M6M.js";
import "./chunk-BN2F2NTV.js";
import {
  e as m,
  f as g,
  g as p,
  k as A,
  l as e,
  m as w,
  n as C,
  o as h,
} from "./chunk-NCLX3X4N.js";
import "./chunk-U74EMTTG.js";
import "./chunk-RFZPAAOV.js";
import "./chunk-NVLQQ3QI.js";
import "./chunk-STG6GF4O.js";
import "./chunk-3K2YMZDV.js";
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
