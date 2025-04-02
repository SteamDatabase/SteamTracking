const CLSTAMP = 9650136;

import { a as t, b as u } from "./chunk-V2YGMSHV.js";
import "./chunk-7DESWHQK.js";
import "./chunk-3DSWPP42.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-NJLDZKBU.js";
import "./chunk-TEHPVM5M.js";
import "./chunk-HSDZMS7H.js";
import "./chunk-6XJQQZ7Z.js";
import "./chunk-C37XGPEG.js";
import "./chunk-4HQPZ5LY.js";
import "./chunk-HHDRG5ZJ.js";
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
