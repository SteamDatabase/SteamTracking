(() => {
  (self.webpackChunkstore = self.webpackChunkstore || []).push([
    [50970],
    {
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        let _ = 0;
        function _(_, _) {
          (0, _.useEffect)(() => {
            if (!(_ || _))
              return (
                _++,
                () => {
                  --_ == 0 && (0, _._)();
                }
              );
          }, [_, _]);
        }
        function _(_) {
          const [_, _] = (0, _.useState)(!1);
          (0, _.useEffect)(() => {
            const _ = window.setTimeout(() => _(!0), _);
            return () => window.clearTimeout(_);
          }, [_]),
            _(_);
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
        });
        var _ = {};
        __webpack_require__._(_),
          __webpack_require__._(_, {
            _: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = 0,
          _ = 1,
          _ = 2,
          _ = 3;
        function _(_) {
          return "unknown ENewsRecommendationState ( " + _ + " )";
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
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
                    gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    name: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    type: {
                      _: 3,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    url: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    associated_apps: {
                      _: 5,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    poll_interval: {
                      _: 6,
                      _: 300,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    kv_description: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    kv_filter: {
                      _: 8,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    publish_to_clan_account_id: {
                      _: 9,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    language: {
                      _: 10,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_error: {
                      _: 11,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_update: {
                      _: 12,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    last_checked: {
                      _: 13,
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
            return "CNewsFeedDef";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, [11], null);
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
                    news_feed_gid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    url: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    author: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    rtime_date: {
                      _: 6,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    contents: {
                      _: 7,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    commited: {
                      _: 8,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    deleted: {
                      _: 9,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    tags: {
                      _: 10,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    appids: {
                      _: 11,
                      _: !0,
                      _: !0,
                      _: _._.readUint32,
                      pbr: _._.readPackedUint32,
                      _: _._.writeRepeatedUint32,
                    },
                    recommendation_state: {
                      _: 12,
                      _: _._.readEnum,
                      _: _._.writeEnum,
                    },
                    received_compensation: {
                      _: 13,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    received_for_free: {
                      _: 14,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    blurb: {
                      _: 15,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    event_subtitle: {
                      _: 16,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    event_summary: {
                      _: 17,
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
            return "CNewsFeedPostDef";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.content || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    content: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    preserve_newlines: {
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
            return "CNews_ConvertHTMLToBBCode_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.converted_content || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    converted_content: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    found_html: {
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
            return "CNews_ConvertHTMLToBBCode_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rss_message || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rss_message: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    unique_id: {
                      _: 2,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    title: {
                      _: 3,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    desc: {
                      _: 4,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    jsondata: {
                      _: 5,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    post: {
                      _: 6,
                      _: _,
                    },
                    valid_post: {
                      _: 7,
                      _: _._.readBool,
                      _: _._.writeBool,
                    },
                    post_error_msg: {
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
            return "CNewsPartnerEventPreview";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rss_url || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    rss_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    lang: {
                      _: 2,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    clan_account_id: {
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
            return "CNews_PreviewPartnerEvents_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.rss_url || _._(_._()),
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
                    rss_url: {
                      _: 1,
                      _: _._.readString,
                      _: _._.writeString,
                    },
                    results: {
                      _: 2,
                      _: _,
                      _: !0,
                      _: !0,
                    },
                    error_msg: {
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
            return "CNews_PreviewPartnerEvents_Response";
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
                  },
                }),
              _.sm_m
            );
          }
          static MBF() {
            return _.sm_mbf || (_.sm_mbf = _._(_._())), _.sm_mbf;
          }
          toObject(_ = !1) {
            return _.toObject(_, this);
          }
          static toObject(_, _) {
            return _._(_._(), _, _);
          }
          static fromObject(_) {
            return _._(_._(), _);
          }
          static deserializeBinary(_) {
            let _ = new (_().BinaryReader)(_),
              _ = new _();
            return _.deserializeBinaryFromReader(_, _);
          }
          static deserializeBinaryFromReader(_, _) {
            return _._(_.MBF(), _, _);
          }
          serializeBinary() {
            var _ = new (_().BinaryWriter)();
            return _.serializeBinaryToWriter(this, _), _.getResultBuffer();
          }
          static serializeBinaryToWriter(_, _) {
            _._(_._(), _, _);
          }
          serializeBase64String() {
            var _ = new (_().BinaryWriter)();
            return (
              _.serializeBinaryToWriter(this, _), _.getResultBase64String()
            );
          }
          getClassName() {
            return "CNews_GetNewsFeedByRepublishClan_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.feeds || _._(_._()),
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
                    feeds: {
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
            return "CNews_GetNewsFeedByRepublishClan_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.post || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    post: {
                      _: 1,
                      _: _,
                    },
                    draft: {
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
            return "CNews_PublishPartnerEvent_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_event_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    clan_event_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    news_post_gid: {
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
            return "CNews_PublishPartnerEvent_Response";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.news_feed_gid || _._(_._()),
              _.Message.initialize(this, _, 0, -1, void 0, null);
          }
          static sm_m;
          static sm_mbf;
          static M() {
            return (
              _.sm_m ||
                (_.sm_m = {
                  proto: _,
                  fields: {
                    news_feed_gid: {
                      _: 1,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    start_index: {
                      _: 2,
                      _: 0,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    amount: {
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
            return "CNews_GetBatchPublishedPartnerEvent_Request";
          }
        }
        class _ extends _.Message {
          static ImplementsStaticInterface() {}
          constructor(_ = null) {
            super(),
              _.prototype.clan_account_id || _._(_._()),
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
                    clan_account_id: {
                      _: 1,
                      _: _._.readUint32,
                      _: _._.writeUint32,
                    },
                    news_feed_gid: {
                      _: 2,
                      _: _._.readFixed64String,
                      _: _._.writeFixed64String,
                    },
                    clan_event_gid: {
                      _: 3,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                    news_post_gid: {
                      _: 4,
                      _: !0,
                      _: !0,
                      _: _._.readFixed64String,
                      pbr: _._.readPackedFixed64String,
                      _: _._.writeRepeatedFixed64String,
                    },
                    news_url: {
                      _: 5,
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
            return "CNews_GetBatchPublishedPartnerEvent_Response";
          }
        }
        var _;
        ((_) => {
          function _(_, _, _) {
            return _.SendMsg(
              "News.ConvertHTMLToBBCode#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 0,
                eWebAPIKeyRequirement: 1,
              },
            );
          }
          _.ConvertHTMLToBBCode = _;
          function _(_, _, _) {
            return _.SendMsg(
              "News.PreviewPartnerEvents#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.PreviewPartnerEvents = _;
          function _(_, _, _) {
            return _.SendMsg(
              "News.GetNewsFeedByRepublishClan#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetNewsFeedByRepublishClan = _;
          function _(_, _, _) {
            return _.SendMsg(
              "News.PublishPartnerEvent#1",
              (0, _._)(_, _, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          }
          _.PublishPartnerEvent = _;
          function _(_, _, _) {
            return _.SendMsg(
              "News.GetBatchPublishedPartnerEvent#1",
              (0, _._)(_, _, _),
              _,
              {
                bConstMethod: !0,
                ePrivilege: 1,
              },
            );
          }
          _.GetBatchPublishedPartnerEvent = _;
        })(_ || (_ = {}));
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
            return this.BIsValid()
              ? this.seconds_until_drawing !== void 0 &&
                this.seconds_until_drawing >= 0
                ? !0
                : this.winner_count !== void 0 && this.winner_count > 0
              : !1;
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
            let _ = this.m_mapNextDrawChangeCallback.get(_);
            return (
              _ ||
                ((_ = new _._()), this.m_mapNextDrawChangeCallback.set(_, _)),
              _
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
              _ = {
                origin: self.origin,
              };
            const _ = await _().get(_, {
                params: _,
              }),
              _ = (0, _._)(() => {
                let _ = this.m_mapGiveawayIDToNextDrawInfo.get(_);
                if (
                  (_ ||
                    ((_ = new _()),
                    this.m_mapGiveawayIDToNextDrawInfo.set(_, _)),
                  this.CopyToGiveaway(_.data, _),
                  _ !== void 0)
                ) {
                  const _ = this.GetKey(_, _);
                  let _ = this.m_mapGiveawayIDAndInstanceToNextDrawInfo.get(_);
                  _ ||
                    ((_ = new _()),
                    this.m_mapGiveawayIDAndInstanceToNextDrawInfo.set(_, _)),
                    this.CopyToGiveaway(_.data, _);
                }
                return _;
              });
            return this.GetNextDrawChangeCallback(_).Dispatch(_), _;
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
                _.seconds_until_drawing !== void 0 &&
                _.seconds_until_drawing <= 0 &&
                _.winner_count == 0
                  ? 60 * 1e3
                  : 5 * 1e3;
              this.m_intervalID = window.setInterval(_, _);
            }
          }
          SetupCountDown(_, _) {
            _ !== void 0 &&
              _ > 0 &&
              (this.m_intervalCountDownID = window.setInterval(_, 1e3));
          }
        };
        _([_._], _.prototype, "ClearRefreshInterval", 1),
          _([_._], _.prototype, "ClearCountDown", 1),
          _([_._], _.prototype, "SetupRefreshDataInterval", 1),
          _([_._], _.prototype, "SetupCountDown", 1);
        let _ = _;
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          !_ ||
            _.seconds_until_drawing === void 0 ||
            ((_.seconds_until_drawing -= 1),
            _.seconds_until_drawing == 0 && _.ClearCountDown());
        }
        function _(_, _) {
          const _ = _.Get().GetInfoByInstance(_, _.m_myInstanceNumber);
          _ &&
            _.BIsValid() &&
            _.seconds_until_drawing !== void 0 &&
            _.seconds_until_drawing <= 0 &&
            !_.closed &&
            (_.ClearCountDown(),
            _.Get()
              .ReloadGiveaway(_, _.m_myInstanceNumber)
              .then((_) => {
                _ && _.SetupCountDown(_.seconds_until_drawing, () => _(_, _));
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
                  _ &&
                    (_.SetupRefreshDataInterval(_, () => _(_, _)),
                    _.SetupCountDown(_.seconds_until_drawing, () => _(_, _)),
                    _());
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
          const _ = (0, _._)(),
            _ = _.useContext(_);
          return (0, _._)({
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
          return _.useContext(_);
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
          return (_ ??= (0, _._)(_));
        }
        function _(_, _) {
          let _ = new _._(_);
          const _ = _?.public_data,
            _ = _?.private_data;
          return (
            (_.m_bInitialized = !!_),
            (_.m_ePersonaState = _?.persona_state ?? _.cU3),
            (_.m_strAvatarHash = _?.sha_digest_avatar
              ? (0, _._)(_.sha_digest_avatar)
              : _._),
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return "unknown EMsg ( " + _ + " )";
        }
        function _(_) {
          return "unknown EClientPersonaStateFlag ( " + _ + " )";
        }
        function _(_) {
          return "unknown EMsgClanAccountFlags ( " + _ + " )";
        }
        function _(_) {
          return "unknown ESteamReviewScore ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECodecUsagePlatform ( " + _ + " )";
        }
        function _(_) {
          return "unknown ECodecUsageReason ( " + _ + " )";
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
        class _ {
          m_clanAccountID;
          m_clanSteamID;
          m_strRSSFeedURL = void 0;
          m_strRSSGID = void 0;
          m_rtimeRSSLastChecked = void 0;
          m_nPollIntervalSeconds = void 0;
          m_eRSSFeedLanguage = void 0;
          m_eCuratorLanguage = void 0;
          m_mapURLToPosted = new Map();
          constructor(_) {
            (0, _._)(this),
              (this.m_clanAccountID = _.clanid),
              (this.m_clanSteamID = _._.InitFromClanID(this.m_clanAccountID)),
              (this.m_strRSSFeedURL = _.rss_feed_url),
              (this.m_strRSSGID = _.rss_feed_gid),
              (this.m_eRSSFeedLanguage = _.rss_feed_language),
              (this.m_rtimeRSSLastChecked = _.rss_feed_last_checked),
              (this.m_nPollIntervalSeconds = _.poll_interval),
              (this.m_eCuratorLanguage = _.curation_language);
          }
          GetFeedLanguageHandleUnset() {
            return this.m_eRSSFeedLanguage == _.xPp
              ? this.m_eCuratorLanguage == _.xPp
                ? _.Bhc
                : this.m_eCuratorLanguage
              : this.m_eRSSFeedLanguage;
          }
          GetCuratorLanguage() {
            return this.m_eCuratorLanguage == _.xPp
              ? _.Bhc
              : this.m_eCuratorLanguage;
          }
          BHasSavedRSSURL() {
            return !!this.m_strRSSFeedURL;
          }
          GetRSSUrl() {
            return this.m_strRSSFeedURL ? this.m_strRSSFeedURL : "";
          }
          GetRSSLastRtimeChecked() {
            return this.m_rtimeRSSLastChecked;
          }
          GetClanSteamID() {
            return this.m_clanSteamID;
          }
          GetClanAccountID() {
            return this.m_clanAccountID;
          }
          BHasSetupFeed(_) {
            return !!this.m_strRSSGID && this.m_strRSSFeedURL === _;
          }
          BIsAutomationEnabled() {
            return this.m_nPollIntervalSeconds > 0;
          }
          BHasFeedGID() {
            return !!this.m_strRSSGID;
          }
          async PreviewPartnerEventsFromRSSFeed(_) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "PreviewPartnerEventsFromRSSFeed: User not logged in",
                ),
                null
              );
            const _ = _._.Init(_._);
            _.Body().set_rss_url(_),
              _.Body().set_lang(this.GetFeedLanguageHandleUnset()),
              _.Body().set_clan_account_id(this.GetClanAccountID());
            let _ = await _._.PreviewPartnerEvents(
              _.Get().GetCuratorTransport(),
              _,
            );
            return (
              _.GetEResult() != _._ &&
                console.error(
                  "PreviewPartnerEventsFromRSSFeed error: " +
                    _.GetEMsg() +
                    " " +
                    _.GetEResult(),
                ),
              _
            );
          }
          async FetchPublishedEvents(_ = 100) {
            if (!this.BIsLoggedIn())
              return (
                console.error("FetchPublishedEvents: User not logged in"), null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "FetchPublishedEvents: Need to create a news feed first",
                ),
                null
              );
            const _ = _._.Init(_._);
            _.Body().set_news_feed_gid(this.m_strRSSGID),
              _.Body().set_amount(_);
            let _ = await _._.GetBatchPublishedPartnerEvent(
              _.Get().GetCuratorTransport(),
              _,
            );
            return (
              _.GetEResult() != _._
                ? console.error(
                    "FetchPublishedEvents error: EMsg:" +
                      _(_.GetEMsg()) +
                      " EResult:" +
                      _.GetEResult() +
                      " msg:" +
                      _.Hdr().error_message(),
                  )
                : (0, _._)(() => {
                    for (let _ = 0; _ < _.Body().clan_event_gid().length; ++_) {
                      let _ = {
                        url: _.Body().news_url()[_],
                        clan_event_gid: _.Body().clan_event_gid()[_],
                        news_post_gid: _.Body().news_post_gid()[_],
                      };
                      this.m_mapURLToPosted.set(_.url, _);
                    }
                  }),
              _
            );
          }
          MapArticleURLToClanEventGID(_) {
            let _ = this.m_mapURLToPosted.get(_);
            if (_) return _.clan_event_gid;
          }
          BIsLoggedIn() {
            return _._.logged_in;
          }
          async CreateOrUpdateRSSNewFeed(_, _ = 0) {
            let _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("gid", this.m_strRSSGID),
              _.append("lang", "" + this.GetCuratorLanguage()),
              _.append("rss_url", _),
              _.append("polling_interval", "" + _);
            const _ =
              _._.STORE_BASE_URL +
              "curator/" +
              this.m_clanAccountID +
              "/admin/ajaxmanagerssfeed";
            let _ = await _().post(_, _, {
              withCredentials: !0,
            });
            return (
              _.data.success == _._ &&
                (0, _._)(() => {
                  (this.m_strRSSGID = _.data.gid),
                    (this.m_strRSSFeedURL = _),
                    (this.m_nPollIntervalSeconds = _);
                }),
              _.data
            );
          }
          async UpdateAutomation(_) {
            return this.CreateOrUpdateRSSNewFeed(
              this.m_strRSSFeedURL,
              _ ? 300 : 0,
            );
          }
          async CheckForNewUpdate() {
            if (this.m_strRSSGID) {
              let _ = new FormData();
              _.append("sessionid", (0, _._)()),
                _.append("gid", this.m_strRSSGID);
              const _ =
                _._.STORE_BASE_URL +
                "curator/" +
                this.m_clanAccountID +
                "/admin/ajaxcheckfornews";
              await _().post(_, _, {
                withCredentials: !0,
              });
            }
          }
          async CreatePost(_, _) {
            if (!this.BIsLoggedIn())
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: User not logged in",
                ),
                null
              );
            if (!this.m_strRSSGID)
              return (
                console.error(
                  "CreatePartnerFromPreviewPost: Need to create a news feed first",
                ),
                null
              );
            let _ = new _._();
            _.set_gid(_.post.gid),
              _.set_news_feed_gid(this.m_strRSSGID),
              _.set_title(_.post.title),
              _.set_url(_.post.url),
              _.set_author(_.post.author),
              _.set_rtime_date(_.post.rtime_date),
              _.set_contents(_.post.contents),
              _.set_commited(_.post.commited),
              _.set_deleted(_.post.deleted),
              _.set_tags(_.post.tags),
              _.set_appids(_.post.appids),
              _.set_recommendation_state(_.post.recommendation_state),
              _.set_received_for_free(_.post.received_for_free),
              _.set_received_compensation(_.post.received_compensation),
              _.set_blurb(_.post.blurb);
            const _ = _._.Init(_._);
            _.Body().set_post(_), _.Body().set_draft(_);
            let _ = await _._.PublishPartnerEvent(
              _.Get().GetCuratorTransport(),
              _,
            );
            return (
              _.GetEResult() != _._
                ? console.error(
                    "CreatePost error: " + _.GetEMsg() + " " + _.GetEResult(),
                  )
                : ((0, _._)(() => {
                    let _ = {
                      url: _.post.url,
                      clan_event_gid: _.Body().clan_event_gid(),
                      news_post_gid: _.Body().news_post_gid(),
                    };
                    this.m_mapURLToPosted.set(_.post.url, _);
                  }),
                  _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                    this.m_clanSteamID,
                    _.Body().clan_event_gid(),
                    0,
                  )),
              _
            );
          }
        }
        _([_._], _.prototype, "m_strRSSFeedURL", 2),
          _([_._], _.prototype, "m_strRSSGID", 2),
          _([_._], _.prototype, "m_rtimeRSSLastChecked", 2),
          _([_._], _.prototype, "m_nPollIntervalSeconds", 2),
          _([_._], _.prototype, "m_eRSSFeedLanguage", 2),
          _([_._], _.prototype, "m_eCuratorLanguage", 2),
          _([_._], _.prototype, "m_mapURLToPosted", 2);
        const _ = class _ {
          constructor() {
            (0, _._)(this);
          }
          static s_CuratorAdminStore;
          m_transport;
          m_mapClanAccountToAdmin = new Map();
          m_defaultAdmin = void 0;
          m_mapClanToEventRSSStats = new Map();
          m_setPendingClanInfo = new Set();
          m_PendingClanInfoPromise;
          m_PendingClanInfoResolve;
          m_cClanInfoRequestsInFlight = 0;
          GetCuratorTransport() {
            return (
              (0, _._)(
                this.m_transport,
                "Expects Transpoate to be initialized but it is now",
              ),
              this.m_transport
            );
          }
          GetDefaultAdmin() {
            return this.m_defaultAdmin;
          }
          GetRSSAdminStats(_) {
            return this.m_mapClanToEventRSSStats.get(_);
          }
          static Get() {
            return (
              _.s_CuratorAdminStore ||
                ((_.s_CuratorAdminStore = new _()),
                _.s_CuratorAdminStore.Init()),
              _.s_CuratorAdminStore
            );
          }
          Init() {
            let _ = (0, _._)("curatoradmin", "application_config");
            this.ValidateStoreDefault(_) &&
              ((this.m_defaultAdmin = new _(_)),
              this.m_mapClanAccountToAdmin.set(_.clanid, this.m_defaultAdmin)),
              this.ValidateWebAPI(_) &&
                (this.m_transport = (0, _._)(
                  new _._(_._.WEBAPI_BASE_URL, _.webapi_token),
                ).GetServiceTransport());
          }
          ValidateStoreDefault(_) {
            const _ = _;
            return _ && typeof _ == "object" && typeof _.clanid == "number";
          }
          ValidateWebAPI(_) {
            const _ = _;
            return _ && typeof _.webapi_token == "string";
          }
          BIsLoggedIn() {
            return _._.logged_in;
          }
          BHavePendingInfoRequests() {
            return (
              this.m_setPendingClanInfo.size > 0 ||
              this.m_cClanInfoRequestsInFlight > 0
            );
          }
          BIsLoadingClanID(_) {
            return this.m_setPendingClanInfo.has(_);
          }
          BHasClanIDLoaded(_) {
            return this.m_mapClanAccountToAdmin.has(_);
          }
          GetRSSAdminForClanAccountID(_) {
            return this.m_mapClanAccountToAdmin.get(_);
          }
          async QueueCuratorAdminInfoLoad(_) {
            return _
              ? this.m_mapClanAccountToAdmin.has(_)
                ? Promise.resolve()
                : (this.m_setPendingClanInfo.size ||
                    ((this.m_PendingClanInfoPromise = new Promise(
                      (_) => (this.m_PendingClanInfoResolve = _),
                    )),
                    window.setTimeout(() => this.FlushPendingClanInfo(), 25)),
                  this.m_setPendingClanInfo.add(_),
                  this.m_PendingClanInfoPromise)
              : ((0, _._)(!_, "unexpected clanid of zero or undefined: " + _),
                Promise.resolve());
          }
          async FlushPendingClanInfo() {
            const _ = this.m_PendingClanInfoResolve,
              _ = Array.from(this.m_setPendingClanInfo);
            (this.m_PendingClanInfoPromise = void 0),
              (this.m_PendingClanInfoResolve = void 0),
              this.m_setPendingClanInfo.clear(),
              await this.LoadBatchedClanRSSAdminInfo(_),
              _();
          }
          EnsureClanInfoLoaded(_) {
            const _ = _.filter(
              (_) =>
                !this.m_mapClanAccountToAdmin.has(_) &&
                this.m_setPendingClanInfo.has(_),
            );
            return (
              _.forEach((_) => this.QueueCuratorAdminInfoLoad(_)),
              _.length > 0 && this.m_PendingClanInfoPromise
                ? this.m_PendingClanInfoPromise
                : Promise.resolve()
            );
          }
          async LoadBatchedClanRSSAdminInfo(_) {
            this.m_cClanInfoRequestsInFlight++;
            let _ = _.filter((_) => !this.m_mapClanAccountToAdmin.has(_));
            const _ = 50;
            for (; _.length > 0; ) {
              const _ = Math.min(_, _.length),
                _ = _.slice(0, _);
              _ = _.slice(_);
              try {
                const _ =
                    _._.STORE_BASE_URL + "events_admin/ajaxgetrssadmininfo",
                  _ = {
                    clanids: _,
                  },
                  _ = await _().get(_, {
                    params: _,
                    withCredentials: !0,
                  });
                if (
                  _ &&
                  _.data &&
                  _.data.success == _._ &&
                  _.data.rss_admin_infos &&
                  Array.isArray(_.data.rss_admin_infos)
                )
                  (0, _._)(() => {
                    _.data.rss_admin_infos.forEach((_) => {
                      this.m_mapClanAccountToAdmin.set(_.clanid, new _(_));
                    }),
                      _.data.rss_event_stats.forEach((_) => {
                        this.m_mapClanToEventRSSStats.set(_.clan_account_id, _);
                      });
                  });
                else {
                  const _ = (0, _._)(_.data || {});
                  console.error(
                    "LoadBatchedClanRSSAdminInfo error:" + _.strErrorMsg,
                    _,
                  );
                }
              } catch (_) {
                const _ = (0, _._)(_);
                console.error(
                  "LoadBatchedClanRSSAdminInfo catched error:" + _.strErrorMsg,
                  _,
                );
              }
            }
            this.m_cClanInfoRequestsInFlight--;
          }
        };
        _([_._.shallow], _.prototype, "m_mapClanAccountToAdmin", 2),
          _([_._.shallow], _.prototype, "m_mapClanToEventRSSStats", 2);
        let _ = _;
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports, {
          _: () => _,
          _: () => _,
        });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ {
          static s_CuratorStore;
          m_mapClanToRecommendation = new Map();
          static Get() {
            return (
              _.s_CuratorStore ||
                ((_.s_CuratorStore = new _()),
                _.s_CuratorStore.Init(),
                (window.g_CuratorRecommendationStore = _.s_CuratorStore)),
              _.s_CuratorStore
            );
          }
          Init() {}
          GetReviewForApp(_, _) {
            if (this.m_mapClanToRecommendation.has(_.GetAccountID()))
              return this.m_mapClanToRecommendation
                .get(_.GetAccountID())
                .get(_);
          }
          BHasReviewForApp(_, _) {
            return !!this.GetReviewForApp(_, _);
          }
          BHasReviewForAppByClanAccount(_, _) {
            let _ = _._.InitFromClanID(_);
            return !!this.GetReviewForApp(_, _);
          }
          async LoadAppRecommendation(_, _) {
            this.m_mapClanToRecommendation.has(_.GetAccountID()) ||
              this.m_mapClanToRecommendation.set(_.GetAccountID(), new Map());
            let _ = this.m_mapClanToRecommendation.get(_.GetAccountID());
            const _ = [];
            if (
              (_.forEach((_) => {
                _.has(_) || _.push(_);
              }),
              _.length > 0)
            ) {
              const _ =
                  _._.STORE_BASE_URL +
                  "curator/" +
                  _.GetAccountID() +
                  "/admin/ajaxgetrecbyapps",
                _ = await _().get(_, {
                  params: {
                    appids: _,
                    _: _._.COUNTRY || "US",
                    _: _._.LANGUAGE,
                  },
                }),
                _ = _ && _.data;
              _ &&
                _.rec_app &&
                _.rec_app.forEach((_) => {
                  _.set(Number(_.appid), _);
                });
            }
          }
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
        let _ = class extends _.Component {
          state = {
            strRssURL: _._.Get().GetDefaultAdmin().GetRSSUrl(),
          };
          m_Admin = _._.Get().GetDefaultAdmin();
          OnChangeActualRSSURL(_) {
            this.setState({
              strRssURL: _.target.value,
            });
          }
          OnCreateOrSaveFeed(_) {
            _.preventDefault(),
              (0, _._)(
                (0, _.jsx)(_, {
                  strRSSUrl: this.state.strRssURL,
                  admin: this.m_Admin,
                }),
                (0, _._)(_),
              );
          }
          OnRevert(_) {
            _.preventDefault(),
              this.setState({
                strRssURL: this.m_Admin.GetRSSUrl(),
              });
          }
          render() {
            let _ = this.state.strRssURL === this.m_Admin.GetRSSUrl();
            if (window.Prototype !== void 0)
              return window.location.reload(), null;
            const _ = (0, _.x6o)(
                (0, _.LgB)(this.m_Admin.GetFeedLanguageHandleUnset()),
              ),
              _ = _._.Get().GetDefaultAdmin();
            return (0, _.jsxs)("div", {
              className: (0, _._)(_.Ctn),
              children: [
                (0, _.jsxs)("div", {
                  className: "titleframe",
                  children: [
                    (0, _.jsx)("h4", {
                      children: (0, _._)("#CuratorAdmin_RSSFeed_title"),
                    }),
                    (0, _.jsx)("p", {
                      className: "subtitle",
                      children: (0, _._)("#CuratorAdmin_RSSFeed_desc"),
                    }),
                    (0, _.jsx)("p", {
                      children: (0, _._)(
                        "#CuratorAdmin_RSSFeed_doc_link",
                        (0, _.jsx)("a", {
                          href: "https://partner.steamgames.com/doc/store/news/rss",
                          target: "_blank",
                          children: (0, _._)(
                            "#CuratorAdmin_RSSFeed_doc_link_text",
                          ),
                        }),
                      ),
                    }),
                    (0, _.jsx)("p", {
                      className: _.DashboardBtn,
                      children: (0, _.jsx)(_._, {
                        href:
                          _._.COMMUNITY_BASE_URL +
                          "gid/" +
                          this.m_Admin.GetClanSteamID().ConvertTo64BitString() +
                          "/partnerevents/",
                        className: (0, _._)(_().Button, _().Primary),
                        children: (0, _._)("#RSSManager_EventDashBoard"),
                      }),
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: "darkframe",
                  children: [
                    (0, _.jsxs)("div", {
                      className: _.LanguageRow,
                      children: [
                        (0, _.jsx)("span", {
                          className: _.LanguageTitle,
                          children: (0, _._)("#CuratorAdmin_RSSFeed_lang_only"),
                        }),
                        (0, _.jsx)("span", {
                          className: _.LanguageSet,
                          children: _,
                        }),
                        (0, _.jsx)("a", {
                          href:
                            _._.COMMUNITY_BASE_URL +
                            "gid/" +
                            this.m_Admin
                              .GetClanSteamID()
                              .ConvertTo64BitString() +
                            "/edit ",
                          target: "_blank",
                          className: (0, _._)(_().Button, _.PreviewBtn),
                          children: (0, _._)(
                            "#CuratorAdmin_RSSFeed_edit_language",
                          ),
                        }),
                      ],
                    }),
                    this.m_Admin.GetFeedLanguageHandleUnset() !=
                      this.m_Admin.GetCuratorLanguage() &&
                      (0, _.jsx)("div", {
                        className: (0, _._)(
                          _.LanguageRow,
                          _().WarningIconLayout,
                        ),
                        children: (0, _.jsx)("span", {
                          className: _.LanguageTitle,
                          children: (0, _._)(
                            "#CuratorAdmin_Curator_lang_only",
                            (0, _._)(
                              "#Language_" +
                                (0, _.LgB)(this.m_Admin.GetCuratorLanguage()),
                            ),
                            _,
                          ),
                        }),
                      }),
                    (0, _.jsxs)("div", {
                      className: (0, _._)(
                        _().FlexRowContainer,
                        _.UrlSettingCtn,
                      ),
                      children: [
                        (0, _.jsx)(_._, {
                          className: _.RssInpu,
                          type: "text",
                          name: "link_url",
                          _: "link_url",
                          value: this.state.strRssURL,
                          label: (0, _._)("#CuratorAdmin_RSSFeed"),
                          placeholder: (0, _._)(
                            "#CuratorAdmin_RSSFeed_placeholder",
                          ),
                          onChange: this.OnChangeActualRSSURL,
                          mustBeURL: !0,
                        }),
                        (0, _.jsx)("a", {
                          className: "btn_green_white_innerfade btn_medium",
                          onClick: this.OnCreateOrSaveFeed,
                          children: (0, _.jsx)("span", {
                            children: (0, _._)(
                              _ ? "#Button_Saved" : "#Button_Save",
                            ),
                          }),
                        }),
                        !_ &&
                          (0, _.jsx)("a", {
                            onClick: this.OnRevert,
                            className: "btn_grey_white_innerfade btn_medium",
                            children: (0, _._)("#Button_Revert"),
                          }),
                      ],
                    }),
                    (0, _.jsx)(_, {
                      admin: _,
                    }),
                    (0, _.jsx)("br", {}),
                    (0, _.jsx)(_, {
                      strRssURL: this.state.strRssURL,
                      admin: _,
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnChangeActualRSSURL", 1),
          _([_._], _.prototype, "OnCreateOrSaveFeed", 1),
          _([_._], _.prototype, "OnRevert", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          state = {
            strParseRssURL: this.props.strRssURL,
            bLoadingPreview: !1,
          };
          m_cancelSignal = _().CancelToken.source();
          componentDidMount() {
            const { admin: _ } = this.props;
            _.BHasFeedGID() &&
              _.BHasSavedRSSURL() &&
              _.GetRSSUrl() == this.props.strRssURL &&
              this.OnLoadPreview();
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "PreviewRSSViewAndControl component unmounted",
            );
          }
          RenderPreviews() {
            let _ = this.props.admin,
              _ = new Array();
            if (this.state.previews) {
              let _ = this.state.previews;
              (_ = _.sort((_, _) => {
                let _ = _.MapArticleURLToClanEventGID(_.post.url),
                  _ = _.MapArticleURLToClanEventGID(_.post.url),
                  _ = _ ? _._.GetClanEventModel(_) : null,
                  _ = _ ? _._.GetClanEventModel(_) : null;
                return _ && _
                  ? _.postTime - _.postTime
                  : _
                    ? -1
                    : _
                      ? 1
                      : _.post.rtime_date - _.post.rtime_date;
              })),
                _.forEach((_) => {
                  _.push(
                    (0, _.jsx)(
                      _,
                      {
                        newsData: _,
                        admin: _,
                        clanSteamID: _.GetClanSteamID(),
                        fnGetRSSUrl: this.GetRSSPreviewURL,
                      },
                      "id: " + _.unique_id,
                    ),
                  );
                });
            }
            return _;
          }
          GetRSSPreviewURL() {
            return this.state.strParseRssURL;
          }
          OnLoadPreview() {
            this.setState(
              {
                bLoadingPreview: !0,
                previews: void 0,
                strPreviewURL: this.props.strRssURL,
                strPreviewErrorMsg: void 0,
              },
              this.DoLoadPreview,
            );
          }
          async DoLoadPreview() {
            let _ = this.props.admin,
              _ = await _.PreviewPartnerEventsFromRSSFeed(this.props.strRssURL);
            if (_ && _.GetEResult() == _._) {
              let _ = _.Body().toObject();
              this.setState(
                {
                  strParseRssURL: _.rss_url,
                  bLoadingPreview: !0,
                },
                async () => {
                  await _.FetchPublishedEvents(Math.max(100, _.results.length));
                  let _ = new Array(),
                    _ = new Array();
                  if (
                    (_.results.forEach((_) => {
                      let _ = _.MapArticleURLToClanEventGID(_.post.url);
                      _ && _.push(_),
                        _.post.appids &&
                          _.post.appids.length === 1 &&
                          _.post.recommendation_state !== _._._ &&
                          _.push(_.post.appids[0]);
                    }),
                    _.length > 0 &&
                      (await _._.LoadBatchPartnerEventsByEventGIDsOrAnnouncementGIDs(
                        _,
                        null,
                        this.m_cancelSignal,
                      )),
                    _.length > 0)
                  ) {
                    const _ = _.GetClanSteamID();
                    await _.Get().LoadAppRecommendation(_, _);
                  }
                  this.setState({
                    previews: _.results,
                    bLoadingPreview: void 0,
                  });
                },
              );
            } else
              this.setState({
                bLoadingPreview: void 0,
                strPreviewErrorMsg: (0, _._)(
                  "#Error_Description",
                  _.GetEResult(),
                  _.Hdr().error_message(),
                ),
              });
          }
          render() {
            const _ = this.RenderPreviews();
            let _ = this.props.admin;
            return (0, _.jsxs)("div", {
              children: [
                !this.state.bLoadingPreview &&
                  this.state.strPreviewURL !== this.props.strRssURL &&
                  (0, _.jsx)("div", {
                    className: _.PreviewListBtn,
                    children: (0, _.jsx)(_._, {
                      disabled: !_._.validateUrl(this.props.strRssURL),
                      onClick: this.OnLoadPreview,
                      children: (0, _._)("#CuratorAdmin_RSSFeed_preview"),
                    }),
                  }),
                this.state.bLoadingPreview &&
                  (0, _.jsx)(_._, {
                    string: (0, _._)("#Loading"),
                    size: "medium",
                    position: "center",
                  }),
                this.state.strPreviewErrorMsg &&
                  (0, _.jsx)("div", {
                    className: _().ErrorMsg,
                    children: this.state.strPreviewErrorMsg,
                  }),
                _.length > 0 &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("p", {
                        children: (0, _._)(
                          "#RSSManager_PreviewInfo",
                          this.state.strPreviewURL,
                        ),
                      }),
                      (0, _.jsx)("div", {
                        className: _.PreviewListCtn,
                        children: _,
                      }),
                      (0, _.jsx)("p", {
                        className: _.DashboardBtn,
                        children: (0, _.jsx)(_._, {
                          href:
                            _._.COMMUNITY_BASE_URL +
                            "gid/" +
                            _.GetClanSteamID().ConvertTo64BitString() +
                            "/partnerevents/",
                          className: (0, _._)(_().Button, _().Primary),
                          children: (0, _._)("#RSSManager_EventDashBoard"),
                        }),
                      }),
                    ],
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "GetRSSPreviewURL", 1),
          _([_._], _.prototype, "OnLoadPreview", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          state = {};
          OnToggleChannelAutomation(_) {
            _
              ? (this.setState({
                  strErrorMessage: void 0,
                }),
                (0, _._)(
                  (0, _.jsx)(_, {
                    strRSSUrl: this.props.admin.GetRSSUrl(),
                    admin: this.props.admin,
                    bActivatePooling: !0,
                  }),
                  window,
                ))
              : this.setState(
                  {
                    strErrorMessage: void 0,
                    strReasonWaiting: (0, _._)("#Saving"),
                  },
                  this.BDisableAutomation,
                );
          }
          async BDisableAutomation() {
            this.props.admin
              .UpdateAutomation(!1)
              .catch(() =>
                this.setState({
                  strErrorMessage: (0, _._)(
                    "#RSSManager_Status_Automation_DisableFailed",
                  ),
                }),
              )
              .finally(() =>
                this.setState({
                  strReasonWaiting: void 0,
                }),
              );
          }
          async OnQueueScan(_) {
            this.setState({
              strReasonWaiting: (0, _._)("#CuratorAdmin_RSSFeed_scannow"),
            }),
              this.props.admin
                .CheckForNewUpdate()
                .then(() =>
                  (0, _._)(
                    (0, _.jsx)(_._, {
                      strTitle: (0, _._)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, _._)("#CuratorAdmin_RSSFeed_queued"),
                    }),
                    (0, _._)(_),
                  ),
                )
                .catch((_) =>
                  (0, _._)(
                    (0, _.jsx)(_._, {
                      strTitle: (0, _._)("#CuratorAdmin_RSSFeed_scannow"),
                      strDescription: (0, _._)(_).strErrorMsg,
                    }),
                    (0, _._)(_),
                  ),
                )
                .finally(() =>
                  this.setState({
                    strReasonWaiting: void 0,
                  }),
                );
          }
          render() {
            return this.props.admin.BHasSavedRSSURL()
              ? (0, _.jsxs)("div", {
                  children: [
                    !!this.state.strReasonWaiting &&
                      (0, _.jsx)(_._, {
                        size: "medium",
                        string: this.state.strReasonWaiting,
                      }),
                    !!this.state.strErrorMessage &&
                      (0, _.jsx)("div", {
                        className: _.Error,
                        children: this.state.strErrorMessage,
                      }),
                    (0, _.jsx)(_._, {
                      onChange: this.OnToggleChannelAutomation,
                      label: (0, _._)("#RSSManager_Status_Automation_Desc"),
                      checked: this.props.admin.BIsAutomationEnabled(),
                      description: "",
                    }),
                    this.props.admin.BIsAutomationEnabled() &&
                      (0, _.jsxs)("p", {
                        children: [
                          (0, _._)("#CuratorAdmin_RSSFeed_lastscanned"),
                          "\xA0",
                          (0, _._)(
                            this.props.admin.GetRSSLastRtimeChecked(),
                            !1,
                          ),
                          "\xA0 @ ",
                          (0, _._)(this.props.admin.GetRSSLastRtimeChecked(), {
                            bForce24HourClock: !1,
                          }),
                          "\xA0",
                          (0, _.jsx)("a", {
                            onClick: this.OnQueueScan,
                            children: (0, _.jsx)("span", {
                              children: (0, _._)(
                                "#CuratorAdmin_RSSFeed_scannow",
                              ),
                            }),
                          }),
                        ],
                      }),
                  ],
                })
              : null;
          }
        };
        _([_._], _.prototype, "OnToggleChannelAutomation", 1),
          _([_._], _.prototype, "OnQueueScan", 1),
          (_ = _([_._], _));
        let _ = class extends _.Component {
          state = {
            clan_event_gid: this.props.admin.MapArticleURLToClanEventGID(
              this.props.newsData.post.url,
            ),
            bLoadingPartnerEvent:
              !!this.props.admin.MapArticleURLToClanEventGID(
                this.props.newsData.post.url,
              ),
          };
          componentDidMount() {
            this.DoPartnerEventLoad();
          }
          async DoPartnerEventLoad() {
            if (this.state.clan_event_gid) {
              let _ = this.props.admin.GetClanSteamID(),
                _ = _._.GetClanEventModel(this.state.clan_event_gid);
              _ ||
                (_ = await _._.LoadHiddenPartnerEvent(
                  _,
                  this.state.clan_event_gid,
                )),
                this.setState({
                  bLoadingPartnerEvent: !1,
                  existingEventModel: _,
                });
            }
          }
          OnOpenPreviewAsPartnerEvent(_) {
            const { newsData: _, clanSteamID: _ } = this.props;
            let _ = new _._();
            (_.GID = "PreviewPartnerEventRow_0"),
              (_.clanSteamID = _),
              (_.postTime = Date.now() / 1e3),
              (_.startTime = Date.now() / 1e3),
              (_.type = _.uYK),
              _.vecTags.push("auto_rssfeed"),
              _.vecTags.push("curator"),
              _.vecTags.push("curator_public"),
              _.name.set(_.Bhc, _.title),
              _.description.set(_.Bhc, _.desc),
              this.ValidateJSONDefault(_.jsondata) && (_.jsondata = _.jsondata),
              _.jsondata.read_more_link ||
                (_.jsondata.read_more_link = _.unique_id);
            let _ = this.props.admin.GetFeedLanguageHandleUnset();
            !_.jsondata.localized_summary &&
              _.post.event_summary &&
              ((_.jsondata.localized_summary = (0, _._)(
                _.jsondata.localized_summary,
                _.bP9,
                null,
              )),
              (_.jsondata.localized_summary[_.Bhc] = _.post.event_summary),
              _ != _.Bhc &&
                (_.jsondata.localized_summary[_] = _.post.event_summary)),
              !_.jsondata.localized_subtitle &&
                _.post.event_subtitle &&
                ((_.jsondata.localized_subtitle = (0, _._)(
                  _.jsondata.localized_subtitle,
                  _.bP9,
                  null,
                )),
                (_.jsondata.localized_subtitle[_.Bhc] = _.post.event_subtitle),
                _ != _.Bhc &&
                  (_.jsondata.localized_subtitle[_] = _.post.event_subtitle)),
              this.ShowModalEvent(_);
          }
          OnViewEvent() {
            this.ShowModalEvent(
              _._.GetClanEventModel(this.state.clan_event_gid),
            );
          }
          ShowModalEvent(_) {
            let _ = document.getElementById("curator_header_area_ctn_id");
            _ &&
              (_
                ? _.classList.add("curator_header_area_ctn_hideme")
                : _.classList.remove("curator_header_area_ctn_hideme")),
              this.setState({
                eventModelForPreviewNow: _,
              });
          }
          ValidateJSONDefault(_) {
            const _ = _;
            return !!(_ && !Array.isArray(_) && typeof _ == "object");
          }
          OnPostNewsEvent(_) {
            const { newsData: _, fnGetRSSUrl: _ } = this.props;
            (0, _._)(
              (0, _.jsx)(_, {
                newsData: _,
                admin: this.props.admin,
                strRSSUrl: _(),
                fnClanEventGID: this.OnClanEventCreateSuccess,
              }),
              (0, _._)(_),
            );
          }
          OnUpdateNewsEvent(_) {
            const { newsData: _, fnGetRSSUrl: _ } = this.props;
            (0, _._)(
              (0, _.jsx)(_, {
                newsData: _,
                strRSSUrl: _(),
                admin: this.props.admin,
                fnClanEventGID: this.OnClanEventCreateSuccess,
                bUpdatePost: !0,
              }),
              (0, _._)(_),
            );
          }
          HideModalEvent() {
            this.state.eventModelForPreviewNow && this.ShowModalEvent(void 0);
          }
          OnClanEventCreateSuccess(_) {
            this.setState(
              {
                clan_event_gid: _,
                bLoadingPartnerEvent: !0,
              },
              this.DoPartnerEventLoad,
            );
          }
          OnShowRawRSS(_) {
            const _ = this.props.newsData.rss_message,
              _ = (() => {
                const _ = _.match(/<entry[^>]*>([\s\S]*)<\/entry>/m);
                if (!_) return _;
                const _ = _[1].match(/<content[^>]*>[\s\S]*<\/content>/m);
                return _ ? (0, _._)(_[0]) : _[0];
              })();
            (0, _._)(
              (0, _.jsx)(_._, {
                bAlertDialog: !0,
                strTitle: (0, _._)("#RSSManager_PostEvent_ViewRaw"),
                children: (0, _.jsx)("textarea", {
                  className: _.RawRSS,
                  value: _,
                  disabled: !0,
                }),
              }),
              (0, _._)(_),
            );
          }
          render() {
            const { newsData: _ } = this.props,
              {
                clan_event_gid: _,
                existingEventModel: _,
                bLoadingPartnerEvent: _,
              } = this.state;
            let _ = this.props.admin,
              _ = _.GetClanSteamID(),
              _ = _ && _.BIsStagedEvent(),
              _ =
                _.post.appids && _.post.appids.length == 1 && _.post.appids[0],
              _ =
                _.post.recommendation_state !== _._._ &&
                _ &&
                _.Get().BHasReviewForApp(_, _),
              _ = "";
            if (_) {
              const _ =
                _.GetVisibilityStartTimeAndDateUnixSeconds() ||
                _.GetPostTimeAndDateUnixSeconds();
              _ =
                (0, _._)(_) +
                " @ " +
                (0, _._)(_, {
                  bForce24HourClock: !1,
                });
            }
            return (0, _.jsxs)("div", {
              className: (0, _._)(
                _.PostCtn,
                _ ? _.ActivePost : "",
                _.valid_post ? "" : _.ErrorPost,
              ),
              children: [
                (0, _.jsx)("span", {
                  className: _.PostTitle,
                  children: _.title,
                }),
                (0, _.jsx)("br", {}),
                !!_ &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      !!_.BIsVisibleEvent() &&
                        (0, _.jsx)("span", {
                          className: _.PostDate,
                          children: (0, _._)(
                            "#RSSManager_PostEvent_PostedDate",
                            _,
                          ),
                        }),
                      !_.BIsVisibleEvent() &&
                        (0, _.jsx)("span", {
                          className: (0, _._)(
                            _.PostDraft,
                            _ ? _.PostStaged : "",
                          ),
                          children: (0, _._)(
                            _
                              ? "#RSSManager_PostEvent_Staged"
                              : "#RSSManager_PostEvent_Draft",
                            _,
                          ),
                        }),
                    ],
                  }),
                !!(!_.valid_post && _.post_error_msg) &&
                  (0, _.jsxs)("div", {
                    className: _().ErrorStylesBackground,
                    children: [
                      (0, _._)("#Error_Generic_Label"),
                      " ",
                      (0, _._)(_.post_error_msg),
                    ],
                  }),
                (0, _.jsxs)("div", {
                  className: _.ButtonCtn,
                  children: [
                    _
                      ? (0, _.jsxs)(_.Fragment, {
                          children: [
                            _
                              ? (0, _.jsx)(_._, {
                                  string: (0, _._)("#Loading"),
                                  size: "small",
                                  position: "center",
                                })
                              : (0, _.jsx)("div", {
                                  onClick: this.OnViewEvent,
                                  className: (0, _._)(_().Button, _.PreviewBtn),
                                  children: (0, _._)(
                                    "#RSSManager_PostEvent_ViewEvent",
                                  ),
                                }),
                            (0, _.jsx)("a", {
                              className: (0, _._)(_().Button, _.PreviewBtn),
                              href:
                                _._.COMMUNITY_BASE_URL +
                                "gid/" +
                                _.GetClanSteamID().ConvertTo64BitString() +
                                "/partnerevents/edit/" +
                                this.state.clan_event_gid,
                              children: (0, _._)(
                                "#RSSManager_PostEvent_EditEvent",
                              ),
                            }),
                            (0, _.jsx)("div", {
                              onClick: this.OnUpdateNewsEvent,
                              className: (0, _._)(_().Button, _.PreviewBtn),
                              children: (0, _._)(
                                "#RSSManager_PostEvent_UpdateEvent",
                              ),
                            }),
                            _ &&
                              (0, _.jsx)("a", {
                                className: (0, _._)(_().Button, _.PreviewBtn),
                                href: (0, _._)(
                                  _._.STORE_BASE_URL +
                                    "app/" +
                                    _.post.appids[0] +
                                    "/?curator_clanid=" +
                                    _.GetAccountID(),
                                ),
                                children: (0, _._)("#RSSManager_SeeReview"),
                              }),
                          ],
                        })
                      : (0, _.jsxs)(_.Fragment, {
                          children: [
                            (0, _.jsx)("div", {
                              onClick: this.OnOpenPreviewAsPartnerEvent,
                              className: (0, _._)(_().Button, _.PreviewBtn),
                              children: (0, _._)(
                                "#CuratorAdmin_RSSFeed_col_preview_event",
                              ),
                            }),
                            (0, _.jsx)("div", {
                              onClick: this.OnPostNewsEvent,
                              className: (0, _._)(_().Button, _.PreviewBtn),
                              children: (0, _._)(
                                "#CuratorAdmin_RSSFeed_col_create_event",
                              ),
                            }),
                          ],
                        }),
                    !!(_.rss_message && _.rss_message.length > 0) &&
                      (0, _.jsx)("div", {
                        onClick: this.OnShowRawRSS,
                        className: _.ViewRaw,
                        children: (0, _._)("#RSSManager_PostEvent_ViewRaw"),
                      }),
                    !!this.state.eventModelForPreviewNow &&
                      (0, _.jsx)(_._, {
                        className: _.StoreHeaderAdjust,
                        children: (0, _.jsx)("div", {
                          children: (0, _.jsx)(_._, {
                            event: this.state.eventModelForPreviewNow,
                            fnClose: this.HideModalEvent,
                          }),
                        }),
                      }),
                  ],
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "DoPartnerEventLoad", 1),
          _([_._], _.prototype, "OnOpenPreviewAsPartnerEvent", 1),
          _([_._], _.prototype, "OnViewEvent", 1),
          _([_._], _.prototype, "OnPostNewsEvent", 1),
          _([_._], _.prototype, "OnUpdateNewsEvent", 1),
          _([_._], _.prototype, "HideModalEvent", 1),
          _([_._], _.prototype, "OnClanEventCreateSuccess", 1),
          _([_._], _.prototype, "OnShowRawRSS", 1),
          (_ = _([_._], _));
        const _ = class _ extends _.Component {
          state = {
            initialState: _.DetermineStartState(this.props),
            step: _.DetermineStartState(this.props),
            bDraftMode: !0,
          };
          static DetermineStartState(_) {
            let _ = _.admin.BHasSetupFeed(_.strRSSUrl);
            return !_.newsData || !_
              ? _.bActivatePooling
                ? "activate_feed"
                : _.admin.BHasSavedRSSURL()
                  ? "update_feed"
                  : "feed_missing"
              : _.bUpdatePost
                ? "update_post"
                : "create_post";
          }
          OnCreateNewsFeed() {
            this.setState(
              {
                step: "creating_feed",
              },
              this.DoCreateNewsFeed,
            );
          }
          async DoCreateNewsFeed() {
            let _ = await this.props.admin.CreateOrUpdateRSSNewFeed(
              this.props.strRSSUrl,
              this.props.bActivatePooling ? 300 : 0,
            );
            _.success != _._
              ? this.setState({
                  step: "failure",
                  eResult: _.success,
                  strErrorMessage: (0, _._)("#RSSManager_PostEvent_Failure"),
                })
              : this.setState({
                  step: this.props.newsData ? "create_post" : "success",
                });
          }
          OnCreatePost() {
            this.setState(
              {
                step: "waiting_post",
              },
              this.DoCreatePost,
            );
          }
          async DoCreatePost() {
            let _ = await this.props.admin.CreatePost(
              this.props.newsData,
              !!this.state.bDraftMode,
            );
            _.GetEResult() != _._
              ? this.setState({
                  step: "failure",
                  eResult: _.GetEResult(),
                  strErrorMessage: (0, _._)("#RSSManager_PostEvent_Failure"),
                })
              : (this.props.fnClanEventGID &&
                  this.props.fnClanEventGID(_.Body().clan_event_gid()),
                this.setState({
                  step: "success",
                  eventGID: _.Body().clan_event_gid(),
                }));
          }
          OnChangeDraftMode(_) {
            this.setState({
              bDraftMode: _,
            });
          }
          OnChangePermissionsCreateFeed(_) {
            this.setState({
              bPermissions: _,
            });
          }
          OnChangeConductCreateFeed(_) {
            this.setState({
              bConduct: _,
            });
          }
          GetStrTitle() {
            if (this.props.newsData)
              return (0, _._)(
                this.props.bUpdatePost
                  ? "#RSSManager_PostEvent_UpdateEvent"
                  : "#RSSManager_PostEvent_Tilte",
              );
            switch (this.state.initialState) {
              case "feed_missing":
                return (0, _._)("#RSSManager_PostEvent_CreateFeedTitle");
              default:
              case "update_feed":
                return (0, _._)("#RSSManager_PostEvent_UpdateFeedTitle");
              case "activate_feed":
                return (0, _._)("#RSSManager_Status_Automation_Activate");
            }
          }
          render() {
            const { strRSSUrl: _ } = this.props;
            switch (this.state.step) {
              case "feed_missing":
              case "activate_feed":
              case "update_feed":
              default:
                return (0, _.jsx)(_._, {
                  title: this.GetStrTitle(),
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsxs)(_._, {
                        children: [
                          this.props.newsData &&
                            (0, _.jsx)("div", {
                              children: (0, _._)(
                                "#RSSManager_PostEvent_CreateFeed_DuringPost",
                              ),
                            }),
                          this.state.step !== "activate_feed" &&
                            (0, _.jsx)("div", {
                              children: (0, _._)(
                                "#RSSManager_PostEvent_CreateFeed_Desc",
                                _,
                              ),
                            }),
                          (0, _.jsx)("div", {
                            children: (0, _._)("#RSSManager_CreateFeed_Review"),
                          }),
                          (0, _.jsx)("div", {
                            children: (0, _.jsx)(_._, {
                              label: (0, _._)(
                                "#RSSManager_CreateFeed_Permissions_v1",
                              ),
                              onChange: this.OnChangePermissionsCreateFeed,
                              checked: !!this.state.bPermissions,
                            }),
                          }),
                          (0, _.jsxs)("div", {
                            children: [
                              (0, _.jsx)(_._, {
                                label: (0, _._)(
                                  "#RSSManager_CreateFeed_Conduct_v1",
                                ),
                                onChange: this.OnChangeConductCreateFeed,
                                checked: !!this.state.bConduct,
                              }),
                              (0, _.jsx)(_._, {
                                href: _._.STORE_BASE_URL + "online_conduct/",
                                children: (0, _._)(
                                  "#RSSManager_CreateFeed_Conduct_Link",
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_._, {
                          bOKDisabled: !(
                            this.state.bPermissions && this.state.bConduct
                          ),
                          onOK: this.OnCreateNewsFeed,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "failure":
                return (0, _.jsx)(_._, {
                  strDescription: (0, _._)("#RSSManager_PostEvent_Failure"),
                  closeModal: this.props.closeModal,
                  children: (0, _.jsx)("div", {
                    children: (0, _._)(
                      "#Error_Description",
                      this.state.eResult,
                      this.state.strErrorMessage,
                    ),
                  }),
                });
              case "creating_feed":
              case "waiting_post":
                return (0, _.jsx)(_._, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, _._)("#RSSManager_PostEvent_InFlight"),
                  closeModal: this.props.closeModal,
                  children: (0, _.jsx)(_._, {
                    position: "center",
                  }),
                });
              case "create_post":
                return (0, _.jsx)(_._, {
                  title: this.GetStrTitle(),
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_._, {
                        children: (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("div", {
                              children: (0, _._)(
                                "#RSSManager_PostEvent_CreatePost",
                              ),
                            }),
                            (0, _.jsx)("div", {
                              className: _.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, _.jsx)("br", {}),
                            (0, _.jsx)("div", {
                              children: (0, _.jsx)(_._, {
                                label: (0, _._)(
                                  "#RSSManager_PostEvent_CreatePost_Draft",
                                ),
                                onChange: this.OnChangeDraftMode,
                                checked: !!this.state.bDraftMode,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_._, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "update_post":
                return (0, _.jsx)(_._, {
                  title: this.GetStrTitle(),
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_._, {
                        children: (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsx)("div", {
                              children: (0, _._)(
                                "#RSSManager_PostEvent_UpdatePost",
                              ),
                            }),
                            (0, _.jsx)("br", {}),
                            (0, _.jsx)("div", {
                              className: _.DialogPostTitle,
                              children: this.props.newsData.title,
                            }),
                            (0, _.jsx)("br", {}),
                          ],
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_._, {
                          onOK: this.OnCreatePost,
                          onCancel: this.props.closeModal,
                        }),
                      }),
                    ],
                  }),
                });
              case "success":
                return (0, _.jsx)(_._, {
                  strTitle: this.GetStrTitle(),
                  strDescription: (0, _._)(
                    this.props.newsData
                      ? "#RSSManager_PostEvent_Success"
                      : "#RSSManager_PostEvent_Success_feed",
                  ),
                  closeModal: this.props.closeModal,
                  bAlertDialog: !0,
                  children:
                    !!this.state.eventGID &&
                    (0, _.jsx)("a", {
                      href:
                        _._.COMMUNITY_BASE_URL +
                        "gid/" +
                        this.props.admin
                          .GetClanSteamID()
                          .ConvertTo64BitString() +
                        "/partnerevents/edit/" +
                        this.state.eventGID,
                      children: (0, _._)("#RSSManager_PostEvent_EventLink"),
                    }),
                });
            }
          }
        };
        _([_._], _.prototype, "OnCreateNewsFeed", 1),
          _([_._], _.prototype, "DoCreateNewsFeed", 1),
          _([_._], _.prototype, "OnCreatePost", 1),
          _([_._], _.prototype, "DoCreatePost", 1),
          _([_._], _.prototype, "OnChangeDraftMode", 1),
          _([_._], _.prototype, "OnChangePermissionsCreateFeed", 1),
          _([_._], _.prototype, "OnChangeConductCreateFeed", 1),
          _([_._], _.prototype, "GetStrTitle", 1);
        let _ = _;
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
        async function _() {
          const _ = await (0, _._)(
            "ajaxgetuserdeckcompatcounts",
            new URLSearchParams(),
          );
          if (!_.counts)
            throw new Error(
              "ajaxgetuserdeckcompatcounts answered without counts",
            );
          return _.counts;
        }
        const _ = 300 * 1e3;
        function _() {
          return ["DeckCompatCounts"];
        }
        function _() {
          return {
            queryKey: _(),
            queryFn: () => _(),
            staleTime: _,
            retry: !1,
          };
        }
        function _() {
          const { data: _ } = (0, _._)(_());
          return _;
        }
        function _(_, _) {
          switch (_) {
            case _._:
              return _?.playable;
            case _._:
              return _?.unsupported;
            default:
              return _?.verified;
          }
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args)),
            _ = _.useMemo(() => {
              if (_)
                return _.jsondata.sale_sections?.find(
                  (_) =>
                    _.section_type == "vo_internal" &&
                    (_.internal_section_data?.internal_type ==
                      "reservation_widget" ||
                      _.internal_section_data?.internal_type ==
                        "while_supplies_last"),
                );
            }, [_]);
          if (_ && _) {
            const _ = Number.parseInt((0, _._)(_.args, "depositpackageid")),
              _ = Number.parseInt((0, _._)(_.args, "psulesspackageid")),
              _ = (0, _._)(_.args, "out_of_stock_override"),
              _ = (0, _._)(_.args, "delivery_override"),
              _ = (0, _._)(_.args, "delivery_override_out_of_stock");
            return (0, _.jsx)(_, {
              section: _,
              reservationPackageID: _,
              depositPackageID: _,
              psuLessPackageID: _,
              strOutOfStockOverride: _,
              strDeliveryOverride: _ || _,
              bDeliveryOverrideOnlyIfOutOfStock: !!_,
              PreviewActions: _.PreviewActions,
            });
          }
          return (0, _.jsx)(_.Fragment, {});
        }
        function _(_) {
          const {
              reservationPackageID: _,
              depositPackageID: _,
              bIsPreview: _,
              psuLessPackageID: _,
              strOutOfStockOverride: _,
              strDeliveryOverride: _,
              bDeliveryOverrideOnlyIfOutOfStock: _,
              section: _,
              PreviewActions: _,
            } = _,
            { data: _ } = (0, _._)(_),
            { data: _ } = (0, _._)(_),
            _ = (0, _.useMemo)(
              () => [
                {
                  unique_id: "reservation_bbcode_" + _,
                  reservation_package: _,
                  deposit_package: _,
                  localized_reservation_desc: (0, _._)([], _.bP9, null),
                  localized_out_of_stock_override: (0, _._)(
                    [_ || null],
                    _.bP9,
                    null,
                  ),
                  localized_delivery_override_desc: (0, _._)(
                    [_ || null],
                    _.bP9,
                    null,
                  ),
                  override_delivery_only_out_of_stock: !!_,
                  psu_less_package: _,
                },
              ],
              [_, _, _, _, _, _],
            );
          if (!_ || (_ && !_))
            return (0, _.jsx)(_._, {
              string: (0, _._)("#Loading"),
              size: "small",
              position: "center",
            });
          const _ = !_._.logged_in || !_.account_restricted_from_purchasing,
            _ =
              _.reservation_state == _._.k_EPurchaseReservationState_Reserved
                ? _
                : void 0;
          return (0, _.jsxs)(_._, {
            children: [
              _ &&
                (0, _.jsx)(_.Suspense, {
                  fallback: null,
                  children: (0, _.jsx)(_, {
                    bIsPreview: !!_,
                    rgReservationDef: _,
                  }),
                }),
              !!_.allow_purchase_in_country &&
                (0, _.jsxs)("div", {
                  className: _[0].unique_id,
                  children: [
                    (0, _.jsx)(_._, {
                      reservationDef: _[0],
                      hardwareDetail: _,
                      bPSULessModel: !1,
                      reservedHardwareDetail: _,
                    }),
                    _ &&
                      (0, _.jsx)(_._, {
                        section: _,
                        reservationDef: _[0],
                        hardwareDetail: _,
                        reservedHardwareDetail: _,
                      }),
                    _ &&
                      _?.allow_purchase_in_country &&
                      (0, _.jsx)(_._, {
                        reservationDef: _[0],
                        hardwareDetail: _,
                        bPSULessModel: !0,
                        reservedHardwareDetail: void 0,
                      }),
                  ],
                }),
            ],
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
          const { appID: _, classOverride: _, styleOverride: _ } = _,
            [_, _] = (0, _.useState)(!1),
            _ = (0, _._)("GameHoverFollowButton"),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)(),
            _ = (0, _._)(_),
            { mutateAsync: _ } = (0, _._)(_, !_, void 0),
            _ = async (_) => {
              _.preventDefault(),
                _.stopPropagation(),
                _._.logged_in
                  ? (_(!0), await _(), _.token.reason || _(!1))
                  : _();
            };
          return (0, _.jsxs)(_._, {
            className: (0, _._)(_().FollowButton, _),
            onClick: _,
            style: _,
            children: [
              _ ? (0, _.jsx)(_.pPV, {}) : (0, _.jsx)(_.c9e, {}),
              (0, _.jsx)("div", {
                className: (0, _._)(
                  _().FollowButtonText,
                  _ && _().FollowLoadingText,
                  "FollowGameButton",
                ),
                children: (0, _._)(
                  _ ? "#Sale_StopFollowingGame" : "#Sale_FollowGame",
                ),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const { appid: _, color: _, bgcolor: _ } = _,
            _ = (0, _._)();
          return (0, _.jsx)(_, {
            appID: _,
            classOverride: (0, _._)(
              _().FollowGameButtonNotTop,
              _().BBCodeFollowButton,
            ),
            styleOverride: {
              color: _,
              backgroundColor: _,
            },
          });
        }
        function _(_) {
          const _ = Number(_.args.appid);
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            appid: _,
            color: _,
            bgcolor: _,
          });
        }
        var _ = __webpack_require__("chunkid");
        function _(_) {
          const _ = Number(_.args.packageid);
          return _
            ? (0, _.jsx)(_._, {
                packageID: _,
                display_style: (0, _._)(_.args.display),
              })
            : null;
        }
        function _(_) {
          const _ = Number(_.args.packageid),
            _ = Number(_.args.compareid);
          return !_ || !_
            ? null
            : (0, _.jsx)(_._, {
                packageID: _,
                compareID: _,
              });
        }
        function _(_) {
          const _ = _.args[""]?.trim();
          return _
            ? (0, _.jsx)("div", {
                className: _,
                children: _.children,
              })
            : (0, _.jsx)(_.Fragment, {
                children: _.children,
              });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { clanAccountID: _, color: _, bgcolor: _ } = _,
            [_, _] = _.useState(!1);
          return (0, _.jsx)("div", {
            className: (0, _._)(_().BBCodeFollowButton, _ && _().isHovered),
            onMouseEnter: () => _(!0),
            onMouseLeave: () => _(!1),
            children: (0, _.jsx)(_._, {
              nCreatorAccountID: _,
              classOverride: _().FollowGameButtonNotTop,
              styleOverride: {
                color: _,
                backgroundColor: _,
              },
              followType: "group",
            }),
          });
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number(_.args.groupid) || _?.clanSteamID.GetAccountID();
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            clanAccountID: _,
            color: _,
            bgcolor: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { appid: _, color: _, bgcolor: _ } = _,
            _ = (0, _._)(),
            _ = (0, _._)(_),
            _ = (0, _._)(_);
          return (0, _.jsx)("div", {
            className: _().WishlistHoverCtn,
            children: (0, _.jsx)(_._, {
              snr: _,
              _: _,
              classOverride: (0, _._)(
                _().WishlistButtonNotTop,
                _().BBCodeWishlistButton,
                "WishlistButton",
              ),
              styleOverride: {
                color: _,
                backgroundColor: _,
              },
              bShowInGamepadUI: !0,
            }),
          });
        }
        function _(_) {
          const _ = Number(_.args.appid);
          if (!_) return null;
          const _ = (0, _._)(_.args.color, "black"),
            _ = (0, _._)(_.args.bgcolor, "white");
          return (0, _.jsx)(_, {
            appid: _,
            color: _,
            bgcolor: _,
          });
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                [
                  "wishlist",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "followgroup",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "classname",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "price",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "pricesavings",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "reservationbutton",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          return _ < 10 ? "0" + _ : _;
        }
        function _(_) {
          const { giveawayid: _ } = _,
            _ = (0, _._)(_),
            {
              bLoadingGiveawayInfo: _,
              winner_count: _,
              closed: _,
              seconds_until_drawing: _,
            } = _;
          return _
            ? null
            : (0, _.jsxs)("div", {
                className: _.countdownCtn,
                children: [
                  !!_ &&
                    (0, _.jsx)("div", {
                      className: _.Closed,
                      children:
                        _ > 0
                          ? (0, _._)("#Giveaway_Closed", (0, _._)(_))
                          : (0, _._)("#Giveaway_Closed_NoWinnerInfo"),
                    }),
                  !_ &&
                    (0, _.jsxs)(_.Fragment, {
                      children: [
                        _ <= 0
                          ? (0, _.jsxs)("div", {
                              className: _.Throbber,
                              children: [
                                (0, _.jsx)(_._, {
                                  size: "small",
                                }),
                                (0, _.jsx)("div", {
                                  children: (0, _._)("#Giveaway_RandomDraw"),
                                }),
                              ],
                            })
                          : (0, _.jsxs)("div", {
                              className: _.CountDownCtn,
                              children: [
                                (0, _.jsx)("div", {
                                  className: _.CountDownTime,
                                  children:
                                    _(Math.floor(_ / 60)) + ":" + _(_ % 60),
                                }),
                                (0, _.jsxs)("div", {
                                  className: _.CountDownText,
                                  children: [
                                    (0, _._)("#Giveaway_CountDown2"),
                                    " ",
                                    (0, _._)("#Giveaway_KeepWatching"),
                                  ],
                                }),
                              ],
                            }),
                        _ > 0 &&
                          (0, _.jsxs)("div", {
                            className: _.WinnerInfo,
                            children: [
                              (0, _.jsx)("div", {
                                className: _.WinnerCount,
                                children: (0, _._)(_),
                              }),
                              (0, _.jsx)("div", {
                                className: _.WinnerText,
                                children: (0, _._)("#Giveaway_Congratulation"),
                              }),
                            ],
                          }),
                      ],
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
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { eventModel: _, nEventBadgeID: _ } = _,
            _ = (0, _._)(_);
          if (_?.level > 0) {
            let _ = _.level;
            if (_?.BHasSaleEnabled()) {
              const _ = _.GetSaleSectionsByType("badge_progress");
              if (_?.length == 1) {
                const _ = _[0].badge_progress;
                if (_?.event_badgeid == _ && _?.granted_by_discovery_queue) {
                  const _ = _.levels[_.levels.length - 1].level;
                  return (0, _.jsx)(_, {
                    eventModel: _,
                    nBadgeLevel: _,
                    nMaxLevel: _,
                  });
                }
              }
            }
            return (0, _.jsx)("span", {
              className: "DisplayBadgeProgress",
              children: (0, _._)(_),
            });
          }
          return null;
        }
        function _(_) {
          const { eventModel: _, nBadgeLevel: _, nMaxLevel: _ } = _,
            _ = _.useMemo(() => {
              const _ = _.GetSaleSections().filter(
                (_) => _.section_type == "discoveryqueue",
              );
              return _?.length > 0 ? _[0] : null;
            }, [_]),
            { storePageFilter: _, eStoreDiscoveryQueueType: _ } = _.useMemo(
              () => (0, _._)(_, _),
              [_, _],
            ),
            _ = (0, _._)(_, _),
            _ = Math.min(_ + _, _);
          return (0, _.jsx)("span", {
            className: "DisplayBadgeProgress",
            children: (0, _._)(_),
          });
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args, "eventid"));
          return _._.logged_in && _
            ? (0, _.jsx)(_, {
                nEventBadgeID: _,
                eventModel: _,
              })
            : null;
        }
        function _(_) {
          const { nDoorIndex: _, children: _ } = _,
            _ = (0, _._)(_),
            _ = (0, _._)(),
            [_, _] = _.useState(!1),
            [_, _] = _.useState(!1),
            { elDialogElement: _, fnShowLogonDialog: _ } = (0, _._)();
          return (0, _.jsxs)(_.Fragment, {
            children: [
              (0, _.jsx)(_._, {
                disabled: _,
                onClick: (_) => {
                  _ ||
                    (_._.logged_in
                      ? (_(!0),
                        _({
                          iDoorIndex: _,
                        })
                          .then((_) => {
                            _ || _(!0), _(!1);
                          })
                          .catch(() => {
                            _(!0), _(!1);
                          }))
                      : _());
                },
                children: _
                  ? (0, _.jsx)("div", {
                      children: (0, _._)("#GrantAwardError_Busy"),
                    })
                  : (0, _.jsxs)(_.Fragment, {
                      children: [
                        !!_ &&
                          (0, _.jsx)(_._, {
                            size: "small",
                          }),
                        !!_ && (0, _.jsx)(_.Jlk, {}),
                        _,
                      ],
                    }),
              }),
              _,
            ],
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)) || 0;
          return _ >= 0 && _ < 32
            ? (0, _.jsx)(_, {
                nDoorIndex: _,
                children: _.children,
              })
            : null;
        }
        const _ = (0, _._)(_._);
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)),
            { event: _, showErrorInfo: _ } = _.context;
          if (_) {
            const _ = _?.jsondata?.sale_sections?.findIndex(
              (_) => _.unique_id == _,
            );
            if (_ >= 0) {
              const _ = _.GetDayIndexFromEventStart();
              return (0, _.jsx)(_._, {
                location: _ ? _._ : _._,
                children: (0, _.jsx)(_, {
                  event: _,
                  section: _.jsondata.sale_sections[_],
                  activeTab: new _._(null, _),
                  language: _.language,
                  nSaleDayIndex: _,
                  promotionName: "",
                  appVisibilityTracker: null,
                  ePreviewMode: _
                    ? _._.EPreviewMode_Enabled
                    : _._.EPreviewMode_Disabled,
                }),
              });
            } else if (_)
              return (0, _.jsxs)("div", {
                className: _.ErrorDiv,
                children: ["Error could not find sale section ", _],
              });
          }
          return null;
        }
        let _ = null;
        function _() {
          return (
            _ == null &&
              (_ = new Map([
                ...Array.from(_().entries()),
                [
                  "itemdef",
                  {
                    Constructor: _,
                    autocloses: !1,
                    skipInternalNewline: !0,
                    allowWrapTextForCopying: !0,
                  },
                ],
                [
                  "followgame",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "deckcompatcount",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "deckcompatuserlibrarycount",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "giveawayinfo",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "eventdoorvisibility",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "badgecurrentlevel",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "optindoorquest",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "localize",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "salesection",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
                [
                  "reservationbutton",
                  {
                    Constructor: _,
                    autocloses: !1,
                  },
                ],
              ])),
            _
          );
        }
        function _(_) {
          const { event: _ } = _.context,
            _ = Number.parseInt((0, _._)(_.args, "appid")),
            _ = Number.parseInt((0, _._)(_.args, "itemdefid")),
            _ = Number.parseInt((0, _._)(_.args, "maxquantity")),
            _ = (0, _._)(_.args, "calltoaction");
          return !(0, _._)(_, _, !1) || !_
            ? (0, _.jsx)(_._, {
                size: "small",
                position: "center",
                string: (0, _._)("#Loading"),
              })
            : (0, _.jsx)(_._, {
                language: _.language,
                clanAccountID: _.clanSteamID.GetAccountID(),
                itemDefSetting: {
                  nAppID: _,
                  nItemDefID: _,
                  max_quantity: _,
                },
                strCallToAction: _,
              });
        }
        function _(_) {
          const _ = _();
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
            });
          const _ = Number.parseInt((0, _._)(_.args));
          return (0, _.jsx)("span", {
            children: (0, _._)(Number(_(_, _))),
          });
        }
        function _(_) {
          const _ = (0, _._)(_._.accountid, "library");
          if (!_)
            return (0, _.jsx)(_._, {
              size: "small",
            });
          const _ = Number.parseInt((0, _._)(_.args));
          let _ = _.verifiedList?.length || 0;
          switch (_) {
            case _._:
              _ = _.playableList?.length || 0;
              break;
            case _._:
              _ = _.unsupportedList?.length || 0;
              break;
            case _._:
              _ = _.unknownList?.length || 0;
              break;
          }
          return (0, _.jsx)("span", {
            children: (0, _._)(Number(_)),
          });
        }
        function _(_) {
          const _ = Number.parseInt((0, _._)(_.args)),
            _ = "hide" in _.args && !!Number.parseInt((0, _._)(_.args, "hide"));
          return _ >= 0
            ? (0, _.jsx)(_, {
                nDoorIndex: _,
                bHide: _,
                children: _.children,
              })
            : null;
        }
        function _(_) {
          const { nDoorIndex: _, bHide: _, children: _ } = _,
            _ = (0, _._)(_);
          return _ == null
            ? null
            : (_ && !_) || (!_ && _)
              ? (0, _.jsx)(_.Fragment, {
                  children: _.children,
                })
              : null;
        }
        function _(_) {
          return (0, _.jsx)("span", {
            className: _.LocalizeBlock,
            children: (0, _._)(
              _.children,
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
              (0, _.jsx)("b", {}),
            ),
          });
        }
        function _(_) {
          let _ = (0, _._)(_.args);
          return _
            ? (0, _.jsx)(_, {
                giveawayid: _,
              })
            : (0, _.jsx)(_.Fragment, {});
        }
        const _ = void 0;
        function _(_) {
          return (0, _.jsx)(_, {
            ..._,
            PreviewActions: _,
          });
        }
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { bSalePage: _ } = _,
            [_, _] = _.useState(!1);
          return (
            (0, _._)(_, _),
            _.useEffect(() => {
              _._.Init(new _._(_._.WEBAPI_BASE_URL)), _._.Init(), _(!0);
            }, []),
            _.useEffect(() => {
              const _ = (0, _._)();
              _ && _.locale(_);
            }, []),
            _
              ? _
                ? (0, _.jsx)(_._, {
                    dictionary: _(),
                    children: _.children,
                  })
                : _.children
              : null
          );
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        class _ extends _.Component {
          state = {
            bIsLoading: !0,
          };
          componentDidMount() {
            _._.Get(),
              this.setState({
                bIsLoading: !1,
              });
          }
          render() {
            return this.state.bIsLoading
              ? null
              : (0, _.jsx)(_._, {
                  children: (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsx)(_._, {
                        exact: !0,
                        path: "/:prefix(curator|pub|publisher|dev|developer|franchise)/:curatorVanity/admin/manage_rss",
                        component: _._,
                      }),
                      (0, _.jsx)(_._, {
                        children: !1,
                      }),
                    ],
                  }),
                });
          }
        }
      },
      chunkid: (module, module_exports, __webpack_require__) => {
        "use strict";
        __webpack_require__._(module_exports),
          __webpack_require__._(module_exports, {
            default: () => _,
          });
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid");
        class _ {
          static s_Singleton;
          m_rgRSSEnabledClans = [];
          GetAllRSSEnabledClans() {
            return this.m_rgRSSEnabledClans;
          }
          GetTrustedEnabledClans(_) {
            return this.m_rgRSSEnabledClans
              .filter((_) => _.is_trusted_press == _)
              .map((_) => _.clan_accoundid);
          }
          static Get() {
            return (
              _.s_Singleton ||
                ((_.s_Singleton = new _()), _.s_Singleton.Init()),
              _.s_Singleton
            );
          }
          Init() {
            let _ = (0, _._)("rssaccountinfo", "application_config");
            this.ValidateRSSAccountConfig(_) && (this.m_rgRSSEnabledClans = _);
          }
          ValidateRSSAccountConfig(_) {
            const _ = _;
            return (
              _ &&
              Array.isArray(_) &&
              _.length > 0 &&
              typeof _[0] == "object" &&
              typeof _[0].clan_accoundid == "number"
            );
          }
          async LoadKnownAllRSSInfo() {
            const _ = new Array(),
              _ = _._.Get();
            this.m_rgRSSEnabledClans.forEach((_) => {
              _.BHasClanIDLoaded(_.clan_accoundid) ||
                _.push(_.QueueCuratorAdminInfoLoad(_.clan_accoundid));
            }),
              await Promise.all(_);
          }
          ExtractWithoutRSSAutomation() {
            const _ = [],
              _ = _._.Get();
            return (
              this.m_rgRSSEnabledClans.forEach((_) => {
                const _ = _.GetRSSAdminForClanAccountID(_.clan_accoundid);
                _ && !_.BIsAutomationEnabled() && _.push(_.clan_accoundid);
              }),
              _
            );
          }
          async HintLoadAccounts() {}
          async ReindexClanEventsAndReloadAccount(_) {
            const _ =
                _._.STORE_BASE_URL + "events_admin/ajaxflushandreindexrss",
              _ = new FormData();
            _.set("sessionid", (0, _._)()), _.append("clanids", "" + _);
            try {
              if (
                (
                  await _().post(_, _, {
                    withCredentials: !0,
                  })
                )?.data?.success == _._
              )
                return !0;
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "Failed to ReindexClanEventsAndReloadAccount: " + _.strErrorMsg,
                _,
              );
            }
            return !1;
          }
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
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        const _ = (_) => {
            const [_, _] = (0, _.useState)(!0);
            if (
              ((0, _.useEffect)(() => {
                (async () => (
                  _._.Init(), await _.Get().HintLoadAccounts(), _(!1)
                ))();
              }, []),
              _)
            )
              return (0, _.jsx)(_._, {
                string: (0, _._)("#Loading"),
                size: "medium",
              });
            const _ = _.Get().GetTrustedEnabledClans(!0),
              _ = _.Get().GetTrustedEnabledClans(!1);
            return (0, _.jsx)("div", {
              children: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)("h1", {
                    children: (0, _._)("#RSSModeration_Title"),
                  }),
                  (0, _.jsx)(_, {}),
                  (0, _.jsx)(_, {
                    rgClanIDs: _.Get()
                      .GetAllRSSEnabledClans()
                      .map((_) => _.clan_accoundid),
                  }),
                  (0, _.jsx)(_, {
                    rgClanIDs: _,
                    strTitle: (0, _._)("#RSSModeration_TrustTitle"),
                  }),
                  (0, _.jsx)(_, {
                    rgClanIDs: _,
                    strTitle: (0, _._)("#RSSModeration_RestTitle"),
                  }),
                ],
              }),
            });
          },
          _ = (0, _._)(_),
          _ = (0, _._)((_) => {
            const [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(void 0);
            return _
              ? (0, _.jsx)(_._, {
                  string: (0, _._)("#Loading"),
                  size: "medium",
                })
              : _ !== void 0
                ? _.length > 0
                  ? (0, _.jsx)(_, {
                      rgClanIDs: _,
                      strTitle: (0, _._)("#RSSModeration_InactiveAutomation"),
                    })
                  : (0, _.jsx)("div", {
                      children: (0, _._)("#RSSModreation_AllAutomationEnabled"),
                    })
                : (0, _.jsxs)(_._, {
                    onClick: async () => {
                      _(!0),
                        await _.Get().LoadKnownAllRSSInfo(),
                        _(_.Get().ExtractWithoutRSSAutomation()),
                        _(!1);
                    },
                    children: [(0, _._)("#RSSModeration_FindInActive"), " "],
                  });
          }),
          _ = (_) => {
            const { rgClanIDs: _, strTitle: _ } = _,
              [_, _] = (0, _.useState)(!1);
            let _ = null;
            return (
              _ ||
                (_ = _.map((_) =>
                  (0, _.jsx)(
                    _,
                    {
                      clanAccountID: _,
                    },
                    _,
                  ),
                )),
              (0, _.jsxs)("div", {
                className: (0, _._)(_().SectionContainer),
                children: [
                  (0, _.jsxs)("h2", {
                    className: (0, _._)(_().ModSectionTitle),
                    onDoubleClick: () => _(!_),
                    children: [
                      _,
                      (0, _.jsx)("span", {
                        children: "\xA0",
                      }),
                      (0, _.jsx)(_._, {
                        className: _().ResizeButton,
                        onClick: () => _(!_),
                        children: _
                          ? (0, _.jsx)(_.hz4, {})
                          : (0, _.jsx)(_.Xjb, {}),
                      }),
                    ],
                  }),
                  _ &&
                    (0, _.jsx)(_._, {
                      onClick: () => _(!1),
                      children: (0, _._)("#Sale_ShowContents"),
                    }),
                  _,
                ],
              })
            );
          },
          _ = (0, _._)((_) => {
            const { clanAccountID: _ } = _;
            return _._.BHasClanInfoLoadedByAccountID(_) &&
              _._.Get().BHasClanIDLoaded(_)
              ? (0, _.jsx)(_, {
                  clanInfo: _._.GetClanInfoByClanAccountID(_),
                  rssAdminInfo: _._.Get().GetRSSAdminForClanAccountID(_),
                })
              : (0, _.jsx)(_, {
                  clanAccountID: _,
                });
          }),
          _ = (_) => {
            const { clanAccountID: _ } = _,
              _ = "500px",
              _ = async () => {
                const _ = _._.InitFromClanID(_);
                await Promise.all([
                  _._.LoadClanInfoForClanSteamID(_),
                  _._.Get().QueueCuratorAdminInfoLoad(_),
                ]);
              },
              _ = (0, _._)(
                {
                  onEnter: _,
                },
                {
                  rootMargin: `${_} 0px ${_} 0px`,
                },
              );
            return (0, _.jsx)("div", {
              ref: _,
              className: _().TileContainer,
              children: (0, _.jsxs)("div", {
                children: [(0, _._)("#Loading"), " - ", _],
              }),
            });
          },
          _ = (_) => {
            const { clanInfo: _, rssAdminInfo: _ } = _,
              [_, _] = (0, _.useState)(!1),
              _ = _._.STORE_BASE_URL + "newshub/group/" + _.clanAccountID,
              _ =
                _._.STORE_BASE_URL +
                "curator/" +
                _.clanAccountID +
                "/admin/manage_rss",
              _ = _._.COMMUNITY_BASE_URL + "group/" + _.clanAccountID,
              _ =
                "https://steamsupport.valvesoftware.com/clan/overview/" +
                _._.InitFromClanID(_.clanAccountID).ConvertTo64BitString(),
              _ = _._.Get().GetRSSAdminStats(_.clanAccountID);
            return (0, _.jsxs)("div", {
              className: (0, _._)(_().TileContainer),
              children: [
                (0, _.jsxs)("div", {
                  className: (0, _._)(_().TileSpread),
                  children: [
                    (0, _.jsxs)("div", {
                      children: [
                        (0, _.jsxs)("div", {
                          children: [_.group_name, " - ", _.clanAccountID],
                        }),
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _.jsxs)("div", {
                              children: [
                                (0, _._)("#CuratorAdmin_RSSFeed"),
                                ":",
                              ],
                            }),
                            (0, _.jsx)("a", {
                              href: _.GetRSSUrl(),
                              children: _.GetRSSUrl(),
                            }),
                          ],
                        }),
                        !!_ &&
                          (0, _.jsxs)("div", {
                            children: [
                              (0, _.jsx)("div", {
                                children: (0, _._)(
                                  "#RSSModeration_TotalEvents",
                                  (0, _._)(_.total_event_count),
                                ),
                              }),
                              (0, _.jsx)("div", {
                                children: (0, _._)(
                                  "#RSSModeration_RSSEvents",
                                  (0, _._)(_.rss_event_count),
                                ),
                              }),
                            ],
                          }),
                        (0, _.jsx)(_._, {
                          onClick: () => _(!_),
                          children: (0, _._)(
                            _
                              ? "#Bbcode_Expand_Details_Expanded"
                              : "#Bbcode_Expand_Details_Collapsed",
                          ),
                        }),
                      ],
                    }),
                    (0, _.jsx)("div", {
                      children: (0, _.jsxs)("ul", {
                        children: [
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)("a", {
                              href: _,
                              children: (0, _._)(
                                "#EventDisplay_NewsHubSubtitle",
                              ),
                            }),
                          }),
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)("a", {
                              href: _,
                              children: (0, _._)("#CuratorAdmin_RSSFeed_title"),
                            }),
                          }),
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)("a", {
                              href: _,
                              children: (0, _._)("#RSSModeration_GroupPage"),
                            }),
                          }),
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)("a", {
                              href: _,
                              children: (0, _._)("#RSSModeration_SupportPage"),
                            }),
                          }),
                          (0, _.jsx)("li", {
                            children: (0, _.jsx)(_, {
                              rgClanIDs: [_.clanAccountID],
                            }),
                          }),
                        ],
                      }),
                    }),
                    (0, _.jsx)("div", {
                      className: _().CreatorCtn,
                      children: (0, _.jsx)(_._, {
                        bHideCreatorType: !0,
                        creatorID: {
                          name: null,
                          clan_account_id: _.clanAccountID,
                          type: "developer",
                        },
                        bSmallFormat: !0,
                      }),
                    }),
                  ],
                }),
                !!_ &&
                  (0, _.jsx)(_.Fragment, {
                    children: _.BHasSavedRSSURL()
                      ? (0, _.jsx)(_._, {
                          strRssURL: _.GetRSSUrl(),
                          admin: _,
                        })
                      : (0, _.jsx)("div", {
                          children: (0, _._)("#RSSModeration_NoRSSFeed"),
                        }),
                  }),
              ],
            });
          },
          _ = (_) => {
            const _ = (_) => {
              (0, _._)(
                (0, _.jsx)(_, {
                  ..._,
                }),
                (0, _._)(_),
              );
            };
            return (0, _.jsx)(_._, {
              toolTipContent: (0, _._)("#RSSModeration_ReindexAndReload_ttip"),
              children: (0, _.jsx)(_._, {
                onClick: _,
                children: (0, _._)("#RSSModeration_ReindexAndReload"),
              }),
            });
          },
          _ = (_) => {
            const [_, _] = (0, _.useState)(void 0),
              [_, _] = (0, _.useState)(!1),
              [_, _] = (0, _.useState)(void 0),
              _ = () => _.closeModal && _.closeModal(),
              _ = async () => {
                let _ = 0;
                _(_);
                for (let _ = 0; _ < _.rgClanIDs.length; ++_) {
                  let _ = _.rgClanIDs[_];
                  if (await _.Get().ReindexClanEventsAndReloadAccount(_))
                    (_ += 1), _(_);
                  else {
                    _((0, _._)("#Error_Generic_Label"));
                    break;
                  }
                }
                _(!0);
              };
            return (0, _.jsx)(_._, {
              onEscKeypress: _,
              children: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsxs)(_._, {
                    children: [
                      " ",
                      (0, _._)("#RSSModeration_ReindexAndReload"),
                      " ",
                    ],
                  }),
                  (0, _.jsxs)(_._, {
                    children: [
                      (0, _.jsxs)(_._, {
                        children: [
                          _ === void 0
                            ? (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#RSSModeration_Reindex_Verify",
                                      _.rgClanIDs.length,
                                    ),
                                  }),
                                  (0, _.jsx)(_._, {
                                    onClick: _,
                                    children: (0, _._)("#Button_Continue"),
                                  }),
                                ],
                              })
                            : (0, _.jsxs)(_.Fragment, {
                                children: [
                                  (0, _.jsx)("span", {
                                    children: (0, _._)(
                                      "#RSSModeration_Reindex_Action",
                                      _,
                                      _.rgClanIDs.length,
                                    ),
                                  }),
                                  _
                                    ? (0, _.jsx)("span", {
                                        children: (0, _._)(
                                          "#EventEditor_ImportFromHTML_ConvertFinished",
                                        ),
                                      })
                                    : (0, _.jsx)(_._, {
                                        size: "small",
                                        string: (0, _._)("#Updating"),
                                      }),
                                ],
                              }),
                          !!_ &&
                            (0, _.jsxs)("span", {
                              children: [_, " "],
                            }),
                        ],
                      }),
                      (0, _.jsx)(_._, {
                        children: (0, _.jsx)(_._, {
                          onClick: _,
                          children: (0, _._)(
                            _ ? "#Button_OK" : "#Button_Cancel",
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
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
        const _ = class _ {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(_) {
            return this.m_mapEventGIDToSolrData.has(_);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {
            (0, _._)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForQueryIncremental(
            _,
            _ = 0,
            _ = 10,
            _,
            _,
            _,
            _,
            _,
            _,
          ) {
            const _ = await this.GetLatestPartnerEvents(
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
              _,
            );
            let _ = new Array();
            return (
              (0, _._)(() => {
                _.forEach((_) => {
                  this.m_mapEventGIDToSolrData.has(_.unique_id) ||
                    (_.push(_),
                    this.m_mapEventGIDToSolrData.set(_.unique_id, _),
                    this.m_listEvents.push(_));
                });
              }),
              _
            );
          }
          async GetLatestPartnerEvents(
            _,
            _ = 0,
            _ = 10,
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
          ) {
            const _ =
                _._.STORE_BASE_URL + "events_admin/ajaxgetlatestpartnerevents",
              _ = {
                page: _,
                count: _,
                date: _,
                appids: _ === void 0 ? void 0 : _.join(","),
                required_tags: _ === void 0 ? void 0 : _.join(","),
                exclude_tags: _ === void 0 ? void 0 : _.join(","),
                eventtypefilter: _ === void 0 ? void 0 : _.join(","),
                orderByVisibility: _ || void 0,
                creator_home_clan_id: _ === void 0 ? void 0 : _.join(","),
                showUnpublished: _ === void 0 ? void 0 : _,
                sale_only: _ === void 0 ? void 0 : _,
                term: _ === void 0 ? void 0 : _,
              },
              _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
            return _.data ? _.data.docs : [];
          }
        };
        _([_._], _.prototype, "m_mapEventGIDToSolrData", 2),
          _([_._], _.prototype, "m_listEvents", 2),
          _([_._], _.prototype, "ClearAllSolrEvents", 1);
        let _ = _;
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
          constructor() {
            (0, _._)(this);
          }
          m_backfill = void 0;
          m_mapEventGIDProcessed = new Map();
          m_vecEventGID = new Array();
          m_bBackfillInProgress = !1;
          m_nProcessed = 0;
          m_nSuccesses = 0;
          m_nFailures = 0;
          m_nWarning = 0;
          m_nSkipped = 0;
          GetBackfill() {
            return this.m_backfill;
          }
          SetBackfill(_) {
            this.m_backfill = _;
          }
          StartBackfill(_) {
            (this.m_backfill = _), (this.m_bBackfillInProgress = !0);
          }
          CompleteBackfill(_) {
            (this.m_backfill = void 0), (this.m_bBackfillInProgress = !1);
          }
          BIsBackkFillInProgress() {
            return this.m_bBackfillInProgress;
          }
          GetEventBackfillProgress() {
            return this.m_mapEventGIDProcessed;
          }
          CreateOrGetBackfillProgess(_) {
            return (
              this.m_mapEventGIDProcessed.has(_) ||
                (this.m_mapEventGIDProcessed.set(_, {
                  bProcessing: !1,
                }),
                this.m_vecEventGID.push(_)),
              this.m_mapEventGIDProcessed.get(_)
            );
          }
          BHasProgress(_) {
            return this.m_mapEventGIDProcessed.has(_);
          }
          GetBackfillGIDs() {
            return this.m_vecEventGID;
          }
          CloseProgress(_, _) {
            (this.m_nProcessed += 1),
              _.bAlreadyProcessed || _.bSkipped
                ? (this.m_nSkipped += 1)
                : _.bSucceeded
                  ? (this.m_nSuccesses += 1)
                  : _.bFailed && (this.m_nFailures += 1),
              _.bWarning && (this.m_nWarning += 1),
              this.m_mapEventGIDProcessed.set(_, _);
          }
        }
        _([_._], _.prototype, "m_backfill", 2),
          _([_._], _.prototype, "m_mapEventGIDProcessed", 2),
          _([_._], _.prototype, "m_bBackfillInProgress", 2),
          _([_._], _.prototype, "m_nProcessed", 2),
          _([_._], _.prototype, "m_nSuccesses", 2),
          _([_._], _.prototype, "m_nFailures", 2),
          _([_._], _.prototype, "m_nWarning", 2),
          _([_._], _.prototype, "m_nSkipped", 2),
          _([_._], _.prototype, "StartBackfill", 1),
          _([_._], _.prototype, "CompleteBackfill", 1),
          _([_._], _.prototype, "CloseProgress", 1);
        const _ = new _();
        var _ = __webpack_require__("chunkid"),
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
        const _ = 25,
          _ = 5e3;
        let _ = class extends _.Component {
          m_cancelSignal = _().CancelToken.source();
          m_nImageID = 0;
          m_mapArtworkResizeSuccess = new Map();
          state = {
            eBackfillState: void 0,
          };
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventBackfillLanding component unmounted",
            );
          }
          OnArtworkResizeBackfill() {
            this.state.eBackfillState == null &&
              this.setState(
                {
                  eBackfillState: "started",
                },
                this.BeginArtworkResize,
              );
          }
          BeginArtworkResize() {
            this.m_mapArtworkResizeSuccess.set("capsule", 0),
              this.m_mapArtworkResizeSuccess.set("spotlight", 0),
              this.m_mapArtworkResizeSuccess.set("background", 0),
              this.RunArtworkResizeBackfill()
                .then(() =>
                  this.setState({
                    eBackfillState: "success",
                  }),
                )
                .catch((_) => {
                  let _ = (0, _._)(_);
                  console.error(
                    "EventBackfillLanding: error " + _.strErrorMsg,
                    _,
                  ),
                    this.setState({
                      eBackfillState: "error",
                    });
                });
          }
          async GetImageInfo(_, _, _ = "") {
            const _ = (0, _._)(_),
              _ = _._.GetHashFromHashAndExt(_) + _;
            return _._.AsyncGetImageResolution(
              _,
              _,
              _,
              this.m_cancelSignal,
              !0,
            );
          }
          HandleErrorFatal(_, _, _, _) {
            let _ = (0, _._)(_),
              _ =
                "EventBackfillLanding: " +
                _ +
                " on GID " +
                _ +
                " : " +
                _.strErrorMsg;
            console.error(_, _),
              _
                ? ((_.bFailed = !0), (_.strMessage = _), _.CloseProgress(_, _))
                : _.CompleteBackfill("resize_image");
          }
          async HandleResizeForImageType(_, _, _, _, _) {
            for (let _ = _.Bhc; _ < _.length && _ < _.bP9; ++_)
              if (_[_] && _[_].length > 0) {
                let _ = _[_],
                  _ = (0, _._)(_);
                const _ = new _._(_.clan_steamid);
                if (_) {
                  let _ = await this.GetImageInfo(_, _).catch(
                    (_) => (
                      this.HandleErrorFatal(
                        null,
                        _,
                        "GetImageInfo Original",
                        _,
                      ),
                      {
                        height: 0,
                        width: 0,
                        success: _._,
                      }
                    ),
                  );
                  if (_.success == _._ && (0, _._)(_.width, _.height, _, !0))
                    if (
                      (
                        await this.GetImageInfo(_, _, _).catch(
                          (_) => (
                            this.HandleErrorFatal(
                              null,
                              _,
                              "GetImageInfo Resize",
                              _,
                            ),
                            {
                              height: 0,
                              width: 0,
                              success: _._,
                            }
                          ),
                        )
                      ).success == _._
                    )
                      _.bAlreadyProcessed = !0;
                    else {
                      _.bProcessing = !0;
                      let _ = _._.GetHashFromHashAndExt(_),
                        _ = _._.GetExtStringFromHashAndExt(_),
                        _ = (0, _._)(_);
                      if (_)
                        try {
                          const _ = await (0, _._)(
                            this.m_cancelSignal.token,
                            _,
                            _,
                            _,
                            _,
                          );
                          console.log("success on the resize request"),
                            _ == _.length
                              ? ((_.bSucceeded = !0),
                                this.m_mapArtworkResizeSuccess.set(
                                  _,
                                  this.m_mapArtworkResizeSuccess.get(_) + 1,
                                ))
                              : ((_.bFailed = !0),
                                (_.strMessage =
                                  "Did not resize all: " +
                                  _ +
                                  " " +
                                  _ +
                                  " / " +
                                  _.length));
                        } catch (_) {
                          _.bFailed = !0;
                          let _ = (0, _._)(_);
                          (_.strMessage = _.strErrorMsg),
                            console.error("Resize: " + _.strErrorMsg, _);
                        }
                      else
                        (_.bFailed = !0),
                          console.error(
                            "Resize: resize request couldn't be determined from the artwork type",
                          );
                    }
                  else _.bSkipped = !0;
                } else _.bSkipped = !0;
              }
          }
          async RunArtworkResizeBackfill() {
            _.StartBackfill("resize_image");
            let _ = 0;
            for (; _.BIsBackkFillInProgress(); ) {
              let _ = await _.Get()
                .LoadPartnerEventForQueryIncremental(this.m_cancelSignal, _, _)
                .catch((_) =>
                  this.HandleErrorFatal(
                    null,
                    _,
                    "LoadPartnerEventForQueryIncremental",
                  ),
                );
              if (!_ || _.length == 0) {
                _.CompleteBackfill("resize_image"),
                  console.log("Compelted the backfill");
                break;
              }
              _ += _.length;
              for (let _ = 0; _ < _.length; ++_) {
                let _ = _[_],
                  _ = _.CreateOrGetBackfillProgess(_.unique_id);
                if (!_.announcement_gid || _.announcement_gid.length == 0) {
                  (_.bSkipped = !0),
                    (_.bWarning = !0),
                    _.CloseProgress(_.unique_id, _);
                  continue;
                }
                if (
                  (await _._.LoadPartnerEventFromAnnoucementGID(
                    Number(_.appid),
                    _.announcement_gid,
                    100,
                  ).catch((_) => {
                    this.HandleErrorFatal(
                      _.announcement_gid,
                      _,
                      "LoadPartnerEventFromAnnoucementGID",
                      _,
                    );
                  }),
                  _.bFailed)
                )
                  continue;
                let _ = _._.GetClanEventFromAnnouncementGID(_.announcement_gid);
                if (!_) {
                  (_.bFailed = !0),
                    (_.strMessage = "Failed to load the event: " + _.unique_id),
                    _.CloseProgress(_.unique_id, _);
                  continue;
                }
                if (_.bSucceeded || _.bFailed || _.bAlreadyProcessed) {
                  (_.bAlreadyProcessed = !0), _.CloseProgress(_.unique_id, _);
                  continue;
                }
                if (
                  ((_.bAnalysing = !0),
                  this.setState({
                    strInfo:
                      "Processing " +
                      _.GetBackfillGIDs().length +
                      " Appid: " +
                      _.appid +
                      " Event " +
                      _.GID +
                      " Title: " +
                      _.GetNameWithFallback(_.Bhc),
                  }),
                  _.jsondata && _.jsondata.localized_capsule_image)
                ) {
                  let _ = _.jsondata.localized_capsule_image;
                  await this.HandleResizeForImageType(
                    _,
                    _,
                    _,
                    "capsule",
                    _._.capsule_main,
                  ).catch((_) =>
                    this.HandleErrorFatal(
                      null,
                      _,
                      "HandleResizeForImageType capsule",
                      _,
                    ),
                  );
                }
                if (_.jsondata && _.jsondata.localized_title_image) {
                  let _ = _.jsondata.localized_title_image;
                  await this.HandleResizeForImageType(
                    _,
                    _,
                    _,
                    "background",
                    _._.background_mini,
                  ).catch((_) =>
                    this.HandleErrorFatal(
                      null,
                      _,
                      "HandleResizeForImageType background",
                      _,
                    ),
                  );
                }
                if (_.jsondata && _.jsondata.localized_spotlight_image) {
                  let _ = _.jsondata.localized_spotlight_image;
                  await this.HandleResizeForImageType(
                    _,
                    _,
                    _,
                    "spotlight",
                    _._.spotlight_main,
                  ).catch((_) =>
                    this.HandleErrorFatal(
                      null,
                      _,
                      "HandleResizeForImageType spotlight",
                      _,
                    ),
                  );
                }
                if (
                  (_.CloseProgress(_.unique_id, _), !_.BIsBackkFillInProgress())
                )
                  break;
              }
              if (_.m_nFailures > _) {
                console.log("Hit too many errors, stoppinng the backfill");
                break;
              }
            }
          }
          RenderFailure() {
            let _ = new Array();
            return (
              _.m_nFailures > 0 &&
                _.GetBackfillGIDs().forEach((_) => {
                  let _ = _.GetEventBackfillProgress().get(_);
                  if (_ && _.bFailed) {
                    let _ = _._.GetClanEventModel(_);
                    _ &&
                      _.push(
                        (0, _.jsxs)(
                          "div",
                          {
                            children: [
                              (0, _.jsx)(_._, {
                                eventModel: _,
                                route: _._.k_eView,
                                children: _.GetNameWithFallback(_.Bhc),
                              }),
                              (0, _.jsx)("div", {
                                className: _.Error,
                                children: _.strMessage,
                              }),
                            ],
                          },
                          _,
                        ),
                      );
                  }
                }),
              _
            );
          }
          RenderResizeProgress() {
            let _ = new Array();
            return (
              _.push(
                (0, _.jsxs)(
                  "div",
                  {
                    children: [
                      "Capsule Resized: ",
                      this.m_mapArtworkResizeSuccess.get("capsule"),
                      " ",
                    ],
                  },
                  "res_capsule",
                ),
              ),
              _.push(
                (0, _.jsxs)(
                  "div",
                  {
                    children: [
                      "Header Resized: ",
                      this.m_mapArtworkResizeSuccess.get("background"),
                      " ",
                    ],
                  },
                  "res_header",
                ),
              ),
              _.push(
                (0, _.jsxs)(
                  "div",
                  {
                    children: [
                      "Spotlight Resized: ",
                      this.m_mapArtworkResizeSuccess.get("spotlight"),
                      " ",
                    ],
                  },
                  "res_spotlightr",
                ),
              ),
              _
            );
          }
          render() {
            let _ = this.RenderFailure(),
              _ = this.m_mapArtworkResizeSuccess.has("capsule")
                ? this.RenderResizeProgress()
                : void 0;
            return (0, _.jsxs)("div", {
              children: [
                (0, _.jsx)("h2", {
                  children: "Partner Events Backfill Processing Page",
                }),
                this.state.eBackfillState == null &&
                  (0, _.jsx)("div", {
                    children: (0, _.jsx)("button", {
                      onClick: this.OnArtworkResizeBackfill,
                      children: "Begin Artwork Resize Backfill",
                    }),
                  }),
                (0, _.jsx)("div", {
                  children: (0, _.jsx)("button", {
                    onClick: () => _.CompleteBackfill("resize_image"),
                    children: "Stop Backfill",
                  }),
                }),
                this.state.strInfo &&
                  (0, _.jsxs)("div", {
                    children: ["Processing: ", this.state.strInfo],
                  }),
                (0, _.jsxs)("div", {
                  children: ["Events Processed: ", _.m_nProcessed],
                }),
                (0, _.jsxs)("div", {
                  children: ["Events Succeeded: ", _.m_nSuccesses],
                }),
                (0, _.jsxs)("div", {
                  children: ["Events Warning: ", _.m_nWarning],
                }),
                (0, _.jsxs)("div", {
                  children: ["Events Failed: ", _.m_nFailures],
                }),
                (0, _.jsxs)("div", {
                  children: ["Events Skipped: ", _.m_nSkipped],
                }),
                _.length > 0 &&
                  (0, _.jsxs)(_.Fragment, {
                    children: [
                      (0, _.jsx)("h2", {
                        children: "Failure Info",
                      }),
                      _,
                    ],
                  }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("h2", {
                        children: "Resizing Actions",
                      }),
                      _,
                    ],
                  }),
                this.state.eBackfillState == "started" &&
                  (0, _.jsx)(_._, {
                    size: "medium",
                    position: "center",
                    string: "Backfill In Progress",
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "OnArtworkResizeBackfill", 1),
          _([_._], _.prototype, "BeginArtworkResize", 1),
          (_ = _([_._], _));
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__._(_),
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
        const _ = __webpack_require__("chunkid"),
          _ = ["mod_reviewed", "auto_migrated"],
          _ = 20,
          _ = class _ {
            static s_Singleton;
            selectedTags = void 0;
            excludedTags = void 0;
            filterDate = void 0;
            filterDateAsString = void 0;
            eventsToLoadPerPaging = _;
            filterEventTypes = void 0;
            bOrderByVisibilityStartTime = !1;
            bUseCustomQuery = !1;
            static Get() {
              return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
            }
            constructor() {
              (0, _._)(this);
            }
            Init(_) {
              const _ = new URLSearchParams(window.location.search);
              let _;
              _.has("selectedTags") &&
                (_ = _.getAll("selectedTags")
                  .filter(Boolean)
                  .map((_) => ({
                    label: _,
                    value: _,
                  })));
              let _ = !1,
                _ = _.map((_) => ({
                  label: _,
                  value: _,
                }));
              _.has("excludedTags") &&
                ((_ = _.getAll("excludedTags")
                  .filter(Boolean)
                  .map((_) => ({
                    label: _,
                    value: _,
                  }))),
                (_ = _?.length > 0));
              let _;
              _.has("eventtype") &&
                (_ = _.getAll("eventtype")
                  .filter(Boolean)
                  .map((_) => {
                    const _ = Number.parseInt(_.get("eventtype"));
                    return {
                      label: (0, _._)(_),
                      value: _,
                    };
                  }));
              let _;
              _.has("filterDate") &&
                _.get("filterDate")?.length > 0 &&
                (_ = _.unix(Number(_.get("filterDate"))));
              let _ = !1;
              _.has("orderByVisibility") &&
                _.get("orderByVisibility")?.length > 0 &&
                (_ = !!_.get("orderByVisibility")),
                (0, _._)(() => {
                  (this.selectedTags = _),
                    (this.excludedTags = _),
                    (this.filterEventTypes = _),
                    (this.filterDate = _),
                    (this.bOrderByVisibilityStartTime = _),
                    (this.bUseCustomQuery =
                      (_ && _.length > 0) || _ || (_ && _.length > 0));
                });
            }
          };
        _([_._], _.prototype, "selectedTags", 2),
          _([_._], _.prototype, "excludedTags", 2),
          _([_._], _.prototype, "filterDate", 2),
          _([_._], _.prototype, "filterDateAsString", 2),
          _([_._], _.prototype, "eventsToLoadPerPaging", 2),
          _([_._], _.prototype, "filterEventTypes", 2),
          _([_._], _.prototype, "bOrderByVisibilityStartTime", 2),
          _([_._], _.prototype, "bUseCustomQuery", 2);
        let _ = _;
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
          },
          _ = ((_) => (
            (_[(_.k_ModReviewed = 0)] = "k_ModReviewed"),
            (_[(_.k_ModUnreviewed = 1)] = "k_ModUnreviewed"),
            (_[(_.k_ChangeEventType = 2)] = "k_ChangeEventType"),
            (_[(_.k_UpdateSeasonTags = 3)] = "k_UpdateSeasonTags"),
            (_[(_.k_ModReReviewed = 4)] = "k_ModReReviewed"),
            (_[(_.k_ModRemovedFromSteamChina = 5)] =
              "k_ModRemovedFromSteamChina"),
            (_[(_.k_ModFlagAdultOnlyContent = 6)] =
              "k_ModFlagAdultOnlyContent"),
            (_[(_.k_ModRemoveAdultOnlyContent = 7)] =
              "k_ModRemoveAdultOnlyContent"),
            (_[(_.k_ModFlagHalloweenEvent = 8)] = "k_ModFlagHalloweenEvent"),
            (_[(_.k_ModRemoveHalloweenEvent = 9)] =
              "k_ModRemoveHalloweenEvent"),
            _
          ))(_ || {});
        const _ = "ModAct";
        class _ {
          m_moderator;
          m_rtWhen;
          m_action;
          m_newEventType;
          m_newTagAdded;
          ToModString() {
            let _ =
              _ +
              "_" +
              this.m_moderator +
              "_" +
              Math.floor(this.m_rtWhen) +
              "_" +
              this.m_action;
            switch (this.m_action) {
              case 2:
                _ += "_" + this.m_newEventType;
                break;
              case 3:
                _ += "_" + this.m_newTagAdded;
                break;
            }
            return _;
          }
          FromString(_) {
            let _ = _.split("_");
            if (!_ || _[0] !== _) return !1;
            switch (
              ((this.m_moderator = Number(_[1])),
              (this.m_rtWhen = Number(_[2])),
              (this.m_action = Number(_[3])),
              this.m_action)
            ) {
              case 2:
                this.m_newEventType = Number(_[4]);
                break;
              case 3:
                this.m_newTagAdded = _.slice(4).join("_");
                break;
            }
            return !0;
          }
          SetActionChangeEvent(_) {
            return (
              (this.m_moderator = _._.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 2),
              (this.m_newEventType = _),
              this
            );
          }
          SetReviewAction(_) {
            return (
              (this.m_moderator = _._.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = _ ? 0 : 1),
              this
            );
          }
          SetAdultOnlyContentAction(_) {
            return (
              (this.m_moderator = _._.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = _ ? 6 : 7),
              this
            );
          }
          SetHalloweenEventTypeAction(_) {
            return (
              (this.m_moderator = _._.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = _ ? 8 : 9),
              this
            );
          }
          SetReReviewAction(_) {
            return (
              (this.m_moderator = _._.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = _ ? 4 : 1),
              this
            );
          }
          static IsAuditAction(_) {
            return _.startsWith(_);
          }
          SetUpdateSeasonalTags(_) {
            return (
              (this.m_moderator = _._.accountid),
              (this.m_rtWhen = Date.now() / 1e3),
              (this.m_action = 3),
              (this.m_newTagAdded = _),
              this
            );
          }
        }
        const _ = class _ {
          static s_Singleton;
          m_mapEventGIDToSolrData = new Map();
          m_listEvents = new Array();
          BHasSolrEvent(_) {
            return this.m_mapEventGIDToSolrData.has(_);
          }
          GetAllSolrEvents() {
            return this.m_listEvents;
          }
          static Get() {
            return _.s_Singleton || (_.s_Singleton = new _()), _.s_Singleton;
          }
          constructor() {
            (0, _._)(this);
          }
          ClearAllSolrEvents() {
            (this.m_mapEventGIDToSolrData = new Map()),
              (this.m_listEvents = new Array());
          }
          async LoadPartnerEventForModerationIncremental(_, _ = 30) {
            const _ =
              _._.STORE_BASE_URL +
              "events_admin/ajaxgetmoderationspecificpartnerevents";
            let _ = 0;
            this.m_listEvents?.length &&
              (this.m_listEvents.forEach(
                (_) =>
                  (_ = Math.max(
                    _,
                    Math.floor(Date.parse(_.last_modified_date) / 1e3),
                  )),
              ),
              this.m_listEvents.filter(
                (_) => Math.floor(Date.parse(_.last_modified_date) / 1e3) == _,
              ).length >= _ && _++);
            const _ = {
              start_time: _,
              count: _,
            };
            try {
              const _ = await _().get(_, {
                params: _,
                withCredentials: !0,
                cancelToken: _ ? _.token : void 0,
              });
              if (_ && _.token.reason) return [];
              if (_ && _.data) {
                let _ = new Array();
                return (
                  (0, _._)(() => {
                    _.data.docs.forEach((_) => {
                      this.m_mapEventGIDToSolrData.has(_.unique_id) ||
                        (_.push(_),
                        this.m_mapEventGIDToSolrData.set(_.unique_id, _),
                        this.m_listEvents.push(_));
                    });
                  }),
                  _
                );
              }
            } catch (_) {
              const _ = (0, _._)(_);
              console.error(
                "LoadPartnerEventForModerationIncremental failed:" +
                  _.strErrorMsg,
                _,
              );
            }
            return [];
          }
          async UpdateTagsOnPartnerEvent(_, _, _, _, _, _) {
            const _ = _._.STORE_BASE_URL + "events_admin/ajaxupdatetags";
            let _ = _.join(",");
            _ && (_.length > 0 && (_ += ","), (_ += _.ToModString()));
            const _ = new FormData();
            return (
              _.append("sessionid", (0, _._)()),
              _.append("clan_accountid", "" + _.GetAccountID()),
              _.append("gid_announcement", _),
              _.append("add_tags", _),
              _.append("remove_tags", _.join(",")),
              (
                await _().post(_, _, {
                  withCredentials: !0,
                  cancelToken: _.token,
                })
              ).data.tags
            );
          }
          async UpdatePartnerEventType(_, _, _, _) {
            const _ = _._.STORE_BASE_URL + "events_admin/ajaxupdateeventtype",
              _ = new FormData();
            _.append("sessionid", (0, _._)()),
              _.append("clan_accountid", "" + _.GetAccountID()),
              _.append("gid_event", _),
              _.append("new_event_type", "" + _),
              await _().post(_, _, {
                withCredentials: !0,
                cancelToken: _.token,
              });
          }
        };
        _([_._], _.prototype, "m_mapEventGIDToSolrData", 2),
          _([_._], _.prototype, "m_listEvents", 2),
          _([_._], _.prototype, "ClearAllSolrEvents", 1);
        let _ = _;
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const { accountID: _, locToken: _ } = _,
            _ = _.useMemo(() => _._.InitFromAccountID(_), [_]),
            { data: _ } = (0, _._)(_);
          let _ =
            "https://steamsupport.valvesoftware.com/account/overview/" +
            _.ConvertTo64BitString();
          return (0, _.jsx)("div", {
            children: (0, _._)(
              _,
              (0, _.jsx)("a", {
                href: _,
                target: _._.IN_CLIENT ? void 0 : "_blank",
                children: _
                  ? (0, _.jsx)(_.Fragment, {
                      children: _.m_strPlayerName,
                    })
                  : (0, _.jsx)(_.Fragment, {
                      children: (0, _.jsx)("span", {
                        children: _,
                      }),
                    }),
              }),
            ),
          });
        }
        function _(_) {
          const { modAction: _ } = _,
            _ =
              (0, _._)(_.m_rtWhen) +
              " @ " +
              (0, _._)(_.m_rtWhen, {
                bForce24HourClock: !1,
              }),
            _ = (0, _.jsx)(_, {
              locToken: "#EventModTile_Moderator",
              accountID: _.m_moderator,
            });
          switch (_.m_action) {
            case _.k_ModReviewed:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_Reviewed",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                ),
              });
            case _.k_ModUnreviewed:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_UnReviewed",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                ),
              });
            case _.k_ChangeEventType:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_NewEventType",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                  (0, _._)(_.m_newEventType),
                ),
              });
            case _.k_UpdateSeasonTags:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_SeasonTagUpdate",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                  _.m_newTagAdded,
                ),
              });
            case _.k_ModReReviewed:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_ReReviewed",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                ),
              });
            case _.k_ModRemovedFromSteamChina:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_RemoveFromSC",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                ),
              });
            case _.k_ModFlagAdultOnlyContent:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_FlagAdultContent",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                ),
              });
            case _.k_ModRemoveAdultOnlyContent:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: (0, _._)(
                  "#EventModTile_Action_RemoveAdultContent",
                  (0, _.jsx)("span", {
                    children: _,
                  }),
                  _,
                ),
              });
            default:
              return (0, _.jsx)("div", {
                className: _.ModeratorAuditActionCtn,
                children: _.ToModString(),
              });
          }
        }
        function _(_) {
          const [_, _] = _.useState(!0),
            _ = 3,
            _ = (_) => {
              const { eventModel: _ } = _;
              return _.map((_) => {
                const _ = new _();
                return (
                  _.FromString(_),
                  (0, _.jsx)(
                    _,
                    {
                      modAction: _,
                    },
                    _.GID + _,
                  )
                );
              });
            },
            { eventModel: _ } = _;
          let _ = _.GetAllTags()
            .filter((_) => _.IsAuditAction(_))
            .reverse();
          const _ = _.length,
            _ = _.length > _ && _;
          return _.length == 0
            ? null
            : (_ && (_ = _.splice(0, _)),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)("h4", {
                    children: (0, _._)("#EventModTile_Action_Title"),
                  }),
                  _(_),
                  _ &&
                    (0, _.jsx)("a", {
                      onClick: () => _(!1),
                      className: _.ExpandModActions,
                      children: (0, _._)("#EventModTile_Action_More", _ - _),
                    }),
                  !_ &&
                    _ > _ &&
                    (0, _.jsx)("a", {
                      onClick: () => _(!0),
                      className: _.ExpandModActions,
                      children: (0, _._)("#EventModTile_Action_Hide"),
                    }),
                ],
              }));
        }
        var _ = __webpack_require__("chunkid"),
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
        const _ = __webpack_require__("chunkid"),
          _ = 500,
          _ = 50,
          _ = {
            bExhaustedEventList: !1,
            bInfiniteScrollLoading: !0,
            nLastFetchCompletedMS: 0,
          };
        let _ = class extends _.Component {
          m_cancelSignal = _().CancelToken.source();
          m_refScroll = _.createRef();
          m_IntervalTimer = void 0;
          state = {
            bInfiniteScrollLoading: !1,
            bExhaustedEventList: !1,
            nLastFetchCompletedMS: 0,
          };
          m_nPage = 0;
          componentDidMount() {
            this.setState(
              {
                bInfiniteScrollLoading: !0,
              },
              this.LoadMoreModerationEvents,
            ),
              window.addEventListener("scroll", this.OnScroll, !0),
              _.Get().Init(this.props.history.location.search);
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationLanding component unmounted",
            ),
              window.removeEventListener("scroll", this.OnScroll),
              this.ClearTimer();
          }
          HandleUpdateQueryParameter() {
            const _ = _.Get();
            if (_.bUseCustomQuery) {
              const {
                selectedTags: _,
                excludedTags: _,
                filterEventTypes: _,
                filterDate: _,
                bOrderByVisibilityStartTime: _,
              } = _;
              if (_ || _ || _ || _ || _) {
                const _ = new URLSearchParams();
                _?.forEach((_) => _.append("selectedTags", _.value)),
                  _?.forEach((_) => _.append("excludedTags", _.value)),
                  _?.forEach((_) => _.append("eventtype", "" + _.value)),
                  _?.unix() > 0 && _.append("filterDate", "" + _.unix()),
                  _ && _.append("orderByVisibility", "1"),
                  this.props.history.push(`?${_.toString()}`);
              } else this.props.history.push("?");
            }
          }
          ClearTimer() {
            this.m_IntervalTimer &&
              (window.clearInterval(this.m_IntervalTimer),
              (this.m_IntervalTimer = void 0));
          }
          HandleError(_) {
            let _ = (0, _._)(_);
            console.error("EventModerationLanding error: " + _.strErrorMsg, _),
              this.setState({
                bInfiniteScrollLoading: !1,
                bExhaustedEventList: !0,
                nLastFetchCompletedMS: Date.now(),
              });
          }
          async LoadMorePublicEventWithDelay() {
            this.m_IntervalTimer = window.setInterval(
              this.LoadMoreModerationEvents,
              _,
            );
          }
          LoadMoreModerationEvents() {
            if ((this.ClearTimer(), this.state.bInfiniteScrollLoading)) {
              let _;
              const _ = _.Get();
              if (_.bUseCustomQuery) {
                let _ = _.filterEventTypes
                    ? _.filterEventTypes.map((_) => _.value)
                    : void 0,
                  _ = _.selectedTags
                    ? _.selectedTags.map((_) => _.value)
                    : void 0,
                  _ = _.excludedTags
                    ? _.excludedTags.map((_) => _.value)
                    : void 0;
                _ = _.Get().LoadPartnerEventForQueryIncremental(
                  this.m_cancelSignal,
                  this.m_nPage,
                  _.eventsToLoadPerPaging,
                  [this.props.appid],
                  _,
                  _,
                  _.filterDate,
                  _,
                  _.bOrderByVisibilityStartTime,
                );
              } else
                _ = _.Get().LoadPartnerEventForModerationIncremental(
                  this.m_cancelSignal,
                  _.eventsToLoadPerPaging,
                );
              _.then((_) => {
                (this.m_nPage += _.eventsToLoadPerPaging),
                  this.setState({
                    bInfiniteScrollLoading: !1,
                    bExhaustedEventList: _.length == 0,
                    nLastFetchCompletedMS: Date.now(),
                  });
              }).catch((_) => this.HandleError(_));
            }
          }
          UpdateQueryParametersAndLoadMoreEvents() {
            this.HandleUpdateQueryParameter(), this.LoadMoreModerationEvents();
          }
          RenderTiles() {
            let _ = new Array();
            return (
              (_.Get().bUseCustomQuery
                ? _.Get().GetAllSolrEvents()
                : _.Get().GetAllSolrEvents()
              ).forEach((_) => {
                _.push(
                  (0, _.jsx)(
                    _,
                    {
                      solrData: _,
                    },
                    _.unique_id,
                  ),
                );
              }),
              _
            );
          }
          OnScroll() {
            if (!this.m_refScroll || !this.m_refScroll.current) return;
            let _ = this.m_refScroll.current;
            _ &&
              (this.state.bExhaustedEventList ||
                this.state.bInfiniteScrollLoading ||
                (_.getBoundingClientRect().bottom <= window.innerHeight + _ &&
                  (this.state.nLastFetchCompletedMS + _ < Date.now()
                    ? this.setState(
                        {
                          bInfiniteScrollLoading: !0,
                        },
                        this.LoadMorePublicEventWithDelay,
                      )
                    : this.setState(
                        {
                          bInfiniteScrollLoading: !0,
                        },
                        this.LoadMoreModerationEvents,
                      ))));
          }
          RefetchAllEventTiles() {
            (this.m_nPage = 0),
              _.Get().ClearAllSolrEvents(),
              _.Get().ClearAllSolrEvents(),
              this.setState(
                {
                  ..._,
                },
                this.UpdateQueryParametersAndLoadMoreEvents,
              );
          }
          render() {
            let _ = this.RenderTiles();
            const _ = _.Get();
            return (0, _.jsxs)("div", {
              className: _.ModerationContainer,
              ref: this.m_refScroll,
              children: [
                (0, _.jsxs)("div", {
                  children: [
                    (0, _.jsx)("h2", {
                      children: (0, _._)("#EventModeration_Title"),
                    }),
                    (0, _.jsx)(_._, {
                      children: (0, _.jsxs)("div", {
                        className: (0, _._)(_().FlexRowContainer),
                        children: [
                          (0, _.jsx)(_, {
                            fnRequireRefetchEvents: this.RefetchAllEventTiles,
                          }),
                          !!_.bUseCustomQuery &&
                            (0, _.jsx)(_, {
                              fnRequireRefetchEvents: this.RefetchAllEventTiles,
                            }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, _.jsx)(_._, {
                  children: _,
                }),
                this.state.bInfiniteScrollLoading &&
                  (0, _.jsx)(_._, {
                    position: "center",
                    size: "medium",
                    string: (0, _._)("#Loading"),
                  }),
              ],
            });
          }
        };
        _([_._], _.prototype, "HandleError", 1),
          _([_._], _.prototype, "LoadMorePublicEventWithDelay", 1),
          _([_._], _.prototype, "LoadMoreModerationEvents", 1),
          _([_._], _.prototype, "UpdateQueryParametersAndLoadMoreEvents", 1),
          _([_._], _.prototype, "OnScroll", 1),
          _([_._], _.prototype, "RefetchAllEventTiles", 1),
          (_ = _([_._], _));
        const _ = (0, _._)(_),
          _ = (0, _._)((_) => {
            const _ = _.Get(),
              { fnRequireRefetchEvents: _ } = _;
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsx)("div", {
                  className: _.FilterContainer,
                  children: (0, _.jsx)(_._, {
                    toolTipContent: (0, _._)(
                      "#EventModeration_ShowCustomFilter_ttip",
                    ),
                    children: (0, _.jsx)(_._, {
                      label: (0, _._)("#EventModeration_ShowCustomFilter"),
                      checked: _.bUseCustomQuery,
                      onChange: (_) => {
                        (_.bUseCustomQuery = _), _();
                      },
                    }),
                  }),
                }),
                (0, _.jsxs)("div", {
                  className: _.FilterContainer,
                  children: [
                    (0, _.jsx)("label", {
                      htmlFor: "EventPerLoad",
                      children: (0, _._)("#EventModeration_PerPageLoad"),
                    }),
                    (0, _.jsx)("div", {
                      children: (0, _.jsx)("input", {
                        type: "number",
                        _: "EventPerLoad",
                        min: "10",
                        max: "200",
                        value: _.eventsToLoadPerPaging,
                        onChange: (_) => {
                          let _ = Number.parseInt(_.currentTarget.value);
                          _ &&
                            _ > 0 &&
                            _ != _.eventsToLoadPerPaging &&
                            (_.eventsToLoadPerPaging = _);
                        },
                      }),
                    }),
                  ],
                }),
              ],
            });
          }),
          _ = (0, _._)((_) => {
            const _ = _.Get(),
              { fnRequireRefetchEvents: _ } = _,
              _ = _.Zi8.map((_) => ({
                value: _,
                label: (0, _._)(_),
              })).sort((_, _) => _.label.localeCompare(_.label)),
              _ = _._.map((_) => ({
                value: _,
                label: _,
              })).sort((_, _) => _.label.localeCompare(_.label)),
              _ = {
                option: (_) => ({
                  ..._,
                  color: "#444444",
                }),
              },
              _ = (_) => {
                let _ = new Date();
                return (
                  _.unix() <
                  _.unix(_.getTime() / 1e3 + 3600 * 24)
                    .hour(0)
                    .seconds(0)
                    .minute(0)
                    .unix()
                );
              };
            return (0, _.jsxs)(_.Fragment, {
              children: [
                (0, _.jsxs)("div", {
                  className: _.FilterContainer,
                  children: [
                    (0, _.jsx)("span", {
                      children: (0, _._)("#EventModeration_FilterByTag"),
                    }),
                    (0, _.jsx)(_._, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (_) => {
                        (_.selectedTags = _), _();
                      },
                      value: _.selectedTags,
                      options: _,
                      styles: _,
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.FilterContainer,
                  children: [
                    (0, _.jsx)("span", {
                      children: (0, _._)("#EventModeration_FilterExcludeByTag"),
                    }),
                    (0, _.jsx)(_._, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (_) => {
                        (_.excludedTags = _), _();
                      },
                      value: _.excludedTags,
                      options: _,
                      styles: _,
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.FilterContainer,
                  children: [
                    (0, _.jsx)("span", {
                      children: (0, _._)("#EventModeration_FilterToType"),
                    }),
                    (0, _.jsx)(_._, {
                      isSearchable: !0,
                      isMulti: !0,
                      onChange: (_) => {
                        (_.filterEventTypes = _), _();
                      },
                      value: _.filterEventTypes,
                      options: _,
                      styles: _,
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.FilterContainer,
                  children: [
                    (0, _.jsx)("span", {
                      children: (0, _._)("#EventModeration_FilterToDate"),
                    }),
                    (0, _.jsx)(_(), {
                      timeFormat: !1,
                      onChange: (_) => {
                        if (typeof _ == "string") {
                          let _ = _(_, "M/D/YYYY", !0);
                          if (!_.isValid()) {
                            _.filterDateAsString = _;
                            return;
                          }
                          _ = _;
                        }
                        _.filterDate != _ &&
                          ((_.filterDateAsString = void 0),
                          (_.filterDate = _),
                          _());
                      },
                      value: _.filterDate,
                      isValidDate: _,
                      inputProps: {
                        placeholder: (0, _._)("#EventModeration_PickDatee"),
                        className: _.TimeWidth,
                      },
                    }),
                  ],
                }),
                (0, _.jsxs)("div", {
                  className: _.FilterContainer,
                  children: [
                    (0, _.jsx)("input", {
                      type: "checkbox",
                      _: "VisibilityStart",
                      checked: _.bOrderByVisibilityStartTime,
                      onChange: (_) => {
                        (_.bOrderByVisibilityStartTime =
                          _.currentTarget.checked),
                          _();
                      },
                    }),
                    (0, _.jsx)("label", {
                      htmlFor: "VisibilityStart",
                      children: (0, _._)(
                        "#EventModeration_OrderByFirstVisible",
                      ),
                    }),
                  ],
                }),
              ],
            });
          }),
          _ = (0, _._)((_) => {
            const { onClick: _, event: _, bSaving: _ } = _;
            let _ = (0, _._)("#EventModTile_Moderate_ClearReviewed"),
              _ = _.EventModerateClearReview,
              _ = !1;
            return (
              (0, _._)(_) ||
                ((_ = (0, _._)("#EventModTile_Moderate_MarkReviewed")),
                (_ = _.EventModerateMarkReview),
                (_ = !0)),
              _ &&
                ((_ = (0, _._)("#EventModTile_Moderate_Saving")),
                (_ = _.EventModerateSaving)),
              (0, _.jsxs)("button", {
                className: (0, _._)(_().Button, _.Button, _),
                onClick: () => _(_),
                disabled: _,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "small",
                    }),
                  _,
                ],
              })
            );
          }),
          _ = (0, _._)((_) => {
            const { onClick: _, event: _, bSaving: _ } = _,
              _ = _.BHasTag("adult_only_content");
            let _ = (0, _._)(
              _
                ? "#EventModTile_Moderate_RemoveAdultContent"
                : "#EventModTile_Moderate_FlagAdultContent",
            );
            return (
              _ && (_ = (0, _._)("#EventModTile_Moderate_Saving")),
              (0, _.jsxs)("button", {
                className: (0, _._)(_().Button, _.Button),
                onClick: () => _(!_),
                disabled: _,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "small",
                    }),
                  _,
                ],
              })
            );
          });
        function _(_) {
          const { onClick: _, event: _, bSaving: _ } = _,
            _ = (0, _._)(() => _.BHasTag("halloween"));
          let _ = (0, _._)(
            _
              ? "#EventModTile_Moderate_RemoveHalloweenFlag"
              : "#EventModTile_Moderate_FlagHalloween",
          );
          _ && (_ = (0, _._)("#EventModTile_Moderate_Saving"));
          const _ = _._.GetTimeNowWithOverrideAsDate();
          return _.getMonth() >= 8 && _.getMonth() <= 10
            ? (0, _.jsxs)("button", {
                className: (0, _._)(_().Button, _.Button),
                onClick: () => _(!_),
                disabled: _,
                children: [
                  _ &&
                    (0, _.jsx)(_._, {
                      size: "small",
                    }),
                  _,
                ],
              })
            : null;
        }
        let _ = class extends _.Component {
          state = {
            bLoadingEvent: !_._.BHasClanEventModel(
              this.props.solrData.unique_id,
            ),
            bShowAsModal: !1,
            bSavingModeration: !1,
          };
          m_cancelSignal = _().CancelToken.source();
          componentDidMount() {
            const { solrData: _ } = this.props,
              _ = _.unique_id;
            _._.BHasClanEventModel(_) ||
              _._.LoadHiddenPartnerEvent(new _._(_.clan_steamid), _)
                .then(() =>
                  this.setState({
                    bLoadingEvent: !1,
                  }),
                )
                .catch((_) => {
                  const _ = (0, _._)(_);
                  console.error(
                    "EventModerationTile: Event Load: " + _.strErrorMsg,
                    _,
                  ),
                    this.setState({
                      bLoadingEvent: !1,
                    });
                });
          }
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "EventModerationTile component unmounted",
            );
          }
          ShowModalEvent(_) {
            const { solrData: _ } = this.props,
              _ = _.unique_id;
            !this.state.bLoadingEvent &&
              _._.BHasClanEventModel(_) &&
              this.setState({
                bShowAsModal: !0,
              }),
              _.preventDefault(),
              _.stopPropagation();
          }
          HideModalEvent() {
            this.state.bShowAsModal &&
              this.setState({
                bShowAsModal: !1,
              });
          }
          SetAdultContentState(_) {
            if (this.state.bSavingModeration) return;
            const { solrData: _ } = this.props,
              _ = _.unique_id,
              _ = _._.GetClanEventModel(_);
            if (!_) return;
            const _ = _.BHasTag("adult_only_content");
            if (_ === _) return;
            const _ = new Array(),
              _ = new Array();
            let _ = new _().SetAdultOnlyContentAction(_);
            _ ? _.push("adult_only_content") : _.push("adult_only_content"),
              this.UpdateTagsOnEvent(_, _, _, _);
          }
          SetHalloweenEventState(_) {
            if (this.state.bSavingModeration) return;
            const { solrData: _ } = this.props,
              _ = _.unique_id,
              _ = _._.GetClanEventModel(_);
            if (!_) return;
            const _ = _.BHasTag("halloween");
            if (_ === _) return;
            const _ = new Array(),
              _ = new Array();
            let _ = new _().SetHalloweenEventTypeAction(_);
            _ ? _.push("halloween") : _.push("halloween"),
              this.UpdateTagsOnEvent(_, _, _, _);
          }
          SetModeratedState(_) {
            if (this.state.bSavingModeration) return;
            const { solrData: _ } = this.props,
              _ = _.unique_id,
              _ = _._.GetClanEventModel(_);
            if (!_) return;
            const _ = (0, _._)(_);
            if (_ === _) return;
            const _ = new Array(),
              _ = new Array();
            let _ = new _().SetReviewAction(_);
            _
              ? (_.push("mod_reviewed"),
                _.push("mod_require_rereview"),
                _.BHasTag("mod_require_rereview") && _.SetReReviewAction(_))
              : _.push("mod_require_rereview"),
              this.UpdateTagsOnEvent(_, _, _, _);
          }
          UpdateTagsOnEvent(_, _, _, _) {
            const _ = async () => {
              let _ = _._.GetClanEventModel(_);
              try {
                let _ = await _.Get().UpdateTagsOnPartnerEvent(
                  this.m_cancelSignal,
                  _.clanSteamID,
                  _.AnnouncementGID,
                  _,
                  _,
                  _,
                );
                _.vecTags = _;
              } catch (_) {
                let _ = (0, _._)(_);
                console.error("UpdateTagsOnPartnerEvent " + _.strErrorMsg, _);
              }
              this.setState({
                bSavingModeration: !1,
              });
            };
            this.state.bSavingModeration ||
              this.setState(
                {
                  bSavingModeration: !0,
                },
                _,
              );
          }
          OnChangeCategory(_) {
            const { solrData: _ } = this.props;
            let _ = _._.GetClanEventModel(_.unique_id);
            (0, _._)(
              (0, _.jsx)(_, {
                eventModel: _,
              }),
              (0, _._)(_),
            );
          }
          OnUpdateSeasonalTag(_) {
            const { solrData: _ } = this.props;
            let _ = _._.GetClanEventModel(_.unique_id);
            (0, _._)(
              (0, _.jsx)(_, {
                eventModel: _,
              }),
              (0, _._)(_),
            );
          }
          render() {
            const { solrData: _ } = this.props,
              _ = _.unique_id,
              _ = Number(_.appid);
            let _,
              _ = (0, _.sfN)(_._.LANGUAGE),
              _ = _._.GetClanEventModel(_),
              _ = null;
            _
              ? (this.state.bShowAsModal &&
                  (_ = (0, _.jsx)(_._, {
                    className: _.StoreHeaderAdjust,
                    children: (0, _.jsx)("div", {
                      children: (0, _.jsx)(_._, {
                        event: _,
                        fnClose: this.HideModalEvent,
                      }),
                    }),
                  })),
                (_ = (0, _.jsx)(_, {
                  eventModel: _,
                  lang: _,
                })))
              : (_ = (0, _._)("#Loading"));
            const _ = _.last_modified_date
                ? Date.parse(_.last_modified_date) / 1e3
                : 0,
              _ = _ ? _.type : Number(_.event_type),
              _ = new _._(_.clan_steamid),
              _ = _ ? `app/${_}` : `group/${_.GetAccountID()}`,
              _ = `${_._.STORE_BASE_URL}news/${_}/view/${_.announcement_gid}`,
              _ = !!(_ && _.BHasTag("adult_only_content")),
              _ = !!(_ && _.BHasTag("halloween"));
            return (0, _.jsxs)(_._, {
              children: [
                _,
                (0, _.jsxs)("div", {
                  className: (0, _._)({
                    [_.Tile]: !0,
                    [_.HalloweenEvent]: _,
                  }),
                  children: [
                    (0, _.jsx)("a", {
                      href: _,
                      className: _.TileCapsule,
                      onClick: this.ShowModalEvent,
                      children: _,
                    }),
                    (0, _.jsxs)("div", {
                      className: _.TileDetails,
                      children: [
                        (0, _.jsxs)("div", {
                          className: _.DetailsLeft,
                          children: [
                            (0, _.jsx)("a", {
                              className: _.EventTitle,
                              href: _,
                              onClick: this.ShowModalEvent,
                              children: _.event_name,
                            }),
                            (0, _.jsx)("div", {
                              className: (0, _._)(
                                _.TileEventType,
                                _ == _.DRF ? _.TileEventOtherType : "",
                              ),
                              children: _
                                ? _.GetCategoryAsString()
                                : _.event_type,
                            }),
                            _ &&
                              (0, _.jsx)("div", {
                                className: _.HasAdultContent,
                                children: (0, _._)(
                                  "#EventModTile_HasAdultContent",
                                ),
                              }),
                            this.state.bLoadingEvent &&
                              (0, _.jsx)(_._, {
                                size: "small",
                                string: (0, _._)("#Loading"),
                              }),
                            (0, _.jsx)("div", {
                              className: _.ChannelInfo,
                              children: (0, _.jsx)(_, {
                                appid: _,
                                clanSteamID: new _._(_.clan_steamid),
                              }),
                            }),
                          ],
                        }),
                        (0, _.jsx)("div", {
                          className: _.DetailsMiddle,
                          children:
                            _ &&
                            (0, _.jsxs)(_.Fragment, {
                              children: [
                                (0, _.jsx)(_, {
                                  onClick: this.SetModeratedState,
                                  bSaving: this.state.bSavingModeration,
                                  event: _,
                                }),
                                (0, _.jsx)("button", {
                                  className: (0, _._)(_().Button, _.Button),
                                  onClick: this.OnChangeCategory,
                                  children: (0, _._)(
                                    "#EventModTile_ChangeEventType",
                                  ),
                                }),
                                (0, _.jsx)(_, {
                                  onClick: this.SetAdultContentState,
                                  bSaving: this.state.bSavingModeration,
                                  event: _,
                                }),
                                (0, _.jsx)(_, {
                                  onClick: this.SetHalloweenEventState,
                                  bSaving: this.state.bSavingModeration,
                                  event: _,
                                }),
                                !!_.BHasTag("halloween2019candidate") &&
                                  (0, _.jsx)("button", {
                                    className: (0, _._)(_().Button),
                                    onClick: this.OnUpdateSeasonalTag,
                                    children: (0, _._)(
                                      "#EventModTile_SeasonalTag",
                                    ),
                                  }),
                                (0, _.jsx)(_, {
                                  eventModel: _,
                                }),
                              ],
                            }),
                        }),
                        (0, _.jsxs)("div", {
                          className: _.DetailsRight,
                          children: [
                            (0, _.jsxs)("div", {
                              className: _.EventTimingBlock,
                              children: [
                                !!_ &&
                                  (0, _.jsx)("div", {
                                    className: _.LastUpdateTime,
                                    children: (0, _._)(
                                      "#EventModTile_LastModified",
                                      (0, _._)(_) +
                                        "@" +
                                        (0, _._)(_, {
                                          bForce24HourClock: !1,
                                        }),
                                    ),
                                  }),
                                _ &&
                                  (0, _.jsx)(_._, {
                                    event: _,
                                    stylesmodule: _,
                                    nOverrideEndTime:
                                      _.GetEndTimeAndDateUnixSeconds(),
                                    nOverrideStartTime:
                                      _.GetStartTimeAndDateUnixSeconds(),
                                  }),
                              ],
                            }),
                            _ &&
                              (0, _.jsx)(_, {
                                event: _,
                                hidden: _.hidden,
                                published: _.published,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }
        };
        _([_._], _.prototype, "ShowModalEvent", 1),
          _([_._], _.prototype, "HideModalEvent", 1),
          _([_._], _.prototype, "SetAdultContentState", 1),
          _([_._], _.prototype, "SetHalloweenEventState", 1),
          _([_._], _.prototype, "SetModeratedState", 1),
          _([_._], _.prototype, "OnChangeCategory", 1),
          _([_._], _.prototype, "OnUpdateSeasonalTag", 1),
          (_ = _([_._], _));
        function _(_) {
          const { eventModel: _, lang: _ } = _,
            _ = (0, _._)(_, "capsule", _, _._.capsule_main),
            _ = _.BImageNeedScreenshotFallback("capsule", _);
          return _ && _.length > 0
            ? (0, _.jsxs)(_.Fragment, {
                children: [
                  (0, _.jsx)(_._, {
                    rgSources: _,
                  }),
                  _ &&
                    (0, _.jsx)("div", {
                      className: _.NoCapsuleFallback,
                      children: (0, _._)("#EventModTile_FallbackImageText"),
                    }),
                ],
              })
            : (0, _.jsx)("div", {
                className: _.NoCapsule,
                children: (0, _._)("#EventModTile_NoCapsule"),
              });
        }
        let _ = class extends _.Component {
          state = {
            bDownloadingImages: !1,
            nLocLanguages: 0,
          };
          m_cancelSignal = _().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          CountLanguages(_) {
            let _ = 0;
            if (_ && _.length > 0)
              for (let _ = 0; _ < _.length && _ < _.bP9; ++_)
                _[_] && _[_].length > 0 && (_ += 1);
            return _;
          }
          componentDidMount() {
            const { event: _ } = this.props;
            _._.LoadClanEventLocalizationFromAnnouncementGID(
              _.clanSteamID,
              _.AnnouncementGID,
            )
              .then((_) => {
                this.m_cancelSignal.token.reason ||
                  this.setState({
                    nLocLanguages: _.length,
                  });
              })
              .catch((_) => {
                let _ = (0, _._)(_);
                console.error(
                  "EventInspection.LoadLoc : error " + _.strErrorMsg,
                  _,
                ),
                  this.m_cancelSignal.token.reason ||
                    this.setState({
                      nLocLanguages: -1,
                    });
              });
          }
          render() {
            const { event: _ } = this.props;
            let _ = this.CountLanguages(_.jsondata.localized_title_image),
              _ = this.CountLanguages(_.jsondata.localized_capsule_image),
              _ = this.CountLanguages(_.jsondata.localized_spotlight_image),
              _ = Math.max(
                this.CountLanguages(_.jsondata.localized_broadcast_left_image),
                this.CountLanguages(_.jsondata.localized_broadcast_right_image),
              ),
              _ = _ + _ + _ + _,
              _ = this.CountLanguages(_.jsondata.localized_summary),
              _ = this.CountLanguages(_.jsondata.localized_subtitle);
            return (0, _.jsxs)("div", {
              className: _.AnalysisCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _.TileTitle,
                  children: (0, _._)("#EventModTile_Analysis"),
                }),
                (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#EventModTile_Stats_Comments",
                    _.nCommentCount,
                  ),
                }),
                (0, _.jsx)("div", {
                  children: (0, _._)("#EventModTile_Stats_VoteUp", _.nVotesUp),
                }),
                (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#EventModTile_Stats_VoteDown",
                    _.nVotesDown,
                  ),
                }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    className: _.ArtHeader,
                    children: [
                      (0, _._)("#EventModTile_ImageAnalysis_Header", _),
                      " ",
                    ],
                  }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#EventModTile_ImageAnalysis_Capsule", _),
                      " ",
                    ],
                  }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    className: _.ArtSpotlight,
                    children: [
                      (0, _._)("#EventModTile_ImageAnalysis_Spotlight", _),
                      " ",
                    ],
                  }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#EventModTile_ImageAnalysis_Broadcast", _),
                      " ",
                    ],
                  }),
                _ == 0 &&
                  (0, _.jsxs)("div", {
                    className: _.AnalysisMissing,
                    children: [
                      (0, _._)("#EventModTile_ImageAnalysis_None"),
                      " ",
                    ],
                  }),
                this.state.nLocLanguages == 0 &&
                  (0, _.jsx)(_._, {
                    size: "small",
                    string: (0, _._)("#EventModTile_LoadingLocs"),
                  }),
                this.state.nLocLanguages > 0 &&
                  (0, _.jsx)("div", {
                    children: (0, _._)(
                      "#EventModTile_Languages",
                      this.state.nLocLanguages,
                    ),
                  }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#EventModTile_Languages_Summary", _),
                      " ",
                    ],
                  }),
                !!_ &&
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _._)("#EventModTile_Languages_Subtitle", _),
                      " ",
                    ],
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        const _ = (0, _._)((_) => {
          const { appid: _, clanSteamID: _ } = _,
            _ = (0, _._)(_),
            [_, _] = (0, _.useState)(!_._.Get().BHasApp(_.appid)),
            _ = _.useRef(_().CancelToken.source());
          if (
            ((0, _.useEffect)(
              () => () =>
                _.current.cancel(
                  "EventModerationChannelInfo component unmounted",
                ),
              [],
            ),
            (0, _.useEffect)(() => {
              const { appid: _, clanSteamID: _ } = _;
              ((_ && !_._.Get().BHasApp(_)) ||
                (_ && !_._.BHasClanInfoLoaded(_))) &&
                (async () => {
                  try {
                    await Promise.all([
                      _._.Get().QueueAppRequest(_, {
                        include_assets: !0,
                        include_release: !0,
                        include_screenshots: !0,
                      }),
                      _ ? _._.LoadClanInfoForClanSteamID(_) : void 0,
                    ]);
                  } catch (_) {
                    const _ = (0, _._)(_);
                    console.error(
                      "EventModerationChannelInfo: App Load: " + _.strErrorMsg,
                      _,
                    );
                  } finally {
                    _.current.token.reason || _(!1);
                  }
                })();
            }, [_]),
            _)
          )
            return (0, _.jsx)(_._, {
              size: "small",
              string: (0, _._)("#EventModTile_AppInfoLoading"),
            });
          if (_) {
            const _ = _._.Get().GetApp(_);
            return _
              ? (0, _.jsx)("div", {
                  className: _.TileAppInfo,
                  children: (0, _.jsxs)("div", {
                    className: _.TileAppInfoTitle,
                    children: [
                      (0, _.jsx)(_._, {
                        _: _,
                        children: (0, _.jsx)(_._, {
                          href: (0, _._)(_.GetStorePageURL()),
                          children: (0, _.jsx)("img", {
                            className: _.TileAppInfoImage,
                            src: _.GetAssets().GetMainCapsuleURL(),
                          }),
                        }),
                      }),
                      (0, _.jsx)(_._, {
                        _: _,
                        children: (0, _.jsx)(_._, {
                          href: (0, _._)(_.GetStorePageURL()),
                          children: (0, _.jsx)("div", {
                            children: _.GetName(),
                          }),
                        }),
                      }),
                    ],
                  }),
                })
              : null;
          } else if (_) {
            const _ = _.GetAccountID(),
              _ = _._.GetClanInfoByClanAccountID(_);
            if (_ && _.is_curator)
              return (0, _.jsx)("div", {
                className: _.TileAppInfo,
                children: (0, _.jsx)("div", {
                  className: _.TileAppInfoTitle,
                  children: (0, _.jsxs)(_._, {
                    href: (0, _._)(_._.STORE_BASE_URL + "/curator/" + _ + "/"),
                    children: [
                      (0, _.jsx)("img", {
                        className: _.TileAppInfoImage,
                        src: _.avatar_full_url,
                      }),
                      (0, _.jsx)("div", {
                        children: (0, _._)(
                          "#EventModTile_CuratorName",
                          _.group_name,
                        ),
                      }),
                    ],
                  }),
                }),
              });
          }
          return null;
        });
        let _ = class extends _.Component {
          render() {
            const { event: _, hidden: _, published: _ } = this.props,
              _ = _
                ? _
                  ? (0, _._)("#EVentModTile_State_Staged")
                  : (0, _._)("#EVentModTile_State_Draft")
                : (0, _._)("#EVentModTile_State_Published"),
              _ = (0, _._)(_),
              _ = (0, _._)(_),
              _ = (0, _._)(_);
            let _ =
                _ && !_.BHasTag("hide_store") && !_.BHasTag("mod_hide_store"),
              _ =
                _ &&
                !_.BHasTag("hide_library_overview") &&
                !_.BHasTag("mod_hide_library_overview"),
              _ =
                _ &&
                !_.BHasTag("hide_library_detail") &&
                !_.BHasTag("mod_hide_library_detail");
            return (0, _.jsxs)("div", {
              className: _.VisibiltyCtn,
              children: [
                (0, _.jsx)("div", {
                  className: _.TileTitle,
                  children: _,
                }),
                (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#EventModTile_Store_Visibility",
                    _
                      ? (0, _._)("#WriteReview_Dialog_Yes")
                      : (0, _._)("#WriteReview_Dialog_No"),
                    _
                      ? ""
                      : _
                        ? (0, _._)(
                            "#EventModTime_Hidden_EventType",
                            _.GetEventTypeAsString(),
                          )
                        : _.BHasTag("hide_store")
                          ? (0, _._)("#EventModTime_Hidden_OptOut")
                          : (0, _._)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#EventModTile_LibraryHome_Visibility",
                    _
                      ? (0, _._)("#WriteReview_Dialog_Yes")
                      : (0, _._)("#WriteReview_Dialog_No"),
                    _
                      ? ""
                      : _
                        ? (0, _._)(
                            "#EventModTime_Hidden_EventType",
                            _.GetEventTypeAsString(),
                          )
                        : _.BHasTag("hide_library_overview")
                          ? (0, _._)("#EventModTime_Hidden_OptOut")
                          : (0, _._)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                (0, _.jsx)("div", {
                  children: (0, _._)(
                    "#EventModTile_LibraryDetail_Visibility",
                    _
                      ? (0, _._)("#WriteReview_Dialog_Yes")
                      : (0, _._)("#WriteReview_Dialog_No"),
                    _
                      ? ""
                      : _
                        ? (0, _._)(
                            "#EventModTime_Hidden_EventType",
                            _.GetEventTypeAsString(),
                          )
                        : _.BHasTag("hide_library_detail")
                          ? (0, _._)("#EventModTime_Hidden_OptOut")
                          : (0, _._)("#EventModTime_Hidden_Moderator"),
                  ),
                }),
                _.BHasTag("enable_steam_china") &&
                  (0, _.jsx)("div", {
                    children: (0, _._)("#EventModTile_SteamChina_Visibility"),
                  }),
                _.BHasTag("disable_steam_global") &&
                  (0, _.jsx)("div", {
                    children: (0, _._)("#EventModTile_SteamGlobal_Hidden"),
                  }),
              ],
            });
          }
        };
        _ = _([_._], _);
        let _ = class extends _.Component {
          state = {
            bUpdating: !1,
            newCategoryOption: {
              label: (0, _._)(_.HFK),
              value: {
                eventType: _.HFK,
              },
            },
          };
          m_cancelSignal = _().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "ChangeEventTypeDialog component unmounted",
            );
          }
          async ChangeCategoryForEvent() {
            const { eventModel: _, closeModal: _ } = this.props;
            try {
              const _ = this.state.newCategoryOption,
                _ = _.value.eventType;
              await _.Get().UpdatePartnerEventType(
                this.m_cancelSignal,
                _.clanSteamID,
                _.GID,
                _,
              );
              const _ = _._,
                _ = [];
              _.value.tags &&
                _.value.tags.forEach((_) => {
                  _.push(_);
                  const _ = new _().SetUpdateSeasonalTags(_).ToModString();
                  _.push(_);
                });
              const _ = await _.Get().UpdateTagsOnPartnerEvent(
                this.m_cancelSignal,
                _.clanSteamID,
                _.GetAnnouncementGID(),
                _,
                _,
                new _().SetActionChangeEvent(_),
              );
              (0, _._)(() => {
                (_.type = _), (_.vecTags = _);
              }),
                this.setState(
                  {
                    bUpdating: !1,
                  },
                  _,
                );
            } catch (_) {
              const _ = (0, _._)(_);
              console.error("ChangeEventTypeDialog error " + _.strErrorMsg, _),
                this.setState({
                  bUpdating: !1,
                  strErrorMsg: _.strErrorMsg,
                });
            }
          }
          OnChangeSelection(_) {
            this.setState({
              newCategoryOption: _,
            });
          }
          render() {
            const { eventModel: _, closeModal: _ } = this.props,
              _ = _.Zi8.filter(
                (_) => _ == _.DRF || _ == _.Y3j || _ >= _.L0X,
              ).map((_) => {
                const _ = {
                  eventType: _,
                };
                return (
                  _ == _.Fwr && (_.tags = ["patchnotes"]),
                  {
                    label: (0, _._)(_),
                    value: _,
                  }
                );
              });
            _.push({
              label: (0, _._)("#PartnerEvent_Curator_Group_Members"),
              value: {
                eventType: _.uYK,
                tags: ["curator", "curator_group_members"],
              },
            }),
              _.push({
                label: (0, _._)("#PartnerEvent_Curator_Public"),
                value: {
                  eventType: _.uYK,
                  tags: ["curator", "curator_public"],
                },
              }),
              _.push({
                label: (0, _._)("#PartnerEvent_SteamAwardNominations"),
                value: {
                  eventType: _.uYK,
                  tags: [
                    "steam_award_nomination_request",
                    "mod_hide_library_overview",
                  ],
                },
              }),
              _.push({
                label: (0, _._)("#PartnerEvent_SteamAwardVoteRequest"),
                value: {
                  eventType: _.uYK,
                  tags: [
                    "steam_award_vote_request",
                    "mod_hide_library_overview",
                  ],
                },
              });
            const _ = [
                {
                  value: {
                    eventType: _.f4X,
                    tags: ["halloween"],
                  },
                  label: "Halloween: " + (0, _._)("#PartnerEvent_15"),
                },
                {
                  value: {
                    eventType: _._,
                    tags: ["halloween"],
                  },
                  label: "Halloween: " + (0, _._)("#PartnerEvent_22"),
                },
                {
                  value: {
                    eventType: _._,
                    tags: ["halloween"],
                  },
                  label: "Halloween: " + (0, _._)("#PartnerEvent_23"),
                },
                {
                  value: {
                    eventType: _.hGl,
                    tags: ["halloween"],
                  },
                  label: "Halloween: " + (0, _._)("#PartnerEvent_24"),
                },
                {
                  value: {
                    eventType: _.WNR,
                    tags: ["halloween"],
                  },
                  label: "Halloween: " + (0, _._)("#PartnerEvent_35"),
                },
              ],
              _ = _._.GetTimeNowWithOverrideAsDate();
            return (
              _.getMonth() == 8 || _.getMonth() == 9
                ? _.unshift(..._)
                : _.push(..._),
              (0, _.jsx)(_._, {
                strTitle: (0, _._)("#EventModTile_ChangeEventType"),
                strDescription: (0, _._)(
                  "#EventModTile_ChangeEventType_Desc",
                  _.GetEventTypeAsString(),
                ),
                onCancel: _,
                onOK: () =>
                  this.setState(
                    {
                      bUpdating: !0,
                    },
                    this.ChangeCategoryForEvent,
                  ),
                children: (0, _.jsx)(_.Fragment, {
                  children: (0, _.jsxs)("div", {
                    className: _.CategoryChangeDialog,
                    children: [
                      (0, _.jsx)("br", {}),
                      this.state.bUpdating &&
                        (0, _.jsx)(_._, {
                          size: "small",
                        }),
                      this.state.strErrorMsg &&
                        (0, _.jsxs)("div", {
                          children: [
                            (0, _._)("#Chat_Settings_Error_ServerError"),
                            (0, _.jsx)("br", {}),
                            this.state.strErrorMsg,
                          ],
                        }),
                      (0, _.jsx)(_._, {
                        isSearchable: !0,
                        onChange: this.OnChangeSelection,
                        value: this.state.newCategoryOption,
                        options: _,
                      }),
                    ],
                  }),
                }),
              })
            );
          }
        };
        _([_._], _.prototype, "ChangeCategoryForEvent", 1),
          _([_._], _.prototype, "OnChangeSelection", 1),
          (_ = _([_._], _));
        class _ extends _.Component {
          state = {
            bUpdating: !1,
            bAccept: this.props.eventModel.BHasTag("halloween2019"),
            bHorror: this.props.eventModel.BHasTag("horror"),
            bCute: this.props.eventModel.BHasTag("cute"),
          };
          m_cancelSignal = _().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "UpdateSeasonalTagDialog component unmounted",
            );
          }
          ChangeAcceptance() {
            this.setState({
              bAccept: !this.state.bAccept,
            });
          }
          ChangeHorror() {
            this.setState({
              bHorror: !this.state.bHorror,
            });
          }
          ChangeCute() {
            this.setState({
              bCute: !this.state.bCute,
            });
          }
          async ApplyAction() {
            let _ = new Array(),
              _ = new Array();
            this.state.bAccept
              ? (_.push("halloween2019"), _.push("halloween2019reviewed"))
              : (_.push("halloween2019"), _.push("halloween2019reviewed")),
              this.state.bCute ? _.push("cute") : _.push("cute"),
              this.state.bHorror ? _.push("horror") : _.push("horror");
            try {
              const { eventModel: _ } = this.props;
              let _ = await _.Get().UpdateTagsOnPartnerEvent(
                this.m_cancelSignal,
                _.clanSteamID,
                _.AnnouncementGID,
                _,
                _,
                new _().SetUpdateSeasonalTags(
                  this.state.bAccept
                    ? "halloween2019"
                    : "halloween2019reviewed",
                ),
              );
              (_.vecTags = _), this.props.closeModal();
            } catch (_) {
              let _ = (0, _._)(_);
              console.error("EventModerationTile " + _.strErrorMsg, _),
                this.setState({
                  strErrorMsg: _.strErrorMsg,
                });
            }
          }
          render() {
            const { eventModel: _, closeModal: _ } = this.props;
            return (0, _.jsx)(_._, {
              strTitle: (0, _._)("#EventModTile_SeasonalTag"),
              onCancel: _,
              onOK: () =>
                this.setState(
                  {
                    bUpdating: !0,
                  },
                  this.ApplyAction,
                ),
              children: (0, _.jsx)(_.Fragment, {
                children: (0, _.jsxs)("div", {
                  className: _.CategoryChangeDialog,
                  children: [
                    (0, _.jsx)("input", {
                      _: "Acceptance",
                      type: "checkbox",
                      checked: this.state.bAccept,
                      onChange: this.ChangeAcceptance,
                    }),
                    (0, _.jsx)("label", {
                      htmlFor: "Acceptance",
                      children: (0, _._)("#EventModTile_SeasonalTag_Desc"),
                    }),
                    (0, _.jsx)("div", {
                      children: (0, _._)(
                        "#EventModTile_SeasonalTag_Desc_Secondary",
                      ),
                    }),
                    (0, _.jsx)("input", {
                      _: "Horror",
                      type: "checkbox",
                      checked: this.state.bHorror,
                      onChange: this.ChangeHorror,
                    }),
                    (0, _.jsx)("label", {
                      htmlFor: "Horror",
                      children: "Horror Tag",
                    }),
                    (0, _.jsx)("input", {
                      _: "Cute",
                      type: "checkbox",
                      checked: this.state.bCute,
                      onChange: this.ChangeCute,
                    }),
                    (0, _.jsx)("label", {
                      htmlFor: "Cute",
                      children: "Cute Tag",
                    }),
                    this.state.bUpdating &&
                      (0, _.jsx)(_._, {
                        size: "small",
                      }),
                    this.state.strErrorMsg &&
                      (0, _.jsxs)("div", {
                        children: [
                          (0, _._)("#Chat_Settings_Error_ServerError"),
                          (0, _.jsx)("br", {}),
                          this.state.strErrorMsg,
                        ],
                      }),
                  ],
                }),
              }),
            });
          }
        }
        _([_._], _.prototype, "ChangeAcceptance", 1),
          _([_._], _.prototype, "ChangeHorror", 1),
          _([_._], _.prototype, "ChangeCute", 1),
          _([_._], _.prototype, "ApplyAction", 1);
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
        let _ = class extends _.Component {
          state = {
            bLoadingEvent: !0,
          };
          m_cancelSignal = _().CancelToken.source();
          componentWillUnmount() {
            this.m_cancelSignal.cancel(
              "SteamGameFestivalStoreDebug to unload ",
            );
          }
          async componentDidMount() {
            const { clanEventGID: _, clanAccountID: _ } = this.props;
            if (
              (console.log(_, _, typeof _, typeof _),
              _ && !_._.BHasClanEventModel(_))
            ) {
              let _ = _._.InitFromClanID(Number.parseInt(_)),
                _ = await _._.LoadPartnerEventFromClanEventGIDAndClanSteamID(
                  _,
                  _,
                  0,
                ),
                _ = new Array(),
                _ = new Array();
              if (_.BHasSaleEnabled()) {
                this.setState({
                  event: _,
                  bLoadingEvent: !1,
                  bLoadingApps: !0,
                  bLoadingDemos: !0,
                  bLoadingAssociatedDemoInfo: !0,
                });
                let _ = new Map();
                _.jsondata.sale_sections.forEach((_) => {
                  _.section_type == "tabs" &&
                    _.tabs.forEach((_) => {
                      _.capsules.forEach((_) => {
                        _.type == "game" ||
                        _.type == "application" ||
                        _.type == "software"
                          ? _.has(_._) || (_.set(_._, !0), _.push(_._))
                          : _.has(_._) || (_.set(_._, !0), _.push(_._));
                      });
                    });
                });
                const _ = {
                  include_assets: !0,
                  include_screenshots: !0,
                  include_release: !0,
                };
                await _._.Get().QueueMultipleAppRequests(_, _),
                  this.setState({
                    rgAppIDs: _,
                    rgUnknownTypeAppIDs: _,
                    bLoadingApps: !1,
                  }),
                  await _._.Get().QueueMultipleAppRequests(_, _),
                  this.setState({
                    bLoadingAssociatedDemoInfo: !1,
                  });
                const _ = _.flatMap(
                  (_) => _._.Get().GetApp(_)?.GetDemoAppIDs() ?? [],
                );
                await _._.Get().QueueMultipleAppRequests(_, _),
                  this.setState({
                    bLoadingDemos: !1,
                  });
              } else
                this.setState({
                  bLoadingEvent: !1,
                  rgAppIDs: _,
                });
            } else
              this.setState({
                bLoadingEvent: !1,
              });
          }
          render() {
            if (
              this.state.bLoadingEvent ||
              this.state.bLoadingDemos ||
              this.state.bLoadingApps ||
              this.state.bLoadingAssociatedDemoInfo
            )
              return (0, _.jsx)(_._, {
                string:
                  (0, _._)("#Loading") +
                  (this.state.bLoadingEvent
                    ? " Events"
                    : this.state.bLoadingApps
                      ? " Apps"
                      : this.state.bLoadingAssociatedDemoInfo
                        ? " Associated Demo Info"
                        : this.state.bLoadingDemos
                          ? " Demos"
                          : "done"),
                position: "center",
              });
            if (!this.state.event)
              return (0, _.jsx)("div", {
                children: " Failed to load event",
              });
            const { event: _ } = this.state;
            if (!_.jsondata.bSaleEnabled)
              return (0, _.jsx)("div", {
                children: "Not a sale event",
              });
            let _ = new Array(),
              _ = new Array();
            this.state.rgAppIDs
              .filter((_) => !_._.Get().GetApp(_))
              .forEach((_) => {
                _.push(
                  (0, _.jsx)(
                    "div",
                    {
                      children: (0, _.jsx)("a", {
                        href: _._.STORE_BASE_URL + "app/" + _ + "/?beta=1",
                        target: "_blank",
                        children: _,
                      }),
                    },
                    "missing: " + _,
                  ),
                ),
                  _.push(_);
              });
            const _ = this.state.rgAppIDs.reduce(
                (_, _) => _ + (_._.Get().GetApp(_)?.BHasDemo() ? 1 : 0),
                0,
              ),
              _ = new Array();
            this.state.rgAppIDs.forEach((_) => {
              const _ = _._.Get().GetApp(_);
              if (_ && !_.BHasDemo()) {
                let _ = _._.Get().GetApp(_);
                _.push(
                  (0, _.jsxs)(
                    "div",
                    {
                      children: [
                        _?.GetAppType() == _._._ &&
                          (0, _.jsx)("b", {
                            children:
                              "--Error: Sale Page has Demo AppID, based game --\xA0",
                          }),
                        _?.GetName(),
                        " (",
                        _,
                        ")",
                        (0, _.jsx)("a", {
                          href: (0, _._)(_.GetStorePageURL() + "?beta=0"),
                          target: "_blank",
                          children: "Store Page",
                        }),
                        "\xA0",
                        (0, _.jsx)("a", {
                          href: _._.PARTNER_BASE_URL + "apps/landing/" + _,
                          target: "_blank",
                          children: "App Landing Page",
                        }),
                      ],
                    },
                    "missingdemo_" + _,
                  ),
                );
              }
            });
            let _ = 0,
              _ = 0,
              _ = 0,
              _ = 0,
              _ = 0,
              _ = 0;
            this.state.rgAppIDs.forEach((_) => {
              let _ = !1;
              const _ = _._.Get().GetApp(_);
              _ &&
                _.BHasDemo() &&
                (_._.Get().GetApp(_.GetDemoAppIDs()[0]).BIsComingSoon()
                  ? ((_ += 1), (_ = !0))
                  : (_ += 1));
            });
            let _ = new Array(),
              _ = 0;
            return (
              this.state.rgAppIDs.forEach((_) => {
                _._.Get().GetApp(_)?.GetAppType() != _._._ && (_ += 1);
              }),
              (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)("h1", {
                    children: _.GetNameWithFallback((0, _.sfN)(_._.LANGUAGE)),
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Unique AppIDs:",
                      }),
                      " ",
                      this.state.rgAppIDs.length,
                      " ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsxs)("b", {
                        children: ["Visible Apps in ", _._.COUNTRY, ":"],
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Unknown AppID types:",
                      }),
                      " ",
                      this.state.rgUnknownTypeAppIDs.length,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Missing AppIDs:",
                      }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Demos:",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Visible apps missing demo store:",
                      }),
                      " ",
                      _.length,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "CApplications Loaded:",
                      }),
                      " ",
                      " ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "CApplication with Associated Demos:",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children:
                          "\xA0\xA0Associated with store page but not released: ",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "CApplication with demo without association:",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children:
                          "\xA0\xA0Released but not associated with store page: ",
                      }),
                      " ",
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "CApplication missing:",
                      }),
                      " ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children:
                          "CApplication without demo store and demo associations:",
                      }),
                      " ",
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Released Demo: ",
                      }),
                      _,
                    ],
                  }),
                  (0, _.jsxs)("div", {
                    children: [
                      (0, _.jsx)("b", {
                        children: "Unreleased Demo: ",
                      }),
                      _,
                    ],
                  }),
                  (0, _.jsx)("hr", {}),
                  (0, _.jsx)("h2", {
                    children: "Missing Appids:",
                  }),
                  _,
                  (0, _.jsx)("h2", {
                    children:
                      "Missing BOTH demo list and associated demo on product page:",
                  }),
                  _,
                  (0, _.jsx)("h2", {
                    children:
                      "Missing Demos for Visible Appids via Demo Store (missing in link on Sale Page):",
                  }),
                  _,
                ],
              })
            );
          }
        };
        _ = _([_._], _);
        var _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid"),
          _ = __webpack_require__("chunkid");
        function _(_) {
          const [_, _] = (0, _.useState)(!1),
            [_] = (0, _.useState)(() => _()),
            _ = (0, _.useMemo)(
              () => ({
                country: _._.COUNTRY,
                language: _._.LANGUAGE,
                bUsePartnerAPI: !0,
              }),
              [],
            );
          return (
            (0, _.useEffect)(() => (_(!0), _(_)), [_]),
            _
              ? (0, _.createElement)(_._, {
                  context: _,
                  serviceTransportOverride: _.GetServiceTransport(),
                  children: _.children,
                })
              : null
          );
        }
        function _(_) {
          const [_] = useState(() => _()),
            _ = useMemo(
              () => ({
                country: Config.COUNTRY,
                language: Config.LANGUAGE,
                bUsePartnerAPI: !0,
                bIncludeUnpublished: _.bIncludeUnpublished,
              }),
              [_.bIncludeUnpublished],
            );
          return createElement(StoreBrowseLoaderRoot, {
            context: _,
            serviceTransportOverride: _.GetServiceTransport(),
            children: _.children,
          });
        }
        function _() {
          const _ = (0, _._)(
            "partnerbrowse_webapi_token",
            "application_config",
          );
          return (0, _._)(new _._(_._.WEBAPI_BASE_URL, _));
        }
        function _(_) {
          return _._.Initialize(_.GetServiceTransport(), _._.is_partner_member);
        }
        var _ = __webpack_require__("chunkid");
        const _ = () =>
          (0, _.jsx)(_, {
            children: (0, _.jsx)(_._, {
              children: (0, _.jsxs)(_._, {
                children: [
                  (0, _.jsx)(_._, {
                    path: _._.EventGameFestivalDebug(),
                    render: (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                        clanAccountID: _.match.params.clanacountid,
                        clanEventGID: _.match.params.claneventgid,
                      }),
                  }),
                  (0, _.jsx)(_._, {
                    exact: !0,
                    path: _._.EventBackfill(),
                    render: (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                  }),
                  (0, _.jsx)(_._, {
                    path: _._.EventRSSModeration(),
                    render: (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                      }),
                  }),
                  (0, _.jsx)(_._, {
                    path: _._.EventModeration(),
                    render: (_) =>
                      (0, _.jsx)(_, {
                        ..._,
                        appid:
                          _.match.params.appid &&
                          Number.parseInt(_.match.params.appid),
                      }),
                  }),
                ],
              }),
            }),
          });
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          FollowButton: "c-TDTqD2D5mBLfTqn3fSV",
          FollowButtonText: "_2PmgMkPwEgmuCJVZLTGSPi",
          FollowLoadingText: "_2XN3sBlgsLE3n5WrKOkWxi",
        };
      },
      chunkid: (module) => {
        module.exports = {
          ModeratorAuditActionCtn: "f6z__AuHw6SOG9zsY2oKr",
          ExpandModActions: "_3nNMeqxuySIiNcmt7YEXb7",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BBCodeFollowButton: "NVuxjpTCUClP-4RsNDDvk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          BBCodeFollowButton: "BwHJdoHlv8wy5OypqL_b7",
          isHovered: "_2EcgCb9lHfl7I_MlirYLZL",
        };
      },
      chunkid: (module) => {
        module.exports = {
          countdownCtn: "GWWacIf04lQysYMFJma0A",
          Closed: "ATX_xEE69rX8wVxQvONEx",
          CountDownCtn: "_11RwPICMOmmvNXkOq9bjPc",
          CountDownTime: "eh0pMnSr-nk203Ealq_Rq",
          CountDownText: "_3VKQ3h7Z4wO_U-Z_vXUZkk",
          LearnMore: "_1q98mjxkCUwQuFALsiNtD7",
          Throbber: "bEkRtFmRUW_smWksM-k9g",
          WinnerInfo: "_2LTFl4ZFuL1BeNbqYPExWv",
          WinnerCount: "Z7ScP-i1XHPQn4eeFdJ3g",
          WinnerText: "chkuqox_QD6U5ID_AHTLk",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          Container: "_2Jd3MGaOu0C9Ydswf8Q4Tn",
          SectionButton: "_3n8swQFM3I_ARVM_5bPhAs",
          StoreHeaderAdjust: "_3YyCpH32HRhZtt4BOM5wM5",
          EventsSummariesCtn: "_1snIw0RvJduvDtqpmwtKJ9",
          LatestUpdateButtonCtn: "_2vEwZPNBe2qcTuxZf5cpiD",
          LatestUpdateIcon: "mq3ROvmcn5_HdCKG6JXDa",
          LatestUpdateButton: "_1TRFtE8IfXpDQ_loHnB_bU",
        };
      },
      chunkid: (module) => {
        module.exports = {
          "duration-app-launch": "800ms",
          storeMenuResponsiveModeWidth: "730px",
          SuppressScrollOnBody: "_1FFwlWIoDrtb0qdN9YUwHs",
          WishlistHoverCtn: "GXjJQihysg6S5INBKClED",
          BBCodeWishlistButton: "_1dm-6uzq_x5Gqo421G3a1r",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Ctn: "_1cSpOjJvmGfNyu_HSwichZ",
          RssInput: "_8NQ9LUIbLO71H08qAYXDd",
          PreviewListCtn: "HRcOMhFkaVvhc6JpjMSNL",
          PostCtn: "_3MI2hkWsuzXcyDAibpwe7B",
          PostTitle: "_1ZsnsCKJmsJuCu04nd93lM",
          ActivePost: "h-qBFnVYUuO1I4P-cSkTz",
          PostDate: "_2vXmupKkh6p2BaA0K6CB5O",
          ErrorPost: "aBLy2PQkdVwQn6JBG8BN8",
          PostDraft: "_10_gLIbT6bnwWVSfTW2WSX",
          PostStaged: "nNzd6ujTYg6p9F7pRvFWy",
          PreviewListBtn: "_3NT8sO_AexM1KIu_MODBhK",
          PreviewButtons: "_3lbycruUbHtprPAsZH1xvl",
          UrlSettingCtn: "iN4AtnUn7apNTMq-bbs1m",
          Error: "_1ZZ510SPBPFH5AkrGEHFfu",
          DialogPostTitle: "_1XamDYGOmN-CAK2C5na9a5",
          DashboardBtn: "_2Hlrm7BUntwygz545o3zQI",
          RawRSS: "_2mOAhPzeuYmAf5zGBOdp7F",
          ButtonCtn: "_13jSBmDO_a-9t1cIUiiQGm",
          PreviewBtn: "_3HssDlgWiXjyOyu8qdcc-K",
          ViewRaw: "_2jvHrB2MnyHMk3_BUfXjgt",
          LanguageRow: "g_9tLawSDdTk6NiUPTRzd",
          LanguageTitle: "_2jkBiax2j-5uGiCq-TfyS0",
          LanguageSet: "_2zsMrGyxcvlo1yieM1i0d8",
        };
      },
      chunkid: (module) => {
        module.exports = {
          SectionContainer: "_3P-ffy_ncZSHdpLyO6f0qi",
          ModSectionTitle: "_2lc8mXoJp_A_p2dgalucda",
          ResizeButton: "_29RNNuE5kdZltMEtl37JLr",
          TileContainer: "_2D4XHyOtJNCevYR8usMUTn",
          CreatorCtn: "GKustVJ6kwH-yfSnQEsoc",
          TileSpread: "_1s_ElWG5sLvC6jn5bmx5lY",
        };
      },
      chunkid: (module) => {
        module.exports = {
          Error: "_1eWgIJNhXTPC8_jGAIqKPo",
        };
      },
      chunkid: (module) => {
        module.exports = {
          AnalysisCtn: "_1YGfWUDh8ed60wRQsWWNIF",
          AnalysisMissing: "rH1DtJyqgJLBkBSxST7Pr",
          ModerationContainer: "_4HRKpSC9YY7qtf41FvW0t",
          FilterContainer: "qY07Ts46PtC9f_CkGYbuw",
          Tile: "_3oU1yN2Yb-ZuT2P5rHAev9",
          DetailsMiddle: "VcJpZMvg6yg6gvjet_lOL",
          EventModerateMarkReview: "_1RqKA7hTv6bcBGrMlmJBgz",
          EventModerateMarkReReview: "qd-K7NHXOsYzDV3efizgo",
          HalloweenEvent: "_34-bq70a3KzZ-vVd1v8whZ",
          TileEventOtherType: "_3LUrW7wuVtojLL2n5z-MO5",
          TileCapsule: "_36tP88olexdONuQPMAH7wS",
          NoCapsuleFallback: "_16oQL8__nFx7gB4SyJaXss",
          NoCapsule: "_1onVFUCJL4w1GOc9-5H6Me",
          TileDetails: "_2mRup7CUbcaFul1JHh9EZE",
          DetailsLeft: "_1O0y5744ePZj3bJR1znj1i",
          EventTitle: "_3ahHdkXDTdAX8N8qrlTO2A",
          DetailsRight: "_2BaxWyhld4ybAPEQ6OWPMr",
          ArtHeader: "_38IkFA1-NC1J4Nksi3nRFA",
          ArtSpotlight: "_2oUPYZHA2_Ta4GuTcTZbgd",
          ModeratedFlagCtn: "_2JGGc489-CEXdtyThZ-oQB",
          TitleLink: "_1OG__rbIbfwvZHVxRtcncy",
          TileAppInfo: "_2IJ__vdWVbYb-buHnhzfnA",
          TileAppInfoTitle: "_2X75q8B3vbGNtefxcW3jV7",
          TileAppInfoImage: "_1rVmL1div0uHwyMqwlJixh",
          TileSplit: "aaFuCFgI5Fl32h2pWEEfN",
          TileTitle: "yJw1iGP3a49nfGpsJLTX",
          TimeWidth: "xSOgV1OP-kC1LOJB_U6Lh",
          CategoryChangeDialog: "_1VSAjVr5FVxM5XYWbK0drT",
          Button: "wu9KrcTvKBuVbK28hlB7O",
          RightSideTitles: "XDAwDPCqcUwPgADyyo1I3",
          DateAndTime: "_2cW9NG6Q7uWRVnhAwe3juu",
          StoreHeaderAdjust: "_3U7jaAVOEBb0gDtFK1AkVR",
          LastUpdateTime: "_2x7zHBXixihuRXX3Rjt_0s",
          EventTimingBlock: "_31d_RSG49SZFyfID3s5Z4G",
          TileEventType: "_1z1xtCOtqCzGGGDRR-dRFr",
          ChannelInfo: "H__RKLMfFToIYF83TuW3k",
          HasAdultContent: "_2PcmCd2KPADlMtBUq-mAxi",
        };
      },
    },
  ]);
})();
