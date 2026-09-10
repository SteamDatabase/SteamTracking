var _ = _(_(), 1);
function _(_) {
  let [_, _] = (0, _.useState)(_.IsReady());
  return (
    (0, _.useEffect)(() => {
      _ || _.Ready().then(() => _(!0));
    }, [_, _]),
    _
  );
}
function _(_) {
  let _ = _(),
    { data: _ } = _();
  if (_)
    return `appid` in _
      ? _?.has(_.appid)
      : `packageid` in _
        ? _?.some((_) => `packageid` in _ && _.packageid == _.packageid)
        : `bundleid` in _ &&
          _?.some((_) => `bundleid` in _ && _.bundleid == _.bundleid);
}
function _() {
  let { data: _ } = _();
  return _.useMemo(
    () =>
      _?.line_items?.map((_) =>
        _.packageid
          ? {
              packageid: _.packageid,
            }
          : {
              bundleid: _.bundleid,
            },
      ),
    [_],
  );
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _({
    queryKey: [`AppIDsInCart`, _],
    queryFn: async () => {
      let _ = await Promise.all(_.map((_) => _.fetchQuery(_(_, _)))),
        _ = new Set();
      return _.forEach((_) => _.included_appids?.forEach((_) => _.add(_))), _;
    },
    enabled: _ !== void 0,
  });
}
function _(_) {
  let _ = _(),
    [_, _] = _.useState(void 0);
  return (
    _.useEffect(() => {
      _.data?.line_items &&
        !_ &&
        _(new Set(_.data.line_items.map((_) => _.line_item_id)));
    }, [_.data?.line_items, _]),
    _.useMemo(
      () =>
        !_.data?.line_items || !_ || !_ || _.length === 0
          ? null
          : _.data.line_items.filter(
              (_) => _.includes(_.line_item_id) || !_?.has(_.line_item_id),
            ),
      [_, _.data?.line_items, _],
    )
  );
}
export { _, _, _ };
