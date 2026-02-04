import { _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _, _, _, _, _, _, _, _, _, _ } from "./chunk-XXXXXXXX.js";
import { _ } from "./chunk-XXXXXXXX.js";
var _ = _(_());
var _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.released_only || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 10, 11, 15, 16, 45], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              released_only: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              coming_soon_only: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              type_filters: {
                _: 3,
                _: _,
              },
              exclude_from: {
                _: 4,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              predefined_filter: {
                _: 5,
                _: _,
              },
              tagids_must_match: {
                _: 10,
                _: _,
                _: !0,
                _: !0,
              },
              tagids_exclude: {
                _: 11,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
              price_filters: {
                _: 12,
                _: _,
              },
              content_descriptors_must_match: {
                _: 15,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              content_descriptors_excluded: {
                _: 16,
                _: !0,
                _: !0,
                _: _.readEnum,
                pbr: _.readPackedEnum,
                _: _.writeRepeatedEnum,
              },
              regional_top_n_sellers: {
                _: 40,
                _: _.readInt32,
                _: _.writeInt32,
              },
              global_top_n_sellers: {
                _: 41,
                _: _.readInt32,
                _: _.writeInt32,
              },
              regional_long_term_top_n_sellers: {
                _: 42,
                _: _.readInt32,
                _: _.writeInt32,
              },
              global_long_term_top_n_sellers: {
                _: 43,
                _: _.readInt32,
                _: _.writeInt32,
              },
              store_page_filter: {
                _: 44,
                _: _,
              },
              parent_appids: {
                _: 45,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.include_apps || _(_._()),
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
              include_apps: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              include_packages: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              include_bundles: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              include_games: {
                _: 10,
                _: _.readBool,
                _: _.writeBool,
              },
              include_demos: {
                _: 11,
                _: _.readBool,
                _: _.writeBool,
              },
              include_mods: {
                _: 12,
                _: _.readBool,
                _: _.writeBool,
              },
              include_dlc: {
                _: 13,
                _: _.readBool,
                _: _.writeBool,
              },
              include_software: {
                _: 14,
                _: _.readBool,
                _: _.writeBool,
              },
              include_video: {
                _: 15,
                _: _.readBool,
                _: _.writeBool,
              },
              include_hardware: {
                _: 16,
                _: _.readBool,
                _: _.writeBool,
              },
              include_series: {
                _: 17,
                _: _.readBool,
                _: _.writeBool,
              },
              include_music: {
                _: 18,
                _: _.readBool,
                _: _.writeBool,
              },
              dlc_for_appid: {
                _: 19,
                _: _.readUint32,
                _: _.writeUint32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TypeFilters";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.filter_type || _(_._()),
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
              filter_type: {
                _: 1,
                _: _.readEnum,
                _: _.writeEnum,
              },
              language_preferences: {
                _: 2,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PredefinedFilter";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagids || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              tagids: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readInt32,
                pbr: _.readPackedInt32,
                _: _.writeRepeatedInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_TagFilter";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.only_free_items || _(_._()),
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
              only_free_items: {
                _: 1,
                _: _.readBool,
                _: _.writeBool,
              },
              exclude_free_items: {
                _: 2,
                _: _.readBool,
                _: _.writeBool,
              },
              min_discount_percent: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryFilters_PriceFilters";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.start || _(_._()),
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
              start: {
                _: 1,
                _: 0,
                _: _.readInt32,
                _: _.writeInt32,
              },
              count: {
                _: 2,
                _: 10,
                _: _.readInt32,
                _: _.writeInt32,
              },
              sort: {
                _: 10,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              filters: {
                _: 20,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryParams";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype._ || _(_._()),
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
              _: {
                _: 1,
                _: _,
              },
              score: {
                _: 2,
                _: _.readDouble,
                _: _.writeDouble,
              },
              spellcheck_generated_result: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryPerResultMetadata";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.total_matching_records || _(_._()),
        _.Message.initialize(this, _, 0, -1, [4, 5], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              total_matching_records: {
                _: 1,
                _: _.readInt32,
                _: _.writeInt32,
              },
              start: {
                _: 2,
                _: _.readInt32,
                _: _.writeInt32,
              },
              count: {
                _: 3,
                _: _.readInt32,
                _: _.writeInt32,
              },
              per_result_metadata: {
                _: 4,
                _: _,
                _: !0,
                _: !0,
              },
              spellcheck_suggestions: {
                _: 5,
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQueryResultMetadata";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.query_name || _(_._()),
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
              query_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              query: {
                _: 2,
                _: _,
              },
              context: {
                _: 3,
                _: _,
              },
              data_request: {
                _: 4,
                _: _,
              },
              override_country_code: {
                _: 5,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              metadata: {
                _: 1,
                _: _,
              },
              ids: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              store_items: {
                _: 3,
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_Query_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.query_name || _(_._()),
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
              query_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              context: {
                _: 2,
                _: _,
              },
              search_term: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
              max_results: {
                _: 4,
                _: _.readUint32,
                _: _.writeUint32,
              },
              filters: {
                _: 5,
                _: _,
              },
              data_request: {
                _: 6,
                _: _,
              },
              use_spellcheck: {
                _: 7,
                _: _.readBool,
                _: _.writeBool,
              },
              search_tags: {
                _: 8,
                _: _.readBool,
                _: _.writeBool,
              },
              search_creators: {
                _: 9,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              metadata: {
                _: 1,
                _: _,
              },
              ids: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              store_items: {
                _: 3,
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_SearchSuggestions_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.query_name || _(_._()),
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
              query_name: {
                _: 1,
                _: _.readString,
                _: _.writeString,
              },
              context: {
                _: 2,
                _: _,
              },
              data_request: {
                _: 3,
                _: _,
              },
              item_id: {
                _: 4,
                _: _,
              },
              count: {
                _: 5,
                _: 20,
                _: _.readInt32,
                _: _.writeInt32,
              },
              filters: {
                _: 6,
                _: _,
              },
              options: {
                _: 7,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_MoreLikeThis_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tag_weight || _(_._()),
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
              tag_weight: {
                _: 1,
                _: 90,
                _: _.readFloat,
                _: _.writeFloat,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.metadata || _(_._()),
        _.Message.initialize(this, _, 0, -1, [2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              metadata: {
                _: 1,
                _: _,
              },
              ids: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              store_items: {
                _: 3,
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_MoreLikeThis_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.filters || _(_._()),
        _.Message.initialize(this, _, 0, -1, [6], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              filters: {
                _: 2,
                _: _,
              },
              sections: {
                _: 6,
                _: _,
                _: !0,
                _: !0,
              },
              context: {
                _: 5,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sort || _(_._()),
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
              sort: {
                _: 1,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              min_items: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              randomize: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              include_packages: {
                _: 4,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              include_bundles: {
                _: 5,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Request_Section";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sections || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              sections: {
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagid || _(_._()),
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
              tagid: {
                _: 1,
                _: _.readUint32,
                _: _.writeUint32,
              },
              store_item_ids: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              tag_name: {
                _: 3,
                _: _.readString,
                _: _.writeString,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemsByUserRecommendedTags_Response_Section";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.sort || _(_._()),
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
              sort: {
                _: 1,
                _: 0,
                _: _.readEnum,
                _: _.writeEnum,
              },
              max_items: {
                _: 2,
                _: _.readUint32,
                _: _.writeUint32,
              },
              randomize: {
                _: 3,
                _: _.readBool,
                _: _.writeBool,
              },
              include_packages: {
                _: 4,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              include_bundles: {
                _: 5,
                _: !1,
                _: _.readBool,
                _: _.writeBool,
              },
              filters: {
                _: 6,
                _: _,
              },
              context: {
                _: 7,
                _: _,
              },
            },
          }),
        _.sm_m
      );
    }
    static MBF() {
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Request";
    }
  },
  _ = class _ extends _.Message {
    static ImplementsStaticInterface() {}
    constructor(_ = null) {
      super(),
        _.prototype.tagid || _(_._()),
        _.Message.initialize(this, _, 0, -1, [1, 2, 3], null);
    }
    static sm_m;
    static sm_mbf;
    static M() {
      return (
        _.sm_m ||
          (_.sm_m = {
            proto: _,
            fields: {
              tagid: {
                _: 1,
                _: !0,
                _: !0,
                _: _.readUint32,
                pbr: _.readPackedUint32,
                _: _.writeRepeatedUint32,
              },
              store_item_ids: {
                _: 2,
                _: _,
                _: !0,
                _: !0,
              },
              tag_name: {
                _: 3,
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
      return _.sm_mbf || (_.sm_mbf = _(_._())), _.sm_mbf;
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
      let _ = new _.default.BinaryReader(_),
        _ = new _();
      return _.deserializeBinaryFromReader(_, _);
    }
    static deserializeBinaryFromReader(_, _) {
      return _(_.MBF(), _, _);
    }
    serializeBinary() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
    }
    static serializeBinaryToWriter(_, _) {
      _(_._(), _, _);
    }
    serializeBase64String() {
      var _ = new _.default.BinaryWriter();
      return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
    }
    getClassName() {
      return "CStoreQuery_GetItemByUserCombinedTagsPriority_Response";
    }
  },
  _;
((_) => {
  function _(_, _) {
    return _.SendMsg("StoreQuery.Query#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.Query = _;
  function _(_, _) {
    return _.SendMsg("StoreQuery.SearchSuggestions#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 2,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.SearchSuggestions = _;
  function _(_, _) {
    return _.SendMsg("StoreQuery.MoreLikeThis#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
      eWebAPIKeyRequirement: 1,
    });
  }
  _.MoreLikeThis = _;
  function _(_, _) {
    return _.SendMsg("StoreQuery.GetItemsByUserRecommendedTags#1", _(_, _), _, {
      bConstMethod: !0,
      ePrivilege: 1,
    });
  }
  _.GetItemsByUserRecommendedTags = _;
  function _(_, _) {
    return _.SendMsg(
      "StoreQuery.GetItemByUserCombinedTagsPriority#1",
      _(_, _),
      _,
      {
        bConstMethod: !0,
        ePrivilege: 1,
      },
    );
  }
  _.GetItemByUserCombinedTagsPriority = _;
})((_ ||= {}));
export { _, _, _, _, _ };
