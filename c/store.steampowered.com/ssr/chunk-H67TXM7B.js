import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = 1 / 0;
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _.excluded_content_descriptors));
}
function _() {
  let _ = _(),
    _ = _(),
    _ = _();
  return _(_(_, _, _, _.excluded_content_descriptors));
}
function _(_, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, _],
    queryFn: () => _(_, _, _),
    staleTime: _,
  };
}
function _(_, _, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, "MapByID"],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _));
      return new Map(_.map((_) => [_.hubcategoryid, _]));
    },
    staleTime: _,
  };
}
function _(_, _, _, _) {
  return {
    queryKey: ["CategoryHubDefinitions", _.language, "MapByHandle"],
    queryFn: async () => {
      let _ = await _.fetchQuery(_(_, _, _));
      return new Map(_.map((_) => [_.handle, _]));
    },
    staleTime: _,
  };
}
async function _(_, _, _) {
  let _ = _.Init(_);
  _(_, _), _.Body().set_excluded_content_descriptorids(_.slice());
  let _ = await _.GetContentHubConfig(_, _);
  if (!_.BSuccess())
    throw `Error loading category hub definitions: ${_.GetErrorMessage()}`;
  return _.Body().toObject().hubconfigs || [];
}
export { _, _, _ };
