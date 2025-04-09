const CLSTAMP = 9664229;

import { a as t, b as u } from "./chunk-5PKW5TYG.js";
import "./chunk-ZYL5UPLZ.js";
import "./chunk-3ZQYRQCO.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-HLZJPA2N.js";
import "./chunk-YT3I7EVD.js";
import "./chunk-4USLEHUX.js";
import "./chunk-ODJGBEIP.js";
import "./chunk-XG435JZS.js";
import "./chunk-RWJNX7LU.js";
import "./chunk-5MMJIUFA.js";
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
