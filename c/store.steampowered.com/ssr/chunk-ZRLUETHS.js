import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_(), 1);
function _() {
  let _ = document.querySelector("head meta[property='valve:snr']")?.content;
  return {
    title: document.title,
    description: document.querySelector("head meta[property='description']")
      ?.content,
    shareTitle: document.querySelector("head meta[property='og:title']")
      ?.content,
    shareImage: document.querySelector("head meta[property='og:image']")
      ?.content,
    snr: _ ? _.ParseSNR(_) : void 0,
    csp: void 0,
  };
}
var _ = _(_(), 1);
async function _() {
  let _ = await Promise.all(
    window.SSR?.clientAssets?._.map((_) => import(_.href)) ?? [],
  );
  return (
    await _(),
    _.filter((_) => "route" in _ && "Component" in _.route).map((_) => _.route)
  );
}
async function _() {
  if (window.SSR?.reactRoot) return;
  let [_, _] = await Promise.all([
    _(),
    _((window.SSR?.loaderData ?? []).map(_), void 0),
  ]);
  if (((window.SSR ??= {}), !window.SSR.clientAssets))
    throw "Missing SSR clientAssets";
  window.SSR.reactRoot = (0, _.hydrateRoot)(
    document,
    (0, _.jsx)(_, {
      pageRoutes: _,
      clientAssets: window.SSR.clientAssets,
      metadata: _(),
      loaderData: _,
      renderContext: window.SSR.renderContext ?? {},
    }),
  );
}
export { _, _ };
