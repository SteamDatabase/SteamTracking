"use strict";
(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [5282],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.type || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  type: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  value: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  color: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  label: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  name: {
                    _: 5,
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
          return "CEconItem_DescriptionLine";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.link || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  link: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  name: {
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
          return "CEconItem_Action";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  category: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  internal_name: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  localized_category_name: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  localized_tag_name: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  color: {
                    _: 6,
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
          return "CEconItem_Tag";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.contained_items || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  contained_items: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  search_tags: {
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
          return "CEconItem_ContainerProperties";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.classid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  classid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  instanceid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
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
          return "CEconItem_ClassIdentifiers";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(
              this,
              _,
              0,
              -1,
              [8, 10, 11, 12, 13, 21, 26],
              null,
            );
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  classid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  instanceid: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  currency: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  background_color: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  icon_url: {
                    _: 6,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  icon_url_large: {
                    _: 7,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  descriptions: {
                    _: 8,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  tradable: {
                    _: 9,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  actions: {
                    _: 10,
                    _,
                    _: !0,
                    _: !0,
                  },
                  owner_descriptions: {
                    _: 11,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  owner_actions: {
                    _: 12,
                    _,
                    _: !0,
                    _: !0,
                  },
                  fraudwarnings: {
                    _: 13,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
                  },
                  name: {
                    _: 14,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  name_color: {
                    _: 15,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  type: {
                    _: 16,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_name: {
                    _: 17,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_hash_name: {
                    _: 18,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_fee: {
                    _: 19,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_fee_app: {
                    _: 28,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  contained_item: {
                    _: 20,
                    _: _,
                  },
                  market_actions: {
                    _: 21,
                    _,
                    _: !0,
                    _: !0,
                  },
                  commodity: {
                    _: 22,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  market_tradable_restriction: {
                    _: 23,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  market_marketable_restriction: {
                    _: 24,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  marketable: {
                    _: 25,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  tags: {
                    _: 26,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  item_expiration: {
                    _: 27,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_buy_country_restriction: {
                    _: 30,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_sell_country_restriction: {
                    _: 31,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  sealed: {
                    _: 32,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  container_properties: {
                    _: 33,
                    _: _,
                  },
                  market_bucket_group_name: {
                    _: 34,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  market_bucket_group_id: {
                    _: 35,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  on_market: {
                    _: 36,
                    _: _._.readBool,
                    _: _._.writeBool,
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
          return "CEconItem_Description";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.propertyid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  propertyid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  int_value: {
                    _: 2,
                    _: _._.readInt64String,
                    _: _._.writeInt64String,
                  },
                  float_value: {
                    _: 3,
                    _: _._.readFloat,
                    _: _._.writeFloat,
                  },
                  string_value: {
                    _: 4,
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
          return "CEconItem_AssetProperty";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.classid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [3, 4, 5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  classid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  instanceid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  standalone_properties: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  parent_relationship_properties: {
                    _: 4,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  nested_accessories: {
                    _: 5,
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
          return "CEconItem_AssetAccessory";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [4, 5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  contextid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  assetid: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  asset_properties: {
                    _: 4,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  asset_accessories: {
                    _: 5,
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
          return "CEconItem_AssetProperties";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype._ || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  _: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  name: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  type: {
                    _: 3,
                    _: _._.readEnum,
                    _: _._.writeEnum,
                  },
                  float_min: {
                    _: 4,
                    _: _._.readFloat,
                    _: _._.writeFloat,
                  },
                  float_max: {
                    _: 5,
                    _: _._.readFloat,
                    _: _._.writeFloat,
                  },
                  int_min: {
                    _: 6,
                    _: _._.readInt64String,
                    _: _._.writeInt64String,
                  },
                  int_max: {
                    _: 7,
                    _: _._.readInt64String,
                    _: _._.writeInt64String,
                  },
                  localized_label: {
                    _: 8,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  hide_from_description: {
                    _: 9,
                    _: _._.readBool,
                    _: _._.writeBool,
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
          return "CEconItem_AssetPropertySchema";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  language: {
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
          return "CEcon_GetAssetPropertySchema_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.property_schemas || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  property_schemas: {
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
          return "CEcon_GetAssetPropertySchema_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  appid: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  contextid: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  assetid: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  classid: {
                    _: 4,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  instanceid: {
                    _: 5,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  currencyid: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  amount: {
                    _: 7,
                    _: _._.readInt64String,
                    _: _._.writeInt64String,
                  },
                  missing: {
                    _: 8,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  est_usd: {
                    _: 9,
                    _: _._.readInt64String,
                    _: _._.writeInt64String,
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
          return "CEcon_Asset";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    _: 1,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  contextid: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  get_descriptions: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  get_asset_properties: {
                    _: 11,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  for_trade_offer_verification: {
                    _: 10,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  language: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  filters: {
                    _: 6,
                    _: _,
                  },
                  start_assetid: {
                    _: 8,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  count: {
                    _: 9,
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
          return "CEcon_GetInventoryItemsWithDescriptions_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.assetids || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  assetids: {
                    _: 1,
                    _: !0,
                    _: !0,
                    _: _._.readUint64String,
                    pbr: _._.readPackedUint64String,
                    _: _._.writeRepeatedUint64String,
                  },
                  currencyids: {
                    _: 2,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
                  },
                  tradable_only: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  marketable_only: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
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
          return "CEcon_GetInventoryItemsWithDescriptions_Request_FilterOptions";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.assets || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1, 2, 3, 7], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  assets: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  descriptions: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  missing_assets: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  asset_properties: {
                    _: 7,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  more_items: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  last_assetid: {
                    _: 5,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  total_inventory_count: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
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
          return "CEcon_GetInventoryItemsWithDescriptions_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.generate_new_token || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  generate_new_token: {
                    _: 1,
                    _: _._.readBool,
                    _: _._.writeBool,
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
          return "CEcon_GetTradeOfferAccessToken_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.trade_offer_access_token || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  trade_offer_access_token: {
                    _: 1,
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
          return "CEcon_GetTradeOfferAccessToken_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.return_url || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  return_url: {
                    _: 1,
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
          return "CEcon_ClientGetItemShopOverlayAuthURL_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.url || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  url: {
                    _: 1,
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
          return "CEcon_ClientGetItemShopOverlayAuthURL_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.language || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [3], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  language: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  appid: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  classes: {
                    _: 3,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  high_pri: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
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
          return "CEcon_GetAssetClassInfo_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.descriptions || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  descriptions: {
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
          return "CEcon_GetAssetClassInfo_Response";
        }
      }
      !(function (_) {
        (_.GetInventoryItemsWithDescriptions = function (_, _) {
          return _.SendMsg(
            "Econ.GetInventoryItemsWithDescriptions#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 2,
            },
          );
        }),
          (_.GetTradeOfferAccessToken = function (_, _) {
            return _.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.ClientGetItemShopOverlayAuthURL = function (_, _) {
            return _.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetAssetClassInfo = function (_, _) {
            return _.SendMsg("Econ.GetAssetClassInfo#1", (0, _._)(_, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (_.GetAssetPropertySchema = function (_, _) {
            return _.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
              },
            );
          });
      })(_ || (_ = {}));
    },
  },
]);
