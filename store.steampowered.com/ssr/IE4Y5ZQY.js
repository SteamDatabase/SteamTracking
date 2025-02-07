const CLSTAMP = 9520173;

import { a as t, b as u } from "./chunk-3RGRZMQE.js";
import "./chunk-ZUIXTW73.js";
import "./chunk-QUJNCH2D.js";
import {
  g as m,
  h as g,
  i as p,
  m as A,
  n as e,
  o as w,
  p as C,
  q as h,
} from "./chunk-MYROFDPE.js";
import "./chunk-QKSATGWX.js";
import "./chunk-24YO6TID.js";
import "./chunk-GMS5S4PA.js";
import "./chunk-YTPGFZBB.js";
import "./chunk-MXFEM5DW.js";
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
