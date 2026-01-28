"use strict";
(self.webpackChunkstore = self.webpackChunkstore || []).push([
  [6178],
  {
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
      });
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static s_VODStore;
        m_mapAppToVOD = new Map();
        GetVODForAppID(_) {
          return this.m_mapAppToVOD.get(_);
        }
        async LoadVODForAppID(_, _) {
          if (this.m_mapAppToVOD.has(_)) return this.m_mapAppToVOD.get(_);
          const _ = _._.STORE_BASE_URL + "video/details/" + _ + "/0",
            _ = {};
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return null;
            if (
              _ &&
              200 == _.status &&
              _.data &&
              (1 == _.data.success || "ready" == _.data.success)
            ) {
              let _ = (0, _._)({
                appid: _,
                video_url: _.data.video_url,
                bookmark: _.data.bookmark,
              });
              return (
                _.data.bookmark
                  ? _._.Get().SetBookmarkForApp(_, _.data.bookmark)
                  : _._.Get().InitializeBookmarkForApp(_),
                this.m_mapAppToVOD.set(_, _),
                _
              );
            }
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "CVideoOnDemandStore:LoadVODForAppID: Failed " + _.strErrorMsg,
              _,
            );
          }
          return null;
        }
        static Get() {
          return (
            _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
            _.s_VODStore
          );
        }
        Init() {}
      }
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      __webpack_require__._(module_exports, {
        _: () => _,
        _: () => _,
      });
      var _,
        _,
        _,
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__._(_),
        _ = __webpack_require__("chunkid");
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.video_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  video_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  client_cellid: {
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
          return "CVideo_ClientGetVideoURL_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.video_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  video_id: {
                    _: 1,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  video_url: {
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
          return "CVideo_ClientGetVideoURL_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.encryption_key || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
        }
        static sm_m;
        static sm_mbf;
        static M() {
          return (
            _.sm_m ||
              (_.sm_m = {
                proto: _,
                fields: {
                  encryption_key: {
                    _: 1,
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
          return _.serializeBinaryToWriter(this, _), _.getResultBase64String();
        }
        getClassName() {
          return "CVideo_UnlockedH264_Notification";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  client_cellid: {
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
          return "CFovasVideo_ClientGetOPFSettings_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  opf_settings: {
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
          return "CFovasVideo_ClientGetOPFSettings_Response";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.app_id || _._(_._()),
            _.Message.initialize(this, _, 0, -1, void 0, null);
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
                  playback_position_in_seconds: {
                    _: 2,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  video_track_id: {
                    _: 3,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  audio_track_id: {
                    _: 4,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  timedtext_track_id: {
                    _: 5,
                    _: _._.readUint64String,
                    _: _._.writeUint64String,
                  },
                  last_modified: {
                    _: 6,
                    _: _._.readUint32,
                    _: _._.writeUint32,
                  },
                  hide_from_watch_history: {
                    _: 7,
                    _: !1,
                    _: _._.readBool,
                    _: _._.writeBool,
                  },
                  hide_from_library: {
                    _: 8,
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
          return "VideoBookmark";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.bookmarks || _._(_._()),
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
                  bookmarks: {
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
          return "CVideo_SetVideoBookmark_Notification";
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
                  updated_since: {
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
          return "CVideo_GetVideoBookmarks_Request";
        }
      }
      class _ extends _.Message {
        static ImplementsStaticInterface() {}
        constructor(_ = null) {
          super(),
            _.prototype.bookmarks || _._(_._()),
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
                  bookmarks: {
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
          return "CVideo_GetVideoBookmarks_Response";
        }
      }
      !(function (_) {
        (_.ClientGetVideoURL = function (_, _) {
          return _.SendMsg("Video.ClientGetVideoURL#1", (0, _._)(_, _), _, {
            ePrivilege: 1,
          });
        }),
          (_.SetVideoBookmark = function (_, _) {
            return _.SendNotification(
              "Video.SetVideoBookmark#1",
              (0, _._)(_, _),
              {
                ePrivilege: 1,
              },
            );
          }),
          (_.GetVideoBookmarks = function (_, _) {
            return _.SendMsg("Video.GetVideoBookmarks#1", (0, _._)(_, _), _, {
              ePrivilege: 1,
            });
          });
      })(_ || (_ = {})),
        (function (_) {
          _.NotifyUnlockedH264Handler = {
            name: "VideoClient.NotifyUnlockedH264#1",
            request: _,
          };
        })(_ || (_ = {})),
        (function (_) {
          _.ClientGetOPFSettings = function (_, _) {
            return _.SendMsg(
              "FovasVideo.ClientGetOPFSettings#1",
              (0, _._)(_, _),
              _,
              {
                ePrivilege: 1,
              },
            );
          };
        })(_ || (_ = {}));
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      class _ {
        static s_VODStore;
        m_LoadingOAuth = null;
        m_transport;
        m_mapBookmarks = new Map();
        SetBookmarkForApp(_, _) {
          this.ValidateBookmarkData(_)
            ? this.m_mapBookmarks.set(_, _.fromObject(_))
            : this.InitializeBookmarkForApp(_);
        }
        ValidateBookmarkData(_) {
          const _ = _;
          return (
            "object" == typeof _ &&
            Number.isInteger(_.playback_position_in_seconds) &&
            Number.isInteger(_.app_id)
          );
        }
        InitializeBookmarkForApp(_) {
          if (!this.m_mapBookmarks.has(_)) {
            let _ = {
              app_id: _,
              playback_position_in_seconds: 0,
              video_track_id: "0",
              audio_track_id: "0",
              timedtext_track_id: "0",
              hide_from_watch_history: !1,
              hide_from_library: !1,
            };
            this.m_mapBookmarks.set(_, new _(_));
          }
        }
        GetBookmarkPlayTimeInSeconds(_) {
          if (this.m_mapBookmarks.has(_)) {
            let _ = this.m_mapBookmarks.get(_).playback_position_in_seconds();
            if (Number.isInteger(_)) return _;
          }
          return 0;
        }
        async SendBookMarkedTimeToServer(_, _, _, _, _) {
          if (!_._.logged_in) return;
          if (
            !this.m_transport &&
            (await this.m_LoadingOAuth, !this.m_transport)
          )
            return void console.warn(
              "CVideoBookmarkStore:SetBookMark no auth token / transport",
            );
          const _ = _._.Init(_);
          if (this.m_mapBookmarks.has(_)) {
            let _ = this.m_mapBookmarks.get(_),
              _ = !1;
            _.app_id() != _ && ((_ = !0), _.set_app_id(_)),
              _.playback_position_in_seconds() != _ &&
                ((_ = !0), _.set_playback_position_in_seconds(_)),
              (_ = _ || "0"),
              _.video_track_id() != _ && (_.set_video_track_id(_), (_ = !0)),
              (_ = _ || "0"),
              _.audio_track_id() != _ && (_.set_audio_track_id(_), (_ = !0)),
              (_ = _ || "0") != _.timedtext_track_id() &&
                (_.set_timedtext_track_id(_), (_ = !0)),
              _ &&
                (_.Body().add_bookmarks(_),
                _.SetVideoBookmark(this.m_transport, _));
          }
        }
        static Get() {
          return (
            _.s_VODStore || ((_.s_VODStore = new _()), _.s_VODStore.Init()),
            _.s_VODStore
          );
        }
        Init() {
          _._.logged_in && this.LoadWatchVideoOAuthToken();
        }
        async LoadWatchVideoOAuthToken() {
          const _ =
              "community" == (0, _._)()
                ? _._.COMMUNITY_BASE_URL + "actions/ajaxgetwatchvodtoken"
                : _._.STORE_BASE_URL + "actions/ajaxgetwatchvodtoken",
            _ = {};
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
            });
            if (
              _ &&
              200 == _.status &&
              _.data &&
              1 == _.data.success &&
              _.data.webapi_token
            )
              return (
                (this.m_transport = new _._(
                  _._.WEBAPI_BASE_URL,
                  _.data.webapi_token,
                ).GetServiceTransport()),
                this.m_transport
              );
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "CVideoBookmarkStore:LoadWatchVideoOAuthToken: Failed " +
                _.strErrorMsg,
              _,
            );
          }
          return null;
        }
      }
      class _ {
        m_appid;
        constructor(_) {
          this.m_appid = _;
        }
        async SetBookmark(_, _, _, _) {
          _._.logged_in &&
            _.Get().SendBookMarkedTimeToServer(
              this.m_appid,
              Math.floor(_),
              _,
              _,
              _,
            );
        }
        GetBeginPlaytime() {
          return _._.logged_in
            ? _.Get().GetBookmarkPlayTimeInSeconds(this.m_appid)
            : 0;
        }
      }
    },
  },
]);
