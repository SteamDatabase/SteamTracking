function _(_, _, _, _, _, _) {
  return {
    queryKey: [`StoreQuery`, _, _],
    queryFn: () => _(_, _, _, _, _, _),
    staleTime: 600 * 1e3,
  };
}
async function _(_, _, _, _, _, _) {
  let _ = _.Init(_);
  _(_, _),
    _ && _(_, _.data_request),
    _ && _.Body().set_override_country_code(_),
    _.Body().set_query(_.fromObject(_)),
    _.Body().set_query_name(_);
  let _ = await _.Query(_, _);
  if (_.GetEResult() != 1)
    throw `Error executing StoreQuery "${_}": ${_.GetErrorMessage()}`;
  return (
    _ &&
      _.Body()
        .store_items()
        .forEach((_) => _.cacheStoreItemData(_, _.data_request)),
    {
      rgItemIDs: _.Body().ids().map(_),
      metadata: _.Body().metadata().toObject(),
    }
  );
}
export { _ };
