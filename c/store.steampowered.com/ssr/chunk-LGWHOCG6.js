import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
function _() {
  let _ = _(),
    _ = _.accountid,
    _ = _.country_code;
  return _(_(_, _, _));
}
function _(_, _, _) {
  return {
    queryKey: _(_),
    queryFn: async () => {
      if (!_) return _();
      let _ = _.Init(_);
      _.Body().set_country_code(_);
      let _ = await _.GetStorePreferences(_, _);
      if (!_.BSuccess())
        throw `Error loading store preferences: ${_.GetErrorMessage()}`;
      return _.Body().toObject();
    },
    staleTime: 3600 * 1e3,
  };
}
function _() {
  let _ = _(),
    _ = _.accountid;
  return _(_(_, _));
}
var _ = [4, 3];
function _(_, _) {
  let _ = _.country_code;
  return {
    ..._(_, _, _),
    select: _,
  };
}
function _(_, _) {
  let _ = [_];
  if (_ && _.preferences && _.preferences.primary_language !== void 0) {
    let { primary_language: _, secondary_languages: _ } = _.preferences;
    if ((_ !== _ && _.push(_), _))
      for (let _ = 0; _ < 31; _++)
        (_ >> _) & 1 && _ != _ && _ != _ && _.push(_);
  }
  return _;
}
function _(_) {
  return _?.content_descriptor_preferences?.content_descriptors_to_exclude
    ? _.content_descriptor_preferences?.content_descriptors_to_exclude?.map(
        (_) => _.content_descriptorid,
      ) || []
    : _;
}
function _() {
  return {
    preferences: {
      primary_language: _(_.LANGUAGE),
    },
    content_descriptor_preferences: {
      content_descriptors_to_exclude: _.map((_) => ({
        content_descriptorid: _,
      })),
    },
  };
}
function _(_) {
  return ["StorePreferencesQueryKey", _ ?? 0];
}
export { _, _, _, _ };
