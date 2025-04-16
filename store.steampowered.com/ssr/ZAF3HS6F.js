const CLSTAMP = 9672883;

import { a as t, b as u } from "./chunk-5WJ5TOIG.js";
import "./chunk-GKEPXJ4J.js";
import "./chunk-BJ3XBTE4.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-BXPFLOZO.js";
import "./chunk-R54VZRFN.js";
import "./chunk-JODKY73G.js";
import "./chunk-VZFCKFVL.js";
import "./chunk-Q4RM7AIX.js";
import "./chunk-ILOWULXL.js";
import "./chunk-S6YCDO5J.js";
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
