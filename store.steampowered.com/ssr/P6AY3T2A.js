const CLSTAMP = 9543433;

import { a as t, b as u } from "./chunk-KHE4TMJ7.js";
import "./chunk-B2EGYUHQ.js";
import "./chunk-RB55GJJH.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-3VKOYOVD.js";
import "./chunk-S3CKZOEC.js";
import "./chunk-HGGZBN6Y.js";
import "./chunk-DEMYV6EX.js";
import "./chunk-XDK3WWOH.js";
import "./chunk-YIHXADVM.js";
import "./chunk-PMCLIEO6.js";
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
