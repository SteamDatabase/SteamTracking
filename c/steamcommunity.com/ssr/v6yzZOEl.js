var _ = _(_(), 1);
function _() {
  return {
    title: document.title,
    description: document.querySelector(`head meta[property='description']`)
      ?.content,
    shareTitle: document.querySelector(`head meta[property='og:title']`)
      ?.content,
    shareImage: document.querySelector(`head meta[property='og:image']`)
      ?.content,
    shareImageAlt: document.querySelector(`head meta[name='twitter:image:alt']`)
      ?.content,
    canonicalURL: document.querySelector(`head link[rel='canonical']`)?.href,
    shareCardFormat: document.querySelector(`head meta[name='twitter:card']`)
      ?.content,
    articlePublishedTime: _(`article:published_time`),
    articleModifiedTime: _(`article:modified_time`),
  };
}
function _(_) {
  let _ = document.querySelector(`head meta[property='${_}']`)?.content;
  if (!_) return;
  let _ = Date.parse(_);
  return Number.isNaN(_) ? void 0 : Math.floor(_ / 1e3);
}
function _() {
  let _ = document.querySelector(`head meta[property='valve:snr']`)?.content;
  return _ ? _.ParseSNR(_) : void 0;
}
var _ = _();
async function _() {
  let _ = await Promise.all(
    window.SSR?.clientAssets?._.map((_) =>
      _(() => import(_.href), [], import.meta.url),
    ) ?? [],
  );
  return (
    await _(),
    _.filter((_) => `route` in _ && `Component` in _.route).map((_) => _.route)
  );
}
function _() {
  let _ = [`ssr_browser`];
  return (
    _.IN_MOBILE_WEBVIEW && _.push(`in_mobile_app`),
    _.IN_CLIENT && _.push(`in_client`),
    navigator.userAgent.includes(`Valve Steam Gamepad`) && _.push(`gamepadui`),
    _
  );
}
async function _() {
  if (window.SSR?.reactRoot) return;
  _().Init(
    `community SSR`,
    `10985059`,
    new _(_.WEBAPI_BASE_URL).GetServiceTransport(),
    {
      fnGetReportTags: _,
    },
  );
  let [_, _] = await Promise.all([_(), (window.SSR?.loaderData ?? []).map(_)]);
  if (((window.SSR ??= {}), !window.SSR.clientAssets))
    throw `Missing SSR clientAssets`;
  let _ = window.SSR.clientAssets,
    _ = window.SSR.renderContext ?? {};
  _(_.manifest);
  let _ = {
    assetData: _,
    metadata: _(),
    snr: _(),
    loaderData: _,
    renderContext: _,
    scrollPosition: {
      _: 0,
      _: 0,
    },
  };
  _(_),
    (window.SSR.reactRoot = (0, _.hydrateRoot)(
      document,
      (0, _.jsx)(_, {
        pageRoutes: _,
        clientAssets: _,
        metadata: _.metadata,
        loaderData: _,
        renderContext: _,
        snr: _.snr,
      }),
    ));
}
export { _, _ };
