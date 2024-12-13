const CLSTAMP = 9413726;

import { a as t, b as u } from "./chunk-MLUNI2K4.js";
import "./chunk-CSSU4XFR.js";
import "./chunk-AFKYJH2Z.js";
import {
  f as m,
  g,
  h as p,
  l as A,
  m as e,
  n as w,
  o as C,
  p as h,
} from "./chunk-R4FESFN3.js";
import "./chunk-JLQ4IZR3.js";
import "./chunk-YVPXPFEZ.js";
import "./chunk-O746S3Z7.js";
import "./chunk-H6MD6SRD.js";
import "./chunk-ENIO5D24.js";
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
