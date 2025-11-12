(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [8453],
  {
    chunkid: (module) => {
      module.exports = {
        FAQContainer: "_2PQsW53YUsH-Z6TICGEF3K",
        Section: "bjwwIcPcDhqU8vTIhRti3",
        Note: "XjQ8ghCC1Ncl0mZyQ3iDM",
        Important: "mRx2Io-gR5pz0gqZnF4e7",
        Warning: "_3Hvtr6roA7ZUH4Vmi-YiYS",
        FAQImage: "_3EebtYBetncFupzjwjtJ8k",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
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
            _.prototype.faq_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [6], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  internal_name: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  visible_in_global_realm: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  visible_in_china_realm: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  json_data: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  per_language_info: {
                    _: 6,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  url_code: {
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
          return "CClanFAQSummary";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.language || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  language: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  last_update_timestamp: {
                    _: 2,
                    _: _._.readFixed32,
                    _: _._.writeFixed32,
                  },
                  last_publish_timestamp: {
                    _: 3,
                    _: _._.readFixed32,
                    _: _._.writeFixed32,
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
          return "CClanFAQSummary_CLanguageInfo";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  version: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  content: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  title: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  timestamp: {
                    _: 6,
                    _: _._.readFixed32,
                    _: _._.writeFixed32,
                  },
                  author_account_id: {
                    _: 7,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  url_code: {
                    _: 8,
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
          return "CClanFAQContent";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  internal_name: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  json_data: {
                    _: 3,
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
          return "CClanFAQS_Create_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq_id: {
                    _: 1,
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
          return "CClanFAQS_Create_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
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
          return "CClanFAQS_Delete_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_Delete_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  internal_name: {
                    _: 3,
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
          return "CClanFAQS_UpdateInternalName_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateInternalName_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  json_data: {
                    _: 3,
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
          return "CClanFAQS_UpdateJsonData_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_UpdateJsonData_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  visible_in_global_realm: {
                    _: 3,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  visible_in_china_realm: {
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
          return "CClanFAQS_SetVisibility_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_SetVisibility_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  content: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  title: {
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
          return "CClanFAQS_UpdateDraft_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.last_update_timestamp || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  last_update_timestamp: {
                    _: 1,
                    _: _._.readFixed32,
                    _: _._.writeFixed32,
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
          return "CClanFAQS_UpdateDraft_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.steamid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [3], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  steamid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 3,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
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
          return "CClanFAQS_PublishDraft_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.last_publish_timestamp || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  last_publish_timestamp: {
                    _: 1,
                    _: _._.readFixed32,
                    _: _._.writeFixed32,
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
          return "CClanFAQS_PublishDraft_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 3,
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
          return "CClanFAQS_PreviewDraft_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq: {
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
          return "CClanFAQS_PreviewDraft_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 3,
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
          return "CClanFAQS_GetFAQ_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq: {
                    _: 1,
                    _: _,
                  },
                  faq_exists: {
                    _: 2,
                    _: !1,
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
          return "CClanFAQS_GetFAQ_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
                    _: 2,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 3,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  version: {
                    _: 4,
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
          return "CClanFAQS_GetFAQVersion_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq: {
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
          return "CClanFAQS_GetFAQVersion_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
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
          return "CClanFAQS_GetAllDrafts_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.summary || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  summary: {
                    _: 1,
                    _: _,
                  },
                  draft: {
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
          return "CClanFAQS_GetAllDrafts_Response";
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
          return "CClanFAQS_GetAllFAQsForClan_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq: {
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
          return "CClanFAQS_GetAllFAQsForClan_Response";
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
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  faq_id: {
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
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faqs || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faqs: {
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
          return "CClanFAQS_GetAllLatestVersionPublishedFAQS_Response";
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
          return "CClanFAQS_CheckFAQPermissions_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQS_CheckFAQPermissions_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.search_text || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [2, 5], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  search_text: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  elanguages: {
                    _: 2,
                    _: !0,
                    _: !0,
                    _: _._.readInt32,
                    pbr: _._.readPackedInt32,
                    _: _._.writeRepeatedInt32,
                  },
                  count: {
                    _: 3,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  cursor: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  filter_clanids: {
                    _: 5,
                    _: !0,
                    _: !0,
                    _: _._.readUint32,
                    pbr: _._.readPackedUint32,
                    _: _._.writeRepeatedUint32,
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
          return "CClanFAQS_SearchFAQs_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faqs || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [1], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faqs: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  num_total_results: {
                    _: 2,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  next_cursor: {
                    _: 3,
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
          return "CClanFAQS_SearchFAQs_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.articleid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [6], null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  articleid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  name: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  content: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  clan_accountid: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  url_code: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  localized_names: {
                    _: 6,
                    _: !0,
                    _: !0,
                    _: _._.readString,
                    _: _._.writeRepeatedString,
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
          return "CClanFAQS_SearchFAQs_Response_CFAQSearchResult";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  language: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  steamid: {
                    _: 3,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
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
          return "CClanFAQs_FetchLocalizationFromCrowdIn_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(), _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        toObject(_ = !1) {
          return _.toObject(_, this);
        }
        static toObject(_, _) {
          return _
            ? {
                $jspbMessageInstance: _,
              }
            : {};
        }
        static fromObject(_) {
          return new _();
        }
        static deserializeBinary(_) {
          let _ = new (_().BinaryReader)(_),
            _ = new _();
          return _.deserializeBinaryFromReader(_, _);
        }
        static deserializeBinaryFromReader(_, _) {
          return _;
        }
        serializeBinary() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
        }
        static serializeBinaryToWriter(_, _) {}
        serializeBase64String() {
          var _ = new (_().BinaryWriter)();
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClanFAQs_FetchLocalizationFromCrowdIn_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.faq_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  faq_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  steamid: {
                    _: 2,
                    _: _._.readFixed64String,
                    _: _._.writeFixed64String,
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
          return "CClanFAQs_GetCrowdInMetadata_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.crowdin_project_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  crowdin_project_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  crowdin_file_id: {
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
          return "CClanFAQs_GetCrowdInMetadata_Response";
        }
      }
      !(function (_) {
        (_.Create = function (_, _) {
          return _.SendMsg("ClanFAQS.Create#1", (0, _._)(_, _), _, {
            ePrivilege: 1,
          });
        }),
          (_.Delete = function (_, _) {
            return _.SendMsg("ClanFAQS.Delete#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.UpdateInternalName = function (_, _) {
            return _.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.UpdateJsonData = function (_, _) {
            return _.SendMsg("ClanFAQS.UpdateJsonData#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.SetVisibility = function (_, _) {
            return _.SendMsg("ClanFAQS.SetVisibility#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.UpdateDraft = function (_, _) {
            return _.SendMsg("ClanFAQS.UpdateDraft#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.PublishDraft = function (_, _) {
            return _.SendMsg("ClanFAQS.PublishDraft#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.PreviewDraft = function (_, _) {
            return _.SendMsg("ClanFAQS.PreviewDraft#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.GetFAQ = function (_, _) {
            return _.SendMsg("ClanFAQS.GetFAQ#1", (0, _._)(_, _), _, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (_.GetFAQVersion = function (_, _) {
            return _.SendMsg("ClanFAQS.GetFAQVersion#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.GetAllDrafts = function (_, _) {
            return _.SendMsg("ClanFAQS.GetAllDrafts#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          }),
          (_.GetAllFAQsForClan = function (_, _) {
            return _.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetAllLatestVersionPublishedFAQS = function (_, _) {
            return _.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.CheckFAQPermissions = function (_, _) {
            return _.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.SearchFAQs = function (_, _) {
            return _.SendMsg("ClanFAQS.SearchFAQs#1", (0, _._)(_, _), _, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }),
          (_.FetchLocalizationFromCrowdIn = function (_, _) {
            return _.SendMsg(
              "ClanFAQS.FetchLocalizationFromCrowdIn#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetCrowdInMetadata = function (_, _) {
            return _.SendMsg(
              "ClanFAQS.GetCrowdInMetadata#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          });
      })(_ || (_ = {}));
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      const _ = new Map([
          ...Array.from(_._.entries()),
          ...Array.from(_._.entries()),
          [
            "section",
            {
              Constructor: function (_) {
                let _ = (0, _._)(_.args, "id");
                _ &&
                  "string" == typeof _ &&
                  _.length > 0 &&
                  "#" === _[0] &&
                  (_ = _.substring(1));
                const _ = (0, _._)(_.args, "style"),
                  _ = (0, _._)(
                    _().Section,
                    "note" == _ && _().Note,
                    "important" == _ && _().Important,
                    "warning" == _ && _().Warning,
                  );
                return _.createElement(
                  "div",
                  {
                    _: _ || void 0,
                    className: _,
                  },
                  _.children,
                );
              },
              autocloses: !1,
            },
          ],
          [
            "img",
            {
              Constructor: function (_) {
                var _, _, _;
                const { showErrorInfo: _ } = _.context;
                let _ =
                  null === (_ = null == _ ? void 0 : _.children) || void 0 === _
                    ? void 0
                    : _.toString();
                (null != _ && null != _ && 0 != _.length) ||
                  (_ =
                    null === (_ = null == _ ? void 0 : _.args) || void 0 === _
                      ? void 0
                      : _[""]);
                const _ =
                    null === (_ = null == _ ? void 0 : _.args) || void 0 === _
                      ? void 0
                      : _.alt,
                  _ = (0, _._)(_, _.language);
                return null == _
                  ? null
                  : "string" == typeof _
                    ? ((_ = _),
                      _
                        ? _.createElement(_._, {
                            className: _().FAQImage,
                            src: _,
                            alt: _,
                          })
                        : ((_ = _.replace("http://", "https://")),
                          _.createElement("img", {
                            className: _().FAQImage,
                            src: _,
                            alt: _,
                          })))
                    : _.createElement(_._, {
                        className: _().FAQImage,
                        rgSources: _,
                        alt: _,
                      });
              },
              autocloses: !1,
            },
          ],
          [
            "exclude_realm",
            {
              Constructor: function (_) {
                const _ = (0, _._)(_.args);
                return ("global" == _ &&
                  _._.EREALM == _._.k_ESteamRealmGlobal) ||
                  ("china" == _ && (0, _._)())
                  ? null
                  : _.createElement(_.Fragment, null, _.children);
              },
              autocloses: !1,
            },
          ],
        ]),
        _ = (_) => {
          const { text: _, bShowErrorInfo: __webpack_require__ } = _,
            _ = _.useCallback(
              (_) =>
                new _._(
                  new _._(
                    new _._(new _._(), 0),
                    _,
                    [
                      {
                        urlRegExp: /youtu.be|youtube.com/i,
                        fnBBComponent: _._,
                      },
                    ],
                    {},
                  ),
                  _,
                ),
              [],
            ),
            _ = _.useRef(new _._(_, _, _._.LANGUAGE));
          return _.createElement(
            "div",
            {
              className: _().FAQContainer,
            },
            _.current.ParseBBCode(_, {
              showErrorInfo: __webpack_require__,
            }),
          );
        };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        constructor(_, _) {
          (this.m_summary = void 0),
            (this.m_mapLocalUpdates = new Map()),
            (0, _._)(this),
            (this.m_summary = _),
            (this.m_mapStoredDrafts = _),
            (this.m_mapLocalUpdates = new Map());
          for (let _ = 0; _ < 31; _++) this.m_mapLocalUpdates.set(_, {});
        }
        BNeedsSaving(_) {
          if (void 0 !== _) {
            const _ = this.m_mapLocalUpdates.get(_);
            return !!_.strTitle || !!_.strContent;
          }
          return Array.from(this.m_mapLocalUpdates.values()).some(
            (_) => !!_.strTitle || !!_.strContent,
          );
        }
        async SaveDrafts() {
          var _, _, _, _;
          (0, _._)(
            Boolean(
              null === (_ = this.m_summary) || void 0 === _ ? void 0 : _.faq_id,
            ),
            "Attempting to save when we lack a FaqID in the summary object",
          );
          let _ = 1,
            _ = new Array();
          for (let _ = 0; _ < 31; ++_)
            if (
              (this.m_mapLocalUpdates.get(_).strTitle &&
                this.m_mapLocalUpdates.get(_).strTitle !==
                  (null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
                    ? void 0
                    : _.title)) ||
              (this.m_mapLocalUpdates.get(_).strContent &&
                this.m_mapLocalUpdates.get(_).strContent !==
                  (null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
                    ? void 0
                    : _.content))
            ) {
              const _ = this.GetDraftTitle(_),
                _ = this.GetDraftContent(_),
                _ = _.Get().UpdateDraft(
                  null === (_ = this.m_summary) || void 0 === _
                    ? void 0
                    : _.faq_id,
                  _,
                  _,
                  _,
                );
              _.then((_) => {
                1 == _.eResult
                  ? (0, _._)(() => {
                      this.m_mapStoredDrafts.has(_) ||
                        this.m_mapStoredDrafts.set(_, {}),
                        (this.m_mapStoredDrafts.get(_).title = _),
                        (this.m_mapStoredDrafts.get(_).content = _),
                        (this.m_mapStoredDrafts.get(_).timestamp =
                          _.rtUpdateTime),
                        (this.m_mapStoredDrafts.get(_).author_account_id =
                          _._.accountid.toString()),
                        (this.m_mapLocalUpdates.get(_).strTitle = null),
                        (this.m_mapLocalUpdates.get(_).strContent = null);
                      let _ = !1;
                      this.m_summary.per_language_info.forEach((_) => {
                        _ == _.language &&
                          ((_ = !0),
                          (_.last_update_timestamp = Math.max(
                            _.last_update_timestamp,
                            _.rtUpdateTime,
                          )));
                      }),
                        _ ||
                          this.m_summary.per_language_info.push({
                            language: _,
                            last_update_timestamp: _.rtUpdateTime,
                          });
                    })
                  : 1 == _ &&
                    (console.error(
                      "FAQModel.SaveDraft: Response not ok " + _.eResult,
                      _,
                    ),
                    (_ = _.eResult));
              }).catch((_) => {
                console.error(
                  "FAQModel.SaveDrafts: Hit error " + (0, _._)(_).strErrorMsg,
                ),
                  1 == _ && (_ = 2);
              }),
                _.push(_);
            }
          return await Promise.all(_), _;
        }
        GetFAQInternalName() {
          var _;
          return null === (_ = this.m_summary) || void 0 === _
            ? void 0
            : _.internal_name;
        }
        GetDraftTitle(_) {
          var _;
          return null !== this.m_mapLocalUpdates.get(_).strTitle &&
            void 0 !== this.m_mapLocalUpdates.get(_).strTitle
            ? this.m_mapLocalUpdates.get(_).strTitle
            : null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
              ? void 0
              : _.title;
        }
        GetDraftContent(_) {
          var _;
          return null !== this.m_mapLocalUpdates.get(_).strContent &&
            void 0 !== this.m_mapLocalUpdates.get(_).strContent
            ? this.m_mapLocalUpdates.get(_).strContent
            : null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
              ? void 0
              : _.content;
        }
        GetDraftTitleWithFallback(_, _ = _._.k_ESteamRealmGlobal) {
          var _, _, _, _, _, _;
          const _ = _ == _._.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (_ =
              null !==
                (_ =
                  null !==
                    (_ =
                      null !== (_ = this.m_mapLocalUpdates.get(_).strTitle) &&
                      void 0 !== _
                        ? _
                        : this.m_mapLocalUpdates.get(_).strTitle) &&
                  void 0 !== _
                    ? _
                    : null === (_ = this.m_mapStoredDrafts.get(_)) ||
                        void 0 === _
                      ? void 0
                      : _.title) && void 0 !== _
                ? _
                : null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
                  ? void 0
                  : _.title) && void 0 !== _
            ? _
            : "";
        }
        GetDraftContentWithFallback(_, _ = _._.k_ESteamRealmGlobal) {
          var _, _, _, _, _, _;
          const _ = _ == _._.k_ESteamRealmChina ? 6 : 0;
          return null !==
            (_ =
              null !==
                (_ =
                  null !==
                    (_ =
                      null !== (_ = this.m_mapLocalUpdates.get(_).strContent) &&
                      void 0 !== _
                        ? _
                        : this.m_mapLocalUpdates.get(_).strContent) &&
                  void 0 !== _
                    ? _
                    : null === (_ = this.m_mapStoredDrafts.get(_)) ||
                        void 0 === _
                      ? void 0
                      : _.content) && void 0 !== _
                ? _
                : null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
                  ? void 0
                  : _.content) && void 0 !== _
            ? _
            : "";
        }
        GetLastSavedDraftVersion(_) {
          return this.m_mapStoredDrafts.get(_);
        }
        BHasSomeTextForLanguage(_) {
          return Boolean(this.GetDraftContent(_) || this.GetDraftTitle(_));
        }
        SetDraftTitle(_, _) {
          var _;
          _ ===
          (null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
            ? void 0
            : _.title)
            ? (this.m_mapLocalUpdates.get(_).strTitle = null)
            : (this.m_mapLocalUpdates.get(_).strTitle = _);
        }
        SetDraftContent(_, _) {
          var _;
          _ ===
          (null === (_ = this.m_mapStoredDrafts.get(_)) || void 0 === _
            ? void 0
            : _.content)
            ? (this.m_mapLocalUpdates.get(_).strContent = null)
            : (this.m_mapLocalUpdates.get(_).strContent = _);
        }
        GetIncludedRealmList() {
          const _ = new Array();
          return (
            this.m_summary.visible_in_global_realm &&
              _.push(_._.k_ESteamRealmGlobal),
            this.m_summary.visible_in_global_realm &&
              _.push(_._.k_ESteamRealmChina),
            0 == _.length && _.push(_._.k_ESteamRealmGlobal),
            (0, _._)(
              _.length > 0,
              `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
            ),
            _
          );
        }
        BHasPublished() {
          return Boolean(
            this.m_summary.per_language_info.some(
              (_) => !!_.last_publish_timestamp,
            ),
          );
        }
        GetLastTimeLanguageUpdated(_) {
          var _, _;
          return null !==
            (_ =
              null === (_ = this.GetLastSavedDraftVersion(_)) || void 0 === _
                ? void 0
                : _.timestamp) && void 0 !== _
            ? _
            : 0;
        }
        GetFAQID() {
          return this.m_summary.faq_id;
        }
        GetSummary() {
          return this.m_summary;
        }
        BLocalizeDraft() {
          var _;
          if (0 === this.m_summary.json_data.length) return !1;
          return (
            null !== (_ = JSON.parse(this.m_summary.json_data).localizeDraft) &&
            void 0 !== _ &&
            _
          );
        }
        BPushToCrowdIn() {
          var _;
          if (0 === this.m_summary.json_data.length) return !1;
          return (
            null !== (_ = JSON.parse(this.m_summary.json_data).pushToCrowdIn) &&
            void 0 !== _ &&
            _
          );
        }
        GetJsonData() {
          return this.m_summary.json_data;
        }
        async UpdateJsonData(_) {
          const _ = await _.Get().UpdateJsonData(this.GetFAQID(), _);
          return 1 === _ && (this.m_summary.json_data = JSON.stringify(_)), _;
        }
      }
      (0, _._)([_._], _.prototype, "m_summary", void 0),
        (0, _._)([_._], _.prototype, "m_mapLocalUpdates", void 0),
        (0, _._)([_._], _.prototype, "BHasSomeTextForLanguage", null),
        (0, _._)([_._], _.prototype, "GetLastTimeLanguageUpdated", null);
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static Get() {
          return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
        }
        static Init(_) {
          _.Get().m_steamInterface = _;
        }
        constructor() {
          (this.m_mapFAQSummaries = new Map()),
            (this.m_mapFAQPublishedContent = new Map()),
            (this.m_mapFAQDrafts = new Map()),
            (this.m_bHasFAQEdit = !1),
            (this.m_steamInterface = null),
            (0, _._)(this),
            "dev" == _._.WEB_UNIVERSE && (window.g_FAQStore = this),
            _._.IN_STEAMUI ||
              (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
        }
        SetUpWebAPIInterface() {
          const _ = (0, _._)("faqstore", "application_config"),
            _ = null == _ ? void 0 : _.webapi_token;
          this.m_steamInterface = new _._(_._.WEBAPI_BASE_URL, _);
        }
        ReadInitialPayload() {
          const _ = (0, _._)("faqstore", "application_config");
          if (
            (("dev" != _._.WEB_UNIVERSE && "beta" != _._.WEB_UNIVERSE) ||
              console.log("DEV_DEBUG: CFAQStore loading payload: ", _),
            this.BIsConfigValid(_))
          ) {
            if (_.faqs)
              for (const _ in _.faqs) {
                const _ = _.faqs[_];
                (null == _ ? void 0 : _.faq_id) == _ &&
                  void 0 !== (null == _ ? void 0 : _.language) &&
                  (this.m_mapFAQPublishedContent.has(_) ||
                    this.m_mapFAQPublishedContent.set(_, new Map()),
                  this.m_mapFAQPublishedContent.get(_).set(_.language, _));
              }
            if (_.alldrafts)
              for (const _ in _.alldrafts) {
                const _ = _.alldrafts[_];
                if (!(null == _ ? void 0 : _.summary) || !_.draft) continue;
                this.m_mapFAQSummaries.set(_, _.summary);
                const _ = new Map();
                for (const _ of _.draft) _.set(_.language, _);
                this.m_mapFAQDrafts.set(
                  _,
                  new _(this.m_mapFAQSummaries.get(_), _),
                );
              }
            if (_.allfaqs)
              for (const _ of _.allfaqs)
                _.faq_id &&
                  (this.m_mapFAQSummaries.has(_.faq_id) ||
                    this.m_mapFAQSummaries.set(_.faq_id, _));
            this.m_bHasFAQEdit = Boolean(_.has_faq_edit);
          } else
            "dev" == _._.WEB_UNIVERSE &&
              console.error("CFAQStore Invalid payload");
        }
        BIsConfigValid(_) {
          const _ = _;
          return !!(
            (_ && _.faqs && "object" == typeof _.faqs) ||
            (_.alldrafts && "object" == typeof _.alldrafts) ||
            (_.allfaqs && Array.isArray(_.allfaqs))
          );
        }
        async CreateFAQ(_) {
          const _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID), _.Body().set_internal_name(_);
          let _,
            _ = 2;
          try {
            const _ = await _._.Create(
              this.m_steamInterface.GetServiceTransport(),
              _,
            );
            if (((_ = _.GetEResult()), 1 == _)) {
              _ = _.Body().faq_id();
              const _ = {
                faq_id: _,
                internal_name: _,
              };
              this.m_mapFAQSummaries.set(_, _);
            } else
              console.error("FAQStore.CreateFAQ: Create request failed:", _);
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FAQStore.CreateFAQ: caught error " + _.strErrorMsg,
              _,
            );
          }
          return {
            eResult: _,
            strFaqId: _,
          };
        }
        async UpdateDraft(_, _, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID),
            _.Body().set_faq_id(_),
            _.Body().set_language(_),
            _.Body().set_content(_),
            _.Body().set_title(_);
          let _ = 2,
            _ = 0;
          try {
            const _ = await _._.UpdateDraft(
              this.m_steamInterface.GetServiceTransport(),
              _,
            );
            (_ = _.GetEResult()),
              1 != _
                ? console.error("FAQStore.UpdateDraft request failed:", _)
                : (_ = _.Body().last_update_timestamp());
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FAQStore.UpdateDraft: caught error " + _.strErrorMsg,
              _,
            );
          }
          return {
            eResult: _,
            rtUpdateTime: _,
          };
        }
        async UpdateJsonData(_, _) {
          const _ = JSON.stringify(_),
            _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID),
            _.Body().set_faq_id(_),
            _.Body().set_json_data(_);
          let _ = 2;
          try {
            (_ = (
              await _._.UpdateJsonData(
                this.m_steamInterface.GetServiceTransport(),
                _,
              )
            ).GetEResult()),
              1 != _
                ? console.error("FAQStore.UpdateJsonData request failed:", _)
                : (this.m_mapFAQSummaries.get(_).json_data = _);
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FAQStore.UpdateJsonData: caught error " + _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        async GetFAQVersion(_, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID),
            _.Body().set_faq_id(_),
            _.Body().set_version(_),
            _.Body().set_language(_);
          try {
            const _ = await _._.GetFAQVersion(
                this.m_steamInterface.GetServiceTransport(),
                _,
              ),
              _ = _.GetEResult();
            if (1 == _) return _.Body().faq().toObject();
            console.error("FAQStore.GetFAQVersion request failed:", _);
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FAQStore.GetFAQVersion: caught error " + _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        async DeleteFAQ(_) {
          const _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID), _.Body().set_faq_id(_);
          let _ = 2;
          try {
            (_ = (
              await _._.Delete(this.m_steamInterface.GetServiceTransport(), _)
            ).GetEResult()),
              1 != _
                ? console.error("FAQStore.DeleteFAQ request failed:", _)
                : (this.m_mapFAQDrafts.delete(_),
                  this.m_mapFAQPublishedContent.delete(_),
                  this.m_mapFAQSummaries.delete(_));
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FAQStore.DeleteFAQ: caught error " + _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        GetFAQPublishedContent(_, _) {
          const _ = this.m_mapFAQPublishedContent.get(_);
          if (!_) return null;
          let _ = __webpack_require__.get(_);
          return (
            !_ &&
              _.sm_mapFallbackLanguages.has(_) &&
              (_ = __webpack_require__.get(_.sm_mapFallbackLanguages.get(_))),
            _ ||
              0 == _ ||
              (0, _._)() ||
              (_ = __webpack_require__.get("chunkid")),
            _
          );
        }
        GetFAQDraftContent(_) {
          return this.m_mapFAQDrafts.get(_);
        }
        GetAllFAQSummaries() {
          return Array.from(this.m_mapFAQSummaries.values());
        }
        GetFAQArticleSummary(_) {
          return this.m_mapFAQSummaries.get(_) || {};
        }
        async LoadFAQDraftContent(_) {
          if (this.m_mapFAQDrafts.has(_)) return this.m_mapFAQDrafts.get(_);
          const _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID), _.Body().set_faq_id(_);
          let _ = 2;
          try {
            const _ = await _._.GetAllDrafts(
              this.m_steamInterface.GetServiceTransport(),
              _,
            );
            if (((_ = _.GetEResult()), 1 != _))
              return (
                console.error(
                  "FaqStore.LoadFAQDraftContent request failed:",
                  _,
                ),
                null
              );
            {
              const _ = _.Body().summary().toObject();
              this.m_mapFAQSummaries.set(_, _);
              const _ = new Map();
              _.Body()
                .draft()
                .forEach((_) =>
                  __webpack_require__.set(_.language(), _.toObject()),
                );
              const _ = new _(this.m_mapFAQSummaries.get(_), _);
              return this.m_mapFAQDrafts.set(_, _), _;
            }
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FaqStore.LoadFAQDraftContent: exception " + _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        async UpdateVisibility(_, _, _) {
          const _ = _._.Init(_._);
          _.Body().set_steamid(_._.CLANSTEAMID),
            _.Body().set_faq_id(_),
            _.Body().set_visible_in_global_realm(_),
            _.Body().set_visible_in_china_realm(_);
          let _ = 2;
          try {
            if (
              ((_ = (
                await _._.SetVisibility(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                )
              ).GetEResult()),
              1 === _)
            ) {
              const _ = this.m_mapFAQSummaries.get(_);
              _ &&
                ((_.visible_in_global_realm = _),
                (_.visible_in_china_realm = _),
                this.m_mapFAQSummaries.set(_, _));
            } else console.error("FaqStore.UpdateVisibility: Failed " + _);
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FaqStore.UpdateVisibility: exception " + _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        async PublishDraftByLanguage(_, _) {
          if (!_ || 0 == _.length) return 1;
          const _ = _._.Init(_._);
          __webpack_require__.Body().set_steamid(_._.CLANSTEAMID),
            __webpack_require__.Body().set_faq_id(_),
            _.forEach((_) => __webpack_require__.Body().add_language(_));
          let _ = 2;
          try {
            const _ = await _._.PublishDraft(
              this.m_steamInterface.GetServiceTransport(),
              _,
            );
            if (((_ = _.GetEResult()), 1 === _)) {
              const _ = this.m_mapFAQSummaries.get(_);
              _ &&
                (0, _._)(() => {
                  this.m_mapFAQPublishedContent.has(_) ||
                    this.m_mapFAQPublishedContent.set(_, new Map()),
                    _.per_language_info.forEach((_) => {
                      var _;
                      const _ = _.language;
                      if (_.indexOf(_) >= 0) {
                        _.last_publish_timestamp = Math.max(
                          _.last_publish_timestamp,
                          _.Body().last_publish_timestamp(),
                        );
                        const _ =
                          null === (_ = this.m_mapFAQDrafts.get(_)) ||
                          void 0 === _
                            ? void 0
                            : _.GetLastSavedDraftVersion(_);
                        this.m_mapFAQPublishedContent.get(_).set(_, _);
                      }
                    });
                });
            } else
              console.error("FaqStore.PublishDraftByLanguage: Failed " + _);
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FaqStore.PublishDraftByLanguage: exception " + _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        async UpdateInternalName(_, _) {
          const _ = _._.Init(_._);
          __webpack_require__.Body().set_steamid(_._.CLANSTEAMID),
            __webpack_require__.Body().set_faq_id(_),
            __webpack_require__.Body().set_internal_name(_);
          let _ = 2;
          try {
            (_ = (
              await _._.UpdateInternalName(
                this.m_steamInterface.GetServiceTransport(),
                _,
              )
            ).GetEResult()),
              1 === _
                ? (0, _._)(() => {
                    var _, _, _;
                    (null === (_ = this.m_mapFAQSummaries.get(_)) ||
                    void 0 === _
                      ? void 0
                      : _.internal_name) &&
                      (this.m_mapFAQSummaries.get(_).internal_name = _),
                      (null ===
                        (_ =
                          null === (_ = this.m_mapFAQDrafts.get(_)) ||
                          void 0 === _
                            ? void 0
                            : _.GetSummary()) || void 0 === _
                        ? void 0
                        : _.internal_name) &&
                        (this.m_mapFAQDrafts.get(_).GetSummary().internal_name =
                          _);
                  })
                : console.error("FaqStore.UpdateInternalName: Failed " + _);
          } catch (_) {
            const _ = (0, _._)(_);
            console.error(
              "FaqStore.UpdateInternalName: exception " + _.strErrorMsg,
              _,
            );
          }
          return _;
        }
        GetLoadedDraftObjs() {
          return Array.from(this.m_mapFAQDrafts.values());
        }
        RemoveAllDirtyDrafts() {
          var _, _;
          const _ =
            null ===
              (_ =
                null === (_ = this.GetLoadedDraftObjs()) || void 0 === _
                  ? void 0
                  : _.filter((_) => _.BNeedsSaving())) || void 0 === _
              ? void 0
              : _.map((_) => _.GetFAQID());
          null == _ ||
            __webpack_require__.forEach((_) => this.m_mapFAQDrafts.delete(_));
        }
        BHasFAQEdit() {
          return this.m_bHasFAQEdit;
        }
        async ExportEnglishDraftToCrowdin(_) {
          const _ =
            _._.COMMUNITY_BASE_URL +
            "faqs/" +
            _._.VANITY_ID +
            "/ajaxpushtocrowdin/" +
            _(_);
          await _().get(_);
        }
        async ImportNonEnglishDraftsFromCrowdin(_, _, _) {
          var _, _;
          const _ =
              _._.COMMUNITY_BASE_URL +
              "faqs/" +
              _._.VANITY_ID +
              "/ajaxpullfromcrowdin/" +
              _(_),
            _ = new FormData();
          _.append("sessionid", _._.SESSIONID),
            _.append("languages", _.join(","));
          let _ = null;
          try {
            const _ = await _().post(_, _, {
              withCredentials: !0,
              cancelToken: null == _ ? void 0 : _.token,
            });
            if (
              200 == (null == _ ? void 0 : _.status) &&
              1 == (null === (_ = _.data) || void 0 === _ ? void 0 : _.success)
            ) {
              const _ = _.data.updated,
                _ =
                  null !== (_ = null == _ ? void 0 : _[_]) && void 0 !== _
                    ? _
                    : [];
              return (
                _.length > 0 &&
                  (this.m_mapFAQSummaries.has(_) ||
                    this.m_mapFAQDrafts.has(_)) &&
                  (this.m_mapFAQDrafts.delete(_),
                  await this.LoadFAQDraftContent(_)),
                _
              );
            }
            _ = {
              response: _,
            };
          } catch (_) {
            _ = _;
          }
          const _ = (0, _._)(_);
          return (
            console.error("Could not import from crowdin", _, _.strErrorMsg, _),
            []
          );
        }
        BHasLiveEnglishVersion(_) {
          return this.m_mapFAQSummaries
            .get(_)
            .per_language_info.some(
              (_) => 0 == _.language && _.last_publish_timestamp > 0,
            );
        }
        GetNonEnglishDraftsToPublish(_) {
          return this.m_mapFAQSummaries
            .get(_)
            .per_language_info.filter((_) => {
              var _;
              return (
                0 != _.language &&
                _.last_update_timestamp >
                  (null !== (_ = _.last_publish_timestamp) && void 0 !== _
                    ? _
                    : 0)
              );
            })
            .map((_) => _.language);
        }
      }
      (_.sm_mapFallbackLanguages = new Map([
        [5, 27],
        [27, 5],
        [29, 6],
      ])),
        (0, _._)([_._], _.prototype, "m_mapFAQSummaries", void 0),
        (0, _._)([_._], _.prototype, "RemoveAllDirtyDrafts", null);
      const _ = /^[0-9a-fA-F]+$/;
      function _(_) {
        const _ = null == _ ? void 0 : _.replace(/-/g, "");
        if (16 != (null == _ ? void 0 : _.length) || !_.test(_)) return null;
        return _._.fromString(_, !0, 16).toString();
      }
      function _(_) {
        const _ = ("0000000000000000" + _._.fromString(_, !0, 10).toString(16))
          .slice(-16)
          .toUpperCase();
        return `${_.slice(0, 4)}-${_.slice(4, 8)}-${_.slice(8, 12)}-${_.slice(12, 16)}`;
      }
      function _(_, _) {
        return [_ && _.Get().GetFAQPublishedContent(_, _), !0];
      }
      function _(_) {
        const [_, __webpack_require__] = _.useState(
            _.Get().GetFAQDraftContent(_),
          ),
          [_, _] = _.useState(!!_);
        return (
          (0, _.useEffect)(() => {
            _.Get()
              .LoadFAQDraftContent(_)
              .then((_) => __webpack_require__(_))
              .finally(() => _(!0));
          }, [_]),
          [_, _]
        );
      }
      function _(_) {
        return [_.Get().GetFAQArticleSummary(_), !0];
      }
      function _() {
        const _ = _.Get().GetAllFAQSummaries();
        return _.useRef([_, !0]).current;
      }
      function _(_, _, _) {
        const [_, _] = _.useState(null),
          [_, _] = _.useState(!1);
        return (
          (0, _.useEffect)(() => {
            _.Get().BHasFAQEdit() &&
              _.Get()
                .GetFAQVersion(_, _, _)
                .then((_) => _(_))
                .finally(() => _(!0));
          }, [_, _, _]),
          [_, _]
        );
      }
    },
  },
]);
