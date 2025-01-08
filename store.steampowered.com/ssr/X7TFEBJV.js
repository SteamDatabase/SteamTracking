const CLSTAMP = 9444209;

import { a as t, b as u } from "./chunk-N3YGU2LD.js";
import "./chunk-W3JLP6LZ.js";
import "./chunk-667U3KLD.js";
import {
  e as m,
  f as g,
  g as p,
  k as A,
  l as e,
  m as w,
  n as C,
  o as h,
} from "./chunk-RPIH7JK2.js";
import "./chunk-TT6EGJCN.js";
import "./chunk-F4VP4WE3.js";
import "./chunk-OBUZP3UU.js";
import "./chunk-4ZQBTCVH.js";
import "./chunk-ALDSBXSB.js";
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
