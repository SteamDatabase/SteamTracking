const CLSTAMP = 9749541;

import { a as t, b as u } from "./chunk-PGHPOCZE.js";
import "./chunk-6QNKAOAO.js";
import "./chunk-ML62ALDU.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-XQ3YN4AZ.js";
import "./chunk-IXTDWYRS.js";
import "./chunk-OCTCUQLT.js";
import "./chunk-EY4VF4IK.js";
import "./chunk-342QBAC3.js";
import "./chunk-RVWZRRQ2.js";
import "./chunk-RY4G6IZ4.js";
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
