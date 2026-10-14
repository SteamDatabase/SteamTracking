(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [68396],
    {
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
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
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
          _ = 0,
          _ = 1,
          _ = 2;
        function _(_) {
          return "unknown EBroadcastChatPermission ( " + _ + " )";
        }
        function _(_) {
          return "unknown EBroadcastWatchLocation ( " + _ + " )";
        }
        function _(_) {
          return "unknown EBroadcastChatBan ( " + _ + " )";
        }
        function _(_) {
          return "unknown EBroadcastRestriction ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.permission || _._(_._()),
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
                    permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    gameid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    client_instance_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    cellid: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtmp_token: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    thumbnail_upload: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sysid: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    allow_webrtc: {
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
            return "CBroadcast_BeginBroadcastSession_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    thumbnail_upload_address: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_upload_token: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_interval_seconds: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    heartbeat_interval_seconds: {
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
            return "CBroadcast_BeginBroadcastSession_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
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
            return "CBroadcast_EndBroadcastSession_Request";
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
            return "CBroadcast_EndBroadcastSession_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    cellid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    as_rtmp: {
                      _: 3,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    delay_seconds: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    rtmp_token: {
                      _: 5,
                      _: "0",
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    upload_ip_address: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_replay: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    sysid: {
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
            return "CBroadcast_StartBroadcastUpload_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_token || _._(_._()),
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
                    upload_token: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    upload_address: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_upload_id: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    enable_replay: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    http_address: {
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
            return "CBroadcast_StartBroadcastUpload_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_token: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    upload_address: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    http_address: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_upload_id: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    heartbeat_interval_seconds: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_rtmp: {
                      _: 7,
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
            return "CBroadcast_BroadcastUploadStarted_Notification";
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
                    broadcast_id: {
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
            return "CBroadcast_GetBroadcastStatus_Request";
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
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_viewers: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    permission: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_rtmp: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    seconds_delay: {
                      _: 6,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_publisher: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    thumbnail_url: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    update_interval: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_uploading: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    duration: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_replay: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_capturing_vod: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_store_whitelisted: {
                      _: 14,
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
            return "CBroadcast_GetBroadcastStatus_Response";
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
                    broadcast_id: {
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
            return "CBroadcast_GetBroadcastThumbnail_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.thumbnail_url || _._(_._()),
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
                    thumbnail_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    update_interval: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    num_viewers: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    duration: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_GetBroadcastThumbnail_Response";
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
                    existing_broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    client_cell: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    watch_location: {
                      _: 6,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    is_webrtc: {
                      _: 7,
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
            return "CBroadcast_WatchBroadcast_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.response || _._(_._()),
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
                    response: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    mpd_url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_id: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gameid: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_viewers: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    permission: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    is_rtmp: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    seconds_delay: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    viewer_token: {
                      _: 10,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    hls_m3u8_master_url: {
                      _: 11,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    heartbeat_interval: {
                      _: 12,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    thumbnail_url: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_webrtc: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    webrtc_session_id: {
                      _: 15,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_offer_sdp: {
                      _: 16,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    webrtc_turn_server: {
                      _: 17,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_replay: {
                      _: 18,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    duration: {
                      _: 19,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cdn_auth_url_parameters: {
                      _: 20,
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
            return "CBroadcast_WatchBroadcast_Response";
          }
        }
        function _(_) {
          return (
            "unknown CBroadcast_WatchBroadcast_Response_EWatchResponse ( " +
            _ +
            " )"
          );
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
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    representation: {
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
            return "CBroadcast_HeartbeatBroadcast_Notification";
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
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
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
            return "CBroadcast_StopWatchingBroadcast_Notification";
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
                    approval_response: {
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
            return "CBroadcast_InviteToBroadcast_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.success || _._(_._()),
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
                    success: {
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
            return "CBroadcast_InviteToBroadcast_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.permission || _._(_._()),
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
                    permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    gameid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_data_config: {
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
            return "CBroadcast_SendBroadcastStateToServer_Request";
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
            return "CBroadcast_SendBroadcastStateToServer_Response";
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
                    state: {
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
            return "CBroadcast_BroadcastViewerState_Notification";
          }
        }
        function _(_) {
          return (
            "unknown CBroadcast_BroadcastViewerState_Notification_EViewerState ( " +
            _ +
            " )"
          );
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
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
            return "CBroadcast_WaitingBroadcastViewer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_relay_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_result: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    too_many_poor_uploads: {
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
            return "CBroadcast_StopBroadcastUpload_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
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
            return "CBroadcast_SessionClosed_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    num_viewers: {
                      _: 2,
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
            return "CBroadcast_BroadcastStatus_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    broadcast_channel_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_channel_avatar: {
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
            return "CBroadcast_BroadcastChannelLive_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.thumbnail_upload_token || _._(_._()),
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
                    thumbnail_upload_token: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_broadcast_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    thumbnail_data: {
                      _: 3,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    thumbnail_width: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_height: {
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
            return "CBroadcast_SendThumbnailToRelay_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_upload_id || _._(_._()),
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
                    broadcast_upload_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_result: {
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
            return "CBroadcast_NotifyBroadcastUploadStop_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
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
                    broadcaster_steamid: {
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
            return "CBroadcast_ViewerBroadcastInvite_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_id || _._(_._()),
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
                    broadcast_id: {
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
            return "CBroadcast_NotifyBroadcastSessionHeartbeat_Notification";
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
                    broadcast_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    client_ip: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    client_cell: {
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
            return "CBroadcast_GetBroadcastChatInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    view_url_template: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    flair_group_ids: {
                      _: 4,
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
            return "CBroadcast_GetBroadcastChatInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    message: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    instance_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 4,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    country_code: {
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
            return "CBroadcast_PostChatMessage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.persona_name || _._(_._()),
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
                    persona_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    in_game: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    result: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    cooldown_time_seconds: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CBroadcast_PostChatMessage_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    flair: {
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
            return "CBroadcast_UpdateChatMessageFlair_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.result || _._(_._()),
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
                    result: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    chat_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    flair: {
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
            return "CBroadcast_UpdateChatMessageFlair_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    muted: {
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
            return "CBroadcast_MuteBroadcastChatUser_Request";
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
            return "CBroadcast_MuteBroadcastChatUser_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_steamid: {
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
            return "CBroadcast_RemoveUserChatText_Request";
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
            return "CBroadcast_RemoveUserChatText_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    user_steamid: {
                      _: 2,
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
            return "CBroadcast_GetBroadcastChatUserNames_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.persona_names || _._(_._()),
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
                    persona_names: {
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
            return "CBroadcast_GetBroadcastChatUserNames_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steam_id || _._(_._()),
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
                    steam_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    persona: {
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
            return "CBroadcast_GetBroadcastChatUserNames_Response_PersonaName";
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
                    broadcast_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    first_segment: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    num_segments: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    clip_description: {
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
            return "CBroadcast_StartBuildClip_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
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
                    broadcast_clip_id: {
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
            return "CBroadcast_StartBuildClip_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
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
                    broadcast_clip_id: {
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
            return "CBroadcast_GetBuildClipStatus_Request";
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
            return "CBroadcast_GetBuildClipStatus_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
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
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    start_time: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    end_time: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    video_description: {
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
            return "CBroadcast_SetClipDetails_Request";
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
            return "CBroadcast_SetClipDetails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
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
                    broadcast_clip_id: {
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
            return "CBroadcast_GetClipDetails_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
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
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    video_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    channel_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid_broadcaster: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    accountid_clipmaker: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    video_description: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_time: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    length_milliseconds: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_path: {
                      _: 10,
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
            return "CBroadcast_GetClipDetails_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_permission || _._(_._()),
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
                    broadcast_permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    update_token: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    broadcast_delay: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    app_id: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    required_app_id: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcast_chat_permission: {
                      _: 6,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    broadcast_buffer: {
                      _: 7,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    steamid: {
                      _: 8,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chat_rate_limit: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    enable_replay: {
                      _: 10,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_partner_chat_only: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    wordban_list: {
                      _: 12,
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
            return "CBroadcast_SetRTMPInfo_Request";
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
            return "CBroadcast_SetRTMPInfo_Response";
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
            return "CBroadcast_GetRTMPInfo_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_permission || _._(_._()),
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
                    broadcast_permission: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    rtmp_host: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtmp_token: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_delay: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    app_id: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    required_app_id: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcast_chat_permission: {
                      _: 7,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    broadcast_buffer: {
                      _: 8,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    steamid: {
                      _: 9,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chat_rate_limit: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    enable_replay: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_partner_chat_only: {
                      _: 12,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    wordban_list: {
                      _: 13,
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
            return "CBroadcast_GetRTMPInfo_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.row_limit || _._(_._()),
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
                    row_limit: {
                      _: 1,
                      _: 100,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_time: {
                      _: 2,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    steamid: {
                      _: 4,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    session_id: {
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
            return "CBroadcast_GetBroadcastUploadStats_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_stats || _._(_._()),
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
                    upload_stats: {
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
            return "CBroadcast_GetBroadcastUploadStats_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_result || _._(_._()),
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
                    upload_result: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_stopped: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    seconds_uploaded: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    max_viewers: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolution_x: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolution_y: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    avg_bandwidth: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_bytes: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_id: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_unique_viewers: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_seconds_watched: {
                      _: 11,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time_started: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_id: {
                      _: 13,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    local_address: {
                      _: 14,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    remote_address: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    frames_per_second: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_representations: {
                      _: 17,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    app_name: {
                      _: 18,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_replay: {
                      _: 19,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    session_id: {
                      _: 20,
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
            return "CBroadcast_GetBroadcastUploadStats_Response_UploadStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.upload_id || _._(_._()),
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
                    upload_id: {
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
            return "CBroadcast_GetBroadcastViewerStats_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.viewer_stats || _._(_._()),
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
                    viewer_stats: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    country_stats: {
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
            return "CBroadcast_GetBroadcastViewerStats_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.time || _._(_._()),
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
                    time: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_viewers: {
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
            return "CBroadcast_GetBroadcastViewerStats_Response_ViewerStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.country_code || _._(_._()),
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
                    country_code: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    num_viewers: {
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
            return "CBroadcast_GetBroadcastViewerStats_Response_CountryStats";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.webrtc_session_id || _._(_._()),
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
                    webrtc_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    started: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    offer: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    resolution_x: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    resolution_y: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    fps: {
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
            return "CBroadcast_WebRTCStartResult_Request";
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
            return "CBroadcast_WebRTCStartResult_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.webrtc_session_id || _._(_._()),
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
                    webrtc_session_id: {
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
            return "CBroadcast_WebRTCStopped_Request";
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
            return "CBroadcast_WebRTCStopped_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
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
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    answer: {
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
            return "CBroadcast_WebRTCSetAnswer_Request";
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
            return "CBroadcast_WebRTCSetAnswer_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.sdp_mid || _._(_._()),
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
                    sdp_mid: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    sdp_mline_index: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    candidate: {
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
            return "CBroadcast_WebRTC_Candidate";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.webrtc_session_id || _._(_._()),
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
                    webrtc_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate: {
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
            return "CBroadcast_WebRTCAddHostCandidate_Request";
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
            return "CBroadcast_WebRTCAddHostCandidate_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
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
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate: {
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
            return "CBroadcast_WebRTCAddViewerCandidate_Request";
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
            return "CBroadcast_WebRTCAddViewerCandidate_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcaster_steamid || _._(_._()),
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
                    broadcaster_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate_generation: {
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
            return "CBroadcast_WebRTCGetHostCandidates_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.candidate_generation || _._(_._()),
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
                    candidate_generation: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    candidates: {
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
            return "CBroadcast_WebRTCGetHostCandidates_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
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
                    broadcast_session_id: {
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
            return "CBroadcast_WebRTCNeedTURNServer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cellid || _._(_._()),
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
                    cellid: {
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
            return "CBroadcast_WebRTCLookupTURNServer_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.turn_server || _._(_._()),
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
                    turn_server: {
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
            return "CBroadcast_WebRTCLookupTURNServer_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
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
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    turn_server: {
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
            return "CBroadcast_WebRTCHaveTURNServer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
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
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_steamid: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    viewer_token: {
                      _: 4,
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
            return "CBroadcast_WebRTCStart_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
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
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    answer: {
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
            return "CBroadcast_WebRTCSetAnswer_Notification";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_session_id || _._(_._()),
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
                    broadcast_session_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    webrtc_session_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    candidate: {
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
            return "CBroadcast_WebRTCAddViewerCandidate_Notification";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.BeginBroadcastSession#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.BeginBroadcastSession = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.EndBroadcastSession#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.EndBroadcastSession = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.StartBroadcastUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.StartBroadcastUpload = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.NotifyBroadcastUploadStop#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.NotifyBroadcastUploadStop = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WatchBroadcast#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.WatchBroadcast = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.HeartbeatBroadcast#1",
              (0, _._)(_, _),
              {
                ePrivilege: 2,
              },
            );
          }
          _.HeartbeatBroadcast = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.StopWatchingBroadcast#1",
              (0, _._)(_, _),
              {
                ePrivilege: 2,
              },
            );
          }
          _.StopWatchingBroadcast = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastStatus#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.GetBroadcastStatus = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastThumbnail#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.GetBroadcastThumbnail = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.InviteToBroadcast#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.InviteToBroadcast = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.SendBroadcastStateToServer#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.SendBroadcastStateToServer = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.NotifyBroadcastSessionHeartbeat#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.NotifyBroadcastSessionHeartbeat = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastChatInfo#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 2,
              },
            );
          }
          _.GetBroadcastChatInfo = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.PostChatMessage#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 3,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.PostChatMessage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.UpdateChatMessageFlair#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.UpdateChatMessageFlair = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.MuteBroadcastChatUser#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 3,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.MuteBroadcastChatUser = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.RemoveUserChatText#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 3,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.RemoveUserChatText = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastChatUserNames#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetBroadcastChatUserNames = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.StartBuildClip#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.StartBuildClip = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBuildClipStatus#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBuildClipStatus = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.SetClipDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetClipDetails = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetClipDetails#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetClipDetails = _;
          function _(_, _, _) {
            return _.SendMsg("Broadcast.SetRTMPInfo#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
            });
          }
          _.SetRTMPInfo = _;
          function _(_, _, _) {
            return _.SendMsg("Broadcast.GetRTMPInfo#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }
          _.GetRTMPInfo = _;
          function _(_, _) {
            return _.SendNotification(
              "Broadcast.NotifyWebRTCHaveTURNServer#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.NotifyWebRTCHaveTURNServer = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCStartResult#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCStartResult = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCStopped#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCStopped = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCSetAnswer#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCSetAnswer = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCLookupTURNServer#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCLookupTURNServer = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCAddHostCandidate#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCAddHostCandidate = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCAddViewerCandidate#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCAddViewerCandidate = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.WebRTCGetHostCandidates#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.WebRTCGetHostCandidates = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastUploadStats#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastUploadStats = _;
          function _(_, _, _) {
            return _.SendMsg(
              "Broadcast.GetBroadcastViewerStats#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastViewerStats = _;
        })(_ || (_ = {}));
        var _;
        ((_) => {
          (_.NotifyBroadcastViewerStateHandler = {
            name: "BroadcastClient.NotifyBroadcastViewerState#1",
            request: _,
          }),
            (_.NotifyWaitingBroadcastViewerHandler = {
              name: "BroadcastClient.NotifyWaitingBroadcastViewer#1",
              request: _,
            }),
            (_.NotifyBroadcastUploadStartedHandler = {
              name: "BroadcastClient.NotifyBroadcastUploadStarted#1",
              request: _,
            }),
            (_.NotifyStopBroadcastUploadHandler = {
              name: "BroadcastClient.NotifyStopBroadcastUpload#1",
              request: _,
            }),
            (_.NotifySessionClosedHandler = {
              name: "BroadcastClient.NotifySessionClosed#1",
              request: _,
            }),
            (_.NotifyViewerBroadcastInviteHandler = {
              name: "BroadcastClient.NotifyViewerBroadcastInvite#1",
              request: _,
            }),
            (_.NotifyBroadcastStatusHandler = {
              name: "BroadcastClient.NotifyBroadcastStatus#1",
              request: _,
            }),
            (_.NotifyBroadcastChannelLiveHandler = {
              name: "BroadcastClient.NotifyBroadcastChannelLive#1",
              request: _,
            }),
            (_.SendThumbnailToRelayHandler = {
              name: "BroadcastClient.SendThumbnailToRelay#1",
              request: _,
            }),
            (_.NotifyWebRTCNeedTURNServerHandler = {
              name: "BroadcastClient.NotifyWebRTCNeedTURNServer#1",
              request: _,
            }),
            (_.NotifyWebRTCStartHandler = {
              name: "BroadcastClient.NotifyWebRTCStart#1",
              request: _,
            }),
            (_.NotifyWebRTCSetAnswerHandler = {
              name: "BroadcastClient.NotifyWebRTCSetAnswer#1",
              request: _,
            }),
            (_.NotifyWebRTCAddViewerCandidateHandler = {
              name: "BroadcastClient.NotifyWebRTCAddViewerCandidate#1",
              request: _,
            });
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
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
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
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
          _ = 19;
        function _(_) {
          return "unknown EProductPageAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProductViewAction ( " + _ + " )";
        }
        function _(_) {
          return "unknown EProductImpressionFromClientType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETrackedEmailType ( " + _ + " )";
        }
        function _(_) {
          return (
            "unknown EUnifiedProductInteractionStoreItemType ( " + _ + " )"
          );
        }
        function _(_) {
          return "unknown EUnifedProductInteractionActions ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.impressions || _._(_._()),
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
                    impressions: {
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
            return "CProductImpressionsFromClient_Notification";
          }
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
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_impressions: {
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
            return "CProductImpressionsFromClient_Notification_Impression";
          }
        }
        var _;
        ((_) => {
          function _(_, _) {
            return _.SendNotification(
              "ExperimentService.ReportProductImpressionsFromClient#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }
          _.ReportProductImpressionsFromClient = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          if (_) {
            if ("appid" in _) return "app";
            if ("bundleid" in _) return "bundle";
            if ("packageid" in _) return "sub";
          }
        }
        function _(_) {
          const {
              _: _,
              hoverClassName: _,
              fnGetIDOverride: _,
              fnHoverState: _,
              disableScreenshots: _,
              children: _,
            } = _,
            _ = _.useRef(null),
            _ = _.useCallback(
              (_) => {
                const _ = _(_);
                _ &&
                  (_ && _(!0),
                  window.GameHover &&
                    (_.current &&
                      _ &&
                      (_.current.dataset.hoverDisableScreenshots = "true"),
                    window.GameHover(_ ? _() : _.current, _, "global_hover", {
                      type: _,
                      _: (0, _._)(_)._,
                      _: 1,
                    })));
              },
              [_, _, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                _(_) &&
                  (_ && _.relatedTarget && _(!1),
                  window.HideGameHover &&
                    window.HideGameHover(
                      _ ? _() : _.current,
                      _,
                      "global_hover",
                    ));
              },
              [_, _, _],
            );
          return (0, _.jsx)("div", {
            ref: _,
            className: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            children: _,
          });
        }
        function _(_) {
          const {
              _: _,
              strExtraParams: _,
              fnOnClickOverride: _,
              strOverrideURL: _,
            } = _,
            _ = (0, _._)(),
            _ = (0, _._)(),
            _ = (0, _._)(
              _ ||
                (_ && "creatorid" in _
                  ? (0, _._)(
                      `${_._.STORE_BASE_URL}curator/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )
                  : (0, _._)(
                      `${_._.STORE_BASE_URL}${_(_)}/${((0, _._))(_)._}${_ ? `?${_}` : ""}`,
                      _,
                      _,
                    )),
            );
          return (0, _.jsx)(_, {
            ..._,
            children: (0, _.jsx)(_._, {
              className: _.className,
              href: _ ? void 0 : _,
              target: _._.IN_CLIENT || _ ? void 0 : "_blank",
              rel: "noopener noreferrer",
              onClick: _,
              children: _.children,
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = "saleaction/giveawayregistration",
          _ = "saleaction/creategiveawayregistration";
        async function _(_) {
          const _ = _._.STORE_BASE_URL + _ + "?name=" + encodeURIComponent(_),
            _ = await fetch(_, {
              credentials: "include",
            });
          return await _("GetUserGiveawayRegistration", _, _, _);
        }
        async function _(_) {
          const _ = _._.STORE_BASE_URL + _,
            _ = await fetch(_, {
              method: "POST",
              credentials: "include",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                name: _,
              }),
            });
          return await _("UpdateUserGiveawayRegistration", _, _, _);
        }
        async function _(_, _, _, _) {
          if (!_._) throw new Error(_ + " answered " + _.status);
          const _ = await _.json();
          if (_?.success == _._ && _.registration) return _.registration;
          throw new Error(_ + " on " + _ + " answered " + _?.success);
        }
        const _ = {
          registered: !1,
        };
        function _(_, _) {
          return ["sale", "giveawayregistration", _, _];
        }
        function _(_, _) {
          return {
            queryKey: _(_, _),
            queryFn: () => _(_),
            enabled: !!_,
            retry: !1,
          };
        }
        function _(_) {
          const { data: _, isError: _ } = (0, _._)(_(_, _._.accountid));
          return _ ? _ : _;
        }
        function _() {
          const _ = (0, _._)(),
            { mutateAsync: _ } = (0, _._)({
              mutationFn: _,
              onSuccess: (_, _) => _.setQueryData(_(_, _._.accountid), _),
            });
          return {
            fnCreateRegistration: (0, _.useCallback)(
              async (_) => {
                try {
                  return await _(_);
                } catch (_) {
                  return (
                    console.error(
                      "Registering for giveaway " + _ + " failed",
                      _,
                    ),
                    _
                  );
                }
              },
              [_],
            ),
          };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = _.createContext({
          enabled: !0,
        });
        function _(_) {
          const { enabled: _, children: _ } = _,
            _ = _.useMemo(
              () => ({
                enabled: _,
              }),
              [_],
            );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _(_) {
          const {
              placeholderWidth: _,
              placeholderHeight: _,
              holdGamepadFocus: _ = !1,
              onRender: _,
              style: _,
              mode: _ = "JustLoad",
              children: _,
              ..._
            } = _,
            _ = _.useContext(_),
            [_, _] = _.useState(() => ({
              bRenderChildren: !_.enabled,
              nPrevRenderHeight: 0,
              nPrevRenderWidth: 0,
            })),
            _ = _.useRef(null),
            _ = _ === "LoadAndUnload" && _.enabled,
            _ = _.useCallback(
              (_) => {
                _((_) => {
                  if (_.bRenderChildren === _ || (_.bRenderChildren && !_))
                    return _;
                  let _ = 0,
                    _ = 0;
                  if (_.current) {
                    const _ = _.current.getBoundingClientRect();
                    _ && ((_ = _.width), (_ = _.height));
                  }
                  return (
                    _ && _ && _(),
                    {
                      bRenderChildren: _,
                      nPrevRenderWidth: _,
                      nPrevRenderHeight: _,
                    }
                  );
                });
              },
              [_, _],
            );
          _.useEffect(() => {
            _.enabled || _(!0);
          }, [_.enabled, _]);
          let _ = _;
          if (!_.bRenderChildren) {
            const _ = _.nPrevRenderWidth || _,
              _ = _.nPrevRenderHeight || _;
            (_ !== void 0 || _ !== void 0) &&
              (_ = {
                ..._,
                minHeight: _,
                minWidth: _,
              });
          }
          const _ = _ ? "repeated" : "once";
          let _ = (0, _.jsx)(_._, {
            containerRef: _,
            style: _,
            ..._,
            onVisibilityChange: _,
            trigger: _,
            children: _.bRenderChildren && _,
          });
          return (
            _ &&
              (_ = (0, _.jsx)(_._, {
                focusableIfEmpty: !0,
                style: {
                  height: "100%",
                },
                children: _,
              })),
            _
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        async function _(_, _) {
          const _ = _._.STORE_BASE_URL + "video/details/" + _ + "/0",
            _ = await fetch(_, {
              credentials: "include",
              signal: _,
            });
          if (!_._) throw new Error(_ + " answered " + _.status);
          const _ = await _.json();
          if (_?.success != _._ && _?.success != "ready")
            throw new Error(
              "video/details on " + _ + " answered " + _?.success,
            );
          return {
            appid: _,
            video_url: _.video_url,
            bookmark: _.bookmark,
          };
        }
        function _(_) {
          return ["video", "vod", _];
        }
        function _(_) {
          return {
            queryKey: _(_),
            queryFn: ({ signal: _ }) => _(_, _),
            retry: !1,
          };
        }
        function _(_) {
          const { data: _, isPending: _ } = (0, _._)(_(_));
          return {
            vodInfo: _,
            bLoading: _,
          };
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            BroadcastEmbeddablePopoutHeader: () => _,
            default: () => _,
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EBroadcastImageType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGetGamesAlgorithm ( " + _ + " )";
        }
        function _(_) {
          return "unknown EGetChannelsAlgorithm ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamTVContentTemplate ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unique_name || _._(_._()),
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
                    unique_name: {
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
            return "CSteamTV_CreateBroadcastChannel_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_CreateBroadcastChannel_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unique_name || _._(_._()),
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
                    unique_name: {
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
            return "CSteamTV_GetBroadcastChannelID_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    unique_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
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
            return "CSteamTV_GetBroadcastChannelID_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    language: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    headline: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    summary: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    avatar_hash: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    schedule: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rules: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    panels: {
                      _: 9,
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
            return "CSteamTV_SetBroadcastChannelProfile_Request";
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
            return "CSteamTV_SetBroadcastChannelProfile_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetBroadcastChannelProfile_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.unique_name || _._(_._()),
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
                    unique_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    owner_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    language: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    headline: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    summary: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    schedule: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rules: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    panels: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_partnered: {
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
            return "CSteamTV_GetBroadcastChannelProfile_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    image_type: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    image_index: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_width: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    image_height: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_size: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_extension: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    file_hash: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    undo: {
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
            return "CSteamTV_SetBroadcastChannelImage_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.replace_image_hash || _._(_._()),
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
                    replace_image_hash: {
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
            return "CSteamTV_SetBroadcastChannelImage_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    image_types: {
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
            return "CSteamTV_GetBroadcastChannelImages_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.images || _._(_._()),
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
                    images: {
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
            return "CSteamTV_GetBroadcastChannelImages_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.image_type || _._(_._()),
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
                    image_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    image_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image_index: {
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
            return "CSteamTV_GetBroadcastChannelImages_Response_Images";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetBroadcastChannelLinks_Request";
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
            return "CSteamTV_GetBroadcastChannelLinks_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.link_index || _._(_._()),
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
                    link_index: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    link_description: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    left: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    width: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    height: {
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
            return "CSteamTV_GetBroadcastChannelLinks_Response_Links";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    links: {
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
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.link_index || _._(_._()),
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
                    link_index: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    url: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    link_description: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    left: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    top: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    width: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    height: {
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
            return "CSteamTV_SetBroadcastChannelLinkRegions_Request_Links";
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
            return "CSteamTV_SetBroadcastChannelLinkRegions_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetBroadcastChannelStatus_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_live || _._(_._()),
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
                    is_live: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_disabled: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    appid: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    viewers: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    views: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    broadcaster_steamid: {
                      _: 6,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    thumbnail_url: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    followers: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    subscribers: {
                      _: 9,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    unique_name: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast_session_id: {
                      _: 11,
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
            return "CSteamTV_GetBroadcastChannelStatus_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    unique_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    appid: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    viewers: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    views: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    thumbnail_url: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    followers: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    headline: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    avatar_url: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcaster_steamid: {
                      _: 11,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    subscribers: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    background_url: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    is_featured: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_disabled: {
                      _: 15,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_live: {
                      _: 16,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    language: {
                      _: 17,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    reports: {
                      _: 18,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    is_partnered: {
                      _: 19,
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
            return "GetBroadcastChannelEntry";
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
            return "CSteamTV_GetFollowedChannels_Request";
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
            return "CSteamTV_GetFollowedChannels_Response";
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
            return "CSteamTV_GetSubscribedChannels_Request";
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
            return "CSteamTV_GetSubscribedChannels_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    undo: {
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
            return "CSteamTV_FollowBroadcastChannel_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_followed || _._(_._()),
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
                    is_followed: {
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
            return "CSteamTV_FollowBroadcastChannel_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_SubscribeBroadcastChannel_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_subscribed || _._(_._()),
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
                    is_subscribed: {
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
            return "CSteamTV_SubscribeBroadcastChannel_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    reason: {
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
            return "CSteamTV_ReportBroadcastChannel_Request";
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
            return "CSteamTV_ReportBroadcastChannel_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetBroadcastChannelInteraction_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_followed || _._(_._()),
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
                    is_followed: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    is_subscribed: {
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
            return "CSteamTV_GetBroadcastChannelInteraction_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.appid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5], null);
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
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    image: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    viewers: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    channels: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    release_date: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    developer: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    publisher: {
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
            return "CSteamTV_Game";
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
                    algorithm: {
                      _: 2,
                      _: _._.readEnum,
                      _: _._.writeEnum,
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
            return "CSteamTV_GetGames_Request";
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
            return "CSteamTV_GetGames_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.algorithm || _._(_._()),
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
                    algorithm: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    appid: {
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
            return "CSteamTV_GetChannels_Request";
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
            return "CSteamTV_GetChannels_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetBroadcastChannelBroadcasters_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasters || _._(_._()),
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
                    broadcasters: {
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
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response";
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
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtmp_token: {
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
            return "CSteamTV_GetBroadcastChannelBroadcasters_Response_Broadcaster";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.issuer_steamid || _._(_._()),
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
                    issuer_steamid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chatter_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    time_expires: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    permanent: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
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
            return "CSteamTV_ChatBan";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    chatter_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    duration: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    permanent: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    undo: {
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
            return "CSteamTV_AddChatBan_Request";
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
            return "CSteamTV_AddChatBan_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetChatBans_Request";
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
            return "CSteamTV_GetChatBans_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    moderator_steamid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    undo: {
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
            return "CSteamTV_AddChatModerator_Request";
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
            return "CSteamTV_AddChatModerator_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetChatModerators_Request";
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
            return "CSteamTV_ChatModerator";
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
            return "CSteamTV_GetChatModerators_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    word: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    undo: {
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
            return "CSteamTV_AddWordBan_Request";
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
            return "CSteamTV_AddWordBan_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetWordBans_Request";
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
            return "CSteamTV_GetWordBans_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_JoinChat_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.chat_id || _._(_._()),
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
                    chat_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    view_url_template: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    flair_group_ids: {
                      _: 3,
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
            return "CSteamTV_JoinChat_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.term || _._(_._()),
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
                    term: {
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
            return "CSteamTV_Search_Request";
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
            return "CSteamTV_Search_Response";
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
            return "CSteamTV_GetSteamTVUserSettings_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stream_live_email || _._(_._()),
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
                    stream_live_email: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    stream_live_notification: {
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
            return "CSteamTV_GetSteamTVUserSettings_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.stream_live_email || _._(_._()),
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
                    stream_live_email: {
                      _: 1,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    stream_live_notification: {
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
            return "CSteamTV_SetSteamTVUserSettings_Request";
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
            return "CSteamTV_SetSteamTVUserSettings_Response";
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
            return "CSteamTV_GetMyBroadcastChannels_Request";
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
            return "CSteamTV_GetMyBroadcastChannels_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
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
                    broadcasts: {
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
            return "CSteamTV_HomePageTemplate_Takeover";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
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
                    broadcasts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    appid: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    title: {
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
            return "CSteamTV_HomePageTemplate_SingleGame";
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
                    game_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    broadcast: {
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
            return "GameListEntry";
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
                    title: {
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
            return "CSteamTV_HomePageTemplate_GameList";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
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
                    broadcasts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    title: {
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
            return "CSteamTV_HomePageTemplate_QuickExplore";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcasts || _._(_._()),
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
                    broadcasts: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    title: {
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
            return "CSteamTV_HomePageTemplate_ConveyorBelt";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast || _._(_._()),
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
                    broadcast: {
                      _: 1,
                      _: _,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    chat_group_id: {
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
            return "CSteamTV_HomePageTemplate_WatchParty";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast || _._(_._()),
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
                    broadcast: {
                      _: 1,
                      _: _,
                    },
                    title: {
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
            return "CSteamTV_HomePageTemplate_Developer";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.title || _._(_._()),
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
                    title: {
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
            return "CSteamTV_HomePageTemplate_Event";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.template_type || _._(_._()),
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
                    template_type: {
                      _: 1,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    takeover: {
                      _: 2,
                      _: _,
                    },
                    single_game: {
                      _: 3,
                      _: _,
                    },
                    game_list: {
                      _: 4,
                      _: _,
                    },
                    quick_explore: {
                      _: 5,
                      _: _,
                    },
                    conveyor_belt: {
                      _: 6,
                      _: _,
                    },
                    watch_party: {
                      _: 7,
                      _: _,
                    },
                    developer: {
                      _: 8,
                      _: _,
                    },
                    event: {
                      _: 9,
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
            return "CSteamTV_HomePageContentRow";
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
            return "CSteamTV_GetHomePageContents_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rows || _._(_._()),
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
                    rows: {
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
            return "CSteamTV_GetHomePageContents_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_channel_id || _._(_._()),
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
                    broadcast_channel_id: {
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
            return "CSteamTV_GetBroadcastChannelClips_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.broadcast_clip_id || _._(_._()),
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
                    broadcast_clip_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    channel_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    app_id: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    broadcaster_steamid: {
                      _: 4,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    creator_steamid: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    video_description: {
                      _: 6,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    live_time: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    length_ms: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_path: {
                      _: 9,
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
            return "CSteamTV_BroadcastClipInfo";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clips || _._(_._()),
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
                    clips: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    thumbnail_host: {
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
            return "CSteamTV_GetBroadcastChannelClips_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.cheer_type || _._(_._()),
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
                    cheer_type: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cheer_amount: {
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
            return "CSteamTV_AppCheer_SingleCheerType";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.app_id || _._(_._()),
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
                    app_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    cheer_target_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    cheers: {
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
            return "CSteamTV_AppCheer_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.aggregation_delay_ms || _._(_._()),
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
                    aggregation_delay_ms: {
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
            return "CSteamTV_AppCheer_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.CreateBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.CreateBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelID#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelID = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetBroadcastChannelProfile#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetBroadcastChannelProfile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelProfile#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelProfile = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetBroadcastChannelImage#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetBroadcastChannelImage = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelImages#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelImages = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetBroadcastChannelLinkRegions#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetBroadcastChannelLinkRegions = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelLinks#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelLinks = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelBroadcasters#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastChannelBroadcasters = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetFollowedChannels#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetFollowedChannels = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetSubscribedChannels#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetSubscribedChannels = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelStatus#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelStatus = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.FollowBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.FollowBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SubscribeBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SubscribeBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelClips#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
              },
            );
          }
          _.GetBroadcastChannelClips = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.ReportBroadcastChannel#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.ReportBroadcastChannel = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetBroadcastChannelInteraction#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetBroadcastChannelInteraction = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetGames#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetGames = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetChannels#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.GetChannels = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.AddChatBan#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          _.AddChatBan = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetChatBans#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetChatBans = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.AddChatModerator#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.AddChatModerator = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetChatModerators#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                rgBrowserAPISites: ["store", "community"],
              },
            );
          }
          _.GetChatModerators = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.AddWordBan#1", (0, _._)(_, _, _), _, {
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.AddWordBan = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.GetWordBans#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
              eWebAPIKeyRequirement: 2,
            });
          }
          _.GetWordBans = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.JoinChat#1", (0, _._)(_, _, _), _, {
              ePrivilege: 2,
              eWebAPIKeyRequirement: 1,
              rgBrowserAPISites: ["store", "community"],
            });
          }
          _.JoinChat = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.Search#1", (0, _._)(_, _, _), _, {
              bConstMethod: !0,
              ePrivilege: 0,
            });
          }
          _.Search = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetSteamTVUserSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetSteamTVUserSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.SetSteamTVUserSettings#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.SetSteamTVUserSettings = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetMyBroadcastChannels#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
                eWebAPIKeyRequirement: 2,
              },
            );
          }
          _.GetMyBroadcastChannels = _;
          function _(_, _, _) {
            return _.SendMsg(
              "SteamTV.GetHomePageContents#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetHomePageContents = _;
          function _(_, _, _) {
            return _.SendMsg("SteamTV.AppCheer#1", (0, _._)(_, _, _), _, {
              ePrivilege: 0,
              eWebAPIKeyRequirement: 1,
            });
          }
          _.AppCheer = _;
        })(_ || (_ = {}));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
        const _ = 4,
          _ = 500,
          _ = 10,
          _ = class _ {
            m_mapChats = new Map();
            m_cmInterface;
            SetCMInterface(_) {
              this.m_cmInterface = _;
            }
            GetCMInterface() {
              return this.m_cmInterface;
            }
            GetChat(_, _) {
              return this.m_mapChats.get(_) || this.m_mapChats.get(_);
            }
            GetOrCreateChat(_, _) {
              let _ = this.GetChat(_, _);
              return _ || ((_ = new _()), this.m_mapChats.set(_ || _, _)), _;
            }
            static s_Singleton;
            static Get() {
              return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
            }
            constructor() {
              (0, _._)(this);
            }
          };
        _([_._], _.prototype, "m_mapChats", 2);
        let _ = _;
        class _ {
          m_ulBroadcastChannelID = "";
          m_ulChatID = "";
          m_strFlairGroupID = "";
          m_bAutoScroll = !0;
          m_ulBroadcastID = "";
          m_ulBroadcastSteamID = "";
          m_tsFirstRequest = null;
          m_nFromFirstRequestMS = 0;
          m_nNextChatTS = 0;
          m_cConsecutiveErrors = 0;
          m_nNudgeFactorMS = 0;
          m_nLastSleepMS = 0;
          m_bReconnecting = !1;
          m_strChatURL;
          m_unInstanceID = Math.floor(Math.random() * 4294967296);
          m_strUserSteamID = "";
          m_regexUserEmoticons = null;
          m_chatScheduledFunc = null;
          m_steamInterface = null;
          m_textFilterStore = null;
          m_bHasAddedWelcomeChat = !1;
          m_mapMutedUsers = {};
          m_mapChannelModeratorUsers = new Map();
          m_mapBroadcastModeratorUsers = new Map();
          m_nRateLimitSeconds = 0;
          m_bRateLimited = !1;
          m_rgChatMessages = [];
          m_rgAnnouncements = [];
          m_latestAnnouncement = null;
          constructor() {
            (0, _._)(this),
              (this.m_steamInterface = this.CreateSteamInterface());
          }
          InitTextFilter() {
            this.m_textFilterStore = new _._({
              BIsFriend: (0, _._)(),
            });
            let _ = 0;
            _._.steamid !== "" && (_ = new _._(_._.steamid).GetAccountID()),
              this.m_textFilterStore.Init(_, null, new _._());
          }
          get TextFilterStore() {
            return this.m_textFilterStore;
          }
          GetBroadcastSteamID() {
            return this.m_ulBroadcastSteamID;
          }
          GetUserSteamID() {
            return this.m_strUserSteamID;
          }
          CreateSteamInterface() {
            const _ = (0, _._)() ?? _.Get().GetCMInterface();
            return (
              _ || (0, _._)(new _._(_._.WEBAPI_BASE_URL, _._.webapi_token))
            );
          }
          StartForSteamID(_, _) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastSteamID = _),
              (this.m_ulBroadcastID = _),
              this.InitTextFilter(),
              this.RequestChatInfo();
          }
          StartForChannel(_) {
            (this.m_steamInterface = this.CreateSteamInterface()),
              (this.m_ulBroadcastChannelID = _),
              (this.m_strUserSteamID = _._.steamid),
              this.InitTextFilter(),
              this.JoinChannelChat();
          }
          Stop() {
            this.m_chatScheduledFunc && this.m_chatScheduledFunc.Cancel();
          }
          async SendMessage(_) {
            const _ = _.trim();
            if (_.length != 0)
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  message: _,
                  instance_id: this.m_unInstanceID.toString(),
                });
                const _ = await _._.PostChatMessage(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  ),
                  _ = {
                    result: _.GetEResult(),
                    cooldown_time_seconds: _.Body().cooldown_time_seconds(),
                    in_game: _.Body().in_game(),
                    persona_name: _.Body().persona_name(),
                  };
                if (_ && _.result && _.result != _._) {
                  let _ = "";
                  _.result == _._
                    ? (_ = (0, _._)("#BroadcastChat_YouMuted"))
                    : _.result == _._
                      ? (_ = (0, _._)(
                          "#BroadcastChat_Cooldown",
                          _.cooldown_time_seconds,
                        ))
                      : (_ = (0, _._)("#BroadcastChat_FailedToSendMsg", _)),
                    this.m_rgChatMessages.push({
                      type: _._.Error,
                      msg: _,
                      client_ts: Number(new Date()),
                      instance_id: this.m_unInstanceID,
                      in_game: _.in_game,
                      persona_name: _.persona_name,
                      steamid: "",
                    });
                  return;
                }
                this.m_nRateLimitSeconds ||
                  (this.m_nRateLimitSeconds = _.cooldown_time_seconds),
                  this.m_nRateLimitSeconds &&
                    ((this.m_bRateLimited = !0),
                    setTimeout(
                      () => (this.m_bRateLimited = !1),
                      this.m_nRateLimitSeconds * 1e3,
                    ));
              } catch {
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: (0, _._)("#BroadcastChat_FailedToSendMsg", _),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async RequestChatInfo(_) {
            (this.m_cConsecutiveErrors = 0), (this.m_bReconnecting = !1);
            try {
              const _ = {
                  steamid: this.m_ulBroadcastSteamID,
                  broadcastid: this.m_ulBroadcastID,
                  sessionid: (0, _._)(),
                  notoken: 1,
                },
                _ = await _().get(`${_._.CHAT_BASE_URL}broadcast/getchatinfo`, {
                  params: _,
                  withCredentials: !0,
                  cancelToken: _?.token,
                });
              (!_ || !_.token.reason) &&
                (0, _._)(() => {
                  const _ = _.data;
                  (this.m_strChatURL = _.view_url_template),
                    (this.m_ulChatID = _.chat_id),
                    (this.m_strFlairGroupID =
                      _.flair_group_ids && _.flair_group_ids[0]),
                    _.blocked && console.log("User is blocked from chat"),
                    _.steamid && (this.m_strUserSteamID = _.steamid),
                    _.emoticons && this.SetOwnedEmoticons(_.emoticons),
                    this.m_bHasAddedWelcomeChat ||
                      (this.m_rgChatMessages.push({
                        type: _._.Notification,
                        msg: (0, _._)("#BroadcastChat_DefaultMessage"),
                        client_ts: Number(new Date()),
                        instance_id: this.m_unInstanceID,
                        in_game: !1,
                        persona_name: "",
                        steamid: "",
                      }),
                      (this.m_bHasAddedWelcomeChat = !0)),
                    this.m_mapBroadcastModeratorUsers.clear(),
                    _.moderators_steamid &&
                      _.moderators_steamid.forEach((_) =>
                        this.m_mapBroadcastModeratorUsers.set(_, !0),
                      ),
                    (this.m_chatScheduledFunc = new _._()),
                    this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
                });
            } catch (_) {
              console.error(_), console.log("Failed to get chat info!");
            }
          }
          async JoinChannelChat() {
            try {
              const _ = _._.Init(_);
              _.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
              });
              let _ = await _.JoinChat(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
              if (!_.Body().chat_id || !_.Body().view_url_template) {
                console.log("Failed to join channel chat");
                return;
              }
              (this.m_strChatURL = _.Body().view_url_template()),
                (this.m_ulChatID = _.Body().chat_id()),
                (this.m_strFlairGroupID =
                  _.Body().flair_group_ids() && _.Body().flair_group_ids()[0]),
                this.FetchChatModerators(),
                (this.m_rgChatMessages = []),
                this.m_rgChatMessages.push({
                  type: _._.Notification,
                  msg: (0, _._)("#BroadcastChat_DefaultMessage"),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                }),
                (this.m_bHasAddedWelcomeChat = !0),
                (this.m_chatScheduledFunc = new _._()),
                this.m_chatScheduledFunc.Schedule(0, this.RequestLoop);
            } catch (_) {
              console.error(_), console.log("Failed to join chat!");
            }
          }
          async FetchChatModerators() {
            const _ = _._.Init(_);
            _.SetBodyFields({
              broadcast_channel_id: this.m_ulBroadcastChannelID,
            });
            const _ = (
                await _.GetChatModerators(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                )
              )
                .Body()
                .results(),
              _ = new Map();
            _.forEach((_) => {
              _.set(_.steamid(), !0);
            }),
              (this.m_mapChannelModeratorUsers = _);
          }
          ReplaceChatAnnouncementIfAny(_) {
            _.announcements?.length > 0
              ? ((this.m_rgAnnouncements = _.announcements.reverse()),
                (!this.m_latestAnnouncement ||
                  JSON.stringify(this.m_latestAnnouncement) !=
                    JSON.stringify(
                      this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1],
                    )) &&
                  (this.m_latestAnnouncement =
                    this.m_rgAnnouncements[this.m_rgAnnouncements.length - 1]))
              : this.m_rgAnnouncements.length > 0 &&
                ((this.m_rgAnnouncements = []),
                (this.m_latestAnnouncement = null));
          }
          async RequestLoop() {
            const _ = {},
              _ = this.m_strChatURL.replace(
                "{0}",
                this.m_nNextChatTS.toString(),
              );
            _ == this.m_strChatURL &&
              this.m_nNextChatTS > 0 &&
              (_._ = this.m_nNextChatTS);
            try {
              const _ = (
                await _().get(_, {
                  params: _,
                })
              ).data;
              this.m_cConsecutiveErrors = 0;
              const _ = _.messages
                .map((_) => ({
                  ..._,
                  type: _._.Chat,
                  client_ts: Number(new Date()),
                }))
                .filter((_) => !this.IsUserMutedLocally(_.steamid));
              this.m_rgChatMessages.push(..._),
                this.ReplaceChatAnnouncementIfAny(_);
              const _ = this.m_bAutoScroll ? 150 : 300;
              if (
                (this.m_rgChatMessages.length > _ &&
                  this.m_rgChatMessages.splice(
                    0,
                    this.m_rgChatMessages.length - _,
                  ),
                _.muted)
              )
                for (const _ of _.muted) {
                  const _ =
                    _.muted == this.m_strUserSteamID
                      ? (0, _._)("#BroadcastChat_YouMuted", _.persona_name)
                      : (0, _._)("#BroadcastChat_UserMuted", _.persona_name);
                  this.m_rgChatMessages.push({
                    type: _._.Notification,
                    msg: _,
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                }
              if (_.remove_msgs)
                for (const _ of _.remove_msgs)
                  this.RemoveUserMessagesLocal(_.steamid);
              let _ = 0;
              if (
                this.m_tsFirstRequest == null ||
                this.m_nNextChatTS == 0 ||
                _.initial_delay
              ) {
                if (_.initial_delay === "undefined") {
                  console.log(
                    "Need initial_delay to know when to request first chat message",
                  );
                  return;
                }
                (this.m_tsFirstRequest = performance.now() + _.initial_delay),
                  (this.m_nFromFirstRequestMS = 0),
                  (this.m_nNextChatTS = _.next_request),
                  (_ = _.initial_delay);
              } else {
                if (_.next_request < this.m_nNextChatTS) {
                  console.log("Next request in past");
                  return;
                }
                (this.m_nFromFirstRequestMS +=
                  _.next_request - this.m_nNextChatTS),
                  (this.m_nNextChatTS = _.next_request),
                  (_ =
                    this.m_tsFirstRequest +
                    this.m_nFromFirstRequestMS -
                    performance.now() +
                    this.m_nNudgeFactorMS);
              }
              this.m_bReconnecting && (this.m_bReconnecting = !1),
                (this.m_nLastSleepMS = _),
                _ < 0 && (_ = 0),
                this.m_chatScheduledFunc.Schedule(_, this.RequestLoop);
            } catch {
              if (
                (console.log(
                  "Failed to get chat messages. Previous sleep set to: " +
                    this.m_nLastSleepMS +
                    " firstReq: " +
                    this.m_tsFirstRequest +
                    " firstFromRequest: " +
                    this.m_nFromFirstRequestMS +
                    " nudge: " +
                    this.m_nNudgeFactorMS,
                ),
                this.m_cConsecutiveErrors++,
                (this.m_nNudgeFactorMS += _),
                this.m_cConsecutiveErrors >= _)
              ) {
                if (this.m_tsFirstRequest == null) {
                  this.m_rgChatMessages.push({
                    type: _._.Error,
                    msg: (0, _._)("#BroadcastChat_UnableToJoinChat"),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
                  return;
                }
                (this.m_cConsecutiveErrors = 0),
                  (this.m_bReconnecting = !0),
                  this.SyncChat();
              }
              this.m_chatScheduledFunc.Schedule(_, this.RequestLoop);
            }
          }
          GetUserEmoticons() {
            return this.m_regexUserEmoticons;
          }
          SetOwnedEmoticons(_) {
            let _ = [];
            for (let _ = 0; _ < _.length; _++) {
              let _ = _[_];
              _.length >= 2 && _[0] == ":"
                ? _.push(_.substr(1, _.length - 2))
                : _.push(_);
            }
            let _ = ":(" + _.join("|") + "):";
            this.m_regexUserEmoticons = new RegExp(_, "g");
          }
          async UpdateBroadcastChatModerator(_, _, _) {
            {
              const _ = new FormData();
              _.append("broadcaststeamid", this.m_ulBroadcastSteamID),
                _.append("moderatorsteamid", _),
                _.append("bAdd", _ ? "1" : "0"),
                _.append("sessionid", (0, _._)());
              try {
                await _().post(
                  `${_._.CHAT_BASE_URL}broadcast/ajaxupdatechannelmod`,
                  _,
                ),
                  this.m_mapBroadcastModeratorUsers.set(_, _);
                const _ = (0, _._)(
                  _
                    ? "#BroadcastChat_AddedModerator"
                    : "#BroadcastChat_RemovedModerator",
                  _,
                );
                this.m_rgChatMessages.push({
                  type: _._.Notification,
                  msg: _,
                });
              } catch {
                const _ = (0, _._)(
                  _
                    ? "#BroadcastChat_AddModeratorFailed"
                    : "#BroadcastChat_RemoveModeratorFailed",
                  _,
                );
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: _,
                });
              }
            }
          }
          async UpdateUserChatBan(_, _, _, _, _, _) {
            const _ = this.m_ulBroadcastSteamID,
              _ = this.m_strUserSteamID;
            if (this.m_ulBroadcastChannelID) {
              const _ = _._.Init(_);
              _.SetBodyFields({
                broadcast_channel_id: this.m_ulBroadcastChannelID,
                chatter_steamid: _,
                duration: _ * 3600,
                permanent: _,
                undo: _,
              }),
                await _.AddChatBan(
                  this.m_steamInterface.GetServiceTransport(),
                  _,
                );
            } else {
              const _ = new FormData();
              _.append("broadcaststeamid", _),
                _.append("issuersteamid", _),
                _.append("chattersteamid", _),
                _.append("bantype", _),
                _.append("duration", _.toString()),
                _.append("perm", _ ? "1" : "0"),
                _.append("sessionid", (0, _._)());
              try {
                await _().post(
                  `${_._.CHAT_BASE_URL}broadcast/ajaxupdateusermute`,
                  _,
                ),
                  _ == _._._
                    ? delete this.m_mapMutedUsers[_]
                    : (this.m_mapMutedUsers[_] = _);
              } catch {
                console.log("Failed to update mute for " + _);
              }
            }
          }
          async MuteUserForSession(_, _) {
            if (_ == this.m_strUserSteamID || this.m_ulBroadcastSteamID == _)
              return;
            let _ = this.m_ulBroadcastSteamID == this.m_strUserSteamID;
            if (!this.m_mapMutedUsers[_]) {
              this.m_mapMutedUsers[_] = _;
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: _,
                  muted: !0,
                }),
                  await _._.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  );
              } catch {
                _ &&
                  (this.m_rgChatMessages.push({
                    type: _._.Error,
                    msg: (0, _._)("#BroadcastChat_UserMuteFailed", _),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  }),
                  delete this.m_mapMutedUsers[_]);
              }
            }
            _ ||
              this.m_rgChatMessages.push({
                type: _._.Notification,
                msg: (0, _._)("#BroadcastChat_UserMutedLocal", _),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          async UnmuteUserForSession(_, _) {
            if (_ == this.m_strUserSteamID) return;
            if (
              (this.m_mapMutedUsers[_] && delete this.m_mapMutedUsers[_],
              this.m_ulBroadcastSteamID == this.m_strUserSteamID)
            )
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: _,
                  muted: !1,
                }),
                  await _._.MuteBroadcastChatUser(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  ),
                  this.m_rgChatMessages.push({
                    type: _._.Notification,
                    msg: (0, _._)("#BroadcastChat_UserUnmutedLocal", _),
                    client_ts: Number(new Date()),
                    instance_id: this.m_unInstanceID,
                    in_game: !1,
                    persona_name: "",
                    steamid: "",
                  });
              } catch {
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: (0, _._)("#BroadcastChat_UserUnmuteFailed", _),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
            else
              this.m_rgChatMessages.push({
                type: _._.Notification,
                msg: (0, _._)("#BroadcastChat_UserUnmutedLocal", _),
                client_ts: Number(new Date()),
                instance_id: this.m_unInstanceID,
                in_game: !1,
                persona_name: "",
                steamid: "",
              });
          }
          RemoveUserMessagesLocal(_) {
            this.m_rgChatMessages = this.m_rgChatMessages.filter(
              (_) => _.steamid !== _,
            );
          }
          async RemoveUserMessagesServer(_, _) {
            if (_ != this.m_strUserSteamID)
              try {
                const _ = _._.Init(_._);
                _.SetBodyFields({
                  chat_id: this.m_ulChatID,
                  user_steamid: _,
                }),
                  await _._.RemoveUserChatText(
                    this.m_steamInterface.GetServiceTransport(),
                    _,
                  );
              } catch {
                this.m_rgChatMessages.push({
                  type: _._.Error,
                  msg: (0, _._)("#BroadcastChat_RemoveMessagesFailed", _),
                  client_ts: Number(new Date()),
                  instance_id: this.m_unInstanceID,
                  in_game: !1,
                  persona_name: "",
                  steamid: "",
                });
              }
          }
          async UpdateChatMessageFlair(_) {
            const _ = _._.Init(_._);
            _.SetBodyFields({
              chat_id: this.m_ulChatID,
              flair: `^${this.m_strFlairGroupID}^:${_}:`,
            }),
              await _._.UpdateChatMessageFlair(
                this.m_steamInterface.GetServiceTransport(),
                _,
              );
          }
          IsUserMutedLocally(_) {
            return !!this.m_mapMutedUsers[_];
          }
          BIsUserBroadcastModerator(_) {
            return this.m_mapBroadcastModeratorUsers.has(_);
          }
          IsUserBroadcaster(_) {
            return _ === this.m_ulBroadcastSteamID;
          }
          SyncChat() {
            (this.m_tsFirstRequest = null),
              (this.m_nFromFirstRequestMS = 0),
              (this.m_nNextChatTS = 0),
              (this.m_rgChatMessages = []);
          }
        }
        _([_._], _.prototype, "m_mapChannelModeratorUsers", 2),
          _([_._], _.prototype, "m_mapBroadcastModeratorUsers", 2),
          _([_._], _.prototype, "m_nRateLimitSeconds", 2),
          _([_._], _.prototype, "m_bRateLimited", 2),
          _([_._], _.prototype, "m_rgChatMessages", 2),
          _([_._], _.prototype, "m_latestAnnouncement", 2),
          _([_._], _.prototype, "FetchChatModerators", 1),
          _([_._], _.prototype, "RequestLoop", 1),
          _([_._], _.prototype, "MuteUserForSession", 1);
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
          _ = __webpack_require__._(_);
        const _ = () =>
            (0, _.jsx)("div", {
              className: _().FriendsListInsetShadowCtn,
              children: (0, _.jsx)("div", {
                className: _().FriendListInsetShadowTop,
              }),
            }),
          _ = () =>
            (0, _.jsx)("div", {
              className: _().FriendsListInsetShadowCtn,
              children: (0, _.jsx)("div", {
                className: _().FriendListInsetShadowBottom,
              }),
            });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { latestAnnouncement: _ } = _;
          return _?.type == "giveaway_draw"
            ? (0, _.jsx)(_, {
                latestWinner: _,
              })
            : null;
        }
        function _(_) {
          const {
              latestWinner: _,
              className: _,
              strActionButton: _,
              strActionClassname: _,
            } = _,
            _ = _.winners_info?.length > 0 ? _.winners_info[0].accountid : 0,
            [_, _] = _.useState(_),
            _ =
              "https://store.steampowered.com/sale/thegameawardssteamdeckdrop2022",
            _ = (0, _._)(
              `${_._.GetBaseURL()}4/080b1f163b02a9810fa78f0b32b9396fab012aef.gif`,
            ),
            _ = (0, _._)(
              `${_._.GetBaseURL()}4/56521811317a8298a7aff4a914be964b67dd0325.png`,
            ),
            _ = (0, _._)(_.giveaway_gid);
          let _ =
            _.bLoadingGiveawayInfo || _.closed ? null : _.seconds_until_drawing;
          const _ = _ === _._.accountid;
          _.useEffect(() => {
            _ != _ && setTimeout(() => _(_), 1500);
          }, [_, _]);
          const _ =
            _.winners_info?.length > 0 && _.winners_info[0].persona
              ? _.winners_info[0].persona
              : (0, _._)("#GA2022_UnknownPersonaName");
          return (0, _.jsx)(_._, {
            href: _,
            className: _,
            children: (0, _.jsxs)("div", {
              className: (0, _._)({
                [_().GiveawayWinnerBox]: !0,
                [_().GiveawayWinnerAnnounced]: _ === _,
              }),
              children: [
                (0, _.jsx)("div", {
                  className: _().GiveawayWinnerBoxLeft,
                  children: (0, _.jsx)("img", {
                    className: _().GiveawayWinnerArt,
                    src: _,
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _().GiveawayWinnerBoxRight,
                  children: [
                    _ !== _ &&
                      (0, _.jsx)("div", {
                        className: (0, _._)(_().GiveawayWinnerText),
                        children: (0, _._)(
                          "#GA2022_Congrats_Deck_Unknown",
                          (0, _.jsx)("br", {}),
                        ),
                      }),
                    _ === _ &&
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().GiveawayWinnerText,
                          _().GiveawayWinnerAnnounced,
                        ),
                        children: (0, _._)(
                          _
                            ? "#GA2022_Congrats_Deck_Me"
                            : "#GA2022_Congrats_Deck_OTher",
                          _,
                          (0, _.jsx)("br", {}),
                        ),
                      }),
                    _ > 0 &&
                      (0, _.jsx)("div", {
                        className: _().GiveawayWinnerCountdown,
                        children: (0, _._)("#GA2022_Congrats_NextDraw", _),
                      }),
                  ],
                }),
                (0, _.jsx)("img", {
                  className: _().GiveawayWinnerQuestion,
                  src: _,
                }),
                !!_ &&
                  (0, _.jsx)("div", {
                    className: _,
                    children: _ ? (0, _._)("#GA2022_YouWonNextSteps") : _,
                  }),
              ],
            }),
          });
        }
        function _(_, _) {
          const [_, _] = (0, _._)(() => [
              _?.steamid,
              _._.GetBroadcast(_?.steamid)?.m_ulBroadcastID,
            ]),
            [_, _] = _.useState(null);
          _.useEffect(() => {
            let _ = null;
            return (
              (_ || _) &&
                ((_ = _.Get().GetOrCreateChat(_, _)),
                _.StartForSteamID(_, _),
                _(_)),
              () => {
                _ && (_.Stop(), _(null));
              }
            );
          }, [_, _]);
          const _ = (0, _._)(() => _?.m_latestAnnouncement || null);
          if (_?.type == "giveaway_draw") {
            const _ = _;
            if (_.giveaway_gid == _) return _;
          }
          return null;
        }
        function _(_) {
          const { gidGiveaway: _, stream: _ } = _,
            _ = _(_, _),
            _ = (0, _._)("GameAwardDrop2022");
          let _ = null,
            _ = _().GiveawayRegisterButton;
          return (
            _._.logged_in
              ? _?.registered
                ? ((_ = (0, _._)("#GA2022_AlreadyRegistered")),
                  (_ = _().GiveawayAlreadyRegistered))
                : (_ = (0, _._)("#GA2022_RegisterToWin"))
              : (_ = (0, _._)("#GA2022_RegisterLoginToWin")),
            _
              ? (0, _.jsx)(_, {
                  latestWinner: _,
                  className: _().InViewerBar,
                  strActionButton: _,
                  strActionClassname: _,
                })
              : null
          );
        }
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
        const _ = new RegExp("\u02D0([^\u02D0]*)\u02D0", "g"),
          _ = null,
          _ = new RegExp(
            "^https?://(?:[^/?#]+?\\.)?(?:valvesoftware|steamcommunity|steampowered)\\.com(?:/?#|$)",
            "i",
          );
        function _(_, _, _) {
          return _
            ? "presenter"
            : _.GetBroadcastSteamID() === _
              ? "broadcaster"
              : _.BIsUserBroadcastModerator(_)
                ? "moderator"
                : "";
        }
        const _ = (_) => {
            const { userType: _, msg: _, presenterInfo: _ } = _;
            if (_ === "presenter")
              return (0, _.jsx)("span", {
                children: (0, _.jsx)(_._, {
                  name: _.name,
                  title: _.title,
                  photo: _.photo,
                  company: _.company,
                  bioString: _.bio,
                  children: (0, _.jsx)("a", {
                    className: (0, _._)(_().MessageName, _().MessagePresenter),
                    href: _._.COMMUNITY_BASE_URL + "profiles/" + _.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.persona_name,
                  }),
                }),
              });
            {
              let _ = null;
              return (
                _ === "broadcaster"
                  ? (_ = _().MessageBroadcaster)
                  : _ === "moderator" && (_ = _().MessageModerator),
                (0, _.jsx)("span", {
                  children: (0, _.jsx)("a", {
                    className: (0, _._)(_().MessageName, _),
                    href: _._.COMMUNITY_BASE_URL + "profiles/" + _.steamid,
                    "data-miniprofile": "s" + _.steamid,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: _.persona_name,
                  }),
                })
              );
            }
          },
          _ = (_) => {
            switch (_.userType) {
              case "presenter":
                return (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#BroadcastChat_Role_Presenter_ttip",
                  ),
                  children: (0, _.jsx)("span", {
                    className: _().RoleFlairContainer,
                    children: (0, _.jsx)(_.NCC, {}),
                  }),
                });
              case "moderator":
                return (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#BroadcastChat_Role_Moderatorr_ttip",
                  ),
                  children: (0, _.jsx)("span", {
                    className: _().RoleFlairContainer,
                    children: (0, _.jsx)(_.$4X, {}),
                  }),
                });
              case "broadcaster":
                return (0, _.jsx)(_._, {
                  toolTipContent: (0, _._)(
                    "#BroadcastChat_Role_Broadcaster_ttip",
                  ),
                  children: (0, _.jsx)("span", {
                    className: _().RoleFlairContainer,
                    children: (0, _.jsx)(_.Gkr, {}),
                  }),
                });
              default:
                return null;
            }
          };
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this);
          }
          m_chat = null;
          messagesContainer = _.createRef();
          componentDidMount() {
            this.StartChat();
          }
          componentDidUpdate(_) {
            this.m_chat &&
              this.m_chat.m_bAutoScroll &&
              this.ScrollToNewestMessages(),
              (this.props.steamID !== _.steamID ||
                this.props.broadcastID !== _.broadcastID ||
                this.props.broadcastChannelID !== _.broadcastChannelID) &&
                this.StartChat();
          }
          componentWillUnmount() {
            this.m_chat && this.m_chat.Stop();
          }
          StartChat() {
            if (
              (this.m_chat && this.m_chat.Stop(),
              (this.m_chat = _.Get().GetOrCreateChat(
                this.props.broadcastChannelID,
                this.props.steamID,
              )),
              this.props.broadcastChannelID)
            )
              this.m_chat.StartForChannel(this.props.broadcastChannelID);
            else if (
              this.props.steamID &&
              this.props.steamID &&
              (this.props.broadcastID || this.props.globalChat)
            ) {
              let _ = this.props.broadcastID || "0";
              this.m_chat.StartForSteamID(this.props.steamID, _),
                this.ScrollToNewestMessages();
            }
          }
          IsTrustedDomain(_) {
            return !!_.match(_);
          }
          AddLinksEmoticons(_, _) {
            let _ = _;
            _ && (_ = this.m_chat.GetUserEmoticons());
            let _ = _.split(_);
            const _ = [];
            for (let _ = 0; _ < _.length; _ += 1)
              _ % 2 === 1
                ? _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        emoticon: _[_],
                        large: !0,
                      },
                      _,
                    ),
                  )
                : _.push(_[_]);
            return _;
          }
          HandleScroll(_) {
            const _ = this.props.bInvertLayout
              ? _.currentTarget.scrollTop < 6
              : _.currentTarget.scrollTop + _.currentTarget.clientHeight >=
                _.currentTarget.scrollHeight - 6;
            this.m_chat && (this.m_chat.m_bAutoScroll = _);
          }
          ScrollToNewestMessages() {
            this.messagesContainer &&
              this.messagesContainer.current &&
              (this.messagesContainer.current.scrollTop = this.props
                .bInvertLayout
                ? 0
                : this.messagesContainer.current.scrollHeight);
          }
          OnContextMenu(_, _) {
            if (_.type !== _._.Chat) return null;
            const _ = [],
              _ = this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID()),
              _ = this.m_chat.BIsUserBroadcastModerator(
                this.m_chat.GetUserSteamID(),
              );
            return (
              (_._ && _._.is_support) || _ || _
                ? _.push(
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.RemoveUserMessagesServer(
                            _.steamid,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_RemoveMessages"),
                      },
                      "remove",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            12,
                            !1,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_half_Mute"),
                      },
                      "updatebanh",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            24,
                            !1,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_day_Mute"),
                      },
                      "updateband",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            168,
                            !1,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_week_Mute"),
                      },
                      "updatebanw",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            0,
                            !0,
                            _.persona_name,
                          ),
                        children: (0, _._)("#BroadcastChat_perm_Mute"),
                      },
                      "updatebanp",
                    ),
                    (0, _.jsx)(
                      _._,
                      {
                        onSelected: () =>
                          this.m_chat.UpdateUserChatBan(
                            _.steamid,
                            _._._,
                            0,
                            !1,
                            _.persona_name,
                            !0,
                          ),
                        children: (0, _._)("#BroadcastChat_Unmute"),
                      },
                      "removeban",
                    ),
                  )
                : this.m_chat.IsUserMutedLocally(_.steamid)
                  ? _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.UnmuteUserForSession(
                              _.steamid,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_UnmuteLocal"),
                        },
                        "unmuteuser",
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.MuteUserForSession(
                              _.steamid,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_MuteLocal"),
                        },
                        "muteuser",
                      ),
                    ),
              ((_._ && _._.is_support) ||
                this.m_chat.IsUserBroadcaster(this.m_chat.GetUserSteamID())) &&
                _.steamid &&
                (this.m_chat.BIsUserBroadcastModerator(_.steamid)
                  ? _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              _.steamid,
                              !1,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_Remove_Moderator"),
                        },
                        "removemod",
                      ),
                    )
                  : _.push(
                      (0, _.jsx)(
                        _._,
                        {
                          onSelected: () =>
                            this.m_chat.UpdateBroadcastChatModerator(
                              _.steamid,
                              !0,
                              _.persona_name,
                            ),
                          children: (0, _._)("#BroadcastChat_Add_Moderator"),
                        },
                        "addmod",
                      ),
                    )),
              _.length
                ? (0, _._)(
                    (0, _.jsxs)(_._, {
                      children: [
                        (0, _.jsxs)("div", {
                          className: _().SelectedUserNameCtn,
                          children: [
                            (0, _._)("#BroadcastChat_User"),
                            (0, _.jsx)("br", {}),
                            (0, _.jsx)("span", {
                              className: _().SelectedUserName,
                              children: _.persona_name,
                            }),
                          ],
                        }),
                        _,
                      ],
                    }),
                    _,
                  )
                : null
            );
          }
          GetTypeClassName(_) {
            return _.type === _._.Notification
              ? _().MessageNotification
              : _.type === _._.Error
                ? _().MessageError
                : _().MessageChat;
          }
          FormatMessage(_, _) {
            if (_.type === _._.Chat) {
              let _ = _ ? _.FilterText(_.steamid, _.msg) : _.msg;
              return this.AddLinksEmoticons(_, !1);
            } else return _.msg;
          }
          RenderUserChatLine(_, _, _) {
            let _ = _ ? _.get(_.steamid) : void 0;
            const _ = _.type === _._.Chat ? _(_.steamid, this.m_chat, _) : "";
            return (0, _.jsxs)(
              "div",
              {
                className: this.GetTypeClassName(_),
                onContextMenu: (_) => this.OnContextMenu(_, _),
                children: [
                  _.type === _._.Chat &&
                    (0, _.jsx)(_, {
                      userType: _,
                    }),
                  _.flair &&
                    (0, _.jsx)("span", {
                      className: _().FlairContainer,
                      children: this.AddLinksEmoticons(_.flair, !1),
                    }),
                  _.type === _._.Chat &&
                    (0, _.jsx)(_, {
                      userType: _,
                      msg: _,
                      presenterInfo: _,
                    }),
                  _.type === _._.Chat &&
                    this.m_chat.GetBroadcastSteamID() === _.steamid &&
                    (0, _.jsx)("span", {
                      className: `${_().MessageNotification} ${_().MessageContents}`,
                      children: ` (${(0, _._)("#BroadcastChat_Broadcaster")})`,
                    }),
                  _.type === _._.Chat &&
                    this.m_chat.m_mapChannelModeratorUsers.get(_.steamid) &&
                    (0, _.jsx)("span", {
                      className: `${_().MessageNotification} ${_().MessageContents}`,
                      children: ` (${(0, _._)("#BroadcastChat_Moderator")})`,
                    }),
                  (0, _.jsxs)("span", {
                    className: `${_().MessageContents} ${this.AddLinksEmoticons(_.msg, !1).filter((_) => _ && typeof _ == "string").length ? "" : _().EmoticonsOnly}`,
                    children: [
                      _.type === _._.Chat ? " : " : "",
                      this.FormatMessage(_, this.m_chat.TextFilterStore),
                    ],
                  }),
                ],
              },
              _.instance_id + "_" + _.client_ts + "_" + _,
            );
          }
          render() {
            const {
                hidden: _,
                bPartnerMemberOnlyChat: _,
                bInvertLayout: _,
                onSignIn: _,
              } = this.props,
              _ = this.m_chat ? this.m_chat.m_rgChatMessages : [],
              _ = _ ? _.reverse() : _,
              _ = this.m_chat
                ? _._.GetPresenterMapForBroadcasterSteamID(
                    this.m_chat.GetBroadcastSteamID(),
                  )
                : void 0,
              _ = this.m_chat ? this.m_chat.m_latestAnnouncement : null;
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().ChatPanel, "ChatPanel"),
              style: _
                ? {
                    display: "none",
                  }
                : void 0,
              children: [
                (0, _.jsx)(_, {
                  latestAnnouncement: _,
                }),
                _ &&
                  !!this.m_chat &&
                  (0, _.jsx)(_, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: _,
                    onSignIn: _,
                  }),
                (0, _.jsx)(_, {}),
                (0, _.jsx)("div", {
                  className: (0, _._)(
                    `${_().ChatMessages} ${_().minHeightZero}`,
                    "ChatMessages",
                  ),
                  onScroll: this.HandleScroll,
                  ref: this.messagesContainer,
                  children: _.map((_, _) => this.RenderUserChatLine(_, _, _)),
                }),
                (0, _.jsx)(_, {}),
                !_ &&
                  !!this.m_chat &&
                  (0, _.jsx)(_, {
                    oChat: this.m_chat,
                    emoticonStore: this.props.emoticonStore,
                    bPartnerMemberOnlyChat: _,
                    onSignIn: _,
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "m_chat", 2),
          _([_._], _.prototype, "StartChat", 1),
          _([_._], _.prototype, "HandleScroll", 1),
          _([_._], _.prototype, "OnContextMenu", 1),
          _([_._], _.prototype, "RenderUserChatLine", 1),
          (_ = _([_._], _));
        function _(_) {
          const {
            oChat: _,
            emoticonStore: _,
            bPartnerMemberOnlyChat: _,
            onSignIn: _,
          } = _;
          return _ && (!_._?.logged_in || !_._?.is_partner_member)
            ? (0, _.jsx)(_, {})
            : _._?.logged_in
              ? (0, _.jsx)(_, {
                  oChat: _,
                  emoticonStore: _,
                })
              : _
                ? (0, _.jsx)(_, {
                    onSignIn: _,
                  })
                : null;
        }
        function _(_) {
          const { oChat: _, emoticonStore: _ } = _,
            [_, _] = _.useState(""),
            _ = _.useRef(void 0),
            _ = (0, _._)(() => _.m_bRateLimited),
            _ = _.useCallback(
              (_) => {
                !_.shiftKey &&
                  _.charCode === 13 &&
                  (_.m_bRateLimited || (_.SendMessage(_), _("")),
                  _.preventDefault());
              },
              [_, _],
            ),
            _ = _.useCallback(
              (_, _ = !1) => {
                _(_ + `\u02D0${_}\u02D0`), _?.current && _.current.focus();
              },
              [_, _],
            ),
            _ = () => {
              _.SendMessage(_), _("");
            };
          let _ = _ || _.trim().length == 0,
            _ = (0, _._)(_().chatSubmitButton, _.length == 0 && _().disabled);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().ChatEntryCtn, "ChatEntryCtn"),
            children: (0, _.jsxs)("div", {
              className: (0, _._)(_().ChatEntry, "ChatEntry"),
              children: [
                (0, _.jsxs)("form", {
                  className: `${_().chatEntryControls}`,
                  children: [
                    (0, _.jsx)("textarea", {
                      className: _().chatTextarea,
                      placeholder: (0, _._)("#BroadcastChat_EnterResponse"),
                      onKeyPress: _,
                      onChange: (_) => _(_.target.value),
                      value: _,
                      ref: _,
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        nSeconds: _.m_nRateLimitSeconds,
                        bRateLimited: _.m_bRateLimited,
                      }),
                    (0, _.jsx)("button", {
                      className: _,
                      title: (0, _._)("#ChatEntryButton_Submit"),
                      disabled: _,
                      onClick: _,
                      children: (0, _.jsx)(_.XTb, {}),
                    }),
                  ],
                }),
                (0, _.jsx)("div", {
                  style: {
                    height: "50px",
                  },
                  className: `${_().chatEntryActionsContainer}`,
                  children: (0, _.jsxs)("div", {
                    className: _().chatEntryActionsGroup,
                    children: [
                      (0, _.jsx)(_._, {
                        disabled: !1,
                        OnEmoticonSelected: _,
                        rtLastAckedNewEmoticons: Number.MAX_VALUE,
                        emoticonStore: _,
                      }),
                      (0, _.jsx)(_, {
                        ..._,
                        textInputRef: _,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        }
        function _(_) {
          const { oChat: _, emoticonStore: _, textInputRef: _ } = _;
          return _.m_strFlairGroupID &&
            _.flair_list &&
            _.GetFlairListByGroupID(_.m_strFlairGroupID)?.length
            ? (0, _.jsx)(_._, {
                disabled: !1,
                OnEmoticonSelected: (_) => {
                  _.UpdateChatMessageFlair(_), _?.current && _.current.focus();
                },
                rtLastAckedNewEmoticons: Number.MAX_VALUE,
                emoticonStore: _,
                strFlairGroupID: _.m_strFlairGroupID,
                title: (0, _._)("#ChatEntryButton_Flair"),
                buttonIcon: (0, _.jsx)(_.P7r, {}),
              })
            : null;
        }
        class _ extends _.Component {
          render() {
            return (0, _.jsx)("div", {
              className: _().TimedProgressBarContainer,
              children: (0, _.jsxs)("div", {
                className: _().wrapper,
                children: [
                  (0, _.jsx)("div", {
                    className: `${_().spinner} ${_().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, _.jsx)("div", {
                    className: `${_().filler} ${_().pie}`,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                  (0, _.jsx)("div", {
                    className: _().mask,
                    style: {
                      animationDuration: `${this.props.nSeconds || 0}s`,
                    },
                  }),
                ],
              }),
            });
          }
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _().Description,
            children: (0, _.jsx)(_._, {
              onClick: _.onSignIn,
              className: (0, _._)(_().SignInButton),
              children: (0, _._)("#BroadcastChat_Login"),
            }),
          });
        }
        function _(_) {
          return (0, _.jsxs)("div", {
            className: _().Description,
            children: [
              (0, _.jsx)("div", {
                className: _().LogInPrompt,
                children: (0, _._)("#Broadcast_PartnerChat_Login"),
              }),
              !_._.logged_in &&
                !_._.IN_STEAMUI &&
                (0, _.jsx)(_._, {
                  onClick: _._,
                  className: (0, _._)(_().SignInButton),
                  children: (0, _._)("#Login_SignIn"),
                }),
            ],
          });
        }
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
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (0, _._)((_) => {
          const { appid: _ } = _,
            _ = (0, _._)(),
            _ = (0, _.useRef)({
              include_assets: !0,
              include_release: !0,
            }),
            _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            [_, _] = (0, _._)(_, _.current);
          let _ = (0, _._)(
              _().StoreSaleWidgetContainer_mini,
              "StoreSaleWidgetContainer_mini",
            ),
            _ = _().StoreSaleWidgetImage_mini,
            _ = _().StoreSaleImage_mini;
          if (_ == null)
            return (0, _.jsx)("div", {
              className: _,
              children: (0, _.jsx)(_._, {
                size: "medium",
              }),
            });
          if (_ == null || !_.name)
            return (0, _.jsx)("div", {
              className: _.StoreSaleWidgetEmptyContainer,
            });
          const _ = _.type != _._._,
            _ = (0, _._)((0, _._)(_), _);
          return (0, _.jsxs)("div", {
            className: _,
            children: [
              (0, _.jsx)("a", {
                href: _,
                target: _._.IN_CLIENT ? void 0 : "_blank",
                children: (0, _.jsx)(_._, {
                  _: _,
                  children: (0, _.jsx)("div", {
                    className: _,
                    children:
                      _ &&
                      (0, _.jsx)("img", {
                        className: _,
                        src: (0, _._)(_, "small_capsule"),
                        alt: _.name,
                      }),
                  }),
                }),
              }),
              (0, _.jsxs)("div", {
                className: _.StoreSaleBroadcastWidgetRight,
                children: [
                  (0, _.jsx)("a", {
                    href: _,
                    target: _._.IN_CLIENT ? void 0 : "_blank",
                    children: (0, _.jsx)(_._, {
                      _: _,
                      children: (0, _.jsx)("div", {
                        className: (0, _._)(
                          _.StoreSaleWidgetTitle,
                          "StoreSaleWidgetTitle",
                        ),
                        children: _.name,
                      }),
                    }),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.StoreSaleWidgetRelease,
                      children: (0, _._)(_),
                    }),
                  !!_ &&
                    (0, _.jsx)(_._, {
                      _: _,
                      bShowDemoButton: !0,
                    }),
                ],
              }),
            ],
          });
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        const _ = (0, _._)((_) => {
          const { event: _ } = _,
            _ = _.clanSteamID.GetAccountID(),
            _ = !_ || !_.jsondata || !_.jsondata.broadcast_item_drops_enabled,
            _ = (0, _.useRef)(null),
            [_, _] = (0, _.useState)(
              _ ? _._.GetCreatorHome(_.clanSteamID) : null,
            );
          if (
            ((0, _.useEffect)(() => {
              const _ = _().CancelToken.source();
              return (
                (_.current = _.cancel),
                (async () => {
                  const _ = _._.InitFromClanID(_),
                    _ = await _._.LoadCreatorHome(_, !1, _);
                  _.token.reason || _(_);
                })(),
                () => {
                  _.current && _.current("BroadcastDropsDisplay: unmounting");
                }
              );
            }, [_]),
            _ || !_ || !_.BIsLoaded())
          )
            return null;
          const _ =
            _._.COMMUNITY_BASE_URL +
            "gid/" +
            _.jsondata.broadcast_item_drops_details_clan_accountid +
            "/partnerevents/view/" +
            _.jsondata.broadcast_item_drops_details_event_gid;
          return (0, _.jsx)("div", {
            className: _().item_drop_ctn,
            children: (0, _.jsxs)("div", {
              children: [
                (0, _._)(
                  _.GetName().length > 0
                    ? _.jsondata.broadcast_item_drops_min_watch_time_minutes %
                        60 ==
                      0
                      ? "#SalePage_WatchForDrop_Hours_CreatorNamed"
                      : "#SalePage_WatchForDrop_Minutes_CreatorNamed"
                    : _.jsondata.broadcast_item_drops_min_watch_time_minutes %
                          60 ==
                        0
                      ? "#SalePage_WatchForDrop_Hours_Developer"
                      : "#SalePage_WatchForDrop_Minutes_Developer",
                  _.jsondata.broadcast_item_drops_min_watch_time_minutes % 60 ==
                    0
                    ? _.jsondata.broadcast_item_drops_min_watch_time_minutes /
                        60
                    : _.jsondata.broadcast_item_drops_min_watch_time_minutes,
                  _.GetName(),
                ),
                !!_.jsondata.broadcast_item_drops_details_clan_accountid &&
                  (0, _.jsx)("a", {
                    href: _,
                    target: _._.IN_CLIENT ? "" : "_blank",
                    children: (0, _._)("#SalePage_WatchForDrop_LearnMore"),
                  }),
              ],
            }),
          });
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_);
        function _(_) {
          const { steamid: _, closeModal: _ } = _;
          return (0, _.jsxs)(_._, {
            strDescription: "",
            strTitle: (0, _._)("#Button_Share"),
            onCancel: _,
            onOK: _,
            bAlertDialog: !0,
            modalClassName: "EventDisplay_Share_Dialog",
            children: [
              (0, _.jsx)(_, {
                steamid: _,
              }),
              (0, _.jsx)(_, {
                steamid: _,
              }),
            ],
          });
        }
        function _(_) {
          const { steamid: _ } = _,
            _ = _(_);
          return (0, _.jsxs)("div", {
            className: (0, _._)(_().FlexRowContainer, _().share_controls_ctn),
            children: [
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#EventDisplay_Share_OnFaceBook"),
                children: (0, _.jsx)(_._, {
                  href: _.strFacebookUrl,
                  className: _().ShareBtn,
                  children: (0, _.jsx)("img", {
                    className: (0, _._)(_().Button),
                    src: _._,
                  }),
                }),
              }),
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#EventDisplay_Share_OnTwitter"),
                children: (0, _.jsx)(_._, {
                  href: _.strTwitterUrl,
                  className: _().ShareBtn,
                  children: (0, _.jsx)("img", {
                    className: (0, _._)(_().Button),
                    src: _._,
                  }),
                }),
              }),
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#EventDisplay_Share_OnReddit"),
                children: (0, _.jsx)(_._, {
                  href: _.strRedditUrl,
                  className: _().ShareBtn,
                  children: (0, _.jsx)("img", {
                    className: (0, _._)(_().Button),
                    src: _._,
                  }),
                }),
              }),
            ],
          });
        }
        function _(_) {
          const { steamid: _ } = _,
            _ = _.createRef(),
            [_, _] = _.useState(""),
            _ = _.createRef(),
            _ = _.useCallback(
              (_) => {
                _.current &&
                  _.current.ownerDocument.defaultView.navigator.clipboard
                    .writeText(_.current.value)
                    .then((_) => {
                      _((0, _._)("#EventDisplay_Share_CopiedToClipboard"));
                    })
                    .catch((_) => {
                      _(
                        (0, _._)("#EventDisplay_Share_FailedToCopyToClipboard"),
                      ),
                        console.error("Failed to copy link to clipboard:", _);
                    });
              },
              [_],
            ),
            _ = _._.COMMUNITY_BASE_URL + "broadcast/watch/" + _;
          return (0, _.jsxs)("div", {
            children: [
              (0, _.jsxs)("div", {
                className: (0, _._)(_().FlexRowContainer, _().linkField),
                onClick: _,
                children: [
                  (0, _.jsx)("span", {
                    className: _().LinkInputLabel,
                    children: (0, _._)("#EventDisplay_Share_Link"),
                  }),
                  (0, _.jsx)("textarea", {
                    className: _().LinkInput,
                    ref: _,
                    value: _,
                    readOnly: !0,
                  }),
                  !!document.queryCommandSupported("copy") &&
                    (0, _.jsx)(_._, {
                      toolTipContent: (0, _._)("#ToolTip_CopyLinkToClipboard"),
                      children: (0, _.jsx)("div", {
                        className: (0, _._)(
                          _().Button,
                          _().Icon,
                          _().LinkButton,
                        ),
                        children: (0, _.jsx)("img", {
                          className: _().ClipboardIcon,
                          src: _._,
                        }),
                      }),
                    }),
                ],
              }),
              (0, _.jsx)("div", {
                ref: _,
                className: _().ClipboardText,
                children: _,
              }),
            ],
          });
        }
        function _(_) {
          const _ = _._.COMMUNITY_BASE_URL + "broadcast/share/" + _;
          return {
            strFacebookUrl: _ + "?site=facebook&t=" + Math.random(),
            strTwitterUrl: _ + "?site=twitter",
            strRedditUrl: _ + "?site=reddit",
          };
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
        const _ = {
          list: [
            {
              appid: 444090,
              url: "https://steam.tv/paladins",
            },
            {
              appid: 386360,
              url: "https://steam.tv/smite",
            },
            {
              appid: 813820,
              url: "https://steam.tv/realmroyale",
            },
            {
              appid: 583950,
              url: "https://steam.tv/artifact",
              broadcasterAccountID: 912972716,
            },
            {
              appid: 570,
              url: "https://steam.tv/dota",
              broadcasterAccountID: 238221269,
            },
            {
              appid: 1025790,
              url: "https://steam.tv/steamawards",
              broadcasterAccountID: 934427243,
            },
            {
              appid: 730,
              url: "https://steam.tv/csgo",
              broadcasterAccountID: 927819071,
            },
          ],
        };
        function _() {
          const _ = (0, _._)();
          return !(0, _._)() && !_;
        }
        function _(_) {
          return _()
            ? (0, _.jsx)(_, {
                ..._,
              })
            : null;
        }
        let _ = class extends _.Component {
          m_cancelSignal = _().CancelToken.source();
          m_bMarkedUsabilitySeen = !1;
          state = {
            bShowPopoutHeader: !1,
            bExpanded: !1,
            bLoadingPreference: !0,
            style: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            innerStyle: {
              maxHeight: "0vh",
              overflow: "hidden",
              transition: "max-height 1s ease-in-out",
            },
            bStartMuted: !0,
          };
          async componentDidMount() {
            await _._.Get().LoadBIsEmbeddedBroadcastHidden(this.m_cancelSignal),
              this.m_cancelSignal.token.reason ||
                this.setState({
                  bLoadingPreference: !1,
                  bExpanded:
                    !_._.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings(),
                  innerStyle: {
                    ...this.state.innerStyle,
                    maxHeight:
                      _._.Get().BIsEmbeddedBroadcastHiddenByDefaultUserSettings()
                        ? "0vh"
                        : "100vh",
                  },
                }),
              await (this.props.bIsPreview &&
              this.props.accountIDs &&
              !this.props.event.BUsesContentHubForItemSource()
                ? _._.Get().HintLoadEmbeddablePreviewStreams(this.props)
                : _._.Get().HintLoadEmbeddableStreams(this.props)),
              this.props.nAppIDVOD &&
                _._.Get().SetupEmbeddableVOD(
                  this.props,
                  !this.props.bSkipPreRoll,
                ),
              window.setTimeout(() => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    style: {
                      ...this.state.style,
                      maxHeight: "100vh",
                    },
                  });
              }, 10);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "BroadcastEmbeddable component unmounted",
            );
          }
          ToggleBroadcastExpandShrink() {
            let _ = _._.Get().GetPlayReadyStream(this.props);
            const _ = this.state.bExpanded,
              _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID;
            (0, _._)(_, _ ? _._._ : _._._, _.snr),
              _ && (0, _._)() && (0, _._)().AddEvent(_._._),
              window.setTimeout(
                () =>
                  this.setState({
                    innerStyle: {
                      ...this.state.innerStyle,
                      maxHeight: _ ? "0vh" : "100vh",
                    },
                  }),
                10,
              ),
              _ ||
                this.setState(
                  {
                    bExpanded: !this.state.bExpanded,
                  },
                  () =>
                    _._.Get().SetEmbeddedStreamCollapsed(!this.state.bExpanded),
                );
          }
          OnShrinkTransitionEnd() {
            this.state.innerStyle.maxHeight === "0vh" &&
              this.setState(
                {
                  bExpanded: !1,
                },
                () => _._.Get().SetEmbeddedStreamCollapsed(!0),
              );
          }
          async onStreamSelect(_) {
            this.setState({
              bStartMuted: !1,
            }),
              _._.Get().GetPlayReadyStream(this.props).accountid !=
                _.accountid &&
                (await _._.Get().AttemptToPlayStream(this.props, _));
          }
          async PlayNextNonVOD() {
            this.setState({
              bStartMuted: !1,
            });
            const _ = _._.Get()
              .GetStreams(this.props)
              .filter(
                (_) =>
                  !this.props.fnFilterStreams || this.props.fnFilterStreams(_),
              );
            await _._.Get().PlayFromAvailableStreams(this.props, _, !0);
          }
          ConstructSidePanels(_, _) {
            let _ = {
              leftPanel: null,
              rightPanel: null,
              bRightPanelArtworkOrEmpty: !0,
            };
            if (this.props.bWidePlayer) return _;
            const _ = _._.Get().GetConcurrentStreams(this.props) > 1;
            let _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
              _ = (0, _.jsx)(
                _,
                {
                  ImgUrl: _.right_panel,
                },
                "right" + _,
              ),
              _ = (0, _.jsx)(
                _,
                {
                  ImgUrl: _.left_panel,
                },
                "left" + _,
              );
            const _ = 11;
            if (_ < _) {
              const _ = _._.GetAppIDListForBroadcasterSteamID(_.steamid);
              _ && _.length === 1 && (_ = _[0]);
            }
            return (
              (this.props.promotionName ||
                this.props.bIsPreview ||
                this.props.subid ||
                this.props.bundleid) &&
                _ >= _ &&
                (!this.props.event ||
                  !this.props.event.jsondata.broadcast_force_banner) &&
                ((_ = (0, _.jsx)(
                  _,
                  {
                    appid: _,
                  },
                  "mini" + _.accountid,
                )),
                (_.bRightPanelArtworkOrEmpty = !1)),
              _ && !_
                ? ((_.leftPanel = (0, _.jsx)(
                    _,
                    {
                      broadcastEmbedContext: this.props,
                      curStream: _,
                      onStreamSelect: this.onStreamSelect,
                      fnFilterStreams: this.props.fnFilterStreams,
                      bShowCapsuleArt: this.props.bShowCapsuleArt,
                    },
                    "selector" + _,
                  )),
                  (_.rightPanel = _))
                : _
                  ? ((_.leftPanel = (0, _.jsx)("div", {})),
                    (_.rightPanel = (0, _.jsx)(_, {
                      stream: _,
                      orientation: "rightside",
                    })),
                    (_.bRightPanelArtworkOrEmpty = !1))
                  : ((_.leftPanel = _), (_.rightPanel = _)),
              _
            );
          }
          MarkBroadcastSeen() {
            this.m_bMarkedUsabilitySeen ||
              ((this.m_bMarkedUsabilitySeen = !0),
              (0, _._)() && (0, _._)().AddEvent(_._._));
          }
          render() {
            if (this.state.bLoadingPreference) return null;
            let _ = _._.Get().GetPlayReadyStream(this.props);
            if (_) {
              this.MarkBroadcastSeen();
              let _ = _._.Get().GetChatVisibility() === "show";
              const {
                event: _,
                language: _,
                fnRenderBroadcastContext: _,
              } = this.props;
              _ &&
                (_ = {
                  ..._,
                  left_panel: _.GetImageURL(
                    "broadcast_left",
                    _ || (0, _.sfN)(_._.LANGUAGE),
                  ),
                  right_panel: _.GetImageURL(
                    "broadcast_right",
                    _ || (0, _.sfN)(_._.LANGUAGE),
                  ),
                  store_title: _.GetBroadcastTitle(
                    _ || (0, _.sfN)(_._.LANGUAGE),
                  ),
                  broadcast_chat_visibility: _.GetBroadcastChatVisibility(),
                });
              let _ = this.ConstructSidePanels(_, _),
                _ = _.store_title ? _.store_title : _.title,
                _ = _._.Get().GetConcurrentStreams(this.props) > 1;
              const _ = () => {
                _.nAppIDVOD && this.PlayNextNonVOD(),
                  this.props.fnOnVideoEnd?.();
              };
              return (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)("div", {
                  className: "broadcast_embed_top_ctn_trgt",
                  style: this.state.style,
                  children: [
                    (0, _.jsxs)("div", {
                      className: (0, _._)({
                        [_().bordered_container]: !0,
                        [_().Event]: !!_,
                        broadcast_brd_ctn_trgt: !0,
                      }),
                      children: [
                        (0, _.jsxs)("div", {
                          className: (0, _._)(
                            _().bordered_title,
                            "bordered_title_trgt",
                          ),
                          children: [
                            (0, _.jsx)(_._, {}),
                            (0, _.jsx)("div", {
                              className: _().streamTitle,
                              children: _,
                            }),
                            (0, _.jsxs)("div", {
                              className: _().bordered_corner_container,
                              children: [
                                !this.state.bExpanded &&
                                  (0, _.jsx)(_._, {
                                    toolTipContent: (0, _._)(
                                      "#StoreBroadcast_Change_store_Broadcast_settings",
                                    ),
                                    children: (0, _.jsx)("div", {
                                      className: _().broadcast_settings_icon,
                                      onClick: () =>
                                        window.open(
                                          `${_._.STORE_BASE_URL}account/preferences/#store_broadcast_settings`,
                                        ),
                                    }),
                                  }),
                                (0, _.jsx)(_._, {
                                  toolTipContent: (0, _._)(
                                    "#StoreBroadcast_Hide_Tooltip",
                                  ),
                                  children: (0, _.jsx)("div", {
                                    className: this.state.bExpanded
                                      ? _().bordered_corner_expanded
                                      : _().bordered_corner_shrinked,
                                    onClick: this.ToggleBroadcastExpandShrink,
                                  }),
                                }),
                              ],
                            }),
                            !!_.gamedata_subtitle &&
                              (0, _.jsx)("div", {
                                className: _().bordered_subtitle,
                                children: _.gamedata_subtitle,
                              }),
                          ],
                        }),
                        !!this.state.bExpanded &&
                          (0, _.jsxs)("div", {
                            className: (0, _._)({
                              [_().container]: !0,
                              embeddable_ctn_trgt: !0,
                              multistream: _,
                              broadcast_right_panel_simple:
                                _.bRightPanelArtworkOrEmpty,
                              broadcast_chat_expanded: _,
                            }),
                            style: {
                              ...this.state.innerStyle,
                            },
                            onTransitionEnd: this.OnShrinkTransitionEnd,
                            children: [
                              (0, _.jsx)("div", {
                                className: _().LeftPanelCtn,
                                children: _.leftPanel,
                              }),
                              (0, _.jsx)(_, {
                                stream: _,
                                bStartMuted: this.state.bStartMuted,
                                fnRenderBroadcastContext: _,
                                fnOnVideoEnd: _,
                                bWidePlayer: this.props.bWidePlayer,
                              }),
                              (0, _.jsx)("div", {
                                className: _().RightPanelCtn,
                                children: _.rightPanel,
                              }),
                              !!this.state.bExpanded &&
                                (0, _.jsx)(_, {
                                  stream: _,
                                  bMultistream: _,
                                  chatAnnouncementGivewayGID: _.rightPanel
                                    ? void 0
                                    : this.props.chat_announcement_giveaway,
                                }),
                            ],
                          }),
                      ],
                    }),
                    !!(
                      _ &&
                      _.jsondata &&
                      _.jsondata.broadcast_item_drops_enabled
                    ) &&
                      (0, _.jsx)(_, {
                        event: _,
                      }),
                    (0, _.jsx)("div", {
                      className: _().clear_div,
                    }),
                  ],
                }),
              });
            } else
              return (0, _.jsx)("div", {
                className: "NoBroadcastAvailable",
              });
          }
        };
        _([_._], _.prototype, "ToggleBroadcastExpandShrink", 1),
          _([_._], _.prototype, "OnShrinkTransitionEnd", 1),
          _([_._], _.prototype, "onStreamSelect", 1),
          _([_._], _.prototype, "PlayNextNonVOD", 1),
          (_ = _([_._], _));
        class _ extends _.Component {
          m_iVideoContainerRef = _.createRef();
          constructor(_) {
            super(_),
              (this.state = {
                bPopout: !1,
                bPreventPopup: window.screen.width <= 768,
              });
          }
          CloseBroadcastPopup() {
            const _ = _._.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, _._)(_, _._._, this.props.stream.snr),
              (0, _._)() && (0, _._)().AddEvent(_._._),
              this.setState({
                bPopout: !1,
                bPreventPopup: !0,
              });
          }
          OnEnter() {
            !this.state.bPreventPopup &&
              this.state.bPopout &&
              this.setState({
                bPopout: !1,
              });
          }
          OnLeave() {
            !this.state.bPreventPopup &&
              !this.state.bPopout &&
              this.setState({
                bPopout: !0,
              });
          }
          render() {
            return (0, _.jsx)("div", {
              className: _().wrapper,
              children: (0, _.jsx)(_._, {
                onEnter: this.OnEnter,
                onLeave: this.OnLeave,
                onIntersectionChange: (_) => {
                  _.isIntersecting || this.OnLeave();
                },
                className: (0, _._)({
                  [_().video_placeholder]: !0,
                  video_placeholder_trgt: !0,
                  [_().WidePlayer]: this.props.bWidePlayer,
                }),
                ref: this.m_iVideoContainerRef,
                children: (0, _.jsxs)("div", {
                  className: this.state.bPopout
                    ? _().broadcast_floating
                    : _().video_container,
                  children: [
                    this.state.bPopout &&
                      (0, _.jsx)(_, {
                        steamIDBroadcast: this.props.stream.steamid,
                        OnPreventPopup: this.CloseBroadcastPopup,
                      }),
                    (0, _.jsx)("div", {
                      className: _().BroadcastPlayerContainer,
                      children: (0, _.jsx)(_.default, {
                        steamIDBroadcast: this.props.stream.steamid,
                        watchLocation: _._._,
                        bStartMuted: this.props.bStartMuted,
                        fnRenderBroadcastContext:
                          this.props.fnRenderBroadcastContext,
                        fnOnVideoEnd: this.props.fnOnVideoEnd,
                        nAppIDVOD: this.props.stream.nAppIDVOD,
                      }),
                    }),
                  ],
                }),
              }),
            });
          }
        }
        _([_._], _.prototype, "CloseBroadcastPopup", 1),
          _([_._], _.prototype, "OnEnter", 1),
          _([_._], _.prototype, "OnLeave", 1);
        function _(_) {
          const { stream: _ } = _,
            [_] = (0, _._)(() => [_.steamid]),
            _ = _._.GetOrCreateBroadcastInfo(_).m_nAppID,
            _ = _.list.find(
              (_) =>
                _.appid == _ &&
                (!_.broadcasterAccountID ||
                  _.broadcasterAccountID == _.accountid),
            );
          if (_) {
            let _ = _.url;
            return (
              (_._.IN_CLIENT ||
                navigator.userAgent.indexOf("Valve Steam Client") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam GameOverlay") >= 0 ||
                navigator.userAgent.indexOf("Valve Steam Tenfoot") >= 0) &&
                (_ = "steam://openurl/" + _),
              (0, _.jsx)("a", {
                href: _,
                children: (0, _._)(
                  "#Broadcast_Embed_Watch_With_Frieds_SteamTV",
                ),
              })
            );
          } else {
            const _ = _._.COMMUNITY_BASE_URL + "broadcast/watch/" + _;
            return (0, _.jsx)(_._, {
              toolTipContent: (0, _._)("#BroadcastWatch_View_Broadcast_Page"),
              children: (0, _.jsx)("a", {
                href: _,
                className: _().external_link,
                children: (0, _.jsx)(_.GrD, {}),
              }),
            });
          }
        }
        let _ = class extends _.Component {
          OnToggleChat(_) {
            _.preventDefault();
            const _ = _._.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, _._)(
              _,
              _._.Get().GetChatVisibility() === "show" ? _._._ : _._._,
              this.props.stream.snr,
            ),
              _._.Get().ToggleChatVisibility();
          }
          onWatchBroadcastPage() {
            const _ = _._.GetOrCreateBroadcastInfo(
              this.props.stream.steamid,
            ).m_nAppID;
            (0, _._)(_, _._._, this.props.stream.snr);
          }
          render() {
            const _ = _._.Get().GetChatVisibility() != "remove",
              _ = _._.Get().GetChatVisibility() === "hide",
              _ = !this.props.stream.nAppIDVOD,
              _ = _;
            let _ = Number.parseInt(
              "" +
                _._.GetOrCreateBroadcastInfo(this.props.stream.steamid)
                  .m_nViewerCount,
            );
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().viewer_bar, "viewer_bar"),
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().viewer_count, "viewer_count"),
                  children: [(0, _.jsx)(_.y_e, {}), (0, _._)(_)],
                }),
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().viewer_links, "viewer_links"),
                  children: [
                    !!(_ && !_ && this.props.bMultistream) &&
                      (0, _.jsx)("div", {
                        className: _().chat_link,
                        children: (0, _.jsx)("a", {
                          href: "#",
                          className: _().ChatToggle,
                          onClick: this.OnToggleChat,
                          children: (0, _._)(
                            "#sale_three_section_show_streams",
                          ),
                        }),
                      }),
                    _ &&
                      (0, _.jsxs)("div", {
                        className: _().chat_link,
                        children: [
                          (0, _.jsx)(_.ROZ, {}),
                          (0, _.jsx)("a", {
                            href: "#",
                            className: _().ChatToggle,
                            onClick: this.OnToggleChat,
                            children: (0, _._)(
                              _
                                ? "#sale_three_section_show_chat"
                                : "#sale_three_section_hide_chat",
                            ),
                          }),
                        ],
                      }),
                    _ &&
                      (0, _.jsxs)("div", {
                        className: _().chat_link,
                        children: [
                          (0, _.jsx)(_.SYj, {}),
                          (0, _.jsx)("a", {
                            href: "#",
                            className: _().ChatToggle,
                            onClick: (_) =>
                              (0, _._)(
                                (0, _.jsx)(_, {
                                  steamid: this.props.stream.steamid,
                                }),
                                (0, _._)(_),
                              ),
                            children: (0, _._)("#Broadcast_ShareBroadcast"),
                          }),
                        ],
                      }),
                    (0, _.jsx)(_._, {
                      toolTipContent: (0, _._)(
                        "#StoreBroadcast_Change_store_Broadcast_settings",
                      ),
                      children: (0, _.jsx)("a", {
                        href:
                          _._.STORE_BASE_URL +
                          "account/preferences/#store_broadcast_settings",
                        target: _._.IN_CLIENT ? void 0 : "_blank",
                        className: _().settings_link,
                        children: (0, _.jsx)(_.wB_, {}),
                      }),
                    }),
                    _ &&
                      (0, _.jsx)(_, {
                        ...this.props,
                      }),
                  ],
                }),
                !!this.props.chatAnnouncementGivewayGID &&
                  (0, _.jsx)(_, {
                    gidGiveaway: this.props.chatAnnouncementGivewayGID,
                    stream: this.props.stream,
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnToggleChat", 1),
          _([_._], _.prototype, "onWatchBroadcastPage", 1),
          (_ = _([_._], _));
        class _ extends _.Component {
          render() {
            let _ = this.props.ImgUrl;
            return (0, _.jsxs)("div", {
              className: _().SidePanelBackground,
              children: [
                _ &&
                  (0, _.jsx)("img", {
                    className: _().side_panels,
                    src: this.props.ImgUrl,
                  }),
                !_ &&
                  (0, _.jsx)("div", {
                    className: _().side_panels,
                  }),
              ],
            });
          }
        }
        const _ = (0, _._)((_) => {
          const { steamIDBroadcast: _ } = _;
          let _ = _._.GetOrCreateBroadcastInfo(_).m_nAppID;
          _ = _ != _._ ? _ : 0;
          const _ = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: [_().PopOutVideoTitleBar, _().NoSeslect].join(" "),
            children: [
              _
                ? (0, _.jsx)(_._, {
                    _: _,
                    className: _().PopOutVideoTitleText,
                    children: (0, _._)("#StoreBroadcast_Detault_popout_Title"),
                  })
                : (0, _.jsx)("div", {
                    className: _().PopOutVideoTitleText,
                    children: (0, _._)("#StoreBroadcast_Detault_popout_Title"),
                  }),
              (0, _.jsx)(_._, {
                toolTipContent: (0, _._)(
                  "#StoreBroadcast_close_broadcast_popup",
                ),
                children: (0, _.jsx)("button", {
                  className: _().PopOutVideoCloseButton,
                  onClick: _.OnPreventPopup,
                  children: (0, _.jsx)(_._, {}),
                }),
              }),
            ],
          });
        });
        function _(_, _) {
          const _ = _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
            _ = _._.Get().GetApp(_),
            _ = _ && _?.GetAssets()?.GetHeaderURL();
          return parseInt(
            _
              ? _().strStreamIconCapsuleArtHeight
              : _().strStreamIconScreenshotArtHeight,
          );
        }
        function _(_) {
          const {
              curStream: _,
              onStreamSelect: _,
              fnFilterStreams: _,
              bShowCapsuleArt: _,
              broadcastEmbedContext: _,
            } = _,
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useMemo)(() => {
              const _ = _._.Get()
                .GetStreams(_)
                .filter((_) => !_ || _(_));
              return (0, _._)(_), _;
            }, [_, _]);
          return (
            (0, _.useEffect)(() => {
              if (_ && _.current) {
                const _ = _.map(
                  (_) => _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
                ).filter(Boolean);
                _._.Get()
                  .QueueMultipleAppRequests(_, {
                    include_assets: !0,
                  })
                  .then(() => {
                    if (_.current) {
                      let _ = 0;
                      for (const _ of _) {
                        if (_.accountid == _.accountid) break;
                        _ += _(_, _);
                      }
                      _.current.scrollTop = _;
                    }
                  });
              }
            }, [_, _, _.accountid, _]),
            (0, _.jsx)("div", {
              ref: _,
              className: (0, _._)({
                [_().side_panels]: !0,
                side_panels: !0,
                [_().multistream]: !0,
                [_().scrollingstreams]: _.length > 3,
              }),
              children: (0, _.jsx)("div", {
                className: _().MultiStreamCtn,
                children: _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      stream: _,
                      bSelected: _.accountid == _.accountid,
                      onStreamSelect: _,
                      bShowCapsuleArt: _,
                    },
                    _.accountid ?? _.steamid,
                  ),
                ),
              }),
            })
          );
        }
        function _(_) {
          const {
            onStreamSelect: _,
            bSelected: _,
            stream: _,
            bShowCapsuleArt: _,
          } = _;
          let _ = (0, _._)(
            () => _._.GetOrCreateBroadcastInfo(_.steamid).m_nAppID,
          );
          _ = _ != _._ ? _ : 0;
          const _ = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_);
          if (!(0, _._)(_)) return null;
          const _ = _ && _ && (0, _._)(_, "header"),
            _ = Number.parseInt("" + _.viewer_count),
            _ = !Number.isNaN(_),
            _ = !!_.nAppIDVOD && _?.name;
          return (0, _.jsxs)("div", {
            className: (0, _._)({
              [_().stream_icon_and_viewer_container]: !0,
              [_().stream_featured]:
                _.current_selection_priority == _._.k_eFeatured,
              [_().display_capsule_art]: !!_,
            }),
            children: [
              (0, _.jsx)(_._, {
                _: _,
                hoverClassName: _().StreamCapsule,
                children: (0, _.jsx)(_._, {
                  className: (0, _._)(
                    _().stream_icon_container,
                    _ && _().stream_selected,
                  ),
                  onClick: () => _ && _(_),
                  rootMargin: "100px 0px 100px 0px",
                  children: (0, _.jsx)(_, {
                    strThumbnail: _.thumbnail_http_address,
                    bSelected: _,
                    strCapsuleArtURL: _,
                  }),
                }),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_().viewer_count, !_ && _().vod_title),
                children: _
                  ? (0, _.jsxs)(_.Fragment, {
                      children: [
                        (0, _.jsx)(_.y_e, {}),
                        (0, _.jsx)("div", {
                          className: _().ViewerNum,
                          children: (0, _._)(_),
                        }),
                      ],
                    })
                  : _,
              }),
            ],
          });
        }
        function _(_) {
          const { strCapsuleArtURL: _, strThumbnail: _, bSelected: _ } = _,
            _ = _ ? _().stream_icon_selected : _().stream_icon;
          if (_) {
            const _ = [_];
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("img", {
                  className: (0, _._)(_, _().stream_icon_hide_on_hover),
                  src: _,
                }),
                (0, _.jsx)(_._, {
                  className: (0, _._)(_, _().stream_icon_show_on_hover),
                  srcs: _,
                }),
              ],
            });
          } else
            return (0, _.jsx)("img", {
              className: _,
              src: _,
            });
        }
        function _(_) {
          const { stream: _, orientation: _ } = _,
            _ = _ == "below",
            [_, _] = (0, _._)(() => [
              _._.GetBroadcast(_.steamid),
              _._.GetBroadcast(_.steamid)?.m_ulBroadcastID,
            ]),
            _ = (0, _._)(() => _.steamid);
          return _
            ? (0, _.jsx)("div", {
                className: (0, _._)({
                  [_().chat_below_container]: _,
                  [_().chat_rightside_container]: !_,
                  [_().store_chat_ctn]: !0,
                }),
                children: (0, _.jsx)("div", {
                  className: _().ChatContainer,
                  children: (0, _.jsx)(_, {
                    emoticonStore: _._,
                    watchLocation: _._._,
                    steamID: _,
                    broadcastID: _,
                  }),
                }),
              })
            : null;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            BroadcastDetails: () => _,
            LinkOverlay: () => _,
            default: () => _,
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
        class _ extends _.Component {
          m_elCanvas = null;
          m_Context = null;
          m_schUpdate = new _._();
          m_bSetupComplete = !1;
          componentDidMount() {
            this.props.updateRate == 0 && this.updateCanvas();
          }
          componentWillUnmount() {
            this.m_schUpdate.Cancel();
          }
          componentDidUpdate() {
            this.updateCanvas();
          }
          BindCanvasRef(_) {
            this.m_elCanvas = _;
          }
          updateCanvas() {
            if (
              this.props.elementRef == null ||
              this.m_elCanvas == null ||
              this.m_bSetupComplete
            )
              return;
            let _ = this.props.scaleFactor || [1, 1],
              _ = this.props.elementRef,
              _ = this.props.updateRate;
            const _ = this.m_elCanvas.getContext("2d");
            if (!_) return;
            this.m_Context = _;
            let _ = Math.floor(
                this.m_elCanvas.clientWidth / this.props.reductionFactor,
              ),
              _ = Math.floor(
                this.m_elCanvas.clientHeight / this.props.reductionFactor,
              );
            (this.m_elCanvas.width = _),
              (this.m_elCanvas.height = _),
              (this.props.blurAmount ?? 0) > 0 &&
                (_.filter = "blur(" + this.props.blurAmount + "px)");
            let _ = () => {
              _.drawImage(_, 0, 0, _ * _[0], _ * _[1]),
                _ > 0 && this.m_schUpdate.Schedule(_, _);
            };
            _(), (this.m_bSetupComplete = !0);
          }
          render() {
            return (0, _.jsx)("canvas", {
              _: this.props._,
              className: this.props.className,
              ref: this.BindCanvasRef,
              width: this.props.width,
              height: this.props.height,
            });
          }
        }
        _([_._], _.prototype, "BindCanvasRef", 1),
          _([_._], _.prototype, "updateCanvas", 1);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 500;
        class _ extends _.Component {
          render() {
            let {
              keyExtractor: _,
              style: _,
              duration: _ = _,
              className: _,
              children: _,
              childRef: _,
              ..._
            } = this.props;
            const _ = {
              ...(_ || {}),
              transitionDuration: `${_ / 1e3}s`,
            };
            return (0, _.jsx)(_._, {
              ..._,
              className: (0, _._)("crossfade", _),
              children: (0, _.jsx)(
                _._,
                {
                  nodeRef: _,
                  classNames: "crossfade-anim",
                  timeout: _,
                  style: _,
                  children: _,
                },
                _(),
              ),
            });
          }
        }
        function _(_) {
          const { src: _, ..._ } = _,
            _ = {
              backgroundImage: `url(${_})`,
            },
            _ = _.useRef(null);
          return (0, _.jsx)(_, {
            style: _,
            keyExtractor: () => _,
            childRef: _,
            ..._,
            children: (0, _.jsx)("div", {
              ref: _,
              className: "crossfade-img",
            }),
          });
        }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        function _() {
          return (0, _.jsx)("div", {
            className: "STV_ReplayBanner",
            children: (0, _._)("#DASHPlayerControls_IsReplay"),
          });
        }
        const _ = (0, _._)((_) => {
          let _ = _.video;
          if (_ && (_.IsBroadcastClip() || _.IsBroadcastVOD())) return null;
          let _ = _._.Loading,
            _ = "";
          if (_) {
            (_ = _.GetBroadcastState()), (_ = _.GetBroadcastStateDescription());
            let _ = _.IsBuffering();
            _ == _._.Unlocking && ((_ = _._.Loading), (_ = "")),
              _ == _._.Ready && _ && ((_ = _._.Loading), (_ = ""));
          }
          if ((_ && _ != _._.Error && _.GetUserInputNeeded()) || _ == _._.Ready)
            return null;
          let _ = _ == _._.Loading;
          return (0, _.jsxs)("div", {
            className: "BroadcastVideoWatchState",
            style: {
              filter: "hue-rotate(40deg)",
            },
            children: [
              _ && (0, _.jsx)(_._, {}),
              !_ &&
                (0, _.jsx)("div", {
                  className: "BroadcastVideoWatchState_Text",
                  children: _,
                }),
            ],
          });
        });
        class _ extends _.Component {
          OnClick() {
            _._.UserInputClickVideo(this.props.video);
          }
          render() {
            return (0, _.jsxs)("div", {
              className: "BroadcastVideoUserInputNeeded",
              onClick: this.OnClick,
              children: [
                (0, _.jsx)(_.jGG, {}),
                (0, _.jsx)("span", {
                  children: (0, _._)("#DASHPlayerControls_ClickToPlay"),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnClick", 1);
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
        let _ = class extends _.Component {
          constructor(_) {
            super(_);
          }
          HideStats() {
            this.props.closeStats && this.props.closeStats();
          }
          render() {
            let _ = this.props.stats;
            return (0, _.jsxs)("div", {
              className: "dash_video_stats",
              children: [
                (0, _.jsx)("button", {
                  className: "dash_stat_close_button",
                  onClick: this.HideStats,
                  children: (0, _.jsx)(_.sED, {}),
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BufferingResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBufferingResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_PlaybackResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPlaybackResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_HtmlResolution"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetHTMLVideoResolutionToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_ContentServer"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetContentServerToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_StallEvents"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetStalledEventsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_FailedDownloads"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetFailedDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_TimeToFirstFrame"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetTimeToFirstFrameToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_PlaybackRate"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPlaybackRateForDisplay(),
                    }),
                  ],
                }),
                (0, _.jsx)(_, {
                  stats: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "HideStats", 1), (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_);
          }
          createBufferedRange(_) {
            let _ = this.props.stats,
              _ = [],
              _ = _ ? "vidbuf" : "audbuf",
              _ = _
                ? _.GetNumBufferedVideoRanges()
                : _.GetNumBufferedAudioRanges();
            if (_ > 0)
              for (let _ = 0; _ < _; ++_) {
                let _ = (0, _._)(
                    _
                      ? "#DASHPlayerStats_VideoBufferRange"
                      : "#DASHPlayerStats_AudioBufferRange",
                    _,
                  ),
                  _ = _
                    ? _.GetBufferedVideoSegmentForDisplay(_)
                    : _.GetBufferedAudioSegmentForDisplay(_);
                _.push(
                  (0, _.jsxs)(
                    "div",
                    {
                      children: [
                        _,
                        " ",
                        (0, _.jsx)("span", {
                          className: "videoStatsValue",
                          children: _,
                        }),
                      ],
                    },
                    _ + _,
                  ),
                );
              }
            else {
              let _ = (0, _._)(
                _
                  ? "#DASHPlayerStats_VideoNoRangeInformation"
                  : "#DASHPlayerStats_AudioNoRangeInformation",
              );
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    children: _,
                  },
                  _ + "none",
                ),
              );
            }
            return _;
          }
          render() {
            let _ = this.props.stats;
            return (0, _.jsxs)("div", {
              className: "dash_video_quick_stats",
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BytesReceived"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBytesReceivedToDisplay(),
                    }),
                  ],
                }),
                this.props.stats.BHasFrameInformation() &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#DASHPlayerStats_DroppedFrames"),
                      " ",
                      (0, _.jsx)("span", {
                        className: "videoStatsValue",
                        children: _.GetDroppedFramesToDisplay(),
                      }),
                    ],
                  }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_VideoBuffered"),
                    " ",
                    (0, _.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [_.GetVideoBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_AudioBuffered"),
                    " ",
                    (0, _.jsxs)("span", {
                      className: "videoStatsValue",
                      children: [_.GetAudioBufferedToDisplay(), " "],
                    }),
                  ],
                }),
                this.createBufferedRange(!0),
                this.createBufferedRange(!1),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthRequired"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwidthRequiredToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthVideo"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwithVideoToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_BandwidthNums"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetBandwidthStatsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_DownloadNums"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetDownloadTimeStatsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_ActiveDownloads"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetActiveDownloadsToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_VideoDownloadProgress"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetVideoDownloadProgressToDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_DroppingFrames"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetPersistentFrameDropsForDisplay(),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  children: [
                    (0, _._)("#DASHPlayerStats_CurrentFPS"),
                    " ",
                    (0, _.jsx)("span", {
                      className: "videoStatsValue",
                      children: _.GetCurrentFPSForDisplay(),
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
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
        class _ extends _.Component {
          m_elSettingsButton;
          m_SettingsButtonPos;
          m_elClickListener = null;
          m_elSettingsPanel = null;
          m_elSubtitlesButton = _.createRef();
          m_elSubtitlesPanel = _.createRef();
          m_SubtitlesButtonPos;
          constructor(_) {
            super(_),
              (this.state = {
                bSettingsOpen: !1,
                bSubtitlesOpen: !1,
              });
          }
          OnVideoControlClick(_) {
            this.setState({
              bSettingsOpen: !this.state.bSettingsOpen,
            }),
              (this.m_SettingsButtonPos = [
                this.m_elSettingsButton.offsetLeft,
                this.m_elSettingsButton.offsetTop,
              ]),
              (this.m_elClickListener =
                _.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnSubtitlesClick(_) {
            this.setState({
              bSubtitlesOpen: !this.state.bSubtitlesOpen,
            }),
              (this.m_SubtitlesButtonPos = [
                this.m_elSubtitlesButton.current?.offsetLeft,
                this.m_elSubtitlesButton.current?.offsetTop,
              ]),
              (this.m_elClickListener =
                _.currentTarget.ownerDocument.defaultView),
              this.m_elClickListener?.addEventListener(
                "mouseup",
                this.OnMouseUp,
                !0,
              );
          }
          OnMouseUp(_) {
            this.m_elClickListener?.removeEventListener(
              "mouseup",
              this.OnMouseUp,
              !0,
            ),
              (0, _._)(this.m_elSettingsPanel, _.target) ||
                this.setState({
                  bSettingsOpen: !1,
                }),
              (0, _._)(this.m_elSubtitlesPanel.current, _.target) ||
                this.setState({
                  bSubtitlesOpen: !1,
                });
          }
          bindSettingsButton(_) {
            this.m_elSettingsButton = _;
          }
          BindSettingsPanel(_) {
            this.m_elSettingsPanel = _;
          }
          OnShowStats(_) {
            this.props.onShowStats(_),
              this.setState({
                bSettingsOpen: !this.state.bSettingsOpen,
              });
          }
          render() {
            let _ = !1,
              _ = !1;
            const { video: _, actions: _ } = this.props;
            let _,
              _ = [],
              _ = 0,
              _ = (0, _.jsx)(
                "div",
                {
                  className: "settingsMenuSeparator",
                },
                "separator",
              );
            const _ = 260,
              _ = 32;
            if (
              (this.state.bSettingsOpen &&
                ((_ = !0),
                (_ = this.props.video.GetVideoRepresentations()),
                (_ = _.map((_) =>
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetVideoRepresentation(_),
                          this.setState({
                            bSettingsOpen: !this.state.bSettingsOpen,
                          });
                      },
                      bChecked: _.selected,
                      children: _.displayName,
                    },
                    _._,
                  ),
                )),
                _.push(_),
                _.push(
                  (0, _.jsxs)(
                    _._,
                    {
                      onClick: this.OnShowStats,
                      children: [
                        (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                        "	",
                      ],
                    },
                    "statsToggle",
                  ),
                ),
                (_ = 0 - (_.length * 21 + _))),
              this.state.bSubtitlesOpen)
            ) {
              (_ = !0),
                (_ = []),
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(null),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      className: "NoSubtitles",
                      bChecked: !1,
                      children: (0, _._)("#Broadcast_None"),
                    },
                    "none",
                  ),
                );
              for (
                let _ = 0;
                _ < this.props.video.ListSubtitles().length;
                _++
              ) {
                const _ = this.props.video.ListSubtitles()[_];
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onClick: () => {
                        this.props.video.SetSubtitles(_.language),
                          this.setState({
                            bSubtitlesOpen: !this.state.bSubtitlesOpen,
                          });
                      },
                      bChecked: _.mode === "showing",
                      children: _.label,
                    },
                    _.language,
                  ),
                );
              }
              _ = 0 - (_ + _);
            }
            const _ =
              this.props.video.BHasPlayer() && this.props.video.BHasTimedText();
            return (0, _.jsxs)("div", {
              className: "STV_BroadcastSettings",
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className:
                      "videoControlButton" + (_ ? " ClosedCaptionsActive" : ""),
                    onClick: this.OnSubtitlesClick,
                    ref: this.m_elSubtitlesButton,
                    children: (0, _.jsx)(_.N8C, {}),
                  }),
                (0, _.jsx)("div", {
                  className:
                    "videoControlButton VideoSettings " +
                    (_ ? " VideoSettingsOpen" : ""),
                  onClick: this.OnVideoControlClick,
                  ref: this.bindSettingsButton,
                  children: (0, _.jsx)(_.wB_, {}),
                }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  _.map((_) =>
                    (0, _.jsx)(
                      "div",
                      {
                        className: "videoControlButton videoControlFitWidth",
                        children: _,
                      },
                      _.key,
                    ),
                  ),
                _ &&
                  (0, _.jsx)("div", {
                    ref: this.BindSettingsPanel,
                    className: "STV_BroadcastSettingsPanel",
                    style: {
                      left: this.m_SettingsButtonPos[0],
                      top: this.m_SettingsButtonPos[1],
                      marginTop: _,
                    },
                    children: (0, _.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: _,
                    }),
                  }),
                _ &&
                  (0, _.jsx)("div", {
                    ref: this.m_elSubtitlesPanel,
                    className: "STV_BroadcastSettingsPanel SubtitlesMenu",
                    style: {
                      maxHeight: _ + "px",
                      left: this.m_SubtitlesButtonPos[0],
                      top: this.m_SubtitlesButtonPos[1],
                      marginTop: _,
                    },
                    children: (0, _.jsx)("div", {
                      className: "STV_BroadcastSettingsMenuItems",
                      children: _,
                    }),
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnVideoControlClick", 1),
          _([_._], _.prototype, "OnSubtitlesClick", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "bindSettingsButton", 1),
          _([_._], _.prototype, "BindSettingsPanel", 1),
          _([_._], _.prototype, "OnShowStats", 1);
        const _ = !0;
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this);
          }
          k_nHideSliderTimeout = 1.5 * 1e3;
          m_bShowSlider = _;
          m_schHideSlider = new _._();
          m_bChildDragging = !1;
          m_bMouseOver = !1;
          componentWillUnmount() {
            this.m_schHideSlider.Cancel();
          }
          ToggleMute() {
            let _ = this.props.video,
              _ = _.IsMuted();
            _.SetMute(!_), _.GetVolume() < 0.01 && _.SetVolume(0.5);
          }
          OnMouseEnter(_) {
            (this.m_bShowSlider = !0),
              (this.m_bMouseOver = !0),
              this.m_schHideSlider.Cancel();
          }
          OnMouseLeave(_) {
            (this.m_bMouseOver = !1), this.ScheduleHide();
          }
          OnChildDrag(_) {
            (this.m_bChildDragging = _), this.ScheduleHide();
          }
          ScheduleHide() {
            this.m_bMouseOver ||
              this.m_bChildDragging ||
              this.m_schHideSlider.Schedule(
                this.k_nHideSliderTimeout,
                () => (this.m_bShowSlider = _),
              );
          }
          render() {
            let _ = this.props.video,
              _ = _.IsMuted(),
              _ = _.GetVolume() * 100,
              _ = "videoControlButton";
            _ > 65
              ? (_ += " HighestVolume")
              : _ > 45
                ? (_ += " HighVolume")
                : _ < 46 && _ > 24
                  ? (_ += " MedVolume")
                  : _ < 25 && (_ += " LowVolume");
            let _ = "BroadcastVolumeControl";
            return (
              this.m_bShowSlider && (_ += " ShowVolumeSlider"),
              _ && (_ += " muted"),
              (0, _.jsx)("div", {
                className: _,
                onMouseEnter: this.OnMouseEnter,
                onMouseLeave: this.OnMouseLeave,
                children: (0, _.jsxs)("div", {
                  className: "BroadcastVolumeControl_FixedLayout",
                  children: [
                    (0, _.jsx)("div", {
                      className: _,
                      onClick: this.ToggleMute,
                      children: (0, _.jsx)(_.fSs, {}),
                    }),
                    (0, _.jsx)(_, {
                      video: _,
                      onDrag: this.OnChildDrag,
                    }),
                  ],
                }),
              })
            );
          }
        };
        _([_._], _.prototype, "m_bShowSlider", 2),
          _([_._], _.prototype, "ToggleMute", 1),
          _([_._], _.prototype, "OnMouseEnter", 1),
          _([_._], _.prototype, "OnMouseLeave", 1),
          _([_._], _.prototype, "OnChildDrag", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this);
          }
          m_elSlider = null;
          m_nVolumeStartOfDrag = 0;
          OnMouseDown(_) {
            let _ = _.currentTarget;
            (this.m_elSlider = _),
              (this.m_nVolumeStartOfDrag = this.props.video.GetVolume()),
              this.SetVolumeWithCoord(_, _.clientX),
              _.ownerDocument.defaultView?.addEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              _.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.props.onDrag(!0);
          }
          OnMouseMove(_) {
            this.m_elSlider &&
              this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
          }
          OnMouseUp(_) {
            if (!this.m_elSlider) return;
            this.SetVolumeWithCoord(this.m_elSlider, _.clientX);
            let _ = this.props.video;
            _.IsMuted() && _.SetVolume(this.m_nVolumeStartOfDrag),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mousemove",
                this.OnMouseMove,
              ),
              this.m_elSlider.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              (this.m_nVolumeStartOfDrag = 0),
              (this.m_elSlider = null),
              this.props.onDrag(!1);
          }
          SetVolumeWithCoord(_, _) {
            let _ = _.getBoundingClientRect(),
              _ = _._(_, _.left, _.right, 0, 1),
              _ = _._(_, 0, 1),
              _ = this.props.video;
            _.SetMute(_ < 0.01), _.SetVolume(_);
          }
          render() {
            let _ = this.props.video,
              _ = _.GetVolume() * 100;
            _.IsMuted() && (_ = 0);
            let _ = {
                left: `${_}%`,
              },
              _ = {
                width: `${_}%`,
              };
            return (0, _.jsxs)("div", {
              className: "BroadcastVolumeSlider",
              onMouseDown: this.OnMouseDown,
              children: [
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Track",
                }),
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Fill",
                  style: _,
                }),
                (0, _.jsx)("div", {
                  className: "BroadcastVolumeSlider_Thumb",
                  style: _,
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "SetVolumeWithCoord", 1),
          (_ = _([_._], _));
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
        const _ = 3200,
          _ = 15;
        let _ = class extends _.Component {
          m_schHideControls = new _._();
          m_schUnmountControls = new _._();
          m_elVideo = null;
          m_elBroadcastPlayer = null;
          m_bMouseDown = !1;
          m_elMouseDown = null;
          m_listeners = new _._();
          constructor(_) {
            super(_),
              (this.state = {
                bMountControls: !1,
                bControlsVisible: !1,
                bShowStats: !1,
                video: null,
                nResizedHeight: null,
                bFullscreen: !1,
              });
          }
          StopVideo() {
            let _ = this.state.video;
            _ &&
              (_._.StopVideo(_),
              this.setState({
                video: null,
              }),
              this.props.fnSetBroadcastVideo?.(null));
          }
          IsMuted() {
            let _ = this.state.video;
            return !_ || _.IsMuted();
          }
          StopPlaybackTillUserInput() {
            let _ = this.state.video;
            _ && _.StopPlaybackTillUserInput();
          }
          componentDidUpdate(_, _) {
            !_.bMountControls && this.state.bMountControls
              ? setTimeout(() => {
                  this.setState((_) => ({
                    bControlsVisible: _.bMountControls,
                  }));
                }, 15)
              : _.bControlsVisible &&
                !this.state.bControlsVisible &&
                this.state.video &&
                !this.state.video.IsPaused() &&
                this.m_schUnmountControls.Schedule(2e3, this.UmountControls),
              this.props.steamIDBroadcast !== _.steamIDBroadcast &&
                this.BindVideoRef(this.m_elVideo);
            const _ = this.props.nAppIDVOD;
            _ &&
              (_.strInitialCapsuleImageUrl === void 0 || _.nAppIDVOD != _) &&
              _._.Get()
                .QueueAppRequest(_, {
                  include_assets: !0,
                  include_trailers: !0,
                })
                .then(() => {
                  const _ =
                    _._.Get().GetApp(_)?.GetAssets()?.GetMainCapsuleURL() || "";
                  this.setState({
                    strInitialCapsuleImageUrl: _,
                  });
                });
          }
          componentWillUnmount() {
            this.m_listeners.Unregister(),
              this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.StopVideo();
          }
          BindBroadcastPlayerRef(_) {
            this.m_listeners.Unregister(),
              (this.m_elBroadcastPlayer = _),
              _ &&
                (this.m_listeners.AddEventListener(
                  _,
                  "fullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "mozfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "webkitfullscreenchange",
                  this.OnFullscreenChange,
                ),
                this.m_listeners.AddEventListener(
                  _,
                  "msfullscreenchange",
                  this.OnFullscreenChange,
                ));
          }
          BindVideoRef(_) {
            let _ = null;
            this.StopVideo(),
              this.props.steamIDBroadcast
                ? _ &&
                  (_ = _._.CreateBroadcastVideo(
                    _,
                    this.props.steamIDBroadcast,
                    this.props.watchLocation,
                    !!this.props.bWebRTC,
                  ))
                : this.props.broadcastClipID
                  ? _ &&
                    (_ = _._.CreateClipVideo(
                      _,
                      this.props.broadcastClipID,
                      this.props.watchLocation,
                    ))
                  : this.props.nAppIDVOD &&
                    _ &&
                    ((_ = _._.CreateVODVideo(
                      _,
                      this.props.nAppIDVOD,
                      this.props.watchLocation,
                    )),
                    this.props.fnOnVideoEnd &&
                      _.SetOnVideoCallback(this.props.fnOnVideoEnd)),
              _ &&
                (this.props.bStartMuted && _.SetMute(!0),
                this.props.bStartWithSubtitles && _.SetStartWithSubtitles(!0),
                this.props.bStartPaused
                  ? _.StopPlaybackTillUserInput()
                  : _.Play()),
              this.setState({
                video: _,
              }),
              this.props.fnSetBroadcastVideo?.(_),
              (this.m_elVideo = _);
          }
          OnMouseDown(_) {
            (this.m_bMouseDown = !0),
              (this.m_elMouseDown = _.currentTarget),
              this.m_elMouseDown.ownerDocument.defaultView?.addEventListener(
                "mouseup",
                this.OnMouseUp,
              );
          }
          OnMouseUp(_) {
            (this.m_bMouseDown = !1),
              this.m_elMouseDown?.ownerDocument.defaultView?.removeEventListener(
                "mouseup",
                this.OnMouseUp,
              ),
              this.m_schHideControls.Schedule(_, this.HideControls);
          }
          OnMouseMove(_) {
            this.m_schHideControls.Cancel(),
              this.m_schUnmountControls.Cancel(),
              this.state.bMountControls
                ? this.state.bControlsVisible ||
                  this.setState({
                    bControlsVisible: !0,
                  })
                : this.setState({
                    bMountControls: !0,
                  }),
              this.m_schHideControls.Schedule(_, this.HideControls);
          }
          OnMouseLeave(_) {
            this.HideControls();
          }
          HideControls() {
            this.state.bControlsVisible &&
              !this.m_bMouseDown &&
              this.setState({
                bControlsVisible: !1,
              });
          }
          UmountControls() {
            this.setState((_) =>
              !_.bControlsVisible && _.bMountControls
                ? {
                    bMountControls: !1,
                  }
                : null,
            );
          }
          ShowStatsView() {
            let _ = this.state.video;
            if (!_) return;
            this.state.bShowStats ||
              (this.setState({
                bShowStats: !0,
              }),
              _.SetStatsViewIsVisible(!0));
          }
          OnContextMenu(_) {
            this.state.bFullscreen ||
              ((0, _._)(
                (0, _.jsx)(_._, {
                  children: this.GetContextMenuItems(),
                }),
                _,
              ),
              _.preventDefault());
          }
          ToggleStatsView(_) {
            let _ = !this.state.bShowStats;
            this.setState({
              bShowStats: _,
            });
            let _ = this.state.video;
            _ && _.SetStatsViewIsVisible(_);
          }
          ShowStorePage(_) {
            let _ = this.state.video;
            if (!_ || !this.props.onOpenLinkInNewWindow) return;
            let _ = _.GetBroadcastInfo();
            if (!_) return;
            let _ = (0, _._)(`${_._.STORE_BASE_URL}app/${_.m_strAppId}`);
            this.props.onOpenLinkInNewWindow(_, _), _.stopPropagation();
          }
          GetContextMenuItems() {
            let _ = [],
              _ = this.state.video;
            if (!_) return _;
            let _ = _.GetBroadcastInfo();
            return (
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    bChecked: this.state.bShowStats,
                    onSelected: (_) => {
                      this.ToggleStatsView(_);
                    },
                    children: (0, _._)("#Broadcast_VideoContext_ToggleStats"),
                  },
                  "togglestats",
                ),
              ),
              _ &&
                _.m_strAppId != "0" &&
                Number.parseInt(_.m_strAppId) != _._ &&
                _.push(
                  (0, _.jsx)(
                    _._,
                    {
                      onSelected: (_) => {
                        this.ShowStorePage(_);
                      },
                      children: (0, _._)("#Broadcast_VideoContext_OpenStore"),
                    },
                    "visitstore",
                  ),
                ),
              _
            );
          }
          CloseStats() {
            let _ = this.state.video;
            _ &&
              this.state.bShowStats &&
              (this.setState({
                bShowStats: !1,
              }),
              _.SetStatsViewIsVisible(!1));
          }
          OnToggleFullscreen() {
            this.m_elBroadcastPlayer &&
              ((0, _._)(this.m_elBroadcastPlayer)
                ? (0, _._)(this.m_elBroadcastPlayer)
                : (0, _._)(this.m_elBroadcastPlayer, this.m_elVideo ?? void 0));
          }
          OnFullscreenChange(_) {
            if (!this.m_elBroadcastPlayer) return;
            let _ = (0, _._)(this.m_elBroadcastPlayer);
            this.setState({
              bFullscreen: _,
            });
          }
          BHideVideoControls() {
            let _ = this.state.video;
            return !_ || _.GetUserInputNeeded()
              ? !0
              : _._.GetBroadcastState(_) == _._.Error;
          }
          render() {
            const _ = this.state.video,
              _ = _ && _.IsPaused(),
              _ = _ && _.BHasDASHStats() && this.state.bShowStats,
              _ = !!(_ && _.IsReplay()),
              _ = this.state.bMountControls,
              _ = this.state.bControlsVisible || _,
              _ = !!(_ && _.GetUserInputNeeded()),
              _ = _?.GetDASHPlayerStats(),
              _ =
                _?.IsBroadcastVOD() &&
                _ &&
                this.state.strInitialCapsuleImageUrl;
            let _ = "videoContainer";
            _ || (_ += " HidePlayerControls"),
              _ && (_ += " VideoPaused"),
              this.state.bFullscreen && (_ += " fullscreenVideo"),
              this.props.classes && (_ += " " + this.props.classes);
            let _ = [];
            !this.state.bFullscreen &&
              this.props.actions &&
              (_ = _.concat(this.props.actions)),
              !this.state.bFullscreen &&
                this.props.onTheaterMode &&
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      onClick: this.props.onTheaterMode,
                      title: (0, _._)("#Broadcast_View_Theater"),
                      className: "BroadcastTheaterToggle",
                    },
                    "ChatPosToggle ChatTheaterToggle",
                  ),
                ),
              _.push(
                (0, _.jsx)(
                  "div",
                  {
                    title: (0, _._)("#Broadcast_View_Fullscreen"),
                    onClick: this.OnToggleFullscreen,
                    className: "BroadcastFullscreenToggle",
                  },
                  "FullscreenToggle",
                ),
              );
            const _ = _ && !this.BHideVideoControls(),
              _ = _ && !this.state.bFullscreen,
              _ =
                this.props.fnRenderBroadcastContext &&
                this.props.fnRenderBroadcastContext();
            return (0, _.jsxs)("div", {
              ref: this.BindBroadcastPlayerRef,
              className: _,
              onMouseMove: this.OnMouseMove,
              onClick: this.OnMouseMove,
              onMouseLeave: this.OnMouseLeave,
              onContextMenu: this.OnContextMenu,
              onMouseDown: this.OnMouseDown,
              children: [
                _ &&
                  (0, _.jsx)("div", {
                    className: _().BroadcastContext,
                    children: _,
                  }),
                _ && (0, _.jsx)(_, {}),
                this.props.showVideoBackgroundBlur &&
                  this.m_elVideo &&
                  (0, _.jsx)(_, {
                    className: "videoBlur",
                    elementRef: this.m_elVideo,
                    updateRate: 33,
                    width: 320,
                    height: 180,
                    reductionFactor: 10,
                    blurAmount: 5,
                  }),
                (0, _.jsx)("video", {
                  className: "videoSrc",
                  ref: this.BindVideoRef,
                  muted: this.props.bMuted ?? !0,
                  autoPlay: !0,
                  playsInline: !0,
                  controls: !1,
                  onVolumeChange: this.props.fnVolumeChanged,
                  onClick: this.props.fnVideoClick,
                }),
                this.props.linkRegions
                  ? (0, _.jsx)(_, {
                      linkRegions: this.props.linkRegions,
                      editMode: !!this.props.editMode,
                      onSaveLinkRegions: this.props.onSaveLinkRegions,
                    })
                  : null,
                this.props.linkElement,
                _ &&
                  (0, _.jsx)("img", {
                    loading: "lazy",
                    className: (0, _._)(
                      _().BroadcastPlaceholderImg,
                      "BroadcastPlaceholderImg",
                    ),
                    src: this.state.strInitialCapsuleImageUrl,
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    video: _,
                    actions: _,
                    onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                    onShowStats: this.ToggleStatsView,
                    bIncludeClipEditor: !!this.props.bIncludeClipEditor,
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    onClick: this.props.onRequestClose,
                  }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    stats: _,
                    closeStats: this.CloseStats,
                  }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  _ &&
                  (0, _.jsx)(_, {
                    video: _,
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "BindBroadcastPlayerRef", 1),
          _([_._], _.prototype, "BindVideoRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseLeave", 1),
          _([_._], _.prototype, "HideControls", 1),
          _([_._], _.prototype, "UmountControls", 1),
          _([_._], _.prototype, "ShowStatsView", 1),
          _([_._], _.prototype, "OnContextMenu", 1),
          _([_._], _.prototype, "ToggleStatsView", 1),
          _([_._], _.prototype, "ShowStorePage", 1),
          _([_._], _.prototype, "CloseStats", 1),
          _([_._], _.prototype, "OnToggleFullscreen", 1),
          _([_._], _.prototype, "OnFullscreenChange", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          render() {
            const { video: _ } = this.props;
            if (!_) return null;
            let _ = _.has_segments;
            return (0, _.jsxs)("div", {
              className: "videoControls",
              children: [
                (0, _.jsx)(_, {
                  steamID: this.props.video.GetBroadcastSteamID(),
                  bHideThumbnail: !0,
                  bVerticalBroadcastChat: !0,
                  onOpenLinkInNewWindow: this.props.onOpenLinkInNewWindow,
                }),
                (0, _.jsxs)("div", {
                  className: "videoControlsBottom" + (_ ? "" : " noSegments"),
                  children: [
                    (0, _.jsx)(_, {
                      video: _,
                      bIncludeClipEditor: this.props.bIncludeClipEditor,
                    }),
                    (0, _.jsxs)("div", {
                      className: "STV_BroadcastController",
                      children: [
                        (0, _.jsx)("div", {
                          className: "videoControlsButtons LeftSpacer",
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                        }),
                        (0, _.jsx)(_, {
                          video: _,
                          actions: this.props.actions,
                          onShowStats: this.props.onShowStats,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _ = _([_._], _);
        class _ extends _.PureComponent {
          render() {
            return this.props.onClick
              ? (0, _.jsx)("div", {
                  className: "STV_BroadcastClose",
                  onClick: this.props.onClick,
                  children: (0, _.jsx)(_.sED, {}),
                })
              : null;
          }
        }
        class _ extends _.Component {
          OnJumpBackward() {
            this.props.video.JumpTime(-_);
          }
          OnJumpForward() {
            this.props.video.JumpTime(_);
          }
          render() {
            let _ = this.props.video,
              _ = _.CanSeek();
            return (0, _.jsxs)("div", {
              className: "videoControlsButtons PlayControls",
              children: [
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className:
                      "videoControlButton videoControlJump controlFlip",
                    onClick: this.OnJumpBackward,
                    children: [
                      (0, _.jsx)(_.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !0,
                      }),
                      (0, _.jsx)("div", {
                        className: "jumpAheadValue",
                        children: _,
                      }),
                    ],
                  }),
                (0, _.jsx)(_, {
                  video: _,
                }),
                _ &&
                  (0, _.jsxs)("div", {
                    className: "videoControlButton videoControlJump",
                    onClick: this.OnJumpForward,
                    children: [
                      (0, _.jsx)(_.tID, {
                        bHidePostArrow: !0,
                        bHidePreArrow: !0,
                        bShowJumpAheadBox: !0,
                        bFlipHorizontal: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: "jumpAheadValue",
                        children: _,
                      }),
                    ],
                  }),
                _ &&
                  (0, _.jsx)(_, {
                    video: _,
                  }),
              ],
            });
          }
        }
        _([_._], _.prototype, "OnJumpBackward", 1),
          _([_._], _.prototype, "OnJumpForward", 1);
        const _ = (0, _._)((_) => {
          if (_.video.IsBroadcastClip() || _.video.IsBroadcastVOD())
            return null;
          const _ = (_) => {
            _.video.JumpToLiveEdge();
          };
          let _ = _.video.IsOnLiveEdge();
          return (0, _.jsx)("div", {
            className: "videoControlsButtons GoLive",
            children: (0, _.jsxs)("div", {
              className:
                "videoControlButton videoControlGoLive" +
                (_ ? " isLiveEdge" : ""),
              onClick: _ ? void 0 : _,
              children: [
                (0, _.jsx)(_.tID, {
                  bHidePreArrow: !0,
                  bHidePostArrow: !0,
                  bFlipHorizontal: !1,
                }),
                (0, _.jsx)("div", {
                  className: "jumpGoLive",
                  children: (0, _._)(
                    _
                      ? "#DASHPlayerControls_IsLive"
                      : "#DASHPlayerControls_GoLive",
                  ),
                }),
              ],
            }),
          });
        });
        let _ = class extends _.Component {
          OnTogglePlayPause() {
            this.props.video.TogglePlayPause();
          }
          render() {
            let _ = this.props.video.IsPaused();
            return (0, _.jsx)("div", {
              className: "videoControlButton buttonPlayPause",
              onClick: this.OnTogglePlayPause,
              children: _ ? (0, _.jsx)(_.jGG, {}) : (0, _.jsx)(_.vRz, {}),
            });
          }
        };
        _([_._], _.prototype, "OnTogglePlayPause", 1), (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this), (this.video = _.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_previous_marker() {
            return this.GetPreviousMarkerTime() !== void 0;
          }
          GetPreviousMarkerTime() {
            const _ = this.video;
            if (!_?.has_markers) return;
            let _ = _.GetTimelineMarkers(),
              _ = _.GetPlaybackTime();
            for (let _ = _.length - 1; _ >= 0; _--)
              if (!(_[_].nTime >= _)) return _[_].nTime;
          }
          OnJumpToPreviousMarkerClicked(_) {
            let _ = this.GetPreviousMarkerTime();
            _ !== void 0 && this.props.video.Seek(_ - 0.2);
          }
          render() {
            let _ = this.props.video.BHasMarkersOrSegments();
            return (0, _.jsx)("div", {
              className:
                "videoControlButton jumpToMarker controlFlip" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_previous_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToPreviousMarkerClicked,
              children: (0, _.jsx)(_.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !0,
              }),
            });
          }
        };
        _([_._], _.prototype, "video", 2),
          _([_._], _.prototype, "has_previous_marker", 1),
          _([_._], _.prototype, "OnJumpToPreviousMarkerClicked", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          constructor(_) {
            super(_), (0, _._)(this), (this.video = _.video);
          }
          componentDidUpdate() {
            this.video = this.props.video;
          }
          video = void 0;
          get has_next_marker() {
            return this.GetNextMarkerTime() !== void 0;
          }
          GetNextMarkerTime() {
            const _ = this.video;
            if (!_?.has_markers) return;
            let _ = _.GetTimelineMarkers(),
              _ = _.GetPlaybackTime();
            for (let _ = 0; _ < _.length; _++)
              if (!(_[_].nTime <= _)) return _[_].nTime;
          }
          OnJumpToNextMarkerClicked(_) {
            let _ = this.GetNextMarkerTime();
            _ !== void 0 && this.props.video.Seek(_);
          }
          render() {
            let _ = this.props.video.BHasMarkersOrSegments();
            return (0, _.jsx)("div", {
              className:
                "videoControlButton jumpToMarker" +
                (_ ? "" : " noMarkersOrSegments") +
                (this.has_next_marker ? "" : " noMarkersInDirection"),
              onClick: this.OnJumpToNextMarkerClicked,
              children: (0, _.jsx)(_.tID, {
                bHidePostArrow: !0,
                bFlipHorizontal: !1,
              }),
            });
          }
        };
        _([_._], _.prototype, "video", 2),
          _([_._], _.prototype, "has_next_marker", 1),
          _([_._], _.prototype, "OnJumpToNextMarkerClicked", 1),
          (_ = _([_._], _));
        const _ = (_) => {
          let _ = () => _.onMouseEnter(_.pos);
          return (0, _.jsx)("div", {
            className: "timelineMarker",
            title: _.label,
            style: {
              left: _.pos + "%",
            },
            onMouseEnter: _,
            onMouseLeave: _.onMouseLeave,
            onMouseDown: _.onMouseDown ? _.onMouseDown : void 0,
            children: (0, _.jsx)("div", {
              className: "timelineMarkerIcon",
              children: (0, _.jsx)(_.Dp6, {}),
            }),
          });
        };
        function _(_) {
          let _ = _.startPos,
            _ = _.endPos,
            _ = "",
            _ = 1;
          return (
            _ < 0 && ((_ = (_ - _) / 10), (_ = 0), (_ = " hideFront")),
            (0, _.jsxs)("div", {
              className: "STV_timelineSegment" + _,
              style: {
                left: _ + "%",
                width: _ - _ + "%",
                opacity: _,
              },
              onClick: _.onClick,
              children: [
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentFrontFill",
                  style: {
                    borderColor: "rgb(" + _.color + ")",
                  },
                }),
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentLabel",
                  style: {
                    color: "rgb(" + _.color + ")",
                  },
                  children: _.label,
                }),
                (0, _.jsx)("div", {
                  className: "STV_timelineSegmentBackFill",
                  style: {
                    borderColor: "rgb(" + _.color + ")",
                  },
                }),
              ],
            })
          );
        }
        let _ = class extends _.Component {
          m_elSlider = _.createRef();
          m_rectSlider = void 0;
          constructor(_) {
            super(_),
              (this.state = {
                nGrabberMouseDownTime: 0,
                bGrabberMouseDown: !1,
                nHoverValue: void 0,
                hoverX: 0,
                bStartMouseDown: !1,
                bEndMouseDown: !1,
                thumbnailURL: "",
              });
          }
          OnMouseDown(_, _) {
            const _ = this.m_elSlider.current;
            if (_) {
              _.persist(), (this.m_rectSlider = _.getBoundingClientRect());
              let _ = {};
              _ === "start"
                ? ((_ = {
                    bStartMouseDown: !0,
                  }),
                  _.stopPropagation())
                : _ === "end"
                  ? ((_ = {
                      bEndMouseDown: !0,
                    }),
                    _.stopPropagation())
                  : (_ = {
                      bGrabberMouseDown: !0,
                    }),
                this.setState(_, () => this.AdjustSliderForClientX(_.clientX)),
                _.ownerDocument.defaultView?.addEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                _.ownerDocument.defaultView?.addEventListener(
                  "mouseup",
                  this.OnMouseUp,
                );
            }
          }
          OnMouseMove(_) {
            this.AdjustSliderForClientX(_.clientX);
          }
          OnMouseUp(_) {
            this.state.bStartMouseDown
              ? this.setState({
                  bStartMouseDown: !1,
                })
              : this.state.bEndMouseDown
                ? this.setState({
                    bEndMouseDown: !1,
                  })
                : (this.props.video.Seek(this.state.nGrabberMouseDownTime),
                  this.setState({
                    bGrabberMouseDown: !1,
                    nGrabberMouseDownTime: 0,
                  })),
              this.m_elSlider.current &&
                (this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mousemove",
                  this.OnMouseMove,
                ),
                this.m_elSlider.current.ownerDocument.defaultView?.removeEventListener(
                  "mouseup",
                  this.OnMouseUp,
                ));
          }
          OnKeyDown(_) {
            _.keyCode == _._
              ? (this.props.video.JumpTime(-1 * _), _.preventDefault())
              : _.keyCode == _._ &&
                (this.props.video.JumpTime(1 * _), _.preventDefault());
          }
          AdjustSliderForClientX(_) {
            const _ = this.m_rectSlider;
            if (!_) return;
            let _ = this.props.video,
              _ = _.GetTimelineStartPos(),
              _ = _.GetTimelineStartPos() + _.GetTimelineDuration(),
              _ = _.GetTimeAtMousePosition(_, _, _, _);
            const _ = 5;
            if (this.state.bStartMouseDown) {
              const _ = _._(_, _, _.m_editorEndTime - _);
              _.m_editorStartTime = _;
            } else if (this.state.bEndMouseDown) {
              const _ = _._(_, _.m_editorStartTime + _, _);
              _.m_editorEndTime = _;
            } else
              _ != this.state.nGrabberMouseDownTime &&
                this.setState({
                  nGrabberMouseDownTime: _,
                });
          }
          OnMouseHoverMove(_) {
            this.AdjustHoverForClientX(_.clientX);
          }
          OnMouseHoverLeave(_) {
            this.setState({
              hoverX: 0,
            });
          }
          AdjustHoverForClientX(_) {
            let _ = this.props.video,
              _ = _.GetTimelineStartPos(),
              _ = _.GetTimelineStartPos() + _.GetTimelineDuration();
            this.m_rectSlider =
              this.m_elSlider.current?.getBoundingClientRect();
            let _ =
              this.m_rectSlider &&
              _.GetTimeAtMousePosition(_, this.m_rectSlider, _, _);
          }
          OnSegmentClick(_) {
            this.props.video.Seek(_);
          }
          OnMarkerMouseEnter(_) {
            this.setState({
              nHoverValue: _,
            });
          }
          OnMarkerMouseLeave() {
            this.setState({
              nHoverValue: void 0,
            });
          }
          render() {
            let _ = this.props.video,
              _ = this.state.bGrabberMouseDown,
              _ = _.GetPercentOffsetFromTime(
                this.state.nGrabberMouseDownTime,
                _._.Timeline,
              ),
              _ = _.GetPercentOffsetFromTime(_.GetPlaybackTime(), _._.Timeline),
              _ = _.GetPercentOffsetFromTime(
                _.GetVideoAvailableStartTime(),
                _._.Timeline,
              );
            _ < 0.05 && (_ = 0);
            let _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = _._(_, 0, 100).toFixed(1) + "%",
              _ = {},
              _ = {},
              _ = {},
              _ = {};
            _
              ? ((_.left = _), (_.width = _), (_.width = _), (_.width = _))
              : ((_.left = _), (_.width = _), (_.width = _));
            let _ = (0, _._)(_.GetPlaybackTime()),
              _ = (0, _._)(this.state.nHoverValue ?? 0),
              _ = "STV_timelineContainer";
            this.state.bGrabberMouseDown && (_ += " grabberDown"),
              _.IsTimelineMapActive() && (_ += " minimapActive");
            let _ = "";
            (_ = _ ? _ : _),
              _ > 100
                ? (_ = " grabberOffScreenRight grabberOffscreen")
                : _ < 0 && (_ = " grabberOffScreenLeft grabberOffscreen");
            let _ = [];
            _.GetTimelineMarkers().forEach((_, _) => {
              let _ = _.GetPercentOffsetFromTime(_.nTime, _._.Timeline);
              _ < 0 ||
                _ > 100 ||
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      pos: _,
                      label: _.strTemplateName,
                      onMouseEnter: this.OnMarkerMouseEnter,
                      onMouseLeave: this.OnMarkerMouseLeave,
                    },
                    _,
                  ),
                );
            });
            let _ = [];
            _.GetTimelineSegments().forEach((_, _) => {
              let _ = _.GetPercentOffsetFromTime(_.nTimeStart, _._.Timeline);
              if (_ > 100) return;
              let _ = _.GetPercentOffsetFromTime(_.nTimeEnd, _._.Timeline);
              _ < 0 ||
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      startPos: _,
                      endPos: _,
                      label: _.strTemplateName,
                      color: _.color,
                      onClick: (_) => this.OnSegmentClick(_.nTimeStart),
                    },
                    _,
                  ),
                );
            });
            const _ = _.GetPercentOffsetFromTime(
                _.m_editorStartTime,
                _._.Timeline,
              ),
              _ = _.GetPercentOffsetFromTime(_.m_editorEndTime, _._.Timeline),
              _ = this.props.bIncludeClipEditor
                ? [
                    (0, _.jsx)(
                      _,
                      {
                        pos: _,
                        label: (0, _._)("#DASHPlayerControls_Start"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (_) => this.OnMouseDown(_, "start"),
                      },
                      "start",
                    ),
                    (0, _.jsx)(
                      _,
                      {
                        pos: _,
                        label: (0, _._)("#DASHPlayerControls_End"),
                        onMouseEnter: this.OnMarkerMouseEnter,
                        onMouseLeave: this.OnMarkerMouseLeave,
                        onMouseDown: (_) => this.OnMouseDown(_, "end"),
                      },
                      "end",
                    ),
                  ]
                : [];
            return (0, _.jsx)("div", {
              className: "videoTimelineMain",
              tabIndex: 0,
              onKeyDown: this.OnKeyDown,
              children: (0, _.jsxs)("div", {
                className: _,
                children: [
                  (0, _.jsx)("div", {
                    className: "DialogLabel",
                    children: _,
                  }),
                  (0, _.jsx)("div", {
                    className: "STV_timelineSegmentsContainer",
                    children: _,
                  }),
                  (0, _.jsx)("div", {
                    onMouseDown: this.OnMouseDown,
                    onMouseMove: this.OnMouseHoverMove,
                    onMouseLeave: this.OnMouseHoverLeave,
                    ref: this.m_elSlider,
                    children: (0, _.jsxs)("div", {
                      className: "VideoTimelineSlider",
                      children: [
                        (0, _.jsx)("div", {
                          className: "STV_timelineValue",
                          style: _,
                        }),
                        (0, _.jsx)("div", {
                          className: "STV_timelineGhostValue",
                          style: _,
                        }),
                        (0, _.jsx)("div", {
                          className: "STV_timelineNoVideo",
                          style: _,
                        }),
                        _,
                        _,
                        !!this.state.hoverX &&
                          (0, _.jsx)(
                            "div",
                            {
                              style: {
                                position: "absolute",
                                left: this.state.hoverX - 75,
                                bottom: "30px",
                              },
                              children: (0, _.jsxs)("div", {
                                style: {
                                  position: "relative",
                                  display: "flex",
                                  justifyContent: "center",
                                },
                                children: [
                                  this.state.thumbnailURL &&
                                    (0, _.jsx)("img", {
                                      style: {
                                        width: "150px",
                                      },
                                      src: this.state.thumbnailURL,
                                    }),
                                  (0, _.jsx)("span", {
                                    className: "STV_timelineGrabberValue",
                                    style: {
                                      position: "absolute",
                                      bottom: "4px",
                                    },
                                    children: _,
                                  }),
                                ],
                              }),
                            },
                            "grabbertime",
                          ),
                        (0, _.jsx)("div", {
                          className: "STV_timelineGrabber_Wrapper",
                          style: _,
                          children: (0, _.jsx)("div", {
                            className: "STV_timelineGrabber" + _,
                            children: (0, _.jsx)("div", {
                              className: "STV_timelineGrabberArrow",
                              children: (0, _.jsx)(_.apU, {}),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }
        };
        _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "OnKeyDown", 1),
          _([_._], _.prototype, "OnMouseHoverMove", 1),
          _([_._], _.prototype, "OnMouseHoverLeave", 1),
          _([_._], _.prototype, "AdjustHoverForClientX", 1),
          _([_._], _.prototype, "OnSegmentClick", 1),
          _([_._], _.prototype, "OnMarkerMouseEnter", 1),
          _([_._], _.prototype, "OnMarkerMouseLeave", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          state = {
            info: null,
          };
          static getDerivedStateFromProps(_, _) {
            return (!_.info || _.info.m_steamIDBroadcast !== _.steamID) &&
              (_.info && (_._.StopInfo(_.info), (_.info = null)), _.steamID)
              ? {
                  info: _._.StartInfo(_.steamID),
                }
              : null;
          }
          componentWillUnmount() {
            this.state.info && _._.StopInfo(this.state.info);
          }
          RenderStreamSwitcher() {
            const _ = this.props.steamID,
              _ = this.props.onLocalStreamChange;
            return _ && _._.stream[_]
              ? (0, _.jsx)(_, {
                  value: _,
                  options: _._.stream,
                  onChange: _,
                })
              : null;
          }
          render() {
            let { info: _ } = this.state;
            if (!_) return null;
            let _ = "";
            _.m_nViewerCount && (_ = (0, _._)(_.m_nViewerCount));
            let _ =
                _._.bValid && _._.stream && _._.stream[_.m_steamIDBroadcast],
              _ =
                !this.props.bHideThumbnail &&
                this.props.bVerticalBroadcastChat &&
                (parseInt(_.m_strAppId) > 0 || _);
            const _ =
              !this.props.bHideThumbnail &&
              this.props.bVerticalBroadcastChat &&
              _ &&
              _._.gidEvent;
            return (0, _.jsxs)("div", {
              className: "BroadcastDetails",
              children: [
                !this.props.bHideThumbnail &&
                  (0, _.jsx)(_, {
                    className: "broadcastDetailsThumbBlur",
                    src: _.m_strThumbnailUrl,
                    draggable: !1,
                    duration: 2500,
                  }),
                (0, _.jsxs)("div", {
                  className: "BroadcastDetailsHeader",
                  children: [
                    _ &&
                      _.m_strAppTitle &&
                      (0, _.jsxs)("div", {
                        className: "displayColumn",
                        children: [
                          (0, _.jsxs)("div", {
                            className: "Info",
                            children: [
                              (0, _.jsx)("span", {
                                className: "AppTitle",
                                children: _.m_strAppTitle,
                              }),
                              _.m_strTitle &&
                                (0, _.jsxs)("span", {
                                  className: "BroadcastTitle",
                                  children: ["\xA0- ", _.m_strTitle],
                                }),
                              this.props.onLocalStreamChange &&
                                this.RenderStreamSwitcher(),
                            ],
                          }),
                          _ &&
                            (0, _.jsxs)("div", {
                              className: "BroadcastDetailsHeader_ViewerCount",
                              children: [
                                (0, _.jsx)(_.y_e, {}),
                                (0, _._)("#Broadcast_ViewerCount", _),
                              ],
                            }),
                        ],
                      }),
                    _ &&
                      this.props.onOpenLinkInNewWindow &&
                      (0, _.jsx)("div", {
                        className: "Actions",
                        children: (0, _.jsx)("div", {
                          onClick: (_) =>
                            this.props.onOpenLinkInNewWindow?.(_, _._.link),
                          className: "BroadcastLink",
                          children: _._.linkName,
                        }),
                      }),
                  ],
                }),
                _ &&
                  (0, _.jsx)(_._, {
                    gidEvent: _._.gidEvent,
                  }),
                _ &&
                  (0, _.jsx)(_._, {
                    _:
                      _._.bValid &&
                      _._.stream &&
                      _._.stream[_.m_steamIDBroadcast]
                        ? _._.appID
                        : parseInt(_.m_strAppId),
                    type: "game",
                    bPreferAssetWithoutOverride: !1,
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        class _ extends _.Component {
          showContextMenu(_) {
            const { options: _, value: _, onChange: _ } = this.props,
              _ = Object.keys(_).map((_) =>
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: () => _(_),
                    bChecked: _ === _,
                    children: (0, _._)(_[_]),
                  },
                  _,
                ),
              );
            (0, _._)(
              (0, _.jsx)(_._, {
                children: _,
              }),
              _,
            );
          }
          render() {
            const { value: _, options: _ } = this.props,
              _ = _[_];
            return (0, _.jsxs)("div", {
              className: "BroadcastLanguage",
              onClick: this.showContextMenu,
              children: [
                (0, _.jsxs)("span", {
                  children: ["\xA0- ", (0, _._)(_)],
                }),
                (0, _.jsx)("div", {
                  className: "ContextMenuButton",
                  children: (0, _.jsx)(_.GB9, {}),
                }),
              ],
            });
          }
        }
        _([_._], _.prototype, "showContextMenu", 1);
        let _ = class extends _.Component {
          constructor(_) {
            super(_),
              (this.state = {
                sizableRegion: [],
              });
          }
          async AddLinkRegion() {
            let _ = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: 2.5 + _,
              yPosPct: 2.5 + _,
              widthPct: 20,
              heightPct: 15,
            }),
              this.setState(
                {
                  sizableRegion: this.state.sizableRegion,
                },
                () => this.OnSaveRegions(),
              );
          }
          componentDidUpdate(_) {
            _.linkRegions.length == 0 &&
              this.props.linkRegions.forEach((_, _) => {
                this.LoadLinkRegion(_, _);
              });
          }
          async LoadLinkRegion(_, _) {
            let _ = this.state.sizableRegion.length;
            this.state.sizableRegion.push({
              xPosPct: _.left,
              yPosPct: _.top,
              widthPct: _.width,
              heightPct: _.height,
              link_url: _.url,
              link_description: _.link_description,
              link_index: _.link_index,
            }),
              await this.setState({
                sizableRegion: this.state.sizableRegion,
              });
          }
          OnSaveRegions() {
            let _;
            _ = {
              links: [],
            };
            for (let _ = 0; _ < this.state.sizableRegion.length; _++) {
              let _;
              (_ = {
                left: Math.floor(this.state.sizableRegion[_].xPosPct * 100),
                top: Math.floor(this.state.sizableRegion[_].yPosPct * 100),
                width: Math.floor(this.state.sizableRegion[_].widthPct * 100),
                height: Math.floor(this.state.sizableRegion[_].heightPct * 100),
                url: this.state.sizableRegion[_].link_url,
                link_description: this.state.sizableRegion[_].link_description,
                link_index: _,
              }),
                _.links.push(_);
            }
            this.props.onSaveLinkRegions?.(_);
          }
          async DeleteRegion(_) {
            this.state.sizableRegion.splice(_, 1),
              console.log("keys: ", this.state.sizableRegion.keys),
              this.setState(
                {
                  sizableRegion: this.state.sizableRegion,
                },
                () => this.OnSaveRegions(),
              );
          }
          async UpdatePanel(_, _) {
            const _ = [...this.state.sizableRegion];
            (_[_] = _),
              this.setState(
                {
                  sizableRegion: _,
                },
                () => this.OnSaveRegions(),
              );
          }
          render() {
            return (0, _.jsxs)("div", {
              className: "LinkOverlayContainer",
              children: [
                (0, _.jsxs)("div", {
                  className: "LinkOverlayValidRegion",
                  children: [
                    !this.props.editMode && this.props.linkRegions
                      ? this.props.linkRegions.map((_) => {
                          const _ = (0, _._)(_.url);
                          return (0, _.jsx)(
                            _._,
                            {
                              href: _.url,
                              bForceExternal: _,
                              bUseLinkFilter: _,
                              children: (0, _.jsx)("div", {
                                className: "LinkRegion",
                                style: {
                                  left: _.left + "%",
                                  top: _.top + "%",
                                  width: _.width + "%",
                                  height: _.height + "%",
                                },
                                children: (0, _.jsxs)("div", {
                                  className: "LinkRegionText",
                                  children: [_.link_description, " "],
                                }),
                              }),
                            },
                            _.link_index,
                          );
                        })
                      : null,
                    this.props.editMode &&
                      this.state.sizableRegion.map((_, _) =>
                        (0, _.jsx)(
                          _._,
                          {
                            index: _,
                            deleteFn: this.DeleteRegion,
                            updateFn: this.UpdatePanel,
                            xPosPct: _.xPosPct,
                            yPosPct: _.yPosPct,
                            widthPct: _.widthPct,
                            heightPct: _.heightPct,
                            link_url: _.link_url,
                            link_description: _.link_description,
                          },
                          _ * 100 + _.xPosPct,
                        ),
                      ),
                    this.props.editMode &&
                      (0, _.jsx)("div", {
                        className: "AddLinkRegion",
                        onClick: this.AddLinkRegion,
                        children: (0, _._)("#SteamTV_AddLinkRegion"),
                      }),
                  ],
                }),
                (0, _.jsx)("div", {
                  className: "LinkOverlayInvalidRegion",
                  children: (0, _.jsx)("div", {
                    children: (0, _._)("#SteamTV_LinkRegionReserved"),
                  }),
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "AddLinkRegion", 1),
          _([_._], _.prototype, "LoadLinkRegion", 1),
          _([_._], _.prototype, "OnSaveRegions", 1),
          _([_._], _.prototype, "DeleteRegion", 1),
          _([_._], _.prototype, "UpdatePanel", 1),
          (_ = _([_._], _));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          bIncludeFeaturedAsGameSource = !0;
          get nOverrideDateNow() {
            return (0, _._)();
          }
          set nOverrideDateNow(_) {
            (0, _._)(_);
          }
          get bRequireAllEventsLoadedInTimeBlock() {
            return !1;
          }
          get bIncludeCurators() {
            return !0;
          }
          GetTimeNowWithOverride() {
            return (0, _._)();
          }
          GetTimeNowWithOverrideAsDate() {
            return (0, _._)();
          }
          BHasTimeOverride() {
            return !!(0, _._)();
          }
          ParseDevOverrides(_) {
            if (!_ || _.length == 0) return;
            new URLSearchParams(_[0] == "?" ? _.substring(1) : _).has("t");
          }
        }
        const _ = new _();
        (0, _._)("g_EventCalendarDevFeatures", _);
        function _(_ = 1) {
          const [_, _] = React.useState(() => _()),
            _ = useCancelTokenSource("useTimeNowWithOverride"),
            _ = React.useCallback(() => {
              _.token.reason || _(_());
            }, []);
          return (
            React.useEffect(() => {
              const _ = 1e3 * _,
                _ = Date.now() % _,
                _ = _ - _,
                _ = window.setTimeout(_, _);
              return () => {
                window.clearTimeout(_);
              };
            }, [_, _, _]),
            _
          );
        }
        const _ = Math.floor(new Date().getTime() / 1e3);
        function _() {
          const _ = Math.floor(Date.now() / 1e3);
          return _.nOverrideDateNow ? _.nOverrideDateNow + (_ - _) : _;
        }
        function _() {
          return _.nOverrideDateNow ?? _;
        }
        function _() {
          return _.useMemo(() => _(), []);
        }
        function _() {
          return _.useMemo(() => _.GetTimeNowWithOverrideAsDate(), []);
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
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
          giveaway_id = void 0;
          seconds_until_drawing = void 0;
          rtime_start = void 0;
          rtime_end = void 0;
          closed = void 0;
          winner_count = void 0;
          BIsValid() {
            return this.giveaway_id !== void 0 && this.giveaway_id !== null;
          }
          BStarted() {
            return (
              this.BIsValid() &&
              (this.seconds_until_drawing >= 0 || this.winner_count > 0)
            );
          }
          clone() {
            const _ = new _();
            return (
              (_.giveaway_id = this.giveaway_id),
              (_.seconds_until_drawing = this.seconds_until_drawing),
              (_.rtime_start = this.rtime_start),
              (_.rtime_end = this.rtime_end),
              (_.closed = this.closed),
              (_.winner_count = this.winner_count),
              _
            );
          }
        };
        _([_._], _.prototype, "giveaway_id", 2),
          _([_._], _.prototype, "seconds_until_drawing", 2),
          _([_._], _.prototype, "rtime_start", 2),
          _([_._], _.prototype, "rtime_end", 2),
          _([_._], _.prototype, "closed", 2),
          _([_._], _.prototype, "winner_count", 2);
        let _ = _;
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          m_mapGiveawayIDToNextDrawInfo = new Map();
          m_mapGiveawayIDAndInstanceToNextDrawInfo = new Map();
          m_bLoadedFromConfig = !1;
          m_mapNextDrawChangeCallback = new Map();
          GetKey(_, _) {
            return _ + "_" + _;
          }
          GetInfoByInstance(_, _) {
            return this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(
              this.GetKey(_, _),
            );
          }
          GetNextDrawChangeCallback(_) {
            return (
              this.m_mapNextDrawChangeCallback.has(_) ||
                this.m_mapNextDrawChangeCallback.set(_, new _._()),
              this.m_mapNextDrawChangeCallback.get(_)
            );
          }
          CopyToGiveaway(_, _) {
            _.closed != _.closed && (_.closed = _.closed),
              _.giveaway_id != _.giveaway_id && (_.giveaway_id = _.giveaway_id),
              _.rtime_start != _.rtime_start && (_.rtime_start = _.rtime_start),
              _.rtime_end != _.rtime_end && (_.rtime_end = _.rtime_end),
              _.winner_count != _.winner_count &&
                (_.winner_count = _.winner_count),
              _.seconds_until_drawing != _.seconds_until_drawing &&
                (_.seconds_until_drawing = _.seconds_until_drawing);
          }
          async ReloadGiveaway(_, _) {
            if (!_) return null;
            let _ = _._.STORE_BASE_URL + "prizes/nextdraw/" + _,
              _ = null,
              _ = {
                origin: self.origin,
              };
            return (
              (_ = await _().get(_, {
                params: _,
              })),
              (0, _._)(() => {
                if (
                  (this.m_mapGiveawayIDToNextDrawInfo.has(_) ||
                    this.m_mapGiveawayIDToNextDrawInfo.set(_, new _()),
                  this.CopyToGiveaway(
                    _.data,
                    this.m_mapGiveawayIDToNextDrawInfo.get(_),
                  ),
                  _ !== void 0)
                ) {
                  const _ = this.GetKey(_, _);
                  this.m_mapGiveawayIDAndInstanceToNextDrawInfo.has(_) ||
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(
                      _,
                      new _(),
                    ),
                    this.CopyToGiveaway(
                      _.data,
                      this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_),
                    );
                }
              }),
              this.GetNextDrawChangeCallback(_).Dispatch(
                this.m_mapGiveawayIDToNextDrawInfo.get(_),
              ),
              this.m_mapGiveawayIDToNextDrawInfo.get(_)
            );
          }
          static s_Singleton;
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          Init() {
            if (!this.m_bLoadedFromConfig) {
              let _ = (0, _._)("giveawaynextdraw", "application_config");
              if (_ && _.giveaway_id) {
                let _ = new _();
                this.CopyToGiveaway(_, _),
                  this.m_mapGiveawayIDToNextDrawInfo.set(_.giveaway_id, _);
              }
              this.m_bLoadedFromConfig = !0;
            }
          }
        };
        _([_._], _.prototype, "m_mapGiveawayIDToNextDrawInfo", 2),
          _([_._], _.prototype, "CopyToGiveaway", 1);
        let _ = _;
        const _ = class _ {
          m_intervalID;
          m_intervalCountDownID;
          static s_GlobalInstance = 0;
          m_myInstanceNumber = 0;
          constructor() {
            (this.m_myInstanceNumber = _.s_GlobalInstance),
              (_.s_GlobalInstance += 1);
          }
          ClearRefreshInterval() {
            this.m_intervalID &&
              (window.clearInterval(this.m_intervalID),
              (this.m_intervalID = void 0));
          }
          ClearCountDown() {
            this.m_intervalCountDownID &&
              (window.clearInterval(this.m_intervalCountDownID),
              (this.m_intervalCountDownID = void 0));
          }
          SetupRefreshDataInterval(_, _) {
            if ((this.ClearRefreshInterval(), !_.closed)) {
              let _ =
                _.seconds_until_drawing <= 0 && _.winner_count == 0 ? 6e4 : 5e3;
              this.m_intervalID = window.setInterval(_, _);
            }
          }
          SetupCountDown(_, _) {
            _ > 0 && (this.m_intervalCountDownID = window.setInterval(_, 1e3));
          }
        };
        _([_._], _.prototype, "ClearRefreshInterval", 1),
          _([_._], _.prototype, "ClearCountDown", 1),
          _([_._], _.prototype, "SetupRefreshDataInterval", 1),
          _([_._], _.prototype, "SetupCountDown", 1);
        let _ = _;
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          (_.seconds_until_drawing -= 1),
            _.seconds_until_drawing == 0 && _.ClearCountDown();
        }
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          _ &&
            _.BIsValid() &&
            _.seconds_until_drawing <= 0 &&
            !_.closed &&
            (_.ClearCountDown(),
            _.Get()
              .ReloadGiveaway(_, _.m_myInstanceNumber)
              .then((_) => {
                _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
              }));
        }
        function _(_) {
          const [_] = (0, _.useState)(new _()),
            _ = (0, _._)();
          (0, _.useEffect)(
            () => (
              _.Get()
                .ReloadGiveaway(_, _.m_myInstanceNumber)
                .then((_) => {
                  _.SetupRefreshDataInterval(_, () => _(_, _)),
                    _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
                    _();
                }),
              () => {
                _.ClearRefreshInterval(), _.ClearCountDown();
              }
            ),
            [_, _, _],
          );
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber),
            [_, _, _] = (0, _._)(() => [
              _?.winner_count,
              _?.closed,
              _?.seconds_until_drawing,
            ]);
          return {
            bLoadingGiveawayInfo:
              !_ || _.giveaway_id == null || !_.BStarted() || _ === void 0,
            winner_count: _,
            closed: _,
            seconds_until_drawing: _,
          };
        }
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
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_, _, _ = !0) {
          const _ = _
              ? CStoreItemCache.k_DataRequest_BasicInfo
              : CStoreItemCache.k_DataRequest_CommonOnly,
            _ = _ || CStoreItemCache.Get().BHasStoreItem(_, _, _) ? _ : null,
            [_, _] = _(_, _, _),
            [_, _] = useState(null),
            [_, _] = _(_, _, _);
          useEffect(() => {
            _?.GetAppType() === EStoreAppType.k_EStoreAppType_Demo &&
              _(_.GetParentAppID());
          }, [_]);
          let _ = _?.GetShortDescription()
            ? StripBBCodeTags(_.GetShortDescription())
            : "";
          (!_ || _.length === 0) &&
            _ &&
            (_ = _?.GetShortDescription()
              ? StripBBCodeTags(_.GetShortDescription())
              : "");
          const _ = _ == _ && (!_ || _ == _);
          return [_, _];
        }
        const _ = 1,
          _ = 2,
          _ = 3;
        function _(_, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)();
          _.current = _;
          const [_, _] = (0, _.useState)(void 0),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          if (
            ((0, _.useEffect)(() => {
              const _ = {
                include_assets: _,
                include_release: _,
                include_platforms: _,
                include_all_purchase_options: _,
                include_screenshots: _,
                include_trailers: _,
                include_ratings: _,
                include_tag_count: _,
                include_reviews: _,
                include_basic_info: _,
                include_supported_languages: _,
                include_full_description: _,
                include_included_items: _,
                include_assets_without_overrides: _,
                apply_user_filters: _,
                include_links: _,
                include_extra_details: _,
                include_optin_registration_tags: _,
              };
              let _ = null;
              return (
                !_ ||
                  _ < 0 ||
                  _._.Get().BHasStoreItem(_, _, _) ||
                  (_ !== void 0 && _ && _ == _.current) ||
                  (_ !== _.current && (_(void 0), (_.current = _)),
                  (_ = _().CancelToken.source()),
                  _._.Get()
                    .QueueStoreItemRequest(_, _, _)
                    .then((_) => {
                      !_?.token.reason && _.current === _ && _(_ == _._), _();
                    })),
                () => _?.cancel("useStoreItemCache: unmounting")
              );
            }, [
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
            ]),
            !_)
          )
            return [null, _];
          if (_ === !1) return [void 0, _];
          if (_._.Get().BIsStoreItemMissing(_, _)) return [void 0, _];
          if (!_._.Get().BHasStoreItem(_, _, _)) return [void 0, _];
          const _ = _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _);
          return _ ? [_, _] : [null, _];
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          const [_, _] = _(_, _, _);
          let _;
          _?.GetStoreItemType() == _._._ &&
            !_.GetAssets()?.GetHeaderURL() &&
            _?.GetIncludedAppIDs().length == 1 &&
            (_ = _.GetIncludedAppIDs()[0]);
          const [_, _] = _(_, _);
          return _ && _?.BIsVisible() ? [_, _] : [_, _];
        }
        function _(_, _, _, _) {
          const _ = (0, _._)(),
            {
              include_assets: _,
              include_release: _,
              include_platforms: _,
              include_all_purchase_options: _,
              include_screenshots: _,
              include_trailers: _,
              include_ratings: _,
              include_tag_count: _,
              include_reviews: _,
              include_basic_info: _,
              include_supported_languages: _,
              include_full_description: _,
              include_included_items: _,
              include_assets_without_overrides: _,
              apply_user_filters: _,
              include_links: _,
              include_extra_details: _,
              include_optin_registration_tags: _,
            } = _;
          return (
            (0, _.useEffect)(() => {
              if (!_ || _.length == 0) return;
              const _ = {
                  include_assets: _,
                  include_release: _,
                  include_platforms: _,
                  include_all_purchase_options: _,
                  include_screenshots: _,
                  include_trailers: _,
                  include_ratings: _,
                  include_tag_count: _,
                  include_reviews: _,
                  include_basic_info: _,
                  include_supported_languages: _,
                  include_full_description: _,
                  include_included_items: _,
                  include_assets_without_overrides: _,
                  apply_user_filters: _,
                  include_links: _,
                  include_extra_details: _,
                  include_optin_registration_tags: _,
                },
                _ = _.filter(
                  (_) =>
                    !(
                      _._.Get().BHasStoreItem(_, _, _) ||
                      _._.Get().BIsStoreItemMissing(_, _)
                    ),
                );
              if (_.length == 0) return;
              const _ = _().CancelToken.source(),
                _ = _.map((_) => _._.Get().QueueStoreItemRequest(_, _, _));
              return (
                Promise.all(_).then(() => {
                  _.token.reason || _();
                }),
                () => _.cancel("useStoreItemCacheMultiplePackages: unmounting")
              );
            }, [
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
            ]),
            _
              ? _.every(
                  (_) =>
                    _._.Get().BHasStoreItem(_, _, _) ||
                    _._.Get().BIsStoreItemMissing(_, _),
                )
                ? _.every((_) =>
                    _._.Get().GetStoreItemWithLegacyVisibilityCheck(_, _),
                  )
                  ? _
                  : _
                : _
              : _
          );
        }
        function _(_, _, _) {
          return _(_, _._._, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Bundle, _, _);
        }
        function _(_, _, _) {
          return _(_, EStoreItemType.k_EStoreItemType_Package, _, _);
        }
        function _() {
          _.useEffect(
            () => (
              _._.Get().SetReturnUnavailableItems(!0),
              () => _._.Get().SetReturnUnavailableItems(!1)
            ),
            [],
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          return (0, _.jsx)(_._, {
            onEscKeypress: _.closeModal,
            bDisableBackgroundDismiss: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _.redirectURL,
              guestOption: _.guestOption,
            }),
          });
        }
        function _(_) {
          const { redirectURL: _ = window.location.href } = _;
          return (0, _.jsx)(_._, {
            active: !0,
            children: (0, _.jsx)(_, {
              redirectURL: _,
            }),
          });
        }
        function _() {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: window.location.href,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_, _) {
          (0, _._)(
            (0, _.jsx)(_, {
              ownerWin: window,
              redirectURL: _,
              guestOption: _,
            }),
            window,
            {
              strTitle: (0, _._)("#Login_SignInTitle"),
            },
          );
        }
        function _(_) {
          const { redirectURL: _, guestOption: _ } = _,
            [_] = (0, _.useState)(
              new _._(
                new _._(_._.WEBAPI_BASE_URL),
              ).GetAnonymousServiceTransport(),
            ),
            [_, _] = (0, _.useState)(!1),
            _ = (_) => {
              _ == _._.k_PrimaryDomainFail ? _(!0) : window.location.assign(_);
            };
          return (0, _.jsx)("div", {
            children: _
              ? (0, _.jsx)(_._, {})
              : (0, _.jsx)(_._, {
                  autoFocus: !0,
                  transport: _,
                  platform: _._._,
                  onComplete: _,
                  redirectUrl: _,
                  theme: "modal",
                  children:
                    _ &&
                    (0, _.jsx)(_._, {
                      redirectURL: _,
                    }),
                }),
          });
        }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { gidEvent: _ } = _,
            _ = usePartnerEventByEventGID(_);
          return _
            ? jsx(_, {
                event: _,
                lang: PchLanguageToELanguage(Config.LANGUAGE),
                href: NavLink(GetEventSaleURL(_) ?? ""),
              })
            : null;
        }
        function _(_) {
          const { event: _, lang: _, href: _ } = _,
            [_, _] = (0, _.useMemo)(() => {
              const _ = _.jsondata.localized_sale_product_banner,
                _ = _.jsondata.localized_sale_product_mobile_banner;
              if (_?.length && _?.length) {
                const _ = _._.GetWithFallback(_, _),
                  _ = _._.GetWithFallback(_, _);
                if (_?.length && _?.length)
                  return [
                    _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                    _._.GenerateURLFromHashAndExt(_.clanSteamID, _),
                  ];
              }
              return [void 0, void 0];
            }, [_, _]);
          return !_?.length || !_?.length
            ? null
            : (0, _.jsxs)("a", {
                href: _,
                className: _.Link,
                children: [
                  (0, _.jsx)("img", {
                    src: _,
                    className: (0, _._)(_.Banner, _.Big),
                    alt: _.GetNameWithFallback(_),
                  }),
                  (0, _.jsx)("img", {
                    src: _,
                    className: (0, _._)(_.Banner, _.Mobile),
                    alt: _.GetNameWithFallback(_),
                  }),
                ],
              });
        }
        function _(_) {
          const { gidEvent: _ } = _,
            _ = (0, _._)(_);
          return _
            ? (0, _.jsx)(_, {
                event: _,
                lang: (0, _.sfN)(_._.LANGUAGE),
                href: (0, _._)((0, _._)(_) ?? ""),
              })
            : null;
        }
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
          _ = __webpack_require__._(_),
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
          },
          _ = ((_) => (
            (_.topleft = "topleft"),
            (_.top = "top"),
            (_.topright = "topright"),
            (_.left = "left"),
            (_.middle = "middle"),
            (_.right = "right"),
            (_.bottomleft = "bottomleft"),
            (_.bottom = "bottom"),
            (_.bottomright = "bottomright"),
            _
          ))(_ || {});
        let _ = class extends _.Component {
          m_rectLinkRegion;
          m_elLinkRegionBox;
          m_nLocalOffsetXPct;
          m_nLocalOffsetYPct;
          m_fnMouseUp = null;
          m_fnMouseMove = null;
          m_listeners = new _._();
          m_strDescription = "";
          m_aspectRatio = 1;
          componentWillUnmount() {
            this.m_listeners.Unregister();
          }
          constructor(_) {
            super(_),
              (this.state = {
                curLeftPosPct: this.props.xPosPct,
                curTopPosPct: this.props.yPosPct,
                curRightPosPct:
                  100 - (this.props.widthPct + this.props.xPosPct),
                curBottomPosPct:
                  100 - (this.props.yPosPct + this.props.heightPct),
                curWidthPct: this.props.widthPct,
                curHeightPct: this.props.heightPct,
                EdgeDown: void 0,
                text_link_url: this.props.link_url,
                text_link_description: this.props.link_description,
                bEditingLink: !1,
                valid_link: this.validateUrl(this.props.link_url),
              }),
              (this.m_strDescription = this.props.link_description ?? ""),
              (this.m_aspectRatio =
                this.props.heightPct > 0 && this.props.widthPct > 0
                  ? this.props.widthPct / this.props.heightPct
                  : 1);
          }
          LinkRegionBoxRef(_) {
            this.m_elLinkRegionBox = _;
          }
          OnMouseDown(_, _) {
            this.m_elLinkRegionBox?.parentElement &&
              this.m_elLinkRegionBox.ownerDocument.defaultView &&
              ((this.m_fnMouseUp = (_) => {
                this.OnMouseUp(_, _);
              }),
              (this.m_fnMouseMove = (_) => {
                this.OnMouseMove(_, _);
              }),
              this.setState({
                EdgeDown: _,
              }),
              (this.m_rectLinkRegion =
                this.m_elLinkRegionBox.parentElement.getBoundingClientRect()),
              (this.m_nLocalOffsetXPct =
                ((_.clientX - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                this.state.curLeftPosPct),
              (this.m_nLocalOffsetYPct =
                ((_.clientY - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                this.state.curTopPosPct),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mousemove",
                this.m_fnMouseMove,
              ),
              this.m_listeners.AddEventListener(
                this.m_elLinkRegionBox.ownerDocument.defaultView,
                "mouseup",
                this.m_fnMouseUp,
              )),
              _.preventDefault(),
              _.stopPropagation();
          }
          OnMouseMove(_, _) {
            if (this.state.EdgeDown !== void 0) {
              switch ((_.shiftKey && this.m_fnMouseUp(), _)) {
                case "left": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "right": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "top": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                  });
                  break;
                }
                case "bottom": {
                  this.UpdateState({
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "topleft": {
                  this.UpdateState({
                    curTopPosPct: this.CalcBottomEdge(_.clientY),
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                  });
                  break;
                }
                case "topright": {
                  this.UpdateState({
                    curTopPosPct: this.CalcTopEdge(_.clientY),
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                  });
                  break;
                }
                case "bottomleft": {
                  this.UpdateState({
                    curLeftPosPct: this.CalcLeftEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "bottomright": {
                  this.UpdateState({
                    curRightPosPct: this.CalcRightEdge(_.clientX),
                    curBottomPosPct: this.CalcBottomEdge(_.clientY),
                  });
                  break;
                }
                case "middle": {
                  const _ = (0, _._)(
                      this.CalcLeftEdge(_.clientX),
                      0,
                      100 - this.state.curWidthPct,
                    ),
                    _ = 100 - (_ + this.state.curWidthPct),
                    _ = (0, _._)(
                      this.CalcTopEdge(_.clientY),
                      0,
                      100 - this.state.curHeightPct,
                    ),
                    _ = 100 - (_ + this.state.curHeightPct),
                    _ = {
                      curLeftPosPct: _,
                      curRightPosPct: _,
                      curTopPosPct: _,
                      curBottomPosPct: _,
                    };
                  this.setState(_);
                  break;
                }
                default:
                  break;
              }
              _.preventDefault(), _.stopPropagation();
            }
          }
          IsValidPct(_) {
            return _ >= 0 && _ <= 100;
          }
          UpdateState(_) {
            let _ =
                _.curTopPosPct !== void 0
                  ? _.curTopPosPct
                  : this.state.curTopPosPct,
              _ =
                _.curBottomPosPct !== void 0
                  ? _.curBottomPosPct
                  : this.state.curBottomPosPct,
              _ =
                _.curLeftPosPct !== void 0
                  ? _.curLeftPosPct
                  : this.state.curLeftPosPct,
              _ =
                _.curRightPosPct !== void 0
                  ? _.curRightPosPct
                  : this.state.curRightPosPct,
              _ = (0, _._)(
                100 - _ - _,
                this.props.widthMinPct || 0,
                this.props.widthMaxPct || 100,
              ),
              _ = (0, _._)(
                100 - _ - _,
                this.props.heightMinPct || 0,
                this.props.heightMaxPct || 100,
              );
            this.props.bLockAspectRatio &&
              (_.curLeftPosPct !== void 0 || _.curRightPosPct !== void 0
                ? (_ = _ / this.m_aspectRatio)
                : (_ = _ * this.m_aspectRatio)),
              _.curLeftPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _)),
              _.curTopPosPct !== void 0
                ? (_ = 100 - _ - _)
                : (_ = 100 - (_ + _));
            const _ = 100 - _ - _,
              _ = 100 - _ - _;
            this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.IsValidPct(_) &&
              this.setState({
                curLeftPosPct: _,
                curRightPosPct: _,
                curTopPosPct: _,
                curBottomPosPct: _,
              });
          }
          GetXPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.left) /
                  (this.m_rectLinkRegion.right - this.m_rectLinkRegion.left)) *
                  100 -
                  (this.m_nLocalOffsetXPct ?? 0)
              : 0;
          }
          GetYPercent(_) {
            return this.m_rectLinkRegion
              ? ((_ - this.m_rectLinkRegion.top) /
                  (this.m_rectLinkRegion.bottom - this.m_rectLinkRegion.top)) *
                  100 -
                  (this.m_nLocalOffsetYPct ?? 0)
              : 0;
          }
          CalcLeftEdge(_) {
            return (0, _._)(this.GetXPercent(_), 0, 100);
          }
          CalcRightEdge(_) {
            return (0, _._)(
              100 - (this.GetXPercent(_) + this.state.curWidthPct),
              0,
              100,
            );
          }
          CalcTopEdge(_) {
            return (0, _._)(this.GetYPercent(_), 0, 100);
          }
          CalcBottomEdge(_) {
            return (0, _._)(
              100 - (this.GetYPercent(_) + this.state.curHeightPct),
              0,
              100,
            );
          }
          OnMouseUp(_, _) {
            this.setState({
              curWidthPct:
                100 - this.state.curRightPosPct - this.state.curLeftPosPct,
            }),
              this.setState({
                curHeightPct:
                  100 - this.state.curBottomPosPct - this.state.curTopPosPct,
              }),
              this.setState({
                EdgeDown: void 0,
              }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              }),
              this.m_listeners.Unregister();
          }
          async HandleDelete() {
            this.props.deleteFn && this.props.deleteFn(this.props.index);
          }
          OnSetLinkURLChange(_) {
            this.setState({
              text_link_url: _.target.value,
              valid_link: this.validateUrl(_.target.value),
            });
          }
          OnSetLinkDescriptionChange(_) {
            this.setState({
              text_link_description: _.target.value,
            });
          }
          validateUrl(_) {
            return _ != null
              ? /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
                  _,
                )
              : !1;
          }
          OnSaveLink() {
            (this.m_strDescription = this.state.text_link_description ?? ""),
              this.setState({
                bEditingLink: !this.state.bEditingLink,
              }),
              this.props.updateFn(this.props.index, {
                xPosPct: this.state.curLeftPosPct,
                yPosPct: this.state.curTopPosPct,
                widthPct: this.state.curWidthPct,
                heightPct: this.state.curHeightPct,
                link_url: this.state.text_link_url,
                link_description: this.state.text_link_description,
              });
          }
          OnEditLink() {
            this.setState({
              bEditingLink: !this.state.bEditingLink,
            });
          }
          render() {
            let _ = {
                left: this.state.curLeftPosPct + "%",
                top: this.state.curTopPosPct + "%",
                right: this.state.curRightPosPct + "%",
                bottom: this.state.curBottomPosPct + "%",
              },
              _ = _().LinkRegionDragBox;
            return (
              this.state.EdgeDown != null &&
                (_ += ` ${_().EdgeDown} ` + _()[this.state.EdgeDown]),
              (0, _.jsxs)("div", {
                className: _,
                style: _,
                ref: this.LinkRegionBoxRef,
                draggable: !1,
                children: [
                  (0, _.jsxs)("div", {
                    className: _().LinkRegionGridBox,
                    children: [
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Top}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "top");
                        },
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().TopRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "topright");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Left}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "left");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsxs)("div", {
                        className: `${_().LinkRegionEdge} ${_().Middle}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "middle");
                        },
                        draggable: !1,
                        children: [
                          this.props.deleteFn &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionDelete,
                              onClick: this.HandleDelete,
                              children: (0, _.jsx)(_.sED, {}),
                            }),
                          !this.props.bDisableLink &&
                            (0, _.jsx)("div", {
                              className: _().LinkRegionSettings,
                              onClick: this.OnEditLink,
                              children: (0, _.jsx)(_.xv8, {}),
                            }),
                          (0, _.jsxs)("div", {
                            className: _().LinkText,
                            children: [" ", this.m_strDescription, " "],
                          }),
                        ],
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Right}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "right");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomLeft}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomleft");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().Bottom}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottom");
                        },
                        draggable: !1,
                      }),
                      (0, _.jsx)("div", {
                        className: `${_().LinkRegionEdge} ${_().BottomRight}`,
                        onMouseDown: (_) => {
                          this.OnMouseDown(_, "bottomright");
                        },
                        draggable: !1,
                      }),
                    ],
                  }),
                  this.state.bEditingLink &&
                    (0, _.jsxs)("div", {
                      className: _().LinkRegionInfo,
                      children: [
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_url",
                          value: this.state.text_link_url,
                          label: (0, _._)("#SteamTV_LinkURL"),
                          placeholder: "https://www.example.com",
                          onChange: this.OnSetLinkURLChange,
                          mustBeURL: !0,
                        }),
                        (0, _.jsx)(_._, {
                          className: _().LinkRegionInput,
                          type: "text",
                          name: "link_description",
                          value: this.state.text_link_description,
                          label: (0, _._)("#SteamTV_LinkDescription"),
                          placeholder: (0, _._)(
                            "#SteamTV_LinkDescription_Placeholder",
                          ),
                          onChange: this.OnSetLinkDescriptionChange,
                        }),
                        (0, _.jsxs)("div", {
                          className: _().LinkRegionButtonContainer,
                          children: [
                            (0, _.jsxs)(_._, {
                              disabled: !this.state.valid_link,
                              onClick: this.OnSaveLink,
                              children: [" ", (0, _._)("#Button_OK"), " "],
                            }),
                            (0, _.jsxs)(_._, {
                              onClick: this.OnEditLink,
                              children: [" ", (0, _._)("#Button_Cancel")],
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              })
            );
          }
        };
        _([_._], _.prototype, "LinkRegionBoxRef", 1),
          _([_._], _.prototype, "OnMouseDown", 1),
          _([_._], _.prototype, "OnMouseMove", 1),
          _([_._], _.prototype, "OnMouseUp", 1),
          _([_._], _.prototype, "HandleDelete", 1),
          _([_._], _.prototype, "OnSetLinkURLChange", 1),
          _([_._], _.prototype, "OnSetLinkDescriptionChange", 1),
          _([_._], _.prototype, "OnSaveLink", 1),
          _([_._], _.prototype, "OnEditLink", 1),
          (_ = _([_._], _));
      },
      chunkid: (module) => {
        module.exports = {
          Link: "_2UaM2MUAY7gG5jQF-6m9eV",
          Banner: "_1DZMXccE3UeEnQ5fZ7O00v",
          Big: "_3dJUAHMUbDY0O45FaJvOT-",
          Mobile: "_3RIai13_FI7QmOT96zU4W-",
        };
      },
      chunkid: (module) => {
        module.exports = {
          strStreamIconCapsuleArtHeight: "58px",
          strStreamIconScreenshotArtHeight: "58px",
          bordered_container: "_3zXpFCyX2IiaD-MNF5KJFf",
          WidePlayer: "_3zjvrmOCIh31clDHjpLE2a",
          store_chat_ctn: "_21N-VV6Gvjjc1FqzOMJQfi",
          item_drop_ctn: "ifxDfv8dAGa5u71nRT0CJ",
          BorderedContainerPromotion: "-b_1HPR-CqjjzrTnTG2fn",
          bordered_title: "WsfbqpkdutNGWu3V4uhn_",
          streamTitle: "XMkaslAYoJyTgLBY3WHVJ",
          bordered_subtitle: "_3tYeiJ6LHC_iVhqb9zqOMy",
          bordered_corner_container: "_3IBcNy1U-I38_F9BNw-VHE",
          bordered_corner_expanded: "ahz31bshwySKGB_tBKf14",
          bordered_corner_shrinked: "L8sFYvKOUztrhXdjxy7mp",
          broadcast_settings_icon: "_37ugZJhL-qCRkdeZBRju2h",
          side_panels: "T_zpRAGXggYgVaRyCSXDu",
          wrapper: "_1mH-vDK7JF0NBAdZfdzr1a",
          video_placeholder: "_1KU955BfHBkZdSvJncjc9V",
          embedded_player: "_12fBJU1kOnQCeKc9JFTGMX",
          NoChat: "_2QQm1StfkXOLXrBhLy_jYP",
          video_container: "_1gbNxru_N2ui-EXc2_zmRy",
          viewer_bar: "_2YgphHYykz192eH3FgalS4",
          viewer_links: "_2EQpO5nLkHNXFdPk0ZnoY2",
          chat_link: "_3a0zX_I8eGlU5CYF3lcQjs",
          settings_link: "_1ThkelBkPfoE80ibfGyyVB",
          external_link: "_1n1BMOyCVFA0y6ULd_laPH",
          viewer_count: "_1MrTWpNan4htXK4Kql6ms8",
          vod_title: "_2xKaMJn0nexa3MMJvN6yq-",
          stream_icon_and_viewer_container: "_2sbrGTttGmHbz8ZPsO1YuR",
          display_capsule_art: "SsORVFNW3KBOdsIxDVqcd",
          ViewerNum: "_1reMoMi3BZbMUs6jHW93f1",
          StreamCapsule: "biTh7mrlaSv_WSY2gFsCH",
          stream_icon_container: "_2zBOiujXasDdHPmFPW4O90",
          stream_icon_hide_on_hover: "qYFsGojW19eJQAuemyuHQ",
          stream_icon_show_on_hover: "_29z3Nu6SGTNFDwIw8Gdvuk",
          stream_icon: "_1LBYspkgF9X97b89kPRBFC",
          stream_icon_selected: "mSpzeNvpTqIiZHkJgHRw7",
          multistream: "_1DS-WZoUJyBitKOZoq7u3n",
          MultiStreamCtn: "_1K6j5rrGvLPb8aT2L7CBAA",
          scrollingstreams: "_3aYWlUqW6-SosI72nizpP4",
          clear_div: "_1oCVbTJqa4Av40NuPdztIv",
          NoSelect: "_3Zm9dcDmIQkcWVzEq0IB-E",
          broadcast_floating: "_2WNxa8Qii8HrG8e0th6oB8",
          PopOutVideoTitleBar: "_184SIP7TlwJaOjOVVxLBLS",
          PopOutVideoTitleText: "_28O6dX6-Xf37oViWRRhvjz",
          PopOutVideoCloseButton: "_3bIsS_eft2P6BaAUZdlqme",
          BroadcastPlayerContainer: "_3VvcXgvuoyH2OXPyzZXeVT",
          ChatContainer: "_3kqwu6KzpbMqW5fIlXMIKI",
          BroadcastAndChat: "_1aJ9yfIUd-oGDvpo5-BuBx",
          detail_chat_ctn: "IaFnsy98_mIwYox4zmFu2",
          ChatEntry: "Rs7EltAKuQWw9U0v2bKxp",
          Event: "_1A0NY-wvZmZAqMMiw9oTYR",
          container: "_2yiy6ghVhj3fkC4I01odHC",
          LeftPanelCtn: "_6O_psaoFJTLs30M_ePzZ7",
          RightPanelCtn: "yRHl2kJWdMGdwVN_70nrP",
          SidePanelBackground: "_2FYu31I46rjm0DVxq-ufK9",
          LeftPanel: "o6XqrPpvDrpRsE7SpW8qJ",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BroadcastChat: "_3URK7gSLJV_b2M32URtdZ1",
          ChatEntry: "_3soy-wJhd4RZ8SNtC31AOz",
          ChatPanel: "_2ZCAIdTy8CoxNNL8KBGNM",
          ChatMessages: "_3M5L0Ioa2wfgEXvySi1hr6",
          EmoticonContainer: "_1wa4oT25nXzeGxGXYpgDwI",
          ChatSend: "_3JUnDuh4M77s4kfjpnkaYW",
          ChatBox: "_2qfgSP2OtiZ-r-oBJanIaJ",
          ChatControls: "_1TekO7c6uL1uezWI5iWEBG",
          MessageChat: "_22PB4rET-Rx8JtZs34nMkf",
          MessageName: "BJe6CMne992juEIk9iv-k",
          MessageContents: "PNYZaITw4xz8Xi60JGcBM",
          EmoticonsOnly: "gFjH8o1u6iAUuxxkUey3m",
          MessageNotification: "_3Xb4_FEsLWwa-ux6iYDjLZ",
          MessageError: "_8MzyWIQ6TwS_AnWj_m4rL",
          minHeightZero: "r7HLM4rGlw8BlvCfsQoMx",
          ChatLoginButton: "_2TAQo-af_j4l7zy9uy5p-l",
          RateLimitProgressBarContainer: "JPqUGxAKEhSxZR4Hr99D1",
          RateLimitProgressBar: "_1EcVKYO2FR6NiyJchLLbol",
          TimedProgressBarContainer: "_39xGjKkRIIE7HwloXCWT41",
          wrapper: "_2vz6RRjc3uhVClPT9KmsWO",
          pie: "_1k4dSfTb9MQQkhRmcTNjXs",
          spinner: "_3nRh57_ZMuIbHDg29qxFoy",
          rota: "_1xXh6121fD_MtzKqUoAKP8",
          filler: "_3EegkD4UmE1ZI1j7DOgAIe",
          fill: "_2tyuX1freBgl1ICX3yI2qG",
          mask: "_1V4KedCnQKPf-TNpoigdVe",
          SelectedUserNameCtn: "_3K4QXV1l7toIASzIn03a9w",
          SelectedUserName: "c907VNi3QBNJZYF7xxgUB",
          FlairContainer: "_166wpHbAcQPnZog52jPZLN",
          RoleFlairContainer: "_1QRJ2HWdG8P7m3J0-ATU4u",
          Description: "_105HH_vRwSwjIsvw_F-73M",
          LogInPrompt: "CsA8vCxom50xEpq0oyOHG",
          SignInButton: "_1dMwWQHXZbAAqaFBL4YyCP",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GiveawayWinnerBox: "_3cv4lblvGYp_wrnLaNEVn0",
          GiveawayWinnerAnnounced: "oLk3wFE5C0ocSKj9h7UMR",
          WinnerFlash: "_29x--KnTUnv5WIHAtqtwID",
          GiveawayWinnerBoxRight: "_2ftrc0KIXzfdR16ghJYvPg",
          GiveawayWinnerText: "_1SY2g9O-qYNIpmXPLu4XKK",
          GiveawayWinnerCountdown: "_1eP67dgalghp9Y7VMqedDT",
          GiveawayWinnerBoxLeft: "N6Rk1L-HIjqiJV3iXqRGK",
          GiveawayWinnerArt: "_1sgypTHPFS1VzmPOCkP_pK",
          GiveawayWinnerQuestion: "_3mvdct5S8-AGn0JrsRW0Vo",
          InViewerBar: "_25VQ8K4B2BcYKAbkfDx6Z_",
          GiveawayRegisterButton: "eKSAvf7P4Na3LE-0FkJFY",
          GiveawayAlreadyRegistered: "_2AVNRKDYvludWnAzqwlRYA",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BroadcastPlayerLite: "SAxf3Rqn792kM6c4U_vx5",
          BroadcastPlayerLiteVideo: "yCd0zjymzfw3HkVm-1YwX",
          BroadcastContext: "_3TnYLKMweBMIC69qFU6OJj",
          BroadcastPlaceholderImg: "_3hxn99MT14hFUCrUp6zbsf",
        };
      },
      chunkid: (module) => {
        module.exports = {
          StoreSaleWidgetContainer_mini: "nacWp0zfiXg_UWQW639_1",
          Action: "_2Xpw9--lhL-kpt-lUannE1",
          WishList: "_3mTSEg2yzb9H5zdRPv3SAA",
          StoreSaleWidgetImage_mini: "yvW2hgWZFqKjkjDbHrtPf",
          StoreSaleImage_mini: "_1zSsmz7ESvggIV3mlgPyyv",
          StoreSaleWidgetShortDesc_mini: "_2ZkfUmESIrnc0pJNmdiFW4",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Container: "mKmrOjr9bGjKAolgp9NoD",
          VoteContainer: "_3Kelh1-_v6xHfRjF68n7NB",
          DiscussContainer: "_16xC0mtOWoLbvSQbmo_ycv",
          ShareContainer: "_3ctGqQID5-8adtd7HlZ3YM",
          InnerContainer: "_9x4Z7eMgdwfAVMr16ZaJ0",
          DiscussionButton: "rHz7G5xZ3qXUYUcBW2bzX",
          DiscussIcon: "_1HBhpUbVmEXbTls8Dx-z98",
          linkField: "_3VmknRBpalymNnqAtRNJNX",
          ShareButtonContainer: "sKjWNkv_y_-TthHlUOo0R",
          LinkInputLabel: "_3ueQruKYDysu1Q9rNA62lb",
          LinkButton: "NrgD8TK-KmZ5WoWxGcOaD",
          ShareSteamBtn: "_1G3P8wlZ4seS-hs8-P9cwE",
          ClipboardText: "ytQqTkd5AxOMJlwopd6G-",
          LinkInput: "hgGF9tJhSgdN6iw-BPD5X",
          ShareIcon: "_3qVz2p-X14nAGX6EWNC87I",
          ClipboardIcon: "_3XZsWYaYpPd4DZvwdZqRLw",
          SteamIcon: "_3PXcvKt0U1PJ2DAM8I5lLx",
          share_controls_ctn: "_3F-Ryi3XDXB3d2vL---jof",
          ShareLanguagePicker: "ydWt5IK9ePS8udoXm9X8D",
          LanguageLabel: "_1AaiWRsZdYHvteubgV4AHk",
          ShareBtn: "_22m-GVWK4oToZYpcPXpkNk",
          VoteCount: "_3csl-MPe-hKuT8hQpOqEG5",
          DiscussionCount: "QQy4BCjcpjCfAvTKAqBq3",
          DiscussionButtonText: "_3P2XeK0HGdzGWS3fRQ4_vX",
          VoteDownIcon: "_3ZqxxB_poSsEYBW1s4t1OY",
          VoteDownSelectedIcon: "_1PTQ2mq0eTaG8ifW8juu81",
          VoteUpIcon: "_2akzufsslA5YAnC95zYx0K",
          VoteUpSelectedIcon: "_34YgMAbrVXVMMfXvsZAU9_",
          VoteUpStaticIcon: "Sf3urgalDvD2sZqNjEV9i",
          VoteButtonSelected: "_2OXBSB7B1AuT3O2sUF46T9",
        };
      },
      chunkid: (module) => {
        module.exports = {
          narrowWidth: "500px",
          FriendsListInsetShadowCtn: "_1qeW35auMlJ5pJVNtBC-bF",
          FriendListInsetShadowTop: "_1osHa9KHOmdCDNrA232z4N",
          FriendListInsetShadowBottom: "_2OoTJwlWvzvAysWOOEQaXS",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LinkRegionDragBox: "Rtlc-BB1aJFRIM1lH4zN1",
          EdgeDown: "i9zrHPy0-LgZONeZE4fgG",
          LinkRegionGridBox: "_1Ob4AvWwUMx67yR7owjqse",
          LinkRegionEdge: "_2stP4WlwIxd0-9GjYyI7vF",
          TopLeft: "Clgi---P85XXv25yLZwB0",
          Top: "_2Z9VyBAzofV3JvK__dECbX",
          TopRight: "_2-8DbI8PAEkk6i_0CoUeKM",
          Left: "_3ZwUw4ojIRguwHHAcn2Y4y",
          Middle: "_1HecozzoSZfUZSci9dLkxN",
          LinkRegionDelete: "_3Hb3w5_ECwPKcEr5QSAsNk",
          LinkRegionSettings: "VazMl4niFnodlVJhHIGlL",
          Right: "_3h5fKwHq9Uj2VGs8qxxtLl",
          BottomLeft: "_2CQe0cOBOLqq6y6KAUXqH3",
          Bottom: "sIHlK9sN2255-irERXD_V",
          BottomRight: "_3lnwjSWK9Gh1dFkD46NTpP",
          topleft: "_3W096h6Ka6U7sOZVa9lXQo",
          top: "_1iRW1Msfh60zHqD-xe4EAk",
          topright: "_1Yrl7AkNVVGwbM2vyL8yY1",
          left: "_2iBrmAEyXuaKAeZ-g-4CPF",
          right: "_15t6A4l27DY4KRL1aAUTTS",
          bottomleft: "_3SdBcnCBApw0fQ886qgsUx",
          bottom: "_2kzZ9Ilwo92sEI9LXTtZjN",
          bottomright: "_2AKXkFPsIBpG-HeeN58Rti",
          middle: "_1CS75ZrrDXna6xatw5ZvPR",
          LinkRegionButtonContainer: "_1ZJ42NPmBFvIcOai51ZKv3",
          DialogButton: "nN2Q1qGmO2BGMhVnIVMce",
          LinkRegionInfo: "_3TiV7d40PX30wy8UghFCaJ",
          LinkText: "_2TAc2iPcWUHTtwlg7urHv8",
        };
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        var _ = {
          "./af": 30911,
          "./af.js": 30911,
          "./ar": 63595,
          "./ar-dz": 99358,
          "./ar-dz.js": 99358,
          "./ar-kw": 46830,
          "./ar-kw.js": 46830,
          "./ar-ly": 26067,
          "./ar-ly.js": 26067,
          "./ar-ma": 64154,
          "./ar-ma.js": 64154,
          "./ar-ps": 90753,
          "./ar-ps.js": 90753,
          "./ar-sa": 53616,
          "./ar-sa.js": 53616,
          "./ar-tn": 19026,
          "./ar-tn.js": 19026,
          "./ar.js": 63595,
          "./az": 87043,
          "./az.js": 87043,
          "./be": 28437,
          "./be.js": 28437,
          "./bg": 29843,
          "./bg.js": 29843,
          "./bm": 39421,
          "./bm.js": 39421,
          "./bn": 41300,
          "./bn-bd": 54487,
          "./bn-bd.js": 54487,
          "./bn.js": 41300,
          "./bo": 40827,
          "./bo.js": 40827,
          "./br": 35120,
          "./br.js": 35120,
          "./bs": 41991,
          "./bs.js": 41991,
          "./ca": 47504,
          "./ca.js": 47504,
          "./cs": 98346,
          "./cs.js": 98346,
          "./cv": 17525,
          "./cv.js": 17525,
          "./cy": 80872,
          "./cy.js": 80872,
          "./da": 48787,
          "./da.js": 48787,
          "./de": 30199,
          "./de-at": 33461,
          "./de-at.js": 33461,
          "./de-ch": 97995,
          "./de-ch.js": 97995,
          "./de.js": 30199,
          "./dv": 14682,
          "./dv.js": 14682,
          "./el": 52549,
          "./el.js": 52549,
          "./en-au": 5706,
          "./en-au.js": 5706,
          "./en-ca": 50584,
          "./en-ca.js": 50584,
          "./en-gb": 41685,
          "./en-gb.js": 41685,
          "./en-ie": 32050,
          "./en-ie.js": 32050,
          "./en-il": 35545,
          "./en-il.js": 35545,
          "./en-in": 42551,
          "./en-in.js": 42551,
          "./en-nz": 10620,
          "./en-nz.js": 10620,
          "./en-sg": 16222,
          "./en-sg.js": 16222,
          "./eo": 88124,
          "./eo.js": 88124,
          "./es": 59784,
          "./es-do": 30300,
          "./es-do.js": 30300,
          "./es-mx": 47292,
          "./es-mx.js": 47292,
          "./es-us": 36469,
          "./es-us.js": 36469,
          "./es.js": 59784,
          "./et": 56349,
          "./et.js": 56349,
          "./eu": 6782,
          "./eu.js": 6782,
          "./fa": 86749,
          "./fa.js": 86749,
          "./fi": 52469,
          "./fi.js": 52469,
          "./fil": 2989,
          "./fil.js": 2989,
          "./fo": 50743,
          "./fo.js": 50743,
          "./fr": 34916,
          "./fr-ca": 96853,
          "./fr-ca.js": 96853,
          "./fr-ch": 81566,
          "./fr-ch.js": 81566,
          "./fr.js": 34916,
          "./fy": 82949,
          "./fy.js": 82949,
          "./ga": 80932,
          "./ga.js": 80932,
          "./gd": 82671,
          "./gd.js": 82671,
          "./gl": 95687,
          "./gl.js": 95687,
          "./gom-deva": 67330,
          "./gom-deva.js": 67330,
          "./gom-latn": 7021,
          "./gom-latn.js": 7021,
          "./gu": 78728,
          "./gu.js": 78728,
          "./he": 28211,
          "./he.js": 28211,
          "./hi": 15487,
          "./hi.js": 15487,
          "./hr": 94106,
          "./hr.js": 94106,
          "./hu": 14147,
          "./hu.js": 14147,
          "./hy-am": 23862,
          "./hy-am.js": 23862,
          "./id": 78825,
          "./id.js": 78825,
          "./is": 57612,
          "./is.js": 57612,
          "./it": 9497,
          "./it-ch": 75653,
          "./it-ch.js": 75653,
          "./it.js": 9497,
          "./ja": 2209,
          "./ja.js": 2209,
          "./jv": 85668,
          "./jv.js": 85668,
          "./ka": 6904,
          "./ka.js": 6904,
          "./kk": 2138,
          "./kk.js": 2138,
          "./km": 81660,
          "./km.js": 81660,
          "./kn": 88613,
          "./kn.js": 88613,
          "./ko": 57894,
          "./ko.js": 57894,
          "./ku": 28468,
          "./ku-kmr": 57123,
          "./ku-kmr.js": 57123,
          "./ku.js": 28468,
          "./ky": 91808,
          "./ky.js": 91808,
          "./lb": 47070,
          "./lb.js": 47070,
          "./lo": 56505,
          "./lo.js": 56505,
          "./lt": 53656,
          "./lt.js": 53656,
          "./lv": 83746,
          "./lv.js": 83746,
          "./me": 42486,
          "./me.js": 42486,
          "./mi": 82,
          "./mi.js": 82,
          "./mk": 14792,
          "./mk.js": 14792,
          "./ml": 10845,
          "./ml.js": 10845,
          "./mn": 46939,
          "./mn.js": 46939,
          "./mr": 5575,
          "./mr.js": 5575,
          "./ms": 81424,
          "./ms-my": 43179,
          "./ms-my.js": 43179,
          "./ms.js": 81424,
          "./mt": 30341,
          "./mt.js": 30341,
          "./my": 72834,
          "./my.js": 72834,
          "./nb": 75292,
          "./nb.js": 75292,
          "./ne": 23753,
          "./ne.js": 23753,
          "./nl": 53922,
          "./nl-be": 77542,
          "./nl-be.js": 77542,
          "./nl.js": 53922,
          "./nn": 81304,
          "./nn.js": 81304,
          "./oc-lnc": 41156,
          "./oc-lnc.js": 41156,
          "./pa-in": 17851,
          "./pa-in.js": 17851,
          "./pl": 66636,
          "./pl.js": 66636,
          "./pt": 13252,
          "./pt-br": 95189,
          "./pt-br.js": 95189,
          "./pt.js": 13252,
          "./ro": 5451,
          "./ro.js": 5451,
          "./ru": 981,
          "./ru.js": 981,
          "./sd": 49139,
          "./sd.js": 49139,
          "./se": 24684,
          "./se.js": 24684,
          "./si": 85448,
          "./si.js": 85448,
          "./sk": 61682,
          "./sk.js": 61682,
          "./sl": 17595,
          "./sl.js": 17595,
          "./sq": 61360,
          "./sq.js": 61360,
          "./sr": 45897,
          "./sr-cyrl": 80616,
          "./sr-cyrl.js": 80616,
          "./sr.js": 45897,
          "./ss": 15034,
          "./ss.js": 15034,
          "./sv": 78213,
          "./sv.js": 78213,
          "./sw": 47494,
          "./sw.js": 47494,
          "./ta": 48387,
          "./ta.js": 48387,
          "./te": 90951,
          "./te.js": 90951,
          "./tet": 83675,
          "./tet.js": 83675,
          "./tg": 99753,
          "./tg.js": 99753,
          "./th": 59844,
          "./th.js": 59844,
          "./tk": 84429,
          "./tk.js": 84429,
          "./tl-ph": 54645,
          "./tl-ph.js": 54645,
          "./tlh": 56946,
          "./tlh.js": 56946,
          "./tr": 8630,
          "./tr.js": 8630,
          "./tzl": 79480,
          "./tzl.js": 79480,
          "./tzm": 13839,
          "./tzm-latn": 36313,
          "./tzm-latn.js": 36313,
          "./tzm.js": 13839,
          "./ug-cn": 26648,
          "./ug-cn.js": 26648,
          "./uk": 24192,
          "./uk.js": 24192,
          "./ur": 8335,
          "./ur.js": 8335,
          "./uz": 21351,
          "./uz-latn": 60785,
          "./uz-latn.js": 60785,
          "./uz.js": 21351,
          "./vi": 9541,
          "./vi.js": 9541,
          "./x-pseudo": 309,
          "./x-pseudo.js": 309,
          "./yo": 21512,
          "./yo.js": 21512,
          "./zh-cn": 98562,
          "./zh-cn.js": 98562,
          "./zh-hk": 7374,
          "./zh-hk.js": 7374,
          "./zh-mo": 87107,
          "./zh-mo.js": 87107,
          "./zh-tw": 34518,
          "./zh-tw.js": 34518,
        };
        function _(_) {
          var _ = _(_);
          return __webpack_require__(_);
        }
        function _(_) {
          if (!__webpack_require__._(_, _)) {
            var _ = new Error("Cannot find module '" + _ + "'");
            throw ((_.code = "MODULE_NOT_FOUND"), _);
          }
          return _[_];
        }
        (_.keys = function () {
          return Object.keys(_);
        }),
          (_.resolve = _),
          (module.exports = _),
          (_._ = 61738);
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHdpZHRoPSIxNDAwcHgiIGhlaWdodD0iMTQwOXB4IiB2aWV3Qm94PSIwIDE4MDEuNSAxNDAwIDE0MDkiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAxODAxLjUgMTQwMCAxNDA5IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggaWQ9Imljb25tb25zdHItbGluay0xXzFfIiBmaWxsPSIjRkZGRkZGIiBkPSJNMzYyLjM1MywyMzEwLjU4OGMxNDguMjM1LTE0OC4yMzUsMzg3LjA2LTE0OC4yMzUsNTI3LjA2LDAKCWMxNi40NzEsMTYuNDcxLDMyLjk0MSw0MS4xNzcsNDkuNDExLDU3LjY0N0w4MDcuMDU5LDI1MDBjLTQxLjE3Ni04Mi4zNTMtMTMxLjc2NS0xMzEuNzY1LTIyMi4zNTMtMTE1LjI5NAoJYy00MS4xNzcsOC4yMzUtNzQuMTE4LDI0LjcwNi05OC44MjMsNDkuNDExbC0yNDcuMDU5LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy03NC4xMTgsMTk3LjY0NiwwLDI4MAoJYzc0LjExOCw3NC4xMTcsMTk3LjY0Nyw3NC4xMTcsMjgwLDBsMCwwbDc0LjExOC03NC4xMThjNzQuMTE3LDI0LjcwNiwxNDguMjM1LDQxLjE3NywyMjIuMzUzLDMyLjk0MWwtMTcyLjk0LDE3Mi45NDEKCWMtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNiwxNDguMjM1LTUyNy4wNiwwcy0xNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5QzEwNy4wNTksMjU1Ny42NDcsMzYyLjM1MywyMzEwLjU4OCwzNjIuMzUzLDIzMTAuNTg4egoJIE03NTcuNjQ2LDE5MDcuMDU5TDU5Mi45NDEsMjA4MGM3NC4xMTctOC4yMzUsMTQ4LjIzNSw4LjIzNSwyMTQuMTE3LDMyLjk0MWw3NC4xMTgtNzQuMTE4Yzc0LjExNy03NC4xMTcsMTk3LjY0Ni03NC4xMTcsMjgwLDAKCWM4Mi4zNTMsNzQuMTE4LDc0LjExNywxOTcuNjQ3LDAsMjgwbC0yNTUuMjk0LDI0Ny4wNmMtNzQuMTE4LDc0LjExNy0xOTcuNjQ3LDc0LjExNy0yODAsMAoJYy04LjIzNS0xNi40NzEtMjQuNzA2LTQxLjE3Ny0zMi45NDEtNjUuODgzbC0xMzEuNzY1LDEzMS43NjVjMTYuNDcxLDI0LjcwNiwzMi45NCw0MS4xNzcsNDkuNDExLDU3LjY0NwoJYzE0OC4yMzUsMTQ4LjIzNSwzODcuMDU5LDE0OC4yMzUsNTI3LjA2LDBsMCwwbDI0Ny4wNTktMjQ3LjA2YzE0OC4yMzUtMTQ4LjIzNSwxNDguMjM1LTM4Ny4wNTksMC01MjcuMDU5CglTOTA1Ljg4MywxNzY3LjA1OSw3NTcuNjQ2LDE5MDcuMDU5TDc1Ny42NDYsMTkwNy4wNTlMNzU3LjY0NiwxOTA3LjA1OXoiLz4KPC9zdmc+Cg==";
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
        });
        const _ =
          __webpack_require__._ +
          "images/applications/store/reddit_large.png?v=valveisgoodatcaching";
      },
    },
  ]);
})();
