import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
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
var _ = _(_(), 1);
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
    queryKey: ["SearchSuggestions", _, _, _],
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
      "appid" in _ || "packageid" in _ || "bundleid" in _
        ? _.push(_)
        : "tagid" in _ || "hubcategoryid" in _
          ? _.push(_)
          : "creatorid" in _
            ? _.push(_)
            : _(_, `unexepected id type: ${JSON.stringify(_)}`);
    }),
    [_, _, _]
  );
}
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
var _ = _(_());
var _ = _(_());
function _(_, ..._) {
  let [_, _] = _.useState([]),
    _ = _.useRef(void 0);
  (0, _.useEffect)(() => {
    (!_.current || !_.ArrayEquals(_.current, _)) &&
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
export { _, _, _, _, _ };
