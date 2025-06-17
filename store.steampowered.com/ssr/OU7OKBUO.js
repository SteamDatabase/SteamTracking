import { a as t, b as u } from "./chunk-LMVYAVD7.js";
import "./chunk-IKJWSIJM.js";
import "./chunk-JZD27BC3.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-E5EOCWDN.js";
import "./chunk-7F6FS72M.js";
import "./chunk-MNRZNE6B.js";
import "./chunk-A7IY3ZWU.js";
import "./chunk-Q25332SL.js";
import "./chunk-RWKINES4.js";
import "./chunk-V2BZN6OU.js";
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
