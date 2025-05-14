"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [5783],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
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
          _(
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
      function _(_, _, _, _) {
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
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_, _) {
        return _.filter((_) => !_.includes(_));
      }
      var _ = class extends _._ {
          #e;
          #t;
          #r;
          #i;
          #s;
          #a;
          #n;
          #o;
          constructor(_, _, _) {
            super(),
              (this.#e = _),
              (this.#i = _),
              (this.#r = []),
              (this.#s = []),
              (this.#t = []),
              this.setQueries(_);
          }
          onSubscribe() {
            1 === this.listeners.size &&
              this.#s.forEach((_) => {
                _.subscribe((_) => {
                  this.#c(_, _);
                });
              });
          }
          onUnsubscribe() {
            this.listeners.size || this.destroy();
          }
          destroy() {
            (this.listeners = new Set()),
              this.#s.forEach((_) => {
                _.destroy();
              });
          }
          setQueries(_, _, _) {
            (this.#r = _),
              (this.#i = _),
              _._.batch(() => {
                const _ = this.#s,
                  _ = this.#l(this.#r);
                _.forEach((_) =>
                  _.observer.setOptions(_.defaultedQueryOptions, _),
                );
                const _ = _.map((_) => _.observer),
                  _ = _.map((_) => _.getCurrentResult()),
                  _ = _.some((_, _) => _ !== _[_]);
                (_.length !== _.length || _) &&
                  ((this.#s = _),
                  (this.#t = _),
                  this.hasListeners() &&
                    (_(_, _).forEach((_) => {
                      _.destroy();
                    }),
                    _(_, _).forEach((_) => {
                      _.subscribe((_) => {
                        this.#c(_, _);
                      });
                    }),
                    this.#u()));
              });
          }
          getCurrentResult() {
            return this.#t;
          }
          getQueries() {
            return this.#s.map((_) => _.getCurrentQuery());
          }
          getObservers() {
            return this.#s;
          }
          getOptimisticResult(_, _) {
            const _ = this.#l(_).map((_) =>
              _.observer.getOptimisticResult(_.defaultedQueryOptions),
            );
            return [_, (_) => this.#m(_ ?? _, _), () => this.#d(_, _)];
          }
          #d(_, _) {
            const _ = this.#l(_);
            return __webpack_require__.map((_, _) => {
              const _ = _[_];
              return _.defaultedQueryOptions.notifyOnChangeProps
                ? _
                : _.observer.trackResult(_, (_) => {
                    __webpack_require__.forEach((_) => {
                      _.observer.trackProp(_);
                    });
                  });
            });
          }
          #m(_, _) {
            return _
              ? ((this.#a && this.#t === this.#o && _ === this.#n) ||
                  ((this.#n = _),
                  (this.#o = this.#t),
                  (this.#a = (0, _._)(this.#a, _(_)))),
                this.#a)
              : _;
          }
          #l(_) {
            const _ = new Map(this.#s.map((_) => [_.options.queryHash, _])),
              _ = [];
            return (
              _.forEach((_) => {
                const _ = this.#e.defaultQueryOptions(_),
                  _ = _.get(_.queryHash);
                if (_)
                  __webpack_require__.push({
                    defaultedQueryOptions: _,
                    observer: _,
                  });
                else {
                  const _ = this.#s.find(
                    (_) => _.options.queryHash === _.queryHash,
                  );
                  __webpack_require__.push({
                    defaultedQueryOptions: _,
                    observer: _ ?? new _._(this.#e, _),
                  });
                }
              }),
              __webpack_require__.sort(
                (_, _) =>
                  _.findIndex(
                    (_) => _.queryHash === _.defaultedQueryOptions.queryHash,
                  ) -
                  _.findIndex(
                    (_) => _.queryHash === _.defaultedQueryOptions.queryHash,
                  ),
              )
            );
          }
          #c(_, _) {
            const _ = this.#s.indexOf(_);
            -1 !== _ &&
              ((this.#t = (function (_, _, _) {
                const _ = _.slice(0);
                return (_[_] = _), _;
              })(this.#t, _, _)),
              this.#u());
          }
          #u() {
            if (this.hasListeners()) {
              this.#a !==
                this.#m(this.#d(this.#t, this.#r), this.#i?.combine) &&
                _._.batch(() => {
                  this.listeners.forEach((_) => {
                    _(this.#t);
                  });
                });
            }
          }
        },
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _({ queries: _, ..._ }, _) {
        const _ = (0, _._)(_),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = _.useMemo(
            () =>
              _.map((_) => {
                const _ = _.defaultQueryOptions(_);
                return (
                  (_._optimisticResults = _ ? "isRestoring" : "optimistic"), _
                );
              }),
            [_, _, _],
          );
        _.forEach((_) => {
          (0, _._)(_), (0, _._)(_, _);
        }),
          (0, _._)(_);
        const [_] = _.useState(() => new _(_, _, _)),
          [_, _, _] = _.getOptimisticResult(_, _.combine);
        _.useSyncExternalStore(
          _.useCallback(
            (_) => (_ ? _._ : _.subscribe(_._.batchCalls(_))),
            [_, _],
          ),
          () => _.getCurrentResult(),
          () => _.getCurrentResult(),
        ),
          _.useEffect(() => {
            _.setQueries(_, _, {
              listeners: !1,
            });
          }, [_, _, _]);
        const _ = _.some((_, _) => (0, _._)(_[_], _))
          ? _.flatMap((_, _) => {
              const _ = _[_];
              if (_) {
                const _ = new _._(_, _);
                if ((0, _._)(_, _)) return (0, _._)(_, _, _);
                (0, _._)(_, _) && (0, _._)(_, _, _);
              }
              return [];
            })
          : [];
        if (_.length > 0) throw Promise.all(_);
        const _ = _.find((_, _) => {
          const _ = _[_];
          return (
            _ &&
            (0, _._)({
              result: _,
              errorResetBoundary: _,
              throwOnError: _.throwOnError,
              query: _.getQueryCache().get(_.queryHash),
            })
          );
        });
        if (_?.error) throw _.error;
        return _(_());
      }
    },
  },
]);
