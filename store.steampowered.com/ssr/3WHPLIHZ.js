import { a as t, b as u } from "./chunk-XBNZV47H.js";
import "./chunk-EHKJQPZU.js";
import "./chunk-R3XAF62T.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-PQ3BANJI.js";
import "./chunk-NVWLMATD.js";
import "./chunk-ZDWKPUUM.js";
import "./chunk-MUQLA4BT.js";
import "./chunk-XA7OZ6YH.js";
import "./chunk-JCDGC4MQ.js";
import "./chunk-QFZBH32V.js";
function n(s) {
  if (
    (window.SSR?.reactRoot ||
      e({
        assetData: s,
        metadata: t(),
        loaderData: window.SSR?.loaderData ?? [],
        id: 0,
        renderContext: window.SSR?.renderContext ?? {},
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
