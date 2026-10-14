(() => {
  (self.webpackChunkHelp = self.webpackChunkHelp || []).push([
    [976],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            GreenEnvelope: () => _,
            default: () => _,
            useSteamNotifications: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = _,
          _ = _,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = {
            locked: !1,
          };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_allowed: {
                      _: 2,
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
            return "ParentalApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.allowed_time_windows || _._(_._()),
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
                    allowed_time_windows: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    allowed_daily_minutes: {
                      _: 2,
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
            return "ParentalPlaytimeDay";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apply_playtime_restrictions || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [15], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    apply_playtime_restrictions: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    playtime_days: {
                      _: 15,
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
            return "ParentalPlaytimeRestrictions";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.restrictions || _._(_._()),
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
                    restrictions: {
                      _: 1,
                      _: _,
                    },
                    rtime_expires: {
                      _: 2,
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
            return "ParentalTemporaryPlaytimeRestrictions";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4, 5, 17, 18, 19], null);
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
                    applist_base_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    applist_base_description: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    applist_base: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    applist_custom: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    passwordhashtype: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    salt: {
                      _: 7,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    passwordhash: {
                      _: 8,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    is_enabled: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    enabled_features: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recovery_email: {
                      _: 11,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_site_license_lock: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    temporary_enabled_features: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_temporary_feature_expiration: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playtime_restrictions: {
                      _: 15,
                      _: _,
                    },
                    temporary_playtime_restrictions: {
                      _: 16,
                      _: _,
                    },
                    excluded_store_content_descriptors: {
                      _: 17,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    excluded_community_content_descriptors: {
                      _: 18,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    utility_appids: {
                      _: 19,
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
            return "ParentalSettings";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requestid || _._(_._()),
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
                    requestid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    family_groupid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    features: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_requested: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    approved: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid_responder: {
                      _: 7,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    time_responded: {
                      _: 8,
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
            return "ParentalFeatureRequest";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requestid || _._(_._()),
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
                    requestid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    family_groupid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    current_playtime_restrictions: {
                      _: 4,
                      _: _,
                    },
                    time_expires: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_requested: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    approved: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid_responder: {
                      _: 8,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    time_responded: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    restrictions_approved: {
                      _: 10,
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
            return "ParentalPlaytimeRequest";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.password || _._(_._()),
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
                    password: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    settings: {
                      _: 2,
                      _: _,
                    },
                    sessionid: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    enablecode: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_EnableParentalSettings_Request";
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
            return "CParental_EnableParentalSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.password || _._(_._()),
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
                    password: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_DisableParentalSettings_Request";
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
            return "CParental_DisableParentalSettings_Response";
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
                      _: 10,
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
            return "CParental_GetParentalSettings_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.settings || _._(_._()),
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
                    settings: {
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
            return "CParental_GetParentalSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.priority || _._(_._()),
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
                    priority: {
                      _: 1,
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
            return "CParental_GetSignedParentalSettings_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serialized_settings || _._(_._()),
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
                    serialized_settings: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    signature: {
                      _: 2,
                      _: _._.readBytes,
                      _: _._.writeBytes,
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
            return "CParental_GetSignedParentalSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.password || _._(_._()),
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
                    password: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    settings: {
                      _: 2,
                      _: _,
                    },
                    new_password: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sessionid: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_SetParentalSettings_Request";
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
            return "CParental_SetParentalSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unlock_token || _._(_._()),
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
                    unlock_token: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ValidateToken_Request";
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
            return "CParental_ValidateToken_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.password || _._(_._()),
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
                    password: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    session: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    send_unlock_on_success: {
                      _: 3,
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
            return "CParental_ValidatePassword_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.token || _._(_._()),
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
                    token: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ValidatePassword_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.session || _._(_._()),
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
                    session: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_LockClient_Request";
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
            return "CParental_LockClient_Response";
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
            return "CParental_RequestRecoveryCode_Request";
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
            return "CParental_RequestRecoveryCode_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.features || _._(_._()),
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
                    features: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_RequestFeatureAccess_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requestid || _._(_._()),
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
                    requestid: {
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
            return "CParental_RequestFeatureAccess_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.approve || _._(_._()),
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
                    approve: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    requestid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    features: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    duration: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_ApproveFeatureAccess_Request";
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
            return "CParental_ApproveFeatureAccess_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.time_expires || _._(_._()),
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
                    time_expires: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    current_playtime_restrictions: {
                      _: 2,
                      _: _,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_RequestPlaytime_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requestid || _._(_._()),
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
                    requestid: {
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
            return "CParental_RequestPlaytime_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.approve || _._(_._()),
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
                    approve: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    requestid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    restrictions_approved: {
                      _: 3,
                      _: _,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_ApprovePlaytime_Request";
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
            return "CParental_ApprovePlaytime_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rt_include_completed_since || _._(_._()),
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
                    rt_include_completed_since: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    family_groupid: {
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
            return "CParental_GetRequests_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.feature_requests || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    feature_requests: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    playtime_requests: {
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
            return "CParental_GetRequests_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.day_of_week || _._(_._()),
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
                    day_of_week: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    minutes_used: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    steamid: {
                      _: 10,
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
            return "CParental_ReportPlaytimeAndNotify_Request";
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
            return "CParental_ReportPlaytimeAndNotify_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.serialized_settings || _._(_._()),
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
                    serialized_settings: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    signature: {
                      _: 2,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    password: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sessionid: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ParentalSettingsChange_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.password || _._(_._()),
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
                    password: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sessionid: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ParentalUnlock_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sessionid || _._(_._()),
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
                    sessionid: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CParental_ParentalLock_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.day_of_week || _._(_._()),
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
                    day_of_week: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    minutes_used: {
                      _: 2,
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
            return "CParental_PlaytimeUsed_Notification";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.EnableParentalSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.EnableParentalSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.DisableParentalSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.DisableParentalSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.GetParentalSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["all"],
              },
            );
          }
          _.GetParentalSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.GetSignedParentalSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetSignedParentalSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.SetParentalSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetParentalSettings = _;
          function _(_, _, _) {
            return _.SendMsg("Parental.ValidateToken#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.ValidateToken = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.ValidatePassword#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ValidatePassword = _;
          function _(_, _, _) {
            return _.SendMsg("Parental.LockClient#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.LockClient = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.RequestRecoveryCode#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RequestRecoveryCode = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.RequestFeatureAccess#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RequestFeatureAccess = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.ApproveFeatureAccess#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ApproveFeatureAccess = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.RequestPlaytime#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RequestPlaytime = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.ApprovePlaytime#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ApprovePlaytime = _;
          function _(_, _, _) {
            return _.SendMsg("Parental.GetRequests#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          _.GetRequests = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Parental.ReportPlaytimeAndNotify#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ReportPlaytimeAndNotify = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotifySettingsChangeHandler = {
            name: "ParentalClient.NotifySettingsChange#1",
            request: _,
          }),
            (_.NotifyUnlockHandler = {
              name: "ParentalClient.NotifyUnlock#1",
              request: _,
            }),
            (_.NotifyLockHandler = {
              name: "ParentalClient.NotifyLock#1",
              request: _,
            }),
            (_.NotifyPlaytimeUsedHandler = {
              name: "ParentalClient.NotifyPlaytimeUsed#1",
              request: _,
            });
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return ["parentalsettings", _];
        }
        function _(_) {
          const _ = _.applist_base.concat(_.applist_custom);
          return new Map(_.map((_) => [_.appid, _.is_allowed]));
        }
        async function _(_, _) {
          const _ = _._.Init(_);
          _.Body().set_steamid(_);
          const _ = await _.GetParentalSettings(_, _);
          if (_.GetEResult() != _._)
            throw new Error(
              `Error from GetParentalSettings: ${_.GetEResult()}`,
            );
          const _ = _.Body().settings().toObject();
          if (!_.playtime_restrictions) {
            const _ = {
              apply_playtime_restrictions: !1,
              playtime_days: Array(7).fill({
                allowed_time_windows: BigInt(0xffffffffffff).toString(),
                allowed_daily_minutes: 1440,
              }),
            };
            _.playtime_restrictions = _;
          }
          const _ = _(_);
          return {
            settings: _,
            mapAppsAllowed: _,
          };
        }
        function _(_, _, _) {
          return {
            queryKey: _(_),
            queryFn: () => _(_, _),
            placeholderData: {
              settings: void 0,
              mapAppsAllowed: void 0,
            },
            ..._,
          };
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return ["validateparentaltoken", _, _];
        }
        function _() {
          const _ = (0, _._)("clientsessionid"),
            _ = (0, _._)("sessionid");
          return _ || _;
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)("steamparental"),
            _ = _();
          let _ = _,
            _ = _?.split("||") || [];
          _.length == 2 && (_ = _[1]);
          const _ = _ && _ !== "0" ? _ + "||" + _ : void 0,
            _ = (0, _._)({
              queryKey: _(_, _),
              queryFn: async () => {
                if (!_) return _._;
                const _ = _._.Init(_);
                return (
                  _.Body().set_unlock_token(_),
                  (await _.ValidateToken(_, _)).GetEResult()
                );
              },
            });
          return !_.isSuccess || _.data !== _._;
        }
        function _(_, _, _) {
          if (_ == _ || _ == null) return !1;
          if (!_) return !0;
          if (!_.is_enabled || !_) return !1;
          if (_ == _) return !0;
          const _ = _.enabled_features;
          return _ ? (_ & (1 << _)) == 0 : !0;
        }
        function _(_, _, _, _) {
          if (!_ || !_) return !0;
          if (
            !_.is_enabled ||
            !_ ||
            _.applist_base_id == 0 ||
            _ == 0 ||
            (_ >= k_nGameIDServiceAppFirst && _ <= k_nGameIDServiceAppLast) ||
            [
              k_nGameIDWinUI,
              k_nGameIDSteamVR,
              k_nGameIDSteamVRMain,
              k_nGameIDSteamVRMonitorMain,
              k_nGameIDSteamVRMonitor,
            ].indexOf(_) !== -1 ||
            _.utility_appids?.includes(_)
          )
            return !1;
          const _ = _.get(_);
          return _ !== void 0 ? !_ : !0;
        }
        function _(_) {
          const _ = (0, _._)(),
            { settings: _ } = _(_).data ?? {},
            _ = _();
          return _(_, _, _);
        }
        function _(_) {
          const _ = useActiveAccount(),
            { settings: _, mapAppsAllowed: _ } = _(_).data ?? {},
            _ = _();
          return _(_, _, _, _);
        }
        async function _(_, _) {
          const _ = CProtoBufMsg.Init(
            CParental_DisableParentalSettings_Request,
          );
          _.Body().set_steamid(_);
          const _ = await ParentalService.DisableParentalSettings(_, _);
          if (_.GetEResult() != k_EResultOK)
            throw new Error(
              `Error from DisableParentalSettings: ${_.GetErrorMessage()} (${_.GetEResult()})`,
            );
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = _(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => await _(_, _),
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _();
            },
          });
        }
        async function _(_, _, _) {
          const _ = CProtoBufMsg.Init(CParental_EnableParentalSettings_Request);
          _.Body().set_steamid(_),
            _.Body().set_settings(ParentalSettings.fromObject(_));
          const _ = await ParentalService.EnableParentalSettings(_, _);
          if (_.GetEResult() != k_EResultOK)
            throw new Error(
              `Error from EnableParentalSettings: ${_.GetErrorMessage()} (${_.GetEResult()})`,
            );
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => await _(_, _, _),
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        async function _(_, _, _, _ = {}) {
          const _ = CProtoBufMsg.Init(CParental_SetParentalSettings_Request);
          _.Body().set_steamid(_),
            _.Body().set_settings(ParentalSettings.fromObject(_));
          const { password: _, new_password: _, sessionid: _ } = _;
          _ && _.Body().set_password(_),
            _ && _.Body().set_new_password(_),
            _ && _.Body().set_sessionid(_);
          const _ = await ParentalService.SetParentalSettings(_, _);
          if (_.GetEResult() != k_EResultOK)
            throw new Error(
              `Error from SetParentalSettings: ${_.GetErrorMessage()} (${_.GetEResult()})`,
            );
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => await _(_, _, _),
            onSuccess: (_, _) => {
              _.setQueryData(_(_), {
                settings: _,
                mapAppsAllowed: _(_),
              });
            },
          });
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const { steamidSrc: _, steamidDest: _ } = _,
                { settings: _ } = await _(_, _),
                _ = CSteamID.InitFromString(_);
              _.steamid = _.GetAccountID().toString();
              let _ = !0;
              try {
                await _(_, _, _);
              } catch {
                _ = !1;
              }
              _ || (await _(_, _, _)), _.is_enabled || (await _(_, _));
            },
            onSuccess: (_, _) => {
              _.invalidateQueries({
                queryKey: _(_.steamidDest),
              });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: ["parental_ownedgames", _],
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CPlayer_GetOwnedGames_Request);
              _.Body().set_steamid(_),
                _.Body().set_include_appinfo(!0),
                _.Body().set_include_free_sub(!0),
                _.Body().set_include_played_free_games(!0),
                _.Body().set_skip_unvetted_apps(!1),
                _.Body().set_language(Config.LANGUAGE);
              const _ = await PlayerService.GetOwnedGames(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw new Error(`Error from GetOwnedGames: ${_.GetEResult()}`);
              return _.Body();
            },
          });
        }
        function _(_, _, _, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              if (_ !== k_EParentalBlockAlways && _ !== k_EParentalBlockNever) {
                const _ = CProtoBufMsg.Init(
                  CParental_RequestFeatureAccess_Request,
                );
                _.Body().set_steamid(_), _.Body().set_features(1 << _);
                const _ = await ParentalService.RequestFeatureAccess(_, _);
                if (_.GetEResult() != k_EResultOK)
                  throw {
                    result: _.GetEResult(),
                    message: `Error from RequestFeatureAccess: ${_.GetErrorMessage()} (${_.GetEResult()})`,
                  };
              }
            },
            onSuccess: _,
            onError: _,
          });
        }
        function _() {
          return "parental_requests";
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: [_(), _, _],
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CParental_GetRequests_Request);
              _.Body().set_family_groupid(_),
                _ !== void 0 && _.Body().set_rt_include_completed_since(_);
              const _ = await ParentalService.GetRequests(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from GetRequests: ${_.GetEResult()} ${_.GetErrorMessage()}`,
                );
              return _.Body();
            },
          });
        }
        function _() {
          const _ = useQueryClient();
          return useCallback(
            () =>
              _.invalidateQueries({
                queryKey: [_()],
              }),
            [_],
          );
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = _();
          return useMutation({
            mutationFn: async (_) => {
              const { bApprove: _, durationSec: _ } = _,
                _ = CProtoBufMsg.Init(CParental_ApproveFeatureAccess_Request);
              _.Body().set_requestid(_.requestid()),
                _.Body().set_steamid(_.steamid()),
                _.Body().set_features(_.features()),
                _.Body().set_approve(_),
                _.Body().set_duration(_);
              const _ = await ParentalService.ApproveFeatureAccess(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw {
                  result: _.GetEResult(),
                  message: `Error from ApproveFeatureAccess: ${_.GetErrorMessage()} (${_.GetEResult()})`,
                };
            },
            onSuccess: () => {
              _(), _ && _();
            },
            onError: _,
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = _();
          return useMutation({
            mutationFn: async (_) => {
              const { bApprove: _, restrictions: _ } = _,
                _ = CProtoBufMsg.Init(CParental_ApprovePlaytime_Request);
              _.Body().set_requestid(_.requestid()),
                _.Body().set_steamid(_.steamid()),
                _.Body().set_restrictions_approved(_),
                _.Body().set_approve(_);
              const _ = await ParentalService.ApprovePlaytime(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw {
                  result: _.GetEResult(),
                  message: `Error from ApprovePlaytime: ${_.GetErrorMessage()} (${_.GetEResult()})`,
                };
            },
            onSuccess: () => {
              _(), _ && _();
            },
            onError: _,
          });
        }
        function _(_, _, _, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(CParental_RequestPlaytime_Request);
              _.Body().set_steamid(_),
                _.Body().set_current_playtime_restrictions(
                  ParentalPlaytimeDay.fromObject(_),
                );
              const _ = new Date();
              _.setHours(0, 0, 0, 0),
                _.setDate(_.getDate() + 1),
                _.Body().set_time_expires(_.getTime() / 1e3);
              const _ = await ParentalService.RequestPlaytime(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw {
                  result: _.GetEResult(),
                  message: `Error from RequestPlaytime: ${_.GetErrorMessage()} (${_.GetEResult()})`,
                };
            },
            onSuccess: _,
            onError: _,
          });
        }
        function _(_, _, _) {
          if (_)
            for (let _ of _) {
              const _ = _.applist_custom.find((_) => _.appid == _);
              _
                ? (_.is_allowed = !0)
                : _.applist_custom.push({
                    appid: _,
                    is_allowed: !0,
                  });
            }
          else {
            const _ = _.applist_custom.filter((_) => !_.includes(_.appid));
            _.applist_custom = _;
          }
        }
        var _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 22,
          _ = 23,
          _ = 24,
          _ = 25,
          _ = 26,
          _ = 27,
          _ = 28,
          _ = 29,
          _ = 30,
          _ = 0,
          _ = 1;
        function _(_) {
          return "unknown ESteamNotificationType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamNotificationTarget ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamNotificationTargetClientType ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_id || _._(_._()),
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
                    notification_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    notification_targets: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    notification_type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    body_data: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    read: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    timestamp: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    hidden: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    expiry: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    viewed: {
                      _: 11,
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
            return "SteamNotificationData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.include_hidden || _._(_._()),
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
                    include_hidden: {
                      _: 1,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 2,
                      _: 0,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    include_confirmation_count: {
                      _: 3,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_pinned_counts: {
                      _: 4,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_read: {
                      _: 5,
                      _: !0,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    count_only: {
                      _: 6,
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
            return "CSteamNotification_GetSteamNotifications_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notifications || _._(_._()),
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
                    notifications: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    confirmation_count: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    pending_gift_count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_friend_count: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unread_count: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_family_invite_count: {
                      _: 7,
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
            return "CSteamNotification_GetSteamNotifications_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timestamp || _._(_._()),
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
                    timestamp: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    notification_type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    notification_ids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    mark_all_read: {
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
            return "CSteamNotification_MarkNotificationsRead_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.remote_client_id || _._(_._()),
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
                    remote_client_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    target_client_type: {
                      _: 2,
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
            return "CSteamNotification_MarkNotificationsViewed_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_type || _._(_._()),
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
                    notification_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    notification_targets: {
                      _: 2,
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
            return "SteamNotificationPreference";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
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
                    preferences: {
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
            return "CSteamNotification_SetPreferences_Request";
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
            return "CSteamNotification_SetPreferences_Response";
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
            return "CSteamNotification_GetPreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
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
                    preferences: {
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
            return "CSteamNotification_GetPreferences_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_ids || _._(_._()),
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
                    notification_ids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
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
            return "CSteamNotification_HideNotification_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notifications || _._(_._()),
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
                    notifications: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    pending_gift_count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_friend_count: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_family_invite_count: {
                      _: 4,
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
            return "CSteamNotification_NotificationsReceived_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferences || _._(_._()),
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
                    preferences: {
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
            return "CSteamNotification_PreferencesUpdated_Notification";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SteamNotification.GetSteamNotifications#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetSteamNotifications = _;
          function _(_, _) {
            return _.SendNotification(
              "SteamNotification.MarkNotificationsRead#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.MarkNotificationsRead = _;
          function _(_, _) {
            return _.SendNotification(
              "SteamNotification.MarkNotificationsViewed#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.MarkNotificationsViewed = _;
          function _(_, _) {
            return _.SendNotification(
              "SteamNotification.HideNotification#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.HideNotification = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamNotification.SetPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.SetPreferences = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamNotification.GetPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPreferences = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotificationsReceivedHandler = {
            name: "SteamNotificationClient.NotificationsReceived#1",
            request: _,
          }),
            (_.PreferencesUpdatedHandler = {
              name: "SteamNotificationClient.PreferencesUpdated#1",
              request: _,
            });
        })(_ || (_ = {}));
        function _(_) {
          return "unknown EMarketBucketLevel ( " + _ + " )";
        }
        function _(_) {
          return "unknown EAssetPropertyType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETradeOfferState ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETradeOfferConfirmationMethod ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.type || _._(_._()),
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
                      _: _,
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
                      _: _,
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
                      _: _,
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
                    sealed_type: {
                      _: 37,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    market_name_inside_group: {
                      _: 38,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    market_bucket_id: {
                      _: 39,
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
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
          static sm_m;
          static sm_mbf;
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CEcon_GetAssetClassInfo_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.GetInventoryItemsWithDescriptions#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetInventoryItemsWithDescriptions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.GetTradeOfferAccessToken#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetTradeOfferAccessToken = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.ClientGetItemShopOverlayAuthURL#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ClientGetItemShopOverlayAuthURL = _;
          function _(_, _, _) {
            return _.SendMsg("Econ.GetAssetClassInfo#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetAssetClassInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Econ.GetAssetPropertySchema#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetAssetPropertySchema = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 14,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = null,
          _ = 0,
          _ = 1,
          _ = 2;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 16,
          _ = 32,
          _ = 64,
          _ = 128,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192,
          _ = 16384,
          _ = 32768,
          _ = 65536,
          _ = 1073741824,
          _ = null,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 6,
          _ = 7,
          _ = 8,
          _ = 9,
          _ = 10,
          _ = 11,
          _ = 12,
          _ = 13,
          _ = 15,
          _ = 16,
          _ = 17,
          _ = 18,
          _ = 19,
          _ = 20,
          _ = 21,
          _ = 22,
          _ = 23,
          _ = 24,
          _ = 25,
          _ = 26,
          _ = 27,
          _ = 28,
          _ = 29,
          _ = 30;
        function _(_) {
          return "unknown EFamilyGroupRole ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFamilyGroupMembershipRemovalReason ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFamilyGroupsTwoFactorMethod ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPurchaseRequestAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EFamilyGroupChangeLogType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESharedLibraryExcludeReason ( " + _ + " )";
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
            return "CFamilyGroups_CreateFamilyGroup_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    cooldown_skip_granted: {
                      _: 2,
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
            return "CFamilyGroups_CreateFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    send_running_apps: {
                      _: 2,
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
            return "CFamilyGroups_GetFamilyGroup_Request";
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
                    role: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_joined: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cooldown_seconds_remaining: {
                      _: 4,
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
            return "FamilyGroupMember";
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
                    role: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "FamilyGroupPendingInvite";
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
            return "FamilyGroupFormerMember";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2, 3, 7], null);
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
                    members: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    pending_invites: {
                      _: 3,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    free_spots: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    country: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    slot_cooldown_remaining_seconds: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    former_members: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    slot_cooldown_overrides: {
                      _: 8,
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
            return "CFamilyGroups_GetFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    role: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    inviter_steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    awaiting_2fa: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    invite_id: {
                      _: 5,
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
            return "FamilyGroupPendingInviteForUser";
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
                    include_family_group_response: {
                      _: 2,
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
            return "CFamilyGroups_GetFamilyGroupForUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    rtime_joined: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_left: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    role: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    participated: {
                      _: 5,
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
            return "FamilyGroupMembership";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5, 10], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    is_not_member_of_any_group: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    latest_time_joined: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    latest_joined_family_groupid: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    pending_group_invites: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    role: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cooldown_seconds_remaining: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    family_group: {
                      _: 8,
                      _: _,
                    },
                    can_undelete_last_joined_family: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    membership_history: {
                      _: 10,
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
            return "CFamilyGroups_GetFamilyGroupForUser_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CFamilyGroups_ModifyFamilyGroupDetails_Request";
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
            return "CFamilyGroups_ModifyFamilyGroupDetails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    receiver_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    receiver_role: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CFamilyGroups_InviteToFamilyGroup_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.invite_id || _._(_._()),
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
                    invite_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    two_factor_method: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CFamilyGroups_InviteToFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    nonce: {
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
            return "CFamilyGroups_JoinFamilyGroup_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.two_factor_method || _._(_._()),
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
                    two_factor_method: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    cooldown_skip_granted: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    invite_already_accepted: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    cooldown_seconds_remaining: {
                      _: 5,
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
            return "CFamilyGroups_JoinFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid_to_remove: {
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
            return "CFamilyGroups_RemoveFromFamilyGroup_Request";
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
            return "CFamilyGroups_RemoveFromFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid_to_cancel: {
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
            return "CFamilyGroups_CancelFamilyGroupInvite_Request";
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
            return "CFamilyGroups_CancelFamilyGroupInvite_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_DeleteFamilyGroup_Request";
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
            return "CFamilyGroups_DeleteFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    client_instance_id: {
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
            return "CFamilyGroups_GetUsersSharingDevice_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.users || _._(_._()),
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
                    users: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
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
            return "CFamilyGroups_GetUsersSharingDevice_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidshoppingcart: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    store_country_code: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    use_account_cart: {
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
            return "CFamilyGroups_RequestPurchase_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    request_id: {
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
            return "CFamilyGroups_RequestPurchase_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    request_ids: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    rt_include_completed_since: {
                      _: 4,
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
            return "CFamilyGroups_GetPurchaseRequests_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requester_steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [9, 10, 11, 12], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    requester_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gidshoppingcart: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_requested: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_responded: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    responder_steamid: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    response_action: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_completed: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    request_id: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    requested_packageids: {
                      _: 9,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    purchased_packageids: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    requested_bundleids: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    purchased_bundleids: {
                      _: 12,
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
            return "PurchaseRequest";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requests || _._(_._()),
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
                    requests: {
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
            return "CFamilyGroups_GetPurchaseRequests_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    action: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    request_id: {
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
            return "CFamilyGroups_RespondToRequestedPurchase_Request";
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
            return "CFamilyGroups_RespondToRequestedPurchase_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    running_apps: {
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
            return "CFamilyGroupsClient_NotifyRunningApps_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.member_steamid || _._(_._()),
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
                    member_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    owner_steamid: {
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
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_PlayingMember";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    playing_members: {
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
            return "CFamilyGroupsClient_NotifyRunningApps_Notification_RunningApp";
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
            return "CFamilyGroupsClient_InviteStatus_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroupsClient_GroupChanged_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_GetChangeLog_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.changes || _._(_._()),
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
                    changes: {
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
            return "CFamilyGroups_GetChangeLog_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timestamp || _._(_._()),
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
                    timestamp: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    actor_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    body: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    by_support: {
                      _: 5,
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
            return "CFamilyGroups_GetChangeLog_Response_Change";
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
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    first_played: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    latest_played: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    seconds_played: {
                      _: 5,
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
            return "CFamilyGroups_PlaytimeEntry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_GetPlaytimeSummary_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entries: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    entries_by_owner: {
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
            return "CFamilyGroups_GetPlaytimeSummary_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    cooldown_count: {
                      _: 2,
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
            return "CFamilyGroups_SetFamilyCooldownOverrides_Request";
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
            return "CFamilyGroups_SetFamilyCooldownOverrides_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    include_own: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    include_excluded: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    max_apps: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    include_non_games: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid: {
                      _: 8,
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
            return "CFamilyGroups_GetSharedLibraryApps_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apps || _._(_._()),
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
                    apps: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    owner_steamid: {
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
            return "CFamilyGroups_GetSharedLibraryApps_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2, 15], null);
          }
          static sm_m;
          static sm_mbf;
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
                    owner_steamids: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                    name: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sort_as: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    capsule_filename: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    img_icon_hash: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    exclude_reason: {
                      _: 10,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    rt_time_acquired: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rt_last_played: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rt_playtime: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app_type: {
                      _: 14,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    content_descriptors: {
                      _: 15,
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
            return "CFamilyGroups_GetSharedLibraryApps_Response_SharedApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    invite_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    nonce: {
                      _: 3,
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
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Request";
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
            return "CFamilyGroups_ConfirmInviteToFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    invite_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    nonce: {
                      _: 3,
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
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Request";
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
            return "CFamilyGroups_ConfirmJoinFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid: {
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
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Request";
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
            return "CFamilyGroups_ResendInvitationToFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    lender_steamid: {
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
            return "CFamilyGroups_SetPreferredLender_Request";
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
            return "CFamilyGroups_SetPreferredLender_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_GetPreferredLenders_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.members || _._(_._()),
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
                    members: {
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
            return "CFamilyGroups_GetPreferredLenders_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
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
                    steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    preferred_appids: {
                      _: 2,
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
            return "CFamilyGroups_GetPreferredLenders_Response_FamilyMember";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_UndeleteFamilyGroup_Request";
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
            return "CFamilyGroups_UndeleteFamilyGroup_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_ForceAcceptInvite_Request";
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
            return "CFamilyGroups_ForceAcceptInvite_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
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
            return "CFamilyGroups_GetInviteCheckResults_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.wallet_country_matches || _._(_._()),
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
                    wallet_country_matches: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    ip_match: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    join_restriction: {
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
            return "CFamilyGroups_GetInviteCheckResults_Response";
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
                    invite_id: {
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
            return "CFamilyGroups_ClearCooldownSkip_Request";
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
            return "CFamilyGroups_ClearCooldownSkip_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.family_groupid || _._(_._()),
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
                    family_groupid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    rtime32_target: {
                      _: 2,
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
            return "CFamilyGroups_RollbackFamilyGroup_Request";
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
            return "CFamilyGroups_RollbackFamilyGroup_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.CreateFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.CreateFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetFamilyGroupForUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetFamilyGroupForUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ModifyFamilyGroupDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ModifyFamilyGroupDetails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.InviteToFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.InviteToFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ConfirmInviteToFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ConfirmInviteToFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ResendInvitationToFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ResendInvitationToFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.JoinFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.JoinFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ConfirmJoinFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.ConfirmJoinFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RemoveFromFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RemoveFromFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.CancelFamilyGroupInvite#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.CancelFamilyGroupInvite = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetUsersSharingDevice#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetUsersSharingDevice = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.DeleteFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.DeleteFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.UndeleteFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.UndeleteFamilyGroup = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetPlaytimeSummary#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPlaytimeSummary = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RequestPurchase#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RequestPurchase = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetPurchaseRequests#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPurchaseRequests = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RespondToRequestedPurchase#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RespondToRequestedPurchase = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetChangeLog#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetChangeLog = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.SetFamilyCooldownOverrides#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.SetFamilyCooldownOverrides = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetSharedLibraryApps#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetSharedLibraryApps = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.SetPreferredLender#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SetPreferredLender = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetPreferredLenders#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetPreferredLenders = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ForceAcceptInvite#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ForceAcceptInvite = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.GetInviteCheckResults#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetInviteCheckResults = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.ClearCooldownSkip#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ClearCooldownSkip = _;
          function _(_, _, _) {
            return _.SendMsg(
              "FamilyGroups.RollbackFamilyGroup#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.RollbackFamilyGroup = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotifyRunningAppsHandler = {
            name: "FamilyGroupsClient.NotifyRunningApps#1",
            request: _,
          }),
            (_.NotifyInviteStatusHandler = {
              name: "FamilyGroupsClient.NotifyInviteStatus#1",
              request: _,
            }),
            (_.NotifyGroupChangedHandler = {
              name: "FamilyGroupsClient.NotifyGroupChanged#1",
              request: _,
            });
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown ELineItemPurchaseNotice ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.accountid_giftee || _._(_._()),
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
                    accountid_giftee: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    gift_message: {
                      _: 2,
                      _: _,
                    },
                    time_scheduled_send: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    email_giftee: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gifteename || _._(_._()),
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
                    gifteename: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    message: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sentiment: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    signature: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartGiftMessage";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.amount_in_cents || _._(_._()),
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
                    amount_in_cents: {
                      _: 1,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    currency_code: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    formatted_amount: {
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
            return "CartAmount";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.couponid || _._(_._()),
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
                    couponid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupon: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    coupon_description: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    large_icon_url: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    discount_pct: {
                      _: 8,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CartCoupon";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid_requester || _._(_._()),
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
                    steamid_requester: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    purchase_request_id: {
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
            return "CShoppingCart_CreateNew_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
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
            return "CShoppingCart_CreateNew_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.amount || _._(_._()),
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
                    amount: {
                      _: 1,
                      _: _._.readInt64String,
                      _: _._.writeInt64String,
                    },
                    currencycode: {
                      _: 2,
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
            return "CShoppingCart_Amount";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.packageid || _._(_._()),
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
                    packageid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    costwhenadded: {
                      _: 2,
                      _: _,
                    },
                    is_gift: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gidbundle: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    quantity: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gift_info: {
                      _: 6,
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
            return "CShoppingCart_PackageItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.walletcredit || _._(_._()),
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
                    walletcredit: {
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
            return "CShoppingCart_WalletCreditItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.couponid || _._(_._()),
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
                    couponid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupontarget: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    packageid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupon: {
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
            return "CShoppingCart_CouponItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.microtxnappid || _._(_._()),
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
                    microtxnappid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    microtxnassetclassid: {
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
            return "CShoppingCart_MicroTxnAsset";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bundleid || _._(_._()),
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
                    bundleid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    quantity: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_gift: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gift_info: {
                      _: 4,
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
            return "CShoppingCart_BundleItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reward_id || _._(_._()),
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
                    reward_id: {
                      _: 1,
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CShoppingCart_LoyaltyRewardItem";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidparent || _._(_._()),
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
                    gidparent: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    children: {
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
            return "CShoppingCart_RelationShip";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.couponid || _._(_._()),
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
                    couponid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    gidcoupon: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitem: {
                      _: 3,
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
            return "CShoppingCart_AvailableCoupon";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidlineitem || _._(_._()),
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
                    gidlineitem: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    package_item: {
                      _: 2,
                      _: _,
                    },
                    wallet_credit_item: {
                      _: 3,
                      _: _,
                    },
                    coupon_item: {
                      _: 4,
                      _: _,
                    },
                    micro_item: {
                      _: 5,
                      _: _,
                    },
                    bundle_item: {
                      _: 7,
                      _: _,
                    },
                    loyalty_item: {
                      _: 8,
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
            return "CShoppingCart_Item";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.coupons || _._(_._()),
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
                    coupons: {
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
            return "CShoppingCart_Potentials";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
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
            return "CShoppingCart_GetContents_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.lineitems || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    lineitems: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    treeview: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    potentials: {
                      _: 3,
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
            return "CShoppingCart_Contents";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    contents: {
                      _: 2,
                      _: _,
                    },
                    time_created: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    merged_into_account_cart: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    steamid_requester: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    purchase_request_id: {
                      _: 6,
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
            return "CShoppingCart_GetContents_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    browserid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    cart_items: {
                      _: 4,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    store_country_code: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    beta_mode: {
                      _: 6,
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
            return "CShoppingCart_AddPackages_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    contents: {
                      _: 2,
                      _: _,
                    },
                    result_details: {
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
            return "CShoppingCart_AddPackages_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitem: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    quantity: {
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
            return "CShoppingCart_UpdatePackageQuantity_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    contents: {
                      _: 2,
                      _: _,
                    },
                    result_details: {
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
            return "CShoppingCart_UpdatePackageQuantity_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    bundleid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    browserid: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    store_country: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    quantity: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    beta_mode: {
                      _: 7,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    gift_info: {
                      _: 8,
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
            return "CShoppingCart_AddBundle_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contents || _._(_._()),
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
                    contents: {
                      _: 1,
                      _: _,
                    },
                    result_details: {
                      _: 2,
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
            return "CShoppingCart_AddBundle_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitem: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gift_info: {
                      _: 3,
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
            return "CShoppingCart_ModifyLineItem_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contents || _._(_._()),
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
                    contents: {
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
            return "CShoppingCart_ModifyLineItem_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gidshoppingcart || _._(_._()),
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
                    gidshoppingcart: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    gidlineitems: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readUint64String,
                      pbr: _._.readPackedUint64String,
                      _: _._.writeRepeatedUint64String,
                    },
                    browserid: {
                      _: 3,
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
            return "CShoppingCart_RemoveLineItems_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.contents || _._(_._()),
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
                    contents: {
                      _: 1,
                      _: _,
                    },
                    result_details: {
                      _: 2,
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
            return "CShoppingCart_RemoveLineItems_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.CreateNewShoppingCart#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.CreateNewShoppingCart = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.GetShoppingCartContents#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetShoppingCartContents = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.AddPackages#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.AddPackages = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.UpdatePackageQuantity#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.UpdatePackageQuantity = _;
          function _(_, _, _) {
            return _.SendMsg("ShoppingCart.AddBundle#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.AddBundle = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.ModifyLineItem#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.ModifyLineItem = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ShoppingCart.RemoveLineItems#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.RemoveLineItems = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        const _ = (_, _) =>
            _ === void 0
              ? ["get_family_group_for_user ", _]
              : ["get_family_group_for_user ", _, _],
          _ = (_) => ["get_family_group", _],
          _ = (_) => ["get_family_history", _],
          _ = (_) => ["get_users_sharing_device", _],
          _ = (_) => ["get_shopping_cart_contents", _],
          _ = (_) => ["recent_playtime_sessions", _],
          _ = (_) => ["get_playtime_summary", _],
          _ = (_, _) => ["get_invite_check_results", _, _];
        function _(_, _, _) {
          return _
            ? ["get_purchase_requests", _, _, _]
            : _
              ? ["get_purchase_requests", _, _]
              : ["get_purchase_requests", _];
        }
        function _(_, _) {
          if (_ != k_EResultOK) throw _;
        }
        const _ = _.createContext({
          staleTimeMs: 1 / 0,
        });
        function _(_) {
          const { staleTimeMs: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                staleTimeMs: _ ?? 3e3,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        function _(_ = !1) {
          return _(useActiveAccount(), _);
        }
        function _(_, _ = !1) {
          const _ = useActiveServiceTransport(),
            _ = useContext(_).staleTimeMs;
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetFamilyGroupForUser_Request,
              );
              _.Body().set_steamid(_),
                _.Body().set_include_family_group_response(_);
              const _ = await FGS.FamilyGroupsService.GetFamilyGroupForUser(
                _,
                _,
              );
              return _(_.GetEResult(), "GetFamilyGroupForUser"), _.Body();
            },
            staleTime: _,
            enabled: !!_,
            placeholderData: _
              ? void 0
              : new FGS.CFamilyGroups_GetFamilyGroupForUser_Response(),
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useContext(_).staleTimeMs;
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              if (_) {
                const _ = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetFamilyGroup_Request,
                );
                _.Body().set_family_groupid(_);
                const _ = await FGS.FamilyGroupsService.GetFamilyGroup(_, _);
                return _(_.GetEResult(), "GetFamilyGroup"), _.Body();
              } else throw k_EResultNoMatch;
            },
            staleTime: _,
          });
        }
        function _() {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useActiveAccount();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.CreateFamilyGroup(_, _);
              return _(_.GetEResult(), "CreateFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useActiveAccount();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_DeleteFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.DeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "DeleteFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ModifyFamilyGroupDetails_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.ModifyFamilyGroupDetails(
                _,
                _,
              );
              return _(_.GetEResult(), "ModifyFamilyGroupDetails"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_InviteToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_receiver_steamid(_),
                _.Body().set_receiver_role(_);
              const _ = await FGS.FamilyGroupsService.InviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "InviteToFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_JoinFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.JoinFamilyGroup(_, _);
              return _(_.GetEResult(), "JoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CancelFamilyGroupInvite_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_cancel(_);
              const _ = await FGS.FamilyGroupsService.CancelFamilyGroupInvite(
                _,
                _,
              );
              return _(_.GetEResult(), "CancelFamilyGroupInvite"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RemoveFromFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid_to_remove(_);
              const _ = await FGS.FamilyGroupsService.RemoveFromFamilyGroup(
                _,
                _,
              );
              return _(_.GetEResult(), "RemoveFromFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = GetCookie("clientsessionid"),
                _ = _ && BigInt("0x" + _).toString(),
                _ = CProtoBufMsg.Init(
                  FGS.CFamilyGroups_GetUsersSharingDevice_Request,
                );
              _.Body().set_family_groupid(_),
                _.Body().set_client_instance_id(_ ?? void 0);
              const _ = await FGS.FamilyGroupsService.GetUsersSharingDevice(
                _,
                _,
              );
              return _(_.GetEResult(), "GetUsersSharingDevice"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = useActiveAccount();
          return _(_)
            .data?.members()
            .find((_) => _.steamid() == _)
            ?.role();
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RequestPurchase_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_use_account_cart(!0),
                _.Body().set_store_country_code(_);
              const _ = await FGS.FamilyGroupsService.RequestPurchase(_, _);
              return _(_.GetEResult(), "RequestPurchase"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount();
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              _.Body().set_family_groupid(_),
                _ !== void 0 && _.Body().set_rt_include_completed_since(_);
              const _ = await FGS.FamilyGroupsService.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount();
          return useQuery({
            queryKey: _(_, _, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPurchaseRequests_Request,
              );
              _.Body().set_family_groupid(_), _.Body().add_request_ids(_);
              const _ = await FGS.FamilyGroupsService.GetPurchaseRequests(_, _);
              return _(_.GetEResult(), "GetPurchaseRequests"), _.Body();
            },
            select: (_) =>
              _.toObject().requests?.find(({ request_id: _ }) => _ === _),
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_RespondToRequestedPurchase_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_request_id(_),
                _.Body().set_action(_);
              const _ =
                await FGS.FamilyGroupsService.RespondToRequestedPurchase(_, _);
              return _(_.GetEResult(), "RespondToRequestedPurchase"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        const _ = (0, _.createContext)({
          errorMessage: null,
          setErrorMessage: (_) => {},
        });
        function _(_, _) {
          return _;
        }
        var _ = ((_) => (
          (_[(_.k_EFamilyQueryNone = 0)] = "k_EFamilyQueryNone"),
          (_[(_.k_EFamilyQueryLoadFamily = 1)] = "k_EFamilyQueryLoadFamily"),
          (_[(_.k_EFamilyQueryJoinFamily = 2)] = "k_EFamilyQueryJoinFamily"),
          (_[(_.k_EFamilyQueryDeclineInvite = 3)] =
            "k_EFamilyQueryDeclineInvite"),
          (_[(_.k_EFamilyQueryInviteToFamily = 4)] =
            "k_EFamilyQueryInviteToFamily"),
          (_[(_.k_EFamilyQueryCreateFamily = 5)] =
            "k_EFamilyQueryCreateFamily"),
          (_[(_.k_EFamilyQueryDeleteFamily = 6)] =
            "k_EFamilyQueryDeleteFamily"),
          (_[(_.k_EFamilyQueryModifyFamily = 7)] =
            "k_EFamilyQueryModifyFamily"),
          (_[(_.k_EFamilyQueryRemoveFromFamily = 8)] =
            "k_EFamilyQueryRemoveFromFamily"),
          (_[(_.k_EFamilyQueryGetUsersSharingDevice = 9)] =
            "k_EFamilyQueryGetUsersSharingDevice"),
          (_[(_.k_EFamilyQueryPurchaseRequest = 10)] =
            "k_EFamilyQueryPurchaseRequest"),
          (_[(_.k_EFamilyQueryGetPurchaseRequests = 11)] =
            "k_EFamilyQueryGetPurchaseRequests"),
          (_[(_.k_EFamilyQueryDeclinePurchaseRequest = 12)] =
            "k_EFamilyQueryDeclinePurchaseRequest"),
          (_[(_.k_EFamilyQueryLoadHistory = 13)] = "k_EFamilyQueryLoadHistory"),
          (_[(_.k_EFamilyQueryLoadCart = 14)] = "k_EFamilyQueryLoadCart"),
          (_[(_.k_EFamilyQuerySetCooldownOverrides = 15)] =
            "k_EFamilyQuerySetCooldownOverrides"),
          (_[(_.k_EFamilyQueryResendInvite = 16)] =
            "k_EFamilyQueryResendInvite"),
          _
        ))(_ || {});
        const _ = {
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_ErrorInternalServerError",
          [_._]: "#FamilyManagement_AccessDenied",
          [_._]: "#FamilyManagement_ErrorNoMatch",
          [_._]: "#FamilyManagement_ErrorAccountDisabled",
          [_._]: "#FamilyManagement_ErrorNoActiveInvite",
          [_._]: "#FamilyManagement_PartnerAccountCannotJoinAsChild",
          [_._]: "#FamilyManagement_ErrorFamilySizeLimitExceeded",
          [_._]: "#FamilyManagement_ErrorLimitExceeded",
          [_._]: "#FamilyManagement_ErrorAccountActivityLimitExceeded",
          [_._]: "#FamilyManagement_LimitedAccount_CreateFamily",
          [_._]: {
            5: "#FamilyManagement_RateLimitExceeded_CreateFamily",
          },
          [_._]: {
            5: "#FamilyManagement_RegionLocked_CreateFamily",
            2: "#FamilyManagement_RegionLocked_JoinFamily",
          },
          [_._]: {
            2: "#FamilyManagement_Household_JoinFamily",
          },
          [_._]: {
            5: "#FamilyManagement_ErrorAccountLimitExceeded_CreateFamily",
            2: "#FamilyManagement_ErrorAccountLimitExceeded_JoinFamily",
            8: "#FamilyManagement_ErrorAccountLimitExceeded_RemoveFromFamily",
          },
          [_._]: {
            2: "#FamilyManagement_ErrorDuplicateRequest_JoinFamily",
            4: "#FamilyManagement_ErrorDuplicateRequest_InviteToFamily",
            8: "#FamilyManagement_ErrorDuplicateRequest_RemoveFromFamily",
          },
          [_._]: {
            4: "#FamilyManagement_ErrorFailed_NoAdditionalDetails",
          },
        };
        function _(_, _, _, _) {
          let _ = "";
          if (_ in _) {
            const _ = _[_];
            if (typeof _ == "string") _ = Localize(_, ..._);
            else {
              const _ = _;
              _ in _ && (_ = Localize(_[_], ..._));
            }
          }
          return _(Localize(_, _), _);
        }
        function _() {
          const { setErrorMessage: _ } = useContext(_);
          return {
            setErrorMessage: _,
          };
        }
        function _(_, _, _) {
          const { setErrorMessage: _ } = _(),
            { isError: _, error: _ } = _,
            _ = _();
          useEffect(() => {
            if (_) {
              const _ = _,
                _ = [];
              if (
                _ === k_EResultLimitExceeded ||
                _ === k_EResultAccountActivityLimitExceeded
              ) {
                let _;
                _.isSuccess &&
                  _.data &&
                  (_ = _.data.cooldown_seconds_remaining()),
                  _.push(_(_));
              }
              _(_(_, _, _, _));
            }
          }, [_, _, _, _, _, _.isSuccess, _.data]);
        }
        function _(_) {
          if (!_) return Localize("#FamilyManagement_LoadingPlaceholder");
          const _ = {
            month: "long",
            day: "numeric",
            year: "numeric",
            weekday: void 0,
          };
          return LocalizeDateHumanReadable(Date.now() / 1e3 + _, _);
        }
        function _(_, _) {
          const { setErrorMessage: _ } = _();
          useEffect(() => {
            _.isError && _(Localize(_));
          }, [_, _.isError, _]);
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetChangeLog_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.GetChangeLog(_, _);
              return (
                _(_.GetEResult(), "GetFamilyGroupChangeLog"), _.Body().changes()
              );
            },
            staleTime: 0,
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(CShoppingCart_GetContents_Request);
              _.Body().set_gidshoppingcart(_);
              const _ = await ShoppingCartService.GetShoppingCartContents(_, _);
              return _(_.GetEResult(), "GetShoppingCartContents"), _.Body();
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_SetFamilyCooldownOverrides_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_cooldown_count(_);
              const _ =
                await FGS.FamilyGroupsService.SetFamilyCooldownOverrides(_, _);
              return _(_.GetEResult(), "SetFamilyCooldownOverrides"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          return `${_._.STORE_BASE_URL}cart/purchaserequest/${_}/${_}`;
        }
        function _(_) {
          return `${Config.STORE_BASE_URL}cart/purchaserequested/${_}`;
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_CreateFamilyGroup_Request,
              );
              _.Body().set_steamid(_), _.Body().set_name(_);
              const _ = await FGS.FamilyGroupsService.CreateFamilyGroup(_, _);
              return (
                _(_.GetEResult(), "ForceCreateFamilyGroup"),
                _.Body().family_groupid()
              );
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              });
            },
          });
        }
        function _(_, _, _, _) {
          return [
            "get_shared_library_apps",
            _,
            _?.bIncludeOwn,
            _?.bIncludeExcluded,
            _?.bIncludeNonGames,
            _?.for_account_id,
            _,
            _,
          ];
        }
        function _(_, _) {
          const _ = useActiveAccount(),
            { settings: _, mapAppsAllowed: _ } = useParentalSettings(_).data,
            _ = useIsCurrentUserParentalLocked(),
            _ = useActiveServiceTransport(),
            {
              bIncludeOwn: _,
              bIncludeExcluded: _,
              bIncludeNonGames: _,
              for_account_id: _,
            } = _ ?? {},
            _ = _?.enabled !== void 0 ? _.enabled : !0,
            _ = _(_, _, _, _),
            _ = (_) => !BIsAppBlocked(_.appid(), _, _, _);
          return useQuery({
            queryKey: _,
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetSharedLibraryApps_Request,
              );
              if (
                (_.Body().set_family_groupid(_),
                _.Body().set_include_own(_),
                _.Body().set_include_excluded(_),
                _.Body().set_language(Config.LANGUAGE),
                _.Body().set_include_non_games(_),
                _)
              ) {
                const _ = CSteamID.InitFromAccountID(_, Config.EUNIVERSE);
                _.Body().set_steamid(_.ConvertTo64BitString());
              }
              const _ = await FGS.FamilyGroupsService.GetSharedLibraryApps(
                _,
                _,
              );
              return (
                _(_.GetEResult(), "GetSharedLibraryApps"),
                _.Body()
                  .apps()
                  .filter(_)
                  .map((_) => _.toObject())
              );
            },
            enabled: !!_ && _,
            placeholderData: keepPreviousData,
            select: _?.select,
          });
        }
        function _(_, _) {
          const _ = useQueryClient(),
            _ = useActiveAccount(),
            { settings: _ } = useParentalSettings(_).data ?? {},
            _ = useIsCurrentUserParentalLocked(),
            _ = _(_, _, _, _);
          return useCallback(() => {
            _.invalidateQueries({
              queryKey: _,
            });
          }, [_, _]);
        }
        function _(_, _) {
          let _ = _.sort_as || _.name,
            _ = _.sort_as || _.name;
          return stricmp(_, _);
        }
        function _(_, _) {
          return _.rt_time_acquired - _.rt_time_acquired || _(_, _);
        }
        function _(_, _, _) {
          if (!_ && _.length === 0) return !0;
          const _ = _.name?.toLocaleLowerCase(),
            _ = _.toLocaleLowerCase(),
            _ = _?.includes(_) || _.appid?.toString() == _;
          let _ = !0;
          if (_.content_descriptors) {
            for (const _ of _)
              if (!_.content_descriptors.includes(_)) {
                _ = !1;
                break;
              }
          }
          return _ && _;
        }
        function _(_, _, _, _ = []) {
          const _ = useMemo(
              () => _?.filter((_) => _(_, _, _)) || [],
              [_, _, _],
            ),
            _ = useCallback(
              (_, _) => {
                let _ = _;
                switch (_) {
                  case "alpha-asc":
                    _ = _;
                    break;
                  case "alpha-desc":
                    _ = (_, _) => _(_, _);
                    break;
                  case "date_acquired-asc":
                    _ = (_, _) => _(_, _);
                    break;
                  case "date_acquired-desc":
                    _ = _;
                    break;
                }
                return _(_, _);
              },
              [_],
            );
          return useMemo(() => _.slice().sort(_), [_, _]);
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient(),
            _ = useActiveAccount();
          return useMutation({
            mutationFn: async (_) => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmJoinFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ = await FGS.FamilyGroupsService.ConfirmJoinFamilyGroup(
                _,
                _,
              );
              return _(_.GetEResult(), "ConfirmJoinFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ConfirmInviteToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_),
                _.Body().set_invite_id(_),
                _.Body().set_nonce(_);
              const _ =
                await FGS.FamilyGroupsService.ConfirmInviteToFamilyGroup(_, _);
              return _(_.GetEResult(), "ConfirmInviteToFamilyGroup"), _.Body();
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ResendInvitationToFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ =
                await FGS.FamilyGroupsService.ResendInvitationToFamilyGroup(
                  _,
                  _,
                );
              return _(_.GetEResult(), "ResendInvitationToFamilyGroup"), _;
            },
          });
        }
        function _(_) {
          let _ = [];
          _.sort((_, _) => _.time_start - _.time_start);
          let _ = new Map();
          for (const _ of _) {
            let _ = _.get(_.appid);
            _ === void 0
              ? _.set(_.appid, _)
              : _.time_start <= _.time_end
                ? (_.time_end = Math.max(_.time_end, _.time_end))
                : (_.push(_), _.set(_.appid, _));
          }
          for (const _ of _.values()) _.push(_);
          return _.sort((_, _) => _.time_start - _.time_start), _;
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                _.CPlayer_GetRecentPlaytimeSessionsForChild_Request,
              );
              _.Body().set_steamid(_);
              const _ = await _.PlayerService.GetRecentPlaytimeSessionsForChild(
                _,
                _,
              );
              _(_.GetEResult(), "GetRecentPlaytimeSessionsForChild");
              let _ = _.Body().toObject().sessions || [];
              return _(_);
            },
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetPlaytimeSummary_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.GetPlaytimeSummary(_, _);
              _(_.GetEResult(), "GetPlaytimeSummary");
              let _ = _.Body().toObject().entries ?? [];
              _.sort((_, _) => _.seconds_played - _.seconds_played);
              let _ = _.Body().toObject().entries_by_owner ?? [];
              return (
                _.sort((_, _) => _.seconds_played - _.seconds_played),
                {
                  borrowed: _,
                  loaned: _,
                }
              );
            },
            enabled: _ !== "0",
          });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = useActiveAccount(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_UndeleteFamilyGroup_Request,
              );
              _.Body().set_family_groupid(_);
              const _ = await FGS.FamilyGroupsService.UndeleteFamilyGroup(_, _);
              return _(_.GetEResult(), "UndeleteFamilyGroup"), _;
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport(),
            _ = useQueryClient();
          return useMutation({
            mutationFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_ForceAcceptInvite_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.ForceAcceptInvite(_, _);
              return _(_.GetEResult(), "ForceAcceptInvite"), null;
            },
            onSuccess: () => {
              _.invalidateQueries({
                queryKey: _(_),
              }),
                _.invalidateQueries({
                  queryKey: _(_),
                }),
                _.invalidateQueries({
                  queryKey: _(_),
                });
            },
          });
        }
        function _(_, _) {
          const _ = useActiveServiceTransport();
          return useQuery({
            queryKey: _(_, _),
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                FGS.CFamilyGroups_GetInviteCheckResults_Request,
              );
              _.Body().set_family_groupid(_), _.Body().set_steamid(_);
              const _ = await FGS.FamilyGroupsService.GetInviteCheckResults(
                _,
                _,
              );
              return (
                _(_.GetEResult(), "GetInviteCheckResults"), _.Body().toObject()
              );
            },
          });
        }
        function _(_, _) {
          return _.members().find((_) => _.steamid() == _);
        }
        var _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 0,
          _ = 1,
          _ = 2,
          _ = 3,
          _ = 4,
          _ = 5,
          _ = 6;
        function _(_) {
          return "unknown EReportedContentNotificationStatus ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.data || _._(_._()),
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
                    data: {
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
            return "AdditionalSubjectData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.key || _._(_._()),
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
                    key: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "AdditionalSubjectData_DataEntry";
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
                    start: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    count: {
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
            return "CContentModeration_GetReportsSubmittedByUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.report_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [23, 24], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    report_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reporter_steamid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_reported: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    report_reason: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    report_text: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    subject_type: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    resolved: {
                      _: 9,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_resolved: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolver_steamid: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_notified: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    additional_subject_data: {
                      _: 13,
                      _: _,
                    },
                    time_disputed: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    dispute_details: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    dispute_resolver_steamid: {
                      _: 16,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dispute_resolved: {
                      _: 17,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_dispute_resolved: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    detected_by_automation: {
                      _: 19,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    resolved_by_automation: {
                      _: 20,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    content_moderated_reason: {
                      _: 21,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    dispute_resolved_reason: {
                      _: 22,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sanctions_applied: {
                      _: 23,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    sanctions_applied_on_dispute: {
                      _: 24,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    reported_content_id: {
                      _: 25,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    coordinates: {
                      _: 26,
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
            return "ContentReport";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content_report || _._(_._()),
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
                    content_report: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total_count: {
                      _: 2,
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
            return "CContentModeration_GetReportsSubmittedByUser_Response";
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
                    subject_type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reported_content_id: {
                      _: 5,
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
            return "CContentModeration_GetOneReportSubmittedByUser_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content_report || _._(_._()),
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
                    content_report: {
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
            return "CContentModeration_GetOneReportSubmittedByUser_Response";
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
            return "CContentModeration_GetReportedSubjectsByOwner_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [13, 31, 32], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    owner_steam_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    language: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    resolved: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    time_resolved: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unresolved_report_count: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_report_time: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolver_steamid: {
                      _: 10,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    assigned_moderator_steamid: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_claimed_by_moderator: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reports: {
                      _: 13,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    additional_subject_data: {
                      _: 14,
                      _: _,
                    },
                    csam_status: {
                      _: 15,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    terrorism_status: {
                      _: 16,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    content_moderated_reason: {
                      _: 17,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    unresolved_dispute_count: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_dispute_time: {
                      _: 19,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner_dispute_time: {
                      _: 24,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner_dispute_resolved_time: {
                      _: 25,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    owner_dispute_details: {
                      _: 26,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    required_moderator_level: {
                      _: 27,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    resolved_by_automation: {
                      _: 28,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    detected_by_automation: {
                      _: 29,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    credible_threat_of_violence_status: {
                      _: 30,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sanctions_applied: {
                      _: 31,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    sanctions_applied_after_dispute: {
                      _: 32,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    decision_reversed: {
                      _: 33,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    reported_content_id: {
                      _: 34,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    coordinates: {
                      _: 35,
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
            return "ContentReportSubject";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject || _._(_._()),
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
                    subject: {
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
            return "CContentModeration_GetReportedSubjectsByOwner_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sanction || _._(_._()),
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
                    sanction: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    days: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    escalate_to: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "ContentReportSubjectSanction";
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
            return "CContentModeration_GetSubjectOverview_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.buckets || _._(_._()),
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
                    buckets: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    pending_for_any_moderator: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_supervisor: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_valve: {
                      _: 4,
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
            return "CContentModeration_GetSubjectOverview_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    unresolved_count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unclaimed_count: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_disputed: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    disputed_count: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    unclaimed_disputed_count: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_any_moderator: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_supervisor: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    pending_for_valve: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_for_any_moderator: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_for_supervisor: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    oldest_unresolved_for_valve: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    coordinates: {
                      _: 14,
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
            return "CContentModeration_GetSubjectOverview_Response_Bucket";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reported_content_id: {
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
            return "ContentReportSubjectKey";
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
                    rtime_cooldown_ends: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    acquit_unresolved_reports: {
                      _: 3,
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
            return "CContentModeration_UpdateReporterCooldown_Request";
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
            return "CContentModeration_UpdateReporterCooldown_Response";
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
            return "CContentModeration_GetReporterCooldown_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_cooldown_ends || _._(_._()),
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
                    rtime_cooldown_ends: {
                      _: 1,
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
            return "CContentModeration_GetReporterCooldown_Response";
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
            return "CContentModeration_GetModeratorPreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferred_level || _._(_._()),
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
                    preferred_level: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    enabled_subject_types: {
                      _: 2,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
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
            return "CContentModeration_GetModeratorPreferences_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.preferred_level || _._(_._()),
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
                    preferred_level: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    enabled_subject_types: {
                      _: 2,
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
            return "CContentModeration_SetModeratorPreferences_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_types || _._(_._()),
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
                    subject_types: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readEnum,
                      pbr: _._.readPackedEnum,
                      _: _._.writeRepeatedEnum,
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
            return "CContentModeration_SetModeratorPreferences_Request_SubjectTypeList";
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
            return "CContentModeration_SetModeratorPreferences_Response";
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
                    rt_start: {
                      _: 2,
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
            return "CContentModeration_GetModeratorActivity_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.activities || _._(_._()),
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
                    activities: {
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
            return "CContentModeration_GetModeratorActivity_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timestamp: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    action: {
                      _: 5,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    json_data: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    reported_content_id: {
                      _: 7,
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
            return "CContentModeration_GetModeratorActivity_Response_ModerationActivity";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_start_date || _._(_._()),
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
                    rtime_start_date: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtime_end_date: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    subject_type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CContentModeration_GetDailyModerationStatistics_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stats || _._(_._()),
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
                    stats: {
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
            return "CContentModeration_GetDailyModerationStatistics_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rtime_date || _._(_._()),
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
                    rtime_date: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    times_unresolved: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    times_resolved: {
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
            return "CContentModeration_GetDailyModerationStatistics_Response_DayStatistics";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 2,
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
            return "CContentModeration_GetOldestUnresolvedSubjects_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_GetOldestUnresolvedSubjects_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    subject_group_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subject_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    reported_content_id: {
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
            return "CContentModeration_GetOldestUnresolvedSubjects_Response_Subject";
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
            return "CContentModeration_GetReporterStats_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.total_reports || _._(_._()),
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
                    total_reports: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_acquitted_reports: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    reports_in_last_week: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    acquitted_reports_in_last_week: {
                      _: 4,
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
            return "CContentModeration_GetReporterStats_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    moderator_level: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    filters: {
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
            return "CContentModeration_ClaimBatch_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_ClaimBatch_Response";
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
            return "CContentModeration_GetClaimedSubjects_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_GetClaimedSubjects_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects_to_release || _._(_._()),
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
                    subjects_to_release: {
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
            return "CContentModeration_ReleaseSubjects_Request";
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
            return "CContentModeration_ReleaseSubjects_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject_type || _._(_._()),
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
                    subject_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    steamid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    forum: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    topic: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    comment: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    comment_thread_id: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    sender_account_id: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chat_message_rtime: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chat_message_ordinal: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    chat_group_id: {
                      _: 10,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    chat_room_id: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    receiver_account_id: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    published_file_id: {
                      _: 13,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    ugc_content_type: {
                      _: 14,
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
            return "ReportedContentCoordinates";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
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
            return "CContentModeration_GetReportedContentByID_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subject || _._(_._()),
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
                    subject: {
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
            return "CContentModeration_GetReportedContentByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.coordinates || _._(_._()),
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
                    coordinates: {
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
            return "CContentModeration_GetReportedContent_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.subjects || _._(_._()),
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
                    subjects: {
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
            return "CContentModeration_GetReportedContent_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    details: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_OwnerDisputeModeration_Request";
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
            return "CContentModeration_OwnerDisputeModeration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
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
            return "CContentModeration_GetAuditLogByID_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entries || _._(_._()),
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
                    entries: {
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
            return "CContentModeration_GetAuditLogByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timestamp || _._(_._()),
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
                    timestamp: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    actor_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    automated_action: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    action: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    additional_json_data: {
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
            return "CContentModeration_GetAuditLogByID_Response_AuditLogEntry";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    report_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    dispute_details: {
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
            return "CContentModeration_ReporterDisputeModeration_Request";
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
            return "CContentModeration_ReporterDisputeModeration_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
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
            return "CContentModeration_SustainModerationByID_Request";
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
            return "CContentModeration_SustainModerationByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    new_level: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    reason: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    note: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_EscalateSubjectByID_Request";
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
            return "CContentModeration_EscalateSubjectByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    resolution: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    reason: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    note: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    resolved_by_automation: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sanctions_applied: {
                      _: 9,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    skip_lock: {
                      _: 10,
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
            return "CContentModeration_ResolveByID_Request";
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
            return "CContentModeration_ResolveByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    csam_status: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    terrorism_status: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    credible_threat_of_violence_status: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    additional_subject_data: {
                      _: 5,
                      _: _,
                    },
                    owner_dispute_details: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CContentModeration_UpdateSubjectByID_Request";
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
            return "CContentModeration_UpdateSubjectByID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.reported_content_id || _._(_._()),
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
                    reported_content_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    action: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    automated_action: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    additional_json_data: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    actor_steamid: {
                      _: 5,
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
            return "CContentModeration_WriteToAuditLogByID_Request";
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
            return "CContentModeration_WriteToAuditLogByID_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ClaimBatch#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ClaimBatch = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetClaimedSubjects#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetClaimedSubjects = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ReleaseSubjects#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ReleaseSubjects = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportsSubmittedByUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetReportsSubmittedByUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetOneReportSubmittedByUser#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetOneReportSubmittedByUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportedSubjectsByOwner#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetReportedSubjectsByOwner = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetSubjectOverview#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.GetSubjectOverview = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.UpdateReporterCooldown#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.UpdateReporterCooldown = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReporterCooldown#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetReporterCooldown = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetModeratorPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetModeratorPreferences = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.SetModeratorPreferences#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.SetModeratorPreferences = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetModeratorActivity#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.GetModeratorActivity = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetDailyModerationStatistics#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetDailyModerationStatistics = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetOldestUnresolvedSubjects#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetOldestUnresolvedSubjects = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReporterStats#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetReporterStats = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportedContentByID#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetReportedContentByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetReportedContent#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetReportedContent = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.OwnerDisputeModeration#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.OwnerDisputeModeration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.GetAuditLogByID#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 5,
              },
            );
          }
          _.GetAuditLogByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ReporterDisputeModeration#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.ReporterDisputeModeration = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.SustainModerationByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.SustainModerationByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.EscalateSubjectByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.EscalateSubjectByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.ResolveByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.ResolveByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.UpdateSubjectByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.UpdateSubjectByID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "ContentModeration.WriteToAuditLogByID#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 5,
              },
            );
          }
          _.WriteToAuditLogByID = _;
        })(_ || (_ = {}));
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          const _ = _?.reported_content_id
            ? _.reported_content_id
            : `${_?.subject_type}-${_?.subject_group_id}-${_?.subject_id}`;
          return `${_._.COMMUNITY_BASE_URL}my/reportedcontent/${_}`;
        }
        const _ = {
          [_]: {
            displayNameLoc: "#SteamNotification_HelpRequest_Author",
            titleLoc: "#SteamNotification_HelpRequest_Title",
            bodyLoc: (_) => ({
              locString: "#SteamNotification_HelpRequest_Body",
              params: [_.ticket],
            }),
            link: (_) => _._.HELP_BASE_URL + "wizard/HelpRequest/" + _.ticket,
          },
          [_]: {
            displayNameLoc: "#SteamNotifications_MajorSale",
            titleLoc: (_) => ({
              locString: _.title,
            }),
            bodyLoc: (_) =>
              (0, _._)() && _.link.includes("https://store.steampowered.com")
                ? "#SteamNotifications_MajorSale_SteamChina_Title"
                : _.body,
            image: (_) => _.image,
            link: (_) =>
              (0, _._)() && _.link.includes("https://store.steampowered.com")
                ? _.link.replace(
                    "https://store.steampowered.com",
                    _._.STORE_BASE_URL,
                  )
                : _.link,
          },
          [_]: {
            displayNameLoc: (_) => _.display_name,
            titleLoc: (_) => _.title,
            bodyLoc: (_) => _.body,
            image: (_) => _.image,
            link: (_) => _.link,
          },
          [_]: {
            titleLoc: "#SteamNotification_ModeratorMessage_Title",
            link: (_) =>
              _._.COMMUNITY_BASE_URL + "my/moderatormessages/" + _.msgid,
          },
          [_]: {
            displayNameLoc: (_) =>
              _.is_limited_launch
                ? "#Notification_LimitedLaunchInviteTitle"
                : "#Notification_PlaytestInviteTitle",
            titleLoc: (_) =>
              _.is_limited_launch
                ? "#Notification_LimitedLaunchInviteBody"
                : "#Notification_PlaytestInviteBody",
            image: (_) => _.appid,
            link: (_) =>
              _._.STORE_BASE_URL + "account/gatedaccess?appid=" + _.appid,
          },
          [_]: {
            titleLoc: (_) => {
              switch (_.status) {
                case _:
                  return "#Notification_ReportedContentAction_Received";
                case _:
                  return "#Notification_ReportedContentAction_Sanctioned";
                case _:
                  return "#Notification_ReportedContentAction_Acquitted";
                case _:
                  return "#Notification_ReportedContentAction_DisputeReceived";
                case _:
                  return "#Notification_ReportedContentAction_DisputeSanctioned";
                case _:
                  return "#Notification_ReportedContentAction_DisputeAcquitted";
                default:
                  return "#Notification_ReportedContentAction_Unknown";
              }
            },
            link: (_) => _(_),
          },
        };
        function _(_) {
          if (_ !== void 0) return _[_];
        }
        function _(_) {
          return !!_(_);
        }
        const _ = {
          [_]: {
            steamidAttribute: "inviter",
            titleLoc: "#SteamNotifications_FamilyInviteTitle",
            bodyLoc: "#SteamNotifications_FamilyInviteBody",
            url: (_) =>
              `${_._.STORE_BASE_URL}account/familymanagement/join?invitation=${_.familyid}`,
          },
          [_]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalFeatureRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalFeatureRequestBody",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_]: {
            steamidAttribute: "requestor_steamid",
            titleLoc: "#SteamNotifications_FamilyPurchaseRequestTitle",
            bodyLoc: "#SteamNotifications_FamilyPurchaseRequestBody",
            url: (_) => _(_.familyid, _.request_id),
          },
          [_]: {
            steamidAttribute: "responder_steamid",
            titleLoc: (_) =>
              _.action == _
                ? "#SteamNotifications_FamilyPurchaseRequestResponseDeclinedTitle"
                : "",
            bodyLoc: (_) =>
              _.action == _
                ? "#SteamNotifications_FamilyPurchaseRequestDeclinedBody"
                : "",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_]: {
            steamidAttribute: "steamid",
            titleLoc: "#SteamNotifications_ParentalPlaytimeRequestTitle",
            bodyLoc: "#SteamNotifications_ParentalPlaytimeRequestBody",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseTitleApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseTitleDeclined",
            bodyLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalFeatureAccessResponseBodyApproved"
                : "#SteamNotifications_ParentalFeatureAccessResponseBodyDeclined",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
          [_]: {
            steamidAttribute: "steamid_approver",
            titleLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseTitleApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseTitleDeclined",
            bodyLoc: (_) =>
              _.approved
                ? "#SteamNotifications_ParentalPlaytimeResponseBodyApproved"
                : "#SteamNotifications_ParentalPlaytimeResponseBodyDeclined",
            url: () =>
              `${_._.STORE_BASE_URL}account/familymanagement?tab=requests`,
          },
        };
        function _(_) {
          if (_ !== void 0) return _[_];
        }
        function _(_) {
          return !!_(_);
        }
        const _ = [_, _, _, _, _, _, _, _, _, _, _];
        function _(_) {
          return _.findIndex((_) => _ == _) != null;
        }
        function _(_) {
          return _.hidden ? !1 : _(_.notification_type) && _(_.body_data);
        }
        function _(_) {
          return _(_) || _(_) || _(_);
        }
        var _ = ((_) => (
          (_[(_.New = 0)] = "New"),
          (_[(_.Update = 1)] = "Update"),
          (_[(_.Remove = 2)] = "Remove"),
          _
        ))(_ || {});
        const _ = "Test_",
          _ = 3600 * 48,
          _ = 600,
          _ = !1,
          _ = new _._("SteamNotificationStore"),
          _ = _.Debug,
          _ = _.Error,
          _ = _.Warning;
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_rgNotificationRollups = [];
          m_summary = _();
          m_bLoaded = !1;
          m_nUnviewed = 0;
          m_rgNotifyServerRead = [];
          m_rgNotifyServerHidden = [];
          m_keyNotifyServerRead = "";
          m_keyNotifyServerHidden = "";
          m_steamid;
          m_transport;
          m_rgUnreadNotificationIDs = [];
          m_rgNewRollupIDs = new Map();
          m_rgTestNotifications = [];
          m_currentNotificationsData = null;
          m_strRemoteClientID = "";
          m_eTargetClientType = _;
          m_fnOnNotificationCallback = null;
          BHasNotificationsData() {
            return this.m_currentNotificationsData != null;
          }
          setTransport(_) {
            this.m_transport = _;
          }
          RegisterOnNotificationCallback(_) {
            this.m_fnOnNotificationCallback = _;
          }
          SetClientFilters(_, _ = _) {
            (this.m_strRemoteClientID = _), (this.m_eTargetClientType = _);
          }
          NotifyServerNotificationsRead(_) {
            this.m_rgNotifyServerRead.push(..._), this.UpdateServer();
          }
          NotifyServerNotificationsHidden(_) {
            this.m_rgNotifyServerHidden.push(..._), this.UpdateServer();
          }
          BSendToCallbackAsNew(_) {
            return (
              !_.read &&
              !_(_) &&
              !this.m_rgUnreadNotificationIDs.includes(_.notification_id)
            );
          }
          Dev_AddTestNotification(_) {}
          Dev_UpdateTestNotificationReadState(_, _) {
            const _ = this.m_rgTestNotifications.findIndex(
              (_) => _.notification_id == _,
            );
            return _ !== -1 && this.m_rgTestNotifications[_].read != _
              ? ((this.m_rgTestNotifications[_].read = _), !0)
              : !1;
          }
          UpdateServer() {
            if (this.m_rgNotifyServerRead.length > 0) {
              const _ = _._.Init(_);
              _.Body().set_notification_ids(this.m_rgNotifyServerRead),
                _.MarkNotificationsRead(this.m_transport, _) &&
                  (this.m_rgNotifyServerRead = []);
            }
            if (this.m_rgNotifyServerHidden.length > 0) {
              const _ = _._.Init(_);
              _.Body().set_notification_ids(this.m_rgNotifyServerHidden),
                _.HideNotification(this.m_transport, _) &&
                  (this.m_rgNotifyServerHidden = []);
            }
          }
          MarkItemRead(_, _ = !1) {
            let _ = this.m_rgNotificationRollups.findIndex(
              (_) => _.item.notification_id == _,
            );
            if (_ === -1) {
              _
                ? this.NotifyServerNotificationsRead([_])
                : _(
                    "Attempted to mark notification read that is not in the notification store",
                  );
              return;
            }
            let _ = this.m_rgNotificationRollups[_];
            if (_.item.read) {
              _("Attempted to mark notification read that is already read");
              return;
            }
            if (((_.item.read = !0), _.rgunread?.length > 0)) {
              this.ReduceNewTotals(_.type, _.rgunread.length);
              let _ = [];
              _.rgunread.forEach((_) => {
                _.push(_);
              }),
                _.rgread.push(..._.rgunread),
                (_.rgunread = []),
                this.NotifyServerNotificationsRead(_);
            }
          }
          MarkItemHidden(_) {
            let _ = this.m_rgNotificationRollups.findIndex(
              (_) => _.item.notification_id == _,
            );
            if (_ === -1) {
              _(
                "Attempted to mark notification hidden that is not in the notification store",
              );
              return;
            }
            let _ = this.m_rgNotificationRollups[_];
            (_.item.hidden = !0),
              _.rgunread?.length > 0 &&
                this.ReduceNewTotals(_.type, _.rgunread?.length),
              this.NotifyServerNotificationsHidden([
                ..._.rgunread,
                ..._.rgread,
              ]);
          }
          ReduceNewTotals(_, _) {
            _(this.m_summary, _, -_);
          }
          MarkAllItemsViewed() {
            const _ = _._.Init(_);
            _.Body().set_remote_client_id(this.m_strRemoteClientID),
              _.Body().set_target_client_type(this.m_eTargetClientType),
              _.MarkNotificationsViewed(this.m_transport, _),
              (this.m_nUnviewed = 0);
          }
          MarkAllItemsRead(_) {
            let _ = [],
              _ = [],
              _ = 0;
            const _ = _ ?? this.m_rgNotificationRollups;
            return (
              _.forEach((_, _) => {
                _.rgunread.length > 0 &&
                  (_.rgunread.forEach((_) => {
                    _.push(_);
                  }),
                  _.push(_));
              }),
              _.length > 0 &&
                ((this.m_summary = Object.assign(_(), {
                  pending_gifts: this.m_summary.pending_gifts,
                  pending_invites: this.m_summary.pending_invites,
                  pending_family_invites: this.m_summary.pending_family_invites,
                })),
                _.forEach((_) => {
                  let _ = _[_];
                  (_.item.read = !0), (_.rgunread = []);
                }),
                this.NotifyServerNotificationsRead(_)),
              _.length + _
            );
          }
          ApplyNotificationsUpdate(_) {
            if (
              (_("ApplyNotificationsUpdate", _),
              !_ ||
                (!_.notifications?.length &&
                  _.pending_friend_count === void 0 &&
                  _.pending_gift_count === void 0))
            ) {
              _("Error: ApplyNotificationsUpdate was called with no data");
              return;
            }
            if (!this.m_currentNotificationsData) {
              _(
                "Error: ApplyNotificationsUpdate was called before this.m_currentNotificationsData was set",
              );
              return;
            }
            const _ = this.m_currentNotificationsData;
            _.notifications?.forEach((_) => {
              const _ = _.notifications.findIndex(
                (_) => _.notification_id == _.notification_id,
              );
              _ != -1
                ? Object.assign(_.notifications[_], _)
                : _.notifications.push(_);
            }),
              _.pending_friend_count !== void 0 &&
                (this.m_currentNotificationsData.pending_friend_count =
                  _.pending_friend_count),
              _.pending_gift_count !== void 0 &&
                (this.m_currentNotificationsData.pending_gift_count =
                  _.pending_gift_count),
              _.pending_family_invite_count !== void 0 &&
                (this.m_currentNotificationsData.pending_family_invite_count =
                  _.pending_family_invite_count),
              this.ProcessNotifications();
          }
          ProcessNewNotificationPayload(_) {
            (this.m_currentNotificationsData = JSON.parse(JSON.stringify(_))),
              this.ProcessNotifications();
          }
          ProcessNotifications() {
            let _ = [],
              _ = _(),
              _ = 0;
            if (
              (this.m_currentNotificationsData?.notifications?.forEach((_) => {
                this.BExcludeClientTargetedNotification(_) ||
                  (this.m_rgNotifyServerHidden.length > 0 &&
                    this.m_rgNotifyServerHidden.findIndex(
                      (_) => _ == _.notification_id,
                    ) !== -1 &&
                    (_.hidden = !0),
                  _(_) &&
                    (this.m_rgNotifyServerRead.length > 0 &&
                      this.m_rgNotifyServerRead.findIndex(
                        (_) => _ == _.notification_id,
                      ) !== -1 &&
                      (_.read = !0),
                    _.read || _(_, _.notification_type, 1),
                    _.viewed || _++,
                    this.AddNotificationToRollups(_, _)));
              }),
              _.sort((_, _) => _.timestamp - _.timestamp),
              this.m_fnOnNotificationCallback)
            ) {
              for (const _ of _)
                if (_.bSendToCallbackAsNew)
                  this.m_rgNewRollupIDs.set(
                    _.rollup_key,
                    JSON.parse(JSON.stringify(_)),
                  ),
                    this.m_fnOnNotificationCallback(_, 0);
                else if (this.m_rgNewRollupIDs.has(_.rollup_key)) {
                  let _ = this.m_rgNewRollupIDs.get(_.rollup_key);
                  (_.item.read != _.item.read ||
                    _.item.viewed != _.item.viewed) &&
                    (this.m_rgNewRollupIDs.set(
                      _.rollup_key,
                      JSON.parse(JSON.stringify(_)),
                    ),
                    this.m_fnOnNotificationCallback(_, 1));
                }
              for (const [_, _] of this.m_rgNewRollupIDs)
                _.findIndex((_) => _.rollup_key == _) == -1 &&
                  (this.m_fnOnNotificationCallback(_, 2),
                  this.m_rgNewRollupIDs.delete(_));
            }
            _.reverse(),
              (_.pending_gifts =
                this.m_currentNotificationsData?.pending_gift_count ?? 0),
              (_.pending_invites =
                this.m_currentNotificationsData?.pending_friend_count ?? 0),
              (_.pending_family_invites =
                this.m_currentNotificationsData?.pending_family_invite_count ??
                0),
              (this.m_rgNotificationRollups = _.slice()),
              (this.m_summary = _),
              (this.m_bLoaded = !0),
              (this.m_nUnviewed = _);
          }
          BExcludeClientTargetedNotification(_) {
            const _ = _(_.body_data);
            return _
              ? _.remote_client_id &&
                this.m_strRemoteClientID != _.remote_client_id
                ? !0
                : !!(
                    _.target_client_types &&
                    !(this.m_eTargetClientType & _.target_client_types)
                  )
              : !1;
          }
          BReplaceRollupItem(_, _) {
            return _.read != _.read
              ? _.read
              : (_.read && _.read) || _.viewed == _.viewed
                ? _.timestamp < _.timestamp
                : !_.viewed && _.viewed
                  ? !0
                  : _.viewed && _.viewed
                    ? _.viewed < _.viewed
                    : !1;
          }
          AddNotificationToRollups(_, _) {
            const _ = this.BSendToCallbackAsNew(_);
            _ && this.m_rgUnreadNotificationIDs.push(_.notification_id);
            let _ = _.notification_type;
            switch (_) {
              case _:
                {
                  const _ = _(_);
                  if (!_) return;
                  const _ =
                    "comment_" +
                    _.owner_steam_id?.GetAccountID() +
                    "_" +
                    _.forum_id +
                    "_" +
                    _.topic_id +
                    (_.brate_limited ? "_ratelimited" : "");
                  let _ = _.findIndex((_) => _.rollup_key == _);
                  if (_ == -1)
                    _.push({
                      type: _,
                      rollup_key: _,
                      item: _,
                      rollup_count: 1,
                      timestamp: _.timestamp,
                      rgunread: _.read ? [] : [_.notification_id],
                      rgread: _.read ? [_.notification_id] : [],
                      bSendToCallbackAsNew: _,
                      url: _(_),
                    });
                  else {
                    let _ = _[_];
                    this.BReplaceRollupItem(_, _.item) &&
                      ((!_ || _.item.read) && (_.url = _(_)),
                      (_.item = _),
                      (_.timestamp = _.timestamp),
                      (_.bSendToCallbackAsNew = _)),
                      (_.rollup_count = _.rollup_count + 1),
                      _.read
                        ? _.rgread.push(_.notification_id)
                        : _.rgunread.push(_.notification_id);
                  }
                }
                break;
              case _:
                const _ = _(_);
                if (_) {
                  const _ = "item_" + _.appid;
                  this.AddNotificationToRollupByAppID(_, _, _, _, _, _.appid);
                }
                break;
              case _:
                const _ = _(_)?.appid.toString();
                if (_) {
                  const _ = "asyncgame_" + _;
                  this.AddNotificationToRollupByAppID(_, _, _, _, _, _);
                }
                break;
              case _:
                const _ = _(_),
                  _ = _?.report_id,
                  _ = _(_),
                  _ = `contentreport_${_}`;
                let _ = _.findIndex((_) => _.rollup_key == _);
                if (_ == -1)
                  _.push({
                    type: _,
                    rollup_key: _,
                    item: _,
                    rollup_count: 1,
                    timestamp: _.timestamp,
                    rgunread: _.read ? [] : [_.notification_id],
                    rgread: _.read ? [_.notification_id] : [],
                    bSendToCallbackAsNew: _,
                    url: _,
                  });
                else {
                  let _ = _[_];
                  this.BReplaceRollupItem(_, _.item) &&
                    ((!_ || _.item.read) && (_.url = _),
                    (_.item = _),
                    (_.timestamp = _.timestamp),
                    (_.bSendToCallbackAsNew = _)),
                    (_.rollup_count = _.rollup_count + 1),
                    _.read
                      ? _.rgread.push(_.notification_id)
                      : _.rgunread.push(_.notification_id);
                }
                break;
              default:
                _.push({
                  type: _,
                  rollup_key: _.notification_id,
                  item: _,
                  timestamp: _.timestamp,
                  rgunread: _.read ? [] : [_.notification_id],
                  rgread: _.read ? [_.notification_id] : [],
                  bSendToCallbackAsNew: _,
                });
                break;
            }
          }
          AddNotificationToRollupByAppID(_, _, _, _, _, _) {
            let _ = _.findIndex((_) => _.rollup_key == _);
            if (_ == -1)
              _.push({
                type: _,
                rollup_key: _,
                item: _,
                rollup_count: 1,
                timestamp: _.timestamp,
                rgunread: _.read ? [] : [_.notification_id],
                rgread: _.read ? [_.notification_id] : [],
                bSendToCallbackAsNew: _,
              });
            else {
              let _ = _[_];
              this.BReplaceRollupItem(_, _.item) &&
                ((_.item = _),
                (_.timestamp = _.timestamp),
                (_.bSendToCallbackAsNew = _)),
                (_.rollup_count = _.rollup_count + 1),
                _.read
                  ? _.rgread.push(_.notification_id)
                  : _.rgunread.push(_.notification_id);
            }
          }
        }
        _([_._], _.prototype, "m_rgNotificationRollups", 2),
          _([_._], _.prototype, "m_summary", 2),
          _([_._], _.prototype, "m_bLoaded", 2),
          _([_._], _.prototype, "m_nUnviewed", 2),
          _([_._], _.prototype, "ProcessNotifications", 1);
        function _() {
          return {
            comments: 0,
            inventory_items: 0,
            invites: 0,
            gifts: 0,
            offline_messages: 0,
            trade_offers: 0,
            async_game_updates: 0,
            moderator_messages: 0,
            help_request_replies: 0,
            general: 0,
            wishlist: 0,
            pending_gifts: 0,
            pending_invites: 0,
            major_sale: 0,
            parental_feature_requests: 0,
            family_invites: 0,
            family_purchase_requests: 0,
            family_purchase_request_responses: 0,
            pending_family_invites: 0,
            parental_playtime_requests: 0,
            parental_feature_access_responses: 0,
            parental_playtime_responses: 0,
            requested_game_added: 0,
            playtest_invites: 0,
          };
        }
        async function _(_, _, _, _, _, _ = !0, _ = !1) {
          if (!_) throw new Error("Invalid steamid for GetSteamNotifications");
          const _ = _._.Init(_);
          _.Body().set_language(_),
            _.Body().set_include_read(_),
            _.Body().set_include_pinned_counts(!0),
            _.Body().set_include_confirmation_count(_);
          const _ = await _.GetSteamNotifications(_, _);
          if (_.GetEResult() !== _._)
            throw (
              (_(
                `Received error from GetSteamNotifications. Result ${_.GetEResult()}. Transport ${_.Hdr().transport_error()}`,
              ),
              new Error(`Error from GetSteamNotifications: ${_.GetEResult()}`))
            );
          const _ = _.Body().toObject();
          return (
            _ &&
              (_.notifications = _.notifications?.filter(
                (_) => !_(_.notification_type, _, _),
              )),
            _
          );
        }
        async function _(_, _) {
          if (!_ || !_.steamid || !_.contextid || !_.appid || !_.assetid)
            return _("Item notification missing required attributes"), null;
          const _ = _._.Init(_);
          _.Body().set_steamid(_.steamid),
            _.Body().set_contextid(_.contextid),
            _.Body().set_appid(parseInt(_.appid)),
            _.Body().set_get_descriptions(!0),
            _.Body().set_language(_._.LANGUAGE);
          let _ = new _();
          _.add_assetids(_.assetid), _.Body().set_filters(_);
          const _ = await _.GetInventoryItemsWithDescriptions(_, _);
          return _.GetEResult() !== _._
            ? (_(
                "Request for steam item metadata did not succeed",
                _.GetEResult(),
              ),
              null)
            : (_.Body().toObject().descriptions[0] ?? null);
        }
        const _ = "ItemMetadata";
        function _(_) {
          return [
            `${_}_${_?.steamid}_${_?.appid}_${_?.contextid}_${_?.assetid}`,
          ];
        }
        async function _(_, _) {
          if (!_) return [];
          const _ = CProtoBufMsg.Init(
            CSteamNotification_GetPreferences_Request,
          );
          let _ = await SteamNotificationService.GetPreferences(_, _);
          return _.GetEResult() != k_EResultOK
            ? (_("Getting notification preferences failed " + _.GetEResult()),
              [])
            : _.Body().toObject().preferences;
        }
        function _(_, _, _) {
          let _ = _(_, _.body_data);
          _.steamid = _;
          let _ = (0, _._)({
            queryKey: _(_),
            queryFn: async () => _(_, _),
            staleTime: 1 / 0,
          });
          return _.isSuccess ? _.data : null;
        }
        function _(_) {
          let _ = `comment/${_.comment_type}/bounce/${_.owner_steam_id.ConvertTo64BitString()}/${_.forum_id}/?feature2=${_.topic_id}`;
          return _.last_post > 0 && (_ += "&tscn=" + (_.last_post - 1)), _;
        }
        function _(_) {
          return _.comment_type == _;
        }
        function _(_) {
          return _?.bhas_friend;
        }
        function _(_) {
          return _.comment_type == _;
        }
        function _(_) {
          return _(_) || _(_);
        }
        function _(_) {
          return _(_);
        }
        function _(_) {
          if (!_) return null;
          try {
            return JSON.parse(_);
          } catch {
            _("Steam notification in invalid format:", _);
          }
          return null;
        }
        function _(_) {
          return _(_.notification_type, _.body_data);
        }
        function _(_) {
          return _(_.type, _.item?.body_data);
        }
        function _(_, _) {
          let _ = _(_);
          if (!_) return null;
          switch (_) {
            case _:
              return _.gifter_account;
            case _:
              return {
                responder_steamid: _.responder_steamid,
                package_id: _.package_id,
                bundle_id: _.bundle_id,
              };
            case _:
              return parseInt(_.sender);
            case _:
              return {
                appid: _.appid,
                count: _.count ?? 1,
                appids: _.appids ?? [],
              };
            case _:
              return !_.appid || !_.state || (_.state != _ && _.state != _)
                ? (_("Async game notification invalid data", _), null)
                : {
                    appid: parseInt(_.appid),
                    state: parseInt(_.state),
                  };
            case _:
              let _ = {
                owner_steam_id: _.owner_steam_id
                  ? new _._(_.owner_steam_id)
                  : null,
                bclan_account: _(_.bclan_account),
                title: _.title,
                comment: _.text,
                time: _.last_post,
                comment_type: Number(_.type),
                topic_id: _.topic_id,
                forum_id: _.forum_id,
                account_steam_id: _.account_id
                  ? _._.InitFromAccountID(_.account_id)
                  : null,
                bhas_friend: _(_.bhas_friend),
                bis_forum: _(_.bis_forum),
                last_post: _.last_post,
                bsubscribed: _(_.subscribed),
                bis_owner: _(_.bis_owner),
                brate_limited: !!_.brate_limited,
              };
              return (
                _.json_data &&
                  (_.json_data = {
                    app_id: parseInt(_.json_data.app_id),
                    file_type: parseInt(_.json_data.file_type),
                    title: _.json_data.title,
                  }),
                _
              );
            case _:
              return {
                requestorID: parseInt(_.requestor_id),
                state: _.state ? parseInt(_.state) : _.abL,
              };
            case _:
              return {
                appid: parseInt(_.app_id),
                assetid: _.asset_id ?? "",
                contextid: _.context_id ?? "",
              };
            case _:
              return {
                url: _.url ?? "",
                strGameName: _.content_app_name ?? "",
                mediaType: _.media_type ?? "clip",
                secDuration: parseFloat(_.duration_seconds ?? 0),
                nSize: parseInt(_.file_size ?? 0),
                strMachineName: _.machine_name,
                rtExpiration: _.expiration,
                thumbnailURL: _.thumbnail_url,
              };
            case _:
              return {
                report_id: _.report_id ?? "",
                reported_content_id: _.reported_content_id ?? "",
                subject_type: _.subject_type ?? 0,
                subject_group_id: _.subject_group_id ?? "0",
                subject_id: _.subject_id ?? "0",
                status: _.status ?? 0,
              };
            default:
              return (
                _(
                  "GetCustomNotificationDataByType called with unexpected type:" +
                    _,
                  _,
                ),
                null
              );
          }
        }
        function _(_) {
          if (typeof _ > "u") return !1;
          if (typeof _ == "number") return _ > 0;
          if (typeof _ == "string")
            switch (_.toLowerCase()?.trim()) {
              case "true":
              case "1":
                return !0;
              default:
                return !1;
            }
          return _("notification contained unexpected boolean value"), !1;
        }
        function _(_) {
          let _ = 0;
          return (
            (function (_) {
              return Object.keys(_);
            })(_).forEach((_) => {
              _ != "pending_gifts" && _ != "pending_invites" && (_ += _[_]);
            }),
            _
          );
        }
        const _ = {
          [_]: {
            rollup_field: void 0,
            eFeature: void 0,
          },
          [_]: {
            rollup_field: void 0,
            eFeature: void 0,
          },
          [_]: {
            rollup_field: "gifts",
            eFeature: _,
          },
          [_]: {
            rollup_field: "comments",
            eFeature: _,
          },
          [_]: {
            rollup_field: "inventory_items",
            eFeature: _,
          },
          [_]: {
            rollup_field: "invites",
            eFeature: _,
          },
          [_]: {
            rollup_field: "major_sale",
            eFeature: _,
          },
          [_]: {
            rollup_field: void 0,
            eFeature: void 0,
          },
          [_]: {
            rollup_field: "wishlist",
            eFeature: _,
          },
          [_]: {
            rollup_field: "trade_offers",
            eFeature: _,
          },
          [_]: {
            rollup_field: "general",
            eFeature: _,
          },
          [_]: {
            rollup_field: "help_request_replies",
            eFeature: _,
          },
          [_]: {
            rollup_field: "async_game_updates",
            eFeature: _,
          },
          [_]: {
            rollup_field: "moderator_messages",
            eFeature: _,
          },
          [_]: {
            rollup_field: "parental_feature_requests",
            eFeature: _,
          },
          [_]: {
            rollup_field: "family_invites",
            eFeature: _,
          },
          [_]: {
            rollup_field: "family_purchase_requests",
            eFeature: _,
          },
          [_]: {
            rollup_field: "parental_playtime_requests",
            eFeature: _,
          },
          [_]: {
            rollup_field: "family_purchase_request_responses",
            eFeature: _,
          },
          [_]: {
            rollup_field: "parental_feature_access_responses",
            eFeature: _,
          },
          [_]: {
            rollup_field: "parental_playtime_responses",
            eFeature: _,
          },
          [_]: {
            rollup_field: "requested_game_added",
            eFeature: _,
          },
          [_]: {
            rollup_field: void 0,
            eFeature: _,
          },
          [_]: {
            rollup_field: void 0,
            eFeature: _,
          },
          [_]: {
            rollup_field: "playtest_invites",
            eFeature: _,
          },
          [_]: {
            rollup_field: void 0,
            eFeature: _,
          },
          [_]: {
            rollup_field: void 0,
            eFeature: _,
          },
        };
        function _(_) {
          const _ = _[_];
          return (0, _._)(!!_, `Missing notification type data for ${_}`), _;
        }
        function _(_, _, _) {
          if (!_) return !1;
          const _ = _(_);
          return _(_, _?.eFeature ?? _, _);
        }
        function _(_, _, _) {
          (0, _._)(() => {
            const _ = _(_);
            _?.rollup_field &&
              (_[_.rollup_field] = Math.max(0, _[_.rollup_field] + _));
          });
        }
        function _(_) {
          return !_.viewed || _.viewed + _ > (0, _._)();
        }
        function _(_) {
          return _.viewed && _.viewed + _ < (0, _._)();
        }
        function _(_) {
          return (
            _(_) +
              _.pending_gifts +
              _.pending_invites +
              _.pending_family_invites >
            0
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          if (!_) return;
          const _ = typeof _ == "string" ? _ : _.locString,
            _ = typeof _ == "string" ? [] : _.params || [];
          if (_) return _[0] !== "#" ? _ : (0, _._)(_, ..._);
        }
        function _(_, _) {
          return _.useMemo(() => {
            if (_ === void 0) return null;
            let _ = _(_);
            const _ = _(_);
            if (!_ || !_) return null;
            const _ =
                typeof _.displayNameLoc != "function"
                  ? {
                      locString: _.displayNameLoc,
                    }
                  : _.displayNameLoc(_),
              _ =
                typeof _.titleLoc != "function"
                  ? {
                      locString: _.titleLoc,
                    }
                  : _.titleLoc(_),
              _ =
                typeof _.bodyLoc != "function"
                  ? {
                      locString: _.bodyLoc,
                    }
                  : _.bodyLoc(_),
              _ = typeof _.image != "function" ? _.image : _.image(_),
              _ = typeof _.link != "function" ? _.link : _.link(_);
            return {
              display_name: _(_),
              title: _(_),
              body: _(_),
              image: _,
              link: _,
            };
          }, [_, _]);
        }
        function _(_, _) {
          return _.useMemo(() => {
            const _ = _(_),
              _ = _(_);
            if (!_) return null;
            const _ =
                typeof _.titleLoc == "string" ? _.titleLoc : _.titleLoc(_),
              _ = typeof _.bodyLoc == "string" ? _.bodyLoc : _.bodyLoc(_),
              _ = typeof _.url == "string" ? _.url : _.url(_),
              _ =
                typeof _.steamidAttribute == "string"
                  ? _.steamidAttribute
                  : _.steamidAttribute(_),
              _ = _ && _[_];
            return {
              strTitleLoc: _,
              strBodyLoc: _,
              strUrl: _,
              steamid: _,
            };
          }, [_, _]);
        }
        function _(_) {
          return _.useMemo(() => (_(_.type) ? _(_) : null), [_]);
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb";
        function _(_, _) {
          let _ = ".jpg";
          (!_ || _ === "0000000000000000000000000000000000000000") && (_ = _),
            _.length == 44 && ((_ = _.substr(-4)), (_ = _.substr(0, 40)));
          let _ = _._.AVATAR_BASE_URL;
          return (
            _ ||
              ((_ = _._.MEDIA_CDN_COMMUNITY_URL + "images/avatars/"),
              (_ += _.substr(0, 2) + "/")),
            (_ += _),
            _ && _ != "small" && (_ += "_" + _),
            (_ += _),
            _
          );
        }
        const _ = 0,
          _ = "061818254b2c99ac49e6626adb128ed1282a392f",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = "338200c5d6c4d9bdcf6632642a2aeb591fb8a5c2.gif",
          _ = 120;
        class _ {
          m_unAppID;
          m_bInitialized = !1;
          m_strName;
          m_strIconURL;
          m_dtUpdatedFromServer;
          m_eAppType;
          constructor(_) {
            this.m_unAppID = _;
          }
          get appid() {
            return this.m_unAppID;
          }
          get is_initialized() {
            return this.m_bInitialized;
          }
          get is_valid() {
            return this.m_bInitialized && !!this.m_strName;
          }
          get name() {
            return this.m_strName;
          }
          get icon_url_no_default() {
            return this.m_strIconURL && this.BuildAppURL(this.m_strIconURL, _);
          }
          get icon_url() {
            return this.BuildAppURL(this.m_strIconURL, _);
          }
          get time_updated_from_server() {
            return this.m_dtUpdatedFromServer;
          }
          get apptype() {
            return this.m_eAppType;
          }
          BIsApplicationOrTool() {
            return this.apptype == _ || this.apptype == _;
          }
          BuildAppURL(_, _) {
            return _
              ? _._.MEDIA_CDN_COMMUNITY_URL +
                  "images/apps/" +
                  this.appid +
                  "/" +
                  _ +
                  ".jpg"
              : _(_);
          }
          DeserializeFromMessage(_) {
            (this.m_bInitialized = !0),
              (this.m_strName = _.name()),
              (this.m_strIconURL = _.icon()),
              (this.m_dtUpdatedFromServer = new Date()),
              (this.m_eAppType = _.app_type());
          }
          DeserializeFromAppOverview(_) {
            _.icon_hash() && _.app_type() != _
              ? ((this.m_bInitialized = !0),
                (this.m_strName = _.display_name()),
                (this.m_strIconURL = _.icon_hash()),
                (this.m_dtUpdatedFromServer = new Date()),
                (this.m_eAppType = _.app_type()))
              : (this.m_bInitialized = !1);
          }
          DeserializeFromCacheObject(_) {
            try {
              (this.m_strName = _.strName),
                (this.m_strIconURL = _.strIconURL),
                (this.m_dtUpdatedFromServer = new Date(_.strUpdatedFromServer)),
                (this.m_eAppType = _.eAppType),
                (this.m_bInitialized = !0);
            } catch {}
          }
          SerializeToCacheObject() {
            return (
              (0, _._)(
                this.m_bInitialized,
                "Attempting to serialize an uninitialized AppInfo object for caching!",
              ),
              this.m_bInitialized
                ? {
                    strName: this.m_strName,
                    strIconURL: this.m_strIconURL,
                    strUpdatedFromServer: this.m_dtUpdatedFromServer.toJSON(),
                    eAppType: this.m_eAppType,
                  }
                : null
            );
          }
        }
        class _ {}
        class _ {
          m_nLastUpdated = 0;
          m_mapLanguages = _._.map();
          m_appid;
          m_fetching = null;
          constructor(_) {
            this.m_appid = _;
          }
          GetAppID() {
            return this.m_appid;
          }
          GetTokenList(_) {
            return this.m_mapLanguages.has(_)
              ? this.m_mapLanguages.get(_)
              : null;
          }
          Localize(_, _) {
            let _ = _._.LANGUAGE,
              _ = this.GetTokenList(_),
              _ = _ != "english" ? this.GetTokenList("english") : null;
            return _(_, _, _, this.m_appid, _);
          }
          SubstituteParams(_, _) {
            let _ = _._.LANGUAGE,
              _ = this.GetTokenList(_),
              _ = _ != "english" ? this.GetTokenList("english") : null;
            return _(_, _, _, this.m_appid, _);
          }
        }
        function _(_, _, _, _, _) {
          if (!_.startsWith("#"))
            return (
              console.log(
                "Token doesn't start with #:",
                _,
                "appid",
                _,
                "tokens",
                _,
              ),
              ""
            );
          let _ = _;
          _ = _.toLowerCase();
          let _ = "";
          if (
            (_ && _.has(_) && (_ = _.get(_)),
            !_ && _ && _.has(_) && (_ = _.get(_)),
            _)
          )
            _ = _(_, _, _, _, _);
          else if (
            ((_ || _) &&
              console.log(
                "No loc found for appid",
                _,
                _,
                "Tokens:",
                _,
                "Fallback:",
                _,
              ),
            _ && _._.EUNIVERSE != _.wLO)
          )
            return _;
          return _;
        }
        function _(_, _, _, _, _) {
          let _ = /{[A-za-z0-9_%#:]+}/g,
            _ = _.match(_);
          if (_)
            for (let _ of _) {
              let _ = _.slice(1, -1),
                _ = _(_, _),
                _ = _(_, _, _, _, _);
              if (!_) return "";
              _ = _.replace(_, _);
            }
          return (_ = _(_, _)), _;
        }
        function _(_, _) {
          let _ = /%[A-Za-z0-9_:]+%/g,
            _ = _.match(_);
          if (_)
            for (let _ of _) {
              let _ = _.slice(1, -1).toLowerCase(),
                _ = _.get(_);
              _ == null
                ? console.log("No rich presence found for", _)
                : (_ = _.replace(_, _));
            }
          return _;
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          return useObserver(() => _.GetAppInfo(_));
        }
        function _(_) {
          return useObserver(() => _.map((_) => _.GetAppInfo(_)));
        }
        const _ = 3600 * 24 * 7 * 2;
        class _ {
          m_CMInterface;
          m_mapAppInfo = _._.map();
          m_mapRichPresenceLoc = _._.map();
          m_cAppInfoRequestsInFlight = 0;
          m_setPendingAppInfo = new Set();
          m_PendingAppInfoPromise;
          m_PendingAppInfoResolve;
          m_CacheStorage = null;
          m_fnCallbackOnAppInfoLoaded = new _._();
          constructor() {
            (0, _._)(this);
          }
          Init(_) {
            this.m_CMInterface = _;
          }
          BHavePendingAppInfoRequests() {
            return (
              this.m_setPendingAppInfo.size > 0 ||
              this.m_cAppInfoRequestsInFlight > 0
            );
          }
          get CMInterface() {
            return this.m_CMInterface;
          }
          RegisterCallbackOnLoad(_) {
            if (!this.BHavePendingAppInfoRequests()) {
              (0, _._)(
                !1,
                "Registering for callback on appinfo load, but nothing queued",
              ),
                _();
              return;
            }
            this.m_fnCallbackOnAppInfoLoaded.Register(_);
          }
          IsLoadingAppID(_) {
            return this.m_setPendingAppInfo.has(_);
          }
          GetAppInfo(_) {
            if (
              ((0, _._)(
                this.m_CMInterface,
                "CAppInfoStore.GetAppInfo called before Init",
              ),
              !this.m_mapAppInfo.has(_))
            ) {
              let _ = new _(_);
              this.m_mapAppInfo.set(_, _), this.QueueAppInfoRequest(_);
            }
            return this.m_mapAppInfo.get(_);
          }
          QueueAppInfoRequest(_) {
            return _
              ? (this.m_setPendingAppInfo.size ||
                  ((this.m_PendingAppInfoPromise = new Promise(
                    (_) => (this.m_PendingAppInfoResolve = _),
                  )),
                  window.setTimeout(() => this.FlushPendingAppInfo(), 25)),
                this.m_setPendingAppInfo.add(_),
                this.m_PendingAppInfoPromise)
              : Promise.resolve();
          }
          async FlushPendingAppInfo() {
            const _ = this.m_PendingAppInfoResolve,
              _ = Array.from(this.m_setPendingAppInfo);
            (this.m_PendingAppInfoPromise = void 0),
              (this.m_PendingAppInfoResolve = void 0),
              this.m_setPendingAppInfo.clear(),
              await this.LoadAppInfoBatch(_),
              _?.();
          }
          async LoadAppInfoBatch(_) {
            this.m_cAppInfoRequestsInFlight++;
            let _ = await this.LoadAppInfoBatchFromLocalCache(_);
            if (_.length) {
              console.log("Loading batch of App Info from Steam: ", _),
                await this.m_CMInterface?.WaitUntilLoggedOn();
              let _ = _._.Init(_._);
              _.Body().set_language((0, _.sfN)(_._.LANGUAGE));
              const _ = 50;
              for (; _.length > 0; ) {
                const _ = Math.min(_, _.length),
                  _ = _.slice(0, _);
                (_ = _.slice(_)), _.Body().set_appids(_);
                const _ = await _._.GetApps(
                  this.m_CMInterface.GetServiceTransport(),
                  _,
                );
                _.GetEResult() == _._
                  ? this.OnGetAppsResponse(_)
                  : console.error(
                      `Error when calling CommunityService.GetApps: EResult=${_.GetEResult()}, AppIDs:`,
                      _,
                    );
              }
            }
            --this.m_cAppInfoRequestsInFlight == 0 &&
              this.m_setPendingAppInfo.size == 0 &&
              (this.m_fnCallbackOnAppInfoLoaded.Dispatch(),
              this.m_fnCallbackOnAppInfoLoaded.ClearAllCallbacks());
          }
          OnGetAppsResponse(_) {
            let _ = [];
            for (let _ of _.Body().apps()) {
              let _ = this.m_mapAppInfo.get(_.appid());
              (0, _._)(
                _,
                `Got AppInfo response for unrequested AppID: ${_.appid()}`,
              ),
                _ &&
                  ((_ = new _(_.appid())),
                  _.DeserializeFromMessage(_),
                  this.m_mapAppInfo.set(_.appid(), _),
                  _.push(_));
            }
            this.SaveAppInfoBatchToLocalCache(_);
          }
          OnAppOverviewChange(_) {
            for (let _ of _) {
              const _ = new _(_.appid());
              _.DeserializeFromAppOverview(_),
                _.is_initialized && this.m_mapAppInfo.set(_.appid(), _);
            }
          }
          async EnsureAppInfoForAppIDs(_) {
            let _ = !1;
            return (
              _.forEach((_) => {
                let _ = this.m_mapAppInfo.get(_);
                if (_) {
                  _.is_valid || (_ = !0);
                  return;
                }
                (_ = new _(_)),
                  this.m_mapAppInfo.set(_, _),
                  this.QueueAppInfoRequest(_),
                  (_ = !0);
              }),
              _ && this.m_PendingAppInfoPromise !== void 0
                ? this.m_PendingAppInfoPromise
                : Promise.resolve()
            );
          }
          SetCacheStorage(_) {
            this.m_CacheStorage = _;
          }
          GetCacheKeyForAppID(_) {
            return "APPINFO_" + _;
          }
          async LoadAppInfoBatchFromLocalCache(_) {
            if (!this.m_CacheStorage) return _;
            console.log("Loading batch of App Info from Local Cache: ", _);
            const _ = new Date(new Date().getTime() - _ * 1e3),
              _ = async (_) => {
                const _ = await this.m_CacheStorage?.GetObject(
                  this.GetCacheKeyForAppID(_),
                );
                if (!_) return _;
                let _ = this.m_mapAppInfo.get(_);
                return (
                  (0, _._)(
                    _,
                    "Didn't find AppInfo in our map when loading from cache but it should've been there?",
                  ),
                  _
                    ? ((_ = new _(_)),
                      _.DeserializeFromCacheObject(_),
                      _.is_initialized
                        ? (this.m_mapAppInfo.set(_, _),
                          _.time_updated_from_server < _ ? _ : null)
                        : (console.warn(
                            "Failed to deserialize cached App Info: ",
                            _,
                            _,
                          ),
                          _))
                    : _
                );
              };
            let _ = _.map((_) => _(_));
            return (await Promise.all(_)).filter((_) => _ !== null);
          }
          async SaveAppInfoBatchToLocalCache(_) {
            if (this.m_CacheStorage) {
              console.log(
                "Saving batch of App Info to Local Cache: ",
                _.map((_) => _.appid),
              );
              for (const _ of _) {
                const _ = _.SerializeToCacheObject();
                _ &&
                  this.m_CacheStorage.StoreObject(
                    this.GetCacheKeyForAppID(_.appid),
                    _,
                  );
              }
            }
          }
          Localize(_, _, _) {
            const _ = this.GetRichPresenceLoc(_);
            return _
              ? _.Localize(_, _)
              : _._.EUNIVERSE != _.wLO
                ? (console.log(
                    `Unable to find app localization information for app ${_} token ${_}, this may not have had a chance to load yet`,
                  ),
                  _)
                : "";
          }
          GetRichPresenceLoc(_) {
            if (this.m_mapRichPresenceLoc.has(_.toString())) {
              let _ = this.m_mapRichPresenceLoc.get(_.toString());
              return (
                _.m_nLastUpdated + 1e3 * 60 * _ < Date.now() &&
                  this.QueueRichPresenceLocRequest(_),
                _
              );
            }
            let _ = new _(_);
            return (
              this.m_mapRichPresenceLoc.set(_.toString(), _),
              this.QueueRichPresenceLocRequest(_),
              _
            );
          }
          GetRichPresenceLocAsync(_) {
            let _ = this.GetRichPresenceLoc(_);
            return _.m_nLastUpdated ? Promise.resolve(_) : _.m_fetching;
          }
          OnRichPresenceLocUpdate(_, _) {
            _.m_nLastUpdated = Date.now();
            for (let _ of _) {
              let _ = _.language(),
                _ = _.m_mapLanguages.get(_);
              _
                ? _.clear()
                : (_.m_mapLanguages.set(_, new Map()),
                  (_ = _.m_mapLanguages.get(_)));
              for (let _ of _.tokens())
                _?.set(_.name().toLowerCase(), _.value());
            }
          }
          QueueRichPresenceLocRequest(_) {
            return (
              _.m_fetching ||
                ((_.m_fetching = this.m_CMInterface
                  .WaitUntilLoggedOn()
                  .then(() => {
                    let _ = _._.Init(_._);
                    return (
                      _.Body().set_appid(_.GetAppID()),
                      _.Body().set_language(_._.LANGUAGE),
                      _._.GetAppRichPresenceLocalization(
                        this.m_CMInterface.GetServiceTransport(),
                        _,
                      )
                    );
                  })
                  .then(
                    (_) => (
                      (_.m_fetching = null),
                      _.GetEResult() != _._
                        ? Promise.reject()
                        : (this.OnRichPresenceLocUpdate(
                            _,
                            _.Body().token_lists(),
                          ),
                          Promise.resolve(_))
                    ),
                  )),
                _.m_fetching.catch(() => {
                  _.m_fetching = null;
                })),
              _.m_fetching
            );
          }
        }
        _([_._], _.prototype, "OnGetAppsResponse", 1),
          _([_._], _.prototype, "OnRichPresenceLocUpdate", 1);
        const _ = new _(),
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 256,
          _ = 512,
          _ = 1024,
          _ = 2048,
          _ = 4096,
          _ = 8192;
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _(_) {
          let _ = "offline";
          return (
            _ &&
              (_.is_ingame
                ? (_ = "ingame")
                : _.m_broadcastAccountId
                  ? (_ = "watchingbroadcast")
                  : _.is_online && (_ = "online"),
              _.is_awayOrSnooze && (_ += " awayOrSnooze")),
            _
          );
        }
        class _ {
          m_steamid;
          m_bInitialized = !1;
          m_ePersonaState = _.cU3;
          m_unGamePlayedAppID = 0;
          m_gameid = "0";
          m_unPersonaStateFlags = 0;
          m_strPlayerName = "";
          m_strAvatarHash = _;
          m_strAccountName = "";
          m_rtLastSeenOnline = 0;
          m_strGameExtraInfo = "";
          m_unGameServerIP = 0;
          m_unGameServerPort = 0;
          m_game_lobby_id = "";
          m_bPlayerNamePending = !1;
          m_bAvatarPending = !1;
          m_broadcastId = void 0;
          m_broadcastAccountId = void 0;
          m_broadcastAppId = void 0;
          m_broadcastViewerCount = void 0;
          m_strBroadcastTitle = void 0;
          m_bCommunityBanned = void 0;
          m_eGamingDeviceType = _.eSB;
          m_mapRichPresence = _._.map();
          m_bNameInitialized = !1;
          m_bStatusInitialized = !1;
          m_strProfileURL = void 0;
          constructor(_) {
            (0, _._)(this), (this.m_steamid = _);
          }
          Reset() {
            (this.m_ePersonaState = _.cU3),
              (this.m_unGamePlayedAppID = 0),
              (this.m_gameid = "0"),
              (this.m_strGameExtraInfo = ""),
              (this.m_unGameServerIP = 0),
              (this.m_unGameServerPort = 0),
              (this.m_game_lobby_id = ""),
              this.m_mapRichPresence.clear(),
              (this.m_broadcastId = void 0),
              (this.m_broadcastAccountId = void 0),
              (this.m_broadcastAppId = void 0),
              (this.m_broadcastViewerCount = void 0),
              (this.m_strBroadcastTitle = void 0),
              (this.m_eGamingDeviceType = _.eSB);
          }
          GetAccountID() {
            return this.m_steamid.GetAccountID();
          }
          GetSteamIDAsString() {
            return this.m_steamid.ConvertTo64BitString();
          }
          get is_online() {
            return (
              this.m_ePersonaState != _.cU3 && this.m_ePersonaState != _._3b
            );
          }
          get is_ingame() {
            return (
              this.is_online &&
              (this.m_unGamePlayedAppID != 0 || this.m_gameid != "0")
            );
          }
          get is_watchingbroadcast() {
            return !!this.m_broadcastAccountId;
          }
          get is_in_nonsteam_game() {
            return this.m_unGamePlayedAppID == 0 && this.m_gameid != "0";
          }
          get is_in_joinable_game() {
            return (
              this.has_joinable_game_flag ||
              this.is_in_valid_lobby ||
              this.has_server_ip
            );
          }
          get has_joinable_game_flag() {
            return ((this.m_unPersonaStateFlags ?? 0) & _) != 0;
          }
          get connect_string() {
            return this.m_mapRichPresence.get("connect");
          }
          get is_in_valid_lobby() {
            return this.m_game_lobby_id != null && this.m_game_lobby_id != "0";
          }
          get has_server_ip() {
            return this.m_unGameServerIP != 0;
          }
          get is_awayOrSnooze() {
            return (
              this.m_ePersonaState == _.PrD || this.m_ePersonaState == _.vPz
            );
          }
          HasStateFlag(_) {
            return ((this.m_unPersonaStateFlags ?? 0) & _) != 0;
          }
          get last_seen_online() {
            return this.m_rtLastSeenOnline;
          }
          ClearStateOnDisconnect() {
            this.m_ePersonaState != _.cU3 && this.Reset();
          }
          get is_golden() {
            return this.HasStateFlag(_);
          }
          GetCurrentGameName() {
            return this.m_strGameExtraInfo
              ? this.m_strGameExtraInfo
              : this.m_unGamePlayedAppID
                ? _.GetAppInfo(this.m_unGamePlayedAppID).name
                : "";
          }
          GetCurrentGameIconURL() {
            return this.m_unGamePlayedAppID
              ? _.GetAppInfo(this.m_unGamePlayedAppID).icon_url
              : "";
          }
          BIsAppInfoReady() {
            return this.m_unGamePlayedAppID
              ? _.GetAppInfo(this.m_unGamePlayedAppID).is_initialized
              : !0;
          }
          HasCurrentGameRichPresence() {
            return this.m_mapRichPresence.has("steam_display");
          }
          HasRichPresenceForViewGameInfo() {
            return !!(
              this.m_mapRichPresence.has("status") ||
              this.m_mapRichPresence.has("connect") ||
              this.m_mapRichPresence.has("connect_private")
            );
          }
          GetCurrentGameRichPresence() {
            if (this.HasCurrentGameRichPresence()) {
              let _ = _.GetRichPresenceLoc(this.m_unGamePlayedAppID);
              if (_) {
                let _ = this.m_mapRichPresence.get("steam_display");
                return _.Localize(_, this.m_mapRichPresence);
              }
            } else if (this.HasStateFlag(_))
              return (0, _._)("#PersonaStateRemotePlayTogether");
            return "";
          }
          GetCurrentGameStatus() {
            return (
              this.GetCurrentGameRichPresence() ||
              this.m_mapRichPresence.get("status") ||
              ""
            );
          }
          GetOfflineStatusUpdateRate() {
            if (this.last_seen_online == 0) return 3e4;
            const _ = 60,
              _ = _ * 60,
              _ = _ * 24;
            let _ = 1e3;
            const _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
            return _ > _ ? (_ *= _) : _ > 2 * _ ? (_ *= _) : (_ *= _ / 4), _;
          }
          GetOfflineStatusTime() {
            if (this.last_seen_online == 0)
              return (0, _._)("#PersonaStateOffline");
            let _ = this.GetOfflineStatusUpdateRate();
            (!_._.IN_MOBILE || _ <= 60) && (0, _._)(_);
            let _ = _.CMInterface.GetServerRTime32() - this.last_seen_online;
            return _ < 60
              ? (0, _._)("#PersonaStateLastSeen_JustNow")
              : (0, _._)("#PersonaStateLastSeen", (0, _._)(_));
          }
          GetLocalizedOnlineStatus() {
            switch (this.m_ePersonaState) {
              case _.cU3:
              case _._3b:
                return this.GetOfflineStatusTime();
              case _.UXk:
                return (0, _._)("#PersonaStateOnline");
              case _.wcG:
                return (0, _._)("#PersonaStateBusy");
              case _.PrD:
                return (0, _._)("#PersonaStateAway");
              case _.vPz:
                return (0, _._)("#PersonaStateSnooze");
              case _.Hrn:
                return (0, _._)("#PersonaStateLookingToTrade");
              case _.HAb:
                return (0, _._)("#PersonaStateLookingToPlay");
              default:
                return "";
            }
          }
          get has_public_party_beacon() {
            return this.m_mapRichPresence.has("__beacon") && this.is_ingame;
          }
          get player_group() {
            return this.m_mapRichPresence.has("steam_player_group")
              ? this.m_mapRichPresence.get("steam_player_group")
              : "";
          }
          get player_group_size() {
            return this.m_mapRichPresence.has("steam_player_group_size")
              ? Number.parseInt(
                  this.m_mapRichPresence.get("steam_player_group_size"),
                )
              : 0;
          }
          get online_state() {
            return this.is_online
              ? this.is_ingame
                ? "in-game"
                : this.m_broadcastAccountId
                  ? "watchingbroadcast"
                  : "online"
              : "offline";
          }
          BHasAvatarSet() {
            return this.m_strAvatarHash != _;
          }
          get avatar_url() {
            return _(this.m_strAvatarHash);
          }
          get avatar_url_medium() {
            return _(this.m_strAvatarHash, "medium");
          }
          get avatar_url_full() {
            return _(this.m_strAvatarHash, "full");
          }
          static SortStatusComparator(_, _, _) {
            if (_.has_public_party_beacon) {
              if (!_.has_public_party_beacon) return -1;
            } else {
              if (_.has_public_party_beacon) return 1;
              if (_.is_ingame)
                if (_.is_ingame)
                  if (_) {
                    if (_.is_awayOrSnooze) {
                      if (!_.is_awayOrSnooze) return 1;
                    } else if (_.is_awayOrSnooze) return -1;
                  } else return 0;
                else return -1;
              else if (_.is_ingame) return 1;
            }
            if (_.is_online) {
              if (!_.is_online) return -1;
            } else if (_.is_online) return 1;
            if (_) {
              if (_.is_awayOrSnooze) {
                if (!_.is_awayOrSnooze) return 1;
              } else if (_.is_awayOrSnooze) return -1;
            }
            return 0;
          }
          GetCommunityProfileURL() {
            return this.m_strProfileURL
              ? `${_._.COMMUNITY_BASE_URL}id/${this.m_strProfileURL}/`
              : `${_._.COMMUNITY_BASE_URL}profiles/${this.m_steamid.ConvertTo64BitString()}/`;
          }
        }
        _([_._], _.prototype, "m_bInitialized", 2),
          _([_._], _.prototype, "m_ePersonaState", 2),
          _([_._], _.prototype, "m_unGamePlayedAppID", 2),
          _([_._], _.prototype, "m_gameid", 2),
          _([_._], _.prototype, "m_unPersonaStateFlags", 2),
          _([_._], _.prototype, "m_strPlayerName", 2),
          _([_._], _.prototype, "m_strAvatarHash", 2),
          _([_._], _.prototype, "m_strAccountName", 2),
          _([_._], _.prototype, "m_rtLastSeenOnline", 2),
          _([_._], _.prototype, "m_strGameExtraInfo", 2),
          _([_._], _.prototype, "m_unGameServerIP", 2),
          _([_._], _.prototype, "m_unGameServerPort", 2),
          _([_._], _.prototype, "m_game_lobby_id", 2),
          _([_._], _.prototype, "m_bPlayerNamePending", 2),
          _([_._], _.prototype, "m_bAvatarPending", 2),
          _([_._], _.prototype, "m_broadcastId", 2),
          _([_._], _.prototype, "m_broadcastAccountId", 2),
          _([_._], _.prototype, "m_broadcastAppId", 2),
          _([_._], _.prototype, "m_broadcastViewerCount", 2),
          _([_._], _.prototype, "m_strBroadcastTitle", 2),
          _([_._], _.prototype, "m_bCommunityBanned", 2),
          _([_._], _.prototype, "m_eGamingDeviceType", 2),
          _([_._], _.prototype, "m_bNameInitialized", 2);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_, _) {
          return new (_())(
            async (_) => {
              const _ = [..._],
                _ = await _.xtC.GetPlayerLinkDetails(_, {
                  steamids: _,
                }),
                _ = new Map();
              return (
                _.Body()
                  .accounts()
                  .forEach((_) => {
                    const _ = _.toObject();
                    _.set(_.public_data.steamid, _);
                  }),
                _.map((_) => _.get(_) ?? null)
              );
            },
            {
              maxBatchSize: 100,
              cache: !1,
              ..._,
            },
          );
        }
        function _(_) {
          return useDataLoader("PlayerLinkDetails", () => _(_));
        }
        function _(_) {
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)(_(_, _, _));
        }
        function _(_) {
          const _ = React.useRef(void 0),
            _ = _(_);
          return _.data
            ? _
            : (_.current ||
                (_.current = new CPersonaStateImpl(
                  typeof _ == "string"
                    ? new CSteamID(_)
                    : CSteamID.InitFromAccountID(_),
                )),
              {
                ..._,
                data: _.current,
              });
        }
        function _(_) {
          const _ = useActiveServiceTransport(),
            _ = React.useContext(_);
          return useQueries({
            queries: _.map((_) => _(_, _, _)),
          });
        }
        function _(_) {
          return ReactQueryClient.getQueryData(["PlayerSummary", _]);
        }
        function _(_) {
          const { loadPersonaState: _, children: _ } = _,
            _ = React.useMemo(
              () => ({
                loadPersonaState: _,
              }),
              [_],
            );
          return React.createElement(
            _.Provider,
            {
              value: _,
            },
            _,
          );
        }
        const _ = _.createContext({
          loadPersonaState: async (_, _) => {
            if (_ == null) return null;
            const _ = await _(_).load(
              _._.InitFromAccountID(_).ConvertTo64BitString(),
            );
            return _(_._.InitFromAccountID(_), _);
          },
        });
        function _() {
          return React.useContext(_);
        }
        function _(_, _, _) {
          const _ = typeof _ == "string" ? new _._(_).GetAccountID() : _;
          return {
            queryKey: ["PlayerSummary", _],
            queryFn: () => _.loadPersonaState(_, _),
            enabled: !!_,
          };
        }
        let _;
        function _(_) {
          return (_ ??= _(_));
        }
        function _(_, _) {
          let _ = new _(_);
          const _ = _?.public_data,
            _ = _?.private_data;
          return (
            (_.m_bInitialized = !!_),
            (_.m_ePersonaState = _?.persona_state ?? _.cU3),
            (_.m_strAvatarHash = _?.sha_digest_avatar
              ? (0, _._)(_.sha_digest_avatar)
              : _),
            (_.m_strPlayerName = _?.persona_name ?? _.ConvertTo64BitString()),
            (_.m_strAccountName = _?.account_name),
            _?.persona_state_flags &&
              (_.m_unPersonaStateFlags = _?.persona_state_flags),
            _?.game_id && (_.m_gameid = _?.game_id),
            _?.game_server_ip_address &&
              (_.m_unGameServerIP = _?.game_server_ip_address),
            _?.lobby_steam_id && (_.m_game_lobby_id = _?.lobby_steam_id),
            _?.game_extra_info && (_.m_strGameExtraInfo = _?.game_extra_info),
            _?.profile_url && (_.m_strProfileURL = _.profile_url),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = !0;
        function _(_) {
          let {
              onActivate: _,
              icon: _,
              body: _,
              eUIMode: _,
              classNames: _,
            } = _,
            _ = _,
            _ = _().PinnedTemplate;
          return (
            _ == _.ogI
              ? (_ = _().PinnedTemplateDesktop)
              : _ == _.yrU && (_ = _().PinnedTemplateWeb),
            (_ = (0, _._)(_, _)),
            (0, _.jsx)(_._, {
              className: _,
              onActivate: _,
              children: (0, _.jsx)("div", {
                className: _().Content,
                children: (0, _.jsxs)("div", {
                  className: _().PinnedBody,
                  children: [
                    (0, _.jsx)("span", {
                      className: _().Icon,
                      children: _,
                    }),
                    _,
                  ],
                }),
              }),
            })
          );
        }
        function _(_) {
          const {
            count: _,
            icon: _,
            onActivate: _,
            strBody: _,
            bAlwaysShow: _,
            eUIMode: _,
            classNames: _,
            visible: _,
          } = _;
          return !_ && !_
            ? null
            : (0, _.jsx)(_, {
                icon: _,
                body: _,
                onActivate: _,
                eUIMode: _,
                classNames: _,
                visible: _,
              });
        }
        var _ = ((_) => (
          (_[(_.none = 0)] = "none"),
          (_[(_.loadingActive = 1)] = "loadingActive"),
          (_[(_.loadingComplete = 2)] = "loadingComplete"),
          _
        ))(_ || {});
        function _(_) {
          let {
            nUnread: _,
            location: _,
            eUIMode: _,
            bLoading: _,
            footer: _,
            bNewIndicator: _,
          } = _;
          const [_, _] = _.useState(_ ? 1 : 0),
            [_, _] = _.useState(void 0);
          _.useEffect(() => {
            _ == 1 && !_ ? _(2) : _ == 2 && _ && _(1);
          }, [_, _]),
            _.useEffect(() => {
              let _ =
                parseInt(_().loadinganimationiterationcount) *
                parseInt(_().loadinganimationduration) *
                1e3;
              const _ = window.setTimeout(() => _(0), _);
              return () => window.clearTimeout(_);
            }, []),
            _.useEffect(() => {
              _ && _ > 0 && _ !== _().Unread && _ != _.miK && _ != _.PN1
                ? _(_().Unread)
                : !_ && _ == _().Unread && _(_().MarkedRead);
            }, [_, _, _]);
          let _ = _.onActivate;
          _ || (_ = () => console.log("Missing activate function")),
            _ == 1 && (_ = void 0);
          let _ = _().StandardTemplate;
          _ == _.oYe
            ? (_ = _().AllNotificationsTemplate)
            : _ == _.miK
              ? (_ = _().DesktopToastTemplate)
              : (_ == _.ogI || _ == _.yrU) && (_ = _().StandardTemplateDesktop);
          let _ = null;
          if (_ != 0 && _ != _.miK && _ != _.PN1) {
            let _ = _ == 2 ? _().Hide : null;
            _ = (0, _.jsxs)("div", {
              className: (0, _._)(_().LoadingTemplate, _),
              children: [
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    _().StandardLogoDimensions,
                    _().ShimmerLogo,
                  ),
                }),
                (0, _.jsxs)("div", {
                  className: _().Content,
                  children: [
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().Header, _().ShimmerHeader),
                    }),
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().Body, _().ShimmerBody),
                    }),
                  ],
                }),
              ],
            });
          }
          return (0, _.jsxs)(_._, {
            onActivate: _,
            className: _().StandardTemplateContainer,
            onOptionsButton: _.onOptionsButton,
            onOptionsActionDescription: _.onOptionsButtonDesc,
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_, _),
                children: [
                  (0, _.jsx)("div", {
                    className: _().StandardLogoDimensions,
                    children: _.logo,
                  }),
                  _.personaStatus &&
                    (0, _.jsx)("div", {
                      className: (0, _._)(_().AvatarStatus, _.personaStatus),
                    }),
                  (0, _.jsx)("div", {
                    className: _().Content,
                    children: _.children,
                  }),
                  _,
                  _ &&
                    (0, _.jsx)(_, {
                      location: _,
                    }),
                ],
              }),
              _ || null,
            ],
          });
        }
        function _(_) {
          const { location: _ } = _;
          return !_ || _ != _.B3I
            ? null
            : (0, _.jsx)("div", {
                className: _().NewIndicator,
                children: (0, _.jsx)(_.jlt, {}),
              });
        }
        function _(_) {
          let {
            icon: _,
            title: _,
            timestamp: _,
            location: _,
            fnRenderTimestamp: _,
          } = _;
          const _ = !!_ && (_ == _.B3I || _ == _.oYe);
          let _;
          return (
            _ == _.oYe ? (_ = _) : (_ = _ ?? _),
            (0, _.jsxs)("div", {
              className: _().Header,
              children: [
                (0, _.jsx)(_, {
                  icon: _,
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    title: _,
                  }),
                _ &&
                  _({
                    timestamp: _,
                  }),
              ],
            })
          );
        }
        function _(_) {
          return (0, _.jsxs)(_.Fragment, {
            children: [
              !!_.icon &&
                (0, _.jsx)("div", {
                  className: _().Icon,
                  children: _.icon,
                }),
              " ",
            ],
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().Title,
            children: _.title,
          });
        }
        function _(_) {
          let _ = (0, _._)(
            _().StandardNotificationDescription,
            _.multiline && _().Multiline,
          );
          return (0, _.jsx)("div", {
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          let _ = (0, _._)(
            _().StandardNotificationSubText,
            _.multiline && _().Multiline,
          );
          return (0, _.jsx)("div", {
            className: _,
            children: _.children,
          });
        }
        function _(_) {
          if (_.timestamp === void 0) return null;
          let _ = new Date(),
            _ = new Date(_.timestamp * 1e3),
            _ = (0, _._)(_.timestamp);
          return (
            (0, _._)(_, _) || (_ = (0, _._)(_.timestamp, !1, !1, !1) + " " + _),
            (0, _.jsx)("div", {
              className: _().Timestamp,
              children: _,
            })
          );
        }
        function _(_) {
          if (_.timestamp === void 0) return null;
          let _ = new Date(),
            _ = new Date(_.timestamp * 1e3),
            _ = (0, _._)(_, _)
              ? (0, _._)(_.timestamp)
              : (0, _._)(_.timestamp, !1, !1, !1);
          return (0, _.jsx)("div", {
            className: _().Timestamp,
            children: _,
          });
        }
        function _(_) {
          const { text: _ } = _;
          return jsx("div", {
            className: styles.BottomBar,
            children: _,
          });
        }
        function _(_) {
          let {
              playerName: _,
              nickName: _,
              parenthesizeNickNames: _,
              state: _,
            } = _,
            _ = !!_,
            _ = _ && !_,
            _ = _ ? _ : _,
            _ = _ == "ingame" ? styles.IngameTitle : styles.OnlineTitle;
          return jsxs(Fragment, {
            children: [
              jsx("span", {
                className: classnames(_),
                children: _,
              }),
              _ &&
                _ &&
                jsxs("span", {
                  className: classnames(styles.PlayerNickName, styles.FullName),
                  children: ["(", _, ")"],
                }),
              _ &&
                jsx("span", {
                  className: styles.PlayerNickName,
                  children: " *",
                }),
            ],
          });
        }
        function _(_) {
          return _ == _.PN1;
        }
        function _(_, _) {
          return _.useCallback(
            (_) => {
              _ && _(_), _ && _();
            },
            [_, _],
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          let {
              onActivate: _,
              onDismiss: _,
              logo: _,
              icon: _,
              title: _,
              body: _,
              personaStatus: _,
              className: _,
              singleLineOnly: _,
              fullWidth: _,
            } = _,
            _ = _(_, _),
            _ = (_) => {
              _.button == 1 && _ && _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().ShortTemplate, !_ && _().TwoLine, _),
            onActivate: _,
            onMouseDown: _,
            children: [
              (0, _.jsx)("div", {
                className: _().ShortLogoDimensions,
                children: _,
              }),
              _.personaStatus &&
                (0, _.jsx)("div", {
                  className: (0, _._)(_().AvatarStatus, _),
                }),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().Content, _ && _().FullWidth),
                children: [
                  (0, _.jsxs)("div", {
                    className: _().Header,
                    children: [
                      !!_ &&
                        (0, _.jsx)("div", {
                          className: _().Icon,
                          children: _,
                        }),
                      (0, _.jsx)("div", {
                        className: _().Title,
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _().Body,
                    children: _,
                  }),
                ],
              }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EAppDevsRelationship ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECreatorHomeLinkRole ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    clan_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    relation: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    linkname: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    json: {
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
            return "CDeveloperPageLink";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_account_id || _._(_._()),
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
                    clan_account_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid_list: {
                      _: 2,
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
            return "CDeveloperPageToApps";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    link: {
                      _: 2,
                      _: _,
                    },
                    remove: {
                      _: 3,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    update_json_only: {
                      _: 4,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    skip_clan_permissions: {
                      _: 5,
                      _: !1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    partner_id: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CStoreCatalog_SetDevPageLink_Request";
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
            return "CStoreCatalog_SetDevPageLink_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
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
            return "CStoreCatalog_GetDevPageLinks_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.links || _._(_._()),
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
                    links: {
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
            return "CStoreCatalog_GetDevPageLinks_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_account_ids || _._(_._()),
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
                    clan_account_ids: {
                      _: 1,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    ignore_dlc: {
                      _: 2,
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
            return "CStoreCatalog_GetDevPageAllAppsLinked_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
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
                    results: {
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
            return "CStoreCatalog_GetDevPageAllAppsLinked_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_account_id || _._(_._()),
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
                    clan_account_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    listid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    ignore_dlc: {
                      _: 3,
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
            return "CStoreCatalog_GetDevPageListApps_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apps || _._(_._()),
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
                    apps: {
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
            return "CStoreCatalog_GetDevPageListApps_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    sort_order: {
                      _: 2,
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
            return "CStoreCatalog_GetDevPageListApps_Response_ListApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.partnerid || _._(_._()),
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
                    partnerid: {
                      _: 1,
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
            return "CStoreCatalog_GetDevPagesForPartner_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.results || _._(_._()),
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
                    results: {
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
            return "CStoreCatalog_GetDevPagesForPartner_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_accountid || _._(_._()),
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
                    clan_accountid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    linknames: {
                      _: 2,
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
            return "CStoreCatalog_GetDevPagesForPartner_Response_CDevPageInfo";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "StoreCatalog.SetDevPageLink#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.SetDevPageLink = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPageLinks#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetDevPageLinks = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPageAllAppsLinked#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetDevPageAllAppsLinked = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPageListApps#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetDevPageListApps = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreCatalog.GetDevPagesForPartner#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetDevPagesForPartner = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EStoreCuratorRecommendationState ( " + _ + " )";
        }
        function _(_) {
          return "unknown EStoreCuratorListType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EStoreCuratorListState ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    clanid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    link_url: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    link_text: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    blurb: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    time_recommended: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    comment_count: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    upvote_count: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    accountid_creator: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recommendation_state: {
                      _: 10,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    received_compensation: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    received_for_free: {
                      _: 12,
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
            return "CStoreCuration_RecommendedApp";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.listid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [10, 12, 13, 14], null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    listid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    blurb: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    link: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    list_state: {
                      _: 5,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    sort_order: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_created: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_updated: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    apps: {
                      _: 10,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    list_type: {
                      _: 11,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    title_localization: {
                      _: 12,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                    blurb_localization: {
                      _: 13,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                    link_localization: {
                      _: 14,
                      _: _._,
                      _: !0,
                      _: !0,
                    },
                    sale_clan_steamid: {
                      _: 15,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    sale_clan_event_gid: {
                      _: 16,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    list_jsondata: {
                      _: 17,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    clan_account_id: {
                      _: 18,
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
            return "CStoreCuration_ListDetails";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recommended_app || _._(_._()),
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
                    recommended_app: {
                      _: 1,
                      _: _,
                    },
                    blurb: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sort_order: {
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
            return "CStoreCuration_ListDetails_ListItem";
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
                    list_state: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    start: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    count: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    return_total_only: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    return_metadata_only: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    max_apps: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    sale_clan_event_gid: {
                      _: 8,
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
            return "CStoreCuration_GetLists_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.list_details || _._(_._()),
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
                    list_details: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    total: {
                      _: 2,
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
            return "CStoreCuration_GetLists_Response";
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
                    listid: {
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
            return "CStoreCuration_GetListDetails_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.list_details || _._(_._()),
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
                    list_details: {
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
            return "CStoreCuration_GetListDetails_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg("StoreCuration.GetLists#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["partner"],
            });
          }
          _.GetLists = _;
          function _(_, _, _) {
            return _.SendMsg(
              "StoreCuration.GetListDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetListDetails = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 4,
          _ = 8,
          _ = 16,
          _ = 32,
          _ = 64,
          _ = 128,
          _ = 256;
        function _(_) {
          return "unknown EClanAccountFlags ( " + _ + " )";
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
                    accept: {
                      _: 2,
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
            return "CClan_RespondToClanInvite_Request";
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
            return "CClan_RespondToClanInvite_Response";
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
                    rtime_oldest_date: {
                      _: 2,
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
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.snippets || _._(_._()),
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
                    snippets: {
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
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
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
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    announcement_gid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    hidden: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    published: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    rtime32_start_time: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    event_name: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    event_type: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CClan_GetDraftAndRecentPartnerEventSnippet_Response_CEventSnippetData";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.requests || _._(_._()),
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
                    requests: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    cursor: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    count: {
                      _: 3,
                      _: 100,
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
            return "CClan_GetPartnerEventsByBuildIDRange_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_build_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    end_build_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    branch: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.matches || _._(_._()),
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
                    matches: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    num_total_results: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
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
            return "CClan_GetPartnerEventsByBuildIDRange_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
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
                    appid: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    build_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    branch: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    clan_event_gid: {
                      _: 4,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    clan_account_id: {
                      _: 5,
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
            return "CClan_GetPartnerEventsByBuildIDRange_Response_PatchNotesDesc";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Clan.RespondToClanInvite#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.RespondToClanInvite = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Clan.GetDraftAndRecentPartnerEventSnippet#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetDraftAndRecentPartnerEventSnippet = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Clan.GetPartnerEventsByBuildIDRange#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 1,
                rgBrowserAPISites: ["partner"],
              },
            );
          }
          _.GetPartnerEventsByBuildIDRange = _;
        })(_ || (_ = {}));
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          m_clanSteamID;
          m_appidList = new Array();
          m_strName = "";
          m_strAvatarURLFullSize = "";
          m_strTagLineLoc = "";
          m_nFollowers = 0;
          m_strVanity = "";
          m_webLink = void 0;
          m_linkedEvent = void 0;
          m_mapListInfo = new Map();
          m_promise;
          m_bIsLoaded = !1;
          m_bIsHidden = !1;
          m_clanAccountFlags = 0;
          constructor(_) {
            (0, _._)(this), (this.m_clanSteamID = _);
          }
          Initialize(_) {
            (this.m_strName = _.name || ""),
              (this.m_strAvatarURLFullSize =
                _.avatar_url_full_size ||
                "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"),
              (this.m_strTagLineLoc = _.tag_line_localized || ""),
              (this.m_nFollowers = _.followers || 0),
              (this.m_strVanity = _.vanity || void 0),
              (this.m_webLink = _.weblink),
              (this.m_bIsHidden = _.hidden || !1),
              (this.m_clanAccountFlags = _.clan_account_flags ?? 0),
              (this.m_linkedEvent = _.linked_event),
              (this.m_mapListInfo = new Map(Object.entries(_.list_info ?? {}))),
              _.appids && _.appids.forEach((_) => this.m_appidList.push(_)),
              (this.m_bIsLoaded = !0);
          }
          GetCreatorHomeIdentifier() {
            return {
              name: this.m_strName,
              clan_account_id: this.m_clanSteamID.GetAccountID(),
              type: "developer",
              hidden: this.m_bIsHidden,
            };
          }
          BIsPartnerEventEditorEnabled() {
            return !!(this.m_clanAccountFlags & _);
          }
          BHasClanAccountFlagSet(_) {
            return !!(this.m_clanAccountFlags & _);
          }
          BIsLoaded() {
            return this.m_bIsLoaded;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanSteamID.GetAccountID();
          }
          GetAppIDList() {
            return this.m_appidList;
          }
          GetName() {
            return this.m_strName;
          }
          GetAvatarURLFullSize() {
            return this.m_strAvatarURLFullSize;
          }
          GetTagLine() {
            return this.m_strTagLineLoc;
          }
          GetNumFollowers() {
            return this.m_nFollowers;
          }
          BIsHidden() {
            return this.m_bIsHidden;
          }
          GetCreatorHomeURL(_) {
            if (this.m_strVanity) {
              switch (_) {
                case "publisher":
                  return (
                    _._.STORE_BASE_URL + "publisher/" + this.m_strVanity + "/"
                  );
                case "franchise":
                  return (
                    _._.STORE_BASE_URL + "franchise/" + this.m_strVanity + "/"
                  );
              }
              return _._.STORE_BASE_URL + "developer/" + this.m_strVanity + "/";
            }
            return (
              _._.STORE_BASE_URL +
              "curator/" +
              this.m_clanSteamID.GetAccountID() +
              "/"
            );
          }
          BHasWebLink() {
            return this.m_webLink !== void 0;
          }
          GetWebLink() {
            return this.m_webLink;
          }
          GetVanityString() {
            return this.m_strVanity;
          }
          GetLinkedEventGID() {
            return this.m_linkedEvent;
          }
          GetListInfo() {
            return this.m_mapListInfo;
          }
          AdjustFollower(_) {
            this.m_nFollowers += _;
          }
          async EnablePartnerEventEditorFlag() {
            this.BIsPartnerEventEditorEnabled() ||
              (await this.UpdateGroupFlagsFeature([_, _], !0));
          }
          async UpdateGroupFlagsFeature(_, _) {
            let _ = _._.PARTNER_BASE_URL + "sales/ajaxupdateclanaccountflags",
              _ = this.m_clanAccountFlags;
            if (
              (_.forEach((_) => {
                _ ? (_ |= _) : (_ &= ~_);
              }),
              _ == this.m_clanAccountFlags)
            )
              return;
            let _ = new Array();
            _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_),
              _ & _ && _.push(_);
            let _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("clan_account_id", this.GetClanAccountID().toString()),
              _.append("accountflags", JSON.stringify(_));
            let _ = await _().post(_, _);
            _ &&
              _.status == 200 &&
              _.data.success == _._ &&
              (this.m_clanAccountFlags = _);
          }
        }
        _([_._], _.prototype, "m_appidList", 2),
          _([_._], _.prototype, "m_nFollowers", 2),
          _([_._], _.prototype, "m_clanAccountFlags", 2);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapClanToCreatorHome = new Map();
          m_mapAppToCreatorIDList = new Map();
          m_bLoadedFromConfig = !1;
          m_serviceTransport = void 0;
          LazyInit() {
            if (!this.m_bLoadedFromConfig) {
              const _ = (0, _._)("creatorhome", "application_config");
              this.ValidateStoreDefault(_) &&
                _.forEach((_) => {
                  const _ = Number(_.creator_clan_id),
                    _ = _._.InitFromClanID(_),
                    _ = new _(_);
                  _.Initialize(_),
                    (_.m_promise = _.GetAsPromise(_)),
                    this.m_mapClanToCreatorHome.set(_, _);
                });
              const _ = (0, _._)("creatorhomeforapp", "application_config");
              this.ValidateStoreDefaultAppList(_) &&
                _.forEach((_) => {
                  _.appid !== void 0 &&
                    (this.m_mapAppToCreatorIDList.has(_.appid) ||
                      this.m_mapAppToCreatorIDList.set(_.appid, new Array()),
                    this.m_mapAppToCreatorIDList.get(_.appid).push(_));
                }),
                (this.m_bLoadedFromConfig = !0);
            }
          }
          GetServiceTransport() {
            if (!this.m_serviceTransport) {
              const _ = (0, _._)("loyalty_webapi_token", "application_config"),
                _ = (0, _._)(new _._(_._.WEBAPI_BASE_URL, _ || void 0));
              this.m_serviceTransport = _.GetServiceTransport();
            }
            return this.m_serviceTransport;
          }
          static async GetAsPromise(_) {
            return _;
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].name == "string" &&
                  (typeof _[0].creator_clan_id == "string" ||
                    typeof _[0].creator_clan_id == "number")
              : !1;
          }
          ValidateStoreDefaultAppList(_) {
            const _ = _;
            return _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object"
              ? typeof _[0].clan_account_id == "number" &&
                  _[0].clan_account_id > 0 &&
                  typeof _[0].appid == "number" &&
                  _[0].appid > 0
              : !1;
          }
          BHasCreatorHomeLoaded(_) {
            return (
              this.m_mapClanToCreatorHome.has(_.GetAccountID()) &&
              this.m_mapClanToCreatorHome.get(_.GetAccountID()).BIsLoaded()
            );
          }
          GetCreatorHome(_) {
            return this.m_mapClanToCreatorHome.get(_.GetAccountID());
          }
          GetCreatorHomeByID(_) {
            return this.m_mapClanToCreatorHome.get(_.clan_account_id);
          }
          async LoadCreatorHome(_, _ = !1, _) {
            if (
              (this.LazyInit(),
              _ || !this.m_mapClanToCreatorHome.has(_.GetAccountID()))
            ) {
              let _ = new _(_);
              (_.m_promise = this.InternalCreatorHome(_, _)),
                await _.m_promise,
                this.m_mapClanToCreatorHome.set(_.GetAccountID(), _);
            }
            return this.m_mapClanToCreatorHome.get(_.GetAccountID()).m_promise;
          }
          async InternalCreatorHome(_, _) {
            let _ = {
                get_appids: !0,
                _: _._.LANGUAGE,
              },
              _ =
                _._.STORE_BASE_URL +
                "curator/" +
                _.GetClanAccountID() +
                "/ajaxgetcreatorhomeinfo",
              _ = await _().get(_, {
                params: _,
                cancelToken: _ && _.token,
              });
            return _.Initialize(_.data), _;
          }
          async LoadCreatorHomeListForAppIncludeHiddden(_, _) {
            if ((this.LazyInit(), !this.m_mapAppToCreatorIDList.has(_))) {
              let _ = {
                  appid: _,
                },
                _ = _._.STORE_BASE_URL + "events/ajaxgetcreatorhomeidforapp",
                _ = await _().get(_, {
                  params: _,
                  cancelToken: _ && _.token,
                  withCredentials: !0,
                });
              this.m_mapAppToCreatorIDList.set(_, _.data.creator_list);
            }
            return this.m_mapAppToCreatorIDList.get(_);
          }
          async SearchCreatorHomeStore(_, _, _) {
            let _ = `${_._.STORE_BASE_URL}curator/0/ajaxsearchcurators`,
              _ = {
                term: _.replace(" ", "+"),
                require_creator: _,
                _: _._.COUNTRY,
                _: _._.LANGUAGE,
                origin: self.origin,
              },
              _ = new Array();
            const _ = await _().get(_, {
              params: _,
              cancelToken: _.token,
            });
            return (
              _.data.curators &&
                (0, _._)(() => {
                  _.data.curators.forEach((_) => {
                    if (!this.m_mapClanToCreatorHome.has(_.creator_clan_id)) {
                      let _ = _._.InitFromClanID(_.creator_clan_id),
                        _ = new _(_);
                      _.Initialize(_),
                        this.m_mapClanToCreatorHome.set(_.creator_clan_id, _);
                    }
                    _.push(this.m_mapClanToCreatorHome.get(_.creator_clan_id));
                  });
                }),
              _
            );
          }
          GetCreatorHomeListForAppIncludeHidden(_) {
            return this.m_mapAppToCreatorIDList.has(_)
              ? this.m_mapAppToCreatorIDList.get(_)
              : [];
          }
        };
        _([_._], _.prototype, "m_mapClanToCreatorHome", 2),
          _([_._], _.prototype, "m_mapAppToCreatorIDList", 2),
          _([_._], _.prototype, "LazyInit", 1);
        let _ = _;
        const _ = new _();
        (0, _._)("g_CreatorHomeStore", _);
        function _(_) {
          if (!_) return null;
          const _ = _.BHasCreatorHomeLoaded(_.clanSteamID)
            ? _.GetCreatorHome(_.clanSteamID)
            : void 0;
          return _.GetSaleURL(_?.GetCreatorHomeURL("developer"));
        }
        function _(_) {
          if (!_) return;
          const _ = GetConfigJSON(
            "creator_home_list_info",
            "application_config",
          );
          if (_ == null || typeof _ != "object" || Array.isArray(_)) return;
          const _ = _[_];
          if (!(!_ || !_.title))
            return {
              title: _.title,
              description: _.description?.length ? _.description : void 0,
              imageUrl: _.listtileimage?.length ? _.listtileimage : void 0,
            };
        }
        function _(_) {
          return _(_)?.title;
        }
        function _(_) {
          return _(_)?.description;
        }
        function _(_) {
          return _(_)?.imageUrl;
        }
        function _(_) {
          const _ = CSteamID.InitFromClanID(_);
          return {
            queryKey: ["CreatorHome", _],
            initialData: () => _.GetCreatorHome(_),
            queryFn: async () => {
              const _ = CSteamID.InitFromClanID(_);
              return await _.LoadCreatorHome(_, !0);
            },
          };
        }
        function _(_) {
          const { data: _, isFetching: _, refetch: _ } = useQuery(_(_));
          return {
            creatorHome: _,
            isFetching: _,
            refetch: _,
          };
        }
        function _(_, _, _) {
          const _ = useQuery({
            queryKey: ["useCreateHomeLinkedApps", _, _],
            queryFn: async () => {
              const _ = CProtoBufMsg.Init(
                CStoreCatalog_GetDevPageAllAppsLinked_Request,
              );
              _.Body().add_clan_account_ids(_),
                _ && _.Body().set_ignore_dlc(!0);
              const _ = await StoreCatalogService.GetDevPageAllAppsLinked(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from useCreateHomeLinkedApps: ${_.GetEResult()}`,
                );
              return _.Body().results().length == 0
                ? []
                : _.Body().results()[0].appid_list();
            },
            enabled: !!(_ > 0 && _),
          });
          return _?.isLoading ? null : _.data;
        }
        function _(_, _, _) {
          return {
            queryKey: ["GetCreatorHomeListAppsQuery", _, _, _],
            queryFn: async () => {
              const _ = _.GetServiceTransport(),
                _ = CProtoBufMsg.Init(CStoreCatalog_GetDevPageListApps_Request);
              _.Body().set_clan_account_id(_),
                _.Body().set_listid(_),
                _ && _.Body().set_ignore_dlc(!0);
              const _ = await StoreCatalogService.GetDevPageListApps(_, _);
              if (_.GetEResult() != k_EResultOK)
                throw new Error(
                  `Error from GetCreatorHomeListAppsQuery: ${_.GetEResult()}`,
                );
              return _.Body()
                .apps()
                .slice()
                .sort((_, _) => (_.sort_order() ?? 0) - (_.sort_order() ?? 0))
                .map((_) => _.appid() ?? 0)
                .filter((_) => _ > 0);
            },
            enabled: !!(_ > 0 && _),
          };
        }
        function _(_, _, _) {
          const _ = useQuery(_(_, _, _));
          return _?.isLoading ? null : _.data;
        }
        function _(_, _) {
          return {
            queryKey: ["GetCreatorHomeGetAllListsQuery", _, _],
            queryFn: async () => {
              const _ = _.GetServiceTransport(),
                _ = CProtoBufMsg.Init(CStoreCuration_GetLists_Request);
              _.Body().set_steamid(
                new CSteamID(
                  _,
                  Config.EUNIVERSE,
                  k_EAccountTypeClan,
                  0,
                ).ConvertTo64BitString(),
              ),
                _.Body().set_count(100);
              const _ = await StoreCurationService.GetLists(_, _);
              return _.BSuccess()
                ? _.Body()
                    .list_details()
                    .filter(
                      (_) =>
                        _ ||
                        _.list_state() !=
                          EStoreCuratorListState.k_EStoreCuratorListState_Hidden,
                    )
                : null;
            },
            enabled: _ > 0,
          };
        }
        function _(_, _) {
          const { data: _, isFetching: _, refetch: _ } = useQuery(_(_, _));
          return {
            lists: _,
            isFetching: _,
            refetch: _,
          };
        }
        function _(_, _) {
          return {
            queryKey: ["GetCreatorHomeGetListsDetailsQuery", _, _],
            queryFn: async () => {
              const _ = _.GetServiceTransport(),
                _ = CProtoBufMsg.Init(CStoreCuration_GetListDetails_Request);
              _.Body().set_steamid(
                new CSteamID(
                  _,
                  Config.EUNIVERSE,
                  k_EAccountTypeClan,
                  0,
                ).ConvertTo64BitString(),
              ),
                _.Body().set_listid(_);
              const _ = await StoreCurationService.GetListDetails(_, _);
              return _.BSuccess() ? (_.Body().list_details() ?? null) : null;
            },
            enabled: _ > 0,
          };
        }
        function _(_, _) {
          const { data: _, isFetching: _, refetch: _ } = useQuery(_(_, _));
          return {
            list: _,
            isFetching: _,
            refetch: _,
          };
        }
        var _ = __webpack_require__("chunkid");
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}ogg/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = _._.InitFromClanID(_),
            _ = `${_._.COMMUNITY_BASE_URL}gid/${_.ConvertTo64BitString()}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}groups/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = `${_._.COMMUNITY_BASE_URL}games/${_}/ajaxgetvanityandclanid/?origin=${location.origin}`;
          return _(_);
        }
        async function _(_) {
          const _ = await fetch(_, {
            method: "GET",
          });
          if (_.status == 404) return null;
          if (!_._) throw new Error(`Server returned ${_.status}`);
          const _ = await _.json();
          return _.success != _._ ? null : _;
        }
        function _(_) {
          return ["clantoclaninfo", _];
        }
        function _(_) {
          return ["apptoclanid", _];
        }
        function _(_, _ = "group") {
          return ["vanitytoclanid", _, _?.toLocaleLowerCase()];
        }
        function _(_) {
          const _ = _?.[0];
          return (
            _ == "clantoclaninfo" || _ == "apptoclanid" || _ == "vanitytoclanid"
          );
        }
        const _ = new WeakSet();
        function _(_) {
          if (!_.has(_)) {
            _.add(_);
            for (const _ of [
              ["clantoclaninfo"],
              ["apptoclanid"],
              ["vanitytoclanid"],
            ])
              _.setQueryDefaults(_, {
                staleTime: 1 / 0,
                gcTime: 1 / 0,
                retry: !1,
              });
          }
        }
        const _ = new WeakMap();
        function _(_) {
          if (!_) return null;
          let _ = _.get(_);
          return (
            _ ||
              ((_ = {
                ..._,
                clanSteamID: _.clanSteamIDString
                  ? new _._(_.clanSteamIDString)
                  : _._.InitFromClanID(_.clanAccountID),
              }),
              _.set(_, _)),
            _
          );
        }
        function _(_) {
          const { msg: _, success: _, ..._ } = _;
          return {
            ..._,
            rss_language: _.rss_language ? _.rss_language : _.Bhc,
          };
        }
        function _(_, _) {
          if (!_) return null;
          _(_);
          const _ = _(_);
          return (
            _.setQueryData(_(_.clanAccountID), _),
            _.appid && _.setQueryData(_(_.appid), _.clanAccountID),
            _.vanity_url &&
              _.setQueryData(_(_.vanity_url, "group"), _.clanAccountID),
            _
          );
        }
        function _(_, _) {
          for (const _ of _) _(_, _);
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)(_(_, _));
        }
        function _(_, _) {
          return (
            _(_),
            {
              queryKey: _(_ ?? null),
              queryFn: async () => (_ ? _(_, await _(_)) : null),
              enabled: _ !== void 0,
              select: _,
            }
          );
        }
        function _(_, _) {
          return (
            _(_),
            {
              queryKey: _(_),
              queryFn: async () => _(_, await _(_))?.clanAccountID ?? null,
              enabled: !!_,
            }
          );
        }
        function _(_, _, _ = "group") {
          return (
            _(_),
            {
              queryKey: _(_, _),
              queryFn: async () => {
                if (_ == "store") {
                  const _ = _.getQueryData(_(_, "group"));
                  if (_) return _;
                }
                const _ = _ == "store" ? await _(_) : await _(_);
                return _(_, _)?.clanAccountID ?? null;
              },
              enabled: !!_,
            }
          );
        }
        function _(_) {
          return _.isPending ? void 0 : (_.data ?? null);
        }
        function _(_) {
          return _(_.BIsClanAccount() ? _.GetAccountID() : void 0);
        }
        function _(_) {
          const _ = useQueryClient(),
            _ = useQuery(_(_, _));
          return _(_ ? _(_) : void 0);
        }
        function _(_, _ = "group") {
          const _ = useQueryClient(),
            _ = useQuery(_(_, _, _));
          return _(_ ? _(_) : void 0);
        }
        function _(_, _) {
          if (_) return _(_.getQueryData(_(_))) ?? void 0;
        }
        function _(_, _) {
          if (_) return _(_.getQueryData(_(_)), _);
        }
        function _(_, _, _) {
          if (!_) return;
          const _ = _ ? [_] : ["store", "group"];
          for (const _ of _) {
            const _ = _(_.getQueryData(_(_, _)), _);
            if (_) return _;
          }
        }
        async function _(_, _) {
          return _ ? _(await _.fetchQuery(_(_, _))) : null;
        }
        async function _(_, _) {
          return _ ? _(await _.fetchQuery(_(_, _)), _) : null;
        }
        async function _(_, _, _ = "group") {
          return _ ? _(await _.fetchQuery(_(_, _, _)), _) : null;
        }
        const _ = new WeakSet();
        function _(_ = _._) {
          if (typeof window > "u" || typeof document > "u" || _.has(_)) return;
          const _ = (0, _._)("groupvanityinfo", "application_config");
          (_ === void 0 && document.readyState != "complete") ||
            (_.add(_), _(_) && _(_, _));
        }
        function _(_) {
          const _ = _;
          return _ &&
            Array.isArray(_) &&
            _.length > 0 &&
            typeof _[0] == "object"
            ? typeof _[0].clanAccountID == "number" &&
                (typeof _[0].appid == "number" ||
                  typeof _[0].vanity_url == "string")
            : !1;
        }
        function _(_) {
          return typeof _ == "string" ? parseInt(_) : _;
        }
        function _(_) {
          return typeof _ == "string" ? Number.parseInt(_) : _;
        }
        class _ {
          m_queryClient = _._;
          m_boxCacheVersion = _._.box(0);
          m_bWatchingCache = !1;
          m_bBumpScheduled = !1;
          Init() {
            this.LazyInit();
          }
          LazyInit() {
            _(this.m_queryClient),
              this.m_bWatchingCache ||
                ((this.m_bWatchingCache = !0),
                this.m_queryClient.getQueryCache().subscribe((_) => {
                  (_?.type != "added" &&
                    _?.type != "updated" &&
                    _?.type != "removed") ||
                    (_(_.query?.queryKey) && this.ScheduleCacheVersionBump());
                }));
          }
          ScheduleCacheVersionBump() {
            this.m_bBumpScheduled ||
              ((this.m_bBumpScheduled = !0),
              queueMicrotask(() => {
                (this.m_bBumpScheduled = !1),
                  (0, _._)(() =>
                    this.m_boxCacheVersion.set(
                      this.m_boxCacheVersion.get() + 1,
                    ),
                  );
              }));
          }
          ReadCache() {
            return (
              this.LazyInit(), this.m_boxCacheVersion.get(), this.m_queryClient
            );
          }
          AddGroupVanities(_) {
            this.LazyInit(), _(_) && _(this.m_queryClient, _);
          }
          BHasClanInfoLoaded(_) {
            return (
              (0, _._)(_.BIsValid(), "Clan SteamID is not valid when ClanInfo"),
              (0, _._)(
                _.BIsClanAccount(),
                "Clan SteamID is not a clan account id when requesting clan info ",
              ),
              this.BHasClanInfoLoadedByAccountID(_.GetAccountID())
            );
          }
          BHasClanInfoLoadedByAccountID(_) {
            return !!_(_(_), this.ReadCache());
          }
          RegisterClanData(_) {
            this.LazyInit(), _(this.m_queryClient, _);
          }
          async LoadOGGClanInfoForAppID(_) {
            return (
              this.LazyInit(),
              (_ = _(_)),
              (0, _._)(
                _ != 0,
                "LoadOGGClanInfoForAppID called with appid of zero",
              ),
              _ == 0 ? null : _(_, this.m_queryClient).catch(() => null)
            );
          }
          async LoadOGGClanInfoForIdentifier(_) {
            return this.LazyInit(), _(_, this.m_queryClient, "store");
          }
          async LoadOGGClanInfoForGroupVanity(_) {
            return this.LazyInit(), _(_, this.m_queryClient, "group");
          }
          async LoadClanInfoForClanSteamID(_) {
            return this.LoadClanInfoForClanAccountID(_.GetAccountID());
          }
          async LoadClanInfoForClanAccountID(_) {
            return this.LazyInit(), _(_(_), this.m_queryClient);
          }
          GetOGGClanInfo(_) {
            const _ = this.ReadCache();
            return typeof _ == "string" ? _(_, _) : _(_, _);
          }
          GetClanSteamIDForAppID(_) {
            const _ = _(_(_), this.ReadCache());
            return _ ? _._.InitFromClanID(_.clanAccountID) : void 0;
          }
          GetClanVanityForAppID(_) {
            return _(_(_), this.ReadCache())?.vanity_url;
          }
          GetClanVanityForClanSteamID(_) {
            return _(_.GetAccountID(), this.ReadCache())?.vanity_url;
          }
          HasLoadedClanAccountID(_) {
            return this.BHasClanInfoLoadedByAccountID(_);
          }
          GetClanMemberCount(_) {
            return _(_(_), this.ReadCache())?.member_count ?? 0;
          }
          GetClanInfoByClanAccountID(_) {
            return (
              (0, _._)(
                !!_,
                "Unepxected clanid when requesting information. GetClanInfoByClanAccountID ",
              ),
              _(_(_), this.ReadCache())
            );
          }
          GetCreatorStoreURL(_) {
            let _ = _.GetCreatorHome(_);
            if (_) return _.GetCreatorHomeURL("developer");
            let _ = this.GetClanInfoByClanAccountID(_.GetAccountID());
            return (
              _._.COMMUNITY_BASE_URL +
              (_.vanity_url
                ? "groups/" + _.vanity_url
                : "gid/" + _.ConvertTo64BitString())
            );
          }
        }
        const _ = new _();
        (0, _._)("g_ClanStore", _);
        function _() {
          const _ = (0, _._)();
          return _(_), _;
        }
        function _(_) {
          _();
          const { data: _, isPending: _ } = _(_ ? _(_) : void 0);
          return [!!_ && _, _ ?? void 0];
        }
        function _(_) {
          const _ = _();
          useEffect(() => {
            _ &&
              FetchClanInfoByAccountID(_(_), _).catch((_) =>
                console.error(`Failed to hint load clan info ${_}`, _),
              );
          }, [_, _]);
        }
        function _(_) {
          return _(), useClanInfoByVanityQuery(_).data ?? null;
        }
        function _(_) {
          _();
          const _ = _ ? _(_) : void 0,
            { data: _, isPending: _ } = useClanInfoByAppIDQuery(_);
          return {
            bLoadingClanInfo: !!_ && _,
            clanInfo: _ ?? null,
          };
        }
        function _(_, _) {
          if (_.BIsOGGEvent())
            return {
              bVisible: !1,
            };
          if (_.GetEventType() == k_EClanEventType_CreatorHome)
            return {
              bVisible: !1,
            };
          if (_.BHasSaleEnabled())
            return {
              bVisible: !0,
            };
          if (
            _.jsondata.clone_from_event_gid &&
            _.jsondata.clone_from_sale_enabled
          )
            return {
              bVisible: !0,
            };
          if (_.clanSteamID.GetAccountID() == getMeetSteamClanID())
            return {
              bVisible: !1,
            };
          const _ = g_CreatorHomeStore.GetCreatorHome(_.clanSteamID);
          return _ &&
            _.BHasClanAccountFlagSet(
              EClanAccountFlags.k_EClanAccountFlag_AllowSalePageEditing,
            )
            ? {
                bVisible: !0,
              }
            : _
              ? {
                  bVisible: !0,
                  bValveOnly: !0,
                }
              : {
                  bVisible: !1,
                };
        }
        function _(_, _) {
          return _.BIsOGGEvent()
            ? _.BHasSaleEnabled()
              ? {
                  bVisible: !0,
                }
              : Config.EUNIVERSE == k_EUniversePublic
                ? {
                    bVisible: !1,
                  }
                : _
                  ? _.GetEventType() == k_EClanEventType_MajorUpdateEvent
                    ? {
                        bVisible: !0,
                        bValveOnly: !0,
                      }
                    : {
                        bVisible: !1,
                      }
                  : {
                      bVisible: !1,
                    }
            : {
                bVisible: !1,
              };
        }
        function _(_) {
          return _.BIsOGGEvent()
            ? {
                bVisible: !1,
              }
            : _.GetEventType() != k_EClanEventType_CreatorHome
              ? {
                  bVisible: !1,
                }
              : _.BHasSaleEnabled()
                ? {
                    bVisible: !0,
                  }
                : _.clanSteamID.GetAccountID() == getMeetSteamClanID()
                  ? {
                      bVisible: !1,
                    }
                  : {
                      bVisible: !1,
                    };
        }
        var _ = __webpack_require__("chunkid");
        function _(_, _) {
          if (_[_]) {
            if (_ == "community_icon") {
              const _ = _.asset_url_format
                .replace(/^steam\//, "images/")
                .replace("${FILENAME}", `${_[_]}.jpg`)
                .replace(/\?.*$/, "");
              return `${_._.MEDIA_CDN_COMMUNITY_URL}${_}`;
            } else if (typeof _[_] == "string") {
              const _ = _.asset_url_format.replace("${FILENAME}", _[_]);
              return `${_._.STORE_ITEM_BASE_URL}${_}`;
            }
          }
        }
        function _(_, _ = "full") {
          let _ = "";
          switch (_) {
            case "thumb":
              _ = ".116x65";
              break;
            case "600x338":
              _ = ".600x338";
              break;
            case "1920x1080":
              _ = ".1920x1080";
              break;
            case "full":
              _ = "";
              break;
            default:
              AssertNever(_, `Invalid size: ${_}`);
              break;
          }
          return (
            Config.STORE_ITEM_BASE_URL +
            _.filename.replace(/\.([^.]+)(\?.*)?$/, `${_}.$1$2`)
          );
        }
        function _(_) {
          const { data: _ } = useStoreItemScreenshots(_),
            _ = useShouldShowAllAgesMediaOnly();
          if (_)
            return [
              ...(_.all_ages_screenshots || []),
              ...(!_ && _.mature_content_screenshots
                ? _.mature_content_screenshots
                : []),
            ].sort((_, _) => _.ordinal - _.ordinal);
        }
        function _(_, _ = !1) {
          const { data: _ } = useStoreItemAssets({
            appid: _,
          });
          if (_ !== void 0)
            return _ === null
              ? null
              : _ && _.library_capsule_2x
                ? _(_, "library_capsule_2x")
                : _.library_capsule
                  ? _(_, "library_capsule")
                  : `${Config.STORE_ITEM_BASE_URL}steam/apps/${_}/portrait.png`;
        }
        function _(_, ..._) {
          const { data: _ } = useStoreItemAssets(_);
          return _(_, ..._);
        }
        function _(_, ..._) {
          if (!_?.asset_url_format) return;
          const _ = _.find((_) => {
            const _ = _[_];
            return typeof _ == "string" && _.trim() !== "";
          });
          return _ && _(_, _);
        }
        function _(_) {
          switch (_) {
            case _:
              return (0, _.jsx)(_.ilR, {});
            case _:
              return (0, _.jsx)(_.Cv4, {});
            default:
              return (0, _.jsx)(_.Qte, {});
          }
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = typeof _?.image == "number",
            _ = _
              ? {
                  appid: _.image,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _?.display_name ?? "",
            _ = _?.title ?? _?.body,
            _ = _?.title ? _.body : null,
            _ = _(_),
            _ = _ && (!_ || !_),
            [_, _] = _.useState(!1),
            _ = () => _(!0);
          let _ = null;
          if (_) _ = _(_, _, _);
          else {
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ =
              _?.image && !_
                ? (0, _.jsx)("img", {
                    className: _,
                    src: _.image,
                    onError: _,
                  })
                : _;
          }
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            displayName: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = (0, _._)("#SteamNotifications_TradeOffer_Title"),
            _ = _
              ? (0, _._)("#SteamNotifications_TradeOffer_Body_Short", _ ?? "")
              : (0, _._)("#SteamNotifications_TradeOffer_Body"),
            _ = (0, _._)("#SteamNotifications_TradeOffer_Description", _ ?? ""),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        const _ = (_) => {
          let {
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = (0, _._)("#SteamNotifications_TradeReversal_Title"),
            _ = _
              ? (0, _._)("#SteamNotifications_TradeReversal_Body_Short")
              : (0, _._)("#SteamNotifications_TradeReversal_Body"),
            _ = (0, _._)("#SteamNotifications_TradeReversal_Description");
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        };
        function _(_) {
          let {
            senderName: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _
              ? (0, _._)("#Notification_GiftReceived_Body_Short", _ ?? "")
              : (0, _._)("#Notification_GiftReceived_Body"),
            _ = _
              ? (0, _._)("#Notification_GiftReceived_Description", _)
              : null,
            _ = (0, _._)("#Notification_GiftReceived_Title"),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _.logo,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            requestorName: _,
            requestorAvatarURL: _,
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_);
          let _ = "";
          _ && _.state == _.UXi
            ? (_ = (0, _._)(
                "#SteamNotifications_FriendInvite_Description_AwaitingResponse",
              ))
            : _ && _.state == _._UC
              ? (_ = (0, _._)(
                  "#SteamNotifications_FriendInvite_Description_Friends",
                ))
              : _ &&
                (_ = (0, _._)("#SteamNotifications_FriendInvite_Description"));
          const [_, _] = _.useState(!1),
            _ = () => _(!0);
          let _ = _;
          if (_ && !_) {
            const _ = _.state == _._UC && _ != _.PN1,
              _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ = (0, _.jsxs)(_._, {
              style: {
                position: "relative",
              },
              children: [
                _ &&
                  (0, _.jsx)(_.GSe, {
                    className: _().FriendIndicator,
                  }),
                (0, _.jsx)("img", {
                  className: _,
                  src: _,
                  onError: _,
                }),
              ],
            });
          }
          const _ =
              _ || (0, _._)("#SteamNotifications_FriendInvite_Body_Generic"),
            _ = !_;
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#Notification_FriendInvite_Title"),
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: (0, _._)("#Notification_FriendInvite_Title"),
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            itemState: _,
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            appName: _,
            fnRenderTimestamp: _,
            nUnread: _,
            onHide: _,
          } = _;
          const [_, _] = _.useState(!1),
            _ = () => _(!0),
            _ = _(_);
          let _ = _;
          if (_?.icon_url && !_) {
            let _ = `${_._.COMMUNITY_CDN_URL}economy/image/${_.icon_url}`,
              _ = _.background_color ? "#" + _.background_color : null;
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            _ = (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("img", {
                className: _,
                style: {
                  backgroundColor: _ ?? void 0,
                  justifyContent: "center",
                },
                src: _,
                onError: _,
              }),
            });
          }
          const _ = _.appid == 753;
          let _ = null;
          if (_ !== void 0 && _ > 1) {
            const _ = _ - 1;
            _
              ? (_ = (0, _._)("#Notification_Item_RollupMore_Steam", _))
              : _
                ? (_ = (0, _._)("#Notification_Item_RollupMore_GameName", _, _))
                : (_ = (0, _._)("#Notification_Item_RollupMore", _));
          } else
            _ &&
              (_ = _ ? _ : (0, _._)("#Notification_Item_Single_GameName", _));
          const _ = _?.name
              ? _.name
              : (0, _._)("#Notification_Item_Body_Generic"),
            _ = !_;
          if (_) {
            let _ = "";
            return (
              _
                ? (_ =
                    _ > 1
                      ? (0, _._)("#Notification_Item_Body_Short_Plural", _)
                      : (0, _._)("#Notification_Item_Body_Short", _))
                : (_ = (0, _._)("#Notification_Item_Body_Generic")),
              (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#Notification_ItemAnnouncement_Body"),
                body: _,
              })
            );
          }
          return (0, _.jsx)(_, {
            children: (0, _.jsxs)(_, {
              logo: _,
              bLoading: _,
              ..._,
              children: [
                (0, _.jsx)(_, {
                  icon: _,
                  title: (0, _._)("#Notification_ItemAnnouncement_TitleLong"),
                  timestamp: _,
                  location: _,
                  fnRenderTimestamp: _,
                }),
                (0, _.jsx)(_, {
                  multiline: !_,
                  children: _,
                }),
                !!_ &&
                  (0, _.jsx)(_, {
                    children: _,
                  }),
                _
                  ? (0, _.jsx)(_, {
                      onHide: _,
                    })
                  : null,
              ],
            }),
          });
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_, _, _),
            _ = _ && (!_ || !_);
          let _ = "";
          return (
            _.state == _
              ? (_ =
                  _ && _?.name
                    ? (0, _._)(
                        "#SteamNotification_AsyncGame_Action_Short",
                        _.name,
                      )
                    : (0, _._)("#SteamNotification_AsyncGame_Action"))
              : _.state == _ &&
                (_ =
                  _ && _?.name
                    ? (0, _._)(
                        "#SteamNotification_AsyncGame_Done_Short",
                        _.name,
                      )
                    : (0, _._)("#SteamNotification_AsyncGame_Done")),
            _
              ? (0, _.jsx)(_, {
                  ..._,
                  logo: _,
                  icon: _.icon,
                  title: (0, _._)("#SteamNotification_AsyncGame_Title"),
                  body: _,
                })
              : (0, _.jsx)(_, {
                  children: (0, _.jsxs)(_, {
                    logo: _,
                    bLoading: _,
                    ..._,
                    children: [
                      (0, _.jsx)(_, {
                        icon: _,
                        title: (0, _._)("#SteamNotification_AsyncGame_Title"),
                        timestamp: _,
                        location: _,
                        fnRenderTimestamp: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                      (0, _.jsx)(_, {
                        children: _?.name,
                      }),
                      _
                        ? (0, _.jsx)(_, {
                            onHide: _,
                          })
                        : null,
                    ],
                  }),
                })
          );
        }
        function _(_) {
          const {
              title: _,
              body: _,
              logoUrl: _,
              bDataLoading: _,
              icon: _,
              onHide: _,
              location: _,
              timestamp: _,
              fnRenderTimestamp: _,
              onActivate: _,
              personaStatus: _,
            } = _,
            _ = _(_),
            _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions,
            _ = (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: (0, _.jsx)("img", {
                className: _,
                style: {
                  justifyContent: "center",
                },
                src: _,
              }),
            });
          return _
            ? (0, _.jsx)(_, {
                logo: _,
                icon: _.icon,
                title: _,
                body: _,
                onActivate: _,
                personaStatus: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  onActivate: _,
                  personaStatus: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !0,
                      children: _,
                    }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
              currentUserSteamID: _,
              fallbackLogo: _,
              postedByDisplayName: _,
              postedByAvatarURL: _,
              ownerDisplayName: _,
              data: _,
              location: _,
              icon: _,
              timestamp: _,
              fnRenderTimestamp: _,
              nUnread: _,
              appName: _,
              onHide: _,
              commentTitle: _,
              commentBody: _,
            } = _,
            _ = _;
          const _ = _(_),
            [_, _] = _.useState(!1),
            _ = () => _(!0),
            [_, _] = _(
              _.bclan_account ? _.owner_steam_id?.GetAccountID() : void 0,
            ),
            _ = _(_) ? _ : null,
            _ = _(_) ? _ : null;
          _.comment_type == _
            ? _.owner_steam_id?.ConvertTo64BitString() == _
              ? _ == _.oYe && _
                ? (_ = (0, _._)(
                    "#SteamNotifications_Comment_Your_Profile_By",
                    _,
                  ))
                : (_ = (0, _._)("#SteamNotifications_Comment_Your_Profile"))
              : _
                ? _ == _.oYe && _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Player_Profile_By",
                      _,
                      _,
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Comment_Player_Profile",
                      _,
                    ))
                : (_ = (0, _._)("#SteamNotifications_Comment_Profile"))
            : _.comment_type == _ && _.json_data?.file_type == _.pmA
              ? _.owner_steam_id?.ConvertTo64BitString() == _
                ? _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Your_Screenshot_Game",
                      _,
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Comment_Your_Screenshot",
                    ))
                : _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Comment_Screenshot_Game",
                      _,
                    ))
                  : (_ = (0, _._)("#SteamNotifications_Comment_Screenshot"))
              : !_ && _.json_data?.title && (_ = _.json_data.title);
          let _ = null;
          _.brate_limited
            ? _.comment_type == _ && _.bis_forum && _
              ? (_ = (0, _._)(
                  "#SteamNotifications_Comment_RateLimited_Forum",
                  _,
                ))
              : (_ = (0, _._)("#SteamNotifications_Comment_RateLimited"))
            : _.comment_type == _ && _.bis_forum && _
              ? (_ = (0, _.jsx)(_, {
                  children: (0, _._)(
                    "#SteamNotifications_Comment_NewDiscussion",
                    _,
                  ),
                }))
              : (_ = (0, _.jsxs)(_, {
                  children: ['"', _, '"'],
                }));
          let _ = (0, _._)("#SteamNotifications_Comment"),
            _ = null;
          if (_ !== void 0 && _ > 1) {
            const _ = "+" + (_ - 1);
            _ == _.oYe
              ? (_ = (0, _.jsx)("div", {
                  className: _().AllNotificationsCommentPlus,
                  children: _,
                }))
              : (_ = _ + " " + _);
          }
          let _ = _;
          if (!_) {
            const _ = _ ? _().ShortLogoDimensions : _().StandardLogoDimensions;
            if (_ && _(_)) {
              const _ = _.bhas_friend && _ != _.PN1;
              _ = (0, _.jsxs)("div", {
                style: {
                  position: "relative",
                },
                children: [
                  _ &&
                    (0, _.jsx)(_.GSe, {
                      className: _().FriendIndicator,
                    }),
                  (0, _.jsx)("img", {
                    className: _,
                    src: _,
                    onError: _,
                  }),
                ],
              });
            } else
              _?.avatar_medium_url &&
                (_ = (0, _.jsx)("img", {
                  className: _,
                  src: _.avatar_medium_url,
                  onError: _,
                }));
          }
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: _,
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: _,
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      children: _,
                    }),
                    _,
                    _,
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_) {
          let {
            fallbackLogo: _,
            data: _,
            location: _,
            icon: _,
            timestamp: _,
            fnRenderTimestamp: _,
            onHide: _,
          } = _;
          const _ = _(_),
            _ = _.appid
              ? {
                  appid: _.appid,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = _(_, _, _),
            _ = _ && (!_ || !_ || !_);
          let _ = "",
            _ = null;
          if (_) {
            const _ = _.name ?? "";
            (_ = _),
              _.count == 1
                ? _
                  ? (_ = (0, _._)(
                      "#SteamNotifications_Wishlist_OnSale_Single_Short",
                      (0, _.jsx)("span", {
                        children: _,
                      }),
                      (0, _.jsx)("span", {
                        style: {
                          color: "#FFFFFF",
                        },
                        children: _?.formatted_final_price,
                      }),
                    ))
                  : (_ = (0, _._)(
                      "#SteamNotifications_Wishlist_OnSale_Single",
                      (0, _.jsx)("span", {
                        style: {
                          color: "#FFFFFF",
                        },
                        children: _?.formatted_final_price,
                      }),
                    ))
                : _.count == 2
                  ? _
                    ? (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne_Short",
                        _,
                      ))
                    : (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusOne",
                      ))
                  : _
                    ? (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany_Short",
                        _,
                        _.count - 1,
                      ))
                    : (_ = (0, _._)(
                        "#SteamNotifications_Wishlist_OnSale_PlusMany",
                        _.count - 1,
                      ));
          } else _ = (0, _._)("#SteamNotifications_Wishlist_Generic");
          return _
            ? (0, _.jsx)(_, {
                ..._,
                logo: _,
                icon: _.icon,
                title: (0, _._)("#SteamNotifications_Wishlist"),
                body: _,
              })
            : (0, _.jsx)(_, {
                children: (0, _.jsxs)(_, {
                  logo: _,
                  bLoading: _,
                  ..._,
                  children: [
                    (0, _.jsx)(_, {
                      icon: _,
                      title: (0, _._)("#SteamNotifications_Wishlist"),
                      timestamp: _,
                      location: _,
                      fnRenderTimestamp: _,
                    }),
                    (0, _.jsx)(_, {
                      multiline: !_,
                      children: _,
                    }),
                    !!_ &&
                      (0, _.jsx)(_, {
                        children: _,
                      }),
                    _
                      ? (0, _.jsx)(_, {
                          onHide: _,
                        })
                      : null,
                  ],
                }),
              });
        }
        function _(_, _, _ = !1) {
          const [_, _] = _.useState(!1),
            _ = () => _(!0);
          if (!_ || _)
            return (0, _.jsx)(_._, {
              style: {
                position: "relative",
              },
              children: _,
            });
          const _ = _(_, "community_icon");
          return _
            ? (0, _.jsx)(_._, {
                style: {
                  position: "relative",
                },
                children: (0, _.jsx)("img", {
                  src: _,
                  className: _().ShortLogoDimensions,
                  onError: _,
                }),
              })
            : (0, _.jsxs)(_._, {
                style: {
                  position: "relative",
                },
                children: [
                  (0, _.jsx)("img", {
                    className: (0, _._)(_().WishlistBlurImage),
                    src: _,
                    onError: _,
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    onError: _,
                    style: {
                      position: "absolute",
                      left: 7,
                      top: 7,
                      height: 32,
                      width: 32,
                    },
                  }),
                ],
              });
        }
        function _(_) {
          const _ = (_) => {
              _.stopPropagation(), _.preventDefault();
            },
            _ = (_) => {
              _.onHide(), _.stopPropagation(), _.preventDefault();
            };
          return (0, _.jsx)("div", {
            className: _().HideButton,
            onClick: _,
            onMouseDown: _,
            children: (0, _.jsx)(_.zHo, {}),
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().SteamNotificationWrapper,
            children: _.children,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          m_transport = null;
          m_registry = null;
          SetDefaultTransport(_) {
            this.m_transport != null &&
              console.error(
                "Multiple attempts to set a default WebUI transport: overriding previous",
              ),
              (this.m_transport = _);
          }
          GetDefaultTransport() {
            return this.m_transport;
          }
          SetDefaultHandlerRegistry(_) {
            this.m_registry != null &&
              console.error(
                "Multiple attempts to set a default WebUI message handler registry: overriding previous",
              ),
              (this.m_registry = _);
          }
          GetDefaultHandlerRegistry() {
            return this.m_registry;
          }
        }
        const _ = new _();
        function _() {
          return _;
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
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_UpdateTextFilterDictionary_Notification";
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
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.dictionary || _._(_._()),
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
                    dictionary: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_GetTextFilterDictionary_Response";
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
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CSteamEngine_TextFilterDictionaryChanged_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.pid || _._(_._()),
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
                    pid: {
                      _: 1,
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
            return "CSteamEngine_GetGameIDForPID_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gameid || _._(_._()),
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
                    gameid: {
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
            return "CSteamEngine_GetGameIDForPID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gameid || _._(_._()),
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
                    gameid: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    should_handle: {
                      _: 2,
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
            return "CSteamEngine_SetOverlayEscapeKeyHandling_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.search_term || _._(_._()),
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
                    search_term: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    max_results: {
                      _: 2,
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
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appids || _._(_._()),
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
                    appids: {
                      _: 1,
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
            return "CSteamEngine_SearchAppDataCacheByStoreKeywords_Response";
          }
        }
        var _;
        ((_) => {
          _.UpdateTextFilterDictionaryHandler = {
            name: "SteamEngine.UpdateTextFilterDictionary#1",
            request: _,
          };
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.UpdateTextFilterDictionaryHandler,
                    _,
                  )
            );
          }
          _.RegisterForUpdateTextFilterDictionary = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.UpdateTextFilterDictionary = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "SteamEngine.UpdateTextFilterDictionary#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          (_.SendMsgUpdateTextFilterDictionary = _),
            (_.GetTextFilterDictionaryHandler = {
              name: "SteamEngine.GetTextFilterDictionary#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.GetTextFilterDictionary = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg(
                    "SteamEngine.GetTextFilterDictionary#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          (_.SendMsgGetTextFilterDictionary = _),
            (_.NotifyTextFilterDictionaryChangedHandler = {
              name: "SteamEngine.NotifyTextFilterDictionaryChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyTextFilterDictionaryChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyTextFilterDictionaryChanged = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.NotifyTextFilterDictionaryChanged = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "SteamEngine.NotifyTextFilterDictionaryChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          (_.SendMsgNotifyTextFilterDictionaryChanged = _),
            (_.GetGameIDForPIDHandler = {
              name: "SteamEngine.GetGameIDForPID#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.GetGameIDForPID = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg(
                    "SteamEngine.GetGameIDForPID#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          (_.SendMsgGetGameIDForPID = _),
            (_.SetOverlayEscapeKeyHandlingHandler = {
              name: "SteamEngine.SetOverlayEscapeKeyHandling#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.SetOverlayEscapeKeyHandlingHandler,
                    _,
                  )
            );
          }
          _.RegisterForSetOverlayEscapeKeyHandling = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.SetOverlayEscapeKeyHandling = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "SteamEngine.SetOverlayEscapeKeyHandling#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          (_.SendMsgSetOverlayEscapeKeyHandling = _),
            (_.SearchAppDataCacheByStoreKeywordsHandler = {
              name: "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.SearchAppDataCacheByStoreKeywords = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg(
                    "SteamEngine.SearchAppDataCacheByStoreKeywords#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 2,
                    },
                  )
            );
          }
          _.SendMsgSearchAppDataCacheByStoreKeywords = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        function _(_) {
          return "unknown EClientExecutionSite ( " + _ + " )";
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
            return "WebUINoResponse";
          }
        }
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapCallbacks = new Map();
          m_rgRegisteredEMsgs = [];
          m_mapServiceMethodHandlers = new Map();
          m_rgRegisteredServiceMethodHandlers = [];
          DispatchMsgToHandlers(_, _) {
            let _ = _.GetEMsg();
            if (_ == _.bSr) {
              let _ = _.Hdr().target_job_name();
              if (_) {
                let _ = this.m_mapServiceMethodHandlers.get(_);
                if (_) {
                  this.DEBUG_LogMessageDispatch(_, _[0]);
                  for (let _ of _)
                    try {
                      _.invoke(_, _);
                    } catch (_) {
                      _ instanceof Error
                        ? (0, _._)().ReportError(_)
                        : console.error(
                            `MessageHandlers failed to dispatch message to handler (${_}): `,
                            _,
                          );
                    }
                  return !0;
                }
              }
            } else {
              let _ = this.m_mapCallbacks.get(_);
              if (_) {
                this.DEBUG_LogMessageDispatch(_, _[0]);
                for (let _ of _)
                  try {
                    _.invoke(_);
                  } catch (_) {
                    _ instanceof Error
                      ? (0, _._)().ReportError(_)
                      : console.error(
                          "MessageHandlers failed to dispatch message to handler: ",
                          _,
                        );
                  }
                return !0;
              }
            }
            return !1;
          }
          DEBUG_LogMessageDispatch(_, _) {}
          get emsg_list() {
            return this.m_rgRegisteredEMsgs;
          }
          get servicemethod_list() {
            return this.m_rgRegisteredServiceMethodHandlers;
          }
          AddCallback(_, _, _) {
            let _ = this.m_mapCallbacks.get(_);
            return (
              _ ||
                ((_ = []),
                this.m_mapCallbacks.set(_, _),
                this.m_rgRegisteredEMsgs.push(_)),
              _.push({
                invoke: _,
                msgClass: _,
              }),
              {
                invoke: _,
                unregister: () => {
                  let _ = this.m_mapCallbacks.get(_);
                  if (_)
                    for (let _ = 0; _ < _.length; _++)
                      _[_].invoke == _ && (_.splice(_, 1), _--);
                },
              }
            );
          }
          AddServiceMethodHandler(_, _) {
            let _ = (_, _) => {
              let _ = _._.InitFromMsg(_.request, _),
                _ = _._.Init(_.response, _.kHd),
                _ = _(_, _),
                _ = (_) => {
                  _.Hdr().set_eresult(_), _(_);
                };
              _ instanceof Promise
                ? _.then(_).catch(() => {
                    _(_._);
                  })
                : _(_);
            };
            return (
              this.m_mapServiceMethodHandlers.has(_.name)
                ? console.error("Duplicate registration for method " + _.name)
                : (this.m_mapServiceMethodHandlers.set(_.name, [
                    {
                      invoke: _,
                      msgClass: _.request,
                    },
                  ]),
                  this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
              {
                invoke: _,
                unregister: () => {
                  let _ = this.m_mapServiceMethodHandlers.get(_.name);
                  if (_)
                    for (let _ = 0; _ < _.length; _++)
                      _[_].invoke == _ && (_.splice(_, 1), _--);
                },
              }
            );
          }
          AddServiceNotificationHandler(_, _) {
            let _ = (_, _) => {
                let _ = _._.InitFromMsg(_.request, _);
                _(_);
              },
              _ = this.m_mapServiceMethodHandlers.get(_.name);
            return (
              _ ||
                ((_ = []),
                this.m_mapServiceMethodHandlers.set(_.name, _),
                this.m_rgRegisteredServiceMethodHandlers.push(_.name)),
              _.push({
                invoke: _,
                msgClass: _.request,
              }),
              {
                invoke: _,
                unregister: () => {
                  let _ = this.m_mapServiceMethodHandlers.get(_.name);
                  if (_)
                    for (let _ = 0; _ < _.length; _++)
                      _[_].invoke == _ && (_.splice(_, 1), _--);
                },
              }
            );
          }
          RegisterBaseEMessageHandler(_, _) {
            return this.AddCallback(_, void 0, _);
          }
          RegisterEMessageHandler(_, _, _) {
            return this.AddCallback(_, _, (_) => {
              _(_._.InitFromMsg(_, _));
            });
          }
          RegisterEMessageAction(_, _, _) {
            return this.AddCallback(_, _, (_) => {
              (0, _._)(() => {
                _(_._.InitFromMsg(_, _));
              });
            });
          }
          RegisterServiceNotificationHandler(_, _) {
            return this.AddServiceNotificationHandler(_, _);
          }
          RegisterServiceNotificationHandlerAction(_, _) {
            return this.AddServiceNotificationHandler(_, (_) => {
              let _;
              return (
                (0, _._)(() => {
                  _ = _(_);
                }),
                _
              );
            });
          }
          RegisterServiceMethodHandler(_, _) {
            return this.AddServiceMethodHandler(_, _);
          }
          RegisterServiceMethodHandlerAction(_, _) {
            return this.AddServiceMethodHandler(_, (_, _) => {
              let _;
              return (
                (0, _._)(() => {
                  _ = _(_, _);
                }),
                _
              );
            });
          }
        }
        _([_._], _.prototype, "m_rgRegisteredEMsgs", 2),
          _([_._], _.prototype, "m_rgRegisteredServiceMethodHandlers", 2);
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.auth_key || _._(_._()),
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
                    auth_key: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CTransportAuth_Authenticate_Request";
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
            return "CTransportAuth_Authenticate_Response";
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
            return "CTransportAuth_StartShutdown_Notification";
          }
        }
        var _;
        ((_) => {
          _.AuthenticateHandler = {
            name: "TransportAuth.Authenticate#1",
            request: _,
            response: _,
          };
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("TransportAuth.Authenticate#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 3,
                  })
            );
          }
          _.Authenticate = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("TransportAuth.Authenticate#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 3,
                  })
            );
          }
          (_.SendMsgAuthenticate = _),
            (_.NotifyStartShutdownHandler = {
              name: "TransportAuth.NotifyStartShutdown#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyStartShutdownHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyStartShutdown = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 3,
                    },
                  )
            );
          }
          _.NotifyStartShutdown = _;
          function _(_, _) {
            return (
              (_ = _ || _().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "TransportAuth.NotifyStartShutdown#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 3,
                    },
                  )
            );
          }
          _.SendMsgNotifyStartShutdown = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        class _ {
          m_socket = null;
          m_sName;
          m_sURL;
          Log = new _._("CWebSocketConnection", () => this.m_sName);
          m_bDisconnectRequested = !1;
          m_bConnecting = !1;
          m_fnOnMessageHandler;
          m_fnOnCloseHandler;
          m_fnOnReconnectStartHandler;
          m_fnOnReconnectFinishHandler;
          m_nConnectAttemptsMax;
          m_nConnectAttemptTimeoutMs;
          m_bReconnectOnFailure;
          m_nReconnectAttemptTimeoutMs;
          m_nReconnectAttemptsMax;
          constructor(_, _) {
            (this.m_sName = _),
              (this.m_fnOnMessageHandler = _.fnOnMessageHandler),
              (this.m_fnOnCloseHandler = _.fnOnCloseHandler),
              (this.m_fnOnReconnectStartHandler =
                _.fnOnReconnectStartHandler ?? (() => {})),
              (this.m_fnOnReconnectFinishHandler =
                _.fnOnReconnectFinishHandler ?? (() => {})),
              (this.m_nConnectAttemptsMax = _.nConnectAttemptsMax ?? 8),
              (this.m_nConnectAttemptTimeoutMs =
                _.nConnectAttemptTimeoutMs ?? 1e3),
              (this.m_bReconnectOnFailure = _.bReconnectOnFailure ?? !1),
              (this.m_nReconnectAttemptsMax = _.nReconnectAttemptsMax ?? 3e4),
              (this.m_nReconnectAttemptTimeoutMs =
                _.nReconnectAttemptTimeoutMs ?? 1e4);
          }
          get name() {
            return this.m_sName;
          }
          async Connect(_) {
            return (
              (this.m_sURL = _),
              this.ConnectWithRetry(
                this.m_sURL,
                this.m_nConnectAttemptsMax,
                this.m_nConnectAttemptTimeoutMs,
              )
            );
          }
          async Reconnect() {
            return this.ConnectWithRetry(
              this.m_sURL,
              this.m_nReconnectAttemptsMax,
              this.m_nReconnectAttemptTimeoutMs,
            );
          }
          GetInterAttemptBackoffMs(_) {
            return (0, _._)(_, 1, 5) * 1e3;
          }
          async ConnectWithRetry(_, _, _) {
            this.m_bConnecting = !0;
            let _ = 0;
            do {
              try {
                const _ = await this.ConnectToSocket(_, _);
                if (_.result == _._) return (this.m_bConnecting = !1), _;
                this.Log.Warning(
                  `connect attempt failed: ${_.result} - ${_.message}`,
                );
              } catch (_) {
                this.Log.Warning(
                  `connect attempt failed: exception ${_.name} - ${_}`,
                );
              }
              const _ = this.GetInterAttemptBackoffMs(_);
              this.Log.Info(`connect retry: attempt:${_}/${_} backoff:${_}`),
                await new Promise((_) => setTimeout(_, _)),
                (this.m_socket = null),
                (_ += 1);
            } while (_ < _);
            return (
              this.Log.Warning(
                `websocket connect retry: limit exceeeded, bailing - ${this.name}`,
              ),
              (this.m_bConnecting = !1),
              this.BShouldReconnect() && this.StartReconnect(),
              {
                result: _._,
                message: "not ready, exceeded retry count",
              }
            );
          }
          Disconnect() {
            this.Log.Info("disconnect requested"),
              (this.m_bDisconnectRequested = !0),
              this.m_socket.close();
          }
          PrepareForShutdown() {
            this.Log.Info("shutdown pending"),
              (this.m_bDisconnectRequested = !0);
          }
          BShouldReconnect() {
            return this.m_bConnecting || !this.m_bReconnectOnFailure
              ? !1
              : !this.m_bDisconnectRequested;
          }
          async StartReconnect() {
            if (
              (this.Log.Info("start reconnect"),
              (this.m_socket = null),
              this.m_fnOnReconnectStartHandler({
                connection: this,
              }),
              (await this.Reconnect()).result != _._)
            ) {
              this.Log.Warning("failed to re-connect to websocket after close"),
                this.m_fnOnReconnectFinishHandler({
                  connection: this,
                  eResult: _._,
                }),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !0,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            this.Log.Info("reconnect successful"),
              this.m_fnOnReconnectFinishHandler({
                connection: this,
                eResult: _._,
              });
          }
          async ConnectToSocket(_, _) {
            if (this.m_socket != null)
              return this.m_socket.readyState != WebSocket.OPEN
                ? (this.Log.Error(
                    `websocket in an unexpected state: ${this.m_socket.readyState}`,
                  ),
                  {
                    result: _._,
                    message: "websocket in an unexpected state",
                  })
                : {
                    result: _._,
                    message: "ready",
                  };
            try {
              this.m_socket = new WebSocket(_);
            } catch {
              return (
                this.Log.Warning("failed to initialize websocket connection"),
                {
                  result: _._,
                  message: "Failed to initialize websocket connection",
                }
              );
            }
            return (
              (this.m_socket.binaryType = "arraybuffer"),
              (this.m_socket.onerror = this.OnSocketError),
              (this.m_socket.onmessage = this.OnSocketMessage),
              (this.m_socket.onopen = this.OnSocketOpen),
              (this.m_socket.onclose = this.OnSocketClose),
              (await this.WaitForSocketOpen(this.m_socket, _))
                ? (this.Log.Info("connection ready"),
                  {
                    result: _._,
                    message: "ready",
                  })
                : (this.Log.Warning("failed to reach open state"),
                  {
                    result: _._,
                    message: "failed to reach open state",
                  })
            );
          }
          async WaitForSocketOpen(_, _) {
            if (_.readyState != WebSocket.CONNECTING)
              return _.readyState == WebSocket.OPEN;
            const _ = 100;
            let _ = _ / _;
            for (; _.readyState == WebSocket.CONNECTING && _ > 0; )
              _--, await new Promise((_) => setTimeout(_, _));
            return _.readyState == WebSocket.OPEN;
          }
          BCanSendMessages() {
            return (
              this.m_socket != null &&
              this.m_socket.readyState == WebSocket.OPEN
            );
          }
          OnSocketError(_) {
            this.Log.Warning("websocket error");
          }
          OnSocketOpen(_) {
            this.Log.Info("websocket open");
          }
          OnSocketClose(_) {
            if (this.m_bDisconnectRequested) {
              this.Log.Info("websocket closed"),
                this.m_fnOnCloseHandler({
                  connection: this,
                  bError: !1,
                  bIsExpectedToReconnect: !1,
                });
              return;
            }
            if (this.m_bConnecting) return;
            this.Log.Warning("websocket unexpectedly closed");
            const _ = this.BShouldReconnect();
            this.m_fnOnCloseHandler({
              connection: this,
              bError: !0,
              bIsExpectedToReconnect: _,
            }),
              _ && this.StartReconnect();
          }
          async OnSocketMessage(_) {
            this.m_fnOnMessageHandler(_.data);
          }
          SendSerializedMessage(_) {
            try {
              return this.m_socket.send(_), _._;
            } catch {
              return _._;
            }
          }
        }
        _([_._], _.prototype, "OnSocketError", 1),
          _([_._], _.prototype, "OnSocketOpen", 1),
          _([_._], _.prototype, "OnSocketClose", 1),
          _([_._], _.prototype, "OnSocketMessage", 1);
        var _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        const _ = "localhost",
          _ = new _._("WebUITransport");
        class _ {
          m_iMsgSeq = 1;
          m_mapPendingMethodRequests = new Map();
          m_messageHandlers = new _();
          m_mapServiceCallErrorCount = new Map();
          m_mapConnectionDetails = new Map();
          m_fnOnStatusEventHandler;
          m_fnOnReconnectErrorHandler;
          m_bInitialized = !1;
          m_nMaximumMsgSizeBytes = 1024;
          BIsValid() {
            return this.m_bInitialized;
          }
          GetMaximumMsgSizeBytes() {
            return this.m_nMaximumMsgSizeBytes;
          }
          TEST_GetMaximumMsgBodySizeBytes() {
            return (
              this.m_nMaximumMsgSizeBytes -
              this.TEST_GetMsgHeaderEstimatedSizeBytes()
            );
          }
          TEST_GetMsgHeaderEstimatedSizeBytes() {
            return 128;
          }
          TEST_GetExcessivelyLargeBodySize() {
            return 64 * 1024 * 1024;
          }
          ReportError(_) {
            _.Warning(_);
            const _ = (0, _._)();
            _ &&
              _.ReportError(new Error(_), {
                bIncludeMessageInIdentifier: !0,
                cCallsitesToIgnore: 1,
              });
          }
          async Init() {
            if (!_._.IN_CLIENT) return;
            const _ = await SteamClient.WebUITransport.GetTransportInfo();
            (this.m_nMaximumMsgSizeBytes = _.nMaximumMsgSizeBytes),
              this.CreateConnection(
                _,
                "steamUI",
                _.portSteamUI,
                _.authKeySteamUI,
              ),
              this.CreateConnection(
                _,
                "clientdll",
                _.portClientdll,
                _.authKeyClientdll,
              ),
              _().SetDefaultTransport(this),
              _().SetDefaultHandlerRegistry(this.m_messageHandlers),
              _.RegisterForNotifyStartShutdown(this.OnStartShutdown);
          }
          get messageHandlers() {
            return this.m_messageHandlers;
          }
          SetStatusEventHandler(_) {
            this.m_fnOnStatusEventHandler = _;
          }
          SetReconnectErrorHandler(_) {
            this.m_fnOnReconnectErrorHandler = _;
          }
          CreateConnection(_, _, _, _) {
            const _ = {
                bReconnectOnFailure: !0,
                fnOnMessageHandler: this.OnWebsocketMessage,
                fnOnCloseHandler: this.OnWebsocketClose,
                fnOnReconnectStartHandler: this.OnWebsocketReconnectStart,
                fnOnReconnectFinishHandler: this.OnWebsocketReconnectFinish,
                nConnectAttemptsMax: 8,
                nConnectAttemptTimeoutMs: 1e4,
                nReconnectAttemptsMax: 8,
                nReconnectAttemptTimeoutMs: 1e4,
              },
              _ = {
                connection: new _(_, _),
                sUrl: `ws://${_}:${_}/transportsocket/`,
                sAuthKey: _,
                eClientExecutionSite: _,
              };
            this.m_mapConnectionDetails.set(_, _);
          }
          SendMsg(_, _, _, _) {
            return new Promise((_, _) => {
              const _ = _.eClientExecutionSite;
              if (_ == null || _ == _) {
                _.Error(`SendMsg: Invalid client execution site: ${_}`),
                  _(`Transport SendMsg: invalid client execution site ${_}`);
                return;
              }
              const _ = this.m_mapConnectionDetails.get(_);
              if (_ == null) {
                _.Error(
                  `SendMsg: could not find connection for execution site: ${_}`,
                ),
                  _(
                    `Transport SendMsg: could not find connection for execution site ${_}`,
                  );
                return;
              }
              const _ = _.connection;
              if (!_.BCanSendMessages()) {
                const _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
                this.m_mapServiceCallErrorCount.set(_, _ + 1);
                const _ = `SendMsg: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
                _ == 1 && this.ReportError(_),
                  _.Warning(_ + ` error count: ${_}`),
                  _("Transport SendMsg: socket not ready");
                return;
              }
              const _ = this.m_iMsgSeq++;
              _.SetEMsg(_.bSr),
                _.Hdr().set_target_job_name(_),
                _.Hdr().set_jobid_source("" + _);
              const _ = _.Serialize();
              if (_.byteLength >= this.m_nMaximumMsgSizeBytes) {
                _.Error(
                  `SendMsg: message exceeds maximum size: ${_.byteLength} >= ${this.m_nMaximumMsgSizeBytes}`,
                );
                const _ = _._.Init(_);
                _.Hdr().set_eresult(_._), _(_);
                return;
              }
              if (_.SendSerializedMessage(_) != _._) {
                _.Error("SendMsg: Failed to send message"),
                  _("Transport SendMsg: failed to send message");
                return;
              }
              this.m_mapPendingMethodRequests.set(_, {
                m_iSeq: _,
                m_responseClass: _,
                m_fnCallback: _,
                m_fnError: _,
              });
            });
          }
          SendNotification(_, _, _) {
            const _ = _.eClientExecutionSite;
            if (_ == null || _ == _)
              return (
                _.Error(
                  `SendNotification: Invalid client execution site: ${_}`,
                ),
                !1
              );
            const _ = this.m_mapConnectionDetails.get(_);
            if (_ == null)
              return (
                _.Error(
                  `SendNotification: could not find connection for execution site: ${_}`,
                ),
                !1
              );
            const _ = _.connection;
            if (!_.BCanSendMessages()) {
              const _ = this.m_mapServiceCallErrorCount.get(_) ?? 1;
              this.m_mapServiceCallErrorCount.set(_, _ + 1);
              const _ = `SendNotification: Attempt to send message but socket wasn't ready: ${_.name} - ${_}`;
              return (
                _ == 1 && this.ReportError(_),
                _.Warning(_ + ` error count: ${_}`),
                !1
              );
            }
            return (
              _.SetEMsg(_.bSr),
              _.Hdr().set_target_job_name(_),
              _.SendSerializedMessage(_.Serialize()) == _._
            );
          }
          async ConnectToSite(_) {
            const _ = await _.connection.Connect(_.sUrl);
            return _.result != _._
              ? _
              : (await this.SendAuthMessage(_)).BSuccess()
                ? {
                    result: _._,
                    message: "connected",
                  }
                : {
                    result: _._,
                    message: "client auth failed",
                  };
          }
          async MakeReady() {
            const _ = [];
            for (const [_, _] of this.m_mapConnectionDetails)
              _.push(this.ConnectToSite(_));
            const _ = await Promise.all(_);
            (this.m_bInitialized = !0), this.DispatchTransportStatusUpdate();
            for (const _ of _) if (_.result != _._) return _;
            return {
              result: _._,
              message: "ready",
            };
          }
          GetConnectionDetails(_) {
            for (const [_, _] of this.m_mapConnectionDetails)
              if (_.connection === _) return _;
            return (
              _.Error("GetConnectionDetails: failed to identify connection"),
              null
            );
          }
          DispatchTransportStatusUpdate() {
            if (!this.m_fnOnStatusEventHandler) return;
            let _ = !0;
            for (const [_, _] of this.m_mapConnectionDetails)
              _.connection.BCanSendMessages() || (_ = !1);
            this.m_fnOnStatusEventHandler({
              bConnected: _,
            });
          }
          OnWebsocketReconnectStart(_) {
            this.DispatchTransportStatusUpdate();
          }
          OnWebsocketReconnectFinish(_) {
            if ((this.DispatchTransportStatusUpdate(), _.eResult != _._)) {
              _.Warning(
                "OnWebsocketReconnect: Failed to reconnect to steam client",
              ),
                this.m_fnOnReconnectErrorHandler?.({});
              return;
            }
            this.FailAllPendingRequests();
            const _ = this.GetConnectionDetails(_.connection);
            _ && this.SendAuthMessage(_);
          }
          OnWebsocketClose(_) {
            _.bIsExpectedToReconnect || this.FailAllPendingRequests();
          }
          OnWebsocketMessage(_) {
            const _ = new _._(_),
              _ = _._.InitHeaderFromPacket(_);
            _.Hdr().jobid_target() && _.Hdr().jobid_target() !== _.kFb
              ? this.DispatchMethodResponse(_)
              : this.DispatchNotification(_);
          }
          DispatchMethodResponse(_) {
            const _ = parseInt(_.Hdr().jobid_target()),
              _ = this.m_mapPendingMethodRequests.get(_);
            if (_ == null) {
              (0, _._)(!1, "Transport Error: no pending callback for request");
              return;
            }
            (0, _._)(
              _ == _.m_iSeq,
              "Transport Error: mistmatched request sequence",
            ),
              this.m_mapPendingMethodRequests.delete(_);
            const _ = _._.InitFromMsg(_.m_responseClass, _);
            _.m_fnCallback(_);
          }
          DispatchNotification(_) {
            const _ = (_) => {
              (0, _._)(
                !1,
                "Transport Error: A notification should not generate a response",
              );
            };
            this.m_messageHandlers.DispatchMsgToHandlers(_, _);
          }
          FailAllPendingRequests() {
            for (const [_, _] of this.m_mapPendingMethodRequests) {
              this.ReportError(
                `FailAllPendingRequests: forcing failure for request: ${_.m_responseClass.name}`,
              );
              let _ = _._.Init(_.m_responseClass);
              _.Hdr().set_eresult(_._), _.m_fnCallback(_);
            }
            this.m_mapPendingMethodRequests.clear();
          }
          async SendAuthMessage(_) {
            const _ = _.AuthenticateHandler.name,
              _ = {
                eClientExecutionSite: _.eClientExecutionSite,
              },
              _ = _._.Init(_);
            return (
              _.Hdr().set_webui_auth_key(_.sAuthKey),
              await this.SendMsg(_, _, _.AuthenticateHandler.response, _)
            );
          }
          OnStartShutdown(_) {
            for (const [_, _] of this.m_mapConnectionDetails)
              _.connection.PrepareForShutdown();
            return _._;
          }
        }
        _([_._], _.prototype, "OnWebsocketReconnectStart", 1),
          _([_._], _.prototype, "OnWebsocketReconnectFinish", 1),
          _([_._], _.prototype, "OnWebsocketClose", 1),
          _([_._], _.prototype, "OnWebsocketMessage", 1),
          _([_._], _.prototype, "OnStartShutdown", 1);
        const _ = new _();
        var _ = __webpack_require__("chunkid"),
          _ = Object.defineProperty,
          _ = Object.getOwnPropertyDescriptor,
          _ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          };
        function _() {
          return _._.IN_MOBILE ? _._ : (0, _._)();
        }
        function _(_) {
          if (_ === "") return !1;
          try {
            return new RegExp("\\b(" + _ + ")\\b", "ugi"), !0;
          } catch {
            return (
              console.log(
                `'${_}' is an invalid expression, removing from text filter`,
              ),
              !1
            );
          }
        }
        const _ = 15,
          _ = 3600,
          _ = "(1)";
        class _ {
          m_WebUIServiceTransport;
          m_unAccountID;
          m_Transport = null;
          m_Storage = null;
          m_TextFilterPreferences = {
            eTextFilterSetting: _.Bx6._,
            bIgnoreFriends: !1,
          };
          m_TextFilterWords;
          m_mapPlayerCache = new Map();
          m_strBannedWords = "";
          m_strProfanityWords = "";
          m_strCleanWords = "";
          m_strBannedPattern = "";
          m_strCleanPattern = "";
          m_bWordListsComplete = !1;
          m_bHaveCompleteFilter = !1;
          m_regexBannedWords = null;
          m_regexCleanWords = null;
          m_bShownFilterTip = !1;
          m_bInitialized = !1;
          m_bFilterChangedWhileLoading = !1;
          m_bOngoingLoad = !1;
          m_promiseOngoingLoad = null;
          m_fnUnregisterDictionaryChanged = void 0;
          m_rgUnregisterPlayerNotifications = [];
          m_DataAccess;
          constructor(_) {
            (0, _._)(this);
            let _ = new _.B4H();
            (this.m_TextFilterPreferences = {
              eTextFilterSetting: _.text_filter_setting(),
              bIgnoreFriends: _.text_filter_ignore_friends(),
            }),
              (this.m_TextFilterWords = new _.EyI()),
              (this.m_DataAccess = _);
          }
          async Init(_ = 0, _ = null, _ = null, _ = null) {
            (this.m_bInitialized = !1),
              (this.m_WebUIServiceTransport = _),
              (this.m_unAccountID = _),
              (this.m_Transport = _),
              (this.m_Storage = _),
              (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.InitSteamEngineLanguages(),
              this.RegisterPlayerNotifications(_),
              await this.LoadFilter(),
              await this.LoadTextFilterPreferences(),
              await this.LoadTextFilterWords(),
              await this.RequestUpdatedSettings(),
              (this.m_nLoadLanguagesRetryDelaySec = _),
              await this.EnsureFiltersLoaded();
          }
          InitSteamEngineLanguages() {
            this.m_WebUIServiceTransport.BIsValid() &&
              (this.m_fnUnregisterDictionaryChanged?.(),
              (this.m_fnUnregisterDictionaryChanged =
                this.m_WebUIServiceTransport.messageHandlers.RegisterServiceNotificationHandler(
                  _.NotifyTextFilterDictionaryChangedHandler,
                  this.OnTextFilterDictionaryChanged,
                ).unregister),
              this.InitSteamEngineLanguage(_._.LANGUAGE),
              _._.LANGUAGE !== "english" &&
                this.InitSteamEngineLanguage("english"));
          }
          OnTextFilterDictionaryChanged(_) {
            return (
              !this.m_bInitialized && !this.m_bOngoingLoad
                ? (this.m_bFilterChangedWhileLoading = !0)
                : ((this.m_nLoadLanguagesRetryDelaySec = _),
                  this.EnsureFiltersLoaded()),
              _._
            );
          }
          EnsureFiltersLoaded() {
            return this.m_bOngoingLoad && this.m_promiseOngoingLoad
              ? ((this.m_bFilterChangedWhileLoading = !0),
                this.m_promiseOngoingLoad)
              : ((this.m_promiseOngoingLoad = this.InitFiltersWithRetry()),
                this.m_promiseOngoingLoad);
          }
          async InitFiltersWithRetry() {
            this.m_bOngoingLoad = !0;
            try {
              do
                (this.m_bFilterChangedWhileLoading = !1),
                  await this.LoadLanguages(),
                  this.OnFilterDataChanged(),
                  (this.m_bInitialized = !0);
              while (this.m_bFilterChangedWhileLoading);
            } finally {
              (this.m_bOngoingLoad = !1), (this.m_promiseOngoingLoad = null);
            }
          }
          RegisterPlayerNotifications(_) {
            this.m_rgUnregisterPlayerNotifications.forEach((_) => _()),
              (this.m_rgUnregisterPlayerNotifications = []),
              _ &&
                this.m_rgUnregisterPlayerNotifications.push(
                  _.RegisterServiceNotificationHandler(
                    _.QAJ.NotifyCommunityPreferencesChangedHandler,
                    (_) => (
                      this.UpdateCommunityPreferences(_.Body().preferences()),
                      this.OnPlayerSettingsChanged(),
                      _._
                    ),
                  ).unregister,
                  _.RegisterServiceNotificationHandler(
                    _.QAJ.NotifyTextFilterWordsChangedHandler,
                    (_) => (
                      this.UpdateTextFilterWords(_.Body().words()),
                      this.OnPlayerSettingsChanged(),
                      _._
                    ),
                  ).unregister,
                );
          }
          OnPlayerSettingsChanged() {
            this.m_bInitialized &&
              !this.m_bOngoingLoad &&
              this.OnFilterDataChanged();
          }
          InitSteamEngineLanguage(_) {
            const _ = _._.Init(_);
            _.Body().set_language(_),
              _.Body().set_type("profanity"),
              _.SendMsgUpdateTextFilterDictionary(
                _,
                this.m_WebUIServiceTransport,
              ),
              _.Body().set_type("banned"),
              _.SendMsgUpdateTextFilterDictionary(
                _,
                this.m_WebUIServiceTransport,
              );
          }
          GetSteamEngineTextFilterDictionary(_, _) {
            const _ = _._.Init(_);
            return (
              _.Body().set_language(_),
              _.Body().set_type(_),
              _.SendMsgGetTextFilterDictionary(_, this.m_WebUIServiceTransport)
            );
          }
          GetStorageKey(_) {
            return _ + "_" + this.m_unAccountID;
          }
          async LoadTextFilterPreferences() {
            if (this.m_Storage) {
              let _ = await this.m_Storage.GetObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
              );
              _ && (this.m_TextFilterPreferences = _);
            }
          }
          SaveTextFilterPreferences() {
            this.m_Storage &&
              this.m_Storage.StoreObject(
                this.GetStorageKey("CTextFilterStore_TextFilterPreferences"),
                this.m_TextFilterPreferences,
              );
          }
          ObfuscateString(_) {
            try {
              const _ = new TextEncoder().encode(_ + _);
              return _._(_);
            } catch {
              return "";
            }
          }
          DeobfuscateString(_) {
            try {
              const _ = _._(_);
              let _ = new TextDecoder().decode(_);
              return _.startsWith(_)
                ? ((_ = _.slice(_.length)), _)
                : (console.log(
                    "DeobfuscateString given invalid base64 data, ignoring: " +
                      _,
                  ),
                  "");
            } catch {
              return "";
            }
          }
          async LoadObfuscatedString(_) {
            if (this.m_Storage) {
              let _ = await this.m_Storage.GetString(this.GetStorageKey(_));
              if (_) return this.DeobfuscateString(_);
            }
            return null;
          }
          async SaveObfuscatedString(_, _) {
            this.m_Storage &&
              this.m_Storage.StoreString(
                this.GetStorageKey(_),
                this.ObfuscateString(_),
              );
          }
          async LoadTextFilterWords() {
            let _ = await this.LoadObfuscatedString(
              "CTextFilterStore_TextFilterWords",
            );
            if (_)
              try {
                this.m_TextFilterWords = _.EyI.fromObject(JSON.parse(_));
              } catch {
                console.warn("Error parsing cached text filter word list", _),
                  (this.m_TextFilterWords = new _.EyI());
              }
          }
          SaveTextFilterWords() {
            this.SaveObfuscatedString(
              "CTextFilterStore_TextFilterWords",
              JSON.stringify(this.m_TextFilterWords.toObject()),
            );
          }
          async LoadFilter() {
            let _ = await this.LoadObfuscatedString(
                "CTextFilterStore_strBannedPattern",
              ),
              _ = await this.LoadObfuscatedString(
                "CTextFilterStore_strCleanPattern",
              );
            (this.m_bHaveCompleteFilter = _ != null && _ != null),
              _ != null && _ != null && this.BRebuildFilter(_, _);
          }
          SaveFilter() {
            this.SaveObfuscatedString(
              "CTextFilterStore_strBannedPattern",
              this.m_strBannedPattern,
            ),
              this.SaveObfuscatedString(
                "CTextFilterStore_strCleanPattern",
                this.m_strCleanPattern,
              );
          }
          async RequestUpdatedSettings() {
            let _ = new _.B4H();
            if (this.m_unAccountID !== 0)
              try {
                if (this.m_Transport) {
                  let _ = _._.Init(_.tzK);
                  _ = (await _.xtC.GetCommunityPreferences(this.m_Transport, _))
                    .Body()
                    .preferences();
                } else {
                  let _ = {
                    sessionid: (0, _._)(),
                    origin: _(),
                  };
                  const _ = await _().get(
                    _._.COMMUNITY_BASE_URL +
                      "textfilter/ajaxgetcommunitypreferences",
                    {
                      params: _,
                      withCredentials: !0,
                    },
                  );
                  _ = _.B4H.fromObject(_.data.preferences);
                }
              } catch {}
            if (
              (this.UpdateCommunityPreferences(_),
              _.text_filter_words_revision() !==
                this.m_TextFilterWords.text_filter_words_revision())
            ) {
              let _ = new _.EyI();
              if (_.text_filter_words_revision() !== 0)
                try {
                  if (this.m_Transport) {
                    let _ = _._.Init(_.SCE);
                    _ = (await _.xtC.GetTextFilterWords(this.m_Transport, _))
                      .Body()
                      .words();
                  } else {
                    let _ = {
                      sessionid: (0, _._)(),
                      origin: _(),
                    };
                    const _ = await _().get(
                      _._.COMMUNITY_BASE_URL +
                        "textfilter/ajaxgettextfiltercustomwords",
                      {
                        params: _,
                        withCredentials: !0,
                      },
                    );
                    _ = _.EyI.fromObject(_.data.words);
                  }
                } catch {}
              this.UpdateTextFilterWords(_);
            }
          }
          UpdateCommunityPreferences(_) {
            let _ = !1;
            _.text_filter_setting() !==
              this.m_TextFilterPreferences?.eTextFilterSetting &&
              ((this.m_TextFilterPreferences.eTextFilterSetting =
                _.text_filter_setting()),
              (_ = !0)),
              _.text_filter_ignore_friends() !==
                this.m_TextFilterPreferences.bIgnoreFriends &&
                ((this.m_TextFilterPreferences.bIgnoreFriends =
                  _.text_filter_ignore_friends()),
                (_ = !0)),
              _ && this.SaveTextFilterPreferences();
          }
          get TextFilterPreferences() {
            return this.m_TextFilterPreferences;
          }
          UpdateTextFilterWords(_) {
            (this.m_TextFilterWords = _), this.SaveTextFilterWords();
          }
          m_nLoadLanguagesRetryTimeout = void 0;
          m_nLoadLanguagesRetryDelaySec = _;
          async LoadLanguages() {
            (this.m_strBannedWords = ""),
              (this.m_strProfanityWords = ""),
              (this.m_strCleanWords = ""),
              (this.m_bWordListsComplete = !1),
              this.m_nLoadLanguagesRetryTimeout &&
                (window.clearTimeout(this.m_nLoadLanguagesRetryTimeout),
                (this.m_nLoadLanguagesRetryTimeout = void 0));
            try {
              let _ = await this.LoadLanguage(_._.LANGUAGE);
              if (
                (_._.LANGUAGE !== "english" &&
                  (_ = (await this.LoadLanguage("english")) && _),
                !_)
              )
                throw new Error("clean_public dictionary unavailable");
              (this.m_nLoadLanguagesRetryDelaySec = _),
                (this.m_bWordListsComplete = !0);
            } catch (_) {
              this.m_nLoadLanguagesRetryDelaySec = Math.min(
                this.m_nLoadLanguagesRetryDelaySec * 2,
                _,
              );
              const _ = this.m_nLoadLanguagesRetryDelaySec;
              console.warn("LoadLanguages caught", _, "retry in", _, "seconds"),
                (this.m_nLoadLanguagesRetryTimeout = window.setTimeout(() => {
                  (this.m_nLoadLanguagesRetryTimeout = void 0),
                    this.EnsureFiltersLoaded();
                }, _ * 1e3));
            }
          }
          async LoadLanguage(_) {
            let _ = "1",
              _ = "",
              _ = !1;
            if (this.m_WebUIServiceTransport.BIsValid())
              try {
                {
                  const _ = await this.GetSteamEngineTextFilterDictionary(
                    _,
                    "banned",
                  );
                  this.m_strBannedWords += _.Body().dictionary();
                }
                {
                  const _ = await this.GetSteamEngineTextFilterDictionary(
                    _,
                    "profanity",
                  );
                  this.m_strProfanityWords += _.Body().dictionary();
                }
                _ = !0;
              } catch (_) {
                console.warn(
                  "LoadLanguage caught while loading from cache:",
                  _,
                );
              }
            if (!_) {
              _ = `${_._.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=banned&language=${_}&v=${_}&origin=${_()}`;
              {
                const _ = await _().get(_);
                this.m_strBannedWords += _.data;
              }
              _ = `${_._.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=profanity&language=${_}&v=${_}&origin=${_()}`;
              {
                const _ = await _().get(_);
                this.m_strProfanityWords += _.data;
              }
            }
            const _ = this.m_WebUIServiceTransport.BIsValid(),
              _ = "CTextFilterStore_strCleanPublic_" + _;
            _ = `${_._.COMMUNITY_CDN_URL}textfilter/gettextfilterdictionary?type=clean_public&language=${_}&v=${_}&origin=${_()}`;
            try {
              const _ = await _().get(_);
              (this.m_strCleanWords += _.data),
                _ && this.SaveObfuscatedString(_, _.data);
            } catch (_) {
              console.warn("LoadLanguage caught while loading clean list:", _);
              const _ = _ ? await this.LoadObfuscatedString(_) : null;
              if (!_) return !1;
              this.m_strCleanWords += _;
            }
            return !0;
          }
          CreatePattern(_) {
            let _ = _.filter(function (_) {
              return _(_);
            });
            return _.length > 0 ? "\\b(" + _.join("|") + ")\\b" : "";
          }
          OnFilterDataChanged() {
            if (!this.m_bWordListsComplete && this.m_bHaveCompleteFilter)
              return;
            let _ = new RegExp(/\s*[\r\n]+\s*/g),
              _ = [],
              _ = [];
            switch (this.m_TextFilterPreferences.eTextFilterSetting) {
              case _.Bx6._:
                break;
              case _.Bx6._:
                break;
              case _.Bx6._:
                _ = _.concat(this.m_strBannedWords.split(_));
                break;
              default:
                _ = _.concat(
                  this.m_strProfanityWords.split(_),
                  this.m_strBannedWords.split(_),
                );
                break;
            }
            (_ = _.concat(
              this.m_TextFilterWords.text_filter_custom_banned_words(),
            )),
              (_ = this.m_strCleanWords.split(_)),
              (_ = _.concat(
                this.m_TextFilterWords.text_filter_custom_clean_words(),
              ));
            let _ = this.CreatePattern(_),
              _ = this.CreatePattern(_);
            _ != "" && (_ = "^(" + _ + ")$"),
              this.BRebuildFilter(_, _) &&
                this.m_bWordListsComplete &&
                this.SaveFilter(),
              (this.m_bHaveCompleteFilter = this.m_bWordListsComplete);
          }
          BRebuildFilter(_, _) {
            if (_ === this.m_strBannedPattern && _ === this.m_strCleanPattern)
              return !1;
            if (
              ((this.m_regexBannedWords = null),
              (this.m_strBannedPattern = _),
              _ !== "")
            )
              try {
                this.m_regexBannedWords = new RegExp(_, "ugi");
              } catch (_) {
                console.warn("Couldn't compile textfilter bannedwords regex"),
                  (0, _._)().ReportError(
                    new Error(
                      `Couldn't compile textfilter bannedwords regex: ${_}`,
                    ),
                  ),
                  (this.m_strBannedPattern = "");
              }
            if (
              ((this.m_regexCleanWords = null),
              (this.m_strCleanPattern = _),
              _ !== "")
            )
              try {
                this.m_regexCleanWords = new RegExp(_, "ugi");
              } catch (_) {
                console.warn("Couldn't compile textfilter cleanwords regex"),
                  (0, _._)().ReportError(
                    new Error(
                      `Couldn't compile textfilter cleanwords regex: ${_}`,
                    ),
                  ),
                  (this.m_strCleanPattern = "");
              }
            return !0;
          }
          CreateProfanityReplacement(_) {
            return "\u2665".repeat(_);
          }
          BHasFilter() {
            return this.m_regexBannedWords != null;
          }
          BShownFilterTip() {
            return this.m_bShownFilterTip;
          }
          SetFilterTipShown(_) {
            this.m_bShownFilterTip = _;
          }
          FilterText(_, _) {
            if (!this.m_regexBannedWords) return _;
            let _ = 0;
            return (
              typeof _ == "string" && _ !== ""
                ? (_ = new _._(_).GetAccountID())
                : typeof _ == "number" && (_ = _),
              !_ ||
              _ == this.m_unAccountID ||
              (_ &&
                this.m_TextFilterPreferences.bIgnoreFriends &&
                this.m_DataAccess.BIsFriend(_))
                ? _
                : _.replace(this.m_regexBannedWords, (_) =>
                    this.m_regexCleanWords &&
                    _.search(this.m_regexCleanWords) == 0
                      ? _
                      : this.CreateProfanityReplacement(_.length),
                  )
            );
          }
        }
        _([_._], _.prototype, "m_TextFilterPreferences", 2),
          _([_._], _.prototype, "m_mapPlayerCache", 2),
          _([_._], _.prototype, "m_regexBannedWords", 2),
          _([_._], _.prototype, "m_regexCleanWords", 2),
          _([_._], _.prototype, "m_bInitialized", 2),
          _([_._], _.prototype, "m_bFilterChangedWhileLoading", 2),
          _([_._], _.prototype, "m_bOngoingLoad", 2),
          _([_._], _.prototype, "Init", 1),
          _([_._], _.prototype, "OnTextFilterDictionaryChanged", 1),
          _([_._], _.prototype, "UpdateCommunityPreferences", 1),
          _([_._], _.prototype, "BRebuildFilter", 1);
        let _;
        function _() {
          if (!_) {
            const _ = new Set();
            let _ = {
              sessionid: (0, _._)(),
              origin: _(),
            };
            _()
              .get(_._.COMMUNITY_BASE_URL + "textfilter/ajaxgetfriendslist", {
                params: _,
                withCredentials: !0,
              })
              .then((_) => {
                for (const _ of _.data.friendslist?.friends ?? [])
                  (0, _.S$u)(_.efriendrelationship) &&
                    _.add(new _._(_.ulfriendid).GetAccountID());
              }),
              (_ = (_) => _.has(_));
          }
          return _;
        }
        let _ = null,
          _ = !1;
        function _() {
          return (
            _ ||
              (_ = new _({
                BIsFriend: _(),
              })),
            _
          );
        }
        function _() {
          const _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(() => _().m_bInitialized);
          return (
            !_ &&
              !_ &&
              ((_ = !0), _.Init(_._.accountid, _, _).finally(() => (_ = !1))),
            [_, _]
          );
        }
        function _(_) {
          let _ = null;
          return _(_) ? (_ = _) : _(_) ? (_ = _) : _[_] && (_ = _[_]), _;
        }
        function _(_) {
          const { rollup: _, uimode: _, location: _ } = _,
            _ = _(_.type);
          return _
            ? (0, _.jsx)(_._, {
                controller: "notification",
                method: (0, _.fLp)(_),
                submethod: (0, _.ey3)(_),
                children: (0, _.jsx)(_, {
                  ..._,
                }),
              })
            : null;
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_.item.notification_type, _.item.body_data),
            _ = _(_.type)
              .replace("k_ESteamNotificationType_", "")
              ?.toLowerCase(),
            _ = (0, _._)(_?.link ?? "#", _),
            _ = () =>
              _(() => {
                _?.link && _ && window.location.assign(_);
              }, _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _?.link ? _ : "#",
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              icon: _(_.type),
              onActivate: _,
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = `${_._.COMMUNITY_BASE_URL}my/gamenotifications/`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              icon: (0, _.jsx)(_.Qte, {}),
              fallbackLogo: (0, _.jsx)(_.wC1, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              steamid: _,
              url: _,
              strTitleLoc: _,
              strBodyLoc: _,
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            { data: _ } = _(_),
            _ = (_) => _(() => {}, _.item, _),
            _ = () => _(() => window.location.assign(_), _.item);
          if (!_) return null;
          const _ = !_,
            _ = (0, _._)(_, _?.m_strPlayerName ?? ""),
            _ = (0, _._)(_, _?.m_strPlayerName ?? "");
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              title: _,
              body: _,
              bDataLoading: _,
              logoUrl: _?.avatar_url_medium,
              icon: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const _ = _(_.rollup.type, _.rollup.item.body_data);
          if (!_) return null;
          const { strTitleLoc: _, strBodyLoc: _, strUrl: _, steamid: _ } = _;
          return !_ || !_ || !_
            ? null
            : (0, _.jsx)(_, {
                steamid: _,
                url: _,
                strTitleLoc: _,
                strBodyLoc: _,
                ..._,
              });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = _(_),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/tradeoffers`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _._.InitFromAccountID(_),
            { data: _ } = _(_.GetAccountID());
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.h20, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              displayName: _?.m_strPlayerName,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        const _ = (_) => {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = `${_._.COMMUNITY_BASE_URL}my/tradehistory`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.h20, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        };
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/inventory/#pending_gifts`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_),
            _ = _._.InitFromAccountID(_),
            { data: _ } = _(_.GetAccountID());
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              logo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_._, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              senderName: _?.m_strPlayerName,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            { data: _ } = _(_.responder_steamid),
            _ =
              _.package_id > 0
                ? {
                    packageid: _.package_id,
                  }
                : {
                    bundleid: _.bundle_id,
                  },
            { data: _ } = (0, _._)(_),
            _ = _ ? `app/${_.appid}` : "",
            _ = `${_._.STORE_BASE_URL}${_}`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = !_ || !_,
            _ = (0, _._)("#SteamNotifications_RequestedGameAddedTitle"),
            _ = _
              ? (0, _._)(
                  "#SteamNotifications_RequestedGameAddedBody",
                  _.name ?? "",
                )
              : "";
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              title: _,
              body: _,
              bDataLoading: _,
              logoUrl: _?.avatar_url_medium,
              icon: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = _(_.item, _, _),
            _ = _(_),
            { data: _ } = (0, _._)(
              _?.appid
                ? {
                    appid: _.appid,
                  }
                : void 0,
            ),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/inventory`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              appName: _?.name,
              icon: (0, _.jsx)(_.rI_, {}),
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              itemState: _,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = (0, _._)(),
            _ = `${_._.COMMUNITY_BASE_URL}profiles/${_}/friends/pending`,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _),
            _ = _(_),
            { data: _ } = _(_.requestorID);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Gv$, {}),
              icon: (0, _.jsx)(_.sdo, {}),
              onActivate: _,
              location: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              requestorAvatarURL: _?.avatar_url_medium,
              requestorName: _?.m_strPlayerName,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            _ = (0, _._)(),
            _ = _._.COMMUNITY_BASE_URL + _.url,
            _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => {
              _(() => {}, _.item, _);
            },
            _ = _(_) ? _?.account_steam_id?.GetAccountID() : null,
            { data: _ } = _(_),
            _ = _(_) ? _?.owner_steam_id?.GetAccountID() : null,
            { data: _ } = _(_),
            _ = _.json_data?.app_id
              ? {
                  appid: _.json_data?.app_id,
                }
              : void 0,
            { data: _ } = (0, _._)(_),
            [_, _] = _(),
            _ = _
              ? _.FilterText(_.account_steam_id.GetAccountID(), _.title)
              : "",
            _ = _
              ? _.FilterText(_.account_steam_id.GetAccountID(), _.comment)
              : "";
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.MwB, {}),
              onActivate: _,
              location: _,
              currentUserSteamID: _,
              eUIMode: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              postedByAvatarURL: _?.avatar_url_medium,
              postedByDisplayName: _?.m_strPlayerName,
              ownerDisplayName: _?.m_strPlayerName,
              bNewIndicator: _(_.item),
              appName: _?.name,
              onHide: _,
              commentTitle: _,
              commentBody: _,
              bLoading: !_,
            }),
          });
        }
        function _(_) {
          const {
              rollup: _,
              onNotificationClick: _,
              location: _,
              uimode: _,
              onHide: _,
            } = _,
            _ = _(_),
            { data: _ } = (0, _._)({
              appid: _.appid,
            }),
            [_, _] = (0, _.useState)(""),
            _ = (0, _._)();
          (0, _.useEffect)(() => {
            if (_.count > 1 && _.appids?.length)
              return _(
                _._.STORE_BASE_URL +
                  `wishlist/profiles/${_}/?wng=${_.appids.toString()}#sort=discount`,
              );
            if (_) return _(_._.STORE_BASE_URL + _.store_url_path);
            const _ = _.appid ? `?appid=${_.appid}` : "";
            _(_._.STORE_BASE_URL + `wishlist/profiles/${_}/${_}#sort=discount`);
          }, [_, _, _]);
          const _ = () => _(() => window.location.assign(_), _.item),
            _ = (_) => _(() => {}, _.item, _);
          return (0, _.jsx)("a", {
            href: _,
            onMouseDown: _,
            children: (0, _.jsx)(_, {
              fallbackLogo: (0, _.jsx)(_.Qte, {}),
              icon: (0, _.jsx)(_.ilR, {}),
              onActivate: _,
              location: _,
              data: _,
              timestamp: _.timestamp,
              nUnread: _.rgunread.length,
              eUIMode: _,
              bNewIndicator: _(_.item),
              onHide: _,
            }),
          });
        }
        function _(_) {
          const { url: _, count: _, icon: _, strBody: _, eFeature: _ } = _,
            _ = _(_);
          return !_ || _
            ? null
            : (0, _.jsx)("a", {
                href: _,
                className: _().WebPinnedNotification,
                children: (0, _.jsx)(_, {
                  icon: (0, _.jsx)(_, {}),
                  count: _,
                  onActivate: () => window.location.assign(_),
                  strBody: _,
                  eUIMode: _.yrU,
                  visible: !0,
                }),
              });
        }
        const _ = {
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
          [_]: _,
        };
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          static GetScrollableClassname() {
            return "vt-scrollable";
          }
          m_observer = null;
          m_refElement = _.createRef();
          m_elTracked = null;
          m_bPreviouslyIntersecting = !1;
          BTriggerOnce() {
            return (this.props.trigger || "once") == "once";
          }
          GetBoundingClientRect() {
            return this.m_refElement.current
              ? this.m_refElement.current.getBoundingClientRect()
              : null;
          }
          DestroyObserver() {
            this.m_observer &&
              (this.m_observer.disconnect(),
              (this.m_observer = null),
              (this.m_elTracked = null));
          }
          componentWillUnmount() {
            this.DestroyObserver();
          }
          componentDidMount() {
            this.UpdateObserver(null);
          }
          componentDidUpdate(_) {
            this.UpdateObserver(_);
          }
          UpdateObserver(_) {
            if (this.m_bPreviouslyIntersecting && this.BTriggerOnce()) return;
            this.m_observer &&
              _ &&
              (_.rootMargin != this.m_observer.rootMargin ||
                _.thresholds != this.m_observer.thresholds) &&
              this.DestroyObserver();
            let _ = this.m_refElement.current;
            if (
              (this.m_observer &&
                _ != this.m_elTracked &&
                (this.m_elTracked &&
                  this.m_observer.unobserve(this.m_elTracked),
                (this.m_elTracked = null)),
              !this.m_observer && _)
            ) {
              let _ = {
                root: this.FindScrollableAncestor(_),
              };
              this.props.rootMargin && (_.rootMargin = this.props.rootMargin),
                this.props.thresholds && (_.threshold = this.props.thresholds),
                (this.m_observer = (0, _._)(_, this.OnIntersection, _));
            }
            this.m_observer &&
              _ &&
              _ != this.m_elTracked &&
              (this.m_observer.observe(_), (this.m_elTracked = _));
          }
          FindScrollableAncestor(_) {
            return (0, _._)(_, (_) => {
              const _ = this.props.horizontal
                ? window.getComputedStyle(_).overflowX
                : window.getComputedStyle(_).overflowY;
              return !!(
                _ == "scroll" ||
                _ == "auto" ||
                _.classList.contains(_.GetScrollableClassname())
              );
            });
          }
          HandleRef = (_) => {
            (0, _._)(this.m_refElement, _),
              this.props.containerRef && (0, _._)(this.props.containerRef, _);
          };
          OnIntersection = (_) => {
            let _ = !1;
            for (const _ of _)
              if (_.isIntersecting) {
                _ = !0;
                break;
              }
            this.m_bPreviouslyIntersecting != _ &&
              ((this.m_bPreviouslyIntersecting = _),
              this.props.onVisibilityChange && this.props.onVisibilityChange(_),
              _ && this.BTriggerOnce() && this.DestroyObserver());
          };
          render() {
            let {
              onVisibilityChange: _,
              rootMargin: _,
              trigger: _,
              horizontal: _,
              containerRef: _,
              ..._
            } = this.props;
            return (0, _.jsx)(_._, {
              ref: this.HandleRef,
              ..._,
              children: this.props.children,
            });
          }
        }
        const _ = new _(),
          _ = (0, _._)(function (_) {
            const { bResponsiveHeader: _, notifications: _ } = _;
            _.useEffect(() => {
              _ && !_.m_bLoaded && _.ProcessNewNotificationPayload(_);
            }, [_]);
            const _ = (0, _._)();
            (0, _.useEffect)(() => {
              _.setTransport(_),
                (window.RefreshSteamNotifications = () => _(_));
            }, [_]);
            const _ = _();
            return _
              ? (0, _.jsxs)(_.Fragment, {
                  children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
                })
              : (0, _.jsx)(_, {
                  nTotalUnviewed: _.nUnviewed,
                });
          });
        function _() {
          return (0, _._)(() => ({
            notifications: _.m_rgNotificationRollups,
            summary: _.m_summary,
            loaded: _.m_bLoaded,
            nUnviewed: _.m_nUnviewed,
          }));
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(),
            { data: _ } = _(_),
            _ = _(),
            _ = _?.settings;
          return _.notifications.filter((_) => !_(_.type, _, _) && !_(_.item));
        }
        function _(_) {
          const { nTotalUnviewed: _ } = _,
            _ = _.useRef(null),
            _ = _(),
            [_, _] = _.useState(_().AnimateBell);
          _.useEffect(() => {
            _.current ||
              ((_.current = (0, _._)(
                (0, _.jsx)(_, {
                  popupRef: _,
                }),
                document.getElementById("green_envelope_menu_root"),
                {
                  bPreferPopLeft: !0,
                  bOverlapHorizontal: !0,
                  strClassName: "GreenEnvelopeMenu",
                },
              )),
              _.current.Hide());
            const _ = document.getElementById("header_notification_link");
            _ && (_.style.cssText = "background-color: rgba(0,0,0,0)"),
              window.setTimeout(() => _(null), 2e3);
          }, []);
          const _ = () => {
              _.current?.visible ||
                (_.current?.Show(),
                _.findIndex((_) => !_.item.viewed) != -1 &&
                  _.MarkAllItemsViewed());
            },
            _ = _.useCallback(
              (_) => {
                !_ && _.current?.visible && _.current.Hide();
              },
              [_],
            );
          return (0, _.jsx)(_, {
            trigger: "repeated",
            onVisibilityChange: _,
            children: (0, _.jsx)("button", {
              onClick: _,
              _: "green_envelope_menu_root",
              className: (0, _._)(
                _().NotificationsButton,
                _ ? _().Green : _().Grey,
                _,
              ),
              children: (0, _.jsx)(_.$0s, {
                className: _().SVGNotifications,
                "aria-label": (0, _._)("#NotificationsMenu_Title"),
              }),
            }),
          });
        }
        const _ = (_) => {
            const { popupRef: _ } = _,
              _ = _.useRef(null),
              [_, _] = _.useState(!1);
            _.useEffect(() => {
              _(
                _.current != null &&
                  _.current?.scrollHeight > _.current?.clientHeight,
              );
            }, [_.current?.scrollHeight, _]);
            const _ = _ ? void 0 : _().MenuScrollbarHidden;
            return (0, _.jsxs)("div", {
              className: _().NotificationsMenu,
              onClick: () => _?.current?.Hide(),
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().NotificationsMenuScrollable, _),
                  ref: _,
                  children: [
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                    (0, _.jsx)(_, {}),
                  ],
                }),
              ],
            });
          },
          _ = () => {
            const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().NotificationHeader),
              children: [
                (0, _.jsx)("div", {
                  className: _().AllNotificationsTitle,
                  children: (0, _._)("#NotificationsMenu_Title"),
                }),
                (0, _.jsx)("a", {
                  href: _,
                  children: (0, _.jsx)("div", {
                    className: _().AllNotificationsButton,
                    children: (0, _._)("#NotificationsMenu_ViewAll"),
                  }),
                }),
              ],
            });
          },
          _ = () => {
            const _ = `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications`;
            return (0, _.jsx)("div", {
              className: (0, _._)(
                _().NotificationHeader,
                _().ResponsiveViewAll,
              ),
              children: (0, _.jsx)("a", {
                href: _,
                children: (0, _.jsx)("div", {
                  className: _().AllNotificationsButton,
                  children: (0, _._)("#NotificationsMenu_ViewAll"),
                }),
              }),
            });
          };
        function _(_, _, _) {
          !_.read &&
            (!_ || _.button == 0 || _.button == 1) &&
            _.notification_id &&
            _.MarkItemRead(_.notification_id),
            _();
        }
        function _() {
          const _ = _();
          return _.length == 0
            ? null
            : (0, _.jsx)("div", {
                className: _().NotificationsMenuEntriesContainer,
                children: _.map((_, _) =>
                  (0, _.jsx)(
                    _,
                    {
                      rollup: _,
                      onNotificationClick: _,
                      uimode: _.yrU,
                      location: _.B3I,
                    },
                    _,
                  ),
                ),
              });
        }
        const _ = [
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory/#pending_gifts`,
            countItem: "pending_gifts",
            icon: _._,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewGiftsPinned_Body", _),
            feature: _,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/home/invites`,
            countItem: "pending_invites",
            icon: _.sdo,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_FriendInvitePinned_Body", _),
            feature: _,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/notifications#comments`,
            countItem: "comments",
            icon: _.MwB,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewCommentPinned_Body", _),
            feature: _,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/inventory`,
            countItem: "inventory_items",
            icon: _.rI_,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewItemAnnouncementPinned_Body", _),
            feature: _,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/tradeoffers`,
            countItem: "trade_offers",
            icon: _.h20,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewTradeOffersPinned_Body", _),
            feature: _,
          },
          {
            fnUrl: () =>
              `${_._.COMMUNITY_BASE_URL}profiles/${_._.steamid}/gamenotifications`,
            countItem: "async_game_updates",
            icon: _.wC1,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewAsyncGamePinned_Body", _),
          },
          {
            fnUrl: () => `${_._.COMMUNITY_BASE_URL}my/moderatormessages`,
            countItem: "moderator_messages",
            icon: _.hJ4,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewModeratorMessagePinned_Body", _),
            feature: _,
          },
          {
            fnUrl: () => `${_._.HELP_BASE_URL}wizard/HelpRequests`,
            countItem: "help_request_replies",
            icon: _.Cv4,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_NewHelpRequestRepliesPinned_Body", _),
          },
          {
            fnUrl: () =>
              `${_._.STORE_BASE_URL}account/familymanagement/join?ft=${_._.steamid}`,
            countItem: "family_invites",
            icon: _.Qte,
            fnLocalizeBody: (_) =>
              (0, _._)("#Notification_FamilyInvitePinned_Body", _),
          },
        ];
        function _() {
          const _ = _();
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  url: _.fnUrl(),
                  count: _.summary[_.countItem],
                  icon: _.icon,
                  strBody: _.fnLocalizeBody(_.summary[_.countItem]),
                  eFeature: _.feature,
                },
                _.countItem,
              ),
            ),
          });
        }
        function _() {
          return (0, _.jsxs)("div", {
            className: _().EmptyNotificationsCtn,
            children: [
              (0, _.jsx)("div", {
                className: _().EmptyNotificationsTitle,
                children: (0, _._)("#NotificationsList_EmptyTitle_New"),
              }),
              (0, _.jsx)("div", {
                className: _().EmptyNotificationsBody,
                children: (0, _._)("#NotificationsList_EmptyBody"),
              }),
            ],
          });
        }
        const _ = _;
        async function _(_) {
          let _ = null;
          try {
            _ = await _(
              _,
              _._.steamid,
              (0, _.sfN)(_._.LANGUAGE),
              void 0,
              !1,
              !1,
            );
          } catch {}
          _ && _.ProcessNewNotificationPayload(_);
        }
      },
      chunkid: (module) => {
        module.exports = {
          NotificationsMenu: "_3EPagkYPxulGbe-5invUhK",
          NotificationsMenuEntriesContainer: "m0H4PhlsBcw0NzlQje7q",
          NotificationsMenuScrollable: "_2hgxpK_sWS7mDF66uPetpF",
          MenuScrollbarHidden: "_2Qeur5RWXHnW-xneBJUfH-",
          NotificationHeader: "_1Uh_y1atXoMOUxGyUQK8vC",
          ResponsiveViewAll: "_2q-LyEsEZpxFZBbqO07xgp",
          AllNotificationsTitle: "-Dpw5WXg2gjckpFAkP_lg",
          AllNotificationsButton: "_1OH7OiFxIJo5Y7Z4Z6U6iO",
          NotificationsButton: "_1jW5_Ycv6jGKu28A1OSIQK",
          SVGNotifications: "_13fwmIK8Ajo0qndUS5zb7E",
          Grey: "_34A9kjlnmgfUWSmr16VjXE",
          Disabled: "_3h1sV2qrp20U37VwC47pM2",
          Green: "_2Hpe0_DGY0TBz45Lg0zUr9",
          AnimateBell: "_34o7mvTYzowbNAllqYUQuJ",
          NotificationBellAnimation: "_3W6ngOzFfcJJpftaQ5t9bk",
          NotificationBellUvula: "xpAr9gP3YAkKomrGUivf8",
          EmptyNotificationsCtn: "_2a4xLIvDI3rmLxVfLMQFTz",
          EmptyNotificationsTitle: "_2SIA4NMfduV_HWDptv6cAK",
          EmptyNotificationsBody: "EpEznkfiKxcqI9p52OmRx",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_2yhmcyeUOyM8lt__Skbk9O",
          "ItemFocusAnim-darkerGrey": "_3mfiE_PUWOPy8UTDJlYI0u",
          Timestamp: "_26rvbcKFCQjLKx-pD7BhvY",
          StandardTemplate: "_3-H47wPl1Ng3lh7xGZOPIg",
          PinnedTemplate: "_3V6804k2yutEiF6IWg8axH",
          StandardLogoDimensions: "_1KIwOtwkYQUtRoPyxlh3G-",
          Content: "_2axKS7MCnzMBRXRcYLn2Is",
          Header: "_1WuK_iZ6ARkIiptCX5qd7G",
          Icon: "_2F0wqsu2mqsHxBSJcu1sPJ",
          Title: "_18PwvOcpWfW3M8j2-bEPPJ",
          StandardNotificationDescription: "_3fUrGm-WHq3qxIpSqRZDgc",
          StandardNotificationSubText: "_2yUEtF_eCucoxdu85zlOCp",
          Multiline: "_2sQoMK-0onl8u8WHHUnDdw",
          Count: "_2zZKXEnYcEZsL5OGHzkKv2",
          PinnedBody: "_1nziGc41LlyGfDufK0iQos",
          AllNotificationsTemplate: "_1xvIUtLkTrdEk2Ob1MqFcQ",
          StandardTemplateDesktop: "_1GcAugE5c4nbBUwrA4_xwS",
          DesktopToastTemplate: "_3ENh9LzRnZgfTyfxp_J2rr",
          PinnedTemplateWeb: "_2Mo87NUHyjLkjvKcPQxPRu",
          PinnedTemplateDesktop: "j9jQA6QaLJ23lyfuo9nY6",
          AppLogo: "_3mWpfn1_PDwd1gOm26RhMl",
          AppLogoBackgroundImage: "_2FcBwxd4lGOEMTXCnmxczK",
          MarkedRead: "_15_E6efeCt2NTqCgUKav1W",
          markReadBackground: "_1paPuAH6aCXNKdXvf5jv1d",
          Unread: "_1YAQHDHv4hsPaauccvAFtn",
          PlayerNickName: "_2n0ipWJFroZdQVwkXHqdJL",
          FullName: "_2EWNcLrlrl9Gx-yZH039tH",
          IngameTitle: "_3uSbhtY3vHtdj-3tpua_Pb",
          OnlineTitle: "_3bqD-bBMgrGwLsBY2L1gSL",
          GroupMessageTitle: "_3C8GdaaS-zmchnCHHiHG6n",
          GroupMessageUserName: "_2hs2ZR_wYkRHWdtlr681Z6",
          GroupMessageBody: "_3AbCrY-d5NpL5E5DUfgdQ8",
          GroupMessageIcon: "_3vDmqJBvNPH1D_p-Da_djj",
          Body: "_2jpxEWvo06efD6-NR1cplA",
          FriendInGameAppColor: "_2XSwzNWGiJvW0zTgqT0DUI",
          WishlistBlurImage: "_2HBcq6niThHlNihI9xiBSm",
          AvatarStatus: "_1mMC7Hv71CzO0jfm_66W4K",
          IncomingCallToast: "_3wNcsYlo3lQ-yamJPMco8F",
          ShortLogoDimensions: "_1-CP3jNFd252Y0uV_Ua0VE",
          LoadingTemplate: "_2mFLv5Puw95n9oUFp9OMAs",
          Hide: "_1W2rIElq16YPQi4DqoqPLM",
          ShimmerLogo: "_3QrlTtpidzjKPhrvgxFXbI",
          ShimmerBody: "_1ugrCy0x7fRJ7TyoURzzTa",
          ShimmerHeader: "_1Tp3oOeqWARWDsQDI3owRD",
          loading: "_3CI8AFu67GMoINumH6Yvax",
          BottomBar: "_2FMNpalUV1wDdi-cywGIMN",
          NewIndicator: "-B93GaGXJf0lPTNh66m4i",
          ShortTemplate: "fntOoeLPSTpmyXGGmgf99",
          TwoLine: "P1FhGdWv2NCXZXWsaKqqY",
          FullWidth: "_6EcDVXFHtdirTkETQjKOK",
          BackgroundAnimation: "_3w9sEc9GApj44Kg099SX99",
          "ItemFocusAnim-darkerGrey-nocolor": "_3zMKq0Ov9QZXkvzuZaEgKn",
          "ItemFocusAnim-darkGreySettings": "qadlYXxqgL7iZI-3WagQW",
          "ItemFocusAnim-darkGrey": "_1bS3_eEfJQL1uvh9ueXwHc",
          "ItemFocusAnim-grey": "K14jHOeux9t-cKLHsLZ_R",
          "ItemFocusAnim-translucent-white-10": "_14krbCetggqySSjN1tprjy",
          "ItemFocusAnim-translucent-white-20": "_3aWvV_8F4oUsZSPZ67nkhH",
          "ItemFocusAnimBorder-darkGrey": "_3o2RzV2UyrY6P95PvLN1XB",
          "ItemFocusAnim-green": "_3UOE3rRpe9MNf7xTX3P_FD",
          focusAnimation: "_3CquyV6pQpz_ZeEYyhu-6r",
          hoverAnimation: "X3tjvkOeBNndhakzDz7bk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_30fVm4Rsel-4nUKEiPJgz9",
          "ItemFocusAnim-darkerGrey": "_3z4hV832fi8W9gRRPhmC1V",
          Timestamp: "_7XKFnSNjW_tHfyxaezoD3",
          StandardTemplate: "_2h6KD6p6y4vIgO2Toxx-_K",
          PinnedTemplate: "_3oKFhPrh1lbp-WtA72Q2Yi",
          StandardLogoDimensions: "_1VRx9qVxigUC4qeM0NWNMR",
          Content: "_1SQjN025UZ0z_8AkWHCsGd",
          Header: "_3u0Sb5gUTscs0TQlKpA7WZ",
          Icon: "_2auM-VHPU-KKomAWyuWrSV",
          Title: "_2MGSmn9lIFnmLVIX49POSx",
          StandardNotificationDescription: "_26v9mHAi56x63OwY-jxett",
          StandardNotificationSubText: "_3hEeummFKRey8l5VXxZwxz",
          Multiline: "_21DVSDVmPUgGXuTkI2HqbO",
          Count: "CRYjulQaQOjokS7b_8cOH",
          PinnedBody: "h-lNlCUnCRbIcn38-Oqaw",
          AllNotificationsTemplate: "QFW0BtI4l77AFmv1xLAkx",
          StandardTemplateDesktop: "_3B8wRA4H7e_oSksYNqpSPv",
          DesktopToastTemplate: "_2NdiftmP-B3C4LPWnNGTCB",
          PinnedTemplateWeb: "_25gii5r23MmAqXvLZj24tK",
          PinnedTemplateDesktop: "_3k90ug209sE23xAMqcM74s",
          AppLogo: "_3p74fAyjLzNltNbJUf55kk",
          AppLogoBackgroundImage: "_2qpzt_PffGJwN3Vm2bkKQI",
          MarkedRead: "FMwg5OFGT6NP3h3EW89IP",
          markReadBackground: "_3eZECZ7BxfGeq4yfoKHDal",
          Unread: "_1B1XTNsfuwOaDPAkkr8M42",
          PlayerNickName: "_1YqYJ2yaHfODWbIB0abgzQ",
          FullName: "fozLrCNjCbPGiVKYi2L_M",
          IngameTitle: "rN6p14MiFEoCZvdjnfpgQ",
          OnlineTitle: "_35uWYHT2zJoSv9PE_euqxo",
          GroupMessageTitle: "_33qpBDHTkkQ4TCFB4gPGk_",
          GroupMessageUserName: "_3m94SADycX0JIk8urdZQ2X",
          GroupMessageBody: "_1XTFkmspXcukxWSFz5Fn61",
          GroupMessageIcon: "brsvX3XkZwkemQ_HM3JOP",
          Body: "_3JT9UI68R_-oZc63_NRIcA",
          FriendInGameAppColor: "_10165iFPxrqzt0kfV00tbu",
          WishlistBlurImage: "_3QLXE6SzCKiwEgK5iORZPA",
          AvatarStatus: "_1iutOH026zK2dbpsMFDmMm",
          IncomingCallToast: "j2oDsM6xV2rFx-UrisfYh",
          ShortLogoDimensions: "BNKAIWal-7E00ymauRaHg",
          LoadingTemplate: "Lakql1yamweHbP1OPuahF",
          Hide: "WnLkF0HwOQr2BIjlAlrjF",
          ShimmerLogo: "_2macs5lWMPN5NfDpGE3Iyh",
          ShimmerBody: "_3Ivl8dbxH6D6LwaSLTNTLe",
          ShimmerHeader: "_2a2loheX4ZKGZCGNEdAT3h",
          loading: "_2PdZZCNo176UV7FcPPdqTt",
          BottomBar: "_3yiWpBXwEmDLlaIupVXjUt",
          NewIndicator: "_1pIhbqWsrCVPaGGYc6fT-H",
          BackgroundAnimation: "_2THWJm_DP4_8_21tEsXSSj",
          "ItemFocusAnim-darkerGrey-nocolor": "_3TDFCqwgSFsXL90HH5PmyQ",
          "ItemFocusAnim-darkGreySettings": "_2V49icFFKCzM2imCbWVQKz",
          "ItemFocusAnim-darkGrey": "_22M7t0tCHSgmIcx2rwkyDn",
          "ItemFocusAnim-grey": "lhtmiPnDLy_PH3nWN5N8F",
          "ItemFocusAnim-translucent-white-10": "xPu5sAUAb9KZcZojHZeok",
          "ItemFocusAnim-translucent-white-20": "_35HEPLHufn9k-5gTKvZYrO",
          "ItemFocusAnimBorder-darkGrey": "TQ99CK6pDp4hhQZWjAgGz",
          "ItemFocusAnim-green": "Rxe4URLYwNKRWJ2UaiQq2",
          focusAnimation: "_1vcir9Vcuml6I0DWyCei3i",
          hoverAnimation: "_3dGxvxYZPEwyYDQfin8FOd",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          loadinganimationiterationcount: "20",
          loadinganimationduration: "1s",
          StandardTemplateContainer: "_1lqXpJpRlYvyM2fBx6beHd",
          "ItemFocusAnim-darkerGrey": "_3WRewosNPP9V6g7O3hWH5k",
          Timestamp: "w1Bf_xO8scHETzsfr2HtM",
          StandardTemplate: "_1k275cE1gk-jpZE5r-37zl",
          PinnedTemplate: "_4egmnB1wTrDll5Mc_eal8",
          StandardLogoDimensions: "_3n8vALReUk851YHiEiWEfQ",
          Content: "_3c_vhR2WnZLHuyVP2m4UO2",
          Header: "_1186NyOXeTBoB-vvWlJq1I",
          Icon: "_1piyUE09t3QXktcD3FrCwJ",
          Title: "_2x6qMHeQndH78e6sL2XHk_",
          StandardNotificationDescription: "Wh50moO-nKvfE3l4Buav",
          StandardNotificationSubText: "_2T5BxMT87QHfYWXDHFzpT1",
          Multiline: "_2fLmG6Oxk7tiZGLfH8dwXG",
          Count: "sdjVIgKSOKqyi7O2VDy70",
          PinnedBody: "_3OCMnBpXVpdYv5isBLVdJK",
          AllNotificationsTemplate: "d9RJTj9G8qU-U9-he2cQx",
          StandardTemplateDesktop: "_2uW9K6fqc6jZX1XBjnLjw",
          DesktopToastTemplate: "QbSr4hMpMfp0Qtsg4qOh5",
          PinnedTemplateWeb: "_3BvcYKoq-n7GgNwbfFgRAc",
          PinnedTemplateDesktop: "alS2LW_qAwNkYk_GPUC_3",
          AppLogo: "CA_EGBMvnnGy5ib6McPk1",
          AppLogoBackgroundImage: "_1WuzAPck-kGxa4mMIJvAzm",
          MarkedRead: "Wu9rtfDDzG6xfABpqX6oN",
          markReadBackground: "ULHzVL1tuahqUcVisVW-P",
          Unread: "_2kLHZTRgRl0POZfXPcfxks",
          PlayerNickName: "_2YpLUGZ7uC8ZZn67r0WFW_",
          FullName: "_31kBipdYxJf7OOfdvXt0_h",
          IngameTitle: "uoMiFtc9c1Qj-4N-yFmVY",
          OnlineTitle: "_1HmXUbyHRzGqMtpIXrI9-T",
          GroupMessageTitle: "_2sd1s2w2m26_3gQi1EUTR_",
          GroupMessageUserName: "gAoOCl1gHHigL5slBv_yA",
          GroupMessageBody: "_8o4Xz7dGPPQqf36w2HN--",
          GroupMessageIcon: "_15V41jl8st_uQsDMGCqnBx",
          Body: "_1bPTPIVs6QoX2gWvrhM6J-",
          FriendInGameAppColor: "_3xh1N-yvA3u7rLrq-DYZ1U",
          WishlistBlurImage: "_1GTWEgiW95vRIhUWfk6omo",
          AvatarStatus: "_2wKwJWdgy12ZO1tSjI9lXY",
          IncomingCallToast: "YukY0Anz5NHyFELGf9mPn",
          ShortLogoDimensions: "_1DaCc7OUCLHfc6VrQ3OIne",
          LoadingTemplate: "_5iNL0HazAvED5sWE9InJy",
          Hide: "_40XuJsiNG2Ls-sTWqrXG8",
          ShimmerLogo: "_1vzYeDqT7Eiy-LKfLm42sI",
          ShimmerBody: "_12dqPPvVDehwCa8i2oM-eA",
          ShimmerHeader: "_2ZzsgKvsaWmnKQRz0W83GA",
          loading: "_2qr7PO4jvslSCsJbTRFpwd",
          BottomBar: "IUPLZJhHdBex9tQTgC6Ug",
          NewIndicator: "_38yM72K6RxKmOhKZtInP2x",
          AllNotificationsCommentPlus: "WbA7y77Ujam9JOnYuGsMj",
          FriendIndicator: "_2Hphxk564S5yQHog-MFXfN",
          HideButton: "_3M-7E5Nj8iNX_jL5pAQDy_",
          SteamNotificationWrapper: "UmtNgXD92RoDeYjxKEskk",
          BackgroundAnimation: "CHduhRYQLY29chQ5oLbsR",
          "ItemFocusAnim-darkerGrey-nocolor": "_3bOlzQnTJZnV9rTU3NSxJh",
          "ItemFocusAnim-darkGreySettings": "_1bdnqXVo31tiUrXoxNB3wW",
          "ItemFocusAnim-darkGrey": "uOdBxiMFNvmWe8MWKL2vT",
          "ItemFocusAnim-grey": "_9s1knb2MNj9uD9M1SCh2u",
          "ItemFocusAnim-translucent-white-10": "_1YVG7HtpgQ26Yx-8ZWKCBi",
          "ItemFocusAnim-translucent-white-20": "_3AcQtXPws6yWb9XuDRcDvV",
          "ItemFocusAnimBorder-darkGrey": "_2pMCkkW6W_xYaepnqR1QDg",
          "ItemFocusAnim-green": "_8sFcRF04vIhk1ou7_oMSI",
          focusAnimation: "_1etMKTqAtC0g5-7msByztO",
          hoverAnimation: "_3iNzRmuVGoWKgoa3u41Fdz",
        };
      },
      chunkid: (module) => {
        module.exports = {
          WebPinnedNotification: "_34nLZDNirxRHssbsjB_dJf",
        };
      },
    },
  ]);
})();
