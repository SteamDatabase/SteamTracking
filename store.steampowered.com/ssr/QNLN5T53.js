const CLSTAMP = 9493458;

import { a as t, b as u } from "./chunk-6YKF36CC.js";
import "./chunk-WBD6ESNQ.js";
import "./chunk-OKHFG2JD.js";
import {
  e as m,
  f as g,
  g as p,
  k as A,
  l as e,
  m as w,
  n as C,
  o as h,
} from "./chunk-64ONC32O.js";
import "./chunk-KZY6NBES.js";
import "./chunk-BGAGHGNG.js";
import "./chunk-4QLSSORS.js";
import "./chunk-IZ7IA66A.js";
import "./chunk-NFYHIITG.js";
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
