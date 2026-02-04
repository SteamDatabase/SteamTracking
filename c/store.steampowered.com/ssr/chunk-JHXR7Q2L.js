import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
function _(_, _, _, _) {
  let _ = _(),
    _ = _(),
    _ = _(),
    { storeBrowseContext: _, dataLoader: _ } = _(),
    { country: _ } = _,
    _ = _(_);
  return _({
    mutationFn: async () => {
      if (!_ && !_) throw "nPackageID or nBundleID must be passed.";
      let _;
      if (_(_)) {
        let [_, _] = await _(_, _, _, _, _, _);
        if (_ == 1) (_ = _.line_item_ids), _(_, _, _.cart);
        else throw `AddToAccountCart failed with ${_}`;
      } else if (_(_)) {
        let [_, _] = await _(_, _ ? [_] : void 0, _, _);
        if (_ == 1 && _)
          (_ =
            (_
              ? _.lineitems?.filter(
                  (_) =>
                    _.package_item &&
                    _.package_item.packageid == _ &&
                    !_.package_item.gidbundle,
                )
              : _.lineitems?.filter(
                  (_) => _.bundle_item && _.bundle_item.bundleid == _,
                )
            )?.map((_) => _.gidlineitem) || []),
            _(_, _, _(_));
        else throw `AddItemsToAnonymousCart failed with ${_}`;
      } else throw "Invalid cart type";
      return _;
    },
    onMutate: () => {
      let _ = _
        ? {
            packageid: _,
          }
        : {
            bundleid: _,
          };
      (async () => {
        let _ = await _.fetchQuery(_(_, _)),
          _ =
            _?.included_appids?.length == 1
              ? {
                  appid: _.included_appids[0],
                }
              : _;
        _.prefetchQuery(_(_, _)), _.prefetchQuery(_(_, _));
      })();
    },
  });
}
export { _ };
