var _ = _(_(), 1),
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.getitems_request || _(_._()),
        _.Message.initialize(this, _, 0, -1, void 0, null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            getitems_request: {
              _: 1,
              _: _,
            },
            include_unpublished: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetItems_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.ids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            ids: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Request`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.results || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            results: {
              _: 1,
              _: _,
              _: !0,
              _: !0,
            },
            no_info: {
              _: 2,
              _: _,
              _: !0,
              _: !0,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response`;
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
        _.Message.initialize(this, _, 0, -1, [3, 4], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        (_.sm_m ||= {
          proto: _,
          fields: {
            _: {
              _: 1,
              _: _,
            },
            no_restrictions: {
              _: 2,
              _: _.readBool,
              _: _.writeBool,
            },
            allowed_countries: {
              _: 3,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
            restricted_countries: {
              _: 4,
              _: !0,
              _: !0,
              _: _.readString,
              _: _.writeRepeatedString,
            },
          },
        }),
        _.sm_m
      );
    }
    static MBF() {
      return (_.sm_mbf ||= _(_._())), _.sm_mbf;
    }
    toObject(_ = !1) {
      return _.toObject(_, this);
    }
    static toObject(_, _) {
      return _(_._(), _, _);
    }
    static fromObject(_) {
      return _(_._(), _);
    }
    static deserializeBinary(_) {
      let _ = new _.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return `CPartnerStoreBrowse_GetCountryRestrictions_Response_CCountryRestrictions`;
    }
  },
  _;
