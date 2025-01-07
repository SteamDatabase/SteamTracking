const CLSTAMP = 9437282;

import { a as t, b as u } from "./chunk-XDHHUUEC.js";
import "./chunk-ZHYIOZM7.js";
import "./chunk-XSFVRADD.js";
import {
  e as m,
  f as g,
  g as p,
  k as A,
  l as e,
  m as w,
  n as C,
  o as h,
} from "./chunk-XWKX55C7.js";
import "./chunk-FRJLRZFU.js";
import "./chunk-KO2VKCP7.js";
import "./chunk-J73K3DL5.js";
import "./chunk-W7CVIMSP.js";
import "./chunk-P65GOMA6.js";
function s(n) {
  if (
    (window.SSR?.reactRoot ||
      e({
        assetData: n,
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
  s(window.SSR?.clientAssets);
}
export {
  u as ClientReactInit,
  p as FetchLoader,
  g as FetchLoaders,
  m as FetchRouteData,
  h as NavigateToRoute,
  w as getPageHistoryState,
  s as onNavigate,
  A as pushPageHistoryState,
  e as replacePageHistoryState,
  C as useClientSideNavigation,
};
