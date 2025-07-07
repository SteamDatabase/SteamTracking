import { a as t, b as u } from "./chunk-GKYFO6BJ.js";
import "./chunk-YPCUPMZO.js";
import "./chunk-HT44UD34.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-VZRA6WK3.js";
import "./chunk-EKLWXNCH.js";
import "./chunk-ABP6PTQM.js";
import "./chunk-GMQDOIMZ.js";
import "./chunk-45X6DGZ4.js";
import "./chunk-4FQCDGBM.js";
import "./chunk-VJ6OVYMS.js";
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