(function (_) {
  function _(_, _, _) {
    return _.SendMsg(`PartnerStoreBrowse.GetItems#1`, _(_, _, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetItems = _;
  function _(_, _, _) {
    return _.SendMsg(
      `PartnerStoreBrowse.GetCountryRestrictions#1`,
      _(_, _, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetCountryRestrictions = _;
})((_ ||= {}));
function _(_) {
  return `appid` in _
    ? `app_${_.appid}`
    : `packageid` in _
      ? `package_${_.packageid}`
      : `bundleid` in _
        ? `bundle_${_.bundleid}`
        : `tagid` in _
          ? `tag_${_.tagid}`
          : `creatorid` in _
            ? `creator_${_.creatorid}`
            : `hubcategoryid` in _
              ? `hubcategory_${_.hubcategoryid}`
              : `salepagegid` in _
                ? `salepage_${_.salepagegid}`
                : (_(_, `Unknown store item id type`), ``);
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
    case 7:
      return `salepage_${_}`;
    case 3:
    case -1:
      return ``;
    default:
      return _(_, `Unknown EStoreItemType ${_} ${_(_)} `), ``;
  }
}
var _ = /^(app|package|bundle|mtx|tag|creator|hubcategory|salepage)_(\d*)$/;
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          appid: parseInt(_[2]),
        };
      case `package`:
        return {
          packageid: parseInt(_[2]),
        };
      case `bundle`:
        return {
          bundleid: parseInt(_[2]),
        };
      case `tag`:
        return {
          tagid: parseInt(_[2]),
        };
      case `creator`:
        return {
          creatorid: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          hubcategoryid: parseInt(_[2]),
        };
      case `salepage`:
        return {
          salepagegid: _[2],
        };
    }
  _(!1, `Failed to parse StoreItemID ${_}`);
}
function _(_) {
  let _ = _.match(_);
  if (_)
    switch (_[1]) {
      case `app`:
        return {
          item_type: 0,
          _: parseInt(_[2]),
        };
      case `package`:
        return {
          item_type: 1,
          _: parseInt(_[2]),
        };
      case `bundle`:
        return {
          item_type: 2,
          _: parseInt(_[2]),
        };
      case `tag`:
        return {
          item_type: 4,
          _: parseInt(_[2]),
        };
      case `creator`:
        return {
          item_type: 5,
          _: parseInt(_[2]),
        };
      case `hubcategory`:
        return {
          item_type: 6,
          _: parseInt(_[2]),
        };
      case `salepage`:
        return {
          item_type: 7,
          _: 0,
          gid: _[2],
        };
    }
  return {
    item_type: -1,
    _: _ ? parseInt(_[2]) : 0,
  };
}
function _(_) {
  if (_) {
    if (`appid` in _)
      return {
        item_type: 0,
        _: _.appid,
      };
    if (`packageid` in _)
      return {
        item_type: 1,
        _: _.packageid,
      };
    if (`bundleid` in _)
      return {
        item_type: 2,
        _: _.bundleid,
      };
    if (`tagid` in _)
      return {
        item_type: 4,
        _: _.tagid,
      };
    if (`creatorid` in _)
      return {
        item_type: 5,
        _: _.creatorid,
      };
    if (`hubcategoryid` in _)
      return {
        item_type: 6,
        _: _.hubcategoryid,
      };
    if (`salepagegid` in _)
      return {
        item_type: 7,
        _: 0,
        gid: _.salepagegid,
      };
    _(_, `Unknown store item id type`);
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
    case 7:
      return _.gid
        ? {
            salepagegid: _.gid,
          }
        : void 0;
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
    : _.packageid() === void 0
      ? _.bundleid()
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
              : _.salepagegid()
                ? {
                    salepagegid: _.salepagegid(),
                  }
                : (_(!1, `Invalid itemid: ${JSON.stringify(_.toObject())}`),
                  {
                    appid: 0,
                  })
      : {
          packageid: _.packageid(),
        };
}
function _(_, _) {
  return `appid` in _
    ? `appid` in _ && _.appid == _.appid
    : `packageid` in _
      ? `packageid` in _ && _.packageid == _.packageid
      : `bundleid` in _
        ? `bundleid` in _ && _.bundleid == _.bundleid
        : `tagid` in _
          ? `tagid` in _ && _.tagid == _.tagid
          : `creatorid` in _
            ? `creatorid` in _ && _.creatorid == _.creatorid
            : `hubcategoryid` in _
              ? `hubcategoryid` in _ && _.hubcategoryid == _.hubcategoryid
              : `salepagegid` in _
                ? `salepagegid` in _ && _.salepagegid == _.salepagegid
                : (_(_, `Invalid itemid: ${JSON.stringify(_)}`), !1);
}
var _ = _(_(), 1);
function _(_, _, _, _) {
  _(
    !_.bIncludeUnpublished || !!_.bUsePartnerAPI,
    `bIncludeUnpublished requires bUsePartnerAPI`,
  );
  let _ = new _.default(
    async (_) => {
      let _ = new Set(),
        _ = new Map(),
        _ = new Set();
      _.add(`default_info`);
      let _ = {};
      if (
        (_.forEach((_) => {
          let [_, _ = `default_info`] = _(_, `|`);
          _.add(_),
            _.has(_) ||
              (_ == `top_tags`
                ? (_.include_tag_count = 20)
                : _ != `default_info` && (_[_] = !0),
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
        _.Body().set_getitems_request(_.Body()),
          _.Body().set_include_unpublished(!!_.bIncludeUnpublished),
          (_ = await _.GetItems(_, _));
      } else _ = await _.GetItems(_, _);
      let _ = new Map();
      return (
        _.Body()
          .store_items()
          .forEach((_) => {
            _.set(_(_.item_type(), _.gid() ?? _._()), _);
          }),
        _ && _(_, _, _, _),
        _.map((_) => {
          let [_] = _(_, `|`),
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
  return (_.cacheScope = _(_)), _;
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
        _ == `top_tags`
          ? (_.include_tag_count = 20)
          : _ && _ != `default_info` && (_[_] = !0));
    }),
      _ && _(_, _);
  });
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_, _);
}
function _(_) {
  return _(_, _, `include_assets`);
}
function _(_, _, _) {
  let _ = _(),
    _ = _(),
    _ = _ && `packageid` in _ && !!_.packageid,
    _;
  if (_) {
    let _ = _.getQueryData(_(_, `default_info`, _.cacheScope));
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
    _(_(_, _ && _ ? _ : _))
  );
}
function _(_, _, _) {
  let _ = _ && `appid` in _ && !!_.appid;
  return {
    queryKey: _(_, `include_included_items`, _.cacheScope),
    queryFn: async () => (
      _ && _(_, _, _),
      (await _(_, _, `include_included_items`)).included_appids ?? []
    ),
    initialData: _ ? [_.appid] : void 0,
    enabled: !_,
  };
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  let _ = _();
  return _(_ && `bundleid` in _ ? _(_, _) : _(_, _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_, _ = !1) {
  let _ = _();
  return _(_ ? _(_, _) : _(_, _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_) {
  return _(_(_(), _));
}
function _(_, _) {
  return _(_, _, `include_basic_info`, `basic_info`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_basic_info`, `basic_info`, _);
}
function _(_, _) {
  return _(_, _, `include_full_description`, `full_description_bbcode`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_full_description`, `full_description_bbcode`, _);
}
function _(_, _) {
  return _(_, _, `include_assets`, `assets`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_assets`, `assets`, _);
}
function _(_, _) {
  return _(_, _, `include_screenshots`, `screenshots`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_screenshots`, `screenshots`, _);
}
function _(_, _) {
  return _(_, _, `include_links`, `links`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_links`, `links`, _);
}
function _(_, _) {
  return _(_, _, `include_trailers`, `trailers`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_trailers`, `trailers`, _);
}
function _(_, _) {
  return _(
    _,
    _,
    `include_assets_without_overrides`,
    `assets_without_overrides`,
  );
}
function _(_, _, _, _) {
  _(_, _, _, `include_assets_without_overrides`, `assets_without_overrides`, _);
}
function _(_, _) {
  return _(_, _, `include_reviews`, `reviews`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_reviews`, `reviews`, _);
}
function _(_, _) {
  return _(_, _, `include_release`, `release`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_release`, `release`, _);
}
function _(_, _) {
  return _(_, _, `top_tags`, `tags`);
}
function _(_, _, _, _) {
  _(_, _, _, `top_tags`, `tags`, _);
}
function _(_, _) {
  return _(_, _, `include_platforms`, `platforms`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_platforms`, `platforms`, _);
}
function _(_, _) {
  return _(_, _, `apply_user_filters`, `user_filter_failure`);
}
function _(_, _, _, _) {
  _(_, _, _, `apply_user_filters`, `user_filter_failure`, _);
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `include_all_purchase_options`, _), {
    purchase_options: _.purchase_options,
    package_groups: _.package_groups,
  });
}
function _(_, _, _, _) {
  _(_, _, _, `include_supported_languages`, `supported_languages`, _);
}
function _(_, _, _, _) {
  _(_, _, _, `include_extra_details`, `extra_details`, _);
}
function _(_, _) {
  return _(_, _, `include_ratings`, `game_rating`);
}
function _(_, _, _, _) {
  _(_, _, _, `include_ratings`, `game_rating`, _);
}
function _(_) {
  return _
    ? `appid` in _ && !_.appid
      ? (_(!1, `Invalid appid passed to useStoreItem`), !1)
      : `bundleid` in _ && !_.bundleid
        ? (_(!1, `Invalid bundleid passed to useStoreItem`), !1)
        : !0
    : !1;
}
function _(_, _, _, _) {
  return {
    queryKey: _(_, _, _.cacheScope),
    queryFn: async () => (await _(_, _, _))[_] || null,
    staleTime: 360 * 60 * 1e3,
    enabled: _(_),
  };
}
function _(_, _, _, _, _, _) {
  _.setQueryData(_(_, _, _), _[_] ?? null);
}
function _(_, _) {
  return {
    queryKey: _(_, `default_info`, _.cacheScope),
    queryFn: async () => _(await _(_, _, `default_info`)),
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
    select: (_) =>
      _?.purchase_options && _.purchase_options.length > 0
        ? _.purchase_options[0]
        : null,
    staleTime: 600 * 1e3,
  };
}
function _(_, _) {
  let _ = `include_all_purchase_options`;
  return {
    queryKey: _(_, _, _.cacheScope),
    queryFn: async () => {
      let _ = await _(_, _, _);
      return {
        purchase_options: _.purchase_options,
        package_groups: _.package_groups,
      };
    },
    staleTime: 600 * 1e3,
    enabled: _(_),
  };
}
function _(_, _) {
  return {
    ..._(_, _),
    select: (_) => _.self_purchase_option || _.best_purchase_option || null,
    staleTime: 600 * 1e3,
  };
}
function _(_, _, _) {
  let _ = [`StoreItem`, _ && _(_), _];
  return _ && _.push(_), _;
}
function _(_, _, _, _) {
  let _ = _(_);
  _ &&
    (_(_, _, _, _),
    _.include_basic_info && _(_, _, _, _),
    _.include_assets && _(_, _, _, _),
    _.include_screenshots && _(_, _, _, _),
    _.include_links && _(_, _, _, _),
    _.include_trailers && _(_, _, _, _),
    _.include_assets_without_overrides && _(_, _, _, _),
    _.include_reviews && _(_, _, _, _),
    _.include_release && _(_, _, _, _),
    _.include_tag_count && _.include_tag_count > 0 && _(_, _, _, _),
    _.include_platforms && _(_, _, _, _),
    _.apply_user_filters && _(_, _, _, _),
    _.include_all_purchase_options && _(_, _, _, _),
    _.include_full_description && _(_, _, _, _),
    _.include_supported_languages && _(_, _, _, _),
    _.include_extra_details && _(_, _, _, _),
    _.include_ratings && _(_, _, _, _),
    _.include_included_items &&
      _.included_item_data_request &&
      (_.included_items?.included_apps?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_packages?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      ),
      _.included_items?.included_bundles?.forEach((_) =>
        _(_, _, _.included_item_data_request, _),
      )));
}
var _ = [
  `assets`,
  `tagids`,
  `tags`,
  `basic_info`,
  `reviews`,
  `game_rating`,
  `purchase_options`,
  `screenshots`,
  `trailers`,
  `supported_languages`,
  `full_description_bbcode`,
  `assets_without_overrides`,
  `user_filter_failure`,
  `links`,
  `platforms`,
  `release`,
  `package_groups`,
  `extra_details`,
];
function _(_) {
  let _ = {
    ..._,
  };
  for (let _ of _) delete _[_];
  return _;
}
function _(_, _, _, _) {
  _.setQueryData(_(_, `default_info`, _), _(_));
}
async function _(_, _, _) {
  return await _.load(`${_(_)}|${_}`);
}
var _ = _(_(), 1),
  _ = _(),
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
    { country: _, language: _, bUsePartnerAPI: _, bIncludeUnpublished: _ } = _,
    _ = _.useMemo(
      () => ({
        country: _,
        language: _,
        bUsePartnerAPI: _,
        bIncludeUnpublished: _,
      }),
      [_, _, _, _],
    ),
    _ = _(_),
    _ = _.useCallback(
      (_, _) => {
        _(_, _.toObject(), _, _), _ && _(_, _);
      },
      [_, _, _],
    ),
    _ = _ || _,
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
