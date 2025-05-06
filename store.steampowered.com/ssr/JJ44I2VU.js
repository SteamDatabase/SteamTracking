const CLSTAMP = 9715040;

import { a as t, b as u } from "./chunk-VCZY5HDD.js";
import "./chunk-MDZEVQS4.js";
import "./chunk-UV47SQNC.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-YBAMBYLX.js";
import "./chunk-Y6PWFZ36.js";
import "./chunk-GJO7M7PL.js";
import "./chunk-GFWNL6PD.js";
import "./chunk-O5D3JVGU.js";
import "./chunk-JILMSGAG.js";
import "./chunk-5OJBP4TA.js";
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
