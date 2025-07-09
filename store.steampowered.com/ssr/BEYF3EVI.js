import { a as t, b as u } from "./chunk-6TRMW5SJ.js";
import "./chunk-CUCTPMPW.js";
import "./chunk-UNR7BBC7.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-FQIQX7AQ.js";
import "./chunk-RWRJPF6U.js";
import "./chunk-BDNNZCMM.js";
import "./chunk-DUVL73J7.js";
import "./chunk-5OHWYFPA.js";
import "./chunk-6QDSPHEZ.js";
import "./chunk-I6KD5PTY.js";
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
