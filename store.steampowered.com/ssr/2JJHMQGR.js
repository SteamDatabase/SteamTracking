const CLSTAMP = 9621725;

import { a as t, b as u } from "./chunk-47KTZRZT.js";
import "./chunk-52FYSNR6.js";
import "./chunk-7QXB6VNI.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-MYRGI4P6.js";
import "./chunk-RB7KZ3PF.js";
import "./chunk-MBG223ZF.js";
import "./chunk-V6NE4MIP.js";
import "./chunk-K34HL7TB.js";
import "./chunk-LTXTEHOA.js";
import "./chunk-GT4J6GNR.js";
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
