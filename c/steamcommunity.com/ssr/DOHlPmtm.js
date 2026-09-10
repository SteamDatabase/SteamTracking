function _(_) {
  return _({
    queryKey: _(_),
    queryFn: async () => _(`/workshop/actions`, `GetUGCAppRelationships`, _),
    staleTime: _,
  });
}
function _(_, _ = !0) {
  let _ = _();
  return _({
    queryKey: [`ugc_item_preview`, _],
    queryFn: async () => {
      if (_.length == 0) return null;
      let {
        details: _,
        contributorData: _,
        playerLinkDetails: _,
        playtimes: _,
      } = await _(`/workshop/actions`, `GetUGCDetailsForItemPreview`, _);
      return (
        _.setQueryData(_(_), _),
        _(_, _),
        _?.forEach(({ steamid: _, playtime: _ }) => {
          _ && _.setQueryData(_(_, _.consumer_appid), _);
        }),
        _
      );
    },
    enabled: _,
    staleTime: 3600 * 1e3,
  });
}
export { _, _ };
