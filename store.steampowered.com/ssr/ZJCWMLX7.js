const CLSTAMP = 9764165;

import { a as t, b as u } from "./chunk-XGL77FB5.js";
import "./chunk-DRNRDDU2.js";
import "./chunk-S3LZO6NE.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-DAHHLJEB.js";
import "./chunk-BN3YFZCE.js";
import "./chunk-IXKE5IC3.js";
import "./chunk-KKWZLKK5.js";
import "./chunk-F5FXRD2O.js";
import "./chunk-DDVB5BOE.js";
import "./chunk-TZIVDIHU.js";
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
