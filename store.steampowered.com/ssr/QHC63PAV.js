const CLSTAMP = 9751509;

import { a as t, b as u } from "./chunk-LMSP6NGM.js";
import "./chunk-7VRTWFWJ.js";
import "./chunk-E7JZLIU2.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-SUZCPLIH.js";
import "./chunk-SA3XWOEA.js";
import "./chunk-YDEKJSNU.js";
import "./chunk-L7CVXBMP.js";
import "./chunk-TOHILYNG.js";
import "./chunk-GX7N3KBC.js";
import "./chunk-QAUDHXYH.js";
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
