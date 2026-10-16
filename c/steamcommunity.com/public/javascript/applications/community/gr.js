(() => {
  (self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
    [13156],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports),
          __webpack_require__.__webpack_require__(module_exports, {
            GameRecordingClipContent: () => _,
            default: () => _,
            useTimelineLoaderForCommunityClip: () => _,
          });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__.__webpack_require__(_),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.representation_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [11], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    representation_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    horizontal_resolution: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    vertical_resolution: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    frame_rate: {
                      _: 5,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    bandwidth: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    audio_sample_rate: {
                      _: 7,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    frame_rate_string: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    codec: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    audio_channel_config: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    segment_info: {
                      _: 11,
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
            return "CMsgVideoGameRecordingRepresentation";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.component_name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    component_name: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    contents: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    segment_size: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    file_type: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    representations: {
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
            return "CMsgVideoGameRecordingComponent";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.steamid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [7], null);
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
                    app_id: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_segments: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    length_milliseconds: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    segment_duration_timescale: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    segment_duration: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    components: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    start_time_ms: {
                      _: 8,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_offset_in_timeline_ms: {
                      _: 9,
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
            return "CMsgVideoGameRecordingDef";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.segment_number || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    segment_number: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    segment_size_bytes: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    component_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    representation_name: {
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
            return "CVideo_GameRecordingSegmentInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.segment_info || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    segment_info: {
                      _: 1,
                      _: _,
                    },
                    url_host: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url_path: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    use_https: {
                      _: 4,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    request_headers: {
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
            return "CVideo_GameRecordingSegmentUploadInfo";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_GameRecordingSegmentUploadInfo_HTTPHeaders";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        var __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.video_manager_clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    video_manager_clip_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    video_manager_video_id: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    server_timeline_id: {
                      _: 3,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    manifest_url: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    duration_ms: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_offset_ms: {
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
            return "CVideoManagerClipID";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [9], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    gameid: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    date_recorded: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    total_file_size_bytes: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    video_ids: {
                      _: 9,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    owner_steamid: {
                      _: 10,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    upload_complete: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    duration_ms: {
                      _: 12,
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
            return "CGameRecordingClip";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip: {
                      _: 2,
                      _: _,
                    },
                    video_def: {
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
            return "CGameRecording_CreateShareClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip: {
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
            return "CGameRecording_CreateShareClip_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
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
            return "CGameRecording_DeleteSharedClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_DeleteSharedClip_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
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
            return "CGameRecording_GetSingleSharedClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip: {
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
            return "CGameRecording_GetSingleSharedClip_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recording_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recording_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    component_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    representation_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    segments_to_store: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CVideo_BeginGameRecordingSegmentsUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.segments_needed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    segments_needed: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    call_again: {
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
            return "CVideo_BeginGameRecordingSegmentsUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recording_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recording_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    component_name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    representation_name: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    first_segment_number: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    num_segments: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    upload_result: {
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
            return "CVideo_CommitGameRecordingSegmentsUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CVideo_CommitGameRecordingSegmentsUpload_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recording_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recording_id: {
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
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.segments_needed || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    segments_needed: {
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
            return "CVideo_GameRecordingGetNextBatchOfSegmentsToUpload_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recording_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recording_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    segments_uploaded: {
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
            return "CVideo_GameRecordingCommitSegmentUploads_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CVideo_GameRecordingCommitSegmentUploads_Response";
          }
        }
        var __webpack_require__;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "GameRecordingClip.CreateShareClip#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.CreateShareClip = _;
          function _(_, _, _) {
            return _.SendMsg(
              "GameRecordingClip.DeleteSharedClip#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.DeleteSharedClip = _;
          function _(_, _, _) {
            return _.SendMsg(
              "GameRecordingClip.GetSingleSharedClip#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 2,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.GetSingleSharedClip = _;
        })(_ || (_ = {}));
        var __webpack_require__;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "VideoClip.BeginGameRecordingSegmentsUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.BeginGameRecordingSegmentsUpload = _;
          function _(_, _, _) {
            return _.SendMsg(
              "VideoClip.CommitGameRecordingSegmentsUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.CommitGameRecordingSegmentsUpload = _;
          function _(_, _, _) {
            return _.SendMsg(
              "VideoClip.GetNextBatchOfSegmentsToUpload#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.GetNextBatchOfSegmentsToUpload = _;
          function _(_, _, _) {
            return _.SendMsg(
              "VideoClip.CommitSegmentUploads#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.CommitSegmentUploads = _;
        })(_ || (_ = {}));
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        let __webpack_require__ = null;
        function _(_) {
          if (_) {
            console.error("Attempt to set timeline marker hook a second time");
            return;
          }
          _ = _;
        }
        function _(_, _) {
          return _
            ? _(_, _)
            : (console.error(
                "useGameMarkerFromID called in a context where the hook isn't defined.",
              ),
              null);
        }
        function _() {
          return window.g_GRS;
        }
        async function _(_, _, _) {
          if (!_()) {
            const [{ CGameRecordingStore: _ }] = await Promise.all([
              __webpack_require__
                ._("chunkid")
                .then(__webpack_require__.bind(__webpack_require__, "chunkid")),
            ]);
            _ && _(_);
            let _ = new _();
            await _.Init(_, _), (window.g_GRS = _);
          }
        }
        function _() {
          if (_() != null) {
            const _ = _();
            return {
              bLoading: _.BLoadingAppsWithBackgroundVideo(),
              rgApps: _.GetAppsWithBackgroundVideo(),
            };
          }
          return {
            bLoading: !1,
            rgApps: [],
          };
        }
        function _() {
          const [_, _] = (0, _.useState)(_());
          return (0, _.useEffect)(() => (0, _._)(_, _), []), _;
        }
        function _(_) {
          const { bLoading: _, rgApps: _ } = _();
          return {
            bLoading: _,
            app: (0, _.useMemo)(() => _.find((_) => _.game_id === _), [_, _]),
          };
        }
        function _(_) {
          return _().GetTimelineLoaderForGame(_);
        }
        function _(_) {
          return _().GetTimelineLoaderForClip(_);
        }
        function _(_) {
          return _().GetTimelineLoaderForSharedClip(_);
        }
        function _(_) {
          var _, _;
          return _() != null
            ? {
                bLoading: (_ = _()) == null ? void 0 : _.BLoadingClips(),
                rgClipHandles: (_ = _()) == null ? void 0 : _.GetClipIDs(_),
              }
            : {
                bLoading: !1,
                rgClipHandles: [],
              };
        }
        function _(_) {
          const [_, _] = useState(() => _(_));
          return useEffect(() => (_(_(_)), reaction(() => _(_), _)), [_]), _;
        }
        function _(_) {
          return useObserver(() => {
            var _;
            return (_ = _()) == null ? void 0 : _.GetClipSummaries(_);
          });
        }
        function _(_) {
          var _;
          return (_ = _()) == null ? void 0 : _.GetClipSummary(_);
        }
        function _(_) {
          return _() != null && _ ? _().GetClipSummariesForGame(_) || [] : [];
        }
        function _(_) {
          return useObserver(() => {
            var _;
            return (_ = _()) == null ? void 0 : _.GetClipSummary(_);
          });
        }
        function _(_) {
          return useObserver(() => {
            var _;
            return _
              ? ((_ = _()) == null ? void 0 : _.GetClipSummariesForGame(_)) ||
                  []
              : [];
          });
        }
        function _(_, _, _, _, _, _) {
          return _() != null
            ? _().LoadThumbnails(_, _, _, _, _, _ != null ? _ : !0)
            : null;
        }
        function _() {
          return _() != null
            ? {
                fnSaveClip: _().SaveClip,
              }
            : {};
        }
        function _() {
          return _() != null
            ? {
                fnDeleteClip: _().DeleteClip,
              }
            : {};
        }
        function _() {
          return _() != null
            ? {
                fnUploadClip: _().UploadClip,
              }
            : {};
        }
        function _() {
          return _() != null
            ? {
                fnExportClip: _().ExportClip,
                fnUpdateExportPath: _().UpdateClipExportPath,
              }
            : {};
        }
        function _(_, _, _, _) {
          return _() != null ? _().TakeScreenshot(_, _, _.valMS, _) : null;
        }
        function _(_) {
          return useObserver(() => {
            if (_() != null) return _().GetClipExportProgress(_);
          });
        }
        function _() {
          return useObserver(() => {
            if (_() != null) return _().GetCurrentExportingClip();
          });
        }
        function _() {
          return _() != null
            ? {
                fnStartRecording: _().StartRecording,
                fnStopRecording: _().StopRecording,
              }
            : {};
        }
        function _() {
          if (_() != null) return _().SwitchRecordedGame;
        }
        function _(_, _) {
          return _() != null
            ? _().RegisterManualRecordingCallback(_, _)
            : () => {};
        }
        function _() {
          return _() != null ? _().GetRecordingState() : null;
        }
        function _() {
          return _() != null
            ? {
                fnCreateUserTimelineMarkers: _().CreateUserTimelineMarkers,
                fnUpdateUserTimelineMarkers: _().UpdateUserTimelineMarkers,
                fnRemoveUserTimelineMarker: _().RemoveUserTimelineMarker,
              }
            : null;
        }
        function _(_, _) {
          return (0, _._)(() => {
            if (_() != null) return _().GetAchievementInfo(_, _);
          });
        }
        function _() {
          return useObserver(() => {
            if (_() != null) return _().GetLastClip();
          });
        }
        function _(_) {
          return _() != null ? _().GetBestClipTitle(_) : "";
        }
        function _(_) {
          _() != null && _().ManuallyDeleteRecordingForApps(_);
        }
        function _(_, _) {
          const [_, _] = React.useState(0);
          return (
            useEffect(() => {
              _() != null &&
                _()
                  .GetTotalDiskSpaceUsage(_, _)
                  .then((_) => _(_));
            }, [_, _]),
            _
          );
        }
        function _(_, _, _, _, _) {
          return _().ReportClipShare(_, _, _, _, _);
        }
        function _(_, _, _, _, _) {
          return _().ReportClipRange(_, _, _, _, _);
        }
        function _(_) {
          switch (_) {
            default:
            case 0:
              return StorageRecordings;
            case 1:
              return StorageClips;
            case 2:
              return StorageScreenshots;
          }
        }
        async function _() {
          _() != null && (await _().CheckEnoughDiskSpace());
        }
        function _() {
          return (0, _._)(() => {
            if (_() != null) return !_().BEnoughDiskSpace();
          });
        }
        async function _() {
          return _() != null ? await _().GetAvailableDiskSpace() : 0;
        }
        async function _(_, _) {
          return await _().GetRecordingHighlights(_, _);
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _),
          __webpack_require__ = ((_) => (
            (_[(_.None = 0)] = "None"),
            (_[(_.DownloadFailed = 1)] = "DownloadFailed"),
            (_[(_.PlaybackError = 2)] = "PlaybackError"),
            (_[(_.MediaTypeError = 3)] = "MediaTypeError"),
            _
          ))(_ || {});
        class _ {
          constructor(_) {
            _(this, "m_elVideo", null),
              _(this, "m_player", null),
              _(this, "m_listeners", new _._()),
              _(this, "m_nDownloadFailureCount", 0),
              _(this, "m_bInitailized", !1),
              _(this, "m_bPaused", !1),
              _(this, "m_bAtEnd", !1),
              _(this, "m_strMediaTypeError", null),
              _(this, "m_ePlayerError", 0),
              _(this, "m_bUserInputNeeded", !1),
              _(this, "m_bMuted", !1),
              _(this, "m_bSeekReadyToPlay", !1),
              _(this, "m_bVideoElementPlaying", !1),
              _(this, "m_nPlaybackSpeed", 1),
              _(this, "m_bIsWaiting", !0),
              _(this, "m_bAutoPlay"),
              _(this, "m_bLoadedMetadata", !1),
              _(this, "m_nPlaybackTime", 0),
              _(this, "m_nVideoStartTime", 0),
              _(this, "m_nVideoDuration", 0),
              _(this, "m_nVolume", 1),
              _(this, "m_eSeekType", _._.Absolute),
              (0, _._)(this),
              (this.m_bAutoPlay = !!_);
          }
          IsPaused() {
            return this.m_bPaused;
          }
          IsAtEnd() {
            return this.m_bAtEnd;
          }
          BSeekReadyToPlay() {
            return this.m_bSeekReadyToPlay;
          }
          GetMediaTypeError() {
            return this.m_strMediaTypeError;
          }
          GetPlaybackError() {
            return this.m_ePlayerError;
          }
          GetUserInputNeeded() {
            return this.m_bUserInputNeeded;
          }
          GetPlaybackTime() {
            return this.m_eSeekType === _._.Absolute
              ? this.m_nPlaybackTime
              : this.m_nPlaybackTime - this.m_nVideoStartTime;
          }
          GetTimelineDuration() {
            return this.m_eSeekType === _._.Absolute
              ? this.m_nVideoDuration
              : this.m_nVideoDuration - this.m_nVideoStartTime;
          }
          GetVolume() {
            return this.m_nVolume;
          }
          GetMuted() {
            return this.m_bMuted;
          }
          GetMPDURL() {
            var _;
            return (_ = this.m_player) == null ? void 0 : _.GetMPDURL();
          }
          GetVideoElementCurrentTime() {
            var _;
            return (_ = this.m_elVideo) == null ? void 0 : _.currentTime;
          }
          BVideoElementPlaying() {
            return this.m_bVideoElementPlaying;
          }
          BVideoElementWaiting() {
            return this.m_bIsWaiting;
          }
          GetVideoHeight() {
            var _;
            return (
              ((_ = this.m_elVideo) == null ? void 0 : _.clientHeight) || 0
            );
          }
          GetVideoWidth() {
            var _;
            return ((_ = this.m_elVideo) == null ? void 0 : _.clientWidth) || 0;
          }
          GetLoadedMetadata() {
            return this.m_bLoadedMetadata;
          }
          Start(_, _, _, _ = _._.Absolute) {
            this.Stop(),
              (this.m_bAtEnd = !1),
              (this.m_elVideo = _),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userpausechange",
                this.OnUserPauseChange,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "playing",
                this.OnVideoPlaying,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "pause",
                this.OnVideoPause,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "timeupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "ended",
                this.OnVideoEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-ended",
                this.OnVideoEnd,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-bufferupdate",
                this.OnVideoTimeUpdate,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-downloadfailed",
                this.OnDownloadFailed,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-playbackerror",
                this.OnPlaybackError,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "valve-userinputneeded",
                this.OnUserInputNeeded,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "waiting",
                this.OnVideoWaiting,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "volumechange",
                this.OnVolumeChange,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "canplay",
                this.OnCanPlay,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "seeking",
                this.OnSeeking,
              ),
              this.m_listeners.AddEventListener(
                this.m_elVideo,
                "loadedmetadata",
                this.OnLoadedMetadata,
              ),
              (this.m_player = new _._(this.m_elVideo)),
              this.m_player.SetUserPlayChoice(this.m_bAutoPlay),
              this.m_player.PlayMPD(_),
              (this.m_bMuted = _("muted")),
              (this.m_nVolume = _("volume")),
              this.m_player.SetMuted(this.m_bMuted),
              this.m_player.SetVolume(this.m_nVolume),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_eSeekType = _);
            const _ = `seeking_${_}_${_.toFixed(3)}`;
            (0, _._)(`CGameRecordingVideo:: perf mark ${_}`),
              performance.mark(_),
              this.m_player.Seek(_, this.m_eSeekType),
              (this.m_bPaused = this.m_player.IsPaused()),
              (this.m_bInitailized = !0);
          }
          Stop() {
            this.m_listeners.Unregister(),
              this.m_player && this.m_player.Close(),
              (this.m_elVideo = null),
              (this.m_player = null),
              (this.m_bInitailized = !1),
              (this.m_bPaused = !1),
              (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              (this.m_bVideoElementPlaying = !1),
              (this.m_ePlayerError = 0),
              (this.m_bUserInputNeeded = !1),
              (this.m_nPlaybackTime = 0),
              (this.m_nVideoStartTime = 0),
              (this.m_nVideoDuration = 0),
              (this.m_bLoadedMetadata = !1),
              (this.m_bIsWaiting = !0);
          }
          async UpdateMPD() {
            var _;
            await ((_ = this.m_player) == null ? void 0 : _.UpdateMPD());
          }
          IsInitialized() {
            return this.m_bInitailized;
          }
          OnCanPlay() {
            (this.m_bSeekReadyToPlay = !0), (this.m_bAtEnd = !1);
          }
          OnUserPauseChange() {
            this.m_bPaused = this.m_player.IsPaused();
          }
          OnVideoPlaying() {
            (this.m_bVideoElementPlaying = !0),
              (this.m_bIsWaiting = !1),
              this.SetPlaybackSpeed(this.m_nPlaybackSpeed),
              (0, _._)("video playing");
          }
          OnVideoPause() {
            (this.m_bVideoElementPlaying = !1), (0, _._)("video paused");
          }
          OnVideoTimeUpdate() {
            (this.m_nVideoStartTime =
              this.m_player.GetAvailableVideoStartTime()),
              (this.m_nVideoDuration = this.m_player.GetBufferedLiveEdgeTime()),
              (this.m_nPlaybackTime = this.m_player.GetCurrentPlayTime());
          }
          OnVideoEnd() {
            (this.m_bVideoElementPlaying = !1),
              (this.m_bAtEnd = !0),
              (0, _._)("video ended");
          }
          OnSeeking() {
            (0, _._)("video on seeking"),
              (this.m_bVideoElementPlaying = !1),
              (this.m_bIsWaiting = !0),
              (this.m_bAtEnd = !1);
          }
          OnLoadedMetadata() {
            this.m_bLoadedMetadata = !0;
          }
          async OnDownloadFailed(_) {
            var _;
            if ((_.detail || _._.PlaybackError) == _._.UnsupportedMediaType) {
              (0, _._)("media type error"), (this.m_ePlayerError = 3);
              return;
            }
            (0, _._)("video download failed", _.detail),
              this.m_nDownloadFailureCount < 2
                ? (await ((_ = this.m_player) == null ? void 0 : _.UpdateMPD()),
                  this.m_nDownloadFailureCount++)
                : (this.m_ePlayerError = 1);
          }
          OnPlaybackError() {
            (this.m_bVideoElementPlaying = !1),
              (0, _._)("video playback error"),
              (this.m_ePlayerError = 2);
          }
          OnUserInputNeeded() {
            (this.m_bUserInputNeeded = !0),
              !this.m_bMuted &&
                this.m_elVideo.autoplay &&
                ((0, _._)("Failed to autoplay video. Muting and trying again."),
                this.SetMute(!0),
                this.Play());
          }
          OnVolumeChange() {
            (0, _._)("volume change");
          }
          OnVideoWaiting() {
            (this.m_bIsWaiting = !0),
              (this.m_bVideoElementPlaying = !1),
              this.GetTimelineDuration() - this.GetPlaybackTime() < 1 &&
                (this.m_bAtEnd = !0);
          }
          UserInputReceived() {
            this.IsInitialized() &&
              ((this.m_bUserInputNeeded = !1), this.m_player.SeekAndPlay(0));
          }
          SetVolume(_) {
            (this.m_nVolume = _),
              _("volume", _),
              _ > 0 ? this.SetMute(!1, !0) : this.SetMute(!0, !0),
              this.IsInitialized() && this.m_player.SetVolume(_);
          }
          SetMute(_, _) {
            this.IsInitialized() && this.m_player.SetMuted(_),
              (this.m_bMuted = _),
              _ && _("muted", _);
          }
          TogglePlayPause() {
            this.IsInitialized() &&
              (this.m_player.IsPaused() ? this.Play() : this.Pause());
          }
          Play() {
            this.IsInitialized() && this.m_player.Play();
          }
          Pause() {
            this.IsInitialized() &&
              (this.m_player.Pause(), (this.m_bIsWaiting = !1));
          }
          SetPlaybackSpeed(_) {
            (this.m_nPlaybackSpeed = _),
              this.IsInitialized() && (this.m_elVideo.playbackRate = _);
          }
          GetPlaybackSpeed() {
            return this.m_nPlaybackSpeed;
          }
          Seek(_) {
            if (!this.IsInitialized()) return;
            const _ = `seeking_${this.m_player.GetMPDURL()}_${_.toFixed(3)}`;
            (this.m_bAtEnd = !1),
              (this.m_bSeekReadyToPlay = !1),
              performance.mark(_),
              (0, _._)(`CGameRecordingVideo:: perf mark ${_}`),
              (0, _._)(`CGameRecordingVideo::Seek to ${_}`),
              (this.m_nPlaybackTime = _),
              this.m_player.Seek(_, this.m_eSeekType);
          }
        }
        _([_.__webpack_require__], _.prototype, "m_bInitailized", 2),
          _([_.__webpack_require__], _.prototype, "m_bPaused", 2),
          _([_.__webpack_require__], _.prototype, "m_bAtEnd", 2),
          _([_.__webpack_require__], _.prototype, "m_strMediaTypeError", 2),
          _([_.__webpack_require__], _.prototype, "m_ePlayerError", 2),
          _([_.__webpack_require__], _.prototype, "m_bUserInputNeeded", 2),
          _([_.__webpack_require__], _.prototype, "m_bMuted", 2),
          _([_.__webpack_require__], _.prototype, "m_bSeekReadyToPlay", 2),
          _([_.__webpack_require__], _.prototype, "m_bVideoElementPlaying", 2),
          _([_.__webpack_require__], _.prototype, "m_nPlaybackSpeed", 2),
          _([_.__webpack_require__], _.prototype, "m_bIsWaiting", 2),
          _([_.__webpack_require__], _.prototype, "m_bLoadedMetadata", 2),
          _([_.__webpack_require__], _.prototype, "m_nPlaybackTime", 2),
          _([_.__webpack_require__], _.prototype, "m_nVideoStartTime", 2),
          _([_.__webpack_require__], _.prototype, "m_nVideoDuration", 2),
          _([_.__webpack_require__], _.prototype, "m_nVolume", 2),
          _([_.__webpack_require__], _.prototype, "m_eSeekType", 2),
          _([_.__webpack_require__], _.prototype, "Start", 1),
          _([_.__webpack_require__], _.prototype, "Stop", 1),
          _([_.__webpack_require__], _.prototype, "OnCanPlay", 1),
          _([_.__webpack_require__], _.prototype, "OnUserPauseChange", 1),
          _([_.__webpack_require__], _.prototype, "OnVideoPlaying", 1),
          _([_.__webpack_require__], _.prototype, "OnVideoPause", 1),
          _([_.__webpack_require__], _.prototype, "OnVideoTimeUpdate", 1),
          _([_.__webpack_require__], _.prototype, "OnVideoEnd", 1),
          _([_.__webpack_require__], _.prototype, "OnSeeking", 1),
          _([_.__webpack_require__], _.prototype, "OnLoadedMetadata", 1),
          _([_.__webpack_require__], _.prototype, "OnDownloadFailed", 1),
          _([_.__webpack_require__], _.prototype, "OnPlaybackError", 1),
          _([_.__webpack_require__], _.prototype, "OnUserInputNeeded", 1),
          _([_.__webpack_require__], _.prototype, "OnVolumeChange", 1),
          _([_.__webpack_require__], _.prototype, "OnVideoWaiting", 1),
          _([_.__webpack_require__], _.prototype, "UserInputReceived", 1);
        function _(_, _) {
          return (0, _._)((_) => (_(_), () => _()), [_]);
        }
        let __webpack_require__;
        function _() {
          if (!_) {
            let _ = window.localStorage.getItem("gameRecordingPlayer") || "{}",
              _;
            try {
              _ = JSON.parse(_);
            } catch {
              _ = {};
            }
            _ = {
              muted: _.muted || !1,
              volume: _.volume || 1,
            };
          }
          return _;
        }
        function _(_) {
          return _()[_];
        }
        function _(_, _) {
          let _ = _();
          _[_] = _;
          let _ = JSON.stringify(_);
          window.localStorage.setItem("gameRecordingPlayer", _);
        }
        const __webpack_require__ = 0,
          __webpack_require__ = 1,
          __webpack_require__ = 2,
          __webpack_require__ = 3,
          __webpack_require__ = 4;
        function _(_) {
          const { app: _ } = useRecordingActiveApp(_),
            { loader: _ } = useTimelineLoaderForGame(_),
            _ =
              (_ == null ? void 0 : _.recording_type) ===
                EGameRecordingType.k_EGameRecordingType_BackgroundRecording ||
              (_ == null ? void 0 : _.recording_type) ===
                EGameRecordingType.k_EGameRecordingType_ManualRecording,
            [_, _] = useState(null);
          if (
            (useEffect(
              () =>
                _
                  ? (_(
                      _
                        ? {
                            startTime: Date.now(),
                            startDuration: _.GetTotalRecordingDuration(),
                          }
                        : null,
                    ),
                    () => {})
                  : () => {},
              [_, _],
            ),
            useRerenderOnInterval({
              msInterval: 1e3,
              bEnabled: !!_,
            }),
            _)
          ) {
            const _ = Date.now() - _.startTime + _.startDuration,
              _ = _.GetTotalRecordingDuration();
            return Math.abs(_ - _) > 1e4
              ? Math.floor(_ / 1e3)
              : Math.floor(_ / 1e3);
          }
          return _ && _.BInitialized()
            ? Math.floor(_.GetTotalRecordingDuration() / 1e3)
            : _
              ? _.video_duration_seconds
              : 0;
        }
        var __webpack_require__ = ((_) => (
          (_.NotRunning = "NotRunning"),
          (_.NotRecording = "NotRecording"),
          (_.ManualRecording = "ManualRecording"),
          (_.BackgroundRecording = "BackgroundRecording"),
          _
        ))(_ || {});
        function _(_) {
          const { app: _ } = _(_);
          if (!_) return "NotRecording";
          switch (_.recording_type) {
            default:
            case _:
            case _:
              return "NotRecording";
            case _:
              return "ManualRecording";
            case _:
              return "BackgroundRecording";
          }
        }
        var __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _),
          __webpack_require__ = ((_) => (
            (_.Overlay = "Overlay"),
            (_.Clips = "Clips"),
            (_.Background = "Background"),
            (_.CommunityClip = "Community"),
            (_.ChatClip = "Chat"),
            (_.Partner = "Partner"),
            _
          ))(_ || {}),
          __webpack_require__ = ((_) => (
            (_.Never = "Never"), (_.Always = "Always"), (_.Manual = "Manual"), _
          ))(_ || {});
        const __webpack_require__ = 3 * _.__webpack_require__,
          __webpack_require__ = 5 * _.__webpack_require__,
          __webpack_require__ = _.__webpack_require__ + 2e3,
          __webpack_require__ = 1e3;
        class _ {
          constructor(_, _, _, _, _, _, _, _) {
            _(this, "m_gameRecordingVideo", null),
              _(this, "m_timelineLoader", null),
              _(this, "m_fnUnregisterLoader", null),
              _(this, "m_rgListeners", []),
              _(this, "m_videoRef"),
              _(this, "m_bHidePlayer", !1),
              _(this, "m_fnGetManifest"),
              _(this, "m_strRecordingID", null),
              _(this, "m_nPendingSeekSec", -1),
              _(this, "m_playbackDefinition", null),
              _(this, "m_pendingStop", null),
              _(this, "m_durationMS", (0, _._)(null)),
              _(this, "m_lastRecordingGlobalMS", (0, _._)(null)),
              _(this, "m_bWasLiveEdge", !1),
              _(this, "m_nGlobalTimelinePlaybackMS", null),
              _(this, "m_nGlobalTimelinePlaybackSec", null),
              _(this, "m_fnUnregisterAutorun", []),
              _(this, "m_eGameRecordingMode"),
              _(this, "m_rgSeekPerf", []),
              _(this, "m_eRecordingState", _.NotRecording),
              _(this, "m_eRecordingSetting", "Never"),
              _(this, "m_bGamepadMode", !1),
              _(this, "m_bControlsVisible", !0),
              _(this, "m_fnRenderGlyph"),
              _(this, "m_previousHighlightEntry", null),
              _(this, "m_nextHighlightEntry", null),
              _(this, "m_displayHighlightEntry", null),
              _(this, "m_nRelativeTimeForDisplay"),
              _(this, "m_rgClipOffsets", []),
              _(this, "m_phasePreview"),
              (0, _._)(this),
              (this.m_fnGetManifest = _),
              (this.m_gameRecordingVideo = new _(!0)),
              (this.m_eGameRecordingMode = _),
              (this.m_bGamepadMode = _),
              (this.m_playbackDefinition = _),
              _ != null && (this.m_bControlsVisible = _),
              _ === "Overlay" && (this.m_bHidePlayer = !0),
              _ && this.SetClipOffsets(_),
              (this.m_fnRenderGlyph = _),
              this.m_fnUnregisterAutorun.push(
                (0, _._)(
                  () => ({
                    bIsAtEnd: this.m_gameRecordingVideo.IsAtEnd(),
                    bIsPaused: this.m_gameRecordingVideo.IsPaused(),
                  }),
                  (_) => {
                    _.bIsAtEnd &&
                      !_.bIsPaused &&
                      this.PlayNextTimelineRecording();
                  },
                  {
                    fireImmediately: !0,
                  },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, _._)(
                  () => this.m_gameRecordingVideo.GetPlaybackTime(),
                  (_) => {
                    var _;
                    if (
                      this.m_pendingStop &&
                      this.m_pendingStop.m_strRecordingID ==
                        this.m_strRecordingID &&
                      this.m_pendingStop.m_nOffsetMS <= _ * 1e3
                    ) {
                      if (
                        (_ = this.m_playbackDefinition) != null &&
                        _.m_nLoopDurationMS
                      ) {
                        this.StartPlaybackForRange();
                        return;
                      }
                      this.m_gameRecordingVideo.Pause(),
                        (this.m_pendingStop = null);
                    }
                  },
                  {
                    fireImmediately: !0,
                  },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, _._)(
                  () => ({
                    playback: this.m_gameRecordingVideo.GetPlaybackTime(),
                    bVideoPlaying:
                      this.m_gameRecordingVideo.BVideoElementPlaying(),
                  }),
                  (_) => {
                    if (_.bVideoPlaying) {
                      const _ =
                        this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                          this.m_strRecordingID,
                          _.playback * 1e3,
                          0,
                        );
                      if (_)
                        this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
                          _.nGlobalOffsetMS > this.GetLiveEdgeMS().valMS &&
                            this.m_eGameRecordingMode === "Overlay" &&
                            this.m_gameRecordingVideo.GetPlaybackSpeed() > 1 &&
                            (console.log(
                              " hitting live edge, slow down the playback ",
                            ),
                            this.m_gameRecordingVideo.SetPlaybackSpeed(1));
                      else {
                        const _ = this.GetLiveEdgeMS();
                        isNaN(_.valMS) ||
                          (this.SetPlaytimeFromGlobalMS(_),
                          this.FocusGlobalMS(_));
                      }
                    }
                  },
                  {
                    fireImmediately: !0,
                  },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, _._)(
                  () => ({
                    globalPlaybackMS: this.m_nGlobalTimelinePlaybackMS,
                    bVideoPaused: this.m_gameRecordingVideo.IsPaused(),
                    bHidePlayer: this.m_bHidePlayer,
                  }),
                  (_) => {
                    var _, _, _, _;
                    if (
                      !((_ = this.m_timelineLoader) != null && _.BInitialized())
                    )
                      return;
                    if (_.bHidePlayer) {
                      this.SetEntriesForLiveEdge();
                      return;
                    }
                    (!this.m_previousHighlightEntry ||
                      !this.m_nextHighlightEntry ||
                      ((_ = this.m_nextHighlightEntry) != null &&
                        _.globalMS &&
                        _.globalPlaybackMS >=
                          this.m_nextHighlightEntry.globalMS.valMS) ||
                      ((_ = this.m_previousHighlightEntry) != null &&
                        _.globalMS &&
                        _.globalPlaybackMS <=
                          this.m_previousHighlightEntry.globalMS.valMS) ||
                      (_.bVideoPaused &&
                        (_ = this.m_previousHighlightEntry) != null &&
                        _.globalMS &&
                        _.globalPlaybackMS >=
                          this.m_previousHighlightEntry.globalMS.valMS + _)) &&
                      (this.CalculatePreviousHighlightEntry(
                        _.globalPlaybackMS,
                        _.bVideoPaused,
                      ),
                      this.CalculateNextHighlightEntry(
                        _.globalPlaybackMS,
                        _.bVideoPaused,
                      ));
                  },
                  {
                    fireImmediately: !0,
                  },
                ),
              ),
              this.m_fnUnregisterAutorun.push(
                (0, _._)(
                  () => this.m_gameRecordingVideo.BSeekReadyToPlay(),
                  (_) => {
                    if (_) {
                      const _ = `seeking_${this.GetManifestFromRecordingID(this.m_strRecordingID)}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`;
                      try {
                        const _ = `measure_${this.m_strRecordingID}_${this.m_gameRecordingVideo.GetPlaybackTime().toFixed(3)}`,
                          _ = performance.measure(_, _);
                        (0, _._)(
                          `CGameRecordingVideo:: perf measure ${_} duration ${_.duration}`,
                        ),
                          _ && this.m_rgSeekPerf.push(_.duration);
                      } catch (_) {
                        (0, _._)(
                          `CGameRecordingVideo:: cant measure ${_}, error: ${_}`,
                        );
                      }
                    }
                  },
                  {
                    fireImmediately: !0,
                  },
                ),
              ),
              this.SetLoader(_);
          }
          AddEventListener(_) {
            return this.m_rgListeners.push(_), () => _._(this.m_rgListeners, _);
          }
          FireEvent(_, ..._) {
            for (let _ of this.m_rgListeners) {
              let _ = _[_];
              _ instanceof Function && _.apply(_, _);
            }
          }
          dispose() {
            this.m_fnUnregisterAutorun.forEach((_) => _()),
              this.m_fnUnregisterLoader &&
                (this.m_fnUnregisterLoader(),
                (this.m_fnUnregisterLoader = null));
          }
          SetVideoElement(_) {
            if (_) {
              if (this.m_videoRef === _) return;
              if (((this.m_videoRef = _), this.m_strRecordingID)) {
                const _ =
                  this.m_nPendingSeekSec > 0 ? this.m_nPendingSeekSec : 0;
                (this.m_nPendingSeekSec = -1),
                  this.ChangePlaybackRecording(this.m_strRecordingID, _);
              } else this.TryPlayInitialTimelineVideo();
            } else this.m_gameRecordingVideo.Stop(), (this.m_videoRef = null);
          }
          OnInvalidateRecording(_, _) {
            const _ = this.m_fnGetManifest(_);
            this.m_gameRecordingVideo.GetMPDURL() == _ &&
              ((0, _._)(`Recording invalidated for ${_}. Reloading MPD`),
              this.m_gameRecordingVideo.UpdateMPD());
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              (this.m_bWasLiveEdge = !0),
              this.TryPlayInitialTimelineVideo();
            const _ = _(this.m_timelineLoader.GetGameID());
            this.SetClipOffsets(_);
          }
          OnInvalidate(_) {
            if (
              ((this.m_durationMS =
                this.m_timelineLoader.GetGlobalTimelineEndMS()),
              (this.m_lastRecordingGlobalMS =
                this.m_timelineLoader.GetEndOfRecordingsMS()),
              this.m_bHidePlayer && this.m_timelineLoader.IsActiveTimeline(_))
            ) {
              this.SetEntriesForLiveEdge();
              return;
            }
            if (this.m_previousHighlightEntry && this.m_nextHighlightEntry) {
              const _ = this.m_timelineLoader.GetTimelineMetadataIndex(_),
                _ = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_previousHighlightEntry.timelineID,
                ),
                _ = this.m_timelineLoader.GetTimelineMetadataIndex(
                  this.m_nextHighlightEntry.timelineID,
                );
              if (_ < _ || _ > _) return;
            }
            this.CalculatePreviousHighlightEntry(
              this.m_nGlobalTimelinePlaybackMS,
              this.GetGameRecordingVideo().IsPaused(),
            ),
              this.CalculateNextHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              );
          }
          OnTimelineLoaded(_) {
            this.m_previousHighlightEntry &&
              this.m_previousHighlightEntry.timelineID === _ &&
              this.CalculatePreviousHighlightEntry(
                this.m_nGlobalTimelinePlaybackMS,
                this.GetGameRecordingVideo().IsPaused(),
              ),
              this.m_nextHighlightEntry &&
                this.m_nextHighlightEntry.timelineID === _ &&
                this.CalculateNextHighlightEntry(
                  this.m_nGlobalTimelinePlaybackMS,
                  this.GetGameRecordingVideo().IsPaused(),
                );
          }
          SetEntriesForLiveEdge() {
            const _ = this.GetLiveEdgeMS();
            this.CalculatePreviousHighlightEntry(_.valMS, !0),
              (this.m_nextHighlightEntry = null);
          }
          CalculatePreviousHighlightEntry(_, _) {
            const _ = _ ? 1 : _ * this.m_gameRecordingVideo.GetPlaybackSpeed(),
              _ = this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                _ - _,
              );
            _.timelineState === "loaded" && !_.entry
              ? (this.m_previousHighlightEntry =
                  this.m_timelineLoader.GetClosestPreviousEntryInGlobalTimeline(
                    _,
                  ))
              : (this.m_previousHighlightEntry = _);
          }
          CalculateNextHighlightEntry(_, _) {
            const _ =
              this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(_);
            if (_.timelineState === "loaded" && !_.entry) {
              const _ = _
                ? 1
                : _ * this.m_gameRecordingVideo.GetPlaybackSpeed();
              this.m_nextHighlightEntry =
                this.m_timelineLoader.GetClosestNextEntryInGlobalTimeline(
                  _ - _,
                );
            } else this.m_nextHighlightEntry = _;
          }
          GetPreviousHighlightEntry() {
            return this.m_previousHighlightEntry;
          }
          GetNextHighlightEntry() {
            return this.m_nextHighlightEntry;
          }
          GetDisplayHighlightEntry() {
            return this.m_displayHighlightEntry;
          }
          SetDisplayHighlightEntry(_, _) {
            this.m_displayHighlightEntry = {
              entry: _,
              duration: _,
            };
          }
          GetPhasePreview() {
            return this.m_phasePreview;
          }
          SetPhasePreview(_) {
            this.m_phasePreview = _;
          }
          GetRelativeTimeForDisplay() {
            return this.m_nRelativeTimeForDisplay;
          }
          ClearRelativeTimeDisplay() {
            this.m_nRelativeTimeForDisplay = void 0;
          }
          GetClipOffsets() {
            return this.m_rgClipOffsets;
          }
          SetClipOffsets(_) {
            var _;
            if (!((_ = this.m_timelineLoader) != null && _.BInitialized()))
              return;
            let _ = [];
            _ &&
              _.length &&
              _.forEach((_) => {
                const _ = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                  _.start_timeline_id,
                  0,
                );
                if (!_) return;
                const _ = _.nGlobalOffsetMS + parseInt(_.start_offset_ms);
                _.push({
                  strClipID: _.clip_id,
                  nGlobalOffsetMS: _,
                  nDurationMS: parseInt(_.duration_ms),
                });
              }),
              (this.m_rgClipOffsets = _);
          }
          GetTotalMS() {
            return this.m_durationMS;
          }
          GetIsActiveTimeline(_) {
            return this.m_timelineLoader.IsActiveTimeline(_);
          }
          BIsVideoElementPaused() {
            return this.m_gameRecordingVideo.IsPaused();
          }
          BInitialized() {
            return this.m_timelineLoader.BInitialized();
          }
          GetHidePlayer() {
            return this.m_bHidePlayer;
          }
          SetHidePlayer(_) {
            _ && (this.m_strRecordingID = null), (this.m_bHidePlayer = _);
          }
          BPlayerInitialized() {
            return this.m_gameRecordingVideo.IsInitialized();
          }
          GetGameRecordingVideo() {
            return this.m_gameRecordingVideo;
          }
          GetGameID() {
            return this.m_timelineLoader.GetGameID();
          }
          GetClipID() {
            return this.m_timelineLoader.GetClipID();
          }
          GetRecordingState() {
            return this.m_eRecordingState;
          }
          SetRecordingState(_) {
            this.m_eRecordingState = _;
          }
          GetLoader() {
            return this.m_timelineLoader;
          }
          SetLoader(_) {
            this.m_timelineLoader != _ &&
              (this.m_fnUnregisterLoader && this.m_fnUnregisterLoader(),
              (this.m_timelineLoader = _),
              (this.m_fnUnregisterLoader =
                this.m_timelineLoader.AddEventListener(this)),
              _.BInitialized() && this.OnLoaderInitialized());
          }
          SetGetManifest(_) {
            this.m_fnGetManifest = _;
          }
          GetRecordingID() {
            return this.m_strRecordingID;
          }
          GetRecordingSetting() {
            return this.m_eRecordingSetting;
          }
          SetRecordingSetting(_) {
            this.m_eRecordingSetting = _;
          }
          GetRecordingMode() {
            return this.m_eGameRecordingMode;
          }
          ShouldModeShowClipControls() {
            switch (this.m_eGameRecordingMode) {
              case "Overlay":
              case "Clips":
              case "Background":
                return !0;
              default:
                return !1;
            }
          }
          CanModeAddMarker() {
            switch (this.m_eGameRecordingMode) {
              case "Overlay":
              case "Clips":
              case "Background":
                return !0;
              default:
                return !1;
            }
          }
          GetPlaybackStats() {
            if (!this.m_rgSeekPerf.length) return null;
            const _ = this.m_rgSeekPerf.length,
              _ = this.m_rgSeekPerf.reduce((_, _) => _ + _) / _,
              _ = Math.sqrt(
                this.m_rgSeekPerf
                  .map((_) => Math.pow(_ - _, 2))
                  .reduce((_, _) => _ + _) / _,
              ),
              _ = Math.max(...this.m_rgSeekPerf),
              _ = Math.min(...this.m_rgSeekPerf);
            return {
              nMean: _,
              nStdDev: _,
              nMax: _,
              nMin: _,
              nLength: _,
              nLastVal: this.m_rgSeekPerf[_ - 1],
            };
          }
          async StartPlaybackForRange() {
            let _ = this.m_timelineLoader.GetGlobalOffsetDataForTimeline(
                this.m_playbackDefinition.m_strTimelineID,
                0,
              ),
              _ = (_ == null ? void 0 : _.nGlobalOffsetMS) || 0;
            _ += this.m_playbackDefinition.m_nTimelineStartMS;
            let _;
            if (
              (this.m_playbackDefinition.m_strEntryID
                ? (_ =
                    await this.m_timelineLoader.FindRecordingAndOffsetForEntry(
                      this.m_playbackDefinition.m_strEntryID,
                    ))
                : (_ =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      _,
                    )),
              _)
            ) {
              if (this.m_playbackDefinition.m_nLoopDurationMS) {
                let _ = _ + this.m_playbackDefinition.m_nLoopDurationMS,
                  _ =
                    this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                      _,
                    );
                this.m_pendingStop = {
                  m_strRecordingID: _.strRecordingID,
                  m_nOffsetMS: _.nRecordingOffsetMS,
                };
              }
              this.UpdateGlobalPlayTime(_),
                this.ChangePlaybackRecording(
                  _.strRecordingID,
                  _.nRecordingOffsetMS / 1e3,
                );
            }
          }
          TryPlayInitialTimelineVideo() {
            if (!(!this.m_timelineLoader.BInitialized() || this.m_bHidePlayer))
              if (this.m_playbackDefinition) this.StartPlaybackForRange();
              else if (this.m_eGameRecordingMode === "Overlay") {
                const _ = this.GetLiveEdgeMS(),
                  _ =
                    this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession(),
                  _ =
                    this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                      _,
                      0,
                      0,
                    );
                _ && _.valMS < _.nGlobalOffsetMS
                  ? (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
                    this.ChangePlaybackRecording(_, 0))
                  : isNaN(_.valMS) || this.SetPlaytimeFromGlobalMS(_, !1, !0);
              } else if (this.m_eGameRecordingMode === "Background") {
                const _ =
                  this.m_timelineLoader.GetFirstRecordingOfLastTimelineSession();
                this.SetPlaytimeFromRecordingOffset(_, 0);
              } else {
                const _ = this.m_timelineLoader.GetFirstRecording();
                this.SetPlaytimeFromRecordingOffset(_, 0);
              }
          }
          GetTotalSeconds() {
            return Math.floor(
              this.m_timelineLoader.GetGlobalTimelineEndMS().valMS / 1e3,
            );
          }
          GetCurrentPlaybackGlobalMS(_ = 0) {
            const _ =
              Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3) + _;
            return this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
              this.m_strRecordingID,
              _,
              0,
            );
          }
          GetIsLiveEdge() {
            const _ = this.GetGlobalMSPlaytime().valMS || 0;
            return this.m_eGameRecordingMode === "Overlay"
              ? this.m_lastRecordingGlobalMS
                ? this.m_bWasLiveEdge
                : !1
              : this.GetTotalMS().valMS - _ < 1;
          }
          GetLiveEdgeBufferWindowStartMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const _ = Math.max(
                0,
                this.m_lastRecordingGlobalMS.valMS - _ - 1e3,
              );
              return (0, _._)(_);
            }
            return this.GetTotalMS();
          }
          GetLiveEdgeMS() {
            if (
              this.m_eGameRecordingMode === "Overlay" &&
              this.m_lastRecordingGlobalMS
            ) {
              const _ = Math.max(0, this.m_lastRecordingGlobalMS.valMS - _);
              return (0, _._)(_);
            }
            return (0, _._)(Math.max(0, this.GetTotalMS().valMS - 1));
          }
          GetTimelineAndOffsetRelativeToCurrentPlayback(_ = 0) {
            const _ = this.GetCurrentPlaybackGlobalMS(_);
            return (
              _ ||
              ((0, _._)(
                `failed to find offset for ${this.m_strRecordingID} at ${Math.floor(this.m_gameRecordingVideo.GetPlaybackTime() * 1e3)} MS`,
              ),
              null)
            );
          }
          SeekDeltaMS(_) {
            const _ = this.GetGlobalMSPlaytime();
            if (!this.m_strRecordingID) {
              const _ =
                _ > 0
                  ? this.GetClosestNextRecordingForGlobalMS(_)
                  : this.GetClosestPreviousRecordingForGlobalMS(_);
              if (_) {
                const _ = _ > 0 ? _ : Math.max(parseInt(_.duration_ms) + _, 0);
                this.SetPlaytimeFromRecordingOffset(_.recording_id, _, _ < 0);
                return;
              }
            }
            const _ =
                this.m_eGameRecordingMode === "Overlay"
                  ? this.GetLiveEdgeMS().valMS
                  : this.GetTotalMS().valMS,
              _ = _._(_.valMS + _, 0, _ - 1e3);
            this.SetPlaytimeFromGlobalMS((0, _._)(_));
          }
          ConvertGlobaOffsetToRecordingAndRelativeOffset(_) {
            return this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              _,
            );
          }
          PlayNextTimelineRecording(_) {
            var _;
            if (
              (_ = this.m_playbackDefinition) != null &&
              _.m_nLoopDurationMS
            ) {
              this.StartPlaybackForRange();
              return;
            }
            let _;
            if (this.m_strRecordingID)
              _ = this.m_timelineLoader.GetNextRecording(this.m_strRecordingID);
            else {
              const _ =
                this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
                  (0, _._)(this.m_nGlobalTimelinePlaybackMS),
                );
              _ = _ == null ? void 0 : _.recording_id;
            }
            if (_) {
              this.SetPlaytimeFromRecordingOffset(_, 0);
              return;
            }
            this.m_gameRecordingVideo.Pause(),
              _ && this.TryPlayInitialTimelineVideo();
          }
          GetClipsAtGlobalMS(_) {
            return (
              this.m_rgClipOffsets.filter(
                (_) =>
                  _.nGlobalOffsetMS <= _.valMS &&
                  _.nGlobalOffsetMS + _.nDurationMS >= _.valMS,
              ) || []
            );
          }
          GetClosestPreviousRecordingForGlobalMS(_) {
            return this.m_timelineLoader.GetClosestPreviousRecordingInGlobalTimeline(
              _,
            );
          }
          GetClosestNextRecordingForGlobalMS(_) {
            return this.m_timelineLoader.GetClosestNextRecordingInGlobalTimeline(
              _,
            );
          }
          SetPlaytimeFromRecordingOffset(_, _, _, _) {
            let _ = _;
            _ &&
              (_ = this.m_timelineLoader.ConvertRecordingTimeMStoPreTrimTimeMS(
                _,
                _,
              ));
            const _ =
              this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                _,
                _,
                0,
              );
            _ &&
              (this.UpdateGlobalPlayTime(_.nGlobalOffsetMS),
              this.ChangePlaybackRecording(_, _ / 1e3, _));
          }
          GetManifestFromRecordingID(_) {
            return this.m_fnGetManifest(_);
          }
          ChangePlaybackRecording(_, _ = 0, _) {
            this.m_bHidePlayer = !1;
            const _ = this.m_gameRecordingVideo.IsPaused();
            if (
              this.m_strRecordingID === _ &&
              this.m_gameRecordingVideo.IsInitialized()
            ) {
              this.m_gameRecordingVideo.Seek(_);
              return;
            }
            if (
              (this.m_gameRecordingVideo.Stop(),
              (this.m_strRecordingID = _),
              !_)
            )
              return;
            if (!this.m_videoRef) {
              this.m_nPendingSeekSec = _;
              return;
            }
            const _ = this.GetManifestFromRecordingID(_),
              _ = this.m_timelineLoader.BRecordingHasZeroOffset(_)
                ? _._.Absolute
                : _._.FromAvailableStart;
            this.m_gameRecordingVideo.Start(this.m_videoRef, _, _, _),
              (_ || _) && this.m_gameRecordingVideo.Pause();
          }
          StopPlayback() {
            this.m_gameRecordingVideo.Stop();
          }
          TogglePlayPause() {
            var _, _;
            this.m_gameRecordingVideo.IsPaused() ||
            !this.m_gameRecordingVideo.IsInitialized()
              ? (this.m_nGlobalTimelinePlaybackMS >
                  ((_ =
                    (_ = this.m_lastRecordingGlobalMS) == null
                      ? void 0
                      : _.valMS) != null
                    ? _
                    : 0) && this.TryPlayInitialTimelineVideo(),
                this.m_gameRecordingVideo.GetTimelineDuration() -
                  this.m_gameRecordingVideo.GetPlaybackTime() <
                0.05
                  ? this.PlayNextTimelineRecording(!0)
                  : this.m_gameRecordingVideo.Play())
              : this.m_gameRecordingVideo.Pause();
          }
          GetGlobalMSPlaytime() {
            return (0, _._)(this.m_nGlobalTimelinePlaybackMS);
          }
          GetGlobalPlaytimeSec() {
            return this.m_nGlobalTimelinePlaybackSec;
          }
          UpdateGlobalPlayTime(_) {
            var _;
            if (
              ((this.m_nGlobalTimelinePlaybackMS = _),
              (this.m_nGlobalTimelinePlaybackSec = Math.floor(_ / 1e3)),
              this.m_lastRecordingGlobalMS &&
                this.m_lastRecordingGlobalMS.valMS !== null)
            ) {
              const _ = this.m_bWasLiveEdge ? _ : _;
              this.m_bWasLiveEdge =
                this.m_lastRecordingGlobalMS.valMS -
                  (((_ = this.GetGlobalMSPlaytime()) == null
                    ? void 0
                    : _.valMS) || 0) <
                _;
            }
          }
          HandleSeekToPreviousRecording(_, _, _) {
            const _ = this.GetClosestPreviousRecordingForGlobalMS(_);
            if (_) {
              const _ = parseInt(_.duration_ms),
                _ = Math.max(_ - 5e3, _ * 0.75);
              _ || (this.m_nRelativeTimeForDisplay = _ / 1e3),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    _.recording_id,
                    _,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(
                  _ == null ? void 0 : _.recording_id,
                  _ / 1e3,
                  _,
                );
            } else
              _ || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(0),
                this.ChangePlaybackRecording(this.m_strRecordingID, 0, _);
          }
          HandleSeekToNextRecording(_, _, _) {
            const _ = this.GetClosestNextRecordingForGlobalMS(_);
            _
              ? (_ || (this.m_nRelativeTimeForDisplay = 0),
                this.UpdateGlobalPlayTime(
                  this.m_timelineLoader.ConvertRecordingOffsetToGlobalOffset(
                    _.recording_id,
                    0,
                    0,
                  ).nGlobalOffsetMS,
                ),
                this.ChangePlaybackRecording(
                  _ == null ? void 0 : _.recording_id,
                  0,
                  _,
                ))
              : (_ ||
                  (this.m_nRelativeTimeForDisplay = this.GetTotalMS().valMS),
                this.ChangePlaybackRecording(
                  this.m_strRecordingID,
                  this.GetTotalMS().valMS / 1e3,
                  _,
                ));
          }
          SetPlaytimeFromGlobalMS(_, _, _, _) {
            this.m_pendingStop = null;
            let _ =
              this.m_timelineLoader.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                _.valMS,
              );
            _
              ? (_ || (this.m_nRelativeTimeForDisplay = _.valMS),
                this.UpdateGlobalPlayTime(_.valMS),
                this.ChangePlaybackRecording(
                  _ == null ? void 0 : _.strRecordingID,
                  (_ == null ? void 0 : _.nRecordingOffsetMS) / 1e3,
                  _,
                ))
              : _
                ? this.ChangePlaybackRecording(
                    _ == null ? void 0 : _.strRecordingID,
                    (_ == null ? void 0 : _.nRecordingOffsetMS) / 1e3,
                    _,
                  )
                : _.valMS > this.m_nGlobalTimelinePlaybackMS
                  ? this.HandleSeekToNextRecording(_, _, _)
                  : this.HandleSeekToPreviousRecording(_, _, _);
          }
          ConvertGlobalOffsetToTimelineRelativeOffset(_) {
            return this.m_timelineLoader.GetTimelineOffsetFromGlobal(_, 0);
          }
          MakeRelativeToTimelineEndIfActive(_, _) {
            return this.m_timelineLoader.MakeRelativeToTimelineEndIfActive(
              _,
              _,
            );
          }
          GetTimelineDuration(_) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const _ = this.m_timelineLoader.GetTimelineMetadata(_);
            return _ ? parseInt(_.metadata.duration_ms) : null;
          }
          GetTimelineFirstRecordingOffset(_) {
            if (!this.m_timelineLoader.BInitialized()) return null;
            const _ = this.m_timelineLoader.GetTimelineMetadata(_);
            if (!_) return null;
            const _ = _.metadata.recordings;
            return _.length ? parseInt(_[0].start_offset_ms) : null;
          }
          async AddUserMarkerAtGlobalMS(_, _, _) {
            const _ = this.m_timelineLoader.GetTimelineOffsetFromGlobal(
              _.valMS,
              0,
            );
            if (_) {
              const _ = this.m_timelineLoader.GetGameID(),
                { fnCreateUserTimelineMarkers: _ } = _(),
                _ = this.m_timelineLoader.GetTimelineStartBeforeGlobalZeroMS(
                  _.strTimelineID,
                );
              _._.ReportTrackedAction(_);
              const _ = "steam_marker",
                _ = await _(_, this.GetClipID(), {
                  timeline_id: _.strTimelineID,
                  entry_id: "",
                  time: "" + Math.floor(_.nTimelineOffsetMS.valMS + _),
                  type: _._._,
                  marker_icon: _,
                  marker_priority: 0,
                });
              _.eResult == _._ &&
                (this.m_timelineLoader.AddUserMarker(
                  _.strTimelineID,
                  Math.floor(_.nTimelineOffsetMS.valMS),
                  _,
                  _.entry_id,
                ),
                _ && _(_.entry_id, _.strTimelineID));
            }
          }
          async RemoveUserMarker(_, _) {
            const { fnRemoveUserTimelineMarker: _ } = _(),
              _ = this.m_timelineLoader.GetGameID();
            return (await _(_, this.GetClipID(), _, _)) == _._
              ? (this.m_timelineLoader.RemoveUserMarker(_, _), !0)
              : ((0, _._)(
                  `Failed to delete user marker for timeline ${_} entry ${_}`,
                ),
                !1);
          }
          async UpdateUserMarker(_, _, _, _) {
            const { fnUpdateUserTimelineMarkers: _ } = _(),
              _ = this.m_timelineLoader.GetGameID(),
              _ = {
                timeline_id: _,
                entry_id: _._,
                time: _.time,
                type: _._._,
                marker_icon: _.icon,
                marker_priority: _.priority,
                range_title: _,
                marker_description: _,
              };
            if ((await _(_, this.GetClipID(), _)) == _._) {
              const _ = {
                strIcon: _.icon,
                name: _,
                description: _,
                nTimelineOffsetMS: parseInt(_.time),
              };
              return this.m_timelineLoader.UpdateUserMarker(_, _._, _), !0;
            }
            return !1;
          }
          FocusGlobalMS(_) {
            this.FireEvent("OnFocusGlobalMS", _);
          }
          SetPlaybackStop(_) {
            const _ = this.ConvertGlobaOffsetToRecordingAndRelativeOffset(
              _.valMS,
            );
            _ &&
              (this.m_pendingStop = {
                m_strRecordingID: _.strRecordingID,
                m_nOffsetMS: _.nRecordingOffsetMS,
              });
          }
          ClearPlaybackStop() {
            this.m_pendingStop = null;
          }
          GenerateClipNameFromTimeline(_, _, _, _) {
            return this.m_timelineLoader.GenerateClipNameFromTimeline(
              _,
              _,
              _,
              _,
            );
          }
          GetRenderGlyph() {
            if (this.m_bGamepadMode) return this.m_fnRenderGlyph;
          }
          SetRenderGlyph(_) {
            this.m_fnRenderGlyph = _;
          }
          GetGamepadMode() {
            return this.m_bGamepadMode;
          }
          SetGamepadMode(_) {
            this.m_bGamepadMode = _;
          }
          GetControlsVisible() {
            return this.m_bControlsVisible;
          }
          SetControlsVisible(_) {
            _ != null && (this.m_bControlsVisible = _);
          }
        }
        _([_.__webpack_require__], _.prototype, "m_bHidePlayer", 2),
          _([_.__webpack_require__], _.prototype, "m_strRecordingID", 2),
          _([_.__webpack_require__], _.prototype, "m_durationMS", 2),
          _([_.__webpack_require__], _.prototype, "m_lastRecordingGlobalMS", 2),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_nGlobalTimelinePlaybackMS",
            2,
          ),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_nGlobalTimelinePlaybackSec",
            2,
          ),
          _([_.__webpack_require__], _.prototype, "m_rgSeekPerf", 2),
          _([_.__webpack_require__], _.prototype, "m_eRecordingState", 2),
          _([_.__webpack_require__], _.prototype, "m_eRecordingSetting", 2),
          _([_.__webpack_require__], _.prototype, "m_bGamepadMode", 2),
          _([_.__webpack_require__], _.prototype, "m_bControlsVisible", 2),
          _([_.__webpack_require__], _.prototype, "m_fnRenderGlyph", 2),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_previousHighlightEntry",
            2,
          ),
          _([_.__webpack_require__], _.prototype, "m_nextHighlightEntry", 2),
          _([_.__webpack_require__], _.prototype, "m_displayHighlightEntry", 2),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_nRelativeTimeForDisplay",
            2,
          ),
          _([_.__webpack_require__.ref], _.prototype, "m_rgClipOffsets", 2),
          _([_.__webpack_require__.ref], _.prototype, "m_phasePreview", 2),
          _([_.__webpack_require__], _.prototype, "SetVideoElement", 1),
          _([_.__webpack_require__], _.prototype, "OnInvalidateRecording", 1),
          _([_.__webpack_require__], _.prototype, "OnLoaderInitialized", 1),
          _([_.__webpack_require__], _.prototype, "OnInvalidate", 1),
          _([_.__webpack_require__], _.prototype, "OnTimelineLoaded", 1),
          _([_.__webpack_require__], _.prototype, "GetLiveEdgeMS", 1),
          _([_.__webpack_require__], _.prototype, "StopPlayback", 1),
          _([_.__webpack_require__], _.prototype, "TogglePlayPause", 1),
          _([_.__webpack_require__], _.prototype, "UpdateGlobalPlayTime", 1);
        const __webpack_require__ = _.createContext({
          timelinePlaybackCoordinator: null,
        });
        function _(_) {
          const {
              children: _,
              mode: _,
              fnGetManifest: _,
              loader: _,
              recordingState: _,
              controlsVisible: _,
              gamepadMode: _,
              renderGlyph: _,
              recordingSetting: _,
              playbackDefinition: _,
              clipSummaries: _,
            } = _,
            [_] = _.useState(() => new _(_, _, _, _, _, _, _, _));
          (0, _.useEffect)(() => {
            _.SetLoader(_);
          }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetRecordingState(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetRecordingSetting(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetGetManifest(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetControlsVisible(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetGamepadMode(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetRenderGlyph(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _.SetClipOffsets(_);
            }, [_, _]),
            (0, _.useEffect)(() => () => _.dispose(), [_]);
          const _ = _.useMemo(
            () => ({
              timelinePlaybackCoordinator: _,
            }),
            [_],
          );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return (0, _.useContext)(_).timelinePlaybackCoordinator;
        }
        function _() {
          return useContext(
            _,
          ).timelinePlaybackCoordinator.GetGameRecordingVideo();
        }
        function _() {
          const _ = _();
          return [
            (0, _._)(() => (_ == null ? void 0 : _.GetPhasePreview()) || null),
            (_) => (_ == null ? void 0 : _.SetPhasePreview(_)),
          ];
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__.__webpack_require__(_),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = 30;
        function _(_, _) {
          return (
            _.strRecordingID === _.strRecordingID &&
            _.strClipID === _.strClipID &&
            _.nRecordingOffsetMS === _.nRecordingOffsetMS &&
            _.nRecordingStartOffsetMS === _.nRecordingStartOffsetMS &&
            _.cPxMajorAxis === _.cPxMajorAxis &&
            _.bPreciseTiming == _.bPreciseTiming
          );
        }
        const __webpack_require__ = class _ {
          constructor() {
            _(this, "k_QueueWaitUntilRequestMS", 10),
              _(this, "k_nMaxBatchSize", 50),
              _(this, "m_nMaxCacheSize", (_ * 60 * 1e3) / _._),
              _(this, "m_LRUTrackerSet", new Set()),
              _(this, "m_mapPromises", new Map()),
              _(this, "m_mapThumbnailImages", new Map()),
              _(this, "m_rgPendingRequest", new Array()),
              _(this, "m_PendingInfoPromise"),
              _(this, "m_PendingInfoResolve"),
              _(this, "m_PendingTimer"),
              _(this, "k_AlreadyResolvedOK", Promise.resolve(!0)),
              _(this, "m_rgThumbnailPerf", []),
              (0, _._)(this);
          }
          AddPerfMeasure(_) {
            this.m_rgThumbnailPerf.push(_);
          }
          GetPerfMeasures() {
            if (!this.m_rgThumbnailPerf.length) return null;
            const _ = this.m_rgThumbnailPerf.length,
              _ = this.m_rgThumbnailPerf.reduce((_, _) => _ + _) / _,
              _ = Math.sqrt(
                this.m_rgThumbnailPerf
                  .map((_) => Math.pow(_ - _, 2))
                  .reduce((_, _) => _ + _) / _,
              ),
              _ = Math.max(...this.m_rgThumbnailPerf),
              _ = Math.min(...this.m_rgThumbnailPerf);
            return {
              nMean: _,
              nStdDev: _,
              nMax: _,
              nMin: _,
              nLength: _,
              nLastVal: this.m_rgThumbnailPerf[_ - 1],
            };
          }
          GetKey(_, _, _, _, _, _, _) {
            const _ = _ + _,
              _ = _ ? _ : _ - (_ % _._);
            return `${_}_${_}_${_}_${_}_${_}_${_}`;
          }
          GetThumbnailData(_) {
            const _ = this.m_mapThumbnailImages.get(_);
            return (
              _ &&
                (this.m_LRUTrackerSet.has(_) && this.m_LRUTrackerSet.delete(_),
                this.m_LRUTrackerSet.add(_)),
              _
            );
          }
          SetThumbnailData(_, _) {
            if (
              (this.m_LRUTrackerSet.has(_) && this.m_LRUTrackerSet.delete(_),
              this.m_LRUTrackerSet.add(_),
              this.m_mapThumbnailImages.set(_, _),
              this.m_LRUTrackerSet.size >= this.m_nMaxCacheSize)
            ) {
              const _ = this.m_LRUTrackerSet.keys().next().value;
              this.m_LRUTrackerSet.delete(_),
                this.m_mapThumbnailImages.delete(_);
            }
          }
          ClearThumbnailData() {
            this.m_LRUTrackerSet.clear(), this.m_mapThumbnailImages.clear();
          }
          GetThumbnail(_, _, _, _, _, _, _) {
            if (!_) return;
            const _ = this.GetKey(_, _, _, _, _, _, _);
            return this.GetThumbnailData(_);
          }
          GetOrQueueThumbnail(_, _, _, _, _, _, _) {
            if (!_) return;
            const _ = this.GetKey(_, _, _, _, _, _, _);
            let _ = this.GetThumbnailData(_);
            if (!_) {
              let _ = `thumbnail_${_}_${_}_${_}`;
              performance.mark(_),
                this.QueueThumbnailRequest(_, _, _, _, _, _, _).then(() => {
                  try {
                    const _ = performance.measure(`measure_${_}`, _);
                    _ && _.Get().AddPerfMeasure(_.duration);
                  } catch (_) {
                    (0, _._)(
                      `CThumbnailCache:: cant measure ${_}, error: ${_}`,
                    );
                  }
                }),
                (_ = this.GetThumbnailData(_));
            }
            return _;
          }
          QueueThumbnailRequest(_, _, _, _, _, _, _) {
            const _ = this.GetKey(_, _, _, _, _, _, _),
              _ = this.GetThumbnailData(_);
            if (_ && (_.data || _.bIsLoading)) return this.k_AlreadyResolvedOK;
            this.SetThumbnailData(_, {
              data: null,
              bIsLoading: !0,
            }),
              this.m_PendingInfoPromise &&
                (this.m_rgPendingRequest[0].strRecordingID != _ ||
                  this.m_rgPendingRequest.length > this.k_nMaxBatchSize) &&
                (this.m_PendingTimer &&
                  window.clearTimeout(this.m_PendingTimer),
                this.FlushPendingInfo()),
              (!this.m_PendingInfoPromise ||
                this.m_rgPendingRequest[0].strRecordingID != _) &&
                ((this.m_PendingInfoPromise = new Promise(
                  (_) => (this.m_PendingInfoResolve = _),
                )),
                (this.m_PendingTimer = window.setTimeout(
                  () => this.FlushPendingInfo(),
                  this.k_QueueWaitUntilRequestMS,
                )));
            const _ = {
              gameID: _,
              strRecordingID: _,
              strClipID: _,
              nRecordingOffsetMS: _,
              nRecordingStartOffsetMS: _,
              cPxMajorAxis: _,
              bPreciseTiming: _,
            };
            return (
              this.m_rgPendingRequest.some((_) => _(_, _)) ||
                (this.m_rgPendingRequest.push(_),
                this.m_mapPromises.set(_, this.m_PendingInfoPromise)),
              this.m_PendingInfoPromise
            );
          }
          async FlushPendingInfo() {
            if (typeof this.m_PendingInfoResolve == "undefined") return;
            const _ = this.m_PendingInfoResolve,
              _ = this.m_rgPendingRequest;
            (this.m_PendingInfoPromise = void 0),
              (this.m_PendingInfoResolve = void 0),
              (this.m_rgPendingRequest = []),
              (this.m_PendingTimer = void 0),
              await this.InternalLoadMultipleThumbnails(_),
              _();
          }
          async InternalLoadMultipleThumbnails(_) {
            _.sort((_, _) => _.nRecordingOffsetMS - _.nRecordingOffsetMS);
            try {
              const _ = _.map((_) => _.nRecordingOffsetMS * 1e3),
                _ = await _(
                  _[0].strRecordingID,
                  _[0].strClipID,
                  void 0,
                  _,
                  _[0].cPxMajorAxis,
                  _[0].bPreciseTiming,
                );
              (0, _._)(
                (_ == null ? void 0 : _.length) == _.length,
                `CThumbnailCache.InternalLoadMultipleThumbnails request ${_.length} and got back ${_ == null ? void 0 : _.length}`,
              );
              for (
                let _ = 0;
                _ < _.length && _ < (_ == null ? void 0 : _.length);
                ++_
              ) {
                const _ = _[_],
                  _ = this.GetKey(
                    _.gameID,
                    _.strRecordingID,
                    _.strClipID,
                    _.nRecordingOffsetMS,
                    _.nRecordingStartOffsetMS,
                    _.cPxMajorAxis,
                    _.bPreciseTiming,
                  );
                let _ = _ ? _[_].image_data() : null;
                this.SetThumbnailData(_, {
                  data: _,
                  bIsLoading: !1,
                });
              }
            } catch (_) {
              (0, _._)("Failed to load multiple request thumbnails", _);
              for (let _ = 0; _ < _.length; ++_) {
                const _ = _[_],
                  _ = this.GetKey(
                    _.gameID,
                    _.strRecordingID,
                    _.strClipID,
                    _.nRecordingOffsetMS,
                    _.nRecordingStartOffsetMS,
                    _.cPxMajorAxis,
                    _[0].bPreciseTiming,
                  );
                this.SetThumbnailData(_, {
                  data: null,
                  bIsLoading: !1,
                });
              }
            }
          }
          async LoadThumbnail(_, _, _, _, _, _, _) {
            const _ = this.GetKey(_, _, _, _, _, _, _),
              _ = this.GetThumbnailData(_);
            return _ && _.data
              ? !0
              : (this.m_mapPromises.has(_) ||
                  this.m_mapPromises.set(
                    _,
                    this.InternalLoadThumbnail(_, _, _, _, _, _, _),
                  ),
                this.m_mapPromises.get(_));
          }
          async InternalLoadThumbnail(_, _, _, _, _, _, _) {
            const _ = this.GetKey(_, _, _, _, _, _, _);
            try {
              const _ = await _(_, _, void 0, [_ * 1e3], _, _);
              if ((_ == null ? void 0 : _.length) > 0) {
                let _ = _ ? _[0].image_data() : null;
                return (
                  this.SetThumbnailData(_, {
                    data: _,
                    bIsLoading: !1,
                  }),
                  !0
                );
              }
              (0, _._)(
                `ThumbnailImage: got empty jpeg ${_.length} list back ${_} @ ${_}`,
              );
            } catch (_) {
              (0, _._)(
                `ThumbnailImage: Fail to load thumbnail ${_} @ ${_} with ${_}`,
              ),
                this.SetThumbnailData(_, {
                  data: null,
                  bIsLoading: !1,
                });
            }
            return !1;
          }
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
        };
        _(_, "s_Singleton"),
          _([_.__webpack_require__], _.prototype, "m_mapThumbnailImages", 2);
        let __webpack_require__ = _;
        function _(_) {
          var _;
          const _ = (0, _.useRef)(null),
            _ = (0, _._)(),
            _ = (0, _._)("useThumbnailAsURL");
          return (
            (0, _.useEffect)(() => {
              var _;
              if (
                _ &&
                !((_ = _ == null ? void 0 : _.token) != null && _.reason)
              ) {
                const _ = new Blob([_], {
                    type: "image/jpeg",
                  }),
                  _ = URL.createObjectURL(_);
                (_.current = _), _();
              }
              return () => {
                _.current &&
                  (URL.revokeObjectURL(_.current), (_.current = void 0));
              };
            }, [
              (_ = _ == null ? void 0 : _.token) == null ? void 0 : _.reason,
              _,
              _,
            ]),
            _.current
          );
        }
        function _() {
          return _.Get().GetPerfMeasures();
        }
        function _(_, _, _, _, _, _, _) {
          const _ = (0, _._)(() =>
            _.Get().GetOrQueueThumbnail(_, _, _, _, _, _, _),
          );
          return _(_ == null ? void 0 : _.data);
        }
        function _() {
          return _.Get().ClearThumbnailData();
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = {
            nBeforeMS: 0,
            nAfterMS: 12e3,
          },
          __webpack_require__ = _.createContext({
            globalStartMS: void 0,
            globalEndMS: void 0,
            setRange: null,
            setStartMS: null,
            setEndMS: null,
            globalPreviewStartMS: void 0,
            globalPreviewEndMS: void 0,
            setPreviewRange: null,
            clearPreviewSelection: null,
            selectionZoomCount: 0,
            eInitMethod: void 0,
            startMetrics: void 0,
            endMetrics: void 0,
            zoomIntoSelection: null,
            zoomOutSelection: null,
          });
        function _(_) {
          const { children: _, loader: _ } = _,
            [_, _] = React.useState(),
            [_, _] = React.useState(),
            [_, _] = React.useState(),
            [_, _] = React.useState(),
            _ = React.useMemo(
              () => ({
                originalGlobalMS: 0,
                originalRangeMethod: void 0,
                latestRangeMethod: void 0,
              }),
              [],
            ),
            [_, _] = React.useState({
              ..._,
            }),
            [_, _] = React.useState({
              ..._,
            }),
            [_, _] = React.useState(),
            [_, _] = React.useState(),
            [_, _] = React.useState(0),
            _ = useTimelinePlaybackCoordinator(),
            _ = React.useCallback(() => {
              _(null),
                _(void 0),
                _(void 0),
                _(void 0),
                _(_),
                _(_),
                _.ClearPlaybackStop();
            }, [_, _]),
            _ = React.useCallback((_) => {
              _(_.valMS > 0 ? _ : GlobalRelativeMS(0));
            }, []),
            _ = React.useCallback(
              (_) => {
                const _ = _.GetGlobalTimelineEndMS();
                _(_.valMS < _.valMS ? _ : _);
              },
              [_],
            ),
            _ = React.useCallback(
              (_, _) => {
                _(_), _(_);
              },
              [_, _],
            ),
            _ = React.useCallback(() => {
              _(void 0), _(void 0);
            }, []),
            _ = React.useCallback(
              (_, _) => {
                if (_ !== void 0) {
                  let _ =
                    _ != null
                      ? _
                      : {
                          ..._,
                        };
                  _.originalGlobalMS == 0 &&
                    ((_.originalRangeMethod = _),
                    (_.originalGlobalMS = _.valMS)),
                    (_.latestRangeMethod = _),
                    _(_);
                }
                _(_.valMS > 0 ? _ : GlobalRelativeMS(0));
              },
              [_, _],
            ),
            _ = React.useCallback(
              (_, _) => {
                if (_ !== void 0) {
                  let _ =
                    _ != null
                      ? _
                      : {
                          ..._,
                        };
                  _.originalGlobalMS == 0 &&
                    ((_.originalRangeMethod = _),
                    (_.originalGlobalMS = _.valMS)),
                    (_.latestRangeMethod = _),
                    _(_);
                }
                const _ = _.GetGlobalTimelineEndMS();
                _(_.valMS < _.valMS ? _ : _);
              },
              [_, _, _],
            ),
            _ = React.useCallback(
              (_, _, _) => {
                _ == null && _(_), _(_, _), _(_, _), _();
              },
              [_, _, _, _, _],
            ),
            _ = React.useCallback(() => {
              _(_ + 1);
            }, [_, _]),
            _ = React.useCallback(() => {
              _ > 0 && _(_ - 1);
            }, [_, _]);
          useEffect(() => () => _(), [_, _]);
          const _ = React.useMemo(
            () => ({
              globalStartMS: _,
              globalPreviewStartMS: _,
              globalPreviewEndMS: _,
              globalEndMS: _,
              selectedMarker: _,
              eInitMethod: _,
              startMetrics: _,
              endMetrics: _,
              setStartMS: _,
              setEndMS: _,
              setRange: _,
              setPreviewRange: _,
              clearPreviewSelection: _,
              setSelectedMarker: (_, _, _, _) => {
                _({
                  strEntryID: _,
                  strTimelineID: _,
                }),
                  _(
                    EClipRangeMethod.k_EClipRangeMethod_Highlight,
                    GlobalRelativeMS(Math.max(0, _)),
                    GlobalRelativeMS(_),
                  );
              },
              clearSelection: _,
              selectionZoomCount: _,
              zoomIntoSelection: _,
              zoomOutSelection: _,
            }),
            [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _],
          );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          const _ = (0, _.useContext)(_);
          return {
            nGlobalStartMS: _.globalStartMS,
            nGlobalEndMS: _.globalEndMS,
          };
        }
        function _() {
          const _ = useContext(_);
          return {
            eInitMethod: _.eInitMethod,
            startMetrics: _.startMetrics,
            endMetrics: _.endMetrics,
          };
        }
        function _() {
          const _ = useContext(_),
            _ =
              _.globalStartMS !== void 0
                ? _.globalStartMS.valMS - _.startMetrics.originalGlobalMS
                : 0,
            _ =
              _.globalEndMS !== void 0
                ? _.globalEndMS.valMS - _.endMetrics.originalGlobalMS
                : 0;
          return {
            eInitMethod: _.eInitMethod,
            startMetrics: {
              originalRangeMethod: _.startMetrics.originalRangeMethod,
              latestRangeMethod: _.startMetrics.latestRangeMethod,
              relativeMS: _,
            },
            endMetrics: {
              originalRangeMethod: _.endMetrics.originalRangeMethod,
              latestRangeMethod: _.endMetrics.latestRangeMethod,
              relativeMS: _,
            },
          };
        }
        function _() {
          return (0, _.useContext)(_).globalStartMS;
        }
        function _() {
          return (0, _.useContext)(_).globalEndMS;
        }
        function _() {
          return (0, _.useContext)(_).setRange;
        }
        function _() {
          return (0, _.useContext)(_).setStartMS;
        }
        function _() {
          return (0, _.useContext)(_).setEndMS;
        }
        function _() {
          const _ = (0, _.useContext)(_);
          return {
            selectedMarker: _.selectedMarker,
            setSelectedMarker: _.setSelectedMarker,
          };
        }
        function _() {
          var _, _;
          const _ = (0, _.useContext)(_);
          return (
            !isNaN((_ = _.globalStartMS) == null ? void 0 : _.valMS) &&
            !isNaN((_ = _.globalEndMS) == null ? void 0 : _.valMS)
          );
        }
        function _() {
          return (0, _.useContext)(_).clearSelection;
        }
        function _() {
          return useContext(_).setPreviewRange;
        }
        function _() {
          const _ = useContext(_);
          return {
            globalStartMS: _.globalPreviewStartMS,
            globalEndMS: _.globalPreviewEndMS,
          };
        }
        function _() {
          var _, _;
          const _ = useContext(_);
          return (
            !isNaN((_ = _.globalPreviewStartMS) == null ? void 0 : _.valMS) &&
            !isNaN((_ = _.globalPreviewEndMS) == null ? void 0 : _.valMS)
          );
        }
        function _() {
          return useContext(_).clearPreviewSelection;
        }
        function _() {
          const _ = _(),
            _ = useTimelinePlaybackCoordinator();
          return React.useCallback(() => {
            let _ = _.GetCurrentPlaybackGlobalMS(0);
            if (_ && _.strTimelineID) {
              let [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
                _.strTimelineID,
                _.nGlobalOffsetMS,
                _.nBeforeMS,
                _.nAfterMS,
              );
              _(GlobalRelativeMS(_), GlobalRelativeMS(_));
            }
          }, [_, _]);
        }
        function _() {
          const _ = _(),
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _();
          return _.useCallback(
            (_, _, _, _) => {
              if (_ === void 0 && _ === void 0) return;
              let _ = _.nGlobalStartMS !== void 0 || _.nGlobalEndMS !== void 0,
                _ = _ || _.nGlobalStartMS,
                _ = _ || _.nGlobalEndMS;
              _ &&
                _ &&
                _.valMS <= _.valMS &&
                (_ !== void 0 ? (_ = void 0) : (_ = void 0));
              const _ = _.nBeforeMS + _.nAfterMS;
              _ === void 0 && (_ = (0, _._)(_.valMS - _)),
                _ === void 0 && (_ = (0, _._)(_.valMS + _));
              const _ = _ != _.nGlobalStartMS,
                _ = _ != _.nGlobalEndMS;
              _ && _ ? _(_, _, _) : _ ? _(_, _) : _ && _(_, _),
                !_ && _ && _ && _ == 0 && _();
            },
            [_, _, _, _, _, _],
          );
        }
        function _() {
          return (0, _.useContext)(_).zoomIntoSelection;
        }
        function _() {
          return useContext(_).zoomOutSelection;
        }
        function _() {
          return (0, _.useContext)(_).selectionZoomCount;
        }
        function _(_) {
          let _ = (0, _.useContext)(_),
            _ = _.selectionZoomCount,
            _ = _.globalStartMS,
            _ = _.globalEndMS,
            _ = (0, _.useRef)(_),
            _ = (0, _.useRef)(null);
          (_.current = _),
            (0, _.useEffect)(() => {
              if (!_.current) return;
              let _ =
                !isNaN(_ == null ? void 0 : _.valMS) &&
                !isNaN(_ == null ? void 0 : _.valMS);
              (_.current == _ && _) ||
                ((_.current = _),
                _ && _ ? _.current(_, _) : _.current(null, null));
            }, [_, _, _, _, _]);
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = 5e3,
          __webpack_require__ = 300 * 1e3,
          __webpack_require__ = 1e3,
          __webpack_require__ = 10,
          __webpack_require__ = 10;
        var __webpack_require__ = ((_) => (
          (_.Playhead = "Playhead"),
          (_.RangeLeft = "RangeLeft"),
          (_.RangeRight = "RangeRight"),
          (_.Highlight = "Highlight"),
          _
        ))(_ || {});
        class _ {
          constructor(_, _) {
            _(this, "m_fnUnregisterFromLoader"),
              _(this, "m_loader"),
              _(this, "m_maskBounds", [-1, -1]),
              _(this, "m_eventTarget"),
              (0, _._)(this),
              (this.m_loader = _),
              (this.m_eventTarget = _);
          }
          Init() {
            (this.m_fnUnregisterFromLoader =
              this.m_loader.AddEventListener(this)),
              this.m_loader.BInitialized() && this.OnLoaderInitialized();
          }
          GetGameID() {
            return this.m_loader.GetGameID();
          }
          BInitialized() {
            return this.m_loader.BInitialized();
          }
          IsActiveRecording(_) {
            return this.m_loader.IsActiveRecording(_);
          }
          IsActiveTimeline(_) {
            return this.m_loader.IsActiveTimeline(_);
          }
          GetStateDescriptionAtGlobalMS(_) {
            return this.m_loader.GetStateDescriptionAtGlobalMS((0, _._)(_));
          }
          GetTimelineOffsetFromGlobal(_, _) {
            return this.m_loader.GetTimelineOffsetFromGlobal(_, _);
          }
          GetTimelineStartTime(_) {
            const _ = this.m_loader.GetTimelineMetadata(_);
            return _ != null && _.metadata ? _.metadata.date_recorded : null;
          }
          BEmpty() {
            return !1;
          }
          GetTimelines() {
            return this.m_loader.GetTimelines();
          }
          GetGlobalTimelineEndMS() {
            return this.m_loader.GetGlobalTimelineEndMS();
          }
          GetTimelineDataOrStartLoad(_) {
            return this.m_loader.GetTimelineDataOrStartLoad(_);
          }
          GetTimelineStartBeforeGlobalZeroMS(_) {
            return this.m_loader.GetTimelineStartBeforeGlobalZeroMS(_);
          }
          MakeRelativeToTimelineEndIfActive(_, _) {
            return this.m_loader.MakeRelativeToTimelineEndIfActive(_, _);
          }
          FindRangeEventsAtGlobalMS(_) {
            return this.m_loader.FindRangeEventsAtGlobalMS(_);
          }
          Close() {
            this.m_fnUnregisterFromLoader &&
              (this.m_fnUnregisterFromLoader(),
              (this.m_fnUnregisterFromLoader = void 0)),
              (this.m_loader = null);
          }
          OnLoaderInitialized() {
            this.m_eventTarget.OnLoaderInitialized &&
              this.m_eventTarget.OnLoaderInitialized();
          }
          OnInvalidate(_) {
            this.m_eventTarget.OnInvalidate &&
              this.m_eventTarget.OnInvalidate(_);
          }
          OnTimelineLoaded(_) {
            this.m_eventTarget.OnTimelineLoaded &&
              this.m_eventTarget.OnTimelineLoaded(_);
          }
          OnInvalidateRecording(_, _) {
            this.m_eventTarget.OnInvalidateRecording &&
              this.m_eventTarget.OnInvalidateRecording(_, _);
          }
        }
        class _ {
          constructor(_, _, _) {
            _(this, "m_playbackCoordinator"),
              _(this, "m_fnUnregisterPlaybackCoordinator"),
              _(this, "m_refTimelineParentCtn"),
              _(this, "m_timelineMask"),
              _(this, "m_durationMS", 0),
              _(
                this,
                "m_mapTimelineClips",
                _._.map([], {
                  deep: !1,
                }),
              ),
              _(this, "m_scrollLeftPX", 0),
              _(this, "m_scrollWindowWidth", null),
              _(this, "m_scrollWindowOffsetPX", null),
              _(this, "m_bAutoScrollPaused", !1),
              _(this, "m_autoScrollPauseTimeout", null),
              _(this, "m_msVisible", 0),
              _(this, "m_bCustomZoom", !1),
              _(this, "m_bUserClipping", !1),
              _(this, "m_prevLeftAndVisible", null),
              _(this, "m_rgTimelineOffsets", []),
              _(
                this,
                "m_mapTimelineEntries",
                _._.map([], {
                  deep: !1,
                }),
              ),
              _(this, "m_bInitialized", !1),
              _(this, "m_eThumbnailComponent", null),
              _(this, "m_nGlobalRelativeThumbnailPositionPX"),
              _(this, "m_thumbnailHighlightEntry"),
              _(this, "m_phaseToHighlight"),
              (0, _._)(this),
              (this.m_playbackCoordinator = _),
              (this.m_timelineMask = new _(_, this)),
              (this.m_fnUnregisterPlaybackCoordinator =
                _.AddEventListener(this)),
              this.UpdateClipSummaries(_),
              this.m_timelineMask.Init();
          }
          BInitialized() {
            return this.m_bInitialized;
          }
          OnLoaderInitialized() {
            (this.m_durationMS =
              this.m_timelineMask.GetGlobalTimelineEndMS().valMS),
              this.OnInvalidate(),
              this.InitDefaultsIfReady();
          }
          InitDefaultsIfReady() {
            !this.m_bInitialized &&
              this.m_scrollWindowWidth &&
              this.m_timelineMask.BInitialized() &&
              ((this.m_bInitialized = !0),
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
              this.ScrollToCenteredGlobalMS(
                this.m_playbackCoordinator.GetGlobalMSPlaytime().valMS,
              ));
          }
          OnTimelineLoaded(_) {
            if (
              ((0, _._)("OnTimelineLoaded", _), !this.FindTimelineOffsets(_))
            ) {
              (0, _._)("Missing timeline offset metadata for", _);
              return;
            }
            this.ComputeEntriesForTimeline(_);
          }
          OnInvalidate(_) {
            (0, _._)("on invalidate", _);
            const _ = this.m_timelineMask.GetGlobalTimelineEndMS().valMS,
              _ = _ - this.m_durationMS,
              _ = this.m_durationMS <= 0;
            let _;
            this.m_durationMS = _;
            let _ =
              this.IsTempZoom() || this.m_bCustomZoom || this.m_bUserClipping;
            if (_ > 0 && _) this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (_ > 0 && !this.m_bAutoScrollPaused && !_)
              this.m_msVisible = this.ComputeDefaultMSVisible();
            else if (_ < 0 && this.m_msVisible > _)
              (this.m_msVisible = this.ComputeDefaultMSVisible()),
                this.ScrollToOffset(0);
            else if (_ < 0) {
              const _ = this.FindClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX,
              );
              if (_) {
                const _ = this.ConvertGlobalMSToGlobalPXOffset(
                    _.globalOffsetMS,
                  ),
                  _ = this.ConvertDeltaPXToDurationMS(this.m_scrollLeftPX - _);
                _ = {
                  strTimelineID: _.timelineID,
                  nTimelineOffsetMS: _,
                };
              }
            }
            const _ = this.m_timelineMask.GetTimelines();
            let _ = 0;
            if (this.BInitialized() && _) {
              const _ = _.findIndex((_) => _.metadata.timeline_id === _);
              _ >= 0 && (_ = _);
            }
            if (
              ((this.m_rgTimelineOffsets = _.map((_, _) =>
                _ >= _
                  ? this.ComputeTimelineOffset(_)
                  : this.m_rgTimelineOffsets[_],
              )),
              _)
            ) {
              const _ = this.FindTimelineOffsets(_.strTimelineID);
              if (_) {
                const _ = _.globalOffsetMS + _.nTimelineOffsetMS,
                  _ = (0, _._)(
                    this.ConvertGlobalMSToGlobalPXOffset(_),
                    0,
                    this.GetMaxScrollLeftPX(),
                  );
                this.ScrollToOffset(_);
              }
            }
            _.forEach((_, _) => {
              _ >= _ && this.ComputeEntriesForTimeline(_.metadata.timeline_id);
            });
          }
          OnFocusGlobalMS(_) {
            this.ScrollToCenteredGlobalMS(_.valMS);
          }
          GetGameID() {
            return this.m_timelineMask.GetGameID();
          }
          SetTimelineParentCtnRef(_) {
            this.m_refTimelineParentCtn = _;
          }
          GetTimelineParentCtnRef() {
            return this.m_refTimelineParentCtn;
          }
          SetThumbnailComponent(_) {
            (this.m_eThumbnailComponent = _),
              _ || (this.m_nGlobalRelativeThumbnailPositionPX = void 0),
              _ !== "Highlight" && (this.m_thumbnailHighlightEntry = null);
          }
          GetThumbnailComponent() {
            return this.m_eThumbnailComponent;
          }
          SetThumbnailPosition(_) {
            this.m_nGlobalRelativeThumbnailPositionPX = _;
          }
          GetThumbnailPosition() {
            return this.m_nGlobalRelativeThumbnailPositionPX;
          }
          SetThumbnailEntry(_) {
            this.m_thumbnailHighlightEntry = _;
          }
          GetThumbnailEntry() {
            return this.m_eThumbnailComponent === "Highlight"
              ? this.m_thumbnailHighlightEntry
              : null;
          }
          Close() {
            this.m_timelineMask.Close(),
              (this.m_timelineMask = null),
              this.m_fnUnregisterPlaybackCoordinator &&
                this.m_fnUnregisterPlaybackCoordinator(),
              (this.m_fnUnregisterPlaybackCoordinator = null),
              (this.m_bInitialized = !1),
              this.m_autoScrollPauseTimeout &&
                this.ClearAutoScrollPauseTimeout();
          }
          ComputeDefaultMSVisible() {
            const _ = this.GetTimelineMarginWidth() * 2,
              _ = _ * (this.m_rgTimelineOffsets.length - 1),
              _ = Math.max(1, this.m_scrollWindowWidth - _ - _),
              _ = Math.ceil(
                ((_ + _) * this.m_durationMS) /
                  (this.m_scrollWindowWidth - (_ + _)),
              ),
              _ = _ * _;
            return Math.min(this.m_durationMS + _, _);
          }
          ZoomIn(_, _) {
            if (this.m_msVisible <= 1e3) return;
            const _ = this.m_msVisible - this.m_msVisible / 1.1 ** _,
              _ = _ * _,
              _ = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              _ = Math.max(this.m_msVisible - _, 1e3);
            (this.m_msVisible = _),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(_ + _));
          }
          ZoomOut(_, _) {
            const _ =
              this.m_durationMS +
              this.ConvertDeltaPXToDurationMS(
                _ * (this.m_rgTimelineOffsets.length - 1) +
                  this.GetTimelineMarginWidth() * 2,
              );
            if (this.m_msVisible >= _) return;
            const _ = this.m_msVisible * 1.1 ** _ - this.m_msVisible,
              _ = _ * _,
              _ = this.ConvertPXOffsetToGlobalMS(this.m_scrollLeftPX),
              _ = Math.min(this.m_msVisible + _, _);
            (this.m_msVisible = _),
              (this.m_bCustomZoom = !0),
              this.ScrollToOffset(this.ConvertGlobalMSToGlobalPXOffset(_ - _));
          }
          IsTempZoom() {
            return !!this.m_prevLeftAndVisible;
          }
          SetTempZoomScale(_, _) {
            let _ = Math.max(_, 0),
              _ = Math.min(_, this.m_durationMS);
            (this.m_prevLeftAndVisible = [
              this.m_scrollLeftPX,
              this.m_msVisible,
            ]),
              (this.m_msVisible = _ - _);
            const _ = this.ConvertGlobalMSToGlobalPXOffset(_);
            this.ScrollToOffset(_);
          }
          ClearTempZoomScale() {
            if (!this.m_prevLeftAndVisible) return;
            const [_, _] = this.m_prevLeftAndVisible;
            (this.m_prevLeftAndVisible = null),
              this.ScrollToOffset(_),
              (this.m_msVisible = _);
          }
          SetUserIsClipping(_) {
            this.m_bUserClipping = _;
          }
          GetTimelineGapWidth() {
            return _;
          }
          GetTimelineMarginWidth() {
            return 12;
          }
          UpdateClipSummaries(_ = []) {
            this.m_mapTimelineClips.clear(),
              _.forEach((_) => {
                const _ = _.start_timeline_id;
                this.m_mapTimelineClips.has(_) ||
                  this.m_mapTimelineClips.set(_, []);
                const _ = {
                  clipID: _.clip_id,
                  msDuration: parseInt(_.duration_ms),
                  msTimelineOffset: parseInt(_.start_offset_ms),
                  timelineID: _,
                };
                this.m_mapTimelineClips.get(_).push(_);
              });
          }
          BEmpty() {
            return this.m_timelineMask.BEmpty();
          }
          ComputeTimelineOffset(_) {
            const _ = isNaN(parseInt(_.metadata.duration_ms))
                ? 0
                : parseInt(_.metadata.duration_ms),
              _ = _.metadata.recordings.map((_) => {
                const _ = parseInt(_.start_offset_ms);
                let _ = parseInt(_.duration_ms);
                return (
                  isNaN(_) &&
                    this.m_timelineMask.IsActiveRecording(_.recording_id) &&
                    (_ = _ - _),
                  {
                    recordingID: _.recording_id,
                    timelineOffsetMS: _,
                    nDurationMS: _,
                    bIsActive: this.m_timelineMask.IsActiveRecording(
                      _.recording_id,
                    ),
                    recordingType: _.recording_type,
                  }
                );
              }),
              _ = (_.metadata.phases || []).map((_) => {
                const _ = parseInt(_.background_timeline_offset),
                  _ = parseInt(_.duration_ms);
                return {
                  timelineOffsetMS: _,
                  nDurationMS: _,
                  phase: _,
                };
              });
            return {
              timelineID: _.metadata.timeline_id,
              globalOffsetMS: _.nGlobalOffsetMS.valMS,
              nDurationMS: _,
              recordingOffsets: _,
              phaseOffsets: _,
            };
          }
          GetCurrentZoomScale() {
            return this.m_msVisible / (this.m_scrollWindowWidth || 1) || 1;
          }
          GetClipsForTimeline(_) {
            return this.m_mapTimelineClips.get(_) || [];
          }
          ComputeEntriesForTimeline(_) {
            const _ = this.m_timelineMask.GetTimelineDataOrStartLoad(_);
            !_ ||
              _.m_strState != "loaded" ||
              this.m_mapTimelineEntries.set(_, {
                rgGameModes: _.m_rgGameModeChanges,
                rgHighlights: _.m_rgEntries,
              });
          }
          GetVisibleTimelineGameModes(_) {
            var _;
            return (_ = this.m_mapTimelineEntries.get(_)) == null
              ? void 0
              : _.rgGameModes;
          }
          GetVisibleTimelineHighlights(_) {
            var _;
            return (_ = this.m_mapTimelineEntries.get(_)) == null
              ? void 0
              : _.rgHighlights;
          }
          GetStateDescriptionAtGlobalMS(_) {
            return this.m_timelineMask.GetStateDescriptionAtGlobalMS(_);
          }
          FindRangeEventsAtGlobalMS(_) {
            return this.m_timelineMask.FindRangeEventsAtGlobalMS(_);
          }
          GetTimelineOffsetMS(_) {
            return this.m_timelineMask.GetTimelineStartBeforeGlobalZeroMS(_);
          }
          ScrollToCenteredGlobalMS(_) {
            const _ = this.ConvertGlobalMSToGlobalPXOffset(_);
            this.ScrollToOffsetCentered(_);
          }
          ScrollToOffset(_) {
            this.m_scrollLeftPX = (0, _._)(_, 0, this.GetMaxScrollLeftPX());
          }
          ScrollToOffsetCentered(_) {
            const _ = Math.max(0, _ - 0.5 * this.m_scrollWindowWidth);
            this.ScrollToOffset(_);
          }
          ScrollBy(_) {
            const _ = this.m_scrollLeftPX + _;
            this.ScrollToOffset(_);
          }
          GetAutoScrollPaused() {
            return this.m_bAutoScrollPaused;
          }
          SetAutoScrollPaused(_) {
            this.ClearAutoScrollPauseTimeout(), (this.m_bAutoScrollPaused = _);
          }
          GetAutoScrollPauseTimeout() {
            return this.m_autoScrollPauseTimeout;
          }
          ClearAutoScrollPauseTimeout() {
            this.m_autoScrollPauseTimeout &&
              clearTimeout(this.m_autoScrollPauseTimeout),
              (this.m_autoScrollPauseTimeout = null);
          }
          SetAutoScrollPauseTimeout(_ = _) {
            this.ClearAutoScrollPauseTimeout(),
              (this.m_autoScrollPauseTimeout = window.setTimeout(() => {
                this.SetAutoScrollPaused(!1);
              }, _));
          }
          ScrollToEnd() {
            this.ScrollToOffset(this.GetMaxScrollLeftPX());
          }
          SetScrollWindowWidth(_) {
            (this.m_scrollWindowWidth = _),
              this.m_timelineMask.BInitialized() &&
                (this.ScrollToOffset(this.m_scrollLeftPX),
                this.InitDefaultsIfReady());
          }
          SetScrollWindowOffset(_) {
            this.m_scrollWindowOffsetPX = _;
          }
          GetScrollWindowOffset() {
            return this.m_scrollWindowOffsetPX;
          }
          GetScrollableWidthPX() {
            var _;
            if (!((_ = this.m_rgTimelineOffsets) != null && _.length)) return 0;
            const _ = this.m_rgTimelineOffsets.length - 1,
              _ = this.m_rgTimelineOffsets[_];
            return (
              _ * _ +
              this.ConvertDurationMSToDeltaPX(_.globalOffsetMS + _.nDurationMS)
            );
          }
          GetOverscanWidth() {
            return (this.GetScrollWindowWidth() * _) / 100;
          }
          GetScrollWindowWidth() {
            return this.m_scrollWindowWidth;
          }
          GetMaxScrollLeftPX() {
            return Math.max(
              0,
              this.GetScrollableWidthPX() -
                this.GetScrollWindowWidth() +
                2 * this.GetTimelineMarginWidth(),
            );
          }
          BReachedMaxScroll() {
            return (
              Math.ceil(this.m_scrollLeftPX) ===
              Math.ceil(this.GetMaxScrollLeftPX())
            );
          }
          BReachedMinScroll() {
            return this.m_scrollLeftPX === 0;
          }
          GetVisualWindowStartPX() {
            return this.m_scrollLeftPX;
          }
          GetVisualWidth() {
            return Math.min(
              this.m_scrollWindowWidth,
              this.GetScrollableWidthPX() + 2 * this.GetTimelineMarginWidth(),
            );
          }
          GetVirtualWindowStartPX() {
            return Math.max(this.m_scrollLeftPX - this.GetOverscanWidth(), 0);
          }
          GetVirtualWindowWidthPX() {
            const _ = (0, _._)(this.m_scrollLeftPX, 0, this.GetOverscanWidth()),
              _ = Math.min(
                this.GetScrollableWidthPX() -
                  (this.m_scrollLeftPX + this.m_scrollWindowWidth),
                this.GetOverscanWidth(),
              );
            return _ + this.m_scrollWindowWidth + _;
          }
          GetVirtualWindowEndPX() {
            return (
              this.GetVirtualWindowStartPX() + this.GetVirtualWindowWidthPX()
            );
          }
          GetVisibleTimelines() {
            const _ =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.GetVirtualWindowStartPX(),
                ) + 1,
              _ = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.GetVirtualWindowEndPX(),
              );
            return this.m_rgTimelineOffsets.slice(_, _ + 1).map((_) => {
              const _ = Math.max(
                  _.globalOffsetMS,
                  this.ConvertPXOffsetToGlobalMS(
                    this.GetVirtualWindowStartPX(),
                  ),
                ),
                _ = Math.min(
                  _.nDurationMS - (_ - _.globalOffsetMS),
                  this.ConvertDeltaPXToDurationMS(
                    this.GetVirtualWindowWidthPX(),
                  ),
                ),
                _ = this.ConvertGlobalMSToGlobalPXOffset(_),
                _ = this.ConvertDurationMSToDeltaPX(_),
                _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
                _ = this.ConvertDurationMSToDeltaPX(_.nDurationMS);
              return {
                ..._,
                pxStart: _,
                pxDuration: _,
                msVisibleStart: _,
                msVisibleDuration: _,
                pxVisibleStart: _,
                pxVisibleDuration: _,
              };
            });
          }
          GetVisibleRecordings() {
            const _ = [];
            return (
              this.GetVisibleTimelines().forEach((_) => {
                _.recordingOffsets.forEach((_) => {
                  const _ =
                      _.pxStart + this.GetPXForDuration(_.timelineOffsetMS),
                    _ = _ + this.GetPXForDuration(_.nDurationMS);
                  _ < this.GetVirtualWindowStartPX() ||
                    _ > this.GetVirtualWindowEndPX() ||
                    _.push({
                      recordingID: _.recordingID,
                      nStartPX: _,
                      nEndPX: _,
                      bIsActive: _.bIsActive,
                      recordingType: _.recordingType,
                    });
                });
              }),
              _
            );
          }
          GetVisibleClips() {
            const _ = [];
            return (
              this.GetVisibleTimelines().forEach((_) => {
                const _ = this.ConvertGlobalMSToGlobalPXOffset(
                  _.globalOffsetMS,
                );
                this.GetClipsForTimeline(_.timelineID).forEach((_) => {
                  const _ = _ + this.GetPXForDuration(_.msTimelineOffset),
                    _ = Math.min(
                      this.GetVirtualWindowEndPX(),
                      this.ConvertGlobalMSToGlobalPXOffset(
                        _.globalOffsetMS + _.msTimelineOffset + _.msDuration,
                      ),
                    );
                  _ < this.GetVirtualWindowStartPX() ||
                    _ > this.GetVirtualWindowEndPX() ||
                    _.push({
                      clipID: _.clipID,
                      pxClipStart: _,
                      pxClipEnd: _,
                    });
                });
              }),
              _
            );
          }
          GetPXForDuration(_) {
            return _ / this.GetCurrentZoomScale();
          }
          GetVisibleTimelinesInWindow() {
            const _ =
                this.FindIndexOfClosestTimelineEndForOffsetPX(
                  this.m_scrollLeftPX,
                ) + 1,
              _ = this.FindIndexOfClosestTimelineStartForOffsetPX(
                this.m_scrollLeftPX + this.m_scrollWindowWidth,
              );
            return this.m_rgTimelineOffsets.slice(_, _ + 1);
          }
          GetVisibleWindowRelativeTimelines() {
            return this.GetVisibleTimelinesInWindow().map((_) => {
              const _ = this.m_scrollLeftPX,
                _ = this.GetVirtualWindowEndPX() - this.GetOverscanWidth(),
                _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
                _ = _ + this.ConvertDurationMSToDeltaPX(_.nDurationMS),
                _ = Math.max(_, _),
                _ = Math.min(_, _);
              return {
                timelineID: _.timelineID,
                nVisibleStartPX: _,
                nEndPX: _,
                nTimelineStartMS: this.ConvertPXToTimelineRelativeMS(_),
                nGlobalStartMS: this.ConvertPXOffsetToGlobalMS(_),
              };
            });
          }
          ConvertPXToTimelineRelativeMS(_, _ = "start") {
            const _ = this.ConvertPXOffsetToGlobalMS(_);
            let _ = this.m_timelineMask.GetTimelineOffsetFromGlobal(_, 0);
            return _ == "end-if-active" &&
              _.strTimelineID &&
              this.m_timelineMask.IsActiveTimeline(_.strTimelineID)
              ? this.m_timelineMask.MakeRelativeToTimelineEndIfActive(
                  _.strTimelineID,
                  _.nTimelineOffsetMS.valMS,
                )
              : _.nTimelineOffsetMS.valMS;
          }
          GetTimeRecorded(_) {
            return this.m_timelineMask.GetTimelineStartTime(_);
          }
          ConvertGlobalMSToClipOrNone(_) {
            if (!this.m_timelineMask) return null;
            const _ = this.m_timelineMask.GetTimelineOffsetFromGlobal(_, 0);
            if (!_) return null;
            const { nTimelineOffsetMS: _, strTimelineID: _ } = _;
            return _ && this.m_mapTimelineClips.has(_)
              ? this.m_mapTimelineClips
                  .get(_)
                  .find(
                    (_) =>
                      _.msTimelineOffset <= _.valMS &&
                      _.msTimelineOffset + _.msDuration >= _.valMS,
                  )
              : null;
          }
          ConvertGlobalMSToScrollWindowPXOffset(_) {
            return (
              this.ConvertGlobalMSToGlobalPXOffset(_) - this.m_scrollLeftPX
            );
          }
          ConvertGlobalMSToGlobalPXOffset(_, _ = -1) {
            _ < 0 &&
              (_ = _._(this.m_rgTimelineOffsets, (_) => _ - _.globalOffsetMS));
            const _ = _ * _;
            return this.ConvertDurationMSToDeltaPX(_) + _;
          }
          ConvertPXOffsetToGlobalMS(_, _ = !0) {
            if (this.BPositionInGap(_)) {
              if (!_) return null;
              const _ = this.FindClosestTimelineEndForOffsetPX(_);
              return _ ? _.globalOffsetMS + _.nDurationMS : 0;
            }
            const _ = this.FindClosestTimelineStartForOffsetPX(_);
            if (!_) return null;
            const _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
              _ = this.ConvertDeltaPXToDurationMS(_ - _);
            return _.globalOffsetMS + _;
          }
          FindClosestTimelineEndForOffsetPX(_) {
            const _ = this.FindIndexOfClosestTimelineEndForOffsetPX(_);
            return _ < 0 ? null : this.m_rgTimelineOffsets[_];
          }
          FindClosestTimelineStartForOffsetPX(_) {
            const _ = this.FindIndexOfClosestTimelineStartForOffsetPX(_);
            return _ < 0 ? null : this.m_rgTimelineOffsets[_];
          }
          FindIndexOfClosestTimelineEndForOffsetPX(_) {
            return _._(this.m_rgTimelineOffsets, (_) => {
              const _ =
                this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS) +
                this.ConvertDurationMSToDeltaPX(_.nDurationMS);
              return _ - _;
            });
          }
          FindIndexOfClosestTimelineStartForOffsetPX(_) {
            return _._(this.m_rgTimelineOffsets, (_) => {
              const _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS);
              return _ - _;
            });
          }
          FindTimelineOffsets(_) {
            return this.m_rgTimelineOffsets.find((_) => _.timelineID === _);
          }
          BPositionInGap(_) {
            const _ = this.FindIndexOfClosestTimelineEndForOffsetPX(_);
            if (_ < 0) return !1;
            const _ = _ + 1;
            if (_ >= this.m_rgTimelineOffsets.length) return !1;
            const _ = this.m_rgTimelineOffsets[_],
              _ = this.m_rgTimelineOffsets[_],
              _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS),
              _ = this.ConvertGlobalMSToGlobalPXOffset(_.globalOffsetMS);
            return _ < _ && _ !== _;
          }
          ConvertDurationMSToDeltaPX(_) {
            return _ / this.GetCurrentZoomScale();
          }
          ConvertDeltaPXToDurationMS(_) {
            return _ * this.GetCurrentZoomScale();
          }
          SetPhaseToHighlight(_) {
            this.m_phaseToHighlight = _;
          }
          GetPhaseToHighlight() {
            return this.m_phaseToHighlight;
          }
        }
        _([_.__webpack_require__], _.prototype, "m_durationMS", 2),
          _([_.__webpack_require__], _.prototype, "m_scrollLeftPX", 2),
          _([_.__webpack_require__], _.prototype, "m_scrollWindowWidth", 2),
          _([_.__webpack_require__], _.prototype, "m_scrollWindowOffsetPX", 2),
          _([_.__webpack_require__], _.prototype, "m_bAutoScrollPaused", 2),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_autoScrollPauseTimeout",
            2,
          ),
          _([_.__webpack_require__], _.prototype, "m_msVisible", 2),
          _([_.__webpack_require__.ref], _.prototype, "m_rgTimelineOffsets", 2),
          _([_.__webpack_require__], _.prototype, "m_bInitialized", 2),
          _([_.__webpack_require__], _.prototype, "m_eThumbnailComponent", 2),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_nGlobalRelativeThumbnailPositionPX",
            2,
          ),
          _(
            [_.__webpack_require__],
            _.prototype,
            "m_thumbnailHighlightEntry",
            2,
          ),
          _([_.__webpack_require__], _.prototype, "m_phaseToHighlight", 2),
          _([_.__webpack_require__], _.prototype, "OnLoaderInitialized", 1),
          _([_.__webpack_require__], _.prototype, "InitDefaultsIfReady", 1),
          _([_.__webpack_require__], _.prototype, "OnInvalidate", 1),
          _([_.__webpack_require__], _.prototype, "ZoomIn", 1),
          _([_.__webpack_require__], _.prototype, "ZoomOut", 1),
          _([_.__webpack_require__], _.prototype, "SetTempZoomScale", 1),
          _([_.__webpack_require__], _.prototype, "ClearTempZoomScale", 1),
          _([_.__webpack_require__], _.prototype, "UpdateClipSummaries", 1),
          _([_.__webpack_require__], _.prototype, "BReachedMaxScroll", 1),
          _([_.__webpack_require__], _.prototype, "BReachedMinScroll", 1);
        const __webpack_require__ = _.createContext(null);
        function _(_) {
          let {
              loader: _,
              playbackCoordinator: _,
              children: _,
              clipSummaries: _,
              refTimelineParentCtn: _,
            } = _,
            [_, _] = (0, _.useState)(null);
          return (
            (0, _.useEffect)(() => {
              if (!_) return;
              let _ = new _(_, _, _);
              return _(_), () => _.Close();
            }, [_]),
            (0, _.useEffect)(() => {
              _ && _.UpdateClipSummaries(_);
            }, [_, _]),
            (0, _.useEffect)(() => {
              _ && _ && _.SetTimelineParentCtnRef(_.current);
            }, [_, _]),
            _(_),
            _(_),
            _
              ? (0, _.jsx)(_.Provider, {
                  value: _,
                  children: _,
                })
              : null
          );
        }
        function _(_) {
          let _ = _.useCallback(
            (_, _) => {
              if (!_) return;
              if (!_ || !_) {
                _.ClearTempZoomScale();
                return;
              }
              let _ = Math.floor((_.valMS - _.valMS) * 0.1),
                _ = _.valMS - _.valMS;
              _ < _ * 0.9 && (_ = Math.floor((_ - _) / 2));
              let _ = _.valMS - _,
                _ = _.valMS + _;
              _.SetTempZoomScale(_, _);
            },
            [_],
          );
          _(_);
        }
        function _(_) {
          let _ = _();
          (0, _.useEffect)(() => {
            _ && _.SetUserIsClipping(_);
          }, [_, _]);
        }
        function _() {
          return (0, _.useContext)(_);
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = (0, _.createContext)({});
        function _(_) {
          const {
              children: _,
              onMarkerCreated: _,
              onNavigateToClip: _,
              onNavigateToScreenshot: _,
              onSetGamepadHeaderVisible: _,
              onShowProgressBar: _,
              onNavigateToGRSettings: _,
              onNavigateToMedia: _,
              onNavigateToFAQ: _,
              onShowError: _,
            } = _,
            _ = useMemo(
              () => ({
                onMarkerCreated: _,
                onNavigateToClip: _,
                onNavigateToGRSettings: _,
                onNavigateToScreenshot: _,
                onSetGamepadHeaderVisible: _,
                onShowProgressBar: _,
                onNavigateToMedia: _,
                onNavigateToFAQ: _,
                onShowError: _,
              }),
              [_, _, _, _, _, _, _, _, _],
            );
          return jsx(_.Provider, {
            value: _,
            children: _,
          });
        }
        function _() {
          return (0, _.useContext)(_);
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = null;
        async function _(_, _, _, _, _) {
          const _ = _.GetTimelineAndOffsetRelativeToCurrentPlayback(),
            _ = _.GetTimelineAndOffsetRelativeToCurrentPlayback(_);
          if (_ && _) {
            const _ = _.nGlobalOffsetMS - _.nGlobalOffsetMS,
              _ = await _.GenerateClipNameFromTimeline(
                _.strTimelineID,
                _.nTimelineOffsetMS,
                _.strTimelineID,
                _.nTimelineOffsetMS,
              );
            return _(
              _,
              _.GetClipID(),
              _,
              _.strTimelineID,
              _.nTimelineOffsetMS,
              _.strTimelineID,
              _.nTimelineOffsetMS,
              _,
              _,
              _,
              _,
            );
          } else LogWarning("Failed to determine time start/end for clip");
          return null;
        }
        async function _(_, _, _, _, _, _, _) {
          if (!isNaN(_) && !isNaN(_) && _ < _) {
            const _ = _.ConvertGlobalOffsetToTimelineRelativeOffset(_),
              _ = _.ConvertGlobalOffsetToTimelineRelativeOffset(_);
            if (_ && _) {
              const _ = _ - _,
                _ = await _.GenerateClipNameFromTimeline(
                  _.strTimelineID,
                  _.nTimelineOffsetMS.valMS,
                  _.strTimelineID,
                  _.nTimelineOffsetMS.valMS,
                );
              return _(
                _,
                _.GetClipID(),
                _,
                _.strTimelineID,
                _.nTimelineOffsetMS.valMS,
                _.strTimelineID,
                _.nTimelineOffsetMS.valMS,
                _,
                _,
                _,
                _,
              );
            } else
              LogWarning("Could not find the timeline for start or stop", _, _);
          } else LogWarning("Range not setup for creating the clip");
          return null;
        }
        class _ {
          constructor(_, _, _, _, _, _, _, _) {
            _(this, "m_bCreationWasTemporary"),
              _(this, "m_fnCreate"),
              _(this, "m_creationResult"),
              _(this, "m_bCleanedUp", !1),
              _(this, "m_nClipLengthSeconds"),
              _(this, "m_strSuggestedClipName"),
              _(this, "m_strGameID"),
              _(this, "m_strSrcClipID"),
              _(this, "m_eInitMethod"),
              _(this, "m_startMetrics"),
              _(this, "m_endMetrics"),
              (this.m_fnCreate = _),
              (this.m_nClipLengthSeconds = _),
              (this.m_strSuggestedClipName = _),
              (this.m_strGameID = _),
              (this.m_strSrcClipID = _),
              (this.m_eInitMethod = _),
              (this.m_startMetrics = _),
              (this.m_endMetrics = _);
          }
          Request() {
            return {
              create: this.create,
              cleanup: this.cleanup,
              bExistingClip: !1,
              nClipLengthSeconds: this.m_nClipLengthSeconds,
              strSuggestedClipName: this.m_strSuggestedClipName,
              gameID: new _._(this.m_strGameID),
              strSrcClipID: this.m_strSrcClipID,
              eInitMethod: this.m_eInitMethod,
              startMetrics: this.m_startMetrics,
              endMetrics: this.m_endMetrics,
            };
          }
          async create(_, _) {
            return this.m_creationResult
              ? Promise.resolve(this.m_creationResult)
              : ((this.m_creationResult = await this.m_fnCreate(_, _)),
                (this.m_bCreationWasTemporary = _),
                _(
                  new _._(this.m_strGameID),
                  this.m_eInitMethod,
                  this.m_nClipLengthSeconds,
                  this.m_startMetrics,
                  this.m_endMetrics,
                ),
                Promise.resolve(this.m_creationResult));
          }
          async cleanup() {
            var _;
            if (this.m_bCleanedUp)
              throw new Error("cleanup called twice on clip creation");
            if (
              ((this.m_bCleanedUp = !0),
              (_ = this.m_creationResult) != null &&
                _.clipSummary &&
                this.m_bCreationWasTemporary)
            ) {
              const { fnDeleteClip: _ } = _();
              await _(this.m_creationResult.clipSummary.clip_id);
            }
          }
        }
        _([_.__webpack_require__], _.prototype, "create", 1),
          _([_.__webpack_require__], _.prototype, "cleanup", 1);
        function _(_, _, _, _, _, _, _, _, _, _, _) {
          const _ = (_, _) => _(_, _, _, _, _, _, _, _, _);
          return new _(_, _ / 1e3, _, _, _, _, _, _).Request();
        }
        function _(_) {
          const _ = GetClipSummary(_);
          if (!_) return null;
          const _ = GetGRS().GetClipExportProgress(_),
            _ = parseInt(_.duration_ms) / 1e3,
            _ = _.file_size ? (parseInt(_.file_size) * 8) / (1024 * _) : void 0;
          class _ {
            constructor() {
              _(this, "m_bCreated", !1);
            }
            async create(_) {
              return (
                this.m_bCreated ||
                  ((this.m_bCreated = !0),
                  ReportClipRange(
                    new CGameID(_.game_id),
                    EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    parseInt(_.duration_ms) / 1e3,
                    {
                      relativeMS: 0,
                      originalRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                      latestRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    },
                    {
                      relativeMS: 0,
                      originalRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                      latestRangeMethod:
                        EClipRangeMethod.k_EClipRangeMethod_EntireClip,
                    },
                  )),
                Promise.resolve({
                  result: k_EResultOK,
                  clipSummary: _,
                })
              );
            }
            async cleanup() {
              return Promise.resolve();
            }
          }
          _([bind], _.prototype, "create", 1),
            _([bind], _.prototype, "cleanup", 1);
          let _ = new _();
          return {
            create: _.create,
            cleanup: _.cleanup,
            nClipLengthSeconds: _,
            bExistingClip: !0,
            strSuggestedClipName: _.name,
            strCurrentExportPath: _ == null ? void 0 : _.exportPath,
            strSrcClipID: _,
            gameID: new CGameID(_.game_id),
            nEstimatedBitrateKbps: _,
            eInitMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            startMetrics: {
              relativeMS: 0,
              originalRangeMethod:
                EClipRangeMethod.k_EClipRangeMethod_EntireClip,
              latestRangeMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            },
            endMetrics: {
              relativeMS: 0,
              originalRangeMethod:
                EClipRangeMethod.k_EClipRangeMethod_EntireClip,
              latestRangeMethod: EClipRangeMethod.k_EClipRangeMethod_EntireClip,
            },
          };
        }
        async function _(_, _, _, _, _, _, _, _, _) {
          const { fnSaveClip: _ } = _();
          (0, _._)(`start ${_} @ ${_} upto ${_} @ ${_}`);
          try {
            const _ = await _(
                _,
                _,
                _,
                {
                  timeline_id: _,
                  offset_ms: "" + _,
                },
                {
                  timeline_id: _,
                  offset_ms: "" + _,
                },
                _,
                _,
              ),
              { clipSummary: _, result: _ } = _;
            return (
              _
                ? (0, _._)(`Clip ${_.clip_id} created`)
                : (0, _._)(`Clip was not created: ${_}`),
              _
            );
          } catch (_) {
            (0, _._)(_);
          }
          return {
            result: _._,
          };
        }
        const __webpack_require__ = 20,
          __webpack_require__ = "PhaseList";
        function _(_) {
          const _ = _.tags || {};
          return {
            filter_gameid: _.gameid,
            filter_search_string: _.strSearch || void 0,
            filter_tags: Object.keys(_).map((_) => ({
              group: _,
              name: _[_],
            })),
            filter_phase_id: _.phaseID,
          };
        }
        function _(_ = {}) {
          _();
          const _ = _(_);
          return useInfiniteQuery({
            queryKey: [_, "Query", _],
            queryFn: async (_) => {
              const _ = (
                await GameRecordingService.QueryPhases({
                  count: _,
                  page: _.pageParam,
                  ..._,
                })
              )
                .Body()
                .toObject();
              if (_.strSearch && _.strSearch.trim()) {
                const _ = _.strSearch.toLowerCase();
                for (const _ of _.phases)
                  for (const _ of _.tags)
                    _.bFilterMatch = _.name.toLowerCase().indexOf(_) > -1;
              }
              return {
                ..._,
                nextPage: _.phases.length === _ ? _.pageParam + 1 : null,
              };
            },
            initialPageParam: 0,
            getNextPageParam: (_) => _.nextPage,
          });
        }
        function _() {
          const _ = useQueryClient();
          useEffect(() => {
            const _ = () => (
                _.invalidateQueries({
                  queryKey: [_],
                }),
                k_EResultOK
              ),
              _ = GameRecordingService.RegisterForNotifyPhaseListChanged(_),
              _ = GameRecordingService.RegisterForNotifyClipCreated(_),
              _ = GameRecordingService.RegisterForNotifyClipDeleted(_);
            return () => {
              _.unregister(), _.unregister(), _.unregister();
            };
          }, [_]);
        }
        function _(_) {
          return useQuery({
            queryKey: [_, "GetTags", _],
            queryFn: async () => {
              const _ = (
                  await GameRecordingService.GetTags({
                    game_id: _,
                  })
                )
                  .Body()
                  .toObject().tags,
                { rgIconGroups: _ } = _(_);
              return _.sort((_, _) => _[0].priority - _[0].priority);
            },
          });
        }
        function _(_) {
          const _ = {};
          for (const _ of _)
            _[_.group] || (_[_.group] = []), _[_.group].push(_);
          const _ = [],
            _ = [];
          for (const _ of Object.values(_)) {
            const _ = _.some(({ icon: _ }) => !!_);
            _.sort((_, _) => _.priority - _.priority),
              _ ? _.push(_) : _.push(..._);
          }
          return {
            rgIconGroups: _,
            rgTextOnlyTags: _,
          };
        }
        function _(_, _) {
          return useMemo(() => _(_, _), [_, _]);
        }
        function _(_ = [], _ = []) {
          const { rgIconGroups: _, rgTextOnlyTags: _ } = _(_),
            _ = [
              ..._.map((_) => ({
                type: "attribute",
                attribute: _,
              })),
              ..._.map((_) => ({
                type: "tags",
                tags: _,
              })),
            ],
            _ = (_) =>
              _.type === "attribute"
                ? _.attribute.priority
                : _.tags[0].priority;
          return (
            _.sort((_, _) => _(_) - _(_)),
            {
              rgMetadata: _,
              rgDemoted: _,
            }
          );
        }
        function _(_) {
          return _(_.date_recorded);
        }
        function _(_) {
          const _ = new Date(),
            _ = new Date(_ * 1e3),
            _ = _.getFullYear() == _.getFullYear(),
            _ = IsDateSameDay(_, _);
          let _ = "";
          if (!_) {
            const _ = {
              day: "numeric",
              month: "short",
              year: _ ? void 0 : "numeric",
            };
            _ = _.toLocaleDateString(
              LocalizationManager.GetPreferredLocales(),
              _,
            );
          }
          const _ = {
              hour: "numeric",
              minute: "numeric",
            },
            _ = _.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              _,
            ),
            _ = _ ? `${_} ${_}` : _;
          return {
            strDate: _,
            strTime: _,
            strDateTime: _,
          };
        }
        function _(_, _) {
          const _ = new Date(),
            _ = new Date(_ * 1e3),
            _ = new Date(_ * 1e3),
            _ = _.getFullYear() == _.getFullYear(),
            _ = _.getFullYear() == _.getFullYear(),
            _ = _ && _.getMonth() == _.getMonth(),
            _ = _ && _.getDate() == _.getDate(),
            { strDateTime: _ } = _(_);
          let _ = "";
          if (!_) {
            const _ = {
              day: "numeric",
              month: _ && _ ? void 0 : "short",
              year: _ ? void 0 : "numeric",
            };
            _ =
              _.toLocaleDateString(
                LocalizationManager.GetPreferredLocales(),
                _,
              ) + " ";
          }
          const _ = {
              hour: "numeric",
              minute: "numeric",
            },
            _ = _.toLocaleTimeString(
              LocalizationManager.GetPreferredLocales(),
              _,
            );
          return `${_} - ${_}${_}`;
        }
        function _(_, _, _, _) {
          const _ = _ + 1,
            _ = _ + _ - 2;
          return _(
            _,
            void 0,
            void 0,
            _,
            _,
            _,
            _,
            _ - _,
            _._._,
            {
              latestRangeMethod: _._._,
              originalRangeMethod: _._._,
              relativeMS: 0,
            },
            {
              latestRangeMethod: _._._,
              originalRangeMethod: _._._,
              relativeMS: 0,
            },
          ).create(!1);
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = _.createContext({
          bInContainer: !1,
          bContainerFocus: !1,
          nMouseClientXPX: null,
          globalMouseXPX: null,
          scrollWindowMouseXPX: null,
          fnRegisterMouseEvent: null,
          bContextMenuOpen: !1,
          setContextMenuOpen: () => {},
        });
        function _(_) {
          const { children: _ } = _,
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(),
            _ = (0, _.useRef)(void 0),
            _ = _(),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _._)(() => _.GetVisualWindowStartPX()),
            _ = (0, _._)(() => _.GetScrollWindowWidth()),
            _ = (0, _._)(() => _.GetScrollWindowOffset()),
            _ = (0, _._)(() => _.GetTimelineMarginWidth()),
            _ = _.useMemo(() => {
              if (_.current) {
                const _ = _ - _ - _;
                return (0, _._)(_._(_ + _, 0, _));
              }
              return (0, _._)(0);
            }, [_, _, _, _, _]),
            _ = _.useMemo(() => {
              if (_.current) {
                const _ = _.current.getBoundingClientRect(),
                  _ = _ > _ ? _ : _._;
                return (0, _._)(_._(_ - _, 0, _));
              }
              return (0, _._)(0);
            }, [_, _, _, _]),
            _ = (0, _.useCallback)(
              (_, _) => (
                _.current && _.current.addEventListener(_, _),
                () => {
                  var _;
                  return (_ = _.current) == null
                    ? void 0
                    : _.removeEventListener(_, _);
                }
              ),
              [],
            ),
            _ = (0, _.useCallback)(() => _(!0), []),
            _ = (0, _.useCallback)(() => _(!1), []),
            _ = (0, _.useCallback)((_) => _(_.clientX), []),
            _ = (0, _.useCallback)((_) => _(!0), []),
            _ = (0, _.useCallback)((_) => _(!1), []);
          (0, _.useEffect)(() => {
            const _ = (0, _._)(_.current);
            return (
              _.addEventListener("mousemove", _),
              () => _.removeEventListener("mousemove", _)
            );
          }, [_]);
          const _ = (0, _.useMemo)(
            () => ({
              bContainerFocus: _,
              bInContainer: _,
              nMouseClientXPX: _,
              globalMouseXPX: _,
              scrollWindowMouseXPX: _,
              fnRegisterMouseEvent: _,
              bContextMenuOpen: _,
              setContextMenuOpen: _,
            }),
            [_, _, _, _, _, _, _],
          );
          return (0, _.jsx)(_.Provider, {
            value: _,
            children: (0, _.jsx)("div", {
              ref: _,
              onMouseOver: _,
              onFocus: _,
              onMouseOut: _,
              onBlur: _,
              onMouseEnter: _,
              onMouseLeave: _,
              className: _.MouseListenerContainer,
              children: _,
            }),
          });
        }
        function _() {
          return (0, _.useContext)(_);
        }
        function _() {
          return _().globalMouseXPX;
        }
        function _() {
          return _().scrollWindowMouseXPX;
        }
        function _() {
          return _().bInContainer;
        }
        function _() {
          return _().bContainerFocus;
        }
        function _() {
          const _ = _();
          return [_.bContextMenuOpen, _.setContextMenuOpen];
        }
        function _(_, _) {
          const _ = _().fnRegisterMouseEvent,
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useCallback)(() => {
              _.current = _(_, _);
            }, [_, _, _]),
            _ = (0, _.useCallback)(() => {
              _.current && _.current();
            }, []);
          (0, _.useEffect)(() => (_(), () => _()), [_, _]);
        }
        function _() {
          const _ = _(),
            _ = _(),
            _ = _(),
            _ = (0, _._)(() => !_.ShouldModeShowClipControls()),
            _ = _(),
            { onMarkerCreated: _, onNavigateToClip: _ } = _(),
            [_, _] = _();
          return _.useCallback(
            (_, _, _, _) =>
              _ || _
                ? null
                : (0, _._)(
                    (0, _.jsx)(_, {
                      isCurrentPlayback: _,
                      nGlobalOffsetMS: _,
                      playbackCoordinator: _,
                      timelineView: _,
                      fnSetSelectionClipRange: _,
                      onMarkerCreated: _,
                      onNavigateToClip: _,
                      onContextMenuOpenChange: _,
                    }),
                    _,
                    _,
                  ),
            [_, _, _, _, _, _, _, _],
          );
        }
        function _(_) {
          const {
              playbackCoordinator: _,
              timelineView: _,
              nGlobalOffsetMS: _,
              fnSetSelectionClipRange: _,
              isCurrentPlayback: _,
              onMarkerCreated: _,
              onNavigateToClip: _,
              onContextMenuOpenChange: _,
            } = _,
            _ = (0, _._)(() => _.GetClipsAtGlobalMS(_)),
            _ = _(_);
          (0, _.useEffect)(() => (_(!0), () => _(!1)), [_]);
          const _ = (() => {
              const { strTimelineID: _, nTimelineOffsetMS: _ } =
                _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS);
              if (!_) return null;
              const _ = _.GetLoader().GetTimelineData(_);
              if (!_) return null;
              const _ = _._(_.m_rgPhases, (_) => _.valMS - parseInt(_.time));
              if (_ < 0) return null;
              const _ = _.m_rgPhases[_];
              return _.valMS >= parseInt(_.time) &&
                _.valMS <= parseInt(_.time) + parseInt(_.duration)
                ? {
                    strTimelineID: _,
                    phase: _,
                  }
                : null;
            })(),
            _ = (_) => {
              const _ = (_, _) => {
                _ && _(_, _, _);
              };
              _.AddUserMarkerAtGlobalMS(
                _,
                "/GameRecording/AddMarker/TimelineCtxMenu",
                _,
              ),
                _.SetPlaytimeFromGlobalMS(_),
                _.FocusGlobalMS(_);
            },
            _ = () => {
              _(_, _._._, _, void 0),
                _.SetPlaytimeFromGlobalMS(_),
                _.FocusGlobalMS(_);
            },
            _ = () => {
              _(_, _._._, void 0, _),
                _.SetPlaytimeFromGlobalMS(_),
                _.FocusGlobalMS(_);
            },
            _ = () => {
              _.length > 0 &&
                (_._.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/TimelineCtxMenu",
                ),
                _ && _(_[0].strClipID));
            },
            _ = () => {
              const { strTimelineID: _, nTimelineOffsetMS: _ } =
                  _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS),
                _ = _.GetLoader().GetTimelineStartBeforeGlobalZeroMS(_);
              _(_.GetGameID(), _, _, _.GetClipID());
            },
            _ = () => {
              if (!_) return;
              const { phase: _, strTimelineID: _ } = _;
              _(_.GetGameID(), _, parseInt(_.time), parseInt(_.duration));
            },
            _ = (_) => _.SetPhaseToHighlight(_);
          return (
            (0, _.useEffect)(() => () => _.SetPhaseToHighlight(null), [_]),
            (0, _.jsxs)(_._, {
              refInstance: _,
              children: [
                (0, _.jsx)(_._, {
                  onSelected: _,
                  className: _.TimelineContextMenuItem,
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(_.MenuItem, _.AddUserMarker),
                    children: [
                      (0, _.jsx)(_._, {}),
                      (0, _._)(
                        _
                          ? "#Playback_UserSelectionControls_AddUserMarker"
                          : "#TimelineDialog_AddMarker",
                      ),
                    ],
                  }),
                }),
                (0, _.jsx)(_._, {
                  onSelected: _,
                  className: _.TimelineContextMenuItem,
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(_.MenuItem, _.TakeScreenshot),
                    children: [
                      (0, _.jsx)(_._, {}),
                      (0, _._)(
                        _
                          ? "#Playback_UserSelectionControls_TakeScreenshot"
                          : "#TimelineDialog_TakeScreenshot",
                      ),
                    ],
                  }),
                }),
                (0, _.jsx)(_._, {
                  onSelected: _,
                  className: _.TimelineContextMenuItem,
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(_.MenuItem, _.StartEndClip),
                    children: [
                      (0, _.jsx)(_._, {
                        direction: "left",
                      }),
                      (0, _._)(
                        _
                          ? "#Playback_UserSelectionControls_SetClipStart"
                          : "#TimelineContext_SetClipStart",
                      ),
                    ],
                  }),
                }),
                (0, _.jsx)(_._, {
                  onSelected: _,
                  className: _.TimelineContextMenuItem,
                  children: (0, _.jsxs)("div", {
                    className: (0, _._)(_.MenuItem, _.StartEndClip),
                    children: [
                      (0, _.jsx)(_._, {
                        direction: "right",
                      }),
                      (0, _._)(
                        _
                          ? "#Playback_UserSelectionControls_SetClipEnd"
                          : "#TimelineContext_SetClipEnd",
                      ),
                    ],
                  }),
                }),
                !!_ &&
                  (0, _.jsx)(_._, {
                    onSelected: _,
                    className: _.TimelineContextMenuItem,
                    onMouseOver: () => _([_.strTimelineID, _.phase.time]),
                    onMouseLeave: () => _(null),
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.ClipPhase),
                      children: [
                        (0, _.jsx)(_._, {}),
                        (0, _._)("#TimelineDialog_ClipPhase"),
                      ],
                    }),
                  }),
                _.length > 0 &&
                  (0, _.jsx)(_._, {
                    onSelected: _,
                    className: _.TimelineContextMenuItem,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.ViewClip),
                      children: [
                        (0, _.jsx)(_.CeX, {}),
                        (0, _._)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  }),
              ],
            })
          );
        }
        function _() {
          const _ = _(),
            _ = _(),
            _ = (0, _._)(() => !_.ShouldModeShowClipControls()),
            _ = _(),
            { onMarkerCreated: _ } = _();
          return _.useCallback(
            (_, _) => {
              if (_ || _) return;
              const _ = (0, _.jsx)(_, {
                onMarkerCreated: _,
                playbackCoordinator: _,
                fnSetSelectionClipRange: _,
              });
              (0, _._)(_, _, _);
            },
            [_, _, _, _, _],
          );
        }
        function _(_) {
          const { playbackCoordinator: _, fnSetSelectionClipRange: _ } = _,
            _ = (0, _.useRef)(void 0),
            { onMarkerCreated: _ } = _(),
            _ = (_) => {
              const _ = (_, _) => {
                  _ && _(_, _, _);
                },
                _ = _.GetGlobalMSPlaytime();
              _.AddUserMarkerAtGlobalMS(
                _,
                "/GameRecording/AddMarker/VideoCtxMenu",
                _,
              ),
                _.SetPlaytimeFromGlobalMS(_),
                _.FocusGlobalMS(_);
            },
            _ = () => {
              const _ = _.GetGlobalMSPlaytime();
              _(_, _._._, _, void 0),
                _.SetPlaytimeFromGlobalMS(_),
                _.FocusGlobalMS(_);
            },
            _ = () => {
              const _ = _.GetGlobalMSPlaytime();
              _(_, _._._, void 0, _),
                _.SetPlaytimeFromGlobalMS(_),
                _.FocusGlobalMS(_);
            },
            _ = () => {
              const _ = _.GetGlobalMSPlaytime(),
                { strTimelineID: _, nTimelineOffsetMS: _ } =
                  _.ConvertGlobalOffsetToTimelineRelativeOffset(_.valMS),
                _ = _.GetLoader().GetTimelineStartBeforeGlobalZeroMS(_);
              _(_.GetGameID(), _, _, _.GetClipID());
            };
          return (0, _.jsxs)(_._, {
            refInstance: _,
            children: [
              (0, _.jsx)(_._, {
                onSelected: _,
                className: _.TimelineContextMenuItem,
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(_.MenuItem, _.AddUserMarker),
                  children: [
                    (0, _.jsx)(_._, {}),
                    (0, _._)("#Playback_UserSelectionControls_AddUserMarker"),
                  ],
                }),
              }),
              (0, _.jsx)(_._, {
                onSelected: _,
                className: _.TimelineContextMenuItem,
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(_.MenuItem, _.TakeScreenshot),
                  children: [
                    (0, _.jsx)(_._, {}),
                    (0, _._)("#Playback_UserSelectionControls_TakeScreenshot"),
                  ],
                }),
              }),
              (0, _.jsx)(_._, {
                onSelected: _,
                className: _.TimelineContextMenuItem,
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(_.MenuItem, _.StartEndClip),
                  children: [
                    (0, _.jsx)(_._, {
                      direction: "left",
                    }),
                    (0, _._)("#Playback_UserSelectionControls_SetClipStart"),
                  ],
                }),
              }),
              (0, _.jsx)(_._, {
                onSelected: _,
                className: _.TimelineContextMenuItem,
                children: (0, _.jsxs)("div", {
                  className: (0, _._)(_.MenuItem, _.StartEndClip),
                  children: [
                    (0, _.jsx)(_._, {
                      direction: "right",
                    }),
                    (0, _._)("#Playback_UserSelectionControls_SetClipEnd"),
                  ],
                }),
              }),
            ],
          });
        }
        function _(_) {
          const _ = (0, _._)(() => _.GetAutoScrollPauseTimeout()),
            _ = (0, _._)(() => _.GetVisualWindowStartPX()),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0);
          return (
            (0, _.useEffect)(() => {
              _.current && _.current ? _.current.Hide() : (_.current = !0);
            }, [_]),
            (0, _.useEffect)(() => {
              _.SetAutoScrollPaused(!0);
            }, [_]),
            (0, _.useEffect)(() => {
              _ && _.ClearAutoScrollPauseTimeout();
            }, [_, _]),
            _
          );
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = "steam_";
        var __webpack_require__ = ((_) => (
          (_[(_.White = 0)] = "White"),
          (_[(_.Red = 1)] = "Red"),
          (_[(_.Orange = 2)] = "Orange"),
          (_[(_.Yellow = 3)] = "Yellow"),
          (_[(_.Green = 4)] = "Green"),
          (_[(_.Blue = 5)] = "Blue"),
          (_[(_.Purple = 6)] = "Purple"),
          (_[(_.Brown = 7)] = "Brown"),
          (_[(_.Gray = 8)] = "Gray"),
          _
        ))(_ || {});
        function _(_) {
          switch (_) {
            default:
            case 0:
              return "#DCDEDF";
            case 1:
              return "#FB7C7C";
            case 2:
              return "#FBB17C";
            case 3:
              return "#FBDF7C";
            case 4:
              return "#9DFB7C";
            case 5:
              return "#7CD5FB";
            case 6:
              return "#A57CFB";
            case 7:
              return "#C18C5B";
            case 8:
              return "#B8BCBF";
          }
        }
        function _(_) {
          if (!_) return 0;
          const _ = _.toLowerCase(),
            _ = _(_);
          for (const _ of _) if (_.toLowerCase() == _) return _[_];
          return 0;
        }
        function _(_) {
          return _[_].toLowerCase();
        }
        function _(_) {
          return Object.keys(_).filter((_) => !Number.isNaN(_));
        }
        const __webpack_require__ = _(_).map((_) => _[_]),
          __webpack_require__ = class _ {
            constructor() {
              _(this, "m_mapSteamTimelineMarkers", new Map());
            }
            GetMarkerByID(_) {
              const _ = _.toLowerCase().startsWith(_)
                ? _.slice(_.length).toLowerCase()
                : _.toLowerCase();
              if (this.m_mapSteamTimelineMarkers.has(_))
                return this.m_mapSteamTimelineMarkers.get(_);
              const _ = parseInt(_);
              return typeof _ == "number" && _ >= 0 && _ <= 99
                ? {
                    func: (_) =>
                      _._({
                        nNumber: _,
                      }),
                    color: 8,
                  }
                : _();
            }
            GetAllUseableMarkerID() {
              return Array.from(this.m_mapSteamTimelineMarkers.keys()).map(
                (_) => _ + _,
              );
            }
            static Get() {
              return (
                _.s_Singleton ||
                  ((_.s_Singleton = new _()), _.s_Singleton.Init()),
                _.s_Singleton
              );
            }
            AddMarker(_, _, _) {
              const _ = _ != null ? _ : 0;
              this.m_mapSteamTimelineMarkers.set(_, {
                func: _,
                color: _,
              });
              for (const _ of _) {
                const _ = `${_}_${_[_]}`.toLowerCase();
                this.m_mapSteamTimelineMarkers.set(_, {
                  func: _,
                  color: _,
                });
              }
            }
            Init() {
              this.AddMarker("explosion", _._, 8),
                this.AddMarker("attack", _._, 8),
                this.AddMarker("defend", _._, 8),
                this.AddMarker("combat", _._, 8),
                this.AddMarker("chest", _._, 8),
                this.AddMarker("view", _._, 8),
                (0, _._)()
                  ? this.AddMarker("death", _._, 8)
                  : this.AddMarker("death", _._, 8),
                this.AddMarker("x", _._, 8),
                this.AddMarker("plus", _._, 8),
                this.AddMarker("minus", _._, 8),
                this.AddMarker("info", _._, 8),
                this.AddMarker("bolt", _._, 8),
                this.AddMarker("caution", _._, 8),
                this.AddMarker("completed", _._, 8),
                this.AddMarker("checkmark", _._, 8),
                this.AddMarker("effect", _._, 8),
                this.AddMarker("purchase", _._, 8),
                this.AddMarker("ribbon", _._, 8),
                this.AddMarker("scroll", _._, 8),
                this.AddMarker("crown", _._, 8),
                this.AddMarker("starburst", _._, 8),
                this.AddMarker("flag", _._, 8),
                this.AddMarker("cart", _._, 8),
                this.AddMarker("timer", _._, 8),
                this.AddMarker("chat", _._, 8),
                this.AddMarker("wrench", _._, 8),
                this.AddMarker("transfer", _._, 8),
                this.AddMarker("edit", _._, 8),
                this.AddMarker("bookmark", _._, 8),
                this.AddMarker("invalid", _._, 8),
                this.AddMarker("star", _._, 8),
                this.AddMarker("circle", _._, 8),
                this.AddMarker("square", _._, 8),
                this.AddMarker("triangle", _._, 8),
                this.AddMarker("heart", _._, 8),
                this.AddMarker("diamond", _._, 8),
                this.AddMarker("gem", _._, 8),
                this.AddMarker("group", _._, 8),
                this.AddMarker("pair", _._, 8),
                this.AddMarker("single", _._, 8),
                this.AddMarker("trophy", _._, 8),
                this.AddMarker("achievement", _._, 8),
                this.AddMarker("screenshot", _._, 8),
                this.AddMarker("bug", _._, 8),
                this.AddMarker("fix", _._, 8),
                this.AddMarker("person", _._, 8),
                this.AddMarker("question", _._, 8);
            }
          };
        _(_, "s_Singleton");
        let __webpack_require__ = _;
        function _() {
          return _.Get().GetAllUseableMarkerID();
        }
        function _(_) {
          return _.Get().GetMarkerByID(_);
        }
        function _() {
          return {
            func: _._,
            color: 5,
          };
        }
        function _() {
          return {
            func: _._,
            color: 0,
          };
        }
        function _() {
          return {
            func: _._,
            color: 8,
          };
        }
        function _(_) {
          return _ && _.toLowerCase().startsWith(_);
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        function _(_) {
          let {
            entry: _,
            strMarkerIcon: _,
            onClick: _,
            onMouseEnter: _,
            onMouseLeave: _,
            onContextMenu: _,
            classNames: _,
            style: _,
            faded: _,
            bSelectedMarker: _,
          } = _;
          return (0, _.jsx)("div", {
            style: _ != null ? _ : {},
            className: (0, _._)(_, {
              [_.HighlightIcon]: !0,
              [_.Selected]: _,
              [_.Faded]: _,
            }),
            onClick: (_) => {
              _ && _(_);
            },
            onContextMenu: _,
            onMouseEnter: _,
            onMouseLeave: _,
            children: (0, _.jsx)(_, {
              entry: _,
              strMarkerIcon: _,
            }),
          });
        }
        function _(_) {
          let { entry: _, strMarkerIcon: _ } = _;
          const _ = _().GetGameID();
          return (0, _._)(_)
            ? (0, _.jsx)(_, {
                achievementEntry: _,
                strGameID: _,
              })
            : (0, _._)(_)
              ? (0, _.jsx)(_, {})
              : _(_)
                ? (0, _.jsx)(_, {
                    entry: _,
                    strMarkerIcon: _,
                  })
                : (0, _.jsx)(_, {
                    strMarkerIcon: _,
                    strGameID: _,
                  });
        }
        function _(_) {
          const { achievementEntry: _, strGameID: _ } = _,
            _ = new _._(_),
            _ = _(_.GetAppID(), _.achievement_name);
          let _, _;
          if (_)
            (_ = "white"),
              (_ = (0, _.jsx)("img", {
                src: _.iconURL,
              }));
          else {
            const _ = _();
            (_ = _(_.color)), (_ = _.func({}));
          }
          return (0, _.jsx)("div", {
            className: _.Marker,
            style: {
              color: _,
            },
            children: _,
          });
        }
        function _(_) {
          const { entry: _, strMarkerIcon: _ } = _;
          let _, _;
          (0, _._)(_) ? ((_ = _()), (_ = _.CustomMarker)) : (_ = _(_));
          const _ = _(_.color);
          return (0, _.jsx)(_, {
            color: _,
            children: (0, _.jsx)("div", {
              className: _,
              children: _.func({}),
            }),
          });
        }
        function _(_) {
          const { icon: _, className: _ } = _;
          return _(_).func({
            className: _,
          });
        }
        function _(_) {
          const _ = _("steam_invalid"),
            _ = _(_.color);
          return (0, _.jsx)(_, {
            color: _,
            children: (0, _.jsx)("div", {
              children: _.func({}),
            }),
          });
        }
        function _(_) {
          const { strMarkerIcon: _, strGameID: _ } = _;
          return (0, _.jsx)(_, {
            children: (0, _.jsx)(_, {
              icon: _,
              gameID: _,
            }),
          });
        }
        function _(_) {
          const { icon: _, gameID: _, className: _ } = _,
            _ = new _._(_).GetAppID(),
            _ = _(_, _);
          if (_(_))
            return (0, _.jsx)(_, {
              ..._,
            });
          if (_ === null) return null;
          if (_ === void 0) {
            const _ = _();
            return (0, _.jsx)("div", {
              className: _,
              children: _.func({}),
            });
          }
          let _ = "";
          return (
            typeof _ != "string"
              ? (_ = new XMLSerializer().serializeToString(_))
              : (_ = _),
            (0, _.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 36 36",
              className: (0, _._)(_, _.GameMarkerSVG),
              children: (0, _.jsx)("g", {
                dangerouslySetInnerHTML: {
                  __html: _,
                },
              }),
            })
          );
        }
        function _(_) {
          const { children: _, color: _ } = _;
          return (0, _.jsx)("div", {
            className: _.MarkerCtn,
            children: (0, _.jsx)("div", {
              className: _.Marker,
              style: _
                ? {
                    color: _,
                  }
                : null,
              children: _,
            }),
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__.__webpack_require__(_);
        const __webpack_require__ = parseInt(_().animationDuration);
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetDisplayHighlightEntry()),
            [_, _] = (0, _.useState)(null),
            _ = _.useRef(0);
          return (
            (0, _.useEffect)(() => {
              if (
                !(_ != null && _.entry) ||
                (0, _._)(_.entry) ||
                (0, _._)(_.entry)
              ) {
                _(null);
                return;
              }
              return (
                _(_.entry),
                (_.current = window.setTimeout(
                  () => {
                    _.SetDisplayHighlightEntry(null);
                  },
                  _.duration ? _.duration : _,
                )),
                () => window.clearTimeout(_.current)
              );
            }, [_, _]),
            _
              ? (0, _.jsx)(_, {
                  entry: _,
                })
              : null
          );
        }
        function _(_) {
          const { entry: _ } = _,
            _ = _(),
            _ = (0, _._)(() => _.GetGameID()),
            _ = _.GetGameRecordingVideo(),
            _ = (0, _._)(() => _.GetRecordingID()),
            _ = (0, _._)(() => _.IsInitialized()),
            _ = _.GetVideoHeight(),
            _ = _.GetVideoWidth(),
            _ =
              _ && _ && _ > 0 && _ > 0
                ? {
                    height: _,
                    width: _,
                  }
                : {};
          let _;
          return (
            (0, _._)(_)
              ? (_ = (0, _.jsx)(_, {
                  entry: _,
                  strGameID: _,
                }))
              : (0, _._)(_)
                ? (_ = (0, _.jsx)(
                    _,
                    {
                      entry: _,
                      strMarkerIcon: _.icon,
                      title: _.title
                        ? _.title
                        : (0, _._)("#Marker_UserMarker_Title"),
                      description: _.description || "",
                    },
                    _._,
                  ))
                : (0, _._)(_)
                  ? (_ = (0, _.jsx)(
                      _,
                      {
                        entry: _,
                        strMarkerIcon: _.icon,
                        title: (0, _._)("#MediaManager_ItemType_Screenshot"),
                        description: "",
                      },
                      _._,
                    ))
                  : (0, _._)(_) &&
                    (_ = (0, _.jsx)(
                      _,
                      {
                        entry: _,
                        strMarkerIcon: _.icon,
                        title: _.title || "",
                        description: _.description || "",
                      },
                      _._,
                    )),
            (0, _.jsx)("div", {
              className: _().BannerVideoOverlay,
              style: _,
              children: _,
            })
          );
        }
        function _(_) {
          var _, _;
          const { entry: _, strGameID: _ } = _,
            _ = new _._(_),
            _ = _(_.GetAppID(), _.achievement_name);
          return _
            ? (0, _.jsx)(
                _,
                {
                  entry: _,
                  strMarkerIcon: "steam_achievement",
                  title: (_ = _.name) != null ? _ : "",
                  description: (_ = _.description) != null ? _ : "",
                },
                _._,
              )
            : null;
        }
        function _(_) {
          const { entry: _, strMarkerIcon: _, title: _, description: _ } = _;
          return (0, _.jsx)("div", {
            className: _().PlayerHighlightBanner,
            children: (0, _.jsxs)("div", {
              className: _().BannerContents,
              children: [
                (0, _.jsx)("div", {
                  className: _().HighlightIcon,
                  children: (0, _.jsx)(_, {
                    entry: _,
                    strMarkerIcon: _,
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _().InfoBox,
                  children: [
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().HighlightTitle,
                        children: _,
                      }),
                    _ &&
                      (0, _.jsx)("div", {
                        className: _().HighlightDesc,
                        children: _,
                      }),
                  ],
                }),
              ],
            }),
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__.__webpack_require__(_),
          __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = parseInt(_().animationDuration);
        function _() {
          const _ = _(),
            _ = _.GetGameRecordingVideo(),
            _ = (0, _._)(() => _.GetRecordingID()),
            _ = (0, _._)(() => _.IsInitialized()),
            _ = _.GetVideoHeight(),
            _ = _.GetVideoWidth(),
            _ =
              _ && _ && _ > 0 && _ > 0
                ? {
                    height: _,
                    width: _,
                  }
                : {},
            _ = _.useRef(0),
            _ = (0, _._)(() => _.GetRelativeTimeForDisplay()),
            _ = (0, _._)(() => _.GetGameRecordingVideo().IsInitialized()),
            _ = (0, _.useMemo)(() => {
              if (isNaN(_) || !_) return null;
              const _ = _.ConvertGlobalOffsetToTimelineRelativeOffset(_);
              if (_ && _.GetIsActiveTimeline(_.strTimelineID)) {
                const _ = _.MakeRelativeToTimelineEndIfActive(
                  _.strTimelineID,
                  _.nTimelineOffsetMS.valMS,
                );
                return (0, _._)(_ / 1e3, !1, !0);
              }
              return null;
            }, [_, _, _]);
          return (
            (0, _.useEffect)(() => {
              if (!isNaN(_))
                return (
                  (_.current = window.setTimeout(() => {
                    _.ClearRelativeTimeDisplay();
                  }, _)),
                  () => window.clearTimeout(_.current)
                );
            }, [_, _]),
            isNaN(_)
              ? null
              : (0, _.jsx)("div", {
                  className: _().RelativeTimeContainer,
                  style: _,
                  children: (0, _.jsx)(
                    "div",
                    {
                      className: _().RelativeTime,
                      children: _,
                    },
                    _,
                  ),
                })
          );
        }
        function _(_) {
          const {
              disableSound: _,
              positionAbsolute: _ = !0,
              refVideoResize: _,
              style: _,
              fullscreen: _,
            } = _,
            _ = _(),
            _ = _(_.StopPlayback, _.SetVideoElement),
            _ = _.GetGameRecordingVideo(),
            _ = (0, _._)(() => _.GetRecordingID()),
            _ = (0, _._)(() => _.GetPlaybackError()),
            _ = (0, _._)(() => _.GetRecordingMode() === "Overlay"),
            _ = _(),
            _ = _(),
            _ = _ || !_,
            _ = _.useRef(void 0);
          let _ = (0, _._)(_, _);
          const _ = _();
          function _() {
            _ && _.TogglePlayPause();
          }
          function _() {
            _ && _ && _.fnToggleFullscreen();
          }
          const _ = _.useCallback(
              (_) => {
                _ ||
                  _(_, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  });
              },
              [_, _],
            ),
            _ = !_._.IN_STEAMUI && !!_.autoPlay;
          let _ = (0, _._)(
            _().GameRecordingPlayer,
            _ && _().NoVideo,
            _ && _().PositionAbsolute,
            _ && _().ClippingMode,
            _ && _().Overlay,
            _ && _().PlayingClippedRegion,
          );
          return (0, _.jsxs)("div", {
            ref: _,
            className: _,
            onClick: _,
            onContextMenu: _,
            style: _,
            onDoubleClick: _,
            children: [
              (0, _.jsx)("video", {
                ref: _,
                controls: !1,
                muted: _,
                autoPlay: _,
                playsInline: _,
              }),
              (0, _.jsx)(_, {
                player: _,
              }),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
              !_ && (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
              (0, _.jsx)(_, {}),
            ],
          });
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetGlobalMSPlaytime()),
            { nGlobalEndMS: _, nGlobalStartMS: _ } = _(),
            _ = _.GetGameRecordingVideo();
          return (0, _._)(() => _.GetPlaybackError()) || !_ || !_ || !_
            ? !1
            : _.valMS >= _.valMS && _.valMS <= _.valMS;
        }
        function _() {
          const _ = _(),
            _ = _._.Get().IsDebugLogEnabled("GR"),
            _ = (0, _._)(() => _.GetPlaybackStats());
          return !_ || !_
            ? null
            : (0, _.jsxs)("div", {
                className: _().PerfCtnVideo,
                children: [
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Average Seek MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nMean.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "StdDev Seek MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nStdDev.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Slowest Seek MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nMax.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Fastest Seek MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nMin.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "# Seeks: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nLength,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Last Val: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nLastVal.toFixed(3),
                      }),
                    ],
                  }),
                ],
              });
        }
        function _() {
          const _ = _._.Get().IsDebugLogEnabled("GR"),
            _ = _(),
            _ = (0, _._)(() => {
              _.GetGlobalMSPlaytime();
            }),
            _ = _();
          return !_ || !_
            ? null
            : (0, _.jsxs)("div", {
                className: _().PerfCtnThumbnails,
                children: [
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Avg Thumbnail Load MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nMean.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "StdDev Thumbnail Load MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nStdDev.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Slowest Thumbnail Load MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nMax.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Fastest Thumbnail Load MS: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nMin.toFixed(3),
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "# Loaded: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nLength,
                      }),
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("span", {
                        children: "Last Load: ",
                      }),
                      (0, _.jsx)("span", {
                        children: _.nLastVal.toFixed(3),
                      }),
                    ],
                  }),
                ],
              });
        }
        function _() {
          const _ = _(),
            _ = _.GetGameRecordingVideo(),
            _ = _.GetVideoHeight(),
            _ = (0, _._)(() => _.BVideoElementWaiting()),
            _ = (0, _._)(() => _.IsPaused()),
            _ = (0, _._)(() => _.GetPlaybackError()),
            _ = (0, _._)(() => _.IsInitialized());
          return !(0, _._)(() => _.GetRecordingID()) || (_ && !_) || _ || _
            ? null
            : (0, _.jsx)("div", {
                className: _().LoadingSpinner,
                style: {
                  height: _,
                },
                children: (0, _.jsx)(_.y$y, {}),
              });
        }
        function _(_) {
          const { player: _ } = _,
            _ = (0, _._)(() => _.GetPlaybackError());
          let _ = "";
          switch (_) {
            case _.DownloadFailed:
            case _.PlaybackError:
            case _.MediaTypeError:
              _ = "#GameRecording_PlayerError_Generic";
              break;
          }
          return _
            ? (0, _.jsx)("div", {
                className: _().PlayerError,
                children: (0, _.jsx)("div", {
                  className: _().Text,
                  children: (0, _._)(_),
                }),
              })
            : null;
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetGamepadMode()),
            { onNavigateToClip: _, onNavigateToFAQ: _ } = _(),
            _ = (0, _._)(() => _.GetGlobalMSPlaytime()),
            _ = _.GetClosestPreviousRecordingForGlobalMS(_),
            _ = _.GetClosestNextRecordingForGlobalMS(_),
            _ = (0, _._)(() => _.GetClipsAtGlobalMS(_)),
            _ = (0, _.useCallback)(
              (_) => {
                if (_) {
                  const _ = Math.max(parseInt(_.duration_ms) - 500, 0);
                  _.SetPlaytimeFromRecordingOffset(_.recording_id, _, !0, !0),
                    _.stopPropagation();
                }
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _ &&
                  (_.SetPlaytimeFromRecordingOffset(_.recording_id, 0),
                  _.stopPropagation());
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _.length > 0 &&
                  (_._.ReportTrackedAction(
                    "/GameRecording/Tooltip/ViewClip/PlayerNoContent",
                  ),
                  _(_[0].strClipID),
                  _.stopPropagation());
              },
              [_, _],
            );
          return (0, _.jsxs)("div", {
            className: _().PlayerError,
            children: [
              (0, _.jsx)("div", {
                className: _().Title,
                children: (0, _._)("#GameRecording_PlayerNoContent"),
              }),
              (0, _.jsx)("div", {
                className: _().Description,
                children: (0, _._)(
                  "#GameRecording_PlayerNoContentDescription",
                  (0, _.jsx)(_._, {
                    href: "#",
                    onClick: _,
                  }),
                ),
              }),
              !_ &&
                (0, _.jsxs)("div", {
                  className: _().Buttons,
                  children: [
                    (0, _.jsx)(_._, {
                      direction: "bottom",
                      toolTipContent: (0, _._)(
                        _
                          ? "#GameRecording_PlayerNoContentJumpPrevious_tooltip"
                          : "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
                      ),
                      children: (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _().Button,
                          _().JumpPrevious,
                          !_ && _().DisableButton,
                        ),
                        onClick: _,
                        onActivate: _,
                        children: (0, _._)(
                          "#GameRecording_PlayerNoContentJumpPrevious",
                        ),
                      }),
                    }),
                    _.length > 0 &&
                      (0, _.jsx)(_._, {
                        direction: "bottom",
                        toolTipContent: (0, _._)(
                          "#GameRecording_PlayerNoContentSeeClip_tooltip",
                        ),
                        children: (0, _.jsx)(_._, {
                          onClick: _,
                          onActivate: _,
                          className: (0, _._)(_().Button, _().GoToClip),
                          children: (0, _._)(
                            "#GameRecording_PlayerNoContentSeeClip",
                          ),
                        }),
                      }),
                    (0, _.jsx)(_._, {
                      direction: "bottom",
                      toolTipContent: (0, _._)(
                        _
                          ? "#GameRecording_PlayerNoContentJumpNext_tooltip"
                          : "#GameRecording_PlayerNoContentJumpNoContent_tooltip",
                      ),
                      children: (0, _.jsx)(_._, {
                        className: (0, _._)(
                          _().Button,
                          _().JumpNext,
                          !_ && _().DisableButton,
                        ),
                        onClick: _,
                        onActivate: _,
                        children: (0, _._)(
                          "#GameRecording_PlayerNoContentJumpNext",
                        ),
                      }),
                    }),
                  ],
                }),
            ],
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = 20,
          __webpack_require__ = [1e3, 5e3, 3e4, 6e4, 15e4, 3e5, 9e5, 18e5],
          __webpack_require__ = _.memo(function (_) {
            const _ = _(),
              _ = (0, _._)(() => _.GetVisibleTimelines());
            return (0, _.jsx)(_.Fragment, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    msVisibleStart: _.msVisibleStart,
                    pxVisibleDuration: _.pxVisibleDuration,
                    pxVisibleStart: _.pxVisibleStart,
                    msTimelineStart: _.globalOffsetMS,
                  },
                  _.timelineID,
                ),
              ),
            });
          }),
          __webpack_require__ = _.memo(function (_) {
            const {
                msVisibleStart: _,
                msTimelineStart: _,
                pxVisibleDuration: _,
                pxVisibleStart: _,
              } = _,
              { msTickSpacing: _, pxTickSpacing: _ } = _(),
              _ = _(),
              _ = Math.ceil((_ - _) / _),
              _ = _ + _ * _,
              _ = _.ConvertGlobalMSToGlobalPXOffset(_),
              _ = (0, _.useMemo)(() => {
                const _ = Math.ceil(_ / _),
                  _ = [];
                for (let _ = 0; _ < _; _++) {
                  const _ = _ + _ * _,
                    _ = _ + _ * _,
                    _ = `${_}`;
                  _.push({
                    key: _,
                    offsetPX: _,
                    iTimelineRelativeTick: _ + _,
                  });
                }
                return _;
              }, [_, _, _, _, _, _]);
            return _
              ? (0, _.jsxs)(_.Fragment, {
                  children: [
                    (0, _.jsx)("div", {
                      className: _.TimelineBacking,
                      style: {
                        transform: `translateX(${_}px)`,
                        width: _,
                      },
                    }),
                    _.map((_) =>
                      (0, _.jsx)(
                        _,
                        {
                          timelineRelativeIndex: _.iTimelineRelativeTick,
                          globalOffsetPX: _.offsetPX,
                        },
                        _.key,
                      ),
                    ),
                  ],
                })
              : null;
          });
        function _(_) {
          const { globalOffsetPX: _, timelineRelativeIndex: _ } = _,
            _ = _ % _ === 0 ? _.Major : _.Minor;
          return (0, _.jsx)("div", {
            className: _.TimeTick,
            style: {
              transform: `translateX(${_}px)`,
            },
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.TickLine, _),
            }),
          });
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetCurrentZoomScale()),
            _ = 300,
            _ = (_) => Math.abs(_ - _ / _),
            _ = _.reduce((_, _) => (_(_) - _(_) < 0 ? _ : _)) / _,
            _ = _ / _;
          return {
            msTickSpacing: _,
            pxTickSpacing: _,
          };
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_, _) {
          return !(_.nStart >= _.nEnd || _.nEnd <= _.nStart);
        }
        class _ {
          constructor(_) {
            _(this, "m_reservations", []),
              _(this, "m_nIconWidth"),
              (this.m_nIconWidth = _);
          }
          BAllowIcon(_) {
            const _ = {
              nStart: _ - this.m_nIconWidth / 2,
              nEnd: _ + this.m_nIconWidth / 2,
            };
            let _ = 0;
            for (; _ < this.m_reservations.length; _++) {
              const _ = this.m_reservations[_];
              if (_.nStart >= _.nEnd) break;
              if (_(_, _)) return !1;
            }
            return this.m_reservations.splice(_, 0, _), !0;
          }
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        function _(_) {
          const {
              closeModal: _,
              strTimelineID: _,
              entry: _,
              playbackCoordinator: _,
              fnClearSelection: _,
            } = _,
            [_, _] = _.useState(_.title || ""),
            [_, _] = _.useState(_.description || ""),
            _ = (0, _._)();
          return _.bLoading
            ? (0, _.jsx)(_._, {
                state: _,
                strDialogTitle: (0, _._)("#Marker_Dialog"),
                closeModal: _,
              })
            : (0, _.jsxs)(_._, {
                strTitle: (0, _._)("#Marker_Dialog"),
                strMiddleButtonText: (0, _._)("#Marker_Action_Delete"),
                onCancel: _,
                onOK: async () => {
                  _.fnSetLoading(!0),
                    (await _.UpdateUserMarker(_, _, _, _))
                      ? _()
                      : (_.fnSetError(!0),
                        _.fnSetStrError((0, _._)("#Marker_UpdateFailed")));
                },
                children: [
                  (0, _.jsx)(_._, {
                    type: "text",
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                    label: (0, _._)("#Marker_Title"),
                  }),
                  (0, _.jsx)(_._, {
                    type: "text",
                    value: _,
                    onChange: (_) => _(_.currentTarget.value),
                    label: (0, _._)("#Marker_Description"),
                  }),
                ],
              });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        function _() {
          const _ = _(),
            _ = _(),
            { setSelectedMarker: _ } = _(),
            _ = _(),
            { onNavigateToClip: _, onNavigateToScreenshot: _ } = _(),
            _ = _(),
            _ = (0, _._)(() => !_.ShouldModeShowClipControls());
          return _.useCallback(
            (_, _, _) => {
              if (_) return;
              const _ = (0, _.jsx)(_, {
                markerInfo: _,
                playbackCoordinator: _,
                timelineView: _,
                setSelectedMarker: _,
                onNavigateToClip: _,
                onNavigateToScreenshot: _,
                bLowDiskSpace: _,
                clearRange: _,
              });
              (0, _._)(_, _, _);
            },
            [_, _, _, _, _, _, _, _],
          );
        }
        function _(_) {
          const {
              playbackCoordinator: _,
              timelineView: _,
              markerInfo: _,
              setSelectedMarker: _,
              clearRange: _,
              bLowDiskSpace: _,
              onNavigateToClip: _,
              onNavigateToScreenshot: _,
            } = _,
            _ = (0, _._)(() =>
              _.ConvertGlobalMSToClipOrNone(_.nGlobalMS.valMS),
            ),
            _ = (0, _._)(() =>
              _.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                _.nGlobalMS.valMS,
              ),
            ),
            _ = _(_),
            _ = (_) => {
              let _ = _,
                _ = _;
              (0, _._)(_.entry) && ((_ = 0), (_ = parseInt(_.entry.duration)));
              const [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
                _.strTimelineID,
                _.nGlobalMS.valMS,
                _,
                _,
              );
              _.SetPlaytimeFromGlobalMS((0, _._)(_)),
                _ == null || _(_.entry._, _.strTimelineID, _, _),
                _._.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/ClipFromHighlight",
                ),
                _.stopPropagation();
            },
            _ = () => {
              _ &&
                (_._.ReportTrackedAction(
                  `/GameRecording/MarkerCtxMenu/ViewClip/${_.entry.type}`,
                ),
                _ && _(_.clipID));
            },
            _ = (_) => {
              if (!(0, _._)(_.entry)) return;
              _._.ReportTrackedAction(
                `/GameRecording/HighlightCtxMenu/Marker/Edit/${_.entry.type}`,
              );
              let _ = (0, _.jsx)(_, {
                entry: _.entry,
                playbackCoordinator: _,
                fnClearSelection: _,
                strTimelineID: _.strTimelineID,
              });
              (0, _._)(_, (0, _._)(_)), _.stopPropagation(), _.preventDefault();
            },
            _ = (_) => {
              (0, _._)(_.entry) &&
                (_._.ReportTrackedAction(
                  `/GameRecording/HighlightCtxMenu/Marker/Delete/${_.entry.type}`,
                ),
                _.RemoveUserMarker(_.strTimelineID, _.entry._));
            },
            _ = () => {
              var _;
              !(0, _._)(_.entry) ||
                !((_ = _.entry) != null && _.handle) ||
                (_._.ReportTrackedAction(
                  "/GameRecording/HighlightCtxMenu/Screenshot",
                ),
                _(_.GetGameID(), _.entry.handle));
            };
          let _ = [];
          return (
            (0, _._)(_.entry) &&
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: _,
                    className: _.HighlightContextMenuItem,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.EditMarker),
                      children: [
                        (0, _.jsx)(_._, {}),
                        (0, _._)("#Marker_Action_Edit"),
                      ],
                    }),
                  },
                  "edit",
                ),
              ),
            _ != null &&
              _.strRecordingID &&
              !_ &&
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: _,
                    className: _.HighlightContextMenuItem,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.CreateClip),
                      children: [
                        (0, _.jsx)(_._, {}),
                        (0, _._)("#TimelineDialog_ClipVideo"),
                      ],
                    }),
                  },
                  "clip",
                ),
              ),
            (0, _._)(_.entry) &&
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: _,
                    className: _.HighlightContextMenuItem,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.ViewScreenshot),
                      children: [
                        (0, _.jsx)(_._, {}),
                        (0, _._)("#TimelineDialog_ViewScreenshot"),
                      ],
                    }),
                  },
                  "view_screenshot",
                ),
              ),
            _ &&
              _ &&
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: _,
                    className: _.HighlightContextMenuItem,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.ViewClip),
                      children: [
                        (0, _.jsx)(_._, {}),
                        (0, _._)("#TimelineDialog_ViewClip"),
                      ],
                    }),
                  },
                  "view_clip",
                ),
              ),
            (0, _._)(_.entry) &&
              _.push(
                (0, _.jsx)(
                  _._,
                  {
                    onSelected: _,
                    className: _.HighlightContextMenuItem,
                    children: (0, _.jsxs)("div", {
                      className: (0, _._)(_.MenuItem, _.DeleteMarker),
                      children: [
                        (0, _.jsx)(_.lMJ, {}),
                        (0, _._)("#Marker_Action_Delete"),
                      ],
                    }),
                  },
                  "delete",
                ),
              ),
            _.length
              ? (0, _.jsx)(_._, {
                  refInstance: _,
                  children: _,
                })
              : null
          );
        }
        const __webpack_require__ = 5e3,
          __webpack_require__ = 3e3,
          __webpack_require__ = 5e3;
        function _(_) {
          var _;
          const {
              markerInfo: _,
              view: _,
              coordinator: _,
              gameID: _,
              clipID: _,
              timelineID: _,
              faded: _,
            } = _,
            _ = _.nGlobalMS,
            _ = (0, _._)(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
            _ = (0, _._)(() => {
              const _ = _.GetThumbnailComponent();
              return _ && _ !== _.Highlight;
            }),
            _ = _(),
            { selectedMarker: _ } = _(),
            _ =
              ((_ = _.entry) == null ? void 0 : _._) ==
                (_ == null ? void 0 : _.strEntryID) &&
              _.strTimelineID == (_ == null ? void 0 : _.strTimelineID),
            { ref: _, ..._ } = _(_, _),
            _ = _.useCallback(
              (_) => {
                const _ = _.valMS - _,
                  _ = _.FindTimelineOffsets(_),
                  _ = Math.max(_, _.globalOffsetMS);
                _.SetPlaytimeFromGlobalMS((0, _._)(_)),
                  _.SetDisplayHighlightEntry(_.entry),
                  _.stopPropagation(),
                  _._.ReportTrackedAction(
                    `/GameRecording/Marker/Click/${_.entry.type}`,
                  );
              },
              [_, _.valMS, _, _, _],
            ),
            _ = (_) => {
              _(_, _, {
                bDisableMouseOverlay: !0,
                bForcePopup: !0,
                bAlwaysOnTop: !0,
              }),
                _.stopPropagation();
            },
            _ = {
              transform: `translateX( calc( ${_}px - 50% ))`,
            };
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _.MarkerAndDropline,
              _ && _.NoPointer,
              _ && _.Faded,
            ),
            style: _,
            ref: _,
            onContextMenu: _,
            ..._,
            children: [
              (0, _.jsx)(
                "div",
                {
                  className: (0, _._)(_.TimelineMarkerCtn),
                  children: (0, _.jsx)(
                    _,
                    {
                      classNames: _.TimelineMarker,
                      entry: _.entry,
                      strMarkerIcon: _.strMarkerIcon,
                      faded: _,
                      onClick: _,
                      bSelectedMarker: _,
                    },
                    _.entry._,
                  ),
                },
                _.valMS,
              ),
              (0, _.jsx)("div", {
                className: _.DroplineCtn,
                children: (0, _.jsx)("div", {
                  className: (0, _._)(_.TimelineMarkerDropLine),
                }),
              }),
            ],
          });
        }
        const __webpack_require__ = 150;
        function _(_, _) {
          const _ = _.useRef(void 0),
            _ = _.useRef(void 0),
            _ = _.useCallback(
              (_) => {
                if (!_.current) return;
                const _ = _.current.getBoundingClientRect();
                if (_.clientY >= _.top && _.clientY <= _.bottom) {
                  if (_.left - _.clientX > 1 || _.clientX - _.right > 1) {
                    _.SetThumbnailComponent(null),
                      _.current && _.current(),
                      (_.current = null);
                    return;
                  }
                  return;
                }
                const _ = _.left + 0.5 * _.width;
                (_.clientX < _ - _ || _.clientX > _ + _) &&
                  (_.SetThumbnailComponent(null),
                  _.current && _.current(),
                  (_.current = null));
              },
              [_],
            ),
            _ = _.useCallback(
              (_) => {
                if (
                  (_.SetThumbnailComponent(_.Highlight),
                  _.SetThumbnailEntry(_),
                  !_.current)
                ) {
                  const _ = (0, _._)(_);
                  _.addEventListener("mousemove", _),
                    (_.current = () => _.removeEventListener("mousemove", _));
                }
                _.stopPropagation();
              },
              [_, _, _],
            ),
            _ = _.useCallback(
              (_) => {
                const _ = _.current.getBoundingClientRect(),
                  _ = _.left,
                  _ = _.right;
                if (_.clientX - _ < 1 || _ - _.clientX < 1) {
                  _.SetThumbnailComponent(null),
                    _.current && _.current(),
                    (_.current = null);
                  return;
                }
                (0, _._)(_.current, _.relatedTarget) ||
                  (_.clientY - _.top > 1 &&
                    _.bottom - _.clientY > 1 &&
                    _.clientX - _.left > 1 &&
                    _.right - _.clientX > 1 &&
                    (_.SetThumbnailComponent(null),
                    _.current && _.current(),
                    (_.current = null))),
                  _.stopPropagation();
              },
              [_],
            );
          return (
            _.useEffect(() => () => _.current && _.current(), []),
            {
              ref: _,
              onMouseOver: _,
              onMouseLeave: _,
            }
          );
        }
        const __webpack_require__ = 16;
        function _(_) {
          return _.type === "achievement" ? 9e3 : _.priority;
        }
        const __webpack_require__ = _.memo(function (_) {
            const _ = _(),
              _ = (0, _._)(() => _.GetVisibleTimelines());
            return (0, _.jsx)(_.Fragment, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    timeline: _,
                  },
                  _.timelineID,
                ),
              ),
            });
          }),
          __webpack_require__ = {
            screenshot: 0,
            event: 0,
            achievement: 1,
            usermarker: 2,
          };
        function _(_, _) {
          if (_[_.type] !== _[_.type]) return _[_.type] - _[_.type];
          const _ = _(_),
            _ = _(_);
          return _ != _
            ? _ - _
            : _.time != _.time
              ? parseInt(_.time) - parseInt(_.time)
              : _._.localeCompare(_._);
        }
        const __webpack_require__ = _.memo(function (_) {
          const { timeline: _ } = _,
            _ = _(),
            _ = _(),
            _ = (0, _._)(
              () => _.GetVisibleTimelineHighlights(_.timelineID) || [],
            )
              .slice()
              .sort(_),
            _ = (0, _._)(() => _.GetTimelineOffsetMS(_.timelineID)),
            _ = _.globalOffsetMS - _,
            _ = _.GetGameID(),
            _ = _.GetClipID(),
            _ = _.GetCurrentZoomScale() * _;
          let _ = new _(_);
          return _.map((_, _) => {
            if (_(_) !== "highlight") return null;
            const _ = `${_.type}_${_._}_${_.timelineID}_${_}`,
              _ = _(_.timelineID, _, _),
              _ = _.BAllowIcon(_.nGlobalMS.valMS);
            return (0, _.jsx)(
              _,
              {
                gameID: _,
                clipID: _,
                view: _,
                coordinator: _,
                faded: !_,
                timelineID: _.timelineID,
                markerInfo: _,
              },
              _,
            );
          });
        });
        function _(_, _, _) {
          if (
            ![
              "event",
              "usermarker",
              "screenshot",
              "achievement",
              "error",
            ].includes(_.type)
          )
            return (
              (0, _._)(
                `Unexpected timeline entry type ${_.type}, returning empty highlight marker`,
              ),
              null
            );
          let _ = _;
          const _ = (0, _._)(_);
          return {
            entry: _,
            strMarkerIcon: _ ? "steam_achievement" : _.icon,
            nMarkerPriority: _(_),
            strTimelineID: _,
            strTitle: (!_ && _.title) || "",
            strDescription: (!_ && _.description) || "",
            nGlobalMS: (0, _._)(parseInt(_.time) + _),
          };
        }
        function _(_) {
          switch (_.type) {
            case "usermarker":
            case "achievement":
            case "screenshot":
            case "error":
              return "highlight";
            case "event":
              return parseInt(_.duration) > 0 ? "range_highlight" : "highlight";
            default:
              return "none";
          }
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        function _(_) {
          const {
              view: _,
              entry: _,
              nGlobalEntryEndMS: _,
              nGlobalTLStartMS: _,
            } = _,
            _ = _(),
            _ = (0, _._)(parseInt(_.time) + _.valMS),
            _ = (0, _._)(() => {
              const _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
                _ = _.GetVirtualWindowStartPX();
              return _ < _ ? _ : _;
            }),
            _ = (0, _._)(() => {
              const _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
                _ = _.GetVirtualWindowEndPX();
              return _ < _ ? _ : _;
            }),
            _ = !!_.GetClipID(),
            _ = {
              transform: `translateX( ${_}px )`,
              width: _ - _,
            },
            _ = (0, _._)({
              [_.Unspecified]: _.mode === _._.Invalid,
              [_.Staging]: _.mode === _._.Staging,
              [_.Menus]: _.mode === _._.Menus,
              [_.Playing]: _.mode === _._.Playing,
            });
          return (0, _.jsx)(
            "div",
            {
              className: (0, _._)(
                _.GameModeMarker,
                _,
                _ && _.GameModeMarkerClip,
              ),
              style: _,
            },
            _._,
          );
        }
        const __webpack_require__ = _.memo(function (_) {
            const _ = _(),
              _ = (0, _._)(() => _.GetVisibleTimelines());
            return (0, _.jsx)(_.Fragment, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    timeline: _,
                  },
                  _.timelineID,
                ),
              ),
            });
          }),
          __webpack_require__ = _.memo(function (_) {
            const {
                timelineID: _,
                globalOffsetMS: _,
                nDurationMS: _,
              } = _.timeline,
              _ = _(),
              _ = (0, _._)(() => {
                const _ = _.GetVisibleTimelineGameModes(_);
                return !_ || _.length === 0
                  ? [
                      {
                        time: "0",
                        type: "gamemode",
                        mode: _._.Invalid,
                        _: "synthetic",
                      },
                    ]
                  : _;
              }),
              _ = (0, _._)(_ + _),
              _ = _.GetTimelineOffsetMS(_),
              _ = _ - _;
            let _ = [];
            for (let _ = 0; _ < _.length; _++) {
              const _ = (0, _._)(
                _ < _.length - 1 ? parseInt(_[_ + 1].time) + _ : _.valMS - 1,
              );
              _.push(
                (0, _.jsx)(
                  _,
                  {
                    view: _,
                    entry: _[_],
                    nGlobalEntryEndMS: _,
                    nGlobalTLStartMS: (0, _._)(_),
                  },
                  `gameMode_${_}_${_}`,
                ),
              );
            }
            return (0, _.jsx)(_.Fragment, {
              children: _,
            });
          });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = 500,
          __webpack_require__ = (0, _.memo)(function (_) {
            const _ = _(),
              _ = (0, _._)(() => _.GetHidePlayer()),
              [_, _] = (0, _.useState)({
                bDragActive: !1,
                bPausedOnDragStart: !1,
              }),
              _ = _(),
              _ = (0, _._)(() => {
                if (
                  _.GetAutoScrollPaused() ||
                  _.BReachedMaxScroll() ||
                  _.BReachedMinScroll() ||
                  _.BIsVideoElementPaused()
                )
                  return !1;
                const _ = _.GetGlobalMSPlaytime(),
                  _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
                  _ = _.GetMaxScrollLeftPX() + 0.5 * _.GetScrollWindowWidth();
                return _ < _;
              });
            return _
              ? (0, _.jsx)(_, {
                  setDragActive: _,
                })
              : _
                ? (0, _.jsx)(_, {
                    view: _,
                    setDragActive: _,
                  })
                : (0, _.jsx)(_, {
                    dragState: _,
                    setDragActive: _,
                  });
          });
        function _(_) {
          const { view: _, setDragActive: _ } = _,
            _ = (0, _._)(
              () => _.GetVisualWindowStartPX() + _.GetScrollWindowWidth() / 2,
            );
          return (0, _.jsx)(_, {
            playheadPosition: _,
            children: (0, _.jsx)(_, {
              setDragActive: _,
              bDragActive: !1,
            }),
          });
        }
        const __webpack_require__ = (0, _.memo)(function (_) {
            const { setDragActive: _ } = _,
              _ = _(),
              _ = (0, _._)(() => _.GetScrollableWidthPX()),
              _ = (0, _._)(100),
              _ = (0, _.useCallback)(
                (_) => {
                  _.GetAutoScrollPaused() || _(() => _.ScrollToOffset(_));
                },
                [_, _],
              );
            return (
              (0, _.useEffect)(() => _.ScrollToEnd(), [_]),
              (0, _.useEffect)(() => _(_), [_, _]),
              (0, _.jsx)(_, {
                playheadPosition: _,
                children: (0, _.jsx)(_, {
                  setDragActive: _,
                  bDragActive: !1,
                }),
              })
            );
          }),
          __webpack_require__ = (0, _.memo)(function (_) {
            const { dragState: _, setDragActive: _ } = _,
              { bDragActive: _, bPausedOnDragStart: _ } = _,
              _ = _(),
              _ = _(),
              _ = _(),
              _ = _(),
              _ = _(_, _, _, _, _);
            return (
              (0, _.useEffect)(() => {
                if (!_) return;
                _.SetThumbnailPosition(_);
                const _ = _.ConvertPXOffsetToGlobalMS(_, !1);
                if (!_) return;
                const _ = _.GetLiveEdgeMS();
                _.SetPlaytimeFromGlobalMS(
                  _.valMS < _ ? _ : (0, _._)(_),
                  _,
                  !0,
                  !0,
                );
              }, [_, _, _, _, _]),
              (0, _.jsx)("div", {
                className: (0, _._)(_.PlayheadInteractionCtn, _ && _.ActiveCtn),
                children: (0, _.jsx)(_, {
                  className: _ ? _.Active : void 0,
                  playheadPosition: _,
                  children: (0, _.jsx)(_, {
                    setDragActive: _,
                    bDragActive: _,
                  }),
                }),
              })
            );
          }),
          __webpack_require__ = (0, _.memo)(function (_) {
            const { setDragActive: _, bDragActive: _ } = _,
              _ = _(),
              _ = (_) => {
                _ || _.SetThumbnailComponent(_.Playhead), _.stopPropagation();
              },
              _ = (_) => {
                _ || _.SetThumbnailComponent(null), _.stopPropagation();
              };
            return (0, _.jsx)("div", {
              className: _.PlayHeadContent,
              onMouseOver: _,
              onMouseOut: _,
              onFocus: _,
              onBlur: _,
              children: (0, _.jsx)(_, {
                setDragActive: _,
              }),
            });
          }),
          __webpack_require__ = _.memo(function (_) {
            const { setDragActive: _ } = _,
              _ = _(),
              _ = _(),
              _ = _(),
              _ = (0, _._)(() => {
                const _ = _.GetThumbnailComponent();
                return _ === _.RangeLeft || _ === _.RangeRight;
              }),
              _ = (0, _.useCallback)(
                (_) => {
                  if (_.button != 0) return;
                  const _ = (0, _._)(_);
                  let _, _;
                  const _ = () => {
                    const _ = _.GetGameRecordingVideo().IsPaused();
                    _({
                      bDragActive: !0,
                      bPausedOnDragStart: _,
                    }),
                      _.SetThumbnailComponent(_.Playhead),
                      _();
                  };
                  _.addEventListener("mousemove", _),
                    (_ = () => _.removeEventListener("mousemove", _));
                  const _ = () => {
                    _({
                      bDragActive: !1,
                      bPausedOnDragStart: !1,
                    }),
                      _.SetThumbnailComponent(null),
                      _(),
                      _();
                  };
                  _.addEventListener("mouseup", _),
                    (_ = () => _.removeEventListener("mouseup", _));
                },
                [_, _, _],
              ),
              _ = (0, _.useCallback)(
                (_) => {
                  const _ = _.GetGlobalMSPlaytime();
                  _(_, _, !0, {
                    bDisableMouseOverlay: !0,
                    bForcePopup: !0,
                    bAlwaysOnTop: !0,
                  }),
                    _.stopPropagation(),
                    _.preventDefault();
                },
                [_, _],
              );
            return (0, _.jsx)("div", {
              className: (0, _._)(_.PlayHead, _ && _.NoPointer),
              onMouseDown: _,
              onContextMenu: _,
              children: (0, _.jsx)(_, {}),
            });
          });
        function _(_) {
          return (0, _.jsxs)("svg", {
            ..._,
            width: "12",
            height: "32",
            viewBox: "0 0 12 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, _.jsx)("rect", {
                _: "5",
                _: "4",
                width: "2",
                height: "40",
                fill: "currentColor",
              }),
              (0, _.jsx)("path", {
                _: "M6 6L0.803849 -9.78799e-07L11.1962 -7.02746e-08L6 6Z",
                fill: "currentColor",
              }),
            ],
          });
        }
        function _(_, _, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _._)(() => _.GetScrollWindowWidth()),
            [_, _] = (0, _.useState)(0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            { clearPlaybackAnimation: _, startPlaybackAnimation: _ } = _(
              _,
              _,
              _,
            );
          (0, _.useEffect)(
            () => () => {
              _.current &&
                (cancelAnimationFrame(_.current),
                (_.current = null),
                (_.current = null)),
                _();
            },
            [_],
          );
          const _ = _.useCallback(
            (_, _, _, _, _) => {
              if (_(_))
                _(
                  (0, _._)(
                    _.GetVisualWindowStartPX() + _,
                    0,
                    _.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(_.current),
                  (_.current = null),
                  (_.current = null);
              else {
                if (
                  (_.current &&
                    (_.current = requestAnimationFrame((_) =>
                      _(_, _, _, _, _),
                    )),
                  _.current)
                ) {
                  const _ = ((_ - _.current) / _) * _;
                  _.ScrollBy(_),
                    _((_) => (0, _._)(_ + _, 0, _.GetScrollableWidthPX()));
                }
                _.current = _;
              }
            },
            [_],
          );
          return (
            (0, _.useEffect)(() => {
              const _ = _ * (1 - _),
                _ = _ * _;
              if (
                (_.current &&
                  (cancelAnimationFrame(_.current),
                  (_.current = null),
                  (_.current = null)),
                !_)
              ) {
                _();
                return;
              }
              if ((_(), _.valPX < _ && !_.BReachedMinScroll())) {
                if (_.valPX <= _.current) {
                  const _ = _.valPX - _,
                    _ = (0, _._)(Math.abs(_ / _), 0, 1) * _;
                  _.current = requestAnimationFrame((_) =>
                    _(_, _, _.valPX, _, _.BReachedMinScroll),
                  );
                }
                _.current = _.valPX;
              } else if (_.valPX > _ && !_.BReachedMaxScroll()) {
                if (_.valPX >= _.current) {
                  const _ = _.valPX - _,
                    _ = (0, _._)(Math.abs(_ / (_ - _)), 0, 1) * _;
                  _.current = requestAnimationFrame((_) =>
                    _(_, _, _.valPX, _, _.BReachedMaxScroll),
                  );
                }
                _.current = _.valPX;
              } else _((0, _._)(_.valPX, 0, _));
            }, [_, _, _.valPX, _, _, _, _.valPX, _, _]),
            _
          );
        }
        function _(_, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = _.GetGameRecordingVideo(),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useCallback)(() => {
              if (!_.current) return;
              const _ = _.GetGlobalMSPlaytime();
              if (_.valMS >= 0) {
                const _ = _.BVideoElementPlaying(),
                  _ = _.GetVideoElementCurrentTime(),
                  _ = _.GetScrollableWidthPX(),
                  _ = _.GetCurrentZoomScale();
                if (_.current !== _.valMS || (_.current && _.current != _)) {
                  const _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
                    _ = Math.min(_, _);
                  _(_), (_.current = _);
                } else if (
                  _.current &&
                  _.current === _.valMS &&
                  _ &&
                  _.current &&
                  _.current !== _ &&
                  _
                ) {
                  const _ = _.current + (_ - _.current) * 1e3,
                    _ = _.ConvertGlobalMSToGlobalPXOffset(_);
                  if (_.current && _.current < _) {
                    const _ = Math.min(_, _);
                    _(_);
                  }
                  _.current = _;
                }
                _ || ((_.current = null), (_.current = _.valMS)),
                  _ &&
                    _.current !== _.valMS &&
                    ((_.current = _), (_.current = _.valMS)),
                  (_.current = _);
              }
              _.current = requestAnimationFrame(_);
            }, [_, _, _, _]),
            _ = (0, _.useCallback)(() => {
              _.current && cancelAnimationFrame(_.current),
                (_.current = null),
                (_.current = null),
                (_.current = null),
                (_.current = null);
            }, []),
            _ = (0, _.useCallback)(() => {
              _.current || (_.current = requestAnimationFrame(_));
            }, [_]);
          return {
            clearPlaybackAnimation: _,
            startPlaybackAnimation: _,
          };
        }
        function _(_) {
          const { className: _, playheadPosition: _, children: _ } = _;
          return (0, _.jsx)("div", {
            className: (0, _._)(_.PlayHeadContainer, _),
            style: {
              transform: `translateX( calc(${_}px - 50% ))`,
            },
            children: _,
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = parseInt(_.thumbnailWidth),
          __webpack_require__ = _.forwardRef(function (_, _) {
            const {
                globalMS: _,
                children: _,
                imgClassName: _,
                className: _,
                ..._
              } = _,
              _ = _(),
              _ = _.GetGameID(),
              _ = _.GetClipID(),
              _ = (0, _._)(() => _.GetRecordingMode()),
              _ = (0, _._)(() =>
                _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_),
              ),
              _ = _(),
              _ = !1,
              _ =
                _ && _
                  ? Math.round(_.nRecordingOffsetMS * 100) / 100
                  : _ == null
                    ? void 0
                    : _.nRecordingOffsetMS,
              _ = _(
                _,
                _,
                _ == null ? void 0 : _.strRecordingID,
                _,
                _ == null ? void 0 : _.nStartOffsetMS,
                _,
                _,
              ),
              [_, _] = (0, _.useState)();
            return (
              (0, _.useEffect)(() => {
                _ && _(_);
              }, [_]),
              (0, _.jsxs)("div", {
                ref: _,
                className: (0, _._)(_.ThumbnailContainerOffset, _[_], _),
                ..._,
                children: [
                  (0, _.jsxs)("div", {
                    className: (0, _._)(
                      _.ThumbnailContents,
                      (_ == null ? void 0 : _.strRecordingID) && !_ && _.Hide,
                      _[_],
                    ),
                    children: [
                      (0, _.jsx)("div", {
                        className: _.ImageAndInfoBoxContainer,
                        children: (0, _.jsxs)("div", {
                          className: _.ImageContainer,
                          children: [
                            _ != null && _.strRecordingID
                              ? (0, _.jsx)("img", {
                                  className: _.ThumbnailImage,
                                  src: _,
                                })
                              : (0, _.jsx)("div", {
                                  className: _.NoRecordedContent,
                                  children: (0, _._)(
                                    "#GameRecording_PlayerNoContent",
                                  ),
                                }),
                            (0, _.jsx)(_, {}),
                          ],
                        }),
                      }),
                      (0, _.jsx)("div", {
                        className: (0, _._)(_.TooltipChildren),
                        children: _,
                      }),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: (0, _._)(_.ThumbnailHitBoxPadding),
                  }),
                ],
              })
            );
          });
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetGameID()),
            _ = (0, _._)(() => _.GetThumbnailComponent()),
            _ = (0, _._)(() => _.GetThumbnailEntry());
          if (!_ || _ !== _.Highlight) return null;
          if ((0, _._)(_.entry))
            return (0, _.jsx)(_, {
              thumbnailEntry: _,
              achievementEntry: _.entry,
              strGameID: _,
            });
          let _ = "",
            _ = "";
          return (
            (0, _._)(_.entry)
              ? (_ =
                  (0, _._)(_.entry.description) ||
                  "#GameRecording_UnknownError")
              : (0, _._)(_.entry)
                ? ((_ = _.entry.title
                    ? _.entry.title
                    : (0, _._)("#Marker_UserMarker_Title")),
                  (_ = _.entry.description || ""))
                : (0, _._)(_.entry) &&
                  ((_ = _.entry.title || ""), (_ = _.entry.description || "")),
            !_ && !_
              ? null
              : (0, _.jsx)(_, {
                  title: _,
                  description: _,
                  thumbnailEntry: _,
                })
          );
        }
        function _(_) {
          var _, _;
          const { strGameID: _, thumbnailEntry: _, achievementEntry: _ } = _,
            _ = new _._(_),
            _ = _(_.GetAppID(), _.achievement_name);
          return _
            ? (0, _.jsx)(_, {
                title: (_ = _.name) != null ? _ : "",
                description: (_ = _.description) != null ? _ : "",
                thumbnailEntry: _,
              })
            : null;
        }
        function _(_) {
          const { title: _, description: _, thumbnailEntry: _ } = _;
          return (0, _.jsxs)("div", {
            className: _.InfoBoxContainer,
            children: [
              (0, _.jsxs)("div", {
                className: _.Header,
                children: [
                  (0, _.jsx)("div", {
                    className: _.Icon,
                    children: (0, _.jsx)(_, {
                      entry: _.entry,
                      strMarkerIcon: _.strMarkerIcon,
                    }),
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.Title,
                      children: _,
                    }),
                ],
              }),
              (0, _.jsx)("div", {
                className: _.DescriptionBlock,
                children:
                  _ &&
                  (0, _.jsx)("div", {
                    className: _.Description,
                    children: _,
                  }),
              }),
            ],
          });
        }
        const __webpack_require__ = _.forwardRef(function (_, _) {
          const { globalPX: _, onMouseEnter: _, onMouseLeave: _ } = _,
            _ = _(),
            _ = (0, _._)(() => _.ConvertPXOffsetToGlobalMS(_, !1)),
            _ = (0, _._)(() => _.GetThumbnailComponent()),
            _ = _(),
            _ = (0, _._)(() => _.GetRecordingMode());
          return (0, _.jsxs)(_, {
            className: (0, _._)(_.ThumbnailTooltip, _[_], _[_]),
            globalMS: _,
            ref: _,
            onMouseEnter: _,
            onMouseLeave: _,
            children: [
              (0, _.jsx)(_, {
                globalMS: _,
              }),
              (0, _.jsx)(_, {
                globalMS: _,
              }),
              (0, _.jsxs)("div", {
                className: _.TooltipInteractionRegion,
                children: [
                  _ === _.Highlight
                    ? (0, _.jsx)(_, {})
                    : (0, _.jsx)(_, {
                        globalPX: _,
                      }),
                  (0, _.jsx)(_, {
                    globalMS: _,
                  }),
                ],
              }),
            ],
          });
        });
        function _(_) {
          const { globalMS: _ } = _,
            _ = _(),
            _ = (0, _._)(() => _.GetStateDescriptionAtGlobalMS(_));
          return _ != null && _.title
            ? (0, _.jsx)("div", {
                className: _.StateDescription,
                children: _.title,
              })
            : null;
        }
        function _(_, _) {
          return _.priority - _.priority;
        }
        function _(_) {
          const { globalMS: _ } = _,
            { setSelectedMarker: _ } = _(),
            _ = _(),
            _ = _(),
            _ = (0, _._)(() => _.FindRangeEventsAtGlobalMS(_)),
            _ = 3,
            _ = _.length > _ ? _.sort(_).slice(0, _) : _,
            _ = (_, _) => {
              const _ = parseInt(_.duration),
                { nTimelineOffsetMS: _, strTimelineID: _ } =
                  _.ConvertGlobalOffsetToTimelineRelativeOffset(_),
                _ = _ - _.valMS + parseInt(_.time),
                [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(_, _, 0, _);
              _.SetPlaytimeFromGlobalMS((0, _._)(_)),
                _ == null || _(_._, _, _, _),
                _._.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromRangeEvent",
                ),
                _.stopPropagation();
            };
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_, _) =>
              (0, _.jsxs)(
                "div",
                {
                  className: _.TooltipRangeContainer,
                  onClick: (_) => _(_, _),
                  children: [
                    _.icon &&
                      (0, _.jsx)(_, {
                        gameID: _.GetGameID(),
                        icon: _.icon,
                        className: _.RangeIcon,
                      }),
                    (0, _.jsx)("div", {
                      className: _.Title,
                      children: _.title,
                    }),
                    (0, _.jsx)("div", {
                      className: _.Duration,
                      children: (0, _._)(parseInt(_.duration) / 1e3, !1),
                    }),
                  ],
                },
                `${_.time}_${_}`,
              ),
            ),
          });
        }
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetRecordingMode()),
            _ = _(),
            _ = (0, _._)(() => _.GetThumbnailEntry());
          if (!_) return null;
          const _ = _.GetTimelineOffsetMS(_.strTimelineID),
            _ = parseInt(_.entry.time),
            _ = (0, _._)(_ - _),
            _ = _.MakeRelativeToTimelineEndIfActive(_.strTimelineID, _.valMS);
          let _ = "";
          if ((0, _._)(_.entry)) {
            const _ = _ + parseInt(_.entry.duration);
            if (_ < 0) {
              const _ = (0, _._)(Math.abs(_ / 1e3), !1, !1),
                _ = (0, _._)(Math.abs(_ / 1e3), !1, !1);
              _ = (0, _._)("#Duration_WrittenNegation", _ + " - " + _);
            } else {
              const _ = (0, _._)(_ / 1e3, !1, !1),
                _ = (0, _._)(_ / 1e3, !1, !1);
              _ = _ + " - " + _;
            }
          } else _ = (0, _._)(_ / 1e3, !1, !0);
          return (0, _.jsx)("div", {
            className: (0, _._)(_.TimeDisplayContainer, _.Highlight, _[_]),
            children: _,
          });
        }
        function _(_) {
          const { globalPX: _ } = _,
            _ = _(),
            _ = (0, _._)(() =>
              _.ConvertPXToTimelineRelativeMS(_, "end-if-active"),
            );
          return _
            ? (0, _.jsx)("div", {
                className: _.TimeDisplayContainer,
                children: (0, _._)(_ / 1e3, !1, !0),
              })
            : null;
        }
        function _(_) {
          const { globalMS: _ } = _,
            _ = _(),
            _ = (0, _._)(() => _.GetGameID()),
            _ = (0, _._)(() => _.GetThumbnailComponent()),
            _ = (0, _._)(() => _.GetThumbnailEntry());
          let _ = [
            (0, _.jsx)(
              _,
              {
                globalMS: _,
              },
              "add_marker",
            ),
            (0, _.jsx)(
              _,
              {
                globalMS: _,
              },
              "view_clip",
            ),
          ];
          return (
            _ == _.Highlight &&
              _ &&
              ((0, _._)(_.entry) || (0, _._)(_.entry) || (0, _._)(_.entry)
                ? (_ = [
                    (0, _.jsx)(
                      _,
                      {
                        markerInfo: _,
                      },
                      "create_marker_clip",
                    ),
                    (0, _.jsx)(
                      _,
                      {
                        markerInfo: _,
                      },
                      "view_clip",
                    ),
                  ])
                : (0, _._)(_.entry)
                  ? (_ = [
                      (0, _.jsx)(
                        _,
                        {
                          markerInfo: _,
                        },
                        "create_marker_clip",
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          entry: _.entry,
                          gameID: _,
                        },
                        "view_screen",
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          markerInfo: _,
                        },
                        "view_clip",
                      ),
                    ])
                  : (0, _._)(_.entry) &&
                    (_ = [
                      (0, _.jsx)(
                        _,
                        {
                          markerInfo: _,
                        },
                        "edit_user",
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          markerInfo: _,
                        },
                        "create_marker_clip",
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          markerInfo: _,
                        },
                        "delete_user",
                      ),
                      (0, _.jsx)(
                        _,
                        {
                          markerInfo: _,
                        },
                        "view_clip",
                      ),
                    ])),
            (0, _.jsx)("div", {
              className: _.TooltipButtons,
              children: _,
            })
          );
        }
        function _(_) {
          const { setSelectedMarker: _ } = _(),
            { markerInfo: _ } = _,
            _ = _(),
            _ = (0, _._)(() => _.ShouldModeShowClipControls()),
            _ = (0, _._)(() =>
              _.ConvertGlobaOffsetToRecordingAndRelativeOffset(
                _.nGlobalMS.valMS,
              ),
            ),
            _ = _(),
            _ = _(),
            _ = (_) => {
              let _ = _,
                _ = _;
              (0, _._)(_.entry) && ((_ = 0), (_ = parseInt(_.entry.duration)));
              const [_, _] = _.GetLoader().CreateGlobalRangeForTimeline(
                _.strTimelineID,
                _.nGlobalMS.valMS,
                _,
                _,
              );
              _.SetPlaytimeFromGlobalMS((0, _._)(_)),
                _ == null || _(_.entry._, _.strTimelineID, _, _),
                _(),
                _._.ReportTrackedAction(
                  "/GameRecording/Tooltip/ClipFromHighlight",
                ),
                _.stopPropagation();
            };
          return !(_ != null && _.strRecordingID) || !_
            ? null
            : (0, _.jsx)(_._, {
                toolTipContent: (0, _._)(
                  _
                    ? "#RecordingState_Clip_LowDiskSpace"
                    : "#TimelineDialog_ClipVideo",
                ),
                direction: "top",
                bTopmost: !0,
                children: (0, _.jsx)("div", {
                  className: (0, _._)(_.Button, _.CreateClipButton),
                  onClick: _,
                  children: (0, _.jsx)(_._, {}),
                }),
              });
        }
        function _(_) {
          const { markerInfo: _ } = _,
            _ = _(),
            _ = (0, _._)(() =>
              _.ConvertGlobalMSToClipOrNone(_.nGlobalMS.valMS),
            ),
            { onNavigateToClip: _ } = _(),
            _ = () => {
              _ &&
                (_._.ReportTrackedAction(
                  `/GameRecording/Tooltip/ViewClip/${_.entry.type}`,
                ),
                _(_.clipID));
            };
          return _
            ? (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#TimelineDialog_ViewClip"),
                direction: "top",
                bTopmost: !0,
                children: (0, _.jsx)("div", {
                  className: (0, _._)(_.Button, _.GoToClipFromMarker),
                  onClick: _,
                  children: (0, _.jsx)(_.CeX, {}),
                }),
              })
            : null;
        }
        function _(_) {
          const { markerInfo: _ } = _,
            _ = _(),
            _ = _(),
            _ = (_) => {
              (0, _._)(_.entry) &&
                (_._.ReportTrackedAction(
                  `/GameRecording/Marker/Delete/${_.entry.type}`,
                ),
                _.RemoveUserMarker(_.strTimelineID, _.entry._),
                _.SetThumbnailComponent(null));
            };
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#Marker_Action_Delete"),
            direction: "top",
            bTopmost: !0,
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.Button, _.DeleteMarker),
              onClick: _,
              children: (0, _.jsx)(_.lMJ, {}),
            }),
          });
        }
        function _(_) {
          const { markerInfo: _ } = _,
            _ = _(),
            _ = _(),
            _ = (_) => {
              if (!(0, _._)(_.entry)) return;
              _._.ReportTrackedAction(
                `/GameRecording/Marker/Edit/${_.entry.type}`,
              );
              let _ = (0, _.jsx)(_, {
                entry: _.entry,
                playbackCoordinator: _,
                fnClearSelection: _,
                strTimelineID: _.strTimelineID,
              });
              (0, _._)(_, (0, _._)(_)), _.stopPropagation(), _.preventDefault();
            };
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#Marker_Action_Edit"),
            direction: "top",
            bTopmost: !0,
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.Button, _.EditMarker),
              onClick: _,
              children: (0, _.jsx)(_._, {}),
            }),
          });
        }
        function _(_) {
          const { entry: _, gameID: _ } = _,
            _ = _.handle,
            { onNavigateToScreenshot: _ } = _(),
            _ = () => {
              _ &&
                (_._.ReportTrackedAction("/GameRecording/Tooltip/Screenshot"),
                _(_, _));
            };
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#TimelineDialog_ViewScreenshot"),
            direction: "top",
            bTopmost: !0,
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.Button, _.ViewScreenshot),
              onClick: _,
              children: (0, _.jsx)(_._, {}),
            }),
          });
        }
        function _(_) {
          const { globalMS: _ } = _,
            _ = _(),
            _ = (0, _._)(() =>
              _.ConvertGlobaOffsetToRecordingAndRelativeOffset(_),
            );
          if (!(_ != null && _.strRecordingID)) return null;
          const _ = () => {
            _.AddUserMarkerAtGlobalMS(
              (0, _._)(_),
              "/GameRecording/AddMarker/Thumbnail",
              null,
            ),
              _.SetPlaytimeFromGlobalMS((0, _._)(_));
          };
          return (0, _.jsx)(_._, {
            toolTipContent: (0, _._)("#TimelineDialog_AddMarker"),
            direction: "top",
            children: (0, _.jsx)("div", {
              className: (0, _._)(_.Button, _.AddMarker),
              onClick: _,
              children: (0, _.jsx)(_._, {}),
            }),
          });
        }
        function _(_) {
          const { globalMS: _ } = _,
            _ = _(),
            _ = (0, _._)(() => _.ConvertGlobalMSToClipOrNone(_)),
            { onNavigateToClip: _ } = _(),
            _ = () => {
              _ &&
                (_._.ReportTrackedAction(
                  "/GameRecording/Tooltip/ViewClip/timeline",
                ),
                _(_.clipID));
            };
          return _
            ? (0, _.jsx)(_._, {
                toolTipContent: (0, _._)("#TimelineDialog_ViewClip"),
                direction: "top",
                children: (0, _.jsx)("div", {
                  className: (0, _._)(_.Button, _.GoToClip),
                  onClick: _,
                  children: (0, _.jsx)(_.CeX, {}),
                }),
              })
            : null;
        }
        const __webpack_require__ = _.memo(function (_) {
            const _ = _(),
              _ = _(),
              _ = _(),
              _ = _(),
              _ = _(),
              _ = (0, _.useCallback)(
                (_) => {
                  if (!_) return;
                  const _ = _.currentTarget.getBoundingClientRect(),
                    _ = _._(_.clientX - _._, 0, _.width),
                    _ = _.ConvertPXOffsetToGlobalMS(_, !1);
                  _ &&
                    _.SetPlaytimeFromGlobalMS((0, _._)(_), void 0, void 0, !0);
                },
                [_, _, _],
              ),
              _ = (0, _.useCallback)(
                (_) => {
                  if (!_) return;
                  const _ = _.currentTarget.getBoundingClientRect(),
                    _ = _._(_.clientX - _._, 0, _.width),
                    _ = _.ConvertPXOffsetToGlobalMS(_, !1);
                  _ &&
                    (_(_, (0, _._)(_), !1, {
                      bDisableMouseOverlay: !0,
                      bForcePopup: !0,
                      bAlwaysOnTop: !0,
                    }),
                    _.preventDefault(),
                    _.stopPropagation());
                },
                [_, _, _],
              );
            return (
              _("click", _),
              _("contextmenu", _),
              (0, _.jsx)(_, {
                globalMouseXPX: _.globalMouseXPX.valPX || 0,
              })
            );
          }),
          __webpack_require__ = _.memo(function (_) {
            const { globalMouseXPX: _ } = _,
              _ = _(),
              _ = _(),
              _ = _(),
              _ = (0, _._)(() => {
                if (_.GetThumbnailComponent()) return _.GetThumbnailPosition();
              }),
              [_, _] = (0, _.useState)(),
              [_, _] = (0, _.useState)();
            return (
              (0, _.useEffect)(() => {
                if (!isNaN(_)) {
                  _(_);
                  return;
                }
                !_ && _ && _(_);
              }, [_, _, _, _, _]),
              (0, _.jsx)("div", {
                className: _.GhostPlayheadCtn,
                style: {
                  transform: `translateX( calc(${_}px - 50%))`,
                },
                children: (0, _.jsx)(_, {
                  globalPX: _,
                  setInteractingWithThumbnail: _,
                  bInteractingWithThumbnail: _,
                }),
              })
            );
          });
        function _(_) {
          const {
              globalPX: _,
              setInteractingWithThumbnail: _,
              bInteractingWithThumbnail: _,
            } = _,
            _ = _(),
            _ = _(),
            _ = (0, _._)(() => _.GetRecordingMode() === "Overlay"),
            _ = (0, _._)(() => _.ConvertPXOffsetToGlobalMS(_, !1)),
            _ = (0, _._)(() => _.GetTimelineParentCtnRef()),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)(() => _.GetThumbnailComponent()),
            _ = _(),
            _ = () => _(!0),
            _ = (_) => _(!1),
            _ = (0, _._)({
              toolTipContent: (0, _.jsx)(_, {
                globalPX: _,
                ref: _,
                onMouseEnter: _,
                onMouseLeave: _,
              }),
              direction: _ ? "bottom" : "top",
              nDelayShowMS: 0,
              nBodyDistance: 0,
              nAllowOffscreenPx: 0,
            }),
            { setHovered: _, setTarget: _ } = _.stateHandlers,
            _ = (0, _.useCallback)(() => {
              _(!1),
                _(!1),
                _.current && _.current(),
                (_.current = null),
                _.GetAutoScrollPaused() && _.SetAutoScrollPauseTimeout(),
                _.SetThumbnailComponent(null);
            }, [_, _, _]),
            _ = (0, _.useCallback)(
              (_, _) => {
                if (!_.current || !_.current) return;
                const _ = _.current.getBoundingClientRect(),
                  _ = _.left,
                  _ = _.right;
                let _ = _.top,
                  _ = _.bottom;
                if (_.current) {
                  const _ = _.current.getBoundingClientRect();
                  _ ? (_ = _.bottom) : (_ = _.top);
                }
                (_ <= _ || _ >= _ || _ <= _ || _ >= _) && _();
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                const _ = _.GetThumbnailComponent();
                (_ && _ !== _.Highlight) || _(_.clientX, _.clientY);
              },
              [_, _],
            ),
            _ = (0, _.useCallback)(
              (_) => {
                _(_.clientX, _.clientY);
              },
              [_],
            ),
            _ = (0, _.useCallback)(() => {
              _(!0), _(_.current);
              const _ = (0, _._)(_.current);
              _ &&
                !_.current &&
                (_.addEventListener("mousemove", _),
                _.addEventListener("mouseup", _),
                (_.current = () => {
                  _.removeEventListener("mousemove", _),
                    _.removeEventListener("mouseup", _);
                }));
            }, [_, _, _, _]);
          _("mouseenter", _),
            (0, _.useEffect)(() => {
              const _ = (_) => {
                const _ = _.GetThumbnailComponent();
                (_ && _ === _.Playhead) ||
                  _ === _.RangeLeft ||
                  _ === _.RangeRight ||
                  (_.current && !(0, _._)(_.current, _.relatedTarget) && _());
              };
              return (
                _ && _.addEventListener("mouseleave", _),
                () => _ && _.removeEventListener("mouseleave", _)
              );
            }, [_, _, _]),
            (0, _.useEffect)(() => _, [_]);
          const _ = (_ || _) && _ && !_;
          return (0, _.jsxs)("div", {
            ref: _,
            className: _.TooltipHoverSource,
            children: [
              (0, _.jsx)(_, {
                className: (0, _._)(_.GhostPlayhead, _ && _.Show),
              }),
              !!_ && _.tooltip,
            ],
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = 500;
        var __webpack_require__ = ((_) => (
          (_.none = "none"), (_.left = "left"), (_.right = "right"), _
        ))(_ || {});
        const __webpack_require__ = (0, _.memo)(function () {
            const [_, _] = (0, _.useState)("none"),
              _ = _(),
              _ = _(),
              _ = _();
            return !_ || !_ || !_
              ? null
              : (0, _.jsx)("div", {
                  className: _.RangeControls,
                  children: (0, _.jsx)(_, {
                    activeControlState: _,
                    setActiveControlState: _,
                  }),
                });
          }),
          __webpack_require__ = (0, _.memo)(function (_) {
            const { activeControlState: _, setActiveControlState: _ } = _,
              [_, _] = (0, _.useState)(),
              [_, _] = (0, _.useState)(),
              _ = _(),
              _ = _(),
              _ = _(),
              _ = (0, _._)(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
              _ = (0, _._)(() => _.ConvertGlobalMSToGlobalPXOffset(_.valMS)),
              _ = (0, _.useCallback)(
                (_) => {
                  _(_), _.SetAutoScrollPauseTimeout();
                },
                [_],
              ),
              _ = (0, _.useCallback)(
                (_) => {
                  _(_), _.SetAutoScrollPauseTimeout();
                },
                [_],
              ),
              _ = (0, _.useCallback)(
                (_) => {
                  _ === "none" && _.stopPropagation();
                },
                [_],
              ),
              _ = (0, _.useCallback)(
                (_) => {
                  _ === "none" && _.stopPropagation();
                },
                [_],
              );
            return (0, _.jsx)("div", {
              className: (0, _._)(_.RangeSelectorCtn, _ !== "none" && _.Active),
              onMouseOver: _,
              onMouseOut: _,
              onFocus: _,
              onBlur: _,
              children: (0, _.jsxs)("div", {
                className: _.TrackRangeControls,
                children: [
                  (0, _.jsx)(_, {
                    isActive: _ === "left",
                    setControlState: _,
                    setRangeControlPX: _,
                    pxOffset: _,
                  }),
                  (0, _.jsx)(_, {
                    startOffsetPX: (_ === "left" && _) || _,
                    endOffsetPX: (_ === "right" && _) || _,
                    className: _.SelectedRangeMask,
                  }),
                  (0, _.jsx)(_, {
                    isActive: _ === "right",
                    setControlState: _,
                    setRangeControlPX: _,
                    pxOffset: _,
                  }),
                ],
              }),
            });
          });
        function _(_, _, _) {
          const _ = _.GetVisualWindowStartPX() - _.GetTimelineMarginWidth(),
            _ = _ + _.GetVisualWidth(),
            _ = Math.max(0, _ + 3),
            _ = Math.min(_.GetScrollableWidthPX(), _ - 3);
          _(_._(_, _, _));
        }
        function _(_, _, _, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(!1),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _._)(() => _.GetScrollWindowWidth());
          (0, _.useEffect)(
            () => () => {
              _.current &&
                (cancelAnimationFrame(_.current),
                (_.current = null),
                (_.current = null));
            },
            [],
          );
          const _ = _.useCallback(
            (_, _, _, _, _) => {
              if (_(_))
                _(
                  _._(
                    _.GetVisualWindowStartPX() + _,
                    0,
                    _.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(_.current),
                  (_.current = null),
                  (_.current = null);
              else {
                if (
                  (_.current &&
                    (_.current = requestAnimationFrame((_) =>
                      _(_, _, _, _, _),
                    )),
                  _.current)
                ) {
                  const _ = ((_ - _.current) / _) * _;
                  _.ScrollBy(_),
                    _((_) => _._(_ + _, 0, _.GetScrollableWidthPX()));
                }
                _.current = _;
              }
            },
            [_],
          );
          (0, _.useEffect)(() => {
            _.current &&
              (cancelAnimationFrame(_.current),
              (_.current = null),
              (_.current = null));
            const _ = _ * (1 - _),
              _ = _ * _,
              _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
              _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
            if (_.valPX > _) {
              _(_), _("right"), _.SetThumbnailComponent(_.RangeRight);
              return;
            }
            if (_.valPX < _ && !_.BReachedMinScroll()) {
              if (_.valPX > _.current) _.current = !0;
              else if (_.valPX < _.current || !_.current) {
                const _ = Math.min(_, _),
                  _ = _.valPX - _,
                  _ = _._(Math.abs(_ / _), 0, 1) * _;
                (_.current = requestAnimationFrame((_) =>
                  _(_, _, _.valPX, _, _.BReachedMinScroll),
                )),
                  (_.current = !1);
              }
              _(_.valPX, _, _);
            } else if (_.valPX > _ && _ > _ && !_.BReachedMaxScroll()) {
              if (_.valPX < _.current) _.current = !0;
              else if (_.valPX > _.current || !_.current) {
                const _ = (_) => {
                    const _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
                    return _.BReachedMaxScroll() || _ <= _;
                  },
                  _ = _.valPX - _,
                  _ = _._(Math.abs(_ / (_ - _)), 0, 1) * _;
                (_.current = requestAnimationFrame((_) =>
                  _(_, _, _.valPX, _, _),
                )),
                  (_.current = !1);
              }
              _(_.valPX, _, _);
            } else _(_._(_.valPX, 0, _));
            _.current = _.valPX;
          }, [_.valPX, _.valMS, _.valPX, _, _, _, _, _, _]);
        }
        const __webpack_require__ = (0, _.memo)(function (_) {
          const {
              isActive: _,
              setControlState: _,
              setRangeControlPX: _,
              pxOffset: _,
            } = _,
            _ = _();
          return _
            ? (0, _.jsx)(_, {
                setControlState: _,
                setRangeControlPX: _,
                pxOffset: _,
              })
            : (0, _.jsx)(_, {
                offsetMS: _.valMS,
                direction: "left",
                setControlState: _,
                setRangeControlPX: _,
              });
        });
        function _(_) {
          const { setControlState: _, setRangeControlPX: _, pxOffset: _ } = _,
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _();
          return (
            _(_, _, _, _, _, _),
            (0, _.useEffect)(() => {
              isNaN(_) ||
                (_.SetThumbnailPosition(_),
                _(_._._, (0, _._)(_.ConvertPXOffsetToGlobalMS(_))));
            }, [_, _, _]),
            (0, _.jsx)(_, {
              offsetPX: _,
              direction: "left",
            })
          );
        }
        const __webpack_require__ = (0, _.memo)(function (_) {
          const {
              isActive: _,
              setControlState: _,
              setRangeControlPX: _,
              pxOffset: _,
            } = _,
            _ = _();
          return _
            ? (0, _.jsx)(_, {
                setControlState: _,
                setRangeControlPX: _,
                pxOffset: _,
              })
            : (0, _.jsx)(_, {
                offsetMS: _.valMS,
                direction: "right",
                setControlState: _,
                setRangeControlPX: _,
              });
        });
        function _(_) {
          const { setControlState: _, setRangeControlPX: _, pxOffset: _ } = _,
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _(),
            _ = _();
          return (
            _(_, _, _, _, _, _),
            (0, _.useEffect)(() => {
              isNaN(_) ||
                (_.SetThumbnailPosition(_),
                _(_._._, (0, _._)(_.ConvertPXOffsetToGlobalMS(_))));
            }, [_, _, _]),
            (0, _.jsx)(_, {
              offsetPX: _,
              direction: "right",
            })
          );
        }
        function _(_, _, _, _, _, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(!1),
            _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _._)(() => _.GetScrollWindowWidth());
          (0, _.useEffect)(
            () => () => {
              _.current &&
                (cancelAnimationFrame(_.current),
                (_.current = null),
                (_.current = null));
            },
            [],
          );
          const _ = _.useCallback(
            (_, _, _, _, _) => {
              if (_(_))
                _(
                  _._(
                    _.GetVisualWindowStartPX() + _,
                    0,
                    _.GetScrollableWidthPX(),
                  ),
                ),
                  cancelAnimationFrame(_.current),
                  (_.current = null),
                  (_.current = null);
              else {
                if (
                  (_.current &&
                    (_.current = requestAnimationFrame((_) =>
                      _(_, _, _, _, _),
                    )),
                  _.current)
                ) {
                  const _ = ((_ - _.current) / _) * _;
                  _.ScrollBy(_),
                    _((_) => _._(_ + _, 0, _.GetScrollableWidthPX()));
                }
                _.current = _;
              }
            },
            [_],
          );
          (0, _.useEffect)(() => {
            _.current &&
              (cancelAnimationFrame(_.current),
              (_.current = null),
              (_.current = null));
            const _ = _ * (1 - _),
              _ = _ * _,
              _ = _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
              _ = _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS);
            if (_.valPX < _) {
              _(_), _("left"), _.SetThumbnailComponent(_.RangeLeft);
              return;
            }
            if (_.valPX > _ && !_.BReachedMaxScroll()) {
              if (_.valPX < _.current) _.current = !0;
              else if (_.valPX > _.current || !_.current) {
                const _ = Math.max(_, _),
                  _ = _.valPX - _,
                  _ = _._(Math.abs(_ / (_ - _)), 0, 1) * _;
                (_.current = requestAnimationFrame((_) =>
                  _(_, _, _.valPX, _, _.BReachedMaxScroll),
                )),
                  (_.current = !1);
              }
              _(_.valPX, _, _);
            } else if (
              _.valPX < _ &&
              _ < _ &&
              _.valPX <= _.current &&
              !_.BReachedMinScroll()
            ) {
              if (_.valPX > _.current) _.current = !0;
              else if (_.valPX < _.current || !_.current) {
                const _ = _.valPX - _,
                  _ = _._(Math.abs(_ / _), 0, 1) * _,
                  _ = (_) =>
                    _.ConvertGlobalMSToScrollWindowPXOffset(_.valMS) > _ ||
                    _.BReachedMinScroll();
                (_.current = requestAnimationFrame((_) =>
                  _(_, _, _.valPX, _, _),
                )),
                  (_.current = !1);
              }
              _(_.valPX, _, _);
            } else _(_._(_.valPX, 0, _));
            _.current = _.valPX;
          }, [_.valMS, _.valPX, _, _, _, _, _, _.valPX, _]);
        }
        function _(_) {
          const {
              offsetMS: _,
              direction: _,
              setControlState: _,
              setRangeControlPX: _,
            } = _,
            _ = _(),
            _ = (0, _._)(() => _.ConvertGlobalMSToGlobalPXOffset(_));
          (0, _.useEffect)(
            () => (
              _(void 0),
              () => {
                _(_);
              }
            ),
            [_, _],
          );
          const _ = (0, _.useCallback)(
              (_) => {
                const _ = (0, _._)(_);
                let _, _;
                const _ = () => {
                  _(_),
                    _.SetThumbnailComponent(
                      _ === "left" ? _.RangeLeft : _.RangeRight,
                    ),
                    _();
                };
                _.addEventListener("mousemove", _),
                  (_ = () => _.removeEventListener("mousemove", _));
                const _ = () => {
                  _("none"), _.SetThumbnailComponent(null), _(), _();
                };
                _.addEventListener("mouseup", _),
                  (_ = () => _.removeEventListener("mouseup", _));
              },
              [_, _, _],
            ),
            _ = (_) => {
              _.SetThumbnailComponent(
                _ === "left" ? _.RangeLeft : _.RangeRight,
              );
            },
            _ = (_) => {
              _.SetThumbnailComponent(null);
            };
          return (0, _.jsx)("div", {
            className: _.InactiveSelectedRangeControl,
            onMouseDown: _,
            onMouseOver: _,
            onFocus: _,
            onMouseOut: _,
            onBlur: _,
            children: (0, _.jsx)(_, {
              offsetPX: _,
              direction: _,
            }),
          });
        }
        const __webpack_require__ = (0, _.memo)(function (_) {
            const { startOffsetPX: _, endOffsetPX: _, className: _ } = _;
            if (isNaN(_) || isNaN(_)) return null;
            const _ = {
              width: _ - _ || 0,
              transform: `translateX(${_}px)`,
            };
            return (0, _.jsx)("div", {
              className: (0, _._)(_.RangeMask, _),
              style: _,
            });
          }),
          __webpack_require__ = (0, _.memo)(function (_) {
            const { direction: _, offsetPX: _ } = _,
              _ = {
                transform: `translateX( calc( ${_}px - 50%) )`,
              },
              _ = _(),
              _ = (0, _._)(() => _.GetThumbnailComponent() === _.Playhead);
            return (0, _.jsx)("div", {
              style: _,
              className: (0, _._)(_.RangeControl),
              children: (0, _.jsx)("div", {
                className: (0, _._)(
                  _.RangeIcon,
                  _ === "left" && _.Left,
                  _ && _.Hide,
                ),
                children: (0, _.jsx)(_, {
                  innerFill: "#171d25",
                  direction: _,
                }),
              }),
            });
          });
        function _(_) {
          return (0, _.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 3 36",
            fill: "none",
            style: {
              transform: `rotate(${_.direction === "right" ? 180 : 0}deg)`,
            },
            children: [
              (0, _.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 0)",
              }),
              (0, _.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 10)",
              }),
              (0, _.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 20)",
              }),
              (0, _.jsx)("rect", {
                fill: "currentColor",
                width: "3",
                height: "6.00006",
                transform: "matrix(-1 0 0 1 3 30)",
              }),
            ],
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = 100,
          __webpack_require__ = _.memo(function (_) {
            const _ = _(),
              _ = (0, _._)(() => _.GetVisibleWindowRelativeTimelines()),
              _ = _().GetRecordingMode();
            let _ = [],
              _ = "";
            for (let _ of _) {
              let _ = _.GetTimeRecorded(_.timelineID),
                _ = (0, _._)(_);
              _ != _ &&
                (_.push({
                  timeline: _,
                  strLabel: _,
                }),
                (_ = _));
            }
            for (let _ = _.length - 2; _ >= 0; _--) {
              let _ = _[_];
              _[_ + 1].timeline.nVisibleStartPX - _.timeline.nVisibleStartPX >=
                _ || _.splice(_, 1);
            }
            return (0, _.jsx)(_.Fragment, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    startPX: _.timeline.nVisibleStartPX,
                    label: _.strLabel,
                    recordingMode: _,
                  },
                  _.timeline.timelineID,
                ),
              ),
            });
          });
        function _(_) {
          const { label: _, startPX: _, recordingMode: _ } = _;
          let _ = _ == _.Overlay;
          return (0, _.jsx)("div", {
            className: (0, _._)(_.TimelineRelativeDate, _ && _.Overlay),
            style: {
              transform: `translateX(${_}px)`,
            },
            children: _,
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = (0, _.memo)(function (_) {
          const _ = _(),
            _ = (0, _._)(() => _.GetVisibleRecordings());
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  startPX: _.nStartPX,
                  endPX: _.nEndPX,
                  isActive: _.bIsActive,
                  recordingType: _.recordingType,
                },
                _.recordingID,
              ),
            ),
          });
        });
        function _(_) {
          const { isActive: _, endPX: _, startPX: _, recordingType: _ } = _,
            _ = {
              width: _ - _ || 0,
              transform: `translateX(${_}px)`,
            },
            _ = _(),
            _ = _ === _,
            _ = _ === _;
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _.RecordingDecorator,
                  _ && _.Clip,
                  _ && _.Manual,
                  _ && _.ClipMode,
                ),
                style: _,
              }),
              _ &&
                (0, _.jsx)(_, {
                  endPX: _,
                }),
            ],
          });
        }
        function _(_) {
          const { endPX: _ } = _,
            _ = _(),
            _ = _(),
            _ = (0, _._)(() => _.GetRecordingMode() === "Overlay"),
            _ = _(_.GetGameID()),
            _ = (0, _._)(() => _.GetIsLiveEdge() && !_.GetHidePlayer()),
            _ = (0, _._)(() => {
              const _ = _.GetLiveEdgeBufferWindowStartMS();
              return _.ConvertGlobalMSToGlobalPXOffset(_.valMS);
            });
          if (!_ || _ !== _.BackgroundRecording) return null;
          const _ = {
            width: _ - _ || 0,
            transform: `translateX(${_}px)`,
          };
          return (0, _.jsx)("div", {
            className: (0, _._)(_.LiveRecordingBuffer, _ && _.IsLive),
            style: _,
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = (0, _.memo)(function (_) {
            const _ = _(),
              _ = (0, _._)(() => _.GetVisibleClips());
            return (0, _.jsx)(_.Fragment, {
              children: _.map((_) =>
                (0, _.jsx)(
                  _,
                  {
                    startPX: _.pxClipStart,
                    endPX: _.pxClipEnd,
                  },
                  _.clipID,
                ),
              ),
            });
          }),
          __webpack_require__ = (0, _.memo)(function (_) {
            const { endPX: _, startPX: _ } = _,
              _ = {
                width: _ - _ || 0,
                transform: `translateX(${_}px)`,
              };
            return (0, _.jsx)("div", {
              className: _.ClipDecorator,
              style: _,
            });
          });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        function _() {
          const _ = _(),
            _ = _(_.GetGameID());
          return _ === _.NotRecording || _ === _.NotRunning
            ? null
            : (0, _.jsx)(_, {});
        }
        function _(_) {
          const _ = _(),
            _ = (0, _._)(() => _.GetIsLiveEdge() && !_.GetHidePlayer()),
            _ = _.useCallback(() => {
              _.SetHidePlayer(!1), _.GetGameRecordingVideo().Play();
              const _ = _.GetLiveEdgeMS();
              _.SetPlaytimeFromGlobalMS(_), _.FocusGlobalMS(_);
            }, [_]);
          return (0, _.jsx)(_._, {
            className: _.GoLiveButtonCtn,
            toolTipContent: (0, _._)(
              _ ? "#Playback_AtLatest" : "#Playback_JumpToLatest",
            ),
            direction: "bottom",
            children: (0, _.jsx)(_._, {
              onClick: _,
              className: (0, _._)(_.GoLiveButton, _ && _.IsLive),
              children: (0, _.jsx)(_._, {
                className: (0, _._)(_.JumpToEndIcon),
              }),
            }),
          });
        }
        const __webpack_require__ = (0, _.forwardRef)(function (_, _) {
            const _ = _();
            return (0, _._)(() => !_.BEmpty())
              ? (0, _.jsx)(_, {
                  ..._,
                  timelineView: _,
                  ref: _,
                })
              : (0, _.jsx)(_, {
                  ref: _,
                });
          }),
          __webpack_require__ = (0, _.forwardRef)(function (_, _) {
            return (0, _.jsx)("div", {
              ref: _,
              className: (0, _._)(_.ScrollbarPlaceholder, _.className),
            });
          }),
          __webpack_require__ = (0, _.forwardRef)(function (_, _) {
            const _ = _(),
              {
                children: _,
                className: _,
                timelineView: _,
                disableZoom: _,
              } = _,
              [_, _] = (0, _.useState)(),
              _ = _.useCallback(
                (_) => {
                  const _ = _.target.getBoundingClientRect();
                  _.SetScrollWindowOffset(_._),
                    _.SetScrollWindowWidth(_.width),
                    _(_);
                },
                [_],
              ),
              _ = (0, _._)(_),
              _ = _.useCallback(
                (_) => {
                  if (_.ctrlKey && !_) {
                    const _ = _ ? (_.clientX - _._) / _.width : 0.5;
                    _.deltaY > 0
                      ? _.ZoomOut(_.deltaY / 100, _)
                      : _.ZoomIn(-_.deltaY / 100, _);
                  } else _.ScrollBy(_.deltaY);
                },
                [_, _, _],
              ),
              _ = () => _.SetAutoScrollPaused(!0),
              _ = () => _.SetAutoScrollPauseTimeout();
            return (
              _(_, _),
              (0, _.jsxs)("div", {
                ref: _,
                onWheel: _,
                onMouseOver: _,
                onFocus: () => {},
                onMouseLeave: _,
                children: [
                  (0, _.jsxs)("div", {
                    className: _.LeftControlsAndContent,
                    children: [
                      (0, _.jsxs)("div", {
                        ref: _,
                        className: (0, _._)(_.ContentAndGradient, _),
                        children: [
                          _,
                          (0, _.jsx)(_, {
                            timelineView: _,
                          }),
                        ],
                      }),
                      _.GetRecordingMode() === _.Overlay && (0, _.jsx)(_, {}),
                    ],
                  }),
                  (0, _.jsx)("div", {
                    className: _.ScrollbarAndSiblings,
                    children: !_.GetGamepadMode() && (0, _.jsx)(_, {}),
                  }),
                ],
              })
            );
          });
        function _(_) {
          const { timelineView: _ } = _,
            _ = (0, _._)(() => _.GetVisualWindowStartPX()),
            _ = (0, _._)(() => _.BReachedMaxScroll());
          return (0, _.jsxs)("div", {
            className: _.ScrollGradientCtn,
            children: [
              (0, _.jsx)("div", {
                className: (0, _._)(_.FrontGradient, _ === 0 && _.HideGradient),
              }),
              (0, _.jsx)("div", {
                className: (0, _._)(_.EndGradient, _ && _.HideGradient),
              }),
            ],
          });
        }
        function _() {
          const [_, _] = (0, _.useState)({
              scrollBarWidth: 0,
              scrollBarXOffset: 0,
            }),
            _ = _.useCallback((_) => {
              const _ = _.target.getBoundingClientRect();
              _({
                scrollBarWidth: _.width,
                scrollBarXOffset: _._,
              });
            }, []),
            _ = _(),
            _ = (0, _._)(
              () => _.GetScrollableWidthPX() + 2 * _.GetTimelineMarginWidth(),
            ),
            _ = (0, _._)(() => _.GetVisualWidth()),
            _ = (0, _.useMemo)(
              () => (_ * _.scrollBarWidth) / _ || 0,
              [_, _.scrollBarWidth, _],
            ),
            _ = (0, _._)(_);
          return (0, _.jsxs)("div", {
            className: (0, _._)(
              _.ScrollBarCtn,
              Math.round(_) === Math.round(_.scrollBarWidth) && _.HideScrollBar,
            ),
            ref: _,
            children: [
              (0, _.jsx)(_, {
                timelineView: _,
                scrollSize: _,
              }),
              (0, _.jsx)(_, {
                scrollSize: _,
                timelineView: _,
                timelineWidth: _,
                thumbWidth: _,
              }),
            ],
          });
        }
        function _(_) {
          const { timelineView: _, scrollSize: _ } = _,
            _ = _(),
            _ = _(_, _),
            _ = (0, _._)(() => _.GetTimelineMarginWidth()),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _.useCallback)(
              (_) => {
                const _ = _ + _;
                return _._((_ * _.scrollBarWidth) / _, 0, _.scrollBarWidth);
              },
              [_.scrollBarWidth, _, _],
            );
          return (0, _.jsxs)("div", {
            className: _.ScrollTrack,
            ..._,
            children: [
              (0, _.jsx)(_, {
                timelineView: _,
                playbackCoordinator: _,
                fnConvertGlobalPXToTrackPX: _,
                scrollBarWidth: _.scrollBarWidth,
              }),
              (0, _.jsx)(_, {
                timelineView: _,
                fnConvertGlobalPXToTrackPX: _,
              }),
            ],
          });
        }
        function _(_, _) {
          const _ = (0, _.useRef)(void 0),
            _ = (0, _.useRef)(void 0),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _.useCallback)(
              (_) => (0, _._)((_ * _) / _.scrollBarWidth),
              [_.scrollBarWidth, _],
            ),
            _ = (0, _.useCallback)(() => {
              if (!_.current) return;
              const _ = _.GetScrollWindowWidth(),
                _ = _.GetVisualWindowStartPX() + _ / 2;
              if (
                _.current.valPX > _ - _ * 0.1 &&
                _.current.valPX < _ + _ * 0.1
              )
                return;
              const _ = _.GetScrollableWidthPX() * 0.005,
                _ = _.current.valPX - _;
              if (Math.abs(_) > _) {
                const _ = _ > 0 ? _ : -_;
                _.ScrollToOffsetCentered(_ + _),
                  (_.current = requestAnimationFrame(() => _()));
              } else _.ScrollToOffsetCentered(_.current.valPX);
            }, [_]),
            _ = (0, _.useCallback)(
              (_) => {
                (_.current = _(_.clientX - _.scrollBarXOffset)),
                  (_.current = requestAnimationFrame(() => _()));
              },
              [_, _, _.scrollBarXOffset],
            ),
            _ = (0, _.useCallback)(() => {
              _.current && cancelAnimationFrame(_.current);
            }, []),
            _ = (0, _.useCallback)(
              (_) => {
                _.current = _(_.clientX - _.scrollBarXOffset);
              },
              [_, _.scrollBarXOffset],
            );
          return (
            (0, _.useEffect)(
              () => () => {
                _.current && cancelAnimationFrame(_.current);
              },
              [],
            ),
            {
              onMouseDown: _,
              onMouseMove: _,
              onMouseUp: _,
              onMouseLeave: _,
            }
          );
        }
        function _(_) {
          const {
              timelineView: _,
              playbackCoordinator: _,
              fnConvertGlobalPXToTrackPX: _,
              scrollBarWidth: _,
            } = _,
            _ = (0, _._)(() => _.GetHidePlayer()),
            _ = (0, _._)(() => {
              const _ = _.GetGlobalMSPlaytime();
              if (_ && _.BInitialized()) {
                const _ = Math.floor(
                  _.ConvertGlobalMSToGlobalPXOffset(_.valMS),
                );
                return _(_);
              }
              return null;
            });
          if (!_) return null;
          const _ = () => {
            let _ = _.GetGlobalMSPlaytime();
            _ && (_ = _.GetLiveEdgeMS()), _.ScrollToCenteredGlobalMS(_.valMS);
          };
          return (0, _.jsx)("div", {
            className: _.PlayHeadAnnotation,
            onClick: _,
            style: {
              transform: `translateX(${_ ? _ : _}px)`,
            },
            children: (0, _.jsx)(_, {}),
          });
        }
        function _() {
          return (0, _.jsx)("svg", {
            width: "52",
            height: "31",
            viewBox: "0 0 52 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, _.jsx)("path", {
              _: "M26 31L51.1147 0.25H0.885263L26 31Z",
              fill: "#D9D9D9",
            }),
          });
        }
        function _(_) {
          const { timelineView: _, fnConvertGlobalPXToTrackPX: _ } = _,
            _ = _(),
            _ = _(),
            _ = (0, _._)(() => {
              if (_ && _.BInitialized()) {
                const _ = Math.floor(
                    _.ConvertGlobalMSToGlobalPXOffset(_.nGlobalStartMS.valMS),
                  ),
                  _ = Math.floor(
                    _.ConvertGlobalMSToGlobalPXOffset(_.nGlobalEndMS.valMS),
                  );
                if (!isNaN(_) && !isNaN(_)) {
                  const _ = _(_),
                    _ = _(_);
                  return {
                    rangeStartPX: _,
                    rangeEndPX: _,
                  };
                }
              }
              return null;
            });
          if (!_) return null;
          const _ = () => {
            _.ScrollToCenteredGlobalMS(_.nGlobalStartMS.valMS);
          };
          return (0, _.jsx)("div", {
            className: _.RangeAnnotation,
            onClick: _,
            style: {
              width: _.rangeEndPX - _.rangeStartPX,
              transform: `translateX(${_.rangeStartPX}px)`,
            },
          });
        }
        function _(_) {
          const {
              scrollSize: _,
              timelineWidth: _,
              thumbWidth: _,
              timelineView: _,
            } = _,
            {
              thumbPositionPX: _,
              onMouseDown: _,
              bHiglightThumb: _,
            } = _(_, _, _, _);
          return (0, _.jsx)("div", {
            className: (0, _._)(_.ScrollThumb, _ && _.Highlight),
            style: {
              width: _,
              transform: `translateX(${_}px)`,
            },
            onMouseDown: _,
          });
        }
        function _(_, _, _, _) {
          const [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(0),
            _ = (0, _._)(() => {
              const _ = _.BInitialized(),
                _ = _.GetVisualWindowStartPX();
              return _
                ? _._((_ * _.scrollBarWidth) / _, 0, _.scrollBarWidth - _)
                : 0;
            }),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(void 0);
          (0, _.useEffect)(() => {
            if (_.GetAutoScrollPaused())
              return (
                _(!0),
                (_.current = window.setTimeout(() => {
                  _(!1);
                }, 500)),
                () => window.clearTimeout(_.current)
              );
          }, [_, _]);
          const _ = (0, _.useCallback)(
              (_) => {
                var _;
                _(_), _(!0);
                const _ = _.nativeEvent.offsetX,
                  _ =
                    (_ = _.GetTimelineParentCtnRef()) != null ? _ : (0, _._)(_);
                let _, _, _;
                const _ = (_) => {
                  _(_.clientX - _.scrollBarXOffset - _);
                };
                _.addEventListener("mousemove", _),
                  (_ = () => _.removeEventListener("mousemove", _));
                const _ = () => {
                  _(!1), _(), _(), _();
                };
                _.addEventListener("mouseup", _),
                  _.addEventListener("mouseleave", _),
                  (_ = () => _.removeEventListener("mouseup", _)),
                  (_ = () => _.removeEventListener("mouseleave", _));
              },
              [_, _.scrollBarXOffset, _],
            ),
            _ = (0, _.useMemo)(
              () => (_ ? _._(_, 0, _.scrollBarWidth - _) : _),
              [_, _, _, _.scrollBarWidth, _],
            );
          return (
            (0, _.useEffect)(() => {
              if (_) {
                const _ = (_ * _) / _.scrollBarWidth;
                _.ScrollToOffset(_);
              }
            }, [_, _.scrollBarWidth, _, _, _]),
            {
              thumbPositionPX: _,
              onMouseDown: _,
              bHiglightThumb: _,
            }
          );
        }
        function _(_, _) {
          const _ = (0, _._)(
            () =>
              !_.GetAutoScrollPaused() &&
              _.GetGameRecordingVideo().BVideoElementPlaying(),
          );
          (0, _.useEffect)(() => {
            if (!_) return () => {};
            let _ = !1,
              _ = _.GetGlobalMSPlaytime(),
              _ = Date.now();
            const _ = (_) => {
              const _ = Date.now(),
                _ = _ - _;
              _.ScrollToCenteredGlobalMS(_.valMS + _);
              const _ = _.GetGlobalMSPlaytime();
              _.valMS !== _.valMS && ((_ = _), (_ = _)),
                _ || requestAnimationFrame(_);
            };
            return requestAnimationFrame(_), () => (_ = !0);
          }, [_, _, _]);
        }
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor() {
            _(this, "m_tours", {}),
              _(this, "m_strActiveTour", ""),
              _(this, "m_storage"),
              _(this, "m_bReady", !1),
              (0, _._)(this);
          }
          async Init(_) {
            if (this.m_storage) return;
            this.m_storage = _;
            const _ = await _(_);
            Object.keys(_ || {}).forEach((_) => {
              const _ = !!_[_];
              this.m_tours[_] = {
                ...(this.m_tours[_] || {
                  stops: {},
                }),
                bSeen: _,
              };
            }),
              (this.m_bReady = !0);
          }
          UpdateStop(_, _, _, _) {
            this.m_tours[_] ||
              (this.m_tours[_] = {
                bSeen: !1,
                stops: {},
              }),
              (this.m_tours[_].stops[_] = {
                options: _,
                elem: _,
              });
          }
          BHasSeenTour(_) {
            return this.m_bReady
              ? this.m_tours[_] && this.m_tours[_].bSeen
              : !0;
          }
          GetTrackedStops(_) {
            var _;
            return ((_ = this.m_tours[_]) == null ? void 0 : _.stops) || {};
          }
          ActivateTour(_) {
            this.m_strActiveTour &&
              this.m_strActiveTour !== _ &&
              this.DismissTour(this.m_strActiveTour),
              (this.m_strActiveTour = _);
          }
          DismissTour(_) {
            this.m_tours[_] &&
              (this.MarkTourSeen(_),
              (this.m_tours[_].bSeen = !0),
              this.m_strActiveTour === _ && (this.m_strActiveTour = ""));
          }
          MarkTourSeen(_) {
            return _(this.m_storage, _, Date.now());
          }
          MarkTourUnseen(_) {
            return _(this.m_storage, _, void 0);
          }
        }
        _([_.__webpack_require__], _.prototype, "m_tours", 2),
          _([_.__webpack_require__], _.prototype, "m_strActiveTour", 2),
          _([_.__webpack_require__], _.prototype, "m_bReady", 2),
          _([_.__webpack_require__.bound], _.prototype, "UpdateStop", 1),
          _([_.__webpack_require__], _.prototype, "ActivateTour", 1),
          _([_.__webpack_require__], _.prototype, "DismissTour", 1);
        const __webpack_require__ = "tour_history";
        async function _(_) {
          const _ = await _.GetObject(_);
          return !_ || typeof _ != "object" ? {} : _;
        }
        async function _(_, _, _) {
          const _ = await _(_);
          return _.StoreObject(_, {
            ..._,
            [_]: _,
          });
        }
        const __webpack_require__ = new _();
        function _() {
          const _ = (0, _._)();
          return (
            (0, _.useEffect)(() => {
              _.Init(_);
            }, [_]),
            _
          );
        }
        function _(_) {
          const _ = _(),
            { bShowTour: _, stopElems: _ } = (0, _._)(() => ({
              bShowTour: !_.BHasSeenTour(_),
              stopElems: _.GetTrackedStops(_),
            }));
          return {
            bShowTour: _,
            stopElems: _,
            onInteraction: (0, _.useCallback)(() => _.MarkTourSeen(_), [_, _]),
            onDismiss: (0, _.useCallback)(() => _.DismissTour(_), [_, _]),
            onActivate: (0, _.useCallback)(() => _.ActivateTour(_), [_, _]),
            updateStop: _.UpdateStop,
          };
        }
        function _(_) {
          const { children: _ } = _;
          return jsxs(Fragment, {
            children: [
              _,
              jsx(_, {
                ..._,
              }),
            ],
          });
        }
        function _(_) {
          const { active: _, name: _, stops: _ } = _,
            {
              bShowTour: _,
              onInteraction: _,
              onDismiss: _,
              stopElems: _,
            } = _(_),
            [_, _] = useState(0);
          if (!_ || !_ || _ >= _.length) return null;
          const _ = () => {
              _(_ + 1), _();
            },
            { _: _, title: _, content: _ } = _[_],
            _ = _[_];
          if (!_ || !_.elem) return null;
          let _ = _;
          return (
            Array.isArray(_) &&
              (_ = _.map((_, _) =>
                jsx(
                  "div",
                  {
                    children: _,
                  },
                  _,
                ),
              )),
            jsx(_, {
              ..._,
              children: jsxs(_, {
                tour: _,
                title: _,
                onRequestClose: _,
                children: [
                  _,
                  jsxs("div", {
                    className: styles.Action,
                    children: [
                      _.length > 1 &&
                        jsx("div", {
                          className: styles.TipCount,
                          children: Localize("#Tour_TipCount", _ + 1, _.length),
                        }),
                      _ < _.length - 1
                        ? jsx(PrimaryButton, {
                            onClick: _,
                            children: Localize("#Button_Next"),
                          })
                        : jsx(PrimaryButton, {
                            onClick: _,
                            children: Localize("#Button_Done"),
                          }),
                    ],
                  }),
                ],
              }),
            })
          );
        }
        function _(_) {
          const { elem: _, options: _, children: _ } = _,
            { ownerWindow: _ } = useBrowserContext(),
            _ = _.getBoundingClientRect(),
            { style: _, position: _ } = _(_, _, _.position, _.offset);
          return createPortal(
            jsxs("div", {
              className: styles.TourPositioner,
              style: _,
              "data-position": _,
              children: [
                jsx(_, {
                  position: _,
                  targetRect: _,
                }),
                _,
              ],
            }),
            _.document.body,
          );
        }
        function _(_, _, _, _ = 0) {
          let _,
            _ = _;
          const _ = 240,
            _ = 10,
            _ = _ + _,
            _ = _ + _ + _;
          let _ = _.document.body.matches(":dir(rtl)");
          switch (
            (_ &&
              (_ === "left" ? (_ = "right") : _ === "right" && (_ = "left")),
            ((_ === "left" && _._ < _) ||
              (_ === "right" && _.innerWidth - (_._ + _.width) < _)) &&
              (_ = "below"),
            _)
          ) {
            case "left":
              _ = {
                top: _.top,
                width: _.left - _ - _,
                left: _,
                minWidth: _,
                flexDirection: "row",
                justifyContent: "flex-end",
              };
              break;
            case "right":
              _ = {
                top: _.top,
                left: _.right + _,
                right: _,
                minWidth: _,
                flexDirection: "row",
                justifyContent: "flex-start",
              };
              break;
            case "above":
              _ = {
                top: _,
                height: _._ - _ - _,
                left: _._,
                flexDirection: "column",
                justifyContent: "flex-end",
              };
              break;
            default:
              _
                ? (_ = {
                    top: _._ + _.height + _,
                    right: _.innerWidth - _.right,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  })
                : (_ = {
                    top: _._ + _.height + _,
                    left: _._,
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  });
              break;
          }
          return {
            style: {
              ..._,
              ...{
                display: "flex",
              },
            },
            position: _,
            rect: _,
          };
        }
        function _(_) {
          const { tour: _, title: _, onRequestClose: _, children: _ } = _,
            { onActivate: _ } = _(_);
          return (
            useEffect(() => _(), [_]),
            jsxs("div", {
              className: styles.TourBox,
              children: [
                jsx("div", {
                  onClick: _,
                  className: styles.CloseButton,
                  children: jsx(X_Line, {
                    className: styles._,
                  }),
                }),
                jsx("div", {
                  className: styles.Title,
                  children: _,
                }),
                jsx("div", {
                  className: styles.Content,
                  children: _,
                }),
              ],
            })
          );
        }
        function _(_) {
          const { name: _, tour: _, options: _, children: _ } = _,
            { updateStop: _ } = _(_),
            _ = (0, _.useCallback)((_) => _(_, _, _, _), [_, _, _]),
            _ = _.Children.only(_),
            _ = (0, _._)(_, _.props.ref);
          return (0, _.cloneElement)(_.Children.only(_), {
            ref: _,
          });
        }
        function _(_) {
          const { position: _, targetRect: _ } = _;
          return jsx("svg", {
            viewBox: "0 0 28 10",
            className: styles.TourStopArrow,
            style: _(_, _),
            children: jsx("polygon", {
              points: "0,0 14,10 28,0",
              fill: "currentColor",
            }),
          });
        }
        const __webpack_require__ = 28,
          __webpack_require__ = 10;
        function _(_, _) {
          const _ = {
            width: `${_}px`,
            height: `${_}px`,
          };
          switch (_) {
            case "right":
              (_.left = "0px"), (_.top = `${Math.max(_.height / 2 - _, _)}px`);
              break;
            case "left":
              (_.right = "0px"), (_.top = `${Math.max(_.height / 2 - _, _)}px`);
              break;
            case "above":
              (_.bottom = `${-_}px`),
                (_.insetInlineStart = `${Math.max(_.width / 2 - _, _)}px`);
              break;
            case "below":
              (_.top = `${-_}px`),
                (_.insetInlineStart = `${Math.max(_.width / 2 - _, _)}px`);
          }
          return _;
        }
        function _() {
          const _ = _();
          return useCallback((_) => _.MarkTourUnseen(_), [_]);
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(),
            _ = (0, _._)(() => _.GetVisibleTimelines());
          return (0, _.jsx)(_.Fragment, {
            children: _.flatMap((_) =>
              _.phaseOffsets.map((_, _) =>
                (0, _.createElement)(_, {
                  ..._,
                  timeline: _,
                  key: `${_.timelineID}_${_}`,
                }),
              ),
            ),
          });
        }
        function _(_) {
          const {
            timelineOffsetMS: _,
            nDurationMS: _,
            phase: _,
            timeline: _,
          } = _;
          return (0, _.jsxs)(_, {
            ..._,
            children: [(0, _.jsx)(_, {}), (0, _.jsx)(_, {}), (0, _.jsx)(_, {})],
          });
        }
        function _(_) {
          var _;
          const {
              children: _,
              timeline: _,
              timelineOffsetMS: _,
              nDurationMS: _,
              phase: _,
            } = _,
            _ = _(),
            _ = _(),
            _ = ((_ = _()) == null ? void 0 : _.valPX) || -1,
            _ = _(),
            [_] = _(),
            {
              pxStart: _,
              pxWidth: _,
              bHighlight: _,
            } = (0, _._)(() => {
              const _ = _.GetPhaseToHighlight();
              return {
                pxStart: _.ConvertGlobalMSToGlobalPXOffset(
                  _.globalOffsetMS + _,
                ),
                pxWidth: _.ConvertDurationMSToDeltaPX(_),
                bHighlight:
                  _ &&
                  _[0] === _.timelineID &&
                  _[1] === _.background_timeline_offset,
              };
            }),
            _ = (_ || _) && _ >= _ && _ <= _ + _,
            [_, _] = _(),
            _ = () => {
              const _ = _.GetLoader(),
                _ = _.GetTimelineData(_.timelineID),
                _ = _.GetTimelineMetadata(_.timelineID),
                _ = _.m_rgPhases.find((_) => parseInt(_.time) === _);
              _ &&
                _({
                  entry: _,
                  timeline: _,
                });
            },
            _ = () => _(void 0);
          return (0, _.jsx)("div", {
            className: (0, _._)(
              _.Positioner,
              _ && _.MouseWithin,
              _ && _.Highlight,
            ),
            style: {
              transform: `translateX( ${_}px )`,
              width: `${_}px`,
            },
            onMouseOver: _,
            onMouseLeave: _,
            onFocus: _,
            onBlur: _,
            children: _,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Body,
          });
        }
        function _(_) {
          return (0, _.jsx)("div", {
            className: _.Edge,
          });
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        function _(_) {
          const _ = _(),
            _ = (0, _._)(() => _.GetVisibleTimelines());
          return (0, _.jsx)(_.Fragment, {
            children: _.map((_) =>
              (0, _.jsx)(
                _,
                {
                  timeline: _,
                },
                _.timelineID,
              ),
            ),
          });
        }
        function _(_) {
          const { timeline: _ } = _,
            _ = _(),
            _ = (0, _._)(
              () => _.GetVisibleTimelineHighlights(_.timelineID) || [],
            ),
            _ = (0, _._)(() => _.GetTimelineOffsetMS(_.timelineID)),
            _ = _.globalOffsetMS - _;
          return (0, _.jsx)(_.Fragment, {
            children: _.filter((_) => _(_) === "range_highlight").map((_) =>
              (0, _.jsx)(
                _,
                {
                  entry: _,
                  timeline: _,
                  timelineView: _,
                  timelineOffset: _,
                },
                _._,
              ),
            ),
          });
        }
        function _(_) {
          const { timelineView: _, entry: _, timelineOffset: _ } = _,
            _ = _ + parseInt(_.time),
            { pxStart: _, pxWidth: _ } = (0, _._)(() => ({
              pxStart: _.ConvertGlobalMSToGlobalPXOffset(_),
              pxWidth: _.ConvertDurationMSToDeltaPX(parseInt(_.duration)),
            })),
            _ = {
              width: `${_}px`,
              transform: `translateX( ${_}px )`,
            };
          return (0, _.jsx)("svg", {
            className: _.RangeHighlight,
            style: _,
            children: (0, _.jsx)("line", {
              _: "0",
              _: _,
              _: "0",
              _: "0",
              fill: "none",
              stroke: "#ffc82c",
              "stroke-width": "3",
              "stroke-dasharray": "3 6",
              "stroke-dashoffset": "0",
              "stroke-linecap": "square",
            }),
          });
        }
        const __webpack_require__ = 0.08;
        function _(_) {
          const {
              loader: _,
              className: _,
              clipSummaries: _,
              refTimelineParentCtn: _,
              disableZoom: _,
            } = _,
            _ = (0, _._)(() => _.BInitialized()),
            _ = _();
          if (!_)
            return (0, _.jsx)("div", {
              className: _.LoadingTimeline,
            });
          let _ = (0, _._)(
            _.ScrollAndControlsCtn,
            _.GetGamepadMode() && _.GamepadMode,
            _,
          );
          return (0, _.jsx)(_, {
            loader: _,
            clipSummaries: _,
            playbackCoordinator: _,
            refTimelineParentCtn: _,
            children: (0, _.jsxs)("div", {
              className: _,
              dir: "ltr",
              children: [
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {}),
                (0, _.jsx)(_, {
                  tour: "recording_timeline",
                  name: "timeline",
                  options: {
                    position: "left",
                    offset: 20,
                  },
                  children: (0, _.jsx)(_, {
                    className: _.TimelineScrollContainer,
                    disableZoom: _,
                    children: (0, _.jsx)(_, {}),
                  }),
                }),
              ],
            }),
          });
        }
        const __webpack_require__ = (0, _.memo)(function (_) {
          const _ = _();
          return (0, _._)(() => _.BInitialized()) ? (0, _.jsx)(_, {}) : null;
        });
        function _() {
          const _ = _(),
            _ = (0, _._)(() => _.GetScrollableWidthPX()),
            _ = (0, _._)(() => _.GetVisualWindowStartPX()),
            _ = (0, _._)(() => _.GetTimelineMarginWidth());
          return (0, _.jsxs)("div", {
            className: _.ContentContainer,
            style: {
              minWidth: _ || 0,
              marginRight: _,
              marginLeft: _,
              transform: `translateX(${-_}px)`,
            },
            children: [
              (0, _.jsx)(_, {
                _: "recordings",
                className: _.RecordingDecorators,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                _: "clips",
                className: _.ClipDecorators,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                _: "game_modes",
                className: _.GameModes,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                _: "date_decorators",
                className: _.DateDecorator,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsx)(_, {
                _: "ticks",
                className: _.BackgroundTicks,
                children: (0, _.jsx)(_, {}),
              }),
              (0, _.jsxs)(_, {
                children: [
                  (0, _.jsx)(_, {
                    _: "highlights",
                    className: _.Highlights,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    _: "range_selection",
                    className: _.RangeSelector,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    _: "seek_scrub",
                    className: _.SeekScrubber,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    _: "play_head",
                    className: _.PlayHead,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    _: "phases",
                    className: _.Phases,
                    children: (0, _.jsx)(_, {}),
                  }),
                  (0, _.jsx)(_, {
                    _: "range_highlights",
                    className: _.RangeHighlights,
                    children: (0, _.jsx)(_, {}),
                  }),
                ],
              }),
            ],
          });
        }
        function _(_) {
          const { children: _, _: _, className: _ } = _;
          return (0, _.jsx)("div", {
            _: _,
            className: (0, _._)(_, _.AbsoluteLayer),
            children: (0, _.jsx)("div", {
              className: _.RelativeLayer,
              children: _,
            }),
          });
        }
        function _(_) {
          const _ = _().GetRenderGlyph();
          return _ ? _(_._.TRIGGER_LEFT, !1, !1, _.PositionLeft) : null;
        }
        function _(_) {
          const _ = _().GetRenderGlyph();
          return _ ? _(_._.TRIGGER_RIGHT, !1, !1, _.PositionRight) : null;
        }
        var __webpack_require__ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = _.useState(!1);
          return (
            _.useEffect(() => {
              _(void 0, void 0).then(() => {
                _(!0);
              });
            }, []),
            (0, _.jsx)(_.Fragment, {
              children:
                _ &&
                (0, _.jsx)(_, {
                  ..._,
                }),
            })
          );
        }
        function _(_) {
          const { clipID: _ } = _,
            _ = _(_);
          return _.data
            ? (0, _.jsx)(_, {
                clip: _.data,
              })
            : (0, _.jsx)("div", {
                style: {
                  color: "white",
                },
                children: "Loading...",
              });
        }
        function _(_, _) {
          return {
            timeline_id: _.server_timeline_id,
            game_id: _.clip_id,
            date_recorded: _.date_recorded,
            duration_ms: _.duration_ms.toFixed(0),
            recordings: [],
          };
        }
        function _(_) {
          const _ = (0, _._)();
          return (0, _._)({
            queryKey: ["grclip", _],
            queryFn: async () => {
              const _ = _._.Init(_);
              _.Body().set_clip_id(_);
              const _ = await _.GetSingleSharedClip(_, _);
              if (_.GetEResult() != _._) {
                (0, _._)("GetSingleSharedClip failed"), _.DEBUG_LogToConsole();
                return;
              }
              let _ = _.Body().toObject().clip,
                _ = [];
              if (_.video_ids.length == 0) {
                (0, _._)("No video ids in clip", _), _.DEBUG_LogToConsole();
                return;
              }
              let _;
              for (let _ of _.video_ids)
                (!_ || _.timeline_id != _.server_timeline_id) &&
                  ((_ = _(_, _)), _.push(_)),
                  _.recordings.push({
                    recording_id: _.video_manager_video_id,
                    start_offset_ms: _.start_offset_ms.toFixed(0),
                    duration_ms: _.duration_ms.toFixed(0),
                    recording_type: _,
                    cdn_manifest_url: _.manifest_url,
                  });
              return {
                clip_id: _.clip_id,
                game_id: _.gameid,
                timelines: _,
              };
            },
          });
        }
        function _(_) {
          const _ = _.useMemo(() => _(_), [_]),
            _ = _.useCallback(
              (_) => {
                for (const _ of _.timelines)
                  for (const _ of _.recordings)
                    if (_.recording_id == _) return _.cdn_manifest_url;
              },
              [_],
            );
          return (
            _.useEffect(() => () => _ && _.release(), [_]),
            {
              loader: _.loader,
              fnGetManifest: _,
            }
          );
        }
        function _(_) {
          const { clip: _ } = _,
            { loader: _, fnGetManifest: _ } = _(_);
          return (0, _.jsx)(_.Fragment, {
            children: (0, _.jsx)(_, {
              loader: _,
              fnGetManifest: _,
              mode: _.CommunityClip,
              children: (0, _.jsxs)("div", {
                className: _.ClipDetails,
                children: [
                  (0, _.jsx)("div", {
                    className: _.VideoContainer,
                    children: (0, _.jsx)(_, {
                      positionAbsolute: !1,
                      autoPlay: !0,
                    }),
                  }),
                  (0, _.jsx)(_, {
                    loader: _,
                  }),
                ],
              }),
            }),
          });
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var __webpack_require__ = __webpack_require__("chunkid");
        const __webpack_require__ = new _.__webpack_require__("GR");
        function _(_) {
          return (..._) => {
            const _ = `[${(performance.now() / 1e3).toFixed(3)}]`;
            _(_, ..._);
          };
        }
        const __webpack_require__ = _(_.Debug),
          __webpack_require__ = _(_.Info),
          __webpack_require__ = _(_.Warning),
          __webpack_require__ = _(_.Error),
          __webpack_require__ = _;
        function _() {
          return _.IsDebugEnabled();
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
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
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = ((_) => (
            (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.Playing = 1)] = "Playing"),
            (_[(_.Staging = 2)] = "Staging"),
            (_[(_.Menus = 3)] = "Menus"),
            _
          ))(_ || {}),
          __webpack_require__ = ((_) => (
            (_[(_.Invalid = 0)] = "Invalid"),
            (_[(_.None = 1)] = "None"),
            (_[(_.Standard = 2)] = "Standard"),
            (_[(_.Featured = 3)] = "Featured"),
            _
          ))(_ || {});
        function _(_) {
          return _.type === "gamemode";
        }
        function _(_) {
          return _.type === "state_description";
        }
        function _(_) {
          return _.type === "event" && parseInt(_.duration) > 0;
        }
        function _(_) {
          return _.type === "event";
        }
        function _(_) {
          return _.type === "state_description";
        }
        function _(_) {
          return _.type === "achievement";
        }
        function _(_) {
          return _.type === "error";
        }
        function _(_) {
          return _.type === "usermarker";
        }
        function _(_) {
          return _.type === "screenshot";
        }
        function _(_) {
          let _ = {
            _: _.entry_id,
            time: _.time,
            type: void 0,
          };
          switch (_.type) {
            case _._._: {
              let _ = _;
              (_.type = "gamemode"), (_.mode = _.game_mode);
              break;
            }
            case _._._: {
              let _ = _;
              (_.type = "usermarker"),
                (_.icon = "steam_marker"),
                (_.priority = _.marker_priority);
              break;
            }
            case _._._: {
              let _ = _;
              (_.type = "achievement"),
                (_.achievement_name = _.achievement_name);
              break;
            }
            case _._._: {
              let _ = _;
              (_.type = "error"), (_.description = _.marker_description);
              break;
            }
            case _._._: {
              let _ = _;
              (_.type = "state_description"), (_.title = _.timestamp_title);
              break;
            }
            case _._._: {
              let _ = _;
              (_.type = "event"),
                (_.icon = _.marker_icon),
                (_.title = _.range_title),
                (_.description = _.marker_description),
                (_.priority = _.marker_priority),
                (_.duration = _.range_duration),
                (_.possible_clip = _.range_possible_clip);
              break;
            }
            case _._._: {
              let _ = _;
              (_.type = "screenshot"),
                (_.icon = _.marker_icon),
                (_.priority = _.marker_priority),
                (_.handle = _.screenshot_handle);
              break;
            }
            default:
              return null;
          }
          return _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        function _(_) {
          return {
            type: "global",
            valMS: _,
          };
        }
        function _(_) {
          return {
            type: "timeline",
            valMS: _,
          };
        }
        function _(_) {
          return {
            type: "recording",
            valMS: _,
          };
        }
        function _(_) {
          return {
            type: "clip",
            valMS: _,
          };
        }
        function _(_) {
          return (_) => _.type === _;
        }
        const __webpack_require__ = _("global"),
          __webpack_require__ = _("timeline"),
          __webpack_require__ = _("recording"),
          __webpack_require__ = _("clip");
        function _(_) {
          return {
            type: "global",
            valPX: _,
          };
        }
        function _(_) {
          return {
            type: "clientWindow",
            valPX: _,
          };
        }
        function _(_) {
          return {
            type: "virtualWindow",
            valPX: _,
          };
        }
        function _(_) {
          return {
            type: "scrollWindow",
            valPX: _,
          };
        }
        function _(_) {
          return (_) => _.type === _;
        }
        const __webpack_require__ = _("global"),
          __webpack_require__ = _("clientWindow"),
          __webpack_require__ = _("virtualWindow"),
          __webpack_require__ = _("scrollWindow");
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
          _: () => _,
        });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__.__webpack_require__(_),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = 10 * 1e3,
          __webpack_require__ = 3e3,
          __webpack_require__ = _ + 1e3,
          __webpack_require__ = class _ {
            constructor() {
              _(this, "m_bInitialized", !1),
                _(this, "m_rgListeners", []),
                _(this, "m_gameID"),
                _(this, "m_clipID"),
                _(this, "m_ulFirstTimelineOffsetMS", 0),
                _(this, "m_rgTimelineMetadata", []),
                _(this, "m_mapTimelineData", new Map()),
                _(this, "m_mapRunningTimelines", new Map()),
                _(this, "m_schUpdateRunning", new _._()),
                _(this, "m_fnTimelineURLBuilder"),
                (0, _._)(this);
            }
            BInitialized() {
              return this.m_bInitialized;
            }
            GetTimelines() {
              return this.m_rgTimelineMetadata;
            }
            GetTimelineMetadataIndex(_) {
              return this.m_rgTimelineMetadata.findIndex(
                (_) => _.metadata.timeline_id === _,
              );
            }
            GetTimelineMetadata(_) {
              return this.m_rgTimelineMetadata.find(
                (_) => _.metadata.timeline_id === _,
              );
            }
            GetGameID() {
              return this.m_gameID;
            }
            GetClipID() {
              return this.m_clipID;
            }
            BIsTimelineRunning(_) {
              return this.m_mapRunningTimelines.has(_);
            }
            AddEventListener(_) {
              return (
                this.m_rgListeners.push(_), () => _._(this.m_rgListeners, _)
              );
            }
            async LoadTimelinesForBackgroundVideo(_) {
              this.m_gameID = _;
              const _ = await _._.GetTimelinesForApp({
                  game_id: _,
                }),
                { timelines: _ = [] } = _.Body().toObject();
              this.m_mapRunningTimelines.forEach((_, _) => {
                _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
              }),
                this.UpdateTimelineMetadata(_),
                (this.m_fnTimelineURLBuilder = (_) =>
                  `https://steamloopback.host/gamerecordings/timelines/${_}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            async LoadTimelinesForClip(_) {
              this.m_clipID = _;
              const _ = await _._.GetTimelinesForClip({
                clip_id: _,
              });
              if (_.GetEResult() != _._)
                throw new Error("Unable to load clip " + _);
              const {
                timelines: _ = [],
                game_id: _,
                first_timeline_start_offset_ms: _,
              } = _.Body().toObject();
              (this.m_gameID = _), this.UpdateTimelineMetadata(_);
              for (let _ of this.m_rgTimelineMetadata) {
                (0, _._)(`Loaded clip ${_} timeline ${_.metadata.timeline_id}`);
                for (let _ of _.metadata.recordings)
                  (0, _._)(
                    `Clip recording ${_.recording_id} duration ${_.duration_ms}`,
                  );
              }
              (this.m_ulFirstTimelineOffsetMS = parseInt(_)),
                (this.m_fnTimelineURLBuilder = (_) =>
                  `https://steamloopback.host/gamerecordings/clips/${this.m_clipID}/timelines/${_}.json`),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            UpdateTimelineMetadata(_) {
              const _ = _.slice().sort(
                (_, _) => _.date_recorded - _.date_recorded,
              );
              let _ = [],
                _ = 0;
              const _ = {};
              _.forEach((_) => {
                if ((_.recordings || (_.recordings = []), _[_.timeline_id])) {
                  console.error(
                    "Duplicate timelines found in UpdateTimelineMetadata()",
                    _.timeline_id,
                    _,
                  );
                  return;
                }
                _.push({
                  nGlobalOffsetMS: (0, _._)(_),
                  metadata: _,
                }),
                  (_ += parseInt(_.duration_ms)),
                  (_[_.timeline_id] = !0);
              }),
                (this.m_rgTimelineMetadata = _);
            }
            LoadTimelinesForSharedClip(_) {
              this.SetPreloadedTimelines(
                0,
                _.clip_id,
                _.game_id,
                _.timelines,
                void 0,
              );
            }
            LoadTimelinesForTestGame(_, _) {
              const _ = (_) =>
                `https://steamloopback.host/gamerecordings/timelines/${_}.json`;
              this.SetPreloadedTimelines(0, void 0, _, _, _);
            }
            LoadTimelinesForTestClip(_, _, _, _) {
              this.SetPreloadedTimelines(_, _, _, _, void 0);
            }
            SetPreloadedTimelines(_, _, _, _, _) {
              (this.m_gameID = _),
                (this.m_clipID = _),
                (this.m_ulFirstTimelineOffsetMS = _);
              const _ = _.slice();
              this.m_mapRunningTimelines.forEach((_, _) => {
                _.find((_) => _.timeline_id == _) || _.push(_.m_metadata);
              }),
                this.UpdateTimelineMetadata(_),
                (this.m_fnTimelineURLBuilder = _),
                (this.m_bInitialized = !0),
                this.FireEvent("OnLoaderInitialized");
            }
            FireEvent(_, ..._) {
              for (let _ of this.m_rgListeners) {
                let _ = _[_];
                _ instanceof Function && _.apply(_, _);
              }
            }
            async LoadTimelineData(_) {
              let _ = this.m_mapTimelineData.get(_);
              if (_ && _.m_strState === "loading") {
                await _.m_promise;
                return;
              }
              if (
                (_ && _.m_strState == "error") ||
                (this.IsActiveTimeline(_) && _.m_strState == "loaded")
              )
                return;
              const _ = {
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (!this.m_fnTimelineURLBuilder)
                this.m_mapTimelineData.set(_, {
                  m_strState: "loaded",
                  ..._,
                });
              else {
                const _ = this.m_fnTimelineURLBuilder(_),
                  _ = _()
                    .get(_, {
                      withCredentials: !1,
                    })
                    .then(
                      (_) => {
                        if (_.status == 200 && _.data) {
                          _(_.data);
                          const _ = this.ProcessTimelineEntries(_.data);
                          this.m_mapTimelineData.set(_, _);
                        } else
                          this.m_mapTimelineData.set(_, {
                            ..._,
                            m_strState: "error",
                          });
                      },
                      (_) => {
                        this.m_mapTimelineData.set(_, {
                          ..._,
                          m_strState: "error",
                        });
                      },
                    )
                    .finally(() => this.FireEvent("OnTimelineLoaded", _));
                this.m_mapTimelineData.set(_, {
                  m_strState: "loading",
                  m_promise: _,
                  ..._,
                });
              }
            }
            ProcessTimelineEntries(_) {
              let _ = {
                m_strState: "loaded",
                m_rgGameModeChanges: [],
                m_rgStateDescriptions: [],
                m_rgEntries: [],
                m_rgPhases: [],
              };
              if (_.entries) {
                const _ = [],
                  _ = [],
                  _ = [],
                  _ = [];
                for (const _ of _.entries)
                  switch (_.type) {
                    case "phase":
                      _.push(_);
                      break;
                    case "gamemode":
                      _.push(_);
                      break;
                    case "state_description":
                      _.push(_);
                      break;
                    case "achievement":
                    case "error":
                    case "event":
                    case "screenshot":
                    case "usermarker":
                      _.push(_);
                      break;
                    default:
                      console.error(`Unknown timeline entry type ${_.type}`);
                  }
                const _ = (_, _) => parseInt(_.time) - parseInt(_.time);
                (_.m_rgGameModeChanges = _.sort(_)),
                  (_.m_rgStateDescriptions = _.sort(_)),
                  (_.m_rgPhases = _.sort(_)),
                  (_.m_rgEntries = _.sort(_)),
                  _.m_rgGameModeChanges.length > 0 &&
                    parseInt(_.m_rgGameModeChanges[0].time) < _ &&
                    (_.m_rgGameModeChanges[0].time = "0");
              }
              return _;
            }
            static ApplyTimelineRounding(_, _) {
              if (_ === 0) return _;
              const _ = _ % _;
              return _ == 0 ? _ : _ + (_ - _);
            }
            FindTimelineAtOffset(_, _) {
              const _ = _ + this.m_ulFirstTimelineOffsetMS;
              let _ = 0;
              for (let _ of this.m_rgTimelineMetadata) {
                const _ = this.GetTimelineStartBeforeGlobalZeroMS(
                  _.metadata.timeline_id,
                );
                let _ = parseInt(_.metadata.duration_ms) + _;
                if (_ + _ > _)
                  return {
                    timeline: _,
                    nTimelineOffsetMS: _ - _,
                    ulGlobalToTimelineOffset: _,
                  };
                _ += _.ApplyTimelineRounding(_, _);
              }
              return null;
            }
            GetGlobalOffsetDataForTimeline(_, _) {
              let _ = 0;
              for (let _ of this.m_rgTimelineMetadata) {
                let _ = parseInt(_.metadata.duration_ms),
                  _ = _.ApplyTimelineRounding(_, _);
                if (_.metadata.timeline_id == _)
                  return {
                    nGlobalOffsetMS: _,
                    nRoundedDurationMS: _,
                  };
                _ += _;
              }
              return null;
            }
            CreateGlobalRangeForTimeline(_, _, _, _) {
              let _ = _ - _,
                _ = _ + _;
              return this.ClampGlobalRangeToTimeline(_, _, _);
            }
            ClampGlobalRangeToTimeline(_, _, _) {
              let _ = this.GetGlobalOffsetDataForTimeline(_, 0);
              if (!_) return [0, 0];
              let _ = Math.max(_, _.nGlobalOffsetMS),
                _ = Math.min(_, _.nGlobalOffsetMS + _.nRoundedDurationMS - 1);
              return [_, _];
            }
            GetTimelineOffsetFromGlobal(_, _) {
              const _ = this.m_ulFirstTimelineOffsetMS + _;
              let _ = 0;
              for (let _ of this.m_rgTimelineMetadata) {
                const _ = this.GetTimelineStartBeforeGlobalZeroMS(
                    _.metadata.timeline_id,
                  ),
                  _ = parseInt(_.metadata.duration_ms) + _,
                  _ = _.ApplyTimelineRounding(_, _);
                if (_ < _ + _)
                  return {
                    strTimelineID: _.metadata.timeline_id,
                    nTimelineOffsetMS: (0, _._)(_ - _ - _),
                  };
                _ += _;
              }
              return {
                strTimelineID: void 0,
                nTimelineOffsetMS: (0, _._)(NaN),
              };
            }
            ConvertRecordingOffsetToGlobalOffset(_, _, _) {
              let _ = 0;
              for (let _ of this.m_rgTimelineMetadata) {
                let _ = parseInt(_.metadata.duration_ms);
                const _ = this.GetTimelineStartBeforeGlobalZeroMS(
                  _.metadata.timeline_id,
                );
                let _ = _.ApplyTimelineRounding(_, _);
                for (let _ of _.metadata.recordings)
                  if (_.recording_id === _) {
                    let _ =
                      (isNaN(parseInt(_.recording_zero_timeline_offset_ms))
                        ? 0
                        : parseInt(_.recording_zero_timeline_offset_ms) - _) +
                      _;
                    return (
                      (_ += _),
                      {
                        nGlobalOffsetMS: _,
                        nRoundedDurationMS: _,
                        strTimelineID: _.metadata.timeline_id,
                        nTimelineOffsetMS: _,
                      }
                    );
                  }
                _ += _;
              }
              return null;
            }
            IsActiveTimeline(_) {
              return _ ? this.m_mapRunningTimelines.has(_) : !1;
            }
            MakeRelativeToTimelineEndIfActive(_, _) {
              if (!this.IsActiveTimeline(_)) return _;
              const _ = this.GetTimelineMetadata(_);
              if (!_) return _;
              let _ = parseInt(_.metadata.duration_ms);
              return Math.min(_ - _, 0);
            }
            IsActiveRecording(_) {
              for (let _ of this.m_rgTimelineMetadata)
                for (let _ of _.metadata.recordings)
                  if (_.recording_id === _) {
                    const _ = this.m_mapRunningTimelines.get(
                      _.metadata.timeline_id,
                    );
                    return _ && _.m_runningRecording
                      ? _.m_runningRecording.recording_id === _
                      : !1;
                  }
              return !1;
            }
            GetRunningTimelineDurationMS(_) {
              let _ = this.m_mapRunningTimelines.get(_);
              if (!_) return 0;
              let _ =
                  performance.now() -
                  _.m_perfCounterStart +
                  _.m_nPerfCounterOffsetMS,
                _ = parseInt(_.m_metadata.duration_ms) || 0;
              return Math.max(_, _);
            }
            GetRunningTimelineForRecording(_, _) {
              const _ = this.m_mapRunningTimelines.get(_);
              return _ &&
                _.m_runningRecording &&
                _.m_runningRecording.recording_id === _
                ? _
                : null;
            }
            ConvertGlobaOffsetToRecordingAndRelativeOffset(_) {
              if (!this.m_bInitialized) return null;
              let _ = this.FindTimelineAtOffset(_, 0);
              if (!_) return null;
              let _ = _.nTimelineOffsetMS - _.ulGlobalToTimelineOffset;
              for (let _ of _.timeline.metadata.recordings) {
                let _ = parseInt(_.start_offset_ms);
                if (_ + parseInt(_.duration_ms) < _ || _ > _) continue;
                let _ = parseInt(_.recording_zero_timeline_offset_ms),
                  _ = Math.max(_ - _, 0);
                return (
                  isNaN(_) || (_ = Math.max(_.nTimelineOffsetMS - _, 0)),
                  {
                    strRecordingID: _.recording_id,
                    nRecordingOffsetMS: _,
                    nStartOffsetMS: _,
                  }
                );
              }
              return null;
            }
            async FindRecordingAndOffsetForEntry(_) {
              for (const _ of this.m_mapRunningTimelines.keys()) {
                if (!this.IsActiveTimeline(_)) continue;
                await this.LoadTimelineData(_);
                const _ = this.m_mapTimelineData.get(_),
                  _ = this.m_mapRunningTimelines.get(_);
                if (!(!_ || !_)) {
                  for (const _ of _.m_rgEntries)
                    if (_._ == _) {
                      const _ = parseInt(_.time);
                      for (const _ of _.m_metadata.recordings) {
                        const _ = parseInt(_.start_offset_ms),
                          _ = _ + parseInt(_.duration_ms);
                        if (_ >= _ && _ <= _)
                          return {
                            strRecordingID: _.recording_id,
                            nRecordingOffsetMS: _,
                            nStartOffsetMS: _,
                          };
                      }
                    }
                  break;
                }
              }
            }
            GetClosestNextRecordingInGlobalTimeline(_) {
              for (let _ of this.m_rgTimelineMetadata)
                for (let _ of _.metadata.recordings)
                  if (
                    parseInt(_.start_offset_ms) + _.nGlobalOffsetMS.valMS >
                    _.valMS
                  )
                    return _;
              return null;
            }
            GetClosestPreviousRecordingInGlobalTimeline(_) {
              let _ = null;
              for (let _ of this.m_rgTimelineMetadata)
                for (let _ of _.metadata.recordings) {
                  if (
                    parseInt(_.start_offset_ms) + _.nGlobalOffsetMS.valMS >
                    _.valMS
                  )
                    return _;
                  _ = _;
                }
              return _;
            }
            ConvertRecordingTimeMStoPreTrimTimeMS(_, _) {
              for (let _ of this.m_rgTimelineMetadata)
                for (let _ of _.metadata.recordings)
                  if (_.recording_id === _) {
                    const _ = parseInt(_.recording_zero_timeline_offset_ms),
                      _ = this.GetTimelineStartBeforeGlobalZeroMS(
                        _.metadata.timeline_id,
                      );
                    return !_ || isNaN(_) ? _ : _ + _ - _;
                  }
              return _;
            }
            GetTimelineDataOrStartLoad(_) {
              if (!_) return null;
              let _ = this.m_mapTimelineData.get(_);
              return (
                _ ||
                  (this.LoadTimelineData(_),
                  (_ = this.m_mapTimelineData.get(_))),
                _
              );
            }
            GetTimelineData(_) {
              return this.m_mapTimelineData.get(_);
            }
            SetTimelineData(_, _) {
              const _ = this.ProcessTimelineEntries(_);
              this.m_mapTimelineData.set(_, _);
            }
            GetClosestPreviousEntryInTimeline(_, _) {
              const _ = this.GetTimelineMetadata(_),
                _ = this.GetTimelineStartBeforeGlobalZeroMS(_),
                _ = this.GetTimelineDataOrStartLoad(_);
              let _ = null;
              if (_ && _.m_strState === "loaded") {
                const _ = _.m_rgEntries.filter((_) => {
                    const _ = parseInt(_.time),
                      _ = _ + parseInt(_.metadata.duration_ms);
                    return _ < _ && _ > _;
                  }),
                  _ = _._(_, (_) => _.valMS - 1 - parseInt(_.time));
                _ !== -1 && (_ = _[_]);
              }
              return {
                entry: _,
                timelineState: _ == null ? void 0 : _.m_strState,
              };
            }
            GetClosestNextEntryInTimeline(_, _) {
              const _ = this.GetTimelineMetadata(_),
                _ = this.GetTimelineStartBeforeGlobalZeroMS(_),
                _ = this.GetTimelineDataOrStartLoad(_);
              let _ = null;
              if (_ && _.m_strState === "loaded") {
                const _ = _.m_rgEntries.filter((_) => {
                    const _ = parseInt(_.time),
                      _ = _ + parseInt(_.metadata.duration_ms);
                    return _ < _ && _ > _;
                  }),
                  _ = _._(_, (_) => _.valMS - parseInt(_.time));
                _ < _.length - 1 && (_ = _[_ + 1]);
              }
              return {
                entry: _,
                timelineState: _ == null ? void 0 : _.m_strState,
              };
            }
            GetClosestPreviousEntryInGlobalTimeline(_) {
              const _ = this.GetTimelineOffsetFromGlobal(_, 0),
                _ = this.GetTimelineData(_.strTimelineID);
              if (!_ || _.m_strState !== "loaded")
                return {
                  timelineID: _ == null ? void 0 : _.strTimelineID,
                  timelineState: _ == null ? void 0 : _.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const _ = this.GetTimelineStartBeforeGlobalZeroMS(
                  _.strTimelineID,
                ),
                _ = _.nTimelineOffsetMS.valMS + _,
                _ = _._(_.m_rgEntries, (_) => _ - parseInt(_.time));
              if (_ !== -1) {
                const _ = _.m_rgEntries[_],
                  _ =
                    this.GetTimelineMetadata(_.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    _ +
                    parseInt(_.time);
                return _ < 0
                  ? {
                      timelineID: _.strTimelineID,
                      timelineState: _.m_strState,
                      entry: null,
                      globalMS: null,
                    }
                  : {
                      timelineID: _.strTimelineID,
                      timelineState: _.m_strState,
                      entry: _,
                      globalMS: (0, _._)(_),
                    };
              }
              let _ = this.GetTimelineMetadataIndex(_.strTimelineID);
              if (_ < 1)
                return {
                  timelineID: _.strTimelineID,
                  timelineState: _.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let _ = _ - 1; _ >= 0; _--) {
                const _ = this.m_rgTimelineMetadata[_],
                  _ = this.GetTimelineData(_.metadata.timeline_id);
                if (_) {
                  if (_.m_strState !== "loaded")
                    return {
                      timelineID: _.metadata.timeline_id,
                      timelineState: _.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (_.m_rgEntries.length) {
                    const _ = _.m_rgEntries[_.m_rgEntries.length - 1],
                      _ = this.GetTimelineStartBeforeGlobalZeroMS(
                        _.metadata.timeline_id,
                      ),
                      _ = _.nGlobalOffsetMS.valMS - _ + parseInt(_.time);
                    return _ < 0
                      ? {
                          timelineID: _.metadata.timeline_id,
                          timelineState: _.m_strState,
                          entry: null,
                          globalMS: null,
                        }
                      : {
                          timelineID: _.metadata.timeline_id,
                          timelineState: _.m_strState,
                          entry: _,
                          globalMS: (0, _._)(_),
                        };
                  }
                }
              }
              return {
                timelineID: this.m_rgTimelineMetadata[0].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            GetClosestNextEntryInGlobalTimeline(_) {
              const _ = this.GetTimelineOffsetFromGlobal(_, 0),
                _ = this.GetTimelineData(_.strTimelineID);
              if (!_ || _.m_strState !== "loaded")
                return {
                  timelineID: _ == null ? void 0 : _.strTimelineID,
                  timelineState: _ == null ? void 0 : _.m_strState,
                  entry: null,
                  globalMS: null,
                };
              const _ = this.GetTimelineStartBeforeGlobalZeroMS(
                  _.strTimelineID,
                ),
                _ = _.nTimelineOffsetMS.valMS + _,
                _ = _._(_.m_rgEntries, (_) => _ - parseInt(_.time)) + 1;
              if (_ <= _.m_rgEntries.length - 1) {
                const _ = _.m_rgEntries[_],
                  _ =
                    this.GetTimelineMetadata(_.strTimelineID).nGlobalOffsetMS
                      .valMS -
                    _ +
                    parseInt(_.time);
                return _ < this.GetGlobalTimelineEndMS().valMS
                  ? {
                      timelineID: _.strTimelineID,
                      timelineState: _.m_strState,
                      entry: _,
                      globalMS: (0, _._)(_),
                    }
                  : {
                      timelineID: _.strTimelineID,
                      timelineState: _.m_strState,
                      entry: null,
                      globalMS: null,
                    };
              }
              const _ = this.m_rgTimelineMetadata.length;
              let _ = this.GetTimelineMetadataIndex(_.strTimelineID);
              if (_ === -1 || _ === _ - 1)
                return {
                  timelineID: _.strTimelineID,
                  timelineState: _.m_strState,
                  entry: null,
                  globalMS: null,
                };
              for (let _ = _ + 1; _ < _; _++) {
                const _ = this.m_rgTimelineMetadata[_],
                  _ = this.GetTimelineData(_.metadata.timeline_id);
                if (_) {
                  if (_.m_strState !== "loaded")
                    return {
                      timelineID: _.metadata.timeline_id,
                      timelineState: _.m_strState,
                      entry: null,
                      globalMS: null,
                    };
                  if (_.m_rgEntries.length) {
                    const _ = _.m_rgEntries[0],
                      _ = this.GetTimelineStartBeforeGlobalZeroMS(
                        _.metadata.timeline_id,
                      ),
                      _ = _.nGlobalOffsetMS.valMS - _ + parseInt(_.time);
                    return _ < this.GetGlobalTimelineEndMS().valMS
                      ? {
                          timelineID: _.metadata.timeline_id,
                          timelineState: _.m_strState,
                          entry: _,
                          globalMS: (0, _._)(_),
                        }
                      : {
                          timelineID: _.metadata.timeline_id,
                          timelineState: _.m_strState,
                          entry: null,
                          globalMS: null,
                        };
                  }
                }
              }
              return {
                timelineID:
                  this.m_rgTimelineMetadata[_ - 1].metadata.timeline_id,
                timelineState: "loaded",
                entry: null,
                globalMS: null,
              };
            }
            FindRangeEventsAtGlobalMS(_) {
              const _ = this.GetTimelineOffsetFromGlobal(_, 0),
                _ = this.GetTimelineDataOrStartLoad(_.strTimelineID);
              if (!_ || _.m_strState !== "loaded") return [];
              const _ = [];
              for (const _ of _.m_rgEntries) {
                if (parseInt(_.time) > _.nTimelineOffsetMS.valMS) break;
                if (_.type !== "event" || parseInt(_.duration) == 0) continue;
                const _ = parseInt(_.time),
                  _ = _ + parseInt(_.duration);
                _ <= _.nTimelineOffsetMS.valMS &&
                  _ >= _.nTimelineOffsetMS.valMS &&
                  _.push(_);
              }
              return _;
            }
            GetStateDescriptionAtGlobalMS(_) {
              const _ = this.GetTimelineOffsetFromGlobal(_.valMS, 0),
                _ = this.GetTimelineDataOrStartLoad(_.strTimelineID);
              if (!_ || _.m_strState !== "loaded") return null;
              const _ = _._(
                _.m_rgStateDescriptions,
                (_) => _.nTimelineOffsetMS.valMS - parseInt(_.time),
              );
              return _ > -1 ? _.m_rgStateDescriptions[_] : null;
            }
            AdvanceGameModeIndex(_) {
              let _ = _.m_iGameModeChanges;
              for (; _ + 1 < _.m_data.m_rgGameModeChanges.length; ) {
                let _ = _.m_data.m_rgGameModeChanges[_ + 1];
                if (parseInt(_.time) > _.m_nTimelineOffsetMS) break;
                _++;
              }
              _.m_iGameModeChanges = _;
            }
            AdvanceEntriesIndex(_) {
              for (
                _.m_iEntries == -1 && _.m_iEntries++;
                _.m_iEntries < _.m_data.m_rgEntries.length;
              ) {
                let _ = _.m_data.m_rgEntries[_.m_iEntries];
                if (parseInt(_.time) >= _.m_nTimelineOffsetMS) break;
                _.m_iEntries++;
              }
            }
            CreateTimelineIterator(_, _) {
              let _ = this.FindTimelineAtOffset(_, _);
              if (!_)
                return {
                  m_timeline: null,
                  m_data: null,
                  m_nTimelineOffsetMS: 0,
                  m_iGameModeChanges: -1,
                  m_iEntries: -1,
                };
              let _ = this.GetTimelineDataOrStartLoad(
                  _.timeline.metadata.timeline_id,
                ),
                _ = -1,
                _ = -1;
              if ((_ == null ? void 0 : _.m_strState) == "loaded") {
                let _ = (_) => _.ulGlobalToTimelineOffset - parseInt(_.time);
                (_ = _._(_.m_rgGameModeChanges, _)),
                  (_ = _._(_.m_rgEntries, _));
              }
              let _ = {
                m_timeline: _.timeline.metadata,
                m_data: _,
                m_nTimelineOffsetMS: Math.max(_.ulGlobalToTimelineOffset, 0),
                m_iGameModeChanges: _,
                m_iEntries: _,
              };
              return (
                this.AdvanceEntriesIndex(_), this.AdvanceGameModeIndex(_), _
              );
            }
            HasIteratorReachedEnd(_) {
              return !_.m_timeline;
            }
            AdvanceIterator(_, _) {
              let _ = parseInt(_.m_timeline.duration_ms);
              if (
                _.m_nTimelineOffsetMS + _ <
                _ + this.m_ulFirstTimelineOffsetMS
              ) {
                (_.m_nTimelineOffsetMS += _),
                  this.AdvanceEntriesIndex(_),
                  this.AdvanceGameModeIndex(_);
                return;
              }
              let _ = this.m_rgTimelineMetadata.findIndex(
                (_) => _.metadata == _.m_timeline,
              );
              if (_ < 0 || _ == this.m_rgTimelineMetadata.length - 1) {
                _.m_timeline = null;
                return;
              }
              _++,
                (_.m_timeline = this.m_rgTimelineMetadata[_].metadata),
                (_.m_data = this.GetTimelineDataOrStartLoad(
                  _.m_timeline.timeline_id,
                )),
                (_.m_nTimelineOffsetMS = 0),
                (_.m_iGameModeChanges = 0),
                (_.m_iEntries = 0);
            }
            GetIteratorTimelineState(_) {
              return _.m_data.m_strState;
            }
            GetIteratorGameMode(_) {
              return _.m_iGameModeChanges < 0 ||
                _.m_iGameModeChanges >= _.m_data.m_rgGameModeChanges.length
                ? _._.Playing
                : _.m_data.m_rgGameModeChanges[_.m_iGameModeChanges].mode;
            }
            *GetIteratorEntriesWithin(_, _) {
              let _ = _.m_data.m_rgEntries;
              for (let _ = _.m_iEntries; _ >= 0 && _ < _.length; _++) {
                let _ = _[_];
                if (parseInt(_.time) >= _.m_nTimelineOffsetMS + _) break;
                yield _;
              }
            }
            *GetIteratorGameModesWithin(_, _) {
              let _ = _.m_data.m_rgGameModeChanges;
              for (let _ = _.m_iEntries; _ >= 0 && _ < _.length; _++) {
                let _ = _[_];
                if (parseInt(_.time) >= _.m_nTimelineOffsetMS + _) break;
                yield _;
              }
            }
            GetFirstRecording() {
              if (!this.m_bInitialized) return "";
              const _ = this.m_rgTimelineMetadata[0];
              if (!_) return "";
              const _ = _.metadata.recordings[0];
              return _ ? _.recording_id : "";
            }
            GetFirstRecordingOfLastTimelineSession() {
              if (!this.m_bInitialized) return "";
              const _ =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (!_) return "";
              const _ = _.metadata.recordings[0];
              return _ ? _.recording_id : "";
            }
            GetNextRecording(_) {
              if (!this.m_bInitialized || !_) return "";
              let _ = !1;
              for (let _ of this.m_rgTimelineMetadata)
                for (let _ of _.metadata.recordings) {
                  if (_) return _.recording_id;
                  _.recording_id == _ && (_ = !0);
                }
              return "";
            }
            BRecordingHasZeroOffset(_) {
              if (!this.m_bInitialized) return !1;
              for (let _ of this.m_rgTimelineMetadata)
                for (let _ of _.metadata.recordings)
                  if (_.recording_id == _)
                    return !isNaN(
                      parseInt(_.recording_zero_timeline_offset_ms),
                    );
              return !1;
            }
            GetTimelineDateMS(_, _) {
              if (!this.m_bInitialized) return 0;
              let _ = this.FindTimelineAtOffset(_, _);
              return _
                ? _.timeline.metadata.date_recorded * 1e3 + _.nTimelineOffsetMS
                : 0;
            }
            InsertEntryIntoTimelineSorted(_, _) {
              let _ = (_, _) => parseInt(_.time) - parseInt(_.time);
              _._(_.m_rgEntries, _, _);
            }
            AddEventToTimeline(_, _, _, _, _, _, _, _) {
              if (!this.m_bInitialized)
                return (
                  (0, _._)("timeline loader not initialized, unexpected"), !1
                );
              const _ = this.m_mapTimelineData.get(_);
              if (!_) return (0, _._)(`failed to find timeline ${_}`), !1;
              const _ = _ + this.GetTimelineStartBeforeGlobalZeroMS(_),
                _ = {
                  _: _,
                  time: _ + "",
                  type: "event",
                  icon: _,
                  title: _,
                  description: _,
                  priority: _,
                  duration: `${_}`,
                  possible_clip: 2,
                };
              return (
                (0, _._)(`adding timeline event marker at ${_} at ${_} MS`),
                this.InsertEntryIntoTimelineSorted(_, _),
                this.FireEvent("OnInvalidate", _),
                !0
              );
            }
            RemoveTimelineEvent(_, _) {
              if (!this.m_bInitialized)
                return (
                  (0, _._)("timeline loader not initialized, unexpected"), !1
                );
              const _ = this.m_mapTimelineData.get(_);
              if (!_) return (0, _._)(`failed to find timeline ${_}`), !1;
              const _ = _.m_rgEntries.findIndex((_) => _._ === _);
              return _ < 0
                ? ((0, _._)(`failed to find entry by id: ${_}`), !1)
                : (_.m_rgEntries.splice(_, 1),
                  this.FireEvent("OnInvalidate", _),
                  !0);
            }
            AddUserMarker(_, _, _, _) {
              if (!this.m_bInitialized)
                return (
                  (0, _._)("timeline loader not initialized, unexpected"), !1
                );
              const _ = this.m_mapTimelineData.get(_);
              if (!_) return (0, _._)(`failed to find timeline ${_}`), !1;
              const _ = _ + this.GetTimelineStartBeforeGlobalZeroMS(_),
                _ = {
                  _: _,
                  time: _ + "",
                  type: "usermarker",
                  icon: _,
                  title: "",
                  description: "",
                  priority: 0,
                };
              return (
                (0, _._)(`adding user marker at ${_} at ${_} MS`),
                this.InsertEntryIntoTimelineSorted(_, _),
                this.FireEvent("OnInvalidate", _),
                !0
              );
            }
            UpdateUserMarker(_, _, _) {
              if (!this.m_bInitialized)
                return (
                  (0, _._)("timeline loader not initialized, unexpected"), !1
                );
              const _ = this.m_mapTimelineData.get(_);
              if (!_) return (0, _._)(`failed to find timeline ${_}`), !1;
              const _ = _.m_rgEntries.findIndex((_) => _._ === _);
              if (_ < 0)
                return (0, _._)(`failed to find entry by id: ${_}`), !1;
              const _ = _.m_rgEntries[_],
                _ = _.time;
              return (
                (_.icon = _.strIcon),
                (_.time = "" + _.nTimelineOffsetMS),
                (_.title = _.name),
                (_.description = _.description),
                _ != _.time &&
                  (_.m_rgEntries.splice(_, 1),
                  this.InsertEntryIntoTimelineSorted(_, _)),
                this.FireEvent("OnInvalidate", _),
                !0
              );
            }
            RemoveUserMarker(_, _) {
              if (!this.m_bInitialized)
                return (
                  (0, _._)("timeline loader not initialized, unexpected"), !1
                );
              const _ = this.m_mapTimelineData.get(_);
              if (!_) return (0, _._)(`failed to find timeline ${_}`), !1;
              const _ = _.m_rgEntries.findIndex((_) => _._ === _);
              return _ < 0
                ? ((0, _._)(`failed to find entry by id: ${_}`), !1)
                : (_.m_rgEntries.splice(_, 1),
                  this.FireEvent("OnInvalidate", _),
                  !0);
            }
            AddRunningTimeline(_, _, _) {
              if (
                this.m_rgTimelineMetadata.find(
                  (_) => _.metadata.timeline_id == _,
                )
              )
                return;
              const _ = {
                  timeline_id: _,
                  game_id: _,
                  date_recorded: _,
                  recordings: [],
                },
                _ =
                  this.m_rgTimelineMetadata[
                    this.m_rgTimelineMetadata.length - 1
                  ],
                _ = _
                  ? _.nGlobalOffsetMS.valMS + parseInt(_.metadata.duration_ms)
                  : 0;
              _._(
                this.m_rgTimelineMetadata,
                {
                  nGlobalOffsetMS: (0, _._)(_),
                  metadata: _,
                },
                (_, _) => _.metadata.date_recorded - _.metadata.date_recorded,
              ),
                this.m_mapTimelineData.set(_, {
                  m_strState: "loaded",
                  m_rgGameModeChanges: [],
                  m_rgStateDescriptions: [],
                  m_rgEntries: [],
                  m_rgPhases: [],
                });
              let _ = {
                m_metadata: _,
                m_globalStartMS: _,
                m_perfCounterStart: performance.now(),
                m_nPerfCounterOffsetMS: Math.max(0, (0, _._)() - _) * 1e3,
                m_runningRecording: null,
              };
              this.m_mapRunningTimelines.set(_, _),
                this.m_schUpdateRunning.IsScheduled() ||
                  this.m_schUpdateRunning.Schedule(
                    _,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", _);
            }
            UpdateRunningTimelines() {
              let _;
              this.m_mapRunningTimelines.forEach((_) => {
                _ = _.m_metadata.timeline_id;
                let _ =
                    performance.now() -
                    _.m_perfCounterStart +
                    _.m_nPerfCounterOffsetMS,
                  _ = parseInt(_.m_metadata.duration_ms) || 0;
                _ > _ && (_.m_metadata.duration_ms = _.toString());
              }),
                this.m_mapRunningTimelines.size > 0 &&
                  this.m_schUpdateRunning.Schedule(
                    _,
                    this.UpdateRunningTimelines,
                  ),
                this.FireEvent("OnInvalidate", _);
            }
            RunningTimelineStopped(_, _) {
              let _ = this.m_mapRunningTimelines.get(_);
              _ &&
                ((_.m_metadata.duration_ms = _),
                this.m_mapRunningTimelines.delete(_),
                this.FireEvent("OnInvalidate", _));
            }
            AddRunningTimelineEntry(_) {
              let _ = this.m_mapRunningTimelines.get(_.timeline_id),
                _ = this.m_mapTimelineData.get(_.timeline_id);
              if (!_ || !_) return;
              let _ = (0, _._)(_);
              if (!_) return;
              (0, _._)(_)
                ? _._(
                    _.m_rgGameModeChanges,
                    _,
                    (_, _) => parseInt(_.time) - parseInt(_.time),
                  )
                : (0, _._)(_)
                  ? _._(
                      _.m_rgStateDescriptions,
                      _,
                      (_, _) => parseInt(_.time) - parseInt(_.time),
                    )
                  : _._(
                      _.m_rgEntries,
                      _,
                      (_, _) => parseInt(_.time) - parseInt(_.time),
                    );
              let _ = parseInt(_.m_metadata.duration_ms) || 0,
                _ = parseInt(_.time);
              _ < _ && (_.m_metadata.duration_ms = _.toString()),
                this.FireEvent("OnInvalidate", _.timeline_id);
            }
            TimelineDeleted(_) {
              const _ = this.m_rgTimelineMetadata
                .filter((_) => _.metadata.timeline_id !== _)
                .map((_) => _.metadata);
              this.UpdateTimelineMetadata(_),
                this.m_mapTimelineData.delete(_),
                this.FireEvent("OnInvalidate", _);
            }
            RecordingSessionChanged(_) {
              let _ = _.session_id,
                _ = _.notification_type;
              if (_ == _._._) {
                const _ = this.m_mapRunningTimelines.get(_.timeline_id);
                if (!_) {
                  this.FireEvent("OnInvalidateRecording", _.timeline_id, _),
                    (0, _._)(
                      !1,
                      "Received recording started message before timeline info",
                    );
                  return;
                }
                const _ = {
                  recording_id: _,
                  start_offset_ms: _.start_offset,
                  recording_zero_timeline_offset_ms: _.start_offset,
                  duration_ms: _.duration_ms,
                  recording_type: _.recording_type,
                };
                _.m_metadata.recordings.push(_), (_.m_runningRecording = _);
              } else if (_ == _._._) {
                const _ = this.GetRunningTimelineForRecording(_.timeline_id, _);
                if (!_) return;
                (_.m_runningRecording.duration_ms = _.duration_ms),
                  (_.m_runningRecording = null),
                  this.FireEvent("OnInvalidateRecording", _.timeline_id, _);
              } else if (_ == _._._) {
                const _ = this.GetTimelineMetadata(_.timeline_id);
                if (_) {
                  const _ = _.metadata.recordings.find(
                    (_) => _.recording_id === _,
                  );
                  if (_) {
                    (_.start_offset_ms = _.start_offset),
                      (_.duration_ms = _.duration_ms);
                    const _ =
                      parseInt(_.start_offset) + parseInt(_.duration_ms);
                    let _ = parseInt(_.metadata.duration_ms) || 0;
                    _ > _ && (_.metadata.duration_ms = _.toString());
                  }
                }
                this.GetRunningTimelineForRecording(_.timeline_id, _) ||
                  this.FireEvent("OnInvalidateRecording", _.timeline_id, _);
              } else if (_ == _._._) {
                const _ = this.GetTimelineMetadata(_.timeline_id);
                if (_) {
                  const _ = _.metadata.recordings.filter(
                    (_) => _.recording_id !== _,
                  );
                  _.metadata.recordings = _;
                }
              }
              this.FireEvent("OnInvalidate", _.timeline_id);
            }
            GetGlobalTimelineEndMS() {
              const _ =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (_) {
                const _ = isNaN(parseInt(_.metadata.duration_ms))
                  ? 0
                  : parseInt(_.metadata.duration_ms);
                return (0, _._)(_.nGlobalOffsetMS.valMS + _);
              }
              return (0, _._)(0);
            }
            GetEndOfRecordingsMS() {
              const _ =
                this.m_rgTimelineMetadata[this.m_rgTimelineMetadata.length - 1];
              if (_) {
                const _ =
                  _.metadata.recordings[_.metadata.recordings.length - 1];
                if (_) {
                  const _ = this.m_mapRunningTimelines.has(
                      _.metadata.timeline_id,
                    ),
                    _ = isNaN(parseInt(_.start_offset_ms))
                      ? 0
                      : parseInt(_.start_offset_ms),
                    _ = isNaN(parseInt(_.metadata.duration_ms))
                      ? 0
                      : parseInt(_.metadata.duration_ms);
                  let _ = 0;
                  return (
                    _
                      ? (_ = Math.max(0, _ - _))
                      : isNaN(parseInt(_.duration_ms)) ||
                        (_ = parseInt(_.duration_ms)),
                    (0, _._)(_.nGlobalOffsetMS.valMS + _ + _)
                  );
                }
              }
              return null;
            }
            GetTotalRecordingDuration() {
              let _ = 0;
              return (
                this.m_rgTimelineMetadata.forEach((_) => {
                  _.metadata.recordings.forEach((_) => {
                    isNaN(parseInt(_.duration_ms)) ||
                      (_ = _ + parseInt(_.duration_ms));
                  });
                }),
                _
              );
            }
            GetTimelineStartBeforeGlobalZeroMS(_) {
              return _ == this.m_rgTimelineMetadata[0].metadata.timeline_id
                ? this.m_ulFirstTimelineOffsetMS
                : 0;
            }
            async GenerateNamePartsFromTimeline(_, _, _, _) {
              var _;
              let _,
                _ = !1,
                _,
                _,
                _,
                _;
              for (let _ of this.m_rgTimelineMetadata) {
                let _ = !1;
                if (!_) {
                  if (_.metadata.timeline_id != _) continue;
                  (_ = !0), (_ = !0);
                }
                const _ = _.metadata.timeline_id == _;
                await this.LoadTimelineData(_.metadata.timeline_id);
                const _ = this.m_mapTimelineData.get(_.metadata.timeline_id);
                _ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3)),
                  _ && (_ = _.metadata.date_recorded + Math.floor(_ / 1e3));
                for (let _ of _.m_rgEntries) {
                  const _ = parseInt(_.time);
                  if (
                    (_ && _ < _) ||
                    (_ && _ > _) ||
                    (!(0, _._)(_) && !(0, _._)(_))
                  )
                    continue;
                  const _ = _(_);
                  (!_ || (_ && _.rank > _.rank)) && (_ = _);
                }
                for (let _ of _.m_rgStateDescriptions) {
                  const _ = parseInt(_.time);
                  (_ && _ > _) || ((!_ || _ < _) && ((_ = _), (_ = _)));
                }
                if (_) break;
              }
              const _ =
                  (_ = _ == null ? void 0 : _.strTitle) != null
                    ? _
                    : _ == null
                      ? void 0
                      : _.title,
                _ = new _._(this.GetGameID()),
                _ = _._.GetAppInfo(_.GetInternalAppID()),
                _ = _ == null ? void 0 : _.name;
              return {
                strTimelinePart: _,
                strAppNamePart: _,
                rtStart: _,
                rtEnd: _,
              };
            }
            async GenerateClipNameFromTimeline(_, _, _, _) {
              const { strTimelinePart: _, strAppNamePart: _ } =
                  await this.GenerateNamePartsFromTimeline(_, _, _, _),
                _ = new Date(),
                _ = `${_.getFullYear()}-${(_.getMonth() + 1).toString().padStart(2, "0")}-${_.getDate().toString().padStart(2, "0")} ${_.toLocaleTimeString(_._.GetPreferredLocales())}`,
                _ = [_, _, _].filter((_) => !!_).join(" - ");
              return (0, _._)(`Generated clip name "${_}"`), _;
            }
          };
        _([_.__webpack_require__], _.prototype, "m_bInitialized", 2),
          _([_.__webpack_require__], _.prototype, "UpdateRunningTimelines", 1);
        let __webpack_require__ = _;
        function _(_) {
          switch (_.type) {
            case "event":
              const _ = _;
              return {
                rank: 5e4 + _.priority,
                strTitle: _.title,
              };
            case "usermarker":
              const _ = _;
              return !_.title && !_.description
                ? null
                : {
                    rank: 1e5 + _.priority,
                    strTitle: _.title || _.description,
                  };
            case "state_description":
              return {
                rank: 4e4,
                strTitle: _.title,
              };
            case "achievement":
              return {
                rank: 9e4,
                strTitle: _.title,
              };
          }
          return null;
        }
        function _(_) {
          const _ = React.useMemo(() => GetTimelineLoaderForClip(_), [_]),
            _ = React.useCallback(
              (_) =>
                `https://steamloopback.host/gamerecordings/clips/${_}/video/${_}/session.mpd`,
              [_],
            );
          return (
            React.useEffect(() => () => _ && _.release(), [_]),
            {
              loader: _.loader,
              fnGetManifest: _,
            }
          );
        }
        function _(_) {
          const _ = React.useMemo(() => GetTimelineLoaderForGame(_), [_]),
            _ = React.useCallback(
              (_) =>
                `https://steamloopback.host/gamerecordings/video/${_}/session.mpd`,
              [],
            );
          return (
            React.useEffect(() => () => _ && _.release(), [_]),
            {
              loader: _.loader,
              fnGetManifest: _,
            }
          );
        }
        function _(_) {
          if (!Array.isArray(_.entries)) {
            let _ = [];
            _.entries &&
              typeof _.entries == "object" &&
              ((_ = Object.values(_.entries)),
              (_ = _.filter((_) => _ && typeof _ == "object" && "time" in _)),
              _.sort((_, _) => parseInt(_.time) - parseInt(_.time))),
              (_.entries = _);
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
        });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        function _() {
          return (0, _._)().languages.map((_) => _(_.strISOCode));
        }
        function _(_) {
          return _.length == 2 && _._.COUNTRY ? `${_}-${_._.COUNTRY}` : _;
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
          _: () => _,
        });
        var __webpack_require__ = {};
        __webpack_require__.__webpack_require__(_),
          __webpack_require__.__webpack_require__(_, {
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var __webpack_require__ = {};
        __webpack_require__.__webpack_require__(_),
          __webpack_require__.__webpack_require__(_, {
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var __webpack_require__ = {};
        __webpack_require__.__webpack_require__(_),
          __webpack_require__.__webpack_require__(_, {
            _: () => _,
            _: () => _,
            _: () => _,
            _: () => _,
          });
        var __webpack_require__ = {};
        __webpack_require__.__webpack_require__(_),
          __webpack_require__.__webpack_require__(_, {
            _: () => _,
            _: () => _,
          });
        var __webpack_require__ = {};
        __webpack_require__.__webpack_require__(_),
          __webpack_require__.__webpack_require__(_, {
            _: () => _,
            _: () => _,
          });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__.__webpack_require__(_),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timelines || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 2, 3, 4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timelines: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    postgame_events: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    temporary_clips: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    tags: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecordingFile";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = null;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timelines || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1, 14, 15], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timelines: {
                      _: 1,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    first_timeline_start_offset_ms: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    date_recorded: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    game_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    published_file_id: {
                      _: 5,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    size_in_bytes: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    name: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    temporary: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    original_device: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    original_gaming_device_type: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    date_downloaded: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_width: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_height: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    tags: {
                      _: 14,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    phases: {
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
            return "CGameRecordingClipFile";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = null;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timeline_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [5, 6, 7], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timeline_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    date_recorded: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    duration_ms: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    recordings: {
                      _: 5,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    phases: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    significant_events: {
                      _: 7,
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
            return "CGameRecordingTimelineMetadata";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recording_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recording_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_offset_ms: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    recording_type: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    delete_on_cleanup: {
                      _: 5,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    video_manager_clip_id: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    video_manager_video_id: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    cdn_manifest_url: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    file_size: {
                      _: 9,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    recording_zero_timeline_offset_ms: {
                      _: 10,
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
            return "CGameRecordingTimelineMetadata_Recording";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    events: {
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
            return "CGameRecordingPostGameSummary";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    rt_created: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    possible_clip: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    timeline_id: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    entry_id: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timeline_offset_ms: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    marker_icon: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    marker_title: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    user_marker: {
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
            return "CGameRecordingTimelineEvent";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [3], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    tag: {
                      _: 2,
                      _: _,
                    },
                    references: {
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
            return "CGameRecordingTag";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    timeline_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    offset_ms: {
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
            return "CGameRecordingTag_Timeline";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timeline_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timeline_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    entry_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timeline_offset_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
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
            return "CGameRecordingTagInstance";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = null;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.phase_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [6, 7, 9], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    phase_id: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    duration_ms: {
                      _: 5,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    tags: {
                      _: 6,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    contained_tags: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    background_timeline_offset: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    attributes: {
                      _: 9,
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
            return "CGameRecordingPhase";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    group: {
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
            return "CGameRecordingPhase_Tag";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.name || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    group: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    icon: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    priority: {
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
            return "CTimelineTag";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.group || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    group: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    value: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    priority: {
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
            return "CPhaseAttribute";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = 0,
          __webpack_require__ = 1,
          __webpack_require__ = 2,
          __webpack_require__ = 3,
          __webpack_require__ = 4,
          __webpack_require__ = 5,
          __webpack_require__ = 6,
          __webpack_require__ = 7,
          __webpack_require__ = 8,
          __webpack_require__ = 9,
          __webpack_require__ = 1,
          __webpack_require__ = 2,
          __webpack_require__ = 3,
          __webpack_require__ = 4,
          __webpack_require__ = 5,
          __webpack_require__ = 6,
          __webpack_require__ = 1,
          __webpack_require__ = 2,
          __webpack_require__ = 3,
          __webpack_require__ = 4,
          __webpack_require__ = 0,
          __webpack_require__ = 1,
          __webpack_require__ = 0,
          __webpack_require__ = 1,
          __webpack_require__ = 1,
          __webpack_require__ = 2;
        var __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        function _(_) {
          return "unknown ETimelineEntryType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EPhaseResultType ( " + _ + " )";
        }
        function _(_) {
          return "unknown ETimelineChangeNotificationType ( " + _ + " )";
        }
        function _(_) {
          return (
            "unknown ERecordingSessionChangeNotificationType ( " + _ + " )"
          );
        }
        function _(_) {
          return "unknown EDiskSpaceType ( " + _ + " )";
        }
        function _(_) {
          return "unknown EThumbnailTimePrecision ( " + _ + " )";
        }
        function _(_) {
          return "unknown EThumbnailFormat ( " + _ + " )";
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
            return "CGameRecording_GetAppsWithBackgroundVideo_Request";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.apps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
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
            return "CGameRecording_GetAppsWithBackgroundVideo_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    most_recent_start_time: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    recording_type: {
                      _: 3,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    video_duration_seconds: {
                      _: 4,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    timeline_duration_seconds: {
                      _: 5,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                    is_active: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    file_size: {
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
            return "CGameRecording_GetAppsWithBackgroundVideo_Response_App";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_GetTimelinesForApp_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timelines || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timelines: {
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
            return "CGameRecording_GetTimelinesForApp_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
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
            return "CGameRecording_GetTimelinesForClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [2], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timelines: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    first_timeline_start_offset_ms: {
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
            return "CGameRecording_GetTimelinesForClip_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.page || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [12], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    page: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    count: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    filter_gameid: {
                      _: 10,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    filter_search_string: {
                      _: 11,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    filter_tags: {
                      _: 12,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    filter_phase_id: {
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
            return "CGameRecording_QueryPhases_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.group || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    group: {
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
            return "CGameRecording_QueryPhases_Request_Tag";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.phases || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    phases: {
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
            return "CGameRecording_QueryPhases_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(
                this,
                _,
                0,
                -1,
                [7, 8, 10, 13, 16, 17],
                null,
              );
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    date_recorded: {
                      _: 5,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    duration_ms: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    tags: {
                      _: 7,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    contained_tags: {
                      _: 8,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    background_recording: {
                      _: 9,
                      _: _,
                    },
                    clip_ids: {
                      _: 10,
                      _: !0,
                      _: !0,
                      _: _._.readString,
                      _: _._.writeRepeatedString,
                    },
                    type: {
                      _: 11,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    start_ms: {
                      _: 12,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    screenshots: {
                      _: 13,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    active: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    phase_id: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    significant_events: {
                      _: 16,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    attributes: {
                      _: 17,
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
            return "CGameRecording_QueryPhases_Response_Phase";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timeline_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timeline_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    offset: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
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
            return "CGameRecording_QueryPhases_Response_Phase_BackgroundRecording";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_GetTags_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.tags || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    tags: {
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
            return "CGameRecording_GetTags_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_GetEnoughDiskSpace_Request";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.enough_space || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    enough_space: {
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
            return "CGameRecording_GetEnoughDiskSpace_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_GetAvailableDiskSpace_Request";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.size || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    size: {
                      _: 1,
                      _: _._.readDouble,
                      _: _._.writeDouble,
                    },
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_GetAvailableDiskSpace_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    timeline_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    start_time: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    duration_ms: {
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
            return "CGameRecording_TimelineChanged_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.notification_type || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                    timeline_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_id: {
                      _: 4,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    session_id: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_offset: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    recording_type: {
                      _: 8,
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
            return "CGameRecording_RecordingSessionChanged_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timeline_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [17, 19], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timeline_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    entry_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    time: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    type: {
                      _: 4,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    game_mode: {
                      _: 5,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    range_title: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    range_duration: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    range_possible_clip: {
                      _: 9,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    timestamp_title: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    marker_icon: {
                      _: 11,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    marker_description: {
                      _: 13,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    marker_priority: {
                      _: 14,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    screenshot_handle: {
                      _: 15,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    achievement_name: {
                      _: 16,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    tag: {
                      _: 17,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    phase_id: {
                      _: 18,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    attributes: {
                      _: 19,
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
            return "CTimelineEntry";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entry || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entry: {
                      _: 1,
                      _: _,
                    },
                    game_id: {
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
            return "CGameRecording_TimelineEntryChanged_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timeline_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    entry_id: {
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
            return "CGameRecording_TimelineEntryRemoved_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_LowDiskSpace_Notification";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_PostGameHighlightsChanged_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    phase_id: {
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
            return "CGameRecording_OpenOverlayToGamePhase_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    entry_id: {
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
            return "CGameRecording_OpenOverlayToTimelineEvent_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_PhaseListChanged_Notification";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_id: {
                      _: 2,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    duration_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    date_recorded: {
                      _: 4,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    start_timeline_id: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_offset_ms: {
                      _: 6,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    published_file_id: {
                      _: 7,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    file_size: {
                      _: 8,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    name: {
                      _: 9,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    date_clipped: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    temporary: {
                      _: 11,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    original_device: {
                      _: 12,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    original_gaming_device_type: {
                      _: 13,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    date_downloaded: {
                      _: 14,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_url: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    thumbnail_width: {
                      _: 16,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    thumbnail_height: {
                      _: 17,
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
            return "CGameRecording_ClipSummary";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    start: {
                      _: 2,
                      _: _,
                    },
                    end: {
                      _: 3,
                      _: _,
                    },
                    name: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    src_clip_id: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    temporary: {
                      _: 6,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    force_thumbnail: {
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
            return "CGameRecording_SaveClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.timeline_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    timeline_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    offset_ms: {
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
            return "CGameRecording_SaveClip_Request_Position";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.summary || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_SaveClip_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
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
            return "CGameRecording_DeleteClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_DeleteClip_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.bitrate_kbps || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    bitrate_kbps: {
                      _: 1,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    width: {
                      _: 2,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    height: {
                      _: 3,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    frames_per_second: {
                      _: 4,
                      _: _._.readInt32,
                      _: _._.writeInt32,
                    },
                    codec: {
                      _: 5,
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
            return "CGameRecording_ExportClip_Settings";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    export_mp4_path: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    settings: {
                      _: 3,
                      _: _,
                    },
                    use_unique_filename: {
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
            return "CGameRecording_ExportClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.result || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
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
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClip_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    settings: {
                      _: 2,
                      _: _,
                    },
                    run_policy_checks: {
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
            return "CGameRecording_ExportClipPreview_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.estimated_size || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    estimated_size: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    settings: {
                      _: 2,
                      _: _,
                    },
                    result: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ExportClipPreview_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    timeline_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    timeline_offset_ms: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    source_clip_id: {
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
            return "CGameRecording_TakeScreenshot_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.screenshot_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    screenshot_id: {
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
            return "CGameRecording_TakeScreenshot_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    title: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    desc: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    visibility: {
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
            return "CGameRecording_UploadClipToSteam_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.summary || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadClipToSteam_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
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
            return "CGameRecording_ZipClip_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.zip_path || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    zip_path: {
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
            return "CGameRecording_ZipClip_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    created_after: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    include_temporary: {
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
            return "CGameRecording_GetClips_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip: {
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
            return "CGameRecording_GetClips_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    created_after: {
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
            return "CGameRecording_GetAndTrimPostGameHighlights_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.events || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    events: {
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
            return "CGameRecording_GetAndTrimPostGameHighlights_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    entry: {
                      _: 2,
                      _: _,
                    },
                    clip_id: {
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
            return "CGameRecording_UserAddTimelineEntry_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.entry_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    entry_id: {
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
            return "CGameRecording_UserAddTimelineEntry_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    entry: {
                      _: 2,
                      _: _,
                    },
                    clip_id: {
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
            return "CGameRecording_UserUpdateTimelineEntry_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_UserUpdateTimelineEntry_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
                      _: 1,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    timeline_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    entry_id: {
                      _: 3,
                      _: _._.readUint64String,
                      _: _._.writeUint64String,
                    },
                    clip_id: {
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
            return "CGameRecording_UserRemoveTimelineEntry_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_UserRemoveTimelineEntry_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_ids || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_ids: {
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
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_ManuallyDeleteRecordingsForApps_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.folder_path || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    folder_path: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
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
            return "CGameRecording_GetTotalDiskSpaceUsage_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.size || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    size: {
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
            return "CGameRecording_GetTotalDiskSpaceUsage_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.recording_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [4], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    recording_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    clip_id: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    timeline_id: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    start_offset_us: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readInt64String,
                      pbr: _._.readPackedInt64String,
                      _: _._.writeRepeatedInt64String,
                    },
                    major_axis: {
                      _: 5,
                      _: 512,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    time_precision: {
                      _: 6,
                      _: _,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    format: {
                      _: 8,
                      _: _,
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
            return "CGameRecording_GetThumbnails_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.thumbnails || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    thumbnails: {
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
            return "CGameRecording_GetThumbnails_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.image_data || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    image_data: {
                      _: 1,
                      _: _._.readBytes,
                      _: _._.writeBytes,
                    },
                    width: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    height: {
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
            return "CGameRecording_GetThumbnails_Response_Thumbnail";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_StartRecording_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_StartRecording_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_StopRecording_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.summary || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_StopRecording_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_GetRecordingSize_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.file_size || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    file_size: {
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
            return "CGameRecording_GetRecordingSize_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_CleanupBackgroundRecordings_Request";
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
            return "CGameRecording_CleanupBackgroundRecordings_Response";
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
            return "CGameRecording_GetPlatformCapabilities_Request";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.per_process_audio_capture || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    per_process_audio_capture: {
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
            return "CGameRecording_GetPlatformCapabilities_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.summary || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_ClipCreated_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clip_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clip_id: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    game_id: {
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
            return "CGameRecording_ClipDeleted_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.progress || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    progress: {
                      _: 1,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    clip_id: {
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
            return "CGameRecording_ExportProgress_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gameid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gameid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    enabled: {
                      _: 2,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    minutes: {
                      _: 3,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    bitrate: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    infinite: {
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
            return "CGameRecording_PerGameSettings";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_GetPerGameSettings_Request";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.settings || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [1], null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    settings: {
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
            return "CGameRecording_GetPerGameSettings_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_settings || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_settings: {
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
            return "CGameRecording_SetPerGameSettings_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_SetPerGameSettings_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gameid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    gameid: {
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
            return "CGameRecording_DeletePerGameSettings_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_DeletePerGameSettings_Response";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.progress || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    progress: {
                      _: 1,
                      _: _._.readFloat,
                      _: _._.writeFloat,
                    },
                    clip_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    eresult: {
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
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CGameRecording_UploadProgress_Notification";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.game_id || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    game_id: {
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
            return "CGameRecording_SwitchBackgroundRecordingGame_Request";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_SwitchBackgroundRecordingGame_Response";
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
            return "CGameRecording_GetState_Request";
          }
        }
        const __webpack_require__ = class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.is_h265_enabled || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    is_h265_enabled: {
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
            return "CGameRecording_GetState_Response";
          }
        };
        _(_, "sm_m"), _(_, "sm_mbf");
        let __webpack_require__ = _;
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
            return "CGameRecording_StateChanged_Notification";
          }
        }
        var __webpack_require__;
        ((_) => {
          _.GetAppsWithBackgroundVideoHandler = {
            name: "GameRecording.GetAppsWithBackgroundVideo#1",
            request: _,
            response: _,
          };
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetAppsWithBackgroundVideo = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetAppsWithBackgroundVideo#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetAppsWithBackgroundVideo = _),
            (_.GetTimelinesForAppHandler = {
              name: "GameRecording.GetTimelinesForApp#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetTimelinesForApp#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetTimelinesForApp = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetTimelinesForApp#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetTimelinesForApp = _),
            (_.GetTimelinesForClipHandler = {
              name: "GameRecording.GetTimelinesForClip#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetTimelinesForClip#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetTimelinesForClip = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetTimelinesForClip#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetTimelinesForClip = _),
            (_.QueryPhasesHandler = {
              name: "GameRecording.QueryPhases#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.QueryPhases#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.QueryPhases = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.QueryPhases#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgQueryPhases = _),
            (_.GetTagsHandler = {
              name: "GameRecording.GetTags#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.GetTags#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.GetTags = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.GetTags#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgGetTags = _),
            (_.GetEnoughDiskSpaceHandler = {
              name: "GameRecording.GetEnoughDiskSpace#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetEnoughDiskSpace = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetEnoughDiskSpace#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetEnoughDiskSpace = _),
            (_.GetAvailableDiskSpaceHandler = {
              name: "GameRecording.GetAvailableDiskSpace#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetAvailableDiskSpace = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetAvailableDiskSpace#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetAvailableDiskSpace = _),
            (_.SaveClipHandler = {
              name: "GameRecording.SaveClip#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.SaveClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.SaveClip = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.SaveClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgSaveClip = _),
            (_.DeleteClipHandler = {
              name: "GameRecording.DeleteClip#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.DeleteClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.DeleteClip = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.DeleteClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgDeleteClip = _),
            (_.GetClipsHandler = {
              name: "GameRecording.GetClips#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.GetClips#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.GetClips = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.GetClips#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgGetClips = _),
            (_.UploadClipToSteamHandler = {
              name: "GameRecording.UploadClipToSteam#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UploadClipToSteam#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.UploadClipToSteam = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UploadClipToSteam#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgUploadClipToSteam = _),
            (_.ExportClipHandler = {
              name: "GameRecording.ExportClip#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.ExportClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.ExportClip = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.ExportClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgExportClip = _),
            (_.ExportClipPreviewHandler = {
              name: "GameRecording.ExportClipPreview#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.ExportClipPreview#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.ExportClipPreview = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.ExportClipPreview#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgExportClipPreview = _),
            (_.TakeScreenshotHandler = {
              name: "GameRecording.TakeScreenshot#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.TakeScreenshot#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.TakeScreenshot = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.TakeScreenshot#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgTakeScreenshot = _),
            (_.ZipClipHandler = {
              name: "GameRecording.ZipClip#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.ZipClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.ZipClip = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.ZipClip#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgZipClip = _),
            (_.StartRecordingHandler = {
              name: "GameRecording.StartRecording#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.StartRecording#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.StartRecording = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.StartRecording#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgStartRecording = _),
            (_.StopRecordingHandler = {
              name: "GameRecording.StopRecording#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.StopRecording#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.StopRecording = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.StopRecording#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgStopRecording = _),
            (_.GetBackgroundRecordingFileSizeHandler = {
              name: "GameRecording.GetBackgroundRecordingFileSize#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetBackgroundRecordingFileSize = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetBackgroundRecordingFileSize#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetBackgroundRecordingFileSize = _),
            (_.CleanupBackgroundRecordingsHandler = {
              name: "GameRecording.CleanupBackgroundRecordings#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.CleanupBackgroundRecordings = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.CleanupBackgroundRecordings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgCleanupBackgroundRecordings = _),
            (_.GetAndTrimPostGameHighlightsHandler = {
              name: "GameRecording.GetAndTrimPostGameHighlights#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetAndTrimPostGameHighlights = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetAndTrimPostGameHighlights#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetAndTrimPostGameHighlights = _),
            (_.GetThumbnailsHandler = {
              name: "GameRecording.GetThumbnails#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetThumbnails#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetThumbnails = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetThumbnails#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetThumbnails = _),
            (_.GetPlatformCapabilitiesHandler = {
              name: "GameRecording.GetPlatformCapabilities#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetPlatformCapabilities = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetPlatformCapabilities#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetPlatformCapabilities = _),
            (_.NotifyTimelineChangedHandler = {
              name: "GameRecording.NotifyTimelineChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyTimelineChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyTimelineChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyTimelineChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyTimelineChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyTimelineChanged = _),
            (_.NotifyRecordingSessionChangedHandler = {
              name: "GameRecording.NotifyRecordingSessionChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyRecordingSessionChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyRecordingSessionChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyRecordingSessionChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyRecordingSessionChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyRecordingSessionChanged = _),
            (_.NotifyTimelineEntryChangedHandler = {
              name: "GameRecording.NotifyTimelineEntryChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyTimelineEntryChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyTimelineEntryChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyTimelineEntryChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyTimelineEntryChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyTimelineEntryChanged = _),
            (_.NotifyTimelineEntryRemovedHandler = {
              name: "GameRecording.NotifyTimelineEntryRemoved#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyTimelineEntryRemovedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyTimelineEntryRemoved = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyTimelineEntryRemoved = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyTimelineEntryRemoved#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyTimelineEntryRemoved = _),
            (_.NotifyClipCreatedHandler = {
              name: "GameRecording.NotifyClipCreated#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyClipCreatedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyClipCreated = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyClipCreated = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyClipCreated#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyClipCreated = _),
            (_.NotifyClipDeletedHandler = {
              name: "GameRecording.NotifyClipDeleted#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyClipDeletedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyClipDeleted = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyClipDeleted = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyClipDeleted#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyClipDeleted = _),
            (_.NotifyExportProgressHandler = {
              name: "GameRecording.NotifyExportProgress#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyExportProgressHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyExportProgress = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyExportProgress = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyExportProgress#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyExportProgress = _),
            (_.NotifyUploadProgressHandler = {
              name: "GameRecording.NotifyUploadProgress#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyUploadProgressHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyUploadProgress = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyUploadProgress = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyUploadProgress#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyUploadProgress = _),
            (_.NotifyLowDiskSpaceHandler = {
              name: "GameRecording.NotifyLowDiskSpace#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyLowDiskSpaceHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyLowDiskSpace = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyLowDiskSpace = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyLowDiskSpace#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyLowDiskSpace = _),
            (_.NotifyPostGameHighlightsChangedHandler = {
              name: "GameRecording.NotifyPostGameHighlightsChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyPostGameHighlightsChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyPostGameHighlightsChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyPostGameHighlightsChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyPostGameHighlightsChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyPostGameHighlightsChanged = _),
            (_.NotifyOpenOverlayToGamePhaseHandler = {
              name: "GameRecording.NotifyOpenOverlayToGamePhase#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyOpenOverlayToGamePhaseHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyOpenOverlayToGamePhase = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyOpenOverlayToGamePhase = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyOpenOverlayToGamePhase#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyOpenOverlayToGamePhase = _),
            (_.NotifyOpenOverlayToTimelineEventHandler = {
              name: "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyOpenOverlayToTimelineEventHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyOpenOverlayToTimelineEvent = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyOpenOverlayToTimelineEvent = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyOpenOverlayToTimelineEvent#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyOpenOverlayToTimelineEvent = _),
            (_.NotifyPhaseListChangedHandler = {
              name: "GameRecording.NotifyPhaseListChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyPhaseListChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyPhaseListChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyPhaseListChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyPhaseListChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgNotifyPhaseListChanged = _),
            (_.GetPerGameSettingsHandler = {
              name: "GameRecording.GetPerGameSettings#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetPerGameSettings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetPerGameSettings = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetPerGameSettings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetPerGameSettings = _),
            (_.SetPerGameSettingsHandler = {
              name: "GameRecording.SetPerGameSettings#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.SetPerGameSettings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.SetPerGameSettings = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.SetPerGameSettings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgSetPerGameSettings = _),
            (_.DeletePerGameSettingsHandler = {
              name: "GameRecording.DeletePerGameSettings#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.DeletePerGameSettings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.DeletePerGameSettings = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.DeletePerGameSettings#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgDeletePerGameSettings = _),
            (_.UserAddTimelineEntryHandler = {
              name: "GameRecording.UserAddTimelineEntry#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.UserAddTimelineEntry = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UserAddTimelineEntry#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgUserAddTimelineEntry = _),
            (_.UserUpdateTimelineEntryHandler = {
              name: "GameRecording.UserUpdateTimelineEntry#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.UserUpdateTimelineEntry = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UserUpdateTimelineEntry#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgUserUpdateTimelineEntry = _),
            (_.UserRemoveTimelineEntryHandler = {
              name: "GameRecording.UserRemoveTimelineEntry#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.UserRemoveTimelineEntry = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.UserRemoveTimelineEntry#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgUserRemoveTimelineEntry = _),
            (_.ManuallyDeleteRecordingsForAppsHandler = {
              name: "GameRecording.ManuallyDeleteRecordingsForApps#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.ManuallyDeleteRecordingsForApps = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.ManuallyDeleteRecordingsForApps#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgManuallyDeleteRecordingsForApps = _),
            (_.GetTotalDiskSpaceUsageHandler = {
              name: "GameRecording.GetTotalDiskSpaceUsage#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.GetTotalDiskSpaceUsage = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.GetTotalDiskSpaceUsage#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgGetTotalDiskSpaceUsage = _),
            (_.SwitchBackgroundRecordingGameHandler = {
              name: "GameRecording.SwitchBackgroundRecordingGame#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.SwitchBackgroundRecordingGame = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
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
                    "GameRecording.SwitchBackgroundRecordingGame#1",
                    (0, _._)(_, _),
                    _,
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          (_.SendMsgSwitchBackgroundRecordingGame = _),
            (_.GetStateHandler = {
              name: "GameRecording.GetState#1",
              request: _,
              response: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.GetState#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          _.GetState = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? new Promise((_, _) => {
                    console.error(
                      "Transport Error: no transport is available for request",
                    ),
                      _(
                        "Transport Error: no transport is available for request",
                      );
                  })
                : _.SendMsg("GameRecording.GetState#1", (0, _._)(_, _), _, {
                    ePrivilege: 1,
                    eClientExecutionSite: 1,
                  })
            );
          }
          (_.SendMsgGetState = _),
            (_.NotifyStateChangedHandler = {
              name: "GameRecording.NotifyStateChanged#1",
              request: _,
            });
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultHandlerRegistry()),
              _ == null
                ? (console.error(
                    "Transport Error: no default registry is available for request",
                  ),
                  null)
                : _.RegisterServiceNotificationHandler(
                    _.NotifyStateChangedHandler,
                    _,
                  )
            );
          }
          _.RegisterForNotifyStateChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.NotifyStateChanged = _;
          function _(_, _) {
            return (
              (_ = _ || (0, _._)().GetDefaultTransport()),
              _ == null
                ? (console.error(
                    "Transport Error: no transport is available for request",
                  ),
                  !1)
                : _.SendNotification(
                    "GameRecording.NotifyStateChanged#1",
                    (0, _._)(_, _),
                    {
                      ePrivilege: 1,
                      eClientExecutionSite: 1,
                    },
                  )
            );
          }
          _.SendMsgNotifyStateChanged = _;
        })(_ || (_ = {}));
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
        });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        class _ {
          constructor(_, _, _) {
            if ((_(this, "m_ulGameID"), typeof _ == "string"))
              this.m_ulGameID = _._.fromString(_, !0);
            else {
              const _ = _,
                _ = ((_ & 255) << 24) + (_ & 16777215);
              this.m_ulGameID = _._.fromBits(_, _, !0);
            }
          }
          GetAppID() {
            return this.m_ulGameID.getLowBitsUnsigned() & 16777215;
          }
          GetType() {
            return (this.m_ulGameID.getLowBitsUnsigned() >> 24) & 255;
          }
          GetModID() {
            return this.m_ulGameID.getHighBitsUnsigned();
          }
          ConvertTo64BitString() {
            return this.m_ulGameID.toString();
          }
          BIsSteamApp() {
            return this.GetType() === _.Rhn.k_EGameIDTypeApp;
          }
          BIsShortcut() {
            return this.GetType() === _.Rhn.k_EGameIDTypeShortcut;
          }
          BIsMod() {
            return this.GetType() === _.Rhn.k_EGameIDTypeGameMod;
          }
          GetInternalAppID() {
            return this.BIsSteamApp() ? this.GetAppID() : this.GetModID();
          }
          BIsValid() {
            switch (this.GetType()) {
              case _.Rhn.k_EGameIDTypeApp:
                return this.GetAppID() !== _._;
              case _.Rhn.k_EGameIDTypeGameMod:
                return (
                  this.GetAppID() !== _._ && (this.GetModID() & 2147483648) != 0
                );
              case _.Rhn.k_EGameIDTypeShortcut:
                return (this.GetModID() & 2147483648) != 0;
              default:
                return (
                  (0, _._)(!1, `Unknown GameID type: ${this.GetType()}`), !1
                );
            }
          }
          static InitFromAppID(_) {
            return new _(_.Rhn.k_EGameIDTypeApp, _, 0);
          }
          static InitFromShortcutID(_) {
            return new _(_.Rhn.k_EGameIDTypeShortcut, 0, _);
          }
        }
        function _(_) {
          return _.InitFromAppID(_).ConvertTo64BitString();
        }
        function _(_) {
          return _.InitFromShortcutID(_).ConvertTo64BitString();
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
        });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = Object.defineProperty,
          __webpack_require__ = Object.getOwnPropertyDescriptor,
          __webpack_require__ = (_, _, _) =>
            _ in _
              ? _(_, _, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: _,
                })
              : (_[_] = _),
          __webpack_require__ = (_, _, _, _) => {
            for (
              var _ = _ > 1 ? void 0 : _ ? _(_, _) : _, _ = _.length - 1, _;
              _ >= 0;
              _--
            )
              (_ = _[_]) && (_ = (_ ? _(_, _, _) : _(_)) || _);
            return _ && _ && _(_, _, _), _;
          },
          __webpack_require__ = (_, _, _) =>
            _(_, typeof _ != "symbol" ? _ + "" : _, _);
        const __webpack_require__ = new _.__webpack_require__(
            "ReactUsageReporting",
          ).Debug,
          __webpack_require__ = 100,
          __webpack_require__ = _.__webpack_require__.PerMinute * 1e3;
        class _ {
          constructor() {
            _(this, "m_strProduct"),
              _(this, "m_strVersion"),
              _(this, "m_transport", null),
              _(this, "m_mapRoutes", new Map()),
              _(this, "m_mapComponents", new Map()),
              _(this, "m_mapActions", new Map()),
              _(this, "m_reportCount", 0),
              _(this, "m_bInitialized", !1);
          }
          Init(_, _, _) {
            (this.m_bInitialized = !0),
              (this.m_strProduct = _),
              (this.m_strVersion = _),
              (this.m_transport = _),
              this.ScheduleSend();
          }
          ScheduleSend() {
            setTimeout(() => this.CheckSend(), _);
          }
          CheckSend() {
            this.m_reportCount > 0 && this.SendMetrics(), this.ScheduleSend();
          }
          ReportInternal(_, _) {
            _.has(_) || _.set(_, 0),
              _.set(_, _.get(_) + 1),
              this.m_reportCount++,
              this.ShouldSendMetricsImmediately() && this.SendMetrics();
          }
          ReportRouteMatch(_) {
            _("Route match: " + _), this.ReportInternal(_, this.m_mapRoutes);
          }
          ReportTrackedComponent(_) {
            _("Tracked component: " + _),
              this.ReportInternal(_, this.m_mapComponents);
          }
          ReportTrackedAction(_) {
            _("User action: " + _), this.ReportInternal(_, this.m_mapActions);
          }
          ShouldSendMetricsImmediately() {
            return this.m_reportCount >= _;
          }
          SendMetrics() {
            if (!this.m_bInitialized) return;
            const _ = _._.Init(_._);
            _.Body().set_product(this.m_strProduct),
              _.Body().set_version(this.m_strVersion),
              this.m_mapRoutes.forEach((_, _) => {
                let _ = new _._();
                _.set_route(_), _.set_count(_), _.Body().add_routes(_);
              }),
              this.m_mapComponents.forEach((_, _) => {
                let _ = new _._();
                _.set_component(_), _.set_count(_), _.Body().add_components(_);
              }),
              this.m_mapActions.forEach((_, _) => {
                let _ = new _._();
                _.set_action(_), _.set_count(_), _.Body().add_actions(_);
              }),
              this.m_mapRoutes.clear(),
              this.m_mapComponents.clear(),
              this.m_mapActions.clear(),
              (this.m_reportCount = 0),
              _._.ReportReactUsage(this.m_transport, _);
          }
          get version() {
            return this.m_strVersion;
          }
          get product() {
            return this.m_strProduct;
          }
        }
        _([_.__webpack_require__], _.prototype, "CheckSend", 1);
        const __webpack_require__ = new _();
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__.__webpack_require__(module_exports, {
          _: () => _,
          _: () => _,
        });
        var __webpack_require__ = __webpack_require__("chunkid"),
          __webpack_require__ = __webpack_require__("chunkid");
        function _(_, _) {
          const _ = _.bUseBinary1K ? 1024 : 1e3,
            _ = _ * _,
            _ = _ * _,
            _ = _ * _;
          return _ > _
            ? {
                nNum: _ / _,
                strPrefix: "Tera",
              }
            : _ > _
              ? {
                  nNum: _ / _,
                  strPrefix: "Giga",
                }
              : _ > _
                ? {
                    nNum: _ / _,
                    strPrefix: "Mega",
                  }
                : _ > _
                  ? {
                      nNum: _ / _,
                      strPrefix: "Kilo",
                    }
                  : {
                      nNum: _,
                      strPrefix: "",
                    };
        }
        function _(_, _, _, _) {
          let _ = _;
          typeof _ == "number"
            ? (_ = {
                nDigitsAfterDecimal: _,
                bUseBinary1K: _ || _ === void 0,
                bValueIsInBytes: !_,
                bValueIsRate: _,
                nMinimumDigitsAfterDecimal: 0,
              })
            : (_ = {
                nDigitsAfterDecimal: 2,
                bUseBinary1K: !0,
                bValueIsInBytes: !0,
                bValueIsRate: !1,
                nMinimumDigitsAfterDecimal: 0,
                ..._,
              });
          const { nNum: _, strPrefix: _ } = _(_, _),
            _ = `#${_}${_.bValueIsInBytes ? "bytes" : "bits"}${_.bValueIsRate ? "_PerSecond" : ""}`;
          return _._.Localize(
            _,
            _.toLocaleString((0, _._)(), {
              minimumFractionDigits: _.nMinimumDigitsAfterDecimal,
              maximumFractionDigits: _.nDigitsAfterDecimal,
            }),
          );
        }
        function _(_, _ = 0) {
          let _;
          return (
            _ &&
              (_ = {
                maximumFractionDigits: _,
              }),
            _ ? _.toLocaleString((0, _._)(), _) : "" + _
          );
        }
        function _(_) {
          return _ > 1e9
            ? Math.trunc(_ / 1e9).toString() + "B"
            : _ > 1e6
              ? Math.trunc(_ / 1e6).toString() + "M"
              : _ > 1e3
                ? Math.trunc(_ / 1e3).toString() + "K"
                : _.toString();
        }
      },
      chunkid: (module) => {
        module.exports = {
          ClipDetails: "_3OZdTvCTb6CpiavJuyAgSs",
          VideoContainer: "_10C-FSg2FYguFXDoPyD78V",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Dummy: "_2840rmUpPlQD_u2oirCKXu",
          Selected: "WvAtVArGoU9dj88kJb1G",
          HighlightIcon: "_3rt1qClyPaHAYiVwOSu9Xz",
          CustomMarker: "_3F_GfwciLV6y6FOEIe3_S5",
          MarkerBacking: "_1ft3M77d9XtBcrueBGrbGw",
          HighlightIconSVG: "nt4N5Hp8gRa3CnL6YpyKr",
          Faded: "_3G-TED_y5JFy9DHiymK5Cn",
          Marker: "_3GP2Yb1IBiNxW79A0_H-Q1",
          GameMarkerSVG: "_2FfQ96ZQOySW735_57yKby",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GameRecordingPlayer: "_1AGqAVUQuj81DaUOKJ9Eon",
          Overlay: "_1PKb5jI6E9EN9uLLK030zW",
          NoVideo: "DaqWGn7r6dsiUT-0iSrbT",
          PositionAbsolute: "_1OoTISs44U6oUjpL0fTCLm",
          VideoFadeIn: "_3oLlzv-aDkyT4cHgaeENJI",
          PlayingClippedRegion: "_1j1-Ir0r57qAcNurF2Vw5Q",
          ClippingMode: "_8y8y6OQZb4pxeWWBVk3lJ",
          PlayerError: "_3ixlq8K1YVBNIk7rw190aK",
          Title: "_3jzI6mjmcbRqEVzPuCJYv5",
          Description: "_1jQ8TJZ3F4Ma6ZUMrMp0aa",
          Buttons: "_2eqwm-fL9OYKl0X03c1q_a",
          Button: "_2Jhopz5mqnwHwBUX9sMIGY",
          DisableButton: "rq1uEI9jHMgnF1LIsVsJg",
          PerfCtnVideo: "adSGJAq-6dCBUokBxFrBa",
          PerfCtnThumbnails: "_1Yw-S-TvqNOTTuBoAAYqse",
          LoadingSpinner: "_3O0u0sQlmSmP2MRXulRGEc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          GoLiveButtonCtn: "_1Ssh6bcQcBm8T6zVNU48G2",
          GoLiveButton: "_1rZeqdwHzajXNoY-uxRgfW",
          IsLive: "_2MGnyLAWN4c3di_W6U3YWJ",
          JumpToEndIcon: "_2FkWFO_BAQnsWrQr-nHvEz",
        };
      },
      chunkid: (module) => {
        module.exports = {
          animationDuration: "2000ms",
          BannerVideoOverlay: "pV5fBzxs9g1gv7NhwtPdq",
          PlayerHighlightBanner: "_3oCX4-nEGyWSMenKIpdZvR",
          fadeInOut: "_2x2R_azPakYmQHIxM143Kw",
          BannerContents: "_3ToouRgOCIvXMYAgFoOZ3_",
          HighlightIcon: "_1gJnEr6txP9r5CBXTn9Gai",
          InfoBox: "_2Lk34fBX0K4eB8fylDh5cs",
          HighlightTitle: "_1PwzlJfUyycPZV0XiiKPGm",
          HighlightDesc: "_1UuG7uPwvt1zecZ8oGNxzu",
        };
      },
      chunkid: (module) => {
        module.exports = {
          animationDuration: "2000ms",
          RelativeTimeContainer: "UqMNRsT0TZjlt-9HTNH--",
          RelativeTime: "_3waN_JrfZ-gXKzfJxcuQcf",
          fadeInOut: "_1Tmc5_ehH_tlNlyTxyfSr5",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "_3AC5PeKRkSoB1JUS8LCinu",
          ScrollAndControlsCtn: "_1CYsmnIqkn90UQTVYK63be",
          GamepadMode: "_1wi1J1l41xYwh6lx7zH4Aw",
          Controls: "_1l2J-z02NZ7-HU23Bk7FwR",
          TimelineScrollContainer: "_3v-bzPuU4mVOvwvq1wX6Z6",
          ContentContainer: "_1Jjb0RXXDDj5JSQTNRIeRi",
          AbsoluteLayer: "_2F0d9JLSNH0gY26UBXIZYS",
          HideOverflow: "_2GDis70-E8G-El7mDlayt8",
          RelativeLayer: "_1xZCNiE6ZMwQsUHLh2y9t1",
          WithPointerEvents: "_12MLk3-t1rqZ33U6DiMKg1",
          RecordingDecorators: "_2PJGDULdt2ctu6R0EkUHPj",
          ClipDecorators: "tbss_z2HLa4Oa0yS4mGrb",
          GameModes: "_1Bh3PscPMEMGlegOtxPEWM",
          DateDecorator: "_2w-ta9UJW1Y73wRilaD9l-",
          BackgroundTicks: "xD30aylfCATSjNrytpUAm",
          Highlights: "_56YDWYPBkNJazWmgg83Sk",
          RangeHighlights: "s20SLnZnerU68G2dHOWRW",
          Timestamps: "xLUyqvUeXIgxuJpmmte1i",
          RangeSelector: "_2vqUVszLX8jrl8soNo84qt",
          SeekScrubber: "_3MV0K4aiJwcuWauL5dt6gY",
          PlayHead: "_37u67bibEd1DUyQFBTBNzb",
          Thumbnails: "_1pOPbtOaUeqeJm3nrdEkyx",
          PositionLeft: "_2lo44W-Sy4zMrYWnl55XBD",
          PositionRight: "_2tl3cTX_fsKtBrtcctB5wc",
          Phases: "_29M5GL7LdzPRq4bOtIu5My",
          ContentAndGradient: "XrJofUthOAZ7wCkD_C2fE",
          ScrollbarPlaceholder: "_1NhP7G104P9VPsp6bTxyBb",
          LeftControlsAndContent: "_1vc8f5bCHfDynpWgwyhf5m",
          ScrollGradientCtn: "rWNgVMPb6DEglMsLileNg",
          FrontGradient: "_2M09urev2z_0keBeRWlFsa",
          HideGradient: "_28_y-RUEZhJpt4in4Wyry9",
          EndGradient: "YzFF90kSvFzYRc4OndPpi",
          ScrollbarAndSiblings: "_34dlBrUZP054ElsvOp5hQm",
          ScrollBarCtn: "_1-ooPvEW2c6SHuhnz6SK3t",
          HideScrollBar: "N-WtiJTQNtp0Tzuw4BmgF",
          ScrollTrack: "NP3DlSRiWZygPWZSLSVX",
          PlayHeadAnnotation: "_32vHJA51iTnZgyk7drRCvc",
          RangeAnnotation: "_2cjQVZ5ycKyb79yPxB-Bms",
          ScrollThumb: "JffqXSW3actHr6hj8F9Sn",
          Highlight: "_1EGQ0DSJx5OOPFoNVz85oF",
        };
      },
      chunkid: (module) => {
        module.exports = {
          MouseListenerContainer: "_1t81JirfhcUdp7F73SUzQF",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "_3HMMNaShMT1M773fCgCd",
          ScrollAndControlsCtn: "gAhqB_Mx8V-7QYnzQP1eo",
          GamepadMode: "XkOPy2hiLaUWJsZVWC23u",
          Controls: "uwbPYSFyWCkcEbf3b5Y9K",
          TimelineScrollContainer: "II0EI3Ol8DvWt7FQfsNbx",
          ContentContainer: "_2eSQSp9u7_VDUDrCG4V-tL",
          AbsoluteLayer: "_2fti4qzLVbEydOmlw7A16i",
          HideOverflow: "_16Ta99sWFo7DNbWlpvpHRV",
          RelativeLayer: "_1RIfcMPhdua9IftpbJJAKq",
          WithPointerEvents: "_2Sk-Lj6jlDfehv6uuUa_Yn",
          RecordingDecorators: "NBc0PgdECgNGHybXMXgOp",
          ClipDecorators: "YBRVEhywfTRwb_vT9HdnU",
          GameModes: "_3vfGkbTjXUzSwr6b-v42JO",
          DateDecorator: "kakzXn3creKWdal1etpku",
          BackgroundTicks: "_3bRgOtndRhCrJpwTzd0Oim",
          Highlights: "LzHSWmJHomqtU-jTSLDEG",
          RangeHighlights: "_1NdyCSdtiQFvoBznqvarvN",
          Timestamps: "_36FQk5T4kMLr1axT-z3jAq",
          RangeSelector: "_3jnVEdXp155d_RQr3eZuyK",
          SeekScrubber: "_3x48wiJyAtvabHFlW4HWuo",
          PlayHead: "_3ckxIZyeOrSrQ775apezh2",
          Thumbnails: "_31eJnQyMpbmhp0mnHd02Ky",
          PositionLeft: "_1stnksokEwzIn10nHGDCEM",
          PositionRight: "_2f_ksFBRUllauZs4HA-bzg",
          Phases: "TaarLFX9W8lQiCjgz-nIn",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "JGGVRlj-AwNguh4wa7807",
          ScrollAndControlsCtn: "_2RzAySWe-9uzCJA9oGykll",
          GamepadMode: "_3lpEJRNBcA9EpAgLomD0jn",
          Controls: "HvZN6nroENhLkhniNutuR",
          TimelineScrollContainer: "_1cFVEeJk2np6JpMKYq0m9t",
          ContentContainer: "_3wqjsEPRzSGUpOgWYezV30",
          AbsoluteLayer: "_1vYBX3E1lB7wsdRdmsRSwV",
          HideOverflow: "C6chOG85M6_-hqwofg04b",
          RelativeLayer: "_1_XjIyiq_P7oZk4Aa3PZsk",
          WithPointerEvents: "_2GrriEvGl2vEPERHoIkg9X",
          RecordingDecorators: "T_GKyHV01N-0Mw4V9Q8N4",
          ClipDecorators: "_3jAa31iOtuHCYOt1cyYPHU",
          GameModes: "z3tClNy49hdbgj0NVx7R5",
          DateDecorator: "EiFtpT2NTMMovW9unJLGu",
          BackgroundTicks: "_2abPmFPmW_oPE349VO2TpA",
          Highlights: "_2_8rC82wthkPbfuHxBkHYk",
          RangeHighlights: "_2Lj8ZYpDL8HxfPJRXg0kgm",
          Timestamps: "_1e7MByQ-W7P_ftMx-4WcMV",
          RangeSelector: "_4kLbmnRkHeqUQus1ItdUY",
          SeekScrubber: "_23WuCkYUy41WcwdxqycJXb",
          PlayHead: "_1Zf0UX5Nyt7ZflIvx86a9K",
          Thumbnails: "Px56HgqgodVj1s1lELr9s",
          PositionLeft: "PftJQL7hFlMD6fyCmJ94X",
          PositionRight: "_3lMvwFfrxKrrjEOlUf7ov3",
          Phases: "_3CMHPm1gab4V9JTfZYAp1E",
          TimelineBacking: "_18sxaBKg910kJmmJS3zaaE",
          TimeTick: "faIAh3Zzg4MdulktB1IFo",
          TickLine: "iLLznzt7Npcsc-y_9tyCc",
          Major: "walQuMqIA1KE3_0tchqYj",
          Minor: "_2I5yeKjfnjaPmRNIpHUrl1",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "_1ZSym6hTh_XycEHZQv3waF",
          ScrollAndControlsCtn: "_1q95sqXb4oTj5LekKlUWqI",
          GamepadMode: "_1F4jNXOr-Gwt5oygH9F_mh",
          Controls: "z15TYuRsvRt6Li7EM3mM5",
          TimelineScrollContainer: "R0SGdHf8Z6rpbQGEf06ZP",
          ContentContainer: "_2XMJZ6Tb3zjNYuh91Il3rA",
          AbsoluteLayer: "_3AkqWv_vVG7IcuxTsw4FBK",
          HideOverflow: "qGvsK6jhx7uQrlMTQ6zSP",
          RelativeLayer: "_3zzAfZQcPSWB4Gj3tebKrI",
          WithPointerEvents: "_3z05uqMI8WeroTsIbWYYr0",
          RecordingDecorators: "TlW7mv6AQcJacn3I9Wcho",
          ClipDecorators: "_2HPd50upMLAGM4Ne2mOpIA",
          GameModes: "mKXM660QBtJ7Qy_5uNGdP",
          DateDecorator: "_1KAHyZKmBLACfUu9XXht0l",
          BackgroundTicks: "_1sDp4tXvu6KF6yaTe5Y65b",
          Highlights: "_3vFdT_Qdu7unGt0x2UBIOz",
          RangeHighlights: "P3bkvf7j3c-xSz6s7HtHY",
          Timestamps: "_3esOhQ7c-vdhQ6yUCny4aA",
          RangeSelector: "NMfai6QhLJB5lfGE-3T3o",
          SeekScrubber: "_3n81RbB8WDAKT_q_iUYF6P",
          PlayHead: "_1j_4JBYTjJZ3L044d9QjQL",
          Thumbnails: "_1a1mkc6mxngGs0scqTx8Rv",
          PositionLeft: "_3Tw8uk4rZfrmmyGfql1eTc",
          PositionRight: "_3OI9MLjE2183pXrrzjZlZ",
          Phases: "_1j2D4HXwIaWGBWeUeZiWve",
          ClipDecorator: "_3EWp_eWXsvKB-Lwz-Afl0S",
          gradient: "_3vAWnjV6c5oyReAPoGg-Ln",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "_3KG8zrhAf5BZd7OOkiM3Vn",
          ScrollAndControlsCtn: "_2Ox4l0Syi-OBMfeLLwGB0S",
          GamepadMode: "_1Nc3R34LFcFFu9xxGczIZx",
          Controls: "_1S92sYYyOl3-hAGUyKk3mT",
          TimelineScrollContainer: "_2yvt6-n0jndik9woSi9oiV",
          ContentContainer: "_28oA65JjmGpgktil_Spx8V",
          AbsoluteLayer: "_3RYVNG8TM3G95eG8DCgVCb",
          HideOverflow: "_1kDYn7vvEbKlU7Z4VfveI8",
          RelativeLayer: "_189IQalI-kinGc53wY8Btm",
          WithPointerEvents: "V18cwfJ6UCohOoz26FN68",
          RecordingDecorators: "_2u47IazTp8la3TplHQ4uMB",
          ClipDecorators: "_2LgpdbDk3onwK4JvCZ39GV",
          GameModes: "_32FUOpVgoy1QDT7K79IbqA",
          DateDecorator: "_3I1C0omMrwDJGYMspB33xc",
          BackgroundTicks: "-YJsXiYQ82zAY6sIPD-Z3",
          Highlights: "_1YMPrXbYXRhzivMd0RAOk-",
          RangeHighlights: "MxB0pCFqE_x6FHJiO8vGU",
          Timestamps: "_2GK8qqQxwH2_oWzF5rDbv6",
          RangeSelector: "pUP4yzI_BrVbBm7Bv9_ta",
          SeekScrubber: "_4LzfJqGOGDmemv2y4TUvS",
          PlayHead: "_7tgJLenOXLuiHf4FQsal-",
          Thumbnails: "TulKT7sbANoIafI9_KJza",
          PositionLeft: "_2g51I5QZegiV94lHBGsUhw",
          PositionRight: "_1AQnsvHDMaK1BJGY5kAcTl",
          Phases: "_3rPpP9lH-E-fnlD-DUERH3",
          TimelineRelativeDate: "xYXziACgvkSwOnjGsjrll",
          Overlay: "c1Fn5e_N42Q5Oz4gyqRvL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "ALhsP_3HUfx4PHrpqy8R9",
          ScrollAndControlsCtn: "_5tbL0FKI0tuPTIa9Kh7Eo",
          GamepadMode: "_1dlSZNEhvmBeFco9nqqgCu",
          Controls: "u1VLCsRiWRO141U_KrOsN",
          TimelineScrollContainer: "_2IbHVvHaXnfviOahuULDQE",
          ContentContainer: "_2akKkTmA-GSqjV0ZuWZrxH",
          AbsoluteLayer: "_2e4HsYQIYWCzm4AUpHqlD2",
          HideOverflow: "_2Cp350sAx9clmoB_LKnqbp",
          RelativeLayer: "_124G22Z6qukxV-0yFjpk6h",
          WithPointerEvents: "ZoJ5cv5eX5Scw_K3FbQVA",
          RecordingDecorators: "_1b3xBvE7bRvkHIrvljgLJb",
          ClipDecorators: "_12hX8NvmhU3g8lrWcYZmia",
          GameModes: "_1w4ECxgpqgm_8JHSj5S_ys",
          DateDecorator: "_2_LxF0wGALV2Jtr6yimHGW",
          BackgroundTicks: "_1wC4nFbVKj98NDRuVnW2DK",
          Highlights: "_3Mwk0XzURhRyn-iKASG7Yj",
          RangeHighlights: "AwYHl8RlppVEH0g3dKMjP",
          Timestamps: "_2_I_TyIeQdR-V7l562aVwJ",
          RangeSelector: "_2509eCzShezVSGfZFWi9BW",
          SeekScrubber: "_3Re46KW-L5PLoUYxCq_k6W",
          PlayHead: "_3BW9NlhX6WYWHXM6WNBI54",
          Thumbnails: "_3WC2e0zUqP5LoUxckgI6Fv",
          PositionLeft: "m29ndF7OUcWuJyQ7gz0r9",
          PositionRight: "_3scLcN4HvBYNivCKDSVIGj",
          Phases: "_25KI7BuIZxgifkWKhYIy4m",
          GameModeMarker: "_XZRbjOovnp3-oJB1FHsX",
          Playing: "_1QXuDX8p22dW30Dq7Q4cY1",
          Staging: "_5elfnsld99d9XPrRSVVMb",
          Menus: "_2ouy5ehbuCra9zvvJVRt7N",
          Unspecified: "_3tV_P5UlKOy23ovyof9BCG",
          GameModeMarkerClip: "_2X0XBzWywYh06tLOpEVVhV",
        };
      },
      chunkid: (module) => {
        module.exports = {
          HighlightContextMenuItem: "_28S8ry9bxlwML-iCsdsuB",
          MenuItem: "JZCa05wXidmR0BEW4wKuT",
          EditMarker: "sMTceKd747vq8bsuL3OW9",
          CreateClip: "_1xK5Up775-kzkarHJyaUSH",
          DeleteMarker: "_1HITbDUgqbAsnVISlw-IU4",
          ViewScreenshot: "_2HfiRMT1mpZZy-Op04_Vp5",
          ViewClip: "_20E0pQUHwdjs6eM1Ow2GiS",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "_2i7CkGHUrVZKOMEsrhI1p_",
          ScrollAndControlsCtn: "_3fITrWggW83OcggiMJdPz3",
          GamepadMode: "_2hCXeP62uQrMldE08f-mjT",
          Controls: "_1EiX3eLLYicyYcDHtIM6_s",
          TimelineScrollContainer: "_2RYEV5Q8tyI-Z488xqMdJh",
          ContentContainer: "_2lWpy5QzYnH2pWhRjUASJL",
          AbsoluteLayer: "_3wd1JlZa9wOIFFMqdVmsh8",
          HideOverflow: "_2PTM3ppOv1W0jPmlXV9zeK",
          RelativeLayer: "_237IHLV36I9F3GAeSC3Ast",
          WithPointerEvents: "sMhiTRaHJInFdVQZ6J0-m",
          RecordingDecorators: "_3S9aExsAjU_DTaDbMIj5i9",
          ClipDecorators: "_3sy9QqiqMextSXnKc1AMAN",
          GameModes: "_2zfITr74kyUJlBfMyJLgnn",
          DateDecorator: "_2ad7ZMfcbWLopAqjoc1dQy",
          BackgroundTicks: "_2rdq8jGEzjIT8wAFNFhiYQ",
          Highlights: "_2MKxDzVJV5-FqyH991s2MT",
          RangeHighlights: "_2pwNSvaiG6OMTbuF-NyeqL",
          Timestamps: "_1BmX-E7ljnjRC-DwV0vehq",
          RangeSelector: "_3Kw_btjCsTccf081ReOvQp",
          SeekScrubber: "lP4qnNu-VBcvUzlXNQtyt",
          PlayHead: "_3pAXAVoqYOE6IKmH5vVcvy",
          Thumbnails: "_26VL6vWz_H-HdOIX-WB1NV",
          PositionLeft: "_1UQilx5P8cBrDKId9y9Zml",
          PositionRight: "vmWKsPz2yK9DdAMmGopBd",
          Phases: "_3hNl6_lWZBob973Eyo8tN7",
          MarkerAndDropline: "KxkV7ibv4HxiLzsJDo09y",
          Faded: "_2YIhgvCldNrTquf5YdDweU",
          NoPointer: "_2ebcCpkh2QhQIrtDjawNTL",
          TimelineMarkerCtn: "_1Dg_c4LTkbyiG_03VDAsQE",
          TimelineMarker: "_2CNnKSqRD_9z5U0Knq2yjM",
          DroplineCtn: "_2KKJRZF-_QAqfpR0e-20x6",
          TimelineMarkerDropLine: "_3JsMmXCkE-NhKNzxarPwuc",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Positioner: "r5C4vqop5qm8LQK3X0ko3",
          MouseWithin: "ew9abErxuaHlGCMzkyeWJ",
          Highlight: "xk10sVHcF-iepUcNGM7xL",
          PhaseHighlight: "_2sP2GHDIcIT3HmoJT5xGlA",
          Body: "_1hlTgJwbrd9u_brCsEsT0N",
          Edge: "_3_tErLe8CNqRhYf0vAfb-t",
        };
      },
      chunkid: (module) => {
        module.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_2X7jhW-qi_3UccesLWrrSi",
          ScrollAndControlsCtn: "_3NY57YPlBtVmbManJByw3B",
          GamepadMode: "_3LWcSQg02x6_mKFAC2HnOA",
          Controls: "_3iXWpF78DL2KpP8zwC0a0D",
          TimelineScrollContainer: "_3A2oPv5e_smY5BRZYb44oC",
          ContentContainer: "_37F8Twe4-MEGnPuMdrRjdV",
          AbsoluteLayer: "_2TPYTXJ5LTahFqYyrgyybY",
          HideOverflow: "_1GDbd0Ag6dx77g7HNg9fjA",
          RelativeLayer: "_1Gp1jY_vrVhkryDDlAy5XA",
          WithPointerEvents: "_2Wca3Yup3sepGJyb3yB9Wx",
          RecordingDecorators: "_2yAWbzlcRBmXGKBJxO5Q6K",
          ClipDecorators: "_1vxxhyF1HrGzKc8R-wGDGw",
          GameModes: "_2W6eCuNryz1pMcGhYEyFag",
          DateDecorator: "_2XW6UMjMH0uXl0q6gIOKs7",
          BackgroundTicks: "_3Tt6WBdl000PCM7C2kwD2c",
          Highlights: "_1epMF6kwn7KeUBakQKPhCm",
          RangeHighlights: "aRAHUpKDR27OMcL2xHCSC",
          Timestamps: "_2of-NiJ1-JIp_fPSufxZJ3",
          RangeSelector: "bBVOLxbX1EUhwt_Oez4GK",
          SeekScrubber: "_1c_f2oDp_5tIKiGQcvboIB",
          PlayHead: "NAXFU_K2NP9xmH2cnITpG",
          Thumbnails: "FNvG_yK3LCIcUTGSfMhVP",
          PositionLeft: "GECyynaguvZTc6_17XpFd",
          PositionRight: "_3Rwz0Dale6Fxyu3k2khbuf",
          Phases: "_xSGH0PVjr0l8tuXz9-3f",
          PlayheadInteractionCtn: "_3_VTfkSR95EXQBQCvfM-ua",
          ActiveCtn: "_2bsFx5e6IWGwk1Smh_yRl",
          PlayHeadContainer: "_2RtcuI1Wk2JRTn39xig3OS",
          TooltipSource: "DgGCjpjgZ28PDlwxsTwCr",
          Active: "_3N6L28ckYs_8Z7u62KJCJV",
          PlayHeadContent: "_1zm_aVI1mDMkbM_o1um30R",
          PlayHeadCurrentTimeContainer: "_38jg4bQlW8Tyygoswt3epd",
          NoPointer: "_2qwplD-OoJ3_iLfl14eORi",
        };
      },
      chunkid: (module) => {
        module.exports = {
          RangeHighlight: "_2a4wDhcnXixHXxFFvpLGbe",
        };
      },
      chunkid: (module) => {
        module.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_15xYd1duz4CX9ojFz0CE0r",
          ScrollAndControlsCtn: "_39WVqvqzprHCxsDbq6RIVi",
          GamepadMode: "_1iVq_Vso_g-hPu4I6clDcI",
          Controls: "q39fhjQv3o2GqRMkZeGeA",
          TimelineScrollContainer: "_2Ns82DABvcHzpa7h2Z1yN0",
          ContentContainer: "_2flM04qSQgffE6G2_pghpT",
          AbsoluteLayer: "hPYovdeG0fnX79y5Lq6i8",
          HideOverflow: "zl42_yRu36YJmTpwkrll3",
          RelativeLayer: "wxj4IaR3D-7lPHenwnyaS",
          WithPointerEvents: "_2AobDyHPf2lTm9ZzZIsGop",
          RecordingDecorators: "_1hCGwoXgxZG5aIyUcumoan",
          ClipDecorators: "_1d_mX4rNoLcSBlpCOOZ9d-",
          GameModes: "_26Bbv689gSTq0MjmYL-Y6Y",
          DateDecorator: "_2BqCIYg1x7daCu3oF0vicq",
          BackgroundTicks: "_2YoyAw0aHd57nTMyCX8Ek8",
          Highlights: "_2hsueyKwIwA6dgxRFhAuEw",
          RangeHighlights: "_3eoxS78PdZxxZaBBmdJDZB",
          Timestamps: "_3O3iRzw4rwhbFvTKLV7s2J",
          RangeSelector: "_2gSg55gNLQhpokogPcJ-As",
          SeekScrubber: "sTaCR323nQeC8QrAQW3Cr",
          PlayHead: "_3Ra6BfYOEPCrvdKvrXpd2i",
          Thumbnails: "_7KwbBvSEcjyRsmZ0g6j6z",
          PositionLeft: "_27IW3T5nky75Oz6a17zWSg",
          PositionRight: "xf_NxJ83twPRPic2nUu3s",
          Phases: "IIuLWvFELtrtCRCvRlpo",
          RangeControls: "_3TsJzrPgtC5rqLcR6ihpFi",
          RangeSelectorCtn: "_2ULjGYMNYTiUllQtzFXS11",
          Active: "_2bFlccGjBmvO9sTXH-UhId",
          InactiveSelectedRangeControl: "_2uX26Fo_kmE4ZR6JmKQpp4",
          SelectedRangeMask: "_2C2hWRks6sMz8e9rdXj_BH",
          RangeIcon: "DTarGRkLfmPhdBVfdlNIf",
          Hide: "_2OktuE6gQcRmHdDbzj7AzW",
          TrackRangeControls: "_1xinhHBSWQ2oYszkzt2zrt",
          RangeControl: "_106ZAEQ05s5XGwxAQ4k_W6",
          RangeMask: "_1SW3yTh55ykBnsHiBzIQFC",
          FullMask: "HBfBmaVuNVcfkTcAqMJdE",
        };
      },
      chunkid: (module) => {
        module.exports = {
          LoadingTimeline: "_3tH-UmmBxFZv85a4VmjR83",
          ScrollAndControlsCtn: "_3EGBZkS2chHJ5KaKxGam9e",
          GamepadMode: "_3Wahmr7e1VA6i9w9Iq0-Vg",
          Controls: "_3nrFGW_JIvdhMPBQvVaqby",
          TimelineScrollContainer: "_3vqWS2_hdUvKZO0Vipm-Pa",
          ContentContainer: "_2_mqytSivE2wDjb0DQRqEp",
          AbsoluteLayer: "CiFLrniSN_egwVrtxdvwm",
          HideOverflow: "_2BoIL1h7HxeuUr9oEBJu5e",
          RelativeLayer: "_3obgM4lCFV2Ggqbiz0HJZX",
          WithPointerEvents: "_1e6-Zdv13LsrP3qEPoBDr9",
          RecordingDecorators: "_3l9q4-8eUf8mm3ml4NZ-9m",
          ClipDecorators: "_1HU0h3xOeCJtdhA_ieKKsf",
          GameModes: "_2FL-NrMawaFVKSgQr2NRu7",
          DateDecorator: "_2bCxb7i3bzq1DCZWl04h-n",
          BackgroundTicks: "_2UfqYYX9g4-SFlozy19diE",
          Highlights: "_2iZX0eAmOssSWzNwVW2Sk2",
          RangeHighlights: "_1aNkPwMsxHkCpTJ3zueNmV",
          Timestamps: "_2TfF2B8IJjQO4cxcYnzNv-",
          RangeSelector: "wMeTvFQex5TV0NsHdu1En",
          SeekScrubber: "_1x23j31qyK2ov8527ywrtY",
          PlayHead: "_3hU0qsPL5AdwVbmHfPQjz8",
          Thumbnails: "_3U1E2lH8PHXEKmmCidFYET",
          PositionLeft: "_3a7NFvp83NwS--Uea7c18J",
          PositionRight: "_2aWYEMKtLLTVAg5lTA30Du",
          Phases: "_2HWX2m_BjCepXubvHC-OBI",
          RecordingDecorator: "_24zNSxRiQlHxbGT_RvZsoY",
          Clip: "_3Q-H1_vR-NtTfQf_Ohljdx",
          ClipMode: "_7MCqjcHde47TGpwTMEK5",
          Manual: "_1kfoF8deRCDIcTe5l3oplt",
          RecordingDecoratorClip: "_3d4VU3BdaG9Z5sL2fNq_xy",
          LiveRecordingBuffer: "_3PHrI-zb5iHRj5OfLEwEc0",
          IsLive: "_1kxbPOC7CK5DmZi9fZLfUl",
        };
      },
      chunkid: (module) => {
        module.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_3Tmq42XNJAOKkmYYNLwhYt",
          ScrollAndControlsCtn: "_2zSlRD5EZdNkxEXqxX19xj",
          GamepadMode: "_1iEsh140l3SOV-CHmx1gPK",
          Controls: "_3Sigu8Ua4QhAoaSILhJjnk",
          TimelineScrollContainer: "_36TGeLVHkkcngviDfI1e3w",
          ContentContainer: "_2mJpXt1qXS1THVBTX6wQIh",
          AbsoluteLayer: "_1hyNg-11fi93ggy44EPp0D",
          HideOverflow: "_1IkW2bCIFdXrtYpOKZJT78",
          RelativeLayer: "_1RLJoHOySeNow6t6Gb4q2I",
          WithPointerEvents: "_1o2r-Bw4voSyttJ2TnlIMF",
          RecordingDecorators: "_2qcUYqRha1_HKm_YVHzDFf",
          ClipDecorators: "_3qqUOckgF-Vne9B37h2VNV",
          GameModes: "_2K3UBqeIoBHg4LbvxflBnI",
          DateDecorator: "_2BEmrgSvLIuVLtOq4uyk-b",
          BackgroundTicks: "WbVOga7uck_kj9-xd1ZBj",
          Highlights: "_2nvnMUT2DtnJcH1Rlz3i04",
          RangeHighlights: "_2PKtguqz5iQChuLNLyEq-9",
          Timestamps: "R3B96ZoLAEXfwE5F5VAlS",
          RangeSelector: "_3DWyeaU2HR8tgw6IYQIrF2",
          SeekScrubber: "_2wVY5UH9H5eVSyRfPhgV10",
          PlayHead: "_3knz_EuOFUYwJ-8OisxbLi",
          Thumbnails: "JjnuXWzLmCm63Y-6KipH6",
          PositionLeft: "feeCzNA4u_b9e5tzS9oa6",
          PositionRight: "_1uGyz62lktHAb9_wh3QEUn",
          Phases: "_2wzBXR-nPbsfwcRPnqJ4yk",
          PlayheadInteractionCtn: "cxkAkBK32ah0etQ7VXfDI",
          ActiveCtn: "_3HMQwpcr66jg7N3RW9U4r1",
          PlayHeadContainer: "_3Fg3Bef5dt1s1SK8yzivuJ",
          TooltipSource: "_1zTEVuta8tTd1Iw-c1Ea-N",
          Active: "G8XiKETNpSUHoyKM8T3QA",
          PlayHeadContent: "t2rs722c_hdaOG6MWrVhD",
          PlayHeadCurrentTimeContainer: "_1BM_Z8Iu_1o-aPNlOB8DYa",
          NoPointer: "XCAfYcKute_vaG8jbwVAr",
          RangeControls: "_2ylJ735myBUxj8mYp92MQz",
          RangeSelectorCtn: "_35GmRrlfGhrO_6QVFR0Wi7",
          InactiveSelectedRangeControl: "_bKQMA7pDeFEDDAbdgdNg",
          SelectedRangeMask: "_3PO0lBzzlKrUN85s6-CJmt",
          RangeIcon: "_3H1CUoiDPdbAQs16z1Zc5X",
          Hide: "_1YPpCzSDkjW9CznvJ-t8ze",
          TrackRangeControls: "_23YDdZ4YDQPRZOCaKwscyh",
          RangeControl: "_3Z9hkuB9-Hmn5_8M48FE01",
          RangeMask: "Cr2MdFPZcaH4sJctAG6Gl",
          FullMask: "_3qoMxbpjei5WjkAOyagCpU",
          GhostPlayheadCtn: "_2QEZwA3q0IO62G_BU-Drbn",
          TooltipHoverSource: "_3GHTkEg295xMBJ6usRbh45",
          GhostPlayhead: "_1NsKSV4XAmywc3NCkOdJEq",
          Show: "_2rHDnc8CHv56EKtuTCKszw",
        };
      },
      chunkid: (module) => {
        module.exports = {
          thumbnailWidth: "320",
          LoadingTimeline: "_3Q5mItz1omGnn-T1D3hSx6",
          ScrollAndControlsCtn: "_1fH0OLSeGlehC7ZroCzqe9",
          GamepadMode: "_2t0z1NBG3JkzrwgVIk_P3W",
          Controls: "_2LpY_Ns-dcnT5PHQQLiXPp",
          TimelineScrollContainer: "_1q2QlUl7dhMQoUemqokVst",
          ContentContainer: "cUBJWpslwHW62w7LbnL7c",
          AbsoluteLayer: "_1pSOlypnO47E0bAGUg8vzb",
          HideOverflow: "_2hT8Akt7q9EZvx2C0IFuRR",
          RelativeLayer: "_3zkquJ_VVnjp1lWbN1tTxS",
          WithPointerEvents: "_2KJPu1BcFSB6UeyCGC1Q9l",
          RecordingDecorators: "_2lJHaMtseWGNtKzez_c-tR",
          ClipDecorators: "Xqf7VLN_JqMJeMe-gjyHj",
          GameModes: "Z9nyGreF6wFTFgKjwuTur",
          DateDecorator: "_1H35HfLIngfg1Spx8-se-m",
          BackgroundTicks: "_2Qp-oYu2NVGRgnr-MnIi2c",
          Highlights: "_1pFb1qr2LgVW_Epi61zjiM",
          RangeHighlights: "F3-cbznHCNkLM3OoAmQEK",
          Timestamps: "_3fHbNOeEXYFGE31WD5XnOr",
          RangeSelector: "_3ovQqX7ALXvRC1ekegy7Lf",
          SeekScrubber: "_3YSduxpL8KnXHYHJkjuwvv",
          PlayHead: "_3uZ7PVoL2PO3WBpvCAnoK9",
          Thumbnails: "_2ZT_p0F8NlyiN2w9uK0V-8",
          PositionLeft: "_2dupDWRctKjVqN0z4s0oyR",
          PositionRight: "_1PDRoz5nG__plPLMJYlHLW",
          Phases: "_26bhPWtFCbtjxSwlbSIltM",
          TooltipOffset: "_2dYuDsUYCHiGRqSksoc2iU",
          ThumbnailContainerOffset: "iJ-nnbMoplnO7sW4GoKZE",
          ThumbnailContents: "_1p6K1C-xCaggsPiZeYS6xb",
          Hide: "_1IGjtF0VQplGgo8JQKuoMP",
          ImageAndInfoBoxContainer: "ke2xSKYvfY9kTFlZgvXyx",
          ImageContainer: "_16W4iNZCkRy5g-01USxzcp",
          ThumbnailImage: "_15YmEFGejPCWqJsgZIwIHh",
          NoRecordedContent: "_2oSbwmF9lRWp2wTpQ2BTcr",
          InfoBoxContainer: "_39hE1ouldA7027OOjS1Mgy",
          Header: "_1RvdZuUvhMBHThLFwYwITy",
          Icon: "_3ALDTTrBPXnpHpt1yU52k3",
          DescriptionBlock: "_2WNbTb6IIvTgYqRePMVYqW",
          Title: "_2xgQkBo5Tkz0utecycIdA4",
          Description: "_3wvMa5Sd15895W_3Q3Fyfx",
          ThumbnailHitBoxPadding: "_25m6SU3qwK58gHr_sKPaUm",
          Overlay: "_1F33WqZYbfSW5lvdSEZL4I",
          TooltipContents: "_1Q9Po562tX-Vtgo2NWXIw",
          TooltipChildren: "_2T0U4DTFWI5h9xaeZagxLF",
          TooltipImage: "_1xD6jfVHbDjGwO77Svhkcv",
          TooltipImageCtn: "_1v_O5vtQFICye0ocFetnId",
          ThumbnailTooltip: "_2Z4RGgTd1bRpgdwEhO8jCU",
          Highlight: "_3a20-bJDPDlu4mazQECyx5",
          TimeDisplayContainer: "_3d8jwG8NBfQYTwkZ0OxQJp",
          Playhead: "_2n75OrROEywBwiWw2aHhTK",
          RangeLeft: "_1gO9xZ0-LFtgn8qA4tyXYr",
          RangeRight: "JDbwFLFfYMT4xQA-bQ9Ko",
          Timestamp: "_2lPBQbxG1oIaw3OCRbqSwX",
          TooltipInteractionRegion: "nbJB1LiguVOaBnJGRVnl7",
          StateDescription: "u04UCICvObTJ4FUr9RQen",
          TooltipButtons: "_2__OPNuJ5jPGfN7LuKW-Qw",
          Button: "_15dYncysqGpt47Cy4LxDu6",
          AddMarker: "_1U3RGrxKiDB_p4u4cKiixk",
          GoToClip: "_38jzRyjtRvySB27qxc3OlN",
          CreateClipButton: "_3KYRSKclWw-y1WSWZZ0NdW",
          EditMarker: "_2ho8quLzRrIUiJRPbr8lzp",
          DeleteMarker: "_113MCALzgYpL4lDc_eE542",
          GoToClipFromMarker: "_1HHxKvMUEWqDdSy1BGBnyK",
          ViewScreenshot: "Id7gML3NYais_DAVYP7LW",
          TooltipHitBox: "_2QbChk9tpXisnWlJFH0Igj",
          TooltipContainer: "_1sw-kUqdIDK2G5BlOu_Dm9",
          ImageHighlightPosition: "_2ywONE_xgamAkfBmUE67IL",
          ImageHighlightBlock: "_1BeXpXQyetKgeO2_6NuHiJ",
          TooltipRangeContainer: "Ytt19E3fOLhHsFDpTCviL",
          Duration: "_1kvsGVxJZ9tkKXwysVa5PP",
          RangeIcon: "qV2yorV1nAB0bIQrbROqm",
        };
      },
      chunkid: (module) => {
        module.exports = {
          TimelineContextMenuItem: "_1_VGcqhwscnT-kPnPb2c22",
          MenuItem: "_1wPm9-zsQlqLzb92eR77lC",
          AddUserMarker: "_3VSFddY_9-Sh1I3ByUwmD4",
          TakeScreenshot: "_13th0aVaGQhNp6eltjFYyh",
          StartEndClip: "_1eb1crSvl4J1Ie12OvhHUz",
          ViewClip: "_3YpMycJiNuGZOe9A5ddrxL",
          ClipPhase: "_3BLSZg3UyXhaQ4rkXaTvhs",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          TourPositioner: "_3SETpnYbAtvmO7w4gpOCtK",
          TourBox: "_1lcizT_Nbxsk484XzTtcFf",
          CloseButton: "_1A5Qloms_qv3D5xh052LKf",
          _: "kcjJIs0EE3MG_h_t5nCza",
          Title: "_51Xf1tIa1NCIih20Qi1Nm",
          Content: "_1iiz2Ocj1OAe9wZjdPrZSv",
          Action: "_39eWK3BcJKYP9H1X1cTdyV",
          TipCount: "_1T5ZuXrxnGb4BDtEbYTuGz",
          TourStopArrow: "_2JvQPEForHWVgljtxxAwRP",
          BackgroundAnimation: "_15yvWK6GCakW5yZ0YB66fv",
          "ItemFocusAnim-darkerGrey-nocolor": "Eu2HOvMbunn7MzCLIJ5ES",
          "ItemFocusAnim-darkerGrey": "DvP1wiF6eV9afdQaEkods",
          "ItemFocusAnim-darkGreySettings": "_2MNkLvIOgwx0GSMCjDlkL8",
          "ItemFocusAnim-darkGrey": "_2tQsBdyAzzF2_nY65OSwNm",
          "ItemFocusAnim-grey": "Qg-4WEghuaXqBRIE-lEVs",
          "ItemFocusAnim-translucent-white-10": "_18ENJxMfn40_y_8CMeuuMm",
          "ItemFocusAnim-translucent-white-20": "_1wbIEe3KnohwpAw2O4M9YP",
          "ItemFocusAnimBorder-darkGrey": "_3hC5OOIGfv0lY8ykI4qpNa",
          "ItemFocusAnim-green": "_3ZDnxVKI3Xfr_a6bvaivKR",
          focusAnimation: "_2KA789f9Y4_LCtoyqU3FM3",
          hoverAnimation: "VH09gZfzWmSxuuocDY_-n",
        };
      },
    },
  ]);
})();
