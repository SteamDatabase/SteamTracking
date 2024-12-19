const CLSTAMP = 9426784;

import { a as t, b as u } from "./chunk-FJROWJAV.js";
import "./chunk-ILPFDWCV.js";
import "./chunk-RC4B6BXI.js";
import {
  f as m,
  g,
  h as p,
  l as A,
  m as e,
  n as w,
  o as C,
  p as h,
} from "./chunk-WMUUNCPT.js";
import "./chunk-OAAXPZFI.js";
import "./chunk-S72P3T2G.js";
import "./chunk-2VL5IIJI.js";
import "./chunk-7TMFNHZK.js";
import "./chunk-KV5NJC5W.js";
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
