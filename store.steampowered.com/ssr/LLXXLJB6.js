const CLSTAMP = 9745740;

import { a as t, b as u } from "./chunk-CI4FWMAR.js";
import "./chunk-ZMLAKCHF.js";
import "./chunk-WX6UITSA.js";
import {
  h as m,
  i as g,
  j as p,
  n as w,
  o as e,
  p as A,
  q as h,
  r as C,
} from "./chunk-WZOKIJAX.js";
import "./chunk-5LLED7QJ.js";
import "./chunk-TDD43QM5.js";
import "./chunk-K5ZUJZBX.js";
import "./chunk-J54OJ3XM.js";
import "./chunk-U3KEEKNR.js";
import "./chunk-34BLD55L.js";
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
