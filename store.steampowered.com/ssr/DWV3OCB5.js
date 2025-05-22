import { a as t, b as u } from "./chunk-R6OBO3N3.js";
import "./chunk-EWP7BD3B.js";
import "./chunk-D6C72BQ3.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-FPRWC45U.js";
import "./chunk-3IBRTZWI.js";
import "./chunk-2XGABR6B.js";
import "./chunk-43YTXXO7.js";
import "./chunk-32WFVS3N.js";
import "./chunk-N3HNOLVJ.js";
import "./chunk-Y7UWL7HT.js";
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
