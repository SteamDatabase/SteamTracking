import { a as t, b as u } from "./chunk-IIMYTMGJ.js";
import "./chunk-IQ7JRPKE.js";
import "./chunk-UYYUFCNN.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-M66QJ6OS.js";
import "./chunk-J4PXYLOX.js";
import "./chunk-AZHUP5IZ.js";
import "./chunk-R6GEVKLE.js";
import "./chunk-TSBVJ6DK.js";
import "./chunk-GI6JRRGT.js";
import "./chunk-QYDZXQ52.js";
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
