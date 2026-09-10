function _(_) {
  return _.COMMUNITY_BASE_URL + `linkfilter/?u=` + encodeURIComponent(_);
}
function _(_, _) {
  if (_.startsWith(`steam://`) || _.startsWith(`/`)) return !1;
  let _ = _(_).toLowerCase(),
    _ = _(_.COMMUNITY_BASE_URL).toLowerCase(),
    _ = _(_.STORE_BASE_URL).toLowerCase(),
    _ = _(_.HELP_BASE_URL).toLowerCase(),
    _ = _(_.PARTNER_BASE_URL || ``).toLowerCase();
  return (
    _ !== _ &&
    _ !== _ &&
    _ !== _ &&
    _ !== `support.steampowered.com` &&
    _ !== _ &&
    _ !== `www.dota2.com` &&
    (!_ || _.filter((_) => _ == _).length == 0)
  );
}
export { _, _ };
