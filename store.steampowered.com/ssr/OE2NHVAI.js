import { a as t, b as u } from "./chunk-TIBN5ZLP.js";
import "./chunk-PHDHD6E5.js";
import "./chunk-GZPKOZEG.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-AGHN4HME.js";
import "./chunk-SSFABW6H.js";
import "./chunk-3L72XDJP.js";
import "./chunk-HBEBAV2G.js";
import "./chunk-UPXXNQVZ.js";
import "./chunk-WMRGUS7I.js";
import "./chunk-QQZEZALK.js";
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
