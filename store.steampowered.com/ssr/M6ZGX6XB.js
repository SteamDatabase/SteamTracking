import { a as t, b as u } from "./chunk-V3KI4EE2.js";
import "./chunk-I4OE6AWI.js";
import "./chunk-KAVCO5MX.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-BVSI52WD.js";
import "./chunk-DYZJAMBZ.js";
import "./chunk-ORNHQGFS.js";
import "./chunk-I2IQXERY.js";
import "./chunk-W7XNMZDG.js";
import "./chunk-KETQW37N.js";
import "./chunk-22ZGTD3T.js";
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
