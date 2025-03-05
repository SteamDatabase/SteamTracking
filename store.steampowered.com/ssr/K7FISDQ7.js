const CLSTAMP = 9580955;

import { a as t, b as u } from "./chunk-DIQLYJZE.js";
import "./chunk-ZKK26LDA.js";
import "./chunk-Y2CSMDO7.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-RGPKKWDG.js";
import "./chunk-S33DKKWZ.js";
import "./chunk-HL5J6CF5.js";
import "./chunk-FB3EMUNJ.js";
import "./chunk-P7UTOOWD.js";
import "./chunk-2M6UGZTQ.js";
import "./chunk-HHQ2KM4L.js";
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
