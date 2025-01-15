const CLSTAMP = 9459120;

import { a as t, b as u } from "./chunk-2KDBK7N4.js";
import "./chunk-HLESM4XE.js";
import "./chunk-O7H4SLWJ.js";
import {
  e as m,
  f as g,
  g as p,
  k as A,
  l as e,
  m as w,
  n as C,
  o as h,
} from "./chunk-SSJ7CYK5.js";
import "./chunk-Y7RX73SD.js";
import "./chunk-SYAE5ZSF.js";
import "./chunk-426E7PHQ.js";
import "./chunk-I4YNAXHV.js";
import "./chunk-RJVNLONQ.js";
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
