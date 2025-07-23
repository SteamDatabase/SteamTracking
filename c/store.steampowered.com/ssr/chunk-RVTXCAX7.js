import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
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
function _(_) {
  return _?.is_coming_soon
    ? _(
        _.coming_soon_display,
        _.steam_release_date,
        _.custom_release_date_message,
      )
    : _?.steam_release_date
      ? _(_.steam_release_date)
      : "";
}
function _(_, _, _) {
  switch (_) {
    case "date_full":
      return _(_);
    case "date_month":
      return _(new Date(_ * 1e3));
    case "date_quarter":
      return _(new Date(_ * 1e3));
    case "date_year":
      return _(new Date(_ * 1e3));
    case "text_comingsoon":
      return _ || _.Localize("#Store_ComingSoon_ComingSoon");
    case "text_tba":
      return _ || _.Localize("#Store_ComingSoon_TBA");
    default:
      return "";
  }
}
function _(_) {
  return new Date(_ * 1e3).toLocaleDateString(_());
}
function _(_) {
  return _.toLocaleDateString(_(), {
    year: "numeric",
  });
}
function _(_) {
  return _.toLocaleDateString(_(), {
    month: "long",
    year: "numeric",
  });
}
function _(_) {
  switch (_.getUTCMonth()) {
    case 0:
    case 1:
    case 2:
      return _.Localize("#Time_QuarterOfYear_Q1", _.getUTCFullYear());
    case 3:
    case 4:
    case 5:
      return _.Localize("#Time_QuarterOfYear_Q2", _.getUTCFullYear());
    case 6:
    case 7:
    case 8:
      return _.Localize("#Time_QuarterOfYear_Q3", _.getUTCFullYear());
    case 9:
    case 10:
    case 11:
    default:
      return _.Localize("#Time_QuarterOfYear_Q4", _.getUTCFullYear());
  }
}
export { _, _ };
