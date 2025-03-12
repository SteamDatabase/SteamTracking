const CLSTAMP = 9598355;

import { a as t, b as u } from "./chunk-CFB7WCSR.js";
import "./chunk-KW7TT3AF.js";
import "./chunk-FKBHXF3F.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-VYVGNWSX.js";
import "./chunk-LTCM4FBG.js";
import "./chunk-NCBAOU5T.js";
import "./chunk-A7W4HGSY.js";
import "./chunk-DNKCKFVA.js";
import "./chunk-OZ6CSMNN.js";
import "./chunk-XL5OQFLS.js";
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
