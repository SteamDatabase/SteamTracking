(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [98453],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.module_exports(module_exports, {
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
        var module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__.module_exports(_),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid");
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.faq_id || _._(_._()),
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClanFAQs_GetCrowdInMetadata_Response";
          }
        }
        var module_exports;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.Create#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.Create = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.Delete#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.Delete = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.UpdateInternalName#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UpdateInternalName = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.UpdateJsonData#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.UpdateJsonData = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.SetVisibility#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.SetVisibility = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.UpdateDraft#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.UpdateDraft = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.PublishDraft#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.PublishDraft = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.PreviewDraft#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.PreviewDraft = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.GetFAQ#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetFAQ = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.GetFAQVersion#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              rgBrowserAPISites: ["help"],
            });
          }
          _.GetFAQVersion = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.GetAllDrafts#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              rgBrowserAPISites: ["help"],
            });
          }
          _.GetAllDrafts = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.GetAllFAQsForClan#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetAllFAQsForClan = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.GetAllLatestVersionPublishedFAQS#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetAllLatestVersionPublishedFAQS = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.CheckFAQPermissions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.CheckFAQPermissions = _;
          function _(_, _, _) {
            return _.SendMsg("ClanFAQS.SearchFAQs#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["help"],
            });
          }
          _.SearchFAQs = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.FetchLocalizationFromCrowdIn#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.FetchLocalizationFromCrowdIn = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ClanFAQS.GetCrowdInMetadata#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.GetCrowdInMetadata = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.module_exports(module_exports, {
          _: () => _,
        });
        var module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__.module_exports(_),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid");
        const module_exports = new Map([
            ...Array.from(_.module_exports.entries()),
            ...Array.from(_.module_exports.entries()),
            [
              "section",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "img",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
            [
              "exclude_realm",
              {
                Constructor: _,
                autocloses: !1,
              },
            ],
          ]),
          module_exports = (_) => {
            const { text: _, bShowErrorInfo: _, version: _, language: _ } = _,
              _ = _.useCallback(
                (_) =>
                  new _._(
                    new _._(
                      new _._(new _._()),
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
              _ = _.useMemo(() => new _._(_, _, _ ?? _._.LANGUAGE), [_, _]);
            return (0, _.jsx)("div", {
              className: _().FAQContainer,
              children: _.ParseBBCode(_, {
                showErrorInfo: _,
                version: _,
              }),
            });
          };
        function _(_) {
          let _ = (0, _._)(_.args, "id");
          _ &&
            typeof _ == "string" &&
            _.length > 0 &&
            _[0] === "#" &&
            (_ = _.substring(1));
          const _ = (0, _._)(_.args, "style"),
            _ = (0, _._)(
              _().Section,
              _ == "note" && _().Note,
              _ == "important" && _().Important,
              _ == "warning" && _().Warning,
            );
          return (0, _.jsx)("div", {
            _: _ || void 0,
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          const { showErrorInfo: _, version: _ } = _.context;
          let _ = _?.children?.toString();
          (_ == null || _ == null || _.length == 0) && (_ = _?.args?.[""]);
          const _ = _?.args?.alt,
            _ = (0, _._)(_, _.language, Number.parseInt(_));
          return _ == null
            ? null
            : typeof _ == "string"
              ? ((_ = _),
                _
                  ? (0, _.jsx)(_._, {
                      className: _().FAQImage,
                      src: _,
                      alt: _,
                    })
                  : ((_ = _.replace("http://", "https://")),
                    (0, _.jsx)("img", {
                      className: _().FAQImage,
                      src: _,
                      alt: _,
                    })))
              : (0, _.jsx)(_._, {
                  className: _().FAQImage,
                  rgSources: _,
                  alt: _,
                });
        }
        function _(_) {
          const _ = (0, _._)(_.args);
          return (_ == "global" && _._.EREALM == _._.k_ESteamRealmGlobal) ||
            (_ == "china" && (0, _._)())
            ? null
            : (0, _.jsx)(_.Fragment, {
                children: _.children,
              });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.module_exports(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__.module_exports(_),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = Object.defineProperty,
          module_exports = Object.getOwnPropertyDescriptor,
          module_exports = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          m_summary = void 0;
          m_mapStoredDrafts;
          m_mapLocalUpdates = new Map();
          constructor(_, _) {
            (0, _._)(this),
              (this.m_summary = _),
              (this.m_mapStoredDrafts = _),
              (this.m_mapLocalUpdates = new Map());
            for (let _ = _.Bhc; _ < _.bP9; _++)
              this.m_mapLocalUpdates.set(_, {});
          }
          BNeedsSaving(_) {
            if (_ !== void 0) {
              const _ = this.m_mapLocalUpdates.get(_);
              return !!_.strTitle || !!_.strContent;
            }
            return Array.from(this.m_mapLocalUpdates.values()).some(
              (_) => !!_.strTitle || !!_.strContent,
            );
          }
          async SaveDrafts() {
            (0, _._)(
              !!this.m_summary?.faq_id,
              "Attempting to save when we lack a FaqID in the summary object",
            );
            let _ = _._,
              _ = new Array();
            for (let _ = _.Bhc; _ < _.bP9; ++_)
              if (
                (this.m_mapLocalUpdates.get(_).strTitle &&
                  this.m_mapLocalUpdates.get(_).strTitle !==
                    this.m_mapStoredDrafts.get(_)?.title) ||
                (this.m_mapLocalUpdates.get(_).strContent &&
                  this.m_mapLocalUpdates.get(_).strContent !==
                    this.m_mapStoredDrafts.get(_)?.content)
              ) {
                const _ = this.GetDraftTitle(_),
                  _ = this.GetDraftContent(_),
                  _ = _.Get().UpdateDraft(this.m_summary?.faq_id, _, _, _);
                _.then((_) => {
                  _.eResult == _._
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
                    : _ == _._ &&
                      (console.error(
                        "FAQModel.SaveDraft: Response not ok " + _.eResult,
                        _,
                      ),
                      (_ = _.eResult));
                }).catch((_) => {
                  console.error(
                    "FAQModel.SaveDrafts: Hit error " + (0, _._)(_).strErrorMsg,
                  ),
                    _ == _._ && (_ = _._);
                }),
                  _.push(_);
              }
            return await Promise.all(_), _;
          }
          GetFAQInternalName() {
            return this.m_summary?.internal_name;
          }
          GetDraftTitle(_) {
            return this.m_mapLocalUpdates.get(_).strTitle !== null &&
              this.m_mapLocalUpdates.get(_).strTitle !== void 0
              ? this.m_mapLocalUpdates.get(_).strTitle
              : this.m_mapStoredDrafts.get(_)?.title;
          }
          GetDraftContent(_) {
            return this.m_mapLocalUpdates.get(_).strContent !== null &&
              this.m_mapLocalUpdates.get(_).strContent !== void 0
              ? this.m_mapLocalUpdates.get(_).strContent
              : this.m_mapStoredDrafts.get(_)?.content;
          }
          GetDraftTitleWithFallback(_, _ = _._.k_ESteamRealmGlobal) {
            const _ = _ == _._.k_ESteamRealmChina ? _.NFp : _.Bhc;
            return (
              this.m_mapLocalUpdates.get(_).strTitle ??
              this.m_mapLocalUpdates.get(_).strTitle ??
              this.m_mapStoredDrafts.get(_)?.title ??
              this.m_mapStoredDrafts.get(_)?.title ??
              ""
            );
          }
          GetDraftContentWithFallback(_, _ = _._.k_ESteamRealmGlobal) {
            const _ = _ == _._.k_ESteamRealmChina ? _.NFp : _.Bhc;
            return (
              this.m_mapLocalUpdates.get(_).strContent ??
              this.m_mapLocalUpdates.get(_).strContent ??
              this.m_mapStoredDrafts.get(_)?.content ??
              this.m_mapStoredDrafts.get(_)?.content ??
              ""
            );
          }
          GetLastSavedDraftVersion(_) {
            return this.m_mapStoredDrafts.get(_);
          }
          BHasSomeTextForLanguage(_) {
            return !!(this.GetDraftContent(_) || this.GetDraftTitle(_));
          }
          SetDraftTitle(_, _) {
            _ === this.m_mapStoredDrafts.get(_)?.title
              ? (this.m_mapLocalUpdates.get(_).strTitle = null)
              : (this.m_mapLocalUpdates.get(_).strTitle = _);
          }
          SetDraftContent(_, _) {
            _ === this.m_mapStoredDrafts.get(_)?.content
              ? (this.m_mapLocalUpdates.get(_).strContent = null)
              : (this.m_mapLocalUpdates.get(_).strContent = _);
          }
          GetIncludedRealmList() {
            const _ = new Array();
            return (
              this.m_summary.visible_in_global_realm &&
                _.push(_._.k_ESteamRealmGlobal),
              this.m_summary.visible_in_china_realm &&
                _.push(_._.k_ESteamRealmChina),
              _.length == 0 && _.push(_._.k_ESteamRealmGlobal),
              (0, _._)(
                _.length > 0,
                `FAQ ${this.m_summary.faq_id} is currently configured so that no realms are valid for display.`,
              ),
              _
            );
          }
          BHasPublished() {
            return !!this.m_summary.per_language_info.some(
              (_) => !!_.last_publish_timestamp,
            );
          }
          GetLastTimeLanguageUpdated(_) {
            return this.GetLastSavedDraftVersion(_)?.timestamp ?? 0;
          }
          GetFAQID() {
            return this.m_summary.faq_id;
          }
          GetSummary() {
            return this.m_summary;
          }
          BLocalizeDraft() {
            return this.m_summary.json_data.length === 0
              ? !1
              : (JSON.parse(this.m_summary.json_data).localizeDraft ?? !1);
          }
          BPushToCrowdIn() {
            return this.m_summary.json_data.length === 0
              ? !1
              : (JSON.parse(this.m_summary.json_data).pushToCrowdIn ?? !1);
          }
          GetJsonData() {
            return this.m_summary.json_data;
          }
          async UpdateJsonData(_) {
            const _ = await _.Get().UpdateJsonData(this.GetFAQID(), _);
            return (
              _ === _._ && (this.m_summary.json_data = JSON.stringify(_)), _
            );
          }
        }
        _([_.module_exports], _.prototype, "m_summary", 2),
          _([_.module_exports], _.prototype, "m_mapLocalUpdates", 2),
          _([_.module_exports], _.prototype, "BHasSomeTextForLanguage", 1),
          _([_.module_exports], _.prototype, "GetLastTimeLanguageUpdated", 1);
        var module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = __webpack_require__("chunkid"),
          module_exports = Object.defineProperty,
          module_exports = Object.getOwnPropertyDescriptor,
          module_exports = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const module_exports = class _ {
          m_mapFAQSummaries = new Map();
          m_mapFAQPublishedContent = new Map();
          m_mapFAQDrafts = new Map();
          m_bHasFAQEdit = !1;
          m_steamInterface = null;
          static s_Singleton;
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          static Init(_) {
            _.Get().m_steamInterface = _;
          }
          constructor() {
            (0, _._)(this),
              _._.IN_STEAMUI ||
                (this.ReadInitialPayload(), this.SetUpWebAPIInterface());
          }
          SetUpWebAPIInterface() {
            const _ = (0, _._)("faqstore", "application_config")?.webapi_token;
            this.m_steamInterface = (0, _._)(new _._(_._.WEBAPI_BASE_URL, _));
          }
          ReadInitialPayload() {
            const _ = (0, _._)("faqstore", "application_config");
            if (this.BIsConfigValid(_)) {
              if (_.faqs)
                for (const _ in _.faqs) {
                  const _ = _.faqs[_];
                  _?.faq_id != _ ||
                    _?.language === void 0 ||
                    (this.m_mapFAQPublishedContent.has(_) ||
                      this.m_mapFAQPublishedContent.set(_, new Map()),
                    this.m_mapFAQPublishedContent.get(_).set(_.language, _));
                }
              if (_.alldrafts)
                for (const _ in _.alldrafts) {
                  const _ = _.alldrafts[_];
                  if (!_?.summary || !_.draft) continue;
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
              this.m_bHasFAQEdit = !!_.has_faq_edit;
            }
          }
          BIsConfigValid(_) {
            const _ = _;
            return !!(
              (_ && _.faqs && typeof _.faqs == "object") ||
              (_.alldrafts && typeof _.alldrafts == "object") ||
              (_.allfaqs && Array.isArray(_.allfaqs))
            );
          }
          async CreateFAQ(_) {
            const _ = _._.Init(_._);
            _.Body().set_steamid(_._.CLANSTEAMID),
              _.Body().set_internal_name(_);
            let _ = _._,
              _;
            try {
              const _ = await _._.Create(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
              if (((_ = _.GetEResult()), _ == _._)) {
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
            let _ = _._,
              _ = 0;
            try {
              const _ = await _._.UpdateDraft(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
              (_ = _.GetEResult()),
                _ != _._
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
            let _ = _._;
            try {
              (_ = (
                await _._.UpdateJsonData(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                )
              ).GetEResult()),
                _ != _._
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
              if (_ == _._) return _.Body().faq().toObject();
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
            let _ = _._;
            try {
              (_ = (
                await _._.Delete(this.m_steamInterface.GetServiceTransport(), _)
              ).GetEResult()),
                _ != _._
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
          static sm_mapFallbackLanguages = new Map([
            [_.HkE, _.FHN],
            [_.FHN, _.HkE],
            [_.ZLm, _.NFp],
          ]);
          GetFAQPublishedContent(_, _) {
            const _ = this.m_mapFAQPublishedContent.get(_);
            if (!_) return null;
            let _ = _.get(_);
            return (
              !_ &&
                _.sm_mapFallbackLanguages.has(_) &&
                (_ = _.get(_.sm_mapFallbackLanguages.get(_))),
              !_ && _ != _.Bhc && !(0, _._)() && (_ = _.get(_.Bhc)),
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
            let _ = _._;
            try {
              const _ = await _._.GetAllDrafts(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
              if (((_ = _.GetEResult()), _ != _._))
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
                  .forEach((_) => _.set(_.language(), _.toObject()));
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
            let _ = _._;
            try {
              if (
                ((_ = (
                  await _._.SetVisibility(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  )
                ).GetEResult()),
                _ === _._)
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
            if (!_ || _.length == 0) return _._;
            const _ = _._.Init(_._);
            _.Body().set_steamid(_._.CLANSTEAMID),
              _.Body().set_faq_id(_),
              _.forEach((_) => _.Body().add_language(_));
            let _ = _._;
            try {
              const _ = await _._.PublishDraft(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
              if (((_ = _.GetEResult()), _ === _._)) {
                const _ = this.m_mapFAQSummaries.get(_);
                _ &&
                  (0, _._)(() => {
                    this.m_mapFAQPublishedContent.has(_) ||
                      this.m_mapFAQPublishedContent.set(_, new Map()),
                      _.per_language_info.forEach((_) => {
                        const _ = _.language;
                        if (_.indexOf(_) >= 0) {
                          _.last_publish_timestamp = Math.max(
                            _.last_publish_timestamp,
                            _.Body().last_publish_timestamp(),
                          );
                          const _ = this.m_mapFAQDrafts
                            .get(_)
                            ?.GetLastSavedDraftVersion(_);
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
            _.Body().set_steamid(_._.CLANSTEAMID),
              _.Body().set_faq_id(_),
              _.Body().set_internal_name(_);
            let _ = _._;
            try {
              (_ = (
                await _._.UpdateInternalName(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                )
              ).GetEResult()),
                _ === _._
                  ? (0, _._)(() => {
                      this.m_mapFAQSummaries.get(_)?.internal_name &&
                        (this.m_mapFAQSummaries.get(_).internal_name = _),
                        this.m_mapFAQDrafts.get(_)?.GetSummary()
                          ?.internal_name &&
                          (this.m_mapFAQDrafts
                            .get(_)
                            .GetSummary().internal_name = _);
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
            this.GetLoadedDraftObjs()
              ?.filter((_) => _.BNeedsSaving())
              ?.map((_) => _.GetFAQID())
              ?.forEach((_) => this.m_mapFAQDrafts.delete(_));
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
            const _ =
                _._.COMMUNITY_BASE_URL +
                "faqs/" +
                _._.VANITY_ID +
                "/ajaxpullfromcrowdin/" +
                _(_),
              _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("languages", _.join(","));
            let _ = null;
            try {
              const _ = await _().post(_, _, {
                withCredentials: !0,
                cancelToken: _?.token,
              });
              if (_?.status == 200 && _.data?.success == _._) {
                const _ = _.data.updated?.[_] ?? [];
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
              console.error(
                "Could not import from crowdin",
                _,
                _.strErrorMsg,
                _,
              ),
              []
            );
          }
          BHasLiveEnglishVersion(_) {
            return this.m_mapFAQSummaries
              .get(_)
              .per_language_info.some(
                (_) => _.language == _.Bhc && _.last_publish_timestamp > 0,
              );
          }
          GetNonEnglishDraftsToPublish(_) {
            return this.m_mapFAQSummaries
              .get(_)
              .per_language_info.filter(
                (_) =>
                  _.language != _.Bhc &&
                  _.last_update_timestamp > (_.last_publish_timestamp ?? 0),
              )
              .map((_) => _.language);
          }
        };
        _([_.module_exports], _.prototype, "m_mapFAQSummaries", 2),
          _([_.module_exports], _.prototype, "RemoveAllDirtyDrafts", 1);
        let module_exports = _;
        const module_exports = /^[0-9a-fA-F]+$/;
        function _(_) {
          const _ = _?.replace(/-/g, "");
          return _?.length != 16 || !_.test(_)
            ? null
            : _._.fromString(_, !0, 16).toString();
        }
        function _(_) {
          const _ = (
            "0000000000000000" + _._.fromString(_, !0, 10).toString(16)
          )
            .slice(-16)
            .toUpperCase();
          return `${_.slice(0, 4)}-${_.slice(4, 8)}-${_.slice(8, 12)}-${_.slice(12, 16)}`;
        }
        function _(_, _) {
          return [_ && _.Get().GetFAQPublishedContent(_, _), !0];
        }
        function _(_) {
          const [_, _] = _.useState(_.Get().GetFAQDraftContent(_)),
            [_, _] = _.useState(!!_);
          return (
            (0, _.useEffect)(() => {
              _.Get()
                .LoadFAQDraftContent(_)
                .then((_) => _(_))
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
    },
  ]);
})();
