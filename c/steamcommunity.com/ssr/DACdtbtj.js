function _(_) {
  if (_ === void 0) return console.error(`Cannot GetHostname on empty URL`), ``;
  let _ = RegExp(
      `^(steam://openurl(_external)?/)?((f|ht)tps?://)?([^@/?#]*@)?([^/#?]+)`,
      `im`,
    ),
    _ = _.match(_);
  return _ && _.length > 5 ? _[6].toString() : _;
}
function _(_) {
  let _ = _(_);
  return _.startsWith(`www.`) && (_ = _.slice(4)), _;
}
function _(_) {
  return _.replace(
    /{STEAM_CLAN_IMAGE}/g,
    `${_.CLAN_CDN_ASSET_URL}images/`,
  ).replace(/{STEAM_CLAN_LOC_IMAGE}/g, `${_.CLAN_CDN_ASSET_URL}images/`);
}
function _(_) {
  return (
    _ &&
    (_.EUNIVERSE == 1 &&
      (_.substring(0, 5) == `http:` && (_ = `https:` + _.substring(5)),
      _(_.MEDIA_CDN_URL, `Media CDN not setup`),
      (_ = _.replace(/https:\/\/steamcdn-a.akamaihd.net\//g, _.MEDIA_CDN_URL)),
      (_ = _.replace(/https:\/\/media.steampowered.com\//g, _.MEDIA_CDN_URL)),
      (_ = _.replace(
        /https:\/\/cdn.akamai.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.cloudflare.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.edgecast.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.fastly.steamstatic.com\//g,
        _.MEDIA_CDN_URL,
      )),
      (_ = _.replace(/https:\/\/cdn.dota2.com\//g, _.MEDIA_CDN_URL)),
      (_ = _.replace(
        /https:\/\/storefront.steampowered.com\/v\/gfx\//g,
        _.MEDIA_CDN_URL + `steam/`,
      )),
      (_ = _.replace(
        /https:\/\/clan.akamai.steamstatic.com\//g,
        _.CLAN_CDN_ASSET_URL,
      )),
      (_ = _.replace(
        /https:\/\/clan.cloudflare.steamstatic.com\//g,
        _.CLAN_CDN_ASSET_URL,
      )),
      (_ = _.replace(
        /https:\/\/clan.fastly.steamstatic.com\//g,
        _.CLAN_CDN_ASSET_URL,
      )),
      (_ = _.replace(
        /https:\/\/cdn.steamcommunity.com\//g,
        _.COMMUNITY_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/community.akamai.steamstatic.com\//g,
        _.COMMUNITY_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/community.cloudflare.steamstatic.com\//g,
        _.COMMUNITY_CDN_URL,
      )),
      (_ = _.replace(
        /https:\/\/community.edgecast.steamstatic.com\//g,
        _.COMMUNITY_CDN_URL,
      ))),
    (_ = _.replace(/{IMG_URL}/g, _.IMG_URL)),
    (_ = _.replace(/{MEDIA_CDN_URL}/g, _.MEDIA_CDN_URL)),
    (_ = _.replace(/{MEDIA_CDN_COMMUNITY_URL}/g, _.MEDIA_CDN_COMMUNITY_URL)),
    (_ = _.replace(/{COMMUNITY_CDN_URL}/g, _.COMMUNITY_CDN_URL)),
    (_ = _(_)),
    _)
  );
}
function _(_) {
  if (!_) return !0;
  let _ = _(_).toLocaleLowerCase();
  return (
    [
      _(_.COMMUNITY_CDN_URL).toLocaleLowerCase(),
      _(_.MEDIA_CDN_URL).toLocaleLowerCase(),
      _(_.MEDIA_CDN_COMMUNITY_URL).toLocaleLowerCase(),
      _(_.STORE_CDN_URL).toLocaleLowerCase(),
      _(_.BASE_URL_SHARED_CDN).toLocaleLowerCase(),
      _(_.CLAN_CDN_ASSET_URL).toLocaleLowerCase(),
      _(_.VIDEO_CDN_URL).toLocaleLowerCase(),
      `support.steampowered.com`,
      `steamcdn-a.akamaihd.net`,
      `cdn.cloudflare.steamstatic.com`,
      `cdn.fastly.steamstatic.com`,
      `cdn.akamai.steamstatic.com`,
    ].indexOf(_) >= 0
  );
}
function _(_) {
  return _.SNR &&
    _.SNR.length > 0 &&
    _ &&
    _.toLocaleLowerCase().indexOf(`snr=`) == -1
    ? _ + (_.indexOf(`?`) >= 0 ? `&` : `?`) + `snr=` + _.SNR
    : _;
}
function _(_, _) {
  return (
    _.IN_STEAMUI &&
      !_.startsWith(`steam://`) &&
      (_ = _ ? `steam://openurl_external/${_}` : `steam://openurl/${_}`),
    _
  );
}
function _(_) {
  return _.startsWith(`http://`) || _.startsWith(`https://`);
}
function _(_) {
  return !!_?.startsWith(`data:`);
}
export { _, _, _, _, _, _, _, _ };
