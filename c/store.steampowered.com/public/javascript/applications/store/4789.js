"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [4789],
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
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = (__webpack_require__("chunkid"), __webpack_require__("chunkid")),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_instanceid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_instanceid: {
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
          return "CClientComm_GetClientLogonInfo_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.protocol_version || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  protocol_version: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  _: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  machine_name: {
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
          return "CClientComm_GetClientLogonInfo_Response";
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
          return "CClientComm_GetAllClientLogonInfo_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.sessions || _._(_._()),
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
                  sessions: {
                    _: 1,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  refetch_interval_sec: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_GetAllClientLogonInfo_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_instanceid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_instanceid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  protocol_version: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  os_name: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  machine_name: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  os_type: {
                    _: 5,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  device_type: {
                    _: 6,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  realm: {
                    _: 7,
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
          return "CClientComm_GetAllClientLogonInfo_Response_Session";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_instanceid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_instanceid: {
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
          return "CClientComm_GetClientInfo_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.package_version || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [7, 10], null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  package_version: {
                    _: 1,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  _: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  machine_name: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  ip_public: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  ip_private: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  bytes_available: {
                    _: 6,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  running_games: {
                    _: 7,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  protocol_version: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  clientcomm_version: {
                    _: 9,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  local_users: {
                    _: 10,
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
          return "CClientComm_ClientData";
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
                  extra_info: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  time_running_sec: {
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
          return "CClientComm_ClientData_RunningGames";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_info || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_info: {
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
          return "CClientComm_GetClientInfo_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.fields || _._(_._()),
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
                  fields: {
                    _: 1,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  filters: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  client_instanceid: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  include_client_info: {
                    _: 4,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  language: {
                    _: 5,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  filter_appids: {
                    _: 6,
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
          return "CClientComm_GetClientAppList_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.bytes_available || _._(_._()),
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
                  bytes_available: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  apps: {
                    _: 2,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  client_info: {
                    _: 3,
                    _: _,
                  },
                  refetch_interval_sec_full: {
                    _: 4,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  refetch_interval_sec_changing: {
                    _: 5,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  refetch_interval_sec_updating: {
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
          return "CClientComm_GetClientAppList_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.appid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, [17], null);
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
                  app: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  category: {
                    _: 3,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  app_type: {
                    _: 4,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  num_downloading: {
                    _: 8,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  bytes_download_rate: {
                    _: 11,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  bytes_downloaded: {
                    _: 12,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  bytes_to_download: {
                    _: 13,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  dlcs: {
                    _: 17,
                    _: _,
                    _: !0,
                    _: !0,
                  },
                  favorite: {
                    _: 18,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  auto_update: {
                    _: 19,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  installed: {
                    _: 20,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  download_paused: {
                    _: 21,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  changing: {
                    _: 22,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  available_on_platform: {
                    _: 23,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  bytes_staged: {
                    _: 24,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  bytes_to_stage: {
                    _: 25,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  bytes_required: {
                    _: 26,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  source_buildid: {
                    _: 27,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  target_buildid: {
                    _: 28,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  estimated_seconds_remaining: {
                    _: 29,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  queue_position: {
                    _: 30,
                    _: -1,
                    _: _._.readInt32,
                    _: _._.writeInt32,
                  },
                  uninstalling: {
                    _: 31,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  rt_time_scheduled: {
                    _: 32,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  running: {
                    _: 33,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  update_percentage: {
                    _: 34,
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
          return "CClientComm_GetClientAppList_Response_AppData";
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
                  app: {
                    _: 2,
                    _: _._.readString,
                    _: _._.writeString,
                  },
                  installed: {
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
          return "CClientComm_GetClientAppList_Response_AppData_DLCData";
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
                    _: !0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  client_instanceid: {
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
          return "CClientComm_InstallClientApp_Request";
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
          return "CClientComm_InstallClientApp_Response";
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
                    _: !0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  client_instanceid: {
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
          return "CClientComm_UninstallClientApp_Request";
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
          return "CClientComm_UninstallClientApp_Response";
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
                    _: !0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  action: {
                    _: 2,
                    _: !0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  client_instanceid: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_SetClientAppUpdateState_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_instanceid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_instanceid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  appid: {
                    _: 2,
                    _: !0,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  query_params: {
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
          return "CClientComm_LaunchClientApp_Request";
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
          return "CClientComm_LaunchClientApp_Response";
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
          return "CClientComm_SetClientAppUpdateState_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.client_instanceid || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  client_instanceid: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  enable: {
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CClientComm_EnableOrDisableDownloads_Request";
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
          return "CClientComm_EnableOrDisableDownloads_Response";
        }
      }
      !(function (_) {
        (_.GetClientLogonInfo = function (_, _) {
          return _.SendMsg(
            "ClientComm.GetClientLogonInfo#1",
            (0, _._)(_, _),
            _,
            {
              bConstMethod: !0,
              ePrivilege: 1,
            },
          );
        }),
          (_.GetAllClientLogonInfo = function (_, _) {
            return _.SendMsg(
              "ClientComm.GetAllClientLogonInfo#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.GetClientInfo = function (_, _) {
            return _.SendMsg("ClientComm.GetClientInfo#1", (0, _._)(_, _), _, {
              bConstMethod: !0,
              ePrivilege: 1,
            });
          }),
          (_.GetClientAppList = function (_, _) {
            return _.SendMsg(
              "ClientComm.GetClientAppList#1",
              (0, _._)(_, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }),
          (_.InstallClientApp = function (_, _) {
            return _.SendMsg(
              "ClientComm.InstallClientApp#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.UninstallClientApp = function (_, _) {
            return _.SendMsg(
              "ClientComm.UninstallClientApp#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.LaunchClientApp = function (_, _) {
            return _.SendMsg(
              "ClientComm.LaunchClientApp#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.SetClientAppUpdateState = function (_, _) {
            return _.SendMsg(
              "ClientComm.SetClientAppUpdateState#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.EnableOrDisableDownloads = function (_, _) {
            return _.SendMsg(
              "ClientComm.EnableOrDisableDownloads#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          });
      })(_ || (_ = {}));
      const _ = "RemoteDownload_OnlineClient",
        _ = "RemoteDownload_ClientAppList",
        _ = "RemoteDownload_ClientAppData";
      class _ extends Error {
        constructor(_, _) {
          super(_), (this.result = _);
        }
        result;
      }
      function _() {
        const _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          queryKey: [_, _],
          queryFn: async () => {
            const _ = _._.Init(_),
              _ = await _.GetAllClientLogonInfo(_, _);
            if (__webpack_require__.GetEResult() !== _._.k_EResultOK)
              throw (
                (console.error(
                  "Received error from GetAllClientLogonInfo",
                  __webpack_require__.GetEResult(),
                  __webpack_require__.Hdr().transport_error(),
                ),
                new Error(
                  `Error from GetAllClientLogonInfo: ${__webpack_require__.GetEResult()}`,
                ))
              );
            const _ = [];
            for (const _ of __webpack_require__.Body().sessions())
              _.device_type() !== _._.k_EGamingDeviceType_Unknown &&
                _.push(_.toObject());
            return {
              sessions: _,
              refetchInterval:
                __webpack_require__.Body().refetch_interval_sec() || 300,
            };
          },
          staleTime: 3e5,
          refetchInterval: (_) => 1e3 * (_.state.data?.refetchInterval || 300),
        });
      }
      class _ {
        constructor(_) {
          Object.assign(this, _.toObject()),
            (this.bytes_to_download = parseInt(_.bytes_to_download() ?? "0")),
            (this.bytes_downloaded = parseInt(_.bytes_downloaded() ?? "0")),
            (this.bytes_staged = parseInt(_.bytes_staged() ?? "0")),
            (this.bytes_to_stage = parseInt(_.bytes_to_stage() ?? "0")),
            (this.bytes_required = parseInt(_.bytes_required() ?? "0"));
        }
        appid;
        app;
        category;
        app_type;
        num_downloading;
        bytes_download_rate;
        bytes_downloaded;
        bytes_to_download;
        favorite;
        auto_update;
        installed;
        download_paused;
        changing;
        available_on_platform;
        bytes_staged;
        bytes_to_stage;
        bytes_required;
        source_buildid;
        target_buildid;
        estimated_seconds_remaining;
        queue_position;
        uninstalling;
        rt_time_scheduled;
        update_percentage;
        BIsDownloading() {
          return void 0 !== this.num_downloading && this.num_downloading > 0;
        }
        SetDownloading() {
          (this.num_downloading = 1), (this.download_paused = !1);
        }
        SetPaused(_) {
          (this.download_paused = _), (this.num_downloading = _ ? 0 : 1);
        }
        BIsAtTopOfQueue() {
          return 0 === this.queue_position;
        }
        BIsPaused() {
          return (
            !!this.download_paused &&
            (this.bytes_downloaded < this.bytes_to_download ||
              this.bytes_staged < this.bytes_to_stage ||
              -1 != this.queue_position)
          );
        }
        BHasPendingUpdate() {
          return (
            !this.BIsDownloading() &&
            !this.download_paused &&
            (this.bytes_downloaded < this.bytes_to_download ||
              this.bytes_staged < this.bytes_to_stage)
          );
        }
        GetPercentComplete() {
          return this.update_percentage
            ? this.update_percentage
            : this.bytes_to_download
              ? Math.floor(
                  (100 * this.bytes_downloaded) / this.bytes_to_download,
                )
              : 0;
        }
      }
      async function _(_, _, _) {
        const _ = _.client_instanceid,
          _ = _._.Init(_);
        _.Body().set_fields("games"),
          _.Body().set_filters(_),
          _.Body().set_client_instanceid(_),
          _.Body().set_include_client_info(!0);
        const _ = await _.GetClientAppList(_, _);
        if (_.GetEResult() !== _._.k_EResultOK)
          throw (
            (console.error(
              "Received error from GetClientAppList",
              _.GetEResult(),
              _.Hdr().transport_error(),
            ),
            new _(
              `Error from GetClientAppList: ${_.GetEResult()}`,
              _.GetEResult(),
            ))
          );
        const _ = new Map();
        for (const _ of _.Body().apps()) {
          const _ = new _(_);
          _.set(_.appid(), _);
        }
        return {
          session: _,
          mapApps: _,
          clientInfo: _.Body().client_info()?.toObject(),
          refetchIntervals: {
            full: _.Body().refetch_interval_sec_full() || 3600,
            changing: _.Body().refetch_interval_sec_changing() || 60,
            updating: _.Body().refetch_interval_sec_updating() || 10,
          },
        };
      }
      function _(_, _, _) {
        return [_, _, _, _];
      }
      function _(_, _ = !0) {
        const _ = _(),
          _ = (0, _._)(),
          _ = (0, _._)(),
          _ = (_) => {
            _ &&
              ((_.result != _._.k_EResultNotLoggedOn &&
                _.result != _._.k_EResultTimeout) ||
                __webpack_require__.refetch());
          },
          _ = (0, _._)({
            queries: (_.data?.sessions || []).map((_) => ({
              queryKey: _(_, _.client_instanceid, "none"),
              queryFn: async () => _(_, _, "none"),
              staletime: 36e5,
              refetchInterval: (_) =>
                1e3 * (_.state.data?.refetchIntervals.full || 3600),
              enabled: _.isSuccess && !_.isFetching,
              onError: _,
              retry: _,
            })),
          }),
          _ = (0, _.useCallback)(
            (_) => {
              if (!_) return _;
              const _ = new Map(
                Array.from(_?.mapApps.entries() ?? []).filter(_),
              );
              return {
                ..._,
                mapApps: _,
              };
            },
            [_],
          ),
          _ = (0, _._)(),
          _ = (0, _._)({
            queries: (_.data?.sessions || []).map((_, _) => ({
              queryKey: _(_, _.client_instanceid, "changing"),
              queryFn: async () =>
                (async function (_, _, _, _) {
                  if (!_) return;
                  const _ = await _(_, _, _);
                  for (const [_, _] of _.mapApps) _.mapApps.set(_, _);
                  return {
                    ..._,
                    mapApps: _.mapApps,
                  };
                })(_, _, "changing", _[_].data),
              enabled: _[_].isSuccess && !_[_].isFetching,
              staletime: 1e4,
              select: _,
              refetchInterval: (_) => {
                const _ = _.state.data;
                if (!_) return 6e4;
                let _ = !1;
                for (const _ of _.mapApps.values())
                  if (_.BIsDownloading() || _.uninstalling) {
                    _ = !0;
                    break;
                  }
                const _ = _.refetchIntervals;
                return 1e3 * (_ ? _.updating : _.changing);
              },
              onError: _,
              retry: _,
            })),
          });
        return {
          rgQueries: _.map((_, _) =>
            _[_].isError && !_[_].isFetching ? _[_] : _,
          ),
          refetch: () => {
            for (const _ of _.data?.sessions || []) {
              const _ = _(_, _.client_instanceid, "changing");
              _.removeQueries({
                queryKey: _,
              });
            }
            for (const _ of _) _.refetch();
          },
        };
      }
      function _(_, _) {
        return [_, _, _];
      }
      function _(_, _ = !0) {
        const _ = (0, _._)(),
          { rgQueries: _ } = _(void 0, _);
        return (0, _._)({
          queryKey: _(_, _),
          queryFn: () => {
            const _ = new Map();
            for (const _ of _)
              if (_.isSuccess) {
                const _ = _.data?.session?.client_instanceid,
                  _ = _.data?.mapApps,
                  _ = _?.get(_);
                _ &&
                  _.set(_, {
                    session: _.data.session,
                    app: _,
                    clientInfo: _.data.clientInfo,
                  });
              }
            return _;
          },
          enabled: _.reduce((_, _) => _ && _.isSuccess && !_.isFetching, !0),
          staleTime: 0,
          gcTime: 0,
        });
      }
      function _(_, _, _) {
        const _ = (0, _._)(),
          _ = _(_),
          _ = (0, _._)(),
          _ = (0, _._)();
        return (0, _._)({
          mutationFn: async () => {
            const _ = _._.Init(_);
            __webpack_require__.Body().set_appid(_),
              __webpack_require__.Body().set_client_instanceid(_);
            const _ = await _.InstallClientApp(_, _);
            if (_.GetEResult() != _._.k_EResultOK)
              throw (
                (console.error(
                  "Received error from InstallClientApp",
                  _.GetEResult(),
                ),
                new Error(`Error from InstallClientApp: ${_.GetEResult()}`))
              );
            const _ = _?.data;
            _ && _.get(_) && _.get(_).app.SetDownloading(),
              _.setQueryData(_(_, _), _),
              _.refetch();
          },
          onSuccess: _,
        });
      }
      async function _(_, _, _, _) {
        const _ = _._.Init(_);
        _.Body().set_appid(_),
          _.Body().set_client_instanceid(_),
          _.Body().set_query_params(_);
        const _ = await _.LaunchClientApp(_, _);
        if (_.GetEResult() !== _._.k_EResultOK)
          throw (
            (console.error(
              "Received error from LaunchClientApp",
              _.GetEResult(),
              _.Hdr().transport_error(),
            ),
            new Error(`Error from LaunchClientApp: ${_.GetEResult()}`))
          );
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
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
        _ = __webpack_require__("chunkid");
      function _(_) {
        return _.createElement(
          _._,
          {
            onEscKeypress: _.closeModal,
            bDisableBackgroundDismiss: !0,
          },
          _.createElement(_, {
            redirectURL: _.redirectURL,
            guestOption: _.guestOption,
          }),
        );
      }
      function _(_) {
        const { redirectURL: _ = window.location.href } = _;
        return _.createElement(
          _._,
          {
            active: !0,
          },
          _.createElement(_, {
            redirectURL: _,
          }),
        );
      }
      function _() {
        (0, _._)(
          _.createElement(_, {
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
          _.createElement(_, {
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
        const { redirectURL: _, guestOption: __webpack_require__ } = _,
          [_] = (0, _.useState)(
            new _._(_._.WEBAPI_BASE_URL).GetAnonymousServiceTransport(),
          ),
          [_, _] = (0, _.useState)(!1);
        return _.createElement(
          "div",
          null,
          _
            ? _.createElement(_._, null)
            : _.createElement(
                _._,
                {
                  autoFocus: !0,
                  transport: _,
                  platform: _._.k_EAuthTokenPlatformType_WebBrowser,
                  onComplete: (_) => {
                    _ == _._.k_PrimaryDomainFail
                      ? _(!0)
                      : window.location.assign(_);
                  },
                  redirectUrl: _,
                  theme: "modal",
                },
                __webpack_require__ &&
                  _.createElement(_._, {
                    redirectURL: _,
                  }),
              ),
        );
      }
    },
  },
]);
