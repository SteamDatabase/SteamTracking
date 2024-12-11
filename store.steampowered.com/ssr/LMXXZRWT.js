const CLSTAMP = 9406869;

import { a as t, b as u } from "./chunk-DTJEAFXM.js";
import "./chunk-XT44EKQM.js";
import "./chunk-FI4AM633.js";
import {
  f as m,
  g,
  h as p,
  l as A,
  m as e,
  n as w,
  o as C,
  p as h,
} from "./chunk-WKTCUW46.js";
import "./chunk-5PQ6U7IO.js";
import "./chunk-JDZWNFB7.js";
import "./chunk-ZUI3JXBC.js";
import "./chunk-D4VJXM5Y.js";
import "./chunk-G7GZWTND.js";
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
