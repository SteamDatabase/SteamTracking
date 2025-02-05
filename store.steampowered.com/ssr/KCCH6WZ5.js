const CLSTAMP = 9511701;

import { a as t, b as u } from "./chunk-SJ5YH5UL.js";
import "./chunk-WBLSZO7X.js";
import "./chunk-UODQ4OC2.js";
import {
  g as m,
  h as g,
  i as p,
  m as A,
  n as e,
  o as w,
  p as C,
  q as h,
} from "./chunk-TNQDWY4R.js";
import "./chunk-GVHKDXDE.js";
import "./chunk-MFIZ7YX2.js";
import "./chunk-5GHSG7P2.js";
import "./chunk-AOQ5VFYG.js";
import "./chunk-GO2YC36H.js";
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
