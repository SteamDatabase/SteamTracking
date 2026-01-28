import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
import { _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
function _(_) {
  return "appid" in _
    ? `app_${_.appid}`
    : "packageid" in _
      ? `package_${_.packageid}`
      : "bundleid" in _
        ? `bundle_${_.bundleid}`
        : "tagid" in _
          ? `tag_${_.tagid}`
          : "creatorid" in _
            ? `creator_${_.creatorid}`
            : "hubcategoryid" in _
              ? `hubcategory_${_.hubcategoryid}`
              : (_(_, "Unknown store item id type"), "");
}
function _(_, _) {
  switch (_) {
    case 0:
      return `app_${_}`;
    case 1:
      return `package_${_}`;
    case 2:
      return `bundle_${_}`;
    case 4:
      return `tag_${_}`;
    case 5:
      return `creator_${_}`;
    case 6:
      return `hubcategory_${_}`;
    case 3:
    case -1:
      return "";
    default:
      return _(_, `Unknown EStoreItemType ${_} ${_(_)} `), "";
  }
}
var _ = /^(app|package|bundle|mtx|tag|creator|hubcategory)_(\d*)$/;
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case "app":
        return {
          appid: parseInt(_[2]),
        };
      case "package":
        return {
          packageid: parseInt(_[2]),
        };
      case "bundle":
        return {
          bundleid: parseInt(_[2]),
        };
      case "tag":
        return {
          tagid: parseInt(_[2]),
        };
      case "creator":
        return {
          creatorid: parseInt(_[2]),
        };
      case "hubcategory":
        return {
          hubcategoryid: parseInt(_[2]),
        };
    }
  _(!1, `Failed to parse StoreItemID ${_}`);
}
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case "app":
        return {
          item_type: 0,
          _: parseInt(_[2]),
        };
      case "package":
        return {
          item_type: 1,
          _: parseInt(_[2]),
        };
      case "bundle":
        return {
          item_type: 2,
          _: parseInt(_[2]),
        };
      case "tag":
        return {
          item_type: 4,
          _: parseInt(_[2]),
        };
      case "creator":
        return {
          item_type: 5,
          _: parseInt(_[2]),
        };
      case "hubcategory":
        return {
          item_type: 6,
          _: parseInt(_[2]),
        };
    }
  return {
    item_type: -1,
    _: _ ? parseInt(_[2]) : 0,
  };
}
function _(_) {
  if (_) {
    if ("appid" in _)
      return {
        item_type: 0,
        _: _.appid,
      };
    if ("packageid" in _)
      return {
        item_type: 1,
        _: _.packageid,
      };
    if ("bundleid" in _)
      return {
        item_type: 2,
        _: _.bundleid,
      };
    if ("tagid" in _)
      return {
        item_type: 4,
        _: _.tagid,
      };
    if ("creatorid" in _)
      return {
        item_type: 5,
        _: _.creatorid,
      };
    if ("hubcategoryid" in _)
      return {
        item_type: 6,
        _: _.hubcategoryid,
      };
    _(_, "Unknown store item id type");
  }
  return {
    item_type: -1,
    _: 0,
  };
}
function _(_) {
  let _ = _.item_type ?? -1,
    _ = _._ || 0;
  switch (_) {
    case 0:
      return {
        appid: _,
      };
    case 1:
      return {
        packageid: _,
      };
    case 2:
      return {
        bundleid: _,
      };
    case 4:
      return {
        tagid: _,
      };
    case 5:
      return {
        creatorid: _,
      };
    case 6:
      return {
        hubcategoryid: _,
      };
    case 3:
    case -1:
      return;
    default:
      _(_, `Unknown EStoreItemType ${_} ${_(_)} `);
      return;
  }
}
function _(_) {
  return _.appid()
    ? {
        appid: _.appid(),
      }
    : _.packageid() !== void 0
      ? {
          packageid: _.packageid(),
        }
      : _.bundleid()
        ? {
            bundleid: _.bundleid(),
          }
        : _.tagid()
          ? {
              tagid: _.tagid(),
            }
          : _.creatorid()
            ? {
                creatorid: _.creatorid(),
              }
            : _.hubcategoryid()
              ? {
                  hubcategoryid: _.hubcategoryid(),
                }
              : (_(!1, `Invalid itemid: ${JSON.stringify(_.toObject())}`),
                {
                  appid: 0,
                });
}
var _ = _(_(), 1);
var _ = _(_(), 1);
function _(_, _, _, _) {
  return new _.default(
    async (_) => {
      let _ = new Set(),
        _ = new Map(),
        _ = new Set();
      _.add("default_info");
      let _ = {};
      if (
        (_.forEach((_) => {
          let [_, _ = "default_info"] = _(_, "|");
          _.add(_),
            _.has(_) ||
              (_ == "top_tags"
                ? (_.include_tag_count = 10)
                : _ != "default_info" && (_[_] = !0),
              _.add(_));
          let _ = _.get(_);
          _ || ((_ = new Set()), _.set(_, _)), _.add(_);
        }),
        _.include_included_items)
      ) {
        let { include_included_items: _, ..._ } = _;
        _.included_item_data_request = _;
      }
      let _ = _.Init(_);
      _(_, _),
        _(_, _),
        _.forEach((_) => {
          let _ = _(_);
          _ && _.Body().add_ids(_.fromObject(_));
        });
      let _;
      if (_.bUsePartnerAPI) {
        let _ = _.Init(_);
        _.Body().set_getitems_request(_.Body()), (_ = await _.GetItems(_, _));
      } else _ = await _.GetItems(_, _);
      let _ = new Map();
      return (
        _.Body()
          .store_items()
          .forEach((_) => {
            _.set(_(_.item_type(), _._()), _);
          }),
        _ && _(_, _, _, _),
        _.map((_) => {
          let [_] = _(_, "|"),
            _ = _.get(_);
          return _
            ? _.toObject()
            : {
                ..._(_),
                success: 2,
              };
        })
      );
    },
    {
      maxBatchSize: 500,
      cache: !1,
      ..._,
    },
  );
}
function _(_, _, _, _) {
  _.forEach((_, _) => {
    let _ = _.get(_);
    if ((_(_, `Missing request data for ${_}`), !_)) return;
    let _ = !1,
      _ = {};
    _.forEach((_) => {
      _.has(_) ||
        ((_ = !0),
        _ == "top_tags"
          ? (_.include_tag_count = 10)
          : _ && _ != "default_info" && (_[_] = !0));
    }),
      _ && _(_, _);
  });
}
var _ = _(_(), 1),
  _ = _.createContext({});
