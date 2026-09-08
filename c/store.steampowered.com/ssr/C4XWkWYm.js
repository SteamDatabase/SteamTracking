var _ = _(_(), 1);
function _() {
  let { data: _ } = _();
  return _.useMemo(() => {
    if (_ !== void 0) return _(_);
  }, [_]);
}
function _(_) {
  return {
    content_descriptors_excluded: _,
  };
}
function _(_, ..._) {
  let [_, _] = _.useState([]),
    _ = _.useRef(void 0);
  (0, _.useEffect)(() => {
    (!_.current || !_(_.current, _)) &&
      ((_.current = _), _((_) => [..._, _(..._)]));
  });
  let [_, _] = _({
    queries: _,
    combine: (_) => {
      for (let _ = _.length - 1; _ >= 0; _--)
        if (!_[_].isLoading) return [_, _[_]];
      return [void 0, void 0];
    },
  });
  return (
    (0, _.useEffect)(() => {
      _ && _ > 0 && _((_) => _.slice(_));
    }, [_]),
    _
  );
}
export { _, _ };
