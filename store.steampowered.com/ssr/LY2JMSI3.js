const CLSTAMP = 9498097;

import { a as t, b as u } from "./chunk-YKZ75TUL.js";
import "./chunk-2YCQNQP3.js";
import "./chunk-ZLQM75VC.js";
import {
  e as m,
  f as g,
  g as p,
  k as A,
  l as e,
  m as w,
  n as C,
  o as h,
} from "./chunk-LAK4OCC2.js";
import "./chunk-TQUP56V5.js";
import "./chunk-RWAFZS6N.js";
import "./chunk-KKRSJTWB.js";
import "./chunk-7NUMJLOY.js";
import "./chunk-L35YOXDF.js";
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
