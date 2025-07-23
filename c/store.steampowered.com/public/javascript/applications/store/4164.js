"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4164],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = _.forwardRef(function (_, _) {
        const { children: __webpack_require__, navTreeRef: _, ..._ } = _,
          _ = _.useRef(),
          _ = (0, _._)(_, _),
          _ = (0, _._)(),
          _ = (0, _._)("__nav_tree_root");
        return _.createElement(
          _._,
          {
            ..._,
            navTreeRef: _,
            ref: _,
            parentEmbeddedNavTree: _,
            disabledRoot: !_,
          },
          _.createElement(
            _._,
            {
              disableFocusRing: !_,
            },
            __webpack_require__,
          ),
        );
      });
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.item_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  item_id: {
                    _: 1,
                    _: _._,
                  },
                  item: {
                    _: 2,
                    _: _._,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "StoreCapsule";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.context || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [9], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  context: {
                    _: 1,
                    _: _._,
                  },
                  data_request: {
                    _: 2,
                    _: _._,
                  },
                  include_spotlights: {
                    _: 5,
                    _: _,
                  },
                  include_dailydeals: {
                    _: 6,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  include_top_specials_count: {
                    _: 7,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  include_purchase_recommendations: {
                    _: 8,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  additional_purchase_item_ids: {
                    _: 9,
                    _: _._,
                    _: !0,
                    _: !0,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.location || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  location: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  category: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  genre_id: {
                    _: 3,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.spotlights || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  spotlights: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  daily_deals: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  specials: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  purchase_recommendations: {
                    _: 4,
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
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.item_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  item_id: {
                    _: 1,
                    _: _._,
                  },
                  associated_item: {
                    _: 2,
                    _: _._,
                  },
                  spotlight_template: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  spotlight_title: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  spotlight_body: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  asset_url: {
                    _: 6,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  spotlight_link_url: {
                    _: 7,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetItemsToFeature_Response_Spotlight";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.capsule_lists || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 3, 4, 6], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  capsule_lists: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  takeover: {
                    _: 2,
                    _: _,
                  },
                  assets: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  custom_assets: {
                    _: 4,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  layout: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  fields: {
                    _: 6,
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
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.name || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  capsules: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  max_visible: {
                    _: 3,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  max_unreleased: {
                    _: 4,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_CapsuleList";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.asset_name || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  asset_name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  asset_path: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_Asset";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.name || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  name: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  value: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStorePageCluster_Field";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.context || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  context: {
                    _: 1,
                    _: _._,
                  },
                  data_request: {
                    _: 2,
                    _: _._,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetFrontPageConfig_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.cluster || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  cluster: {
                    _: 1,
                    _: _,
                  },
                },
              }),
            _.sm_m
          );
        }
        static MBF() {
          return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _._(_._(), _, _);
        }
        static fromObject(_) {
          return _._(_._(), _);
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _._(_.MBF(), _, _);
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {
          _._(_._(), _, _);
        }
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CStoreMarketing_GetFrontPageConfig_Response";
        }
      }
      !(function (_) {
        (_.GetItemsToFeature = function (_, _) {
          return _.SendMsg(
            "StoreMarketing.GetItemsToFeature#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            },
          );
        }),
          (_.GetFrontPageConfig = function (_, _) {
            return _.SendMsg(
              "StoreMarketing.GetFrontPageConfig#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          });
      })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        const _ = (0, _._)(),
          { storeBrowseContext: _, cacheStoreItemData: _ } = (0, _._)();
        return (0, _._)(
          (function (_, _, _, _) {
            const { storeBrowseContext: _, cacheStoreItemData: _ } = _;
            return {
              ..._(
                _,
                _,
                {
                  rgAdditionalRecommendationIDs: _ ?? [],
                },
                _ && {
                  data_request: _,
                  cacheStoreItemData: _,
                },
              ),
              enabled: _._.logged_in,
              select: (_) =>
                (_.purchase_recommendations || []).map((_) => _.item_id),
            };
          })(
            _,
            {
              storeBrowseContext: _,
              cacheStoreItemData: _,
            },
            _,
            _,
          ),
        );
      }
      function _(_, _, __webpack_require__ = !0) {
        const _ = (0, _._)(),
          { storeBrowseContext: _, cacheStoreItemData: _ } = (0, _._)(),
          _ = _(
            _,
            _,
            _,
            _ && {
              data_request: _,
              cacheStoreItemData: _,
            },
          );
        return (0, _._)({
          ..._,
          enabled: __webpack_require__ && (_.enabled ?? !0),
        });
      }
      function _(_, _, _, _) {
        const {
            bIncludeDailyDeals: _ = !1,
            nIncludeTopNSpecials: _ = 0,
            spotlightLocation: _ = {},
            rgAdditionalRecommendationIDs: _,
          } = _,
          _ = {
            bIncludeDailyDeals: _,
            nIncludeTopNSpecials: _,
            spotlightLocation: _,
            rgAdditionalRecommendationIDs: _,
          };
        return {
          queryKey: ["ItemsToFeature", _],
          queryFn: () =>
            (async function (_, _, _, _) {
              const _ = _._.Init(_);
              (0, _._)(_, _), _ && (0, _._)(_, _.data_request);
              _.bIncludeDailyDeals && _.Body().set_include_dailydeals(!0);
              _.nIncludeTopNSpecials &&
                _.Body().set_include_top_specials_count(_.nIncludeTopNSpecials);
              _.spotlightLocation &&
                _.Body().set_include_spotlights(
                  _.fromObject(_.spotlightLocation),
                );
              void 0 !== _.rgAdditionalRecommendationIDs &&
                (_.Body().set_include_purchase_recommendations(!0),
                _.rgAdditionalRecommendationIDs.forEach((_) =>
                  _.Body().add_additional_purchase_item_ids(_._.fromObject(_)),
                ));
              const _ = await _.GetItemsToFeature(_, _);
              if (!_.BSuccess()) throw _.GetErrorMessage();
              if (_) {
                const { cacheStoreItemData: _, data_request: _ } = _,
                  _ = (_) => _ && _(_, _);
                _.Body()
                  .spotlights()
                  .forEach((_) => __webpack_require__(_.associated_item(!1))),
                  _.Body()
                    .daily_deals()
                    .forEach((_) => __webpack_require__(_.item(!1))),
                  _.Body()
                    .specials()
                    .forEach((_) => __webpack_require__(_.item(!1))),
                  _.Body()
                    .purchase_recommendations()
                    .forEach((_) => __webpack_require__(_.item(!1)));
              }
              return _.Body().toObject();
            })(_, _, _, _),
          staleTime: 36e5,
        };
      }
    },
  },
]);
