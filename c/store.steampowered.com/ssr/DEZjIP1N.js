var _ = _(_(), 1);
function _(_, _, _ = 5, _ = {}) {
  let _ = _(),
    { storeBrowseContext: _, dataPreload: _ } = _(_);
  return _(_(_, _, _, _, _, _));
}
function _(_, _) {
  return {
    ..._,
    filters: {
      ...(_ ?? {}),
      ...(_.filters ?? {}),
    },
  };
}
function _(_, _ = 5, _) {
  let _ = _(),
    { storeBrowseContext: _, dataPreload: _ } = _(_);
  return _.useCallback((_) => _(_, _, _, _, _, _), [_, _, _, _, _]);
}
function _(_, _, _, _, _ = 5, _) {
  return {
    queryKey: [`SearchSuggestions`, _, _, _],
    queryFn: () => _(_, _, _, _, _, _),
    staleTime: 300 * 1e3,
    enabled: !!_,
  };
}
function _(_) {
  let _ = [],
    _ = [],
    _ = [];
  return (
    _.forEach((_) => {
      `appid` in _ || `packageid` in _ || `bundleid` in _
        ? _.push(_)
        : `tagid` in _ || `hubcategoryid` in _
          ? _.push(_)
          : `creatorid` in _
            ? _.push(_)
            : `salepagegid` in _ ||
              _(_, `unexepected id type: ${JSON.stringify(_)}`);
    }),
    [_, _, _]
  );
}
var _ = [`RU`, `CN`],
  _ = 44868;
async function _(_, _, _, _, _, _ = {}) {
  let { filters: _, include_tags: _ = !1, include_creators: _ = !1 } = _,
    _ = _.Init(_);
  _(_, _),
    _ && _(_, _.data_request),
    _.Body().set_search_term(_),
    _.Body().set_use_spellcheck(!0),
    _.Body().set_max_results(_),
    _ && _.Body().set_filters(_.fromObject(_)),
    _.Body().set_search_tags(_),
    _.Body().set_search_creators(_);
  let _ = await _.SearchSuggestions(_, _);
  if (!_.BSuccess())
    throw `Error loading search suggestions: ${_.GetErrorMessage()}`;
  _ &&
    _.Body()
      .store_items()
      .forEach((_) => _.cacheStoreItemData(_, _.data_request));
  let _ = _.Body().ids();
  return (
    _.includes(
      _.Body().context()?.country_code()?.trim().toUpperCase() || ``,
    ) && (_ = _.filter((_) => _.tagid() !== _)),
    {
      rgItemIDs: _.map(_),
      metadata: _.Body().metadata().toObject(),
    }
  );
}
export { _, _, _, _ };
