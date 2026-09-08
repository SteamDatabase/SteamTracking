function _(_) {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: [`market`, `app_facets`, _],
    enabled: !!_,
    queryFn: async () => _(_),
  };
}
async function _(_) {
  let _ = await fetch(`${_.COMMUNITY_BASE_URL}market/appfacets/${_}`);
  if (!_ || !_._) throw Error(`Failed to load market filters for app ${_}`);
  let _ = await _.json();
  if (!_.success || !_.facets)
    throw Error(`Loaded malformed market filters for app ${_}`);
  return _.facets;
}
var _ = 753,
  _ = `Game`;
function _() {
  return _(_(_));
}
function _(_) {
  return {
    queryKey: [`marketfilters`, _],
    queryFn: async () => {
      let _ = await _(_);
      if (!_)
        throw Error(`Failed to load market facets for Steam Inventory items`);
      let _ = _[_];
      if ((delete _[_], !_.tags))
        return {
          rgApps: [],
          facets: {},
          mapAppIDs: {},
        };
      let _ = {},
        _ = [];
      for (let _ of Object.keys(_.tags)) {
        let _ = _.tags[_],
          _ = parseInt(_.slice(_.indexOf(`_`) + 1));
        isNaN(_) ||
          ((_[_] = !0),
          _.push({
            appid: _,
            name: _.localized_name,
            icon: `${_.COMMUNITY_BASE_URL}market/steamitemfiltersicon/${_}`,
          }));
      }
      return {
        rgApps: _(_, (_) => _.name),
        mapAppIDs: _,
        facets: _,
      };
    },
  };
}
export { _, _ };
