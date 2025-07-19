import { a as t, b as u } from "./chunk-TKNJC4GL.js";
import "./chunk-RNXATQQN.js";
import "./chunk-4GADL2B6.js";
import {
  i as m,
  j as g,
  k as p,
  o as w,
  p as e,
  q as A,
  r as h,
  s as C,
} from "./chunk-GEHAKNUA.js";
import "./chunk-QV4YDNLY.js";
import "./chunk-PGNB6ILX.js";
import "./chunk-6FFQPNDI.js";
import "./chunk-4453BUC4.js";
import "./chunk-BKGYRNQI.js";
import "./chunk-XSIUNGIQ.js";
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
