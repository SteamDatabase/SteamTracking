const CLSTAMP = 9404702;

import { a as t, b as u } from "./chunk-I5YSRN3Z.js";
import "./chunk-PIDPN54T.js";
import "./chunk-PNVZLC2B.js";
import {
  f as m,
  g,
  h as p,
  l as A,
  m as e,
  n as w,
  o as C,
  p as h,
} from "./chunk-PJXYXGZO.js";
import "./chunk-SP44OZRR.js";
import "./chunk-RLLTSIRI.js";
import "./chunk-VVTCMENQ.js";
import "./chunk-M7JZUOB4.js";
import "./chunk-GK2ITS7J.js";
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