function _() {
  return _.useContext(_).dataLoader;
}
function _() {
  return _.useContext(_).storeBrowseContext;
}
function _() {
  return _.useContext(_).cacheStoreItemData;
}
function _() {
  return _.useContext(_);
}
function _(_) {
  let {
      context: _,
      msDelayBatch: _,
      serviceTransportOverride: _,
      legacyCacheStoreItemData: _,
      children: _,
    } = _,
    _ = _(),
    _ = _(),
    _ = _.useCallback(
      (_, _) => {
        _(_, _.toObject(), _), _ && _(_, _);
      },
      [_, _],
    ),
    _ = _ || _,
    { country: _, language: _, realm: _, bUsePartnerAPI: _ } = _,
    _ = _.useMemo(
      () => ({
        country: _,
        language: _,
        realm: _,
        bUsePartnerAPI: _,
      }),
      [_, _, _, _],
    ),
    _ = _.useMemo(() => {
      let _ = _ ? _(_) : void 0;
      return _(
        _,
        _,
        {
          cache: !1,
          batchScheduleFn: _,
        },
        _,
      );
    }, [_, _, _, _]),
    _ = _.useMemo(
      () => ({
        dataLoader: _,
        storeBrowseContext: _,
        cacheStoreItemData: _,
      }),
      [_, _, _],
    );
  return (0, _.jsx)(_.Provider, {
    value: _,
    children: _,
  });
}
function _(_) {
  let _ = 0;
  return (_) => {
    let _,
      _ = performance.now() - _;
    _ < _ && (_ = _ - _),
      setTimeout(() => {
        (_ = performance.now()), _();
      }, _);
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  return _(_, _);
}
function _(_) {
  return _(_, _, "include_assets");
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    _ = _ && "packageid" in _ && !!_.packageid,
    _;
  if (_) {
    let _ = _.getQueryData(_(_, "default_info"));
    _ &&
      _.included_appids?.length == 1 &&
      (_ = {
        appid: _.included_appids[0],
      });
  }
  let { data: _ } = _({
    ..._(_, _, _),
    enabled: _ && !_,
  });
  return (
    _ &&
      _.length == 1 &&
      (_ = {
        appid: _[0],
      }),
    _(_(_, _ ? _ : _))
  );
}
function _(_, _, _) {
  let _ = _ && "appid" in _ && !!_.appid;
  return {
    queryKey: _(_, "include_included_items"),
    queryFn: async () => (
      _ && _(_, _, _),
      (await _(_, _, "include_included_items")).included_appids ?? []
    ),
    initialData: _ ? [_.appid] : void 0,
    enabled: !_,
  };
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _ = !1) {
  let _ = _();
  return _(_ ? _(_, _) : _(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_) {
  let _ = _();
  return _(_(_, _));
}
function _(_, _) {
  return _(_, _, "include_basic_info", "basic_info");
}
function _(_, _, _) {
  _(_, _, _, "include_basic_info", "basic_info");
}
function _(_, _) {
  return _(_, _, "include_assets", "assets");
}
function _(_, _, _) {
  _(_, _, _, "include_assets", "assets");
}
function _(_, _) {
  return _(_, _, "include_screenshots", "screenshots");
}
function _(_, _, _) {
  _(_, _, _, "include_screenshots", "screenshots");
}
function _(_, _) {
  return _(_, _, "include_trailers", "trailers");
}
function _(_, _, _) {
  _(_, _, _, "include_trailers", "trailers");
}
function _(_, _) {
  return _(
    _,
    _,
    "include_assets_without_overrides",
    "assets_without_overrides",
  );
}
function _(_, _, _) {
  _(_, _, _, "include_assets_without_overrides", "assets_without_overrides");
}
function _(_, _) {
  return _(_, _, "include_reviews", "reviews");
}
function _(_, _, _) {
  _(_, _, _, "include_reviews", "reviews");
}
function _(_, _) {
  return _(_, _, "include_release", "release");
}
function _(_, _, _) {
  _(_, _, _, "include_release", "release");
}
function _(_, _) {
  return _(_, _, "top_tags", "tags");
}
function _(_, _, _) {
  _(_, _, _, "top_tags", "tags");
}
function _(_, _) {
  return _(_, _, "include_platforms", "platforms");
}
function _(_, _, _) {
  _(_, _, _, "include_platforms", "platforms");
}
function _(_, _) {
  return _(_, _, "apply_user_filters", "user_filter_failure");
}
function _(_, _, _) {
  _(_, _, _, "apply_user_filters", "user_filter_failure");
}
function _(_, _, _) {
  _(_, _, _, "include_all_purchase_options", "purchase_options");
}
function _(_) {
  return _
    ? "appid" in _ && !_.appid
      ? (_(!1, "Invalid appid passed to useStoreItem"), !1)
      : "bundleid" in _ && !_.bundleid
        ? (_(!1, "Invalid bundleid passed to useStoreItem"), !1)
        : !0
    : !1;
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _),
    queryFn: async () => (await _(_, _, _))[_] || null,
    staleTime: 360 * 60 * 1e3,
    enabled: _(_),
  };
}
function _(_, _, _, _, _) {
  _.setQueryData(_(_, _), _[_] ?? null);
}
function _(_, _) {
  return {
    queryKey: _(_, "default_info"),
    queryFn: async () => _(await _(_, _, "default_info")),
    staleTime: 360 * 60 * 1e3,
    enabled: _(_),
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) => _.best_purchase_option || null,
    staleTime: 600 * 1e3,
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) => _.self_purchase_option || _.best_purchase_option || null,
    staleTime: 600 * 1e3,
  };
}
function _(_, _) {
  return ["StoreItem", _ && _(_), _];
}
function _(_, _, _) {
  let _ = _(_);
  _ &&
    (_(_, _, _),
    _.include_basic_info && _(_, _, _),
    _.include_assets && _(_, _, _),
    _.include_screenshots && _(_, _, _),
    _.include_trailers && _(_, _, _),
    _.include_assets_without_overrides && _(_, _, _),
    _.include_reviews && _(_, _, _),
    _.include_release && _(_, _, _),
    _.include_tag_count && _.include_tag_count > 0 && _(_, _, _),
    _.include_platforms && _(_, _, _),
    _.apply_user_filters && _(_, _, _),
    _.include_all_purchase_options && _(_, _, _),
    _.include_included_items &&
      _.included_item_data_request &&
      (_.included_items?.included_apps?.forEach((_) =>
        _(_, _, _.included_item_data_request),
      ),
      _.included_items?.included_packages?.forEach((_) =>
        _(_, _, _.included_item_data_request),
      )));
}
var _ = [
  "assets",
  "tagids",
  "tags",
  "basic_info",
  "reviews",
  "game_rating",
  "purchase_options",
  "accessories",
  "screenshots",
  "trailers",
  "supported_languages",
  "assets_without_overrides",
  "user_filter_failure",
  "links",
  "platforms",
  "release",
];
function _(_) {
  let _ = {
    ..._,
  };
  for (let _ of _) delete _[_];
  return _;
}
function _(_, _, _) {
  _.setQueryData(_(_, "default_info"), _(_));
}
async function _(_, _, _) {
  return await _.load(`${_(_)}|${_}`);
}
export {
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
  _,
};
