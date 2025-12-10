(self.webpackChunkcommunity = self.webpackChunkcommunity || []).push([
  [2079],
  {
    chunkid: (module) => {
      module.exports = {
        SubSection: "_3Ac4zk8HfCBpJcfDHwJwfg",
        Header: "_2vrXB5mprkP7EUv5iR8us3",
        AppSummaryWidgetCtn: "_35ozIX3OQwwAVHZP2bRufO",
      };
    },
    chunkid: (module) => {
      module.exports = {
        BroadcastPage: "_3IVNUsV5MmxvVS3iAXgvah",
        ChatAndVideoContainer: "_3T2XhjHO-dGHFcW8wuOjPy",
        PlayerContainer: "_1YtbIC-J77gSgwSKsT5fi6",
        ControlCtn: "_3NMuAFkwI2iBEQ0Xc65_vU",
        ControlsTitle: "_2gpZbx7qR5ehVb4ZyjSePO",
        TitleInput: "_2hXPK8xeIJv-TaWiO-axvZ",
        Options: "_1zp3YgxRk_19JEyx47Y3i0",
        StopCtn: "_3swF91W-Cz8khVEz54YOq_",
        GameInfoCtn: "_4stlZwCqqseNCH-QLOQER",
        GameInfo: "_3LaZv8YHg2VjZ_HhcZ7bpk",
        GameAboutTitleCtn: "_3CMlOE34UtaORvJyHk5EGa",
        GameAboutTitle: "_2RJzuglNdpYTXg51KXQnOn",
        RelatedEvents: "_2RjLr7PFg6CZiul6cV6z_I",
        DebugCtn: "FKW0z5NevNCuD5xXlFgY5",
      };
    },
    chunkid: (module) => {
      module.exports = {
        ProfileCtn: "_qonROBlfDEqgHmEnTXf3",
        GameAndOptionsCtn: "Qo4I3mYF0bFBK2epQsXG2",
        GameAndViewersCtn: "XQo2J9u8ebB9kBJWDwPNW",
        BroadcastTitleCtn: "_1R6Q5E3iChq6o6-dvC9wVB",
        StreamDetailsCtn: "_11FAt4TX08YfslIrMg2DVM",
        ViewerCount: "_2skQ1ea4HbEWoM-0eRZQJ2",
        BroadcastUserActionsCtn: "_1MeMBOgHJbg6D0H83lpxWS",
        GameCapsule: "_1oJMxM2S4G0iIY4g7hHqVh",
      };
    },
    chunkid: (module) => {
      module.exports = {
        AdminControls: "_3KL0bXxikaWzpb1AY27eH0",
      };
    },
    chunkid: (module) => {
      module.exports = {
        AvatarCtn: "_3n3n08bcnphB_5qaSwJDyQ",
        NameAndProps: "_3PljhCwFW7qZ0qu22k7frk",
      };
    },
    chunkid: (module, module_exports, __webpack_require__) => {
      "use strict";
      __webpack_require__._(module_exports),
        __webpack_require__._(module_exports, {
          default: () => _,
        });
      __webpack_require__("chunkid");
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
        _ = __webpack_require__("chunkid");
      class _ {
        constructor() {
          (this.m_bShowOnlyVideo = !1),
            (this.m_bShowOnlyChat = !1),
            (this.m_curDebugInfo = null),
            (0, _._)(this);
        }
        GetBroadcasterSteamID() {
          return this.m_steamid;
        }
        GetDebugInfo() {
          return this.m_curDebugInfo;
        }
        BShowOnlyVideo() {
          return this.m_bShowOnlyVideo;
        }
        BShowOnlyChat() {
          return this.m_bShowOnlyChat;
        }
        BShowInIframe() {
          return this.m_bShowOnlyChat || this.m_bShowOnlyVideo;
        }
        async LoadBroadcastDebugInfo(_) {
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/broadcastdebuginfo",
            _ = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              origin: self.origin,
            };
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return null;
            if (_ && 200 == _.status && _.data && 1 == _.data.success)
              return (this.m_curDebugInfo = _.data), this.m_curDebugInfo;
          } catch (_) {
            let _ = (0, _._)(_);
            console.error("LoadBroadcastDebugInfo: Failed " + _.strErrorMsg, _);
          }
          return null;
        }
        async UpdateBroadcastSettings(_, _, _) {
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/updatebroadcastsettings",
            _ = {
              steamid: this.m_steamid.ConvertTo64BitString(),
              matchid: _,
              title: _,
              sessionid: _._.SESSIONID,
            };
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return !1;
            if (_ && 200 == _.status && _.data && 1 == _.data.success) {
              const _ = _._.GetOrCreateBroadcastInfo(
                this.m_steamid.ConvertTo64BitString(),
              );
              return (
                _ &&
                  (0, _._)(() => {
                    _.m_strTitle = _;
                  }),
                !0
              );
            }
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              "UpdateBroadcastSettings: Failed " + _.strErrorMsg,
              _,
            );
          }
          return !1;
        }
        async StopBroadcast(_) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/stopbroadcast",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "StopBroadcast",
            _,
            _,
            _,
          );
        }
        async SetBroadcasterRestrictions(_, _, _) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/setbroadcastrestriction",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              type: _,
              days: _,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetBroadcasterRestrictions",
            _,
            _,
            _,
          );
        }
        async SetUnBannable(_) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/unban",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SetUnBannable",
            _,
            _,
            _,
          );
        }
        async SendUserReportOnBroadcast(_) {
          const _ = this.m_steamid.ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          let _ = _._.COMMUNITY_BASE_URL + "broadcast/report",
            _ = {
              steamid: _,
              broadcastid: _ ? _.m_ulBroadcastID : null,
              description: _,
              sessionid: _._.SESSIONID,
            };
          return await this.InternalSendSimpleGetRequest(
            "SendUserReportOnBroadcast",
            _,
            _,
            null,
          );
        }
        async InternalSendSimpleGetRequest(_, _, _, _) {
          try {
            let _ = await _().get(_, {
              params: _,
              withCredentials: !0,
              cancelToken: _ ? _.token : void 0,
            });
            if (_ && _.token.reason) return !1;
            if (_ && 200 == _.status && _.data && 1 == _.data.success)
              return !0;
          } catch (_) {
            let _ = (0, _._)(_);
            console.error(
              `CCommunityBroadcastStore:${_}: Failed ` + _.strErrorMsg,
              _,
            );
          }
          return !1;
        }
        static Get() {
          return (
            _.s_Singleton || ((_.s_Singleton = new _()), _.s_Singleton.Init()),
            _.s_Singleton
          );
        }
        Init() {
          let _ = (0, _._)("broadcastsinfo", "application_config");
          this.ValidateStoreDefault(_) &&
            ((this.m_steamid = new _._(_.steamid)),
            (this.m_bShowOnlyChat = Boolean(_.show_only_chat)),
            (this.m_bShowOnlyVideo = Boolean(_.show_only_video)));
        }
        ValidateStoreDefault(_) {
          return !(!_ || "object" != typeof _) && "string" == typeof _.steamid;
        }
      }
      (0, _._)([_._], _.prototype, "m_curDebugInfo", void 0);
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
      const _ = (_) => {
          const _ = (0, _.useRef)(null),
            [__webpack_require__, _] = (0, _.useState)(null);
          return (
            (0, _.useEffect)(
              () => () => {
                _.current && _.current("BroadcastDebugSection: unmounting");
              },
              [],
            ),
            _.createElement(
              _._,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(_.Container),
                },
                _.createElement(
                  "div",
                  {
                    className: _.Controls,
                  },
                  _.createElement(
                    _._,
                    {
                      onClick: async () => {
                        _.current && _.current();
                        const _ = _().CancelToken.source();
                        (_.current = _.cancel),
                          _(await _.Get().LoadBroadcastDebugInfo(_));
                      },
                    },
                    "(VO) Load Debug Info",
                  ),
                ),
                _.createElement(
                  _._,
                  null,
                  _.createElement(_, {
                    info: __webpack_require__,
                  }),
                ),
              ),
            )
          );
        },
        _ = (_) => {
          var _;
          const { info: __webpack_require__ } = _,
            [_, _] = (0, _.useState)(!1);
          if (!__webpack_require__) return null;
          const _ = _.Get().GetBroadcasterSteamID().ConvertTo64BitString(),
            _ = _._.GetBroadcast(_);
          return _.createElement(
            "div",
            {
              className: _.DisplaySection,
            },
            Boolean(
              __webpack_require__.last_error_result &&
                1 != __webpack_require__.last_error_result,
            ) &&
              _.createElement(
                "div",
                {
                  className: _.SubSection,
                },
                _.createElement(
                  "div",
                  {
                    className: _.Header,
                  },
                  "Error",
                ),
                _.createElement(
                  "div",
                  null,
                  "EResult: ",
                  __webpack_require__.last_error_result,
                  ", occurred ",
                  __webpack_require__.last_error_time,
                  " - ",
                  _.createElement(_._, {
                    dateAndTime: __webpack_require__.last_error_time,
                    bSingleLine: !0,
                  }),
                ),
              ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "Broadcast Setup",
              ),
              _.createElement(
                "div",
                null,
                "Broadcaster: ",
                __webpack_require__.steam_id,
                ", SteamID: ",
                _,
              ),
              _.createElement(
                "div",
                null,
                "Directory Server: ",
                __webpack_require__.directory_server,
                ", SessionID: ",
                __webpack_require__.broadcast_id,
              ),
              _.createElement(
                "div",
                null,
                "Ingester Server: ",
                __webpack_require__.relay_server,
                ", UploadID: ",
                __webpack_require__.upload_id,
              ),
              _.createElement(
                "div",
                null,
                "Origin Server: ",
                __webpack_require__.origin_server,
              ),
              _.createElement(
                "div",
                null,
                "Chat Server: ",
                __webpack_require__.chat_server,
                ", chat_id: ",
                __webpack_require__.chat_id,
              ),
              _.createElement(
                "div",
                null,
                "Transcoder Server : ",
                __webpack_require__.transcode_server,
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "Ingester Info",
              ),
              _.createElement(
                "div",
                null,
                "Client: ",
                __webpack_require__.remote_address,
                " ",
                Boolean(__webpack_require__.is_rtmp)
                  ? "(RTMP)"
                  : "(STEAM CLIENT)",
              ),
              _.createElement(
                "div",
                null,
                "Video Config: ",
                __webpack_require__.upload_height,
                "x",
                __webpack_require__.upload_width,
                "@",
                __webpack_require__.upload_fps,
                ", ",
                __webpack_require__.upload_bandwidth,
                " kbps ",
              ),
              _.createElement(
                "div",
                null,
                "Audio Config: ",
                __webpack_require__.upload_audio_channels,
                "x",
                __webpack_require__.upload_audio_samplerate,
                "Hz, ",
                __webpack_require__.upload_audio_bitrate / 1e3,
                " kbps ",
              ),
              _.createElement(
                "div",
                null,
                "Upload Stats: ",
                __webpack_require__.upload_avg_fps,
                " FPS, ",
                __webpack_require__.upload_avg_bandwidth,
                " kbps, ",
                __webpack_require__.upload_avg_key_interval,
                " msec key frame interval",
              ),
              _.createElement(
                "div",
                null,
                "Upload Totals: ",
                __webpack_require__.upload_total_frames_received,
                " video frames,  ",
                Math.round(
                  (__webpack_require__.upload_current_video_pts -
                    __webpack_require__.upload_first_video_pts) /
                    __webpack_require__.upload_video_timescale,
                ),
                " seconds ( ",
                (0, _._)(
                  __webpack_require__.upload_total_bytes_uploaded || 0,
                  1,
                ),
                " ) ",
              ),
            ),
            Boolean(__webpack_require__.transcode_server) &&
              _.createElement(
                "div",
                {
                  className: _.SubSection,
                },
                _.createElement(
                  "div",
                  {
                    className: _.Header,
                  },
                  "Transcoder Info",
                ),
                _.createElement(
                  "div",
                  null,
                  "Decoder ( ",
                  __webpack_require__.upload_height,
                  "x",
                  __webpack_require__.upload_width,
                  "@",
                  __webpack_require__.upload_fps,
                  ", ",
                  __webpack_require__.upload_bandwidth,
                  " kbps ) :  ",
                  __webpack_require__.transcoder_frames_to_decode,
                  " queued,  ",
                  __webpack_require__.transcoder_frames_total_decoded,
                  " decoded",
                ),
                __webpack_require__.transcoder_streams.map((_) =>
                  _.createElement(
                    "div",
                    {
                      key: _.representation_id,
                    },
                    "Encoder ",
                    _.representation_id,
                    " ( ",
                    _.height,
                    "x",
                    _.width,
                    "@",
                    _.fps,
                    " ",
                    _.bitrate,
                    " kbps ) : ",
                    _.frames_to_encode,
                    " queued, ",
                    _.frames_total_encoded,
                    " encoded",
                  ),
                ),
              ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "Origin Info",
              ),
              null ===
                (_ =
                  null == __webpack_require__
                    ? void 0
                    : __webpack_require__.origin_video_streams) || void 0 === _
                ? void 0
                : _.map((_) =>
                    _.createElement(
                      "div",
                      {
                        key: _.representation_id,
                      },
                      "Video Stream ",
                      _.representation_id,
                      " ( ",
                      _.height,
                      "x",
                      _.width,
                      "@",
                      _.fps,
                      " ",
                      _.bitrate,
                      " kbps ) :  ",
                      _.num_frames_queued,
                      " frames queued,  ",
                      _.num_segments_received,
                      " segments received,  ",
                      2 * _.num_segments_cached,
                      " seconds cached ( ",
                      (0, _._)(_.memory_used, 2),
                      " )",
                    ),
                  ),
              "Audio Stream ",
              __webpack_require__.origin_audio_stream.representation_id,
              " ( ",
              __webpack_require__.upload_audio_channels,
              "x",
              __webpack_require__.upload_audio_samplerate,
              "Hz, ",
              __webpack_require__.upload_audio_bitrate / 1e3,
              " kbps ) :  ",
              __webpack_require__.origin_audio_stream.num_frames_queued,
              " frames queued,  ",
              __webpack_require__.origin_audio_stream.num_segments_received,
              " segments received,  ",
              2 * __webpack_require__.origin_audio_stream.num_segments_cached,
              " seconds cached ( ",
              (0, _._)(__webpack_require__.origin_audio_stream.memory_used, 2),
              " )",
            ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "Viewer Info",
              ),
              _.createElement(
                "div",
                null,
                "Viewers: ",
                __webpack_require__.current_viewers,
                " current (",
                __webpack_require__.current_anon_viewers,
                " anonymous), ",
                __webpack_require__.total_unique_viewers,
                " total unique, ",
                __webpack_require__.max_concurrent_viewers,
                " max concurrent",
              ),
              _.createElement(
                "div",
                null,
                "Average time watched: ",
                __webpack_require__.average_watch_duration,
                " seconds",
              ),
              _.createElement(
                "div",
                null,
                "Last Minute: ",
                __webpack_require__.added_viewers_last_minute,
                " watch requests, ",
                __webpack_require__.rejected_viewers_last_minute,
                " rejected",
              ),
              _.createElement(
                "div",
                null,
                "Restrictions: ",
                __webpack_require__.restriction,
              ),
              _.createElement(
                "div",
                null,
                __webpack_require__.extra_viewer_info,
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "Settings",
              ),
              _.createElement(
                "div",
                null,
                "is replay? ",
                __webpack_require__.is_replay,
              ),
              _.createElement(
                "div",
                null,
                "is replay local file? ",
                __webpack_require__.is_replay_local_file,
              ),
              _.createElement(
                "div",
                null,
                "is replay clip? ",
                __webpack_require__.is_replay_clip,
              ),
              _.createElement(
                "div",
                null,
                "is capturing VOD? ",
                __webpack_require__.is_capturing_vod,
              ),
              _.createElement(
                "div",
                null,
                "is white listed for store streaming? ",
                __webpack_require__.is_whitelisted,
              ),
            ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "App Info",
              ),
              _.createElement(
                "div",
                null,
                "appid: ",
                __webpack_require__.app_id,
              ),
              _.createElement(
                "div",
                null,
                "app name: ",
                __webpack_require__.app_name,
              ),
              _.createElement(
                "div",
                null,
                "broadcast title: ",
                __webpack_require__.title,
              ),
              _.createElement(
                "div",
                null,
                "thumbnail: ",
                __webpack_require__.thumbnail_url,
              ),
              Boolean(__webpack_require__.thumbnail_url) &&
                _.createElement("img", {
                  src: __webpack_require__.thumbnail_url,
                }),
              Boolean(
                __webpack_require__.app_id && __webpack_require__.app_id > 0,
              ) &&
                _.createElement(
                  "div",
                  {
                    className: _.AppSummaryWidgetCtn,
                  },
                  _.createElement(_._, {
                    _: __webpack_require__.app_id,
                    type: "game",
                  }),
                ),
            ),
            _.createElement(
              "div",
              {
                className: _.SubSection,
              },
              _.createElement(
                "div",
                {
                  className: _.Header,
                },
                "Manifest Information",
              ),
              _.createElement(
                "div",
                null,
                "Heartbeat Interval: ",
                _.m_data.heartbeat_interval,
              ),
              _.createElement("div", null, "DASH MPEG Url: ", _.m_data.url),
              _.createElement("div", null, "HLS Url: ", _.m_data.hls_url),
            ),
            _.createElement(
              _._,
              {
                onClick: () => _(!_),
              },
              "Toggle Raw Data",
            ),
            Boolean(_) &&
              _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  "div",
                  {
                    className: _.SubSection,
                  },
                  _.createElement(_._, {
                    data: __webpack_require__,
                  }),
                ),
                _.createElement(
                  "div",
                  {
                    className: _.SubSection,
                  },
                  _.createElement(_._, {
                    data: (null == _ ? void 0 : _.m_data) || "",
                  }),
                ),
              ),
          );
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
        const _ = _.steamid.GetAccountID(),
          { data: __webpack_require__ } = (0, _._)(_);
        return _.createElement(
          "div",
          {
            className: _.AvatarCtn,
          },
          _.createElement(
            "a",
            {
              href: __webpack_require__.GetCommunityProfileURL(),
              "data-miniprofile": "s" + _.steamid.ConvertTo64BitString(),
            },
            _.createElement(_._, {
              persona: __webpack_require__,
              size: _.size,
              statusPosition: "bottom",
            }),
          ),
          _.createElement(
            "div",
            {
              className: _.NameAndProps,
            },
            Boolean(_.bShowName) &&
              _.createElement(
                "a",
                {
                  href: __webpack_require__.GetCommunityProfileURL(),
                  "data-miniprofile": "s" + _.steamid.ConvertTo64BitString(),
                },
                __webpack_require__.m_strProfileURL,
              ),
            _.children,
          ),
        );
      };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      function _(_) {
        const { broadcasterSteamID: _ } = _,
          _ = _.ConvertTo64BitString(),
          [_, _] = (0, _._)(() => {
            const _ = _._.GetOrCreateBroadcastInfo(_);
            let _ = _.m_nAppID != _._ ? _.m_nAppID : 0;
            return [_.m_nViewerCount, _];
          }),
          [_] = (0, _._)(_, {
            include_assets: !0,
          });
        let _ = null == _ ? void 0 : _.GetAssets().GetMainCapsuleURL(),
          _ = _ && _.length > 0;
        return _.createElement(
          _._,
          null,
          _.createElement(
            "div",
            {
              className: _.ProfileCtn,
            },
            _ &&
              _.createElement(
                "a",
                {
                  className: _.GameCapsule,
                  href: (0, _._)(
                    (null == _ ? void 0 : _.GetStorePageURL()) ||
                      _._.STORE_BASE_URL + "app/" + _,
                  ),
                },
                _.createElement("img", {
                  src: _,
                }),
              ),
            _.createElement(
              "div",
              {
                className: _.StreamDetailsCtn,
              },
              _.createElement(
                "div",
                {
                  className: _.GameAndOptionsCtn,
                },
                _.createElement(
                  "div",
                  {
                    className: _.GameAndViewersCtn,
                  },
                  _.createElement(_, {
                    broadcasterSteamID: _,
                  }),
                  _.createElement(
                    "div",
                    {
                      className: _.ViewerCount,
                    },
                    (0, _._)("#Broadcast_ViewerCount", _.toLocaleString()),
                  ),
                ),
                _.createElement(_, {
                  broadcasterSteamID: _,
                }),
              ),
              _.createElement(_, {
                steamid: _,
                size: "Medium",
                bShowName: !0,
              }),
            ),
          ),
        );
      }
      const _ = (0, _._)((_) => {
          const { broadcasterSteamID: _ } = _,
            _ = _.ConvertTo64BitString(),
            [_, _] = (0, _._)(() => {
              const _ = _._.GetOrCreateBroadcastInfo(_);
              let _ = _.m_nAppID != _._ ? _.m_nAppID : 0;
              return [_.m_strAppTitle, _];
            }),
            [_] = (0, _._)(_, {
              include_assets: !0,
            });
          return _.createElement(
            "div",
            {
              className: _.BroadcastTitleCtn,
            },
            (0, _._)("#Broadcast_Playing"),
            _.createElement(
              "a",
              {
                href: (0, _._)(
                  (null == _ ? void 0 : _.GetStorePageURL()) ||
                    _._.STORE_BASE_URL + "app/" + _,
                ),
              },
              Boolean(_) ? _ : null == _ ? void 0 : _.GetName(),
            ),
            Boolean((null == _ ? void 0 : _.length) > 0) &&
              _.createElement("span", null, " - ", _),
          );
        }),
        _ = (0, _._)((_) => {
          const { broadcasterSteamID: _ } = _;
          _.ConvertTo64BitString();
          return _.createElement(
            "div",
            {
              className: _.BroadcastUserActionsCtn,
            },
            Boolean(
              _._.steamid != _.broadcasterSteamID.ConvertTo64BitString(),
            ) &&
              _.createElement(
                _._,
                {
                  onClick: (_) => {
                    _._.logged_in
                      ? (0, _._)(
                          _.createElement(_, {
                            broadcasterSteamID: _,
                          }),
                          (0, _._)(_),
                        )
                      : (0, _._)(
                          _.createElement(_._, {
                            strTitle: (0, _._)(
                              "#EventDisplay_Share_NotLoggedIn",
                            ),
                            strDescription: (0, _._)(
                              "#EventDisplay_Share_NotLoggedIn_Description",
                            ),
                            strOKButtonText: (0, _._)("#MobileLogin_SignIn"),
                            onOK: () => (0, _._)(),
                          }),
                          (0, _._)(_),
                        );
                  },
                },
                _.createElement(
                  _._,
                  {
                    toolTipContent: (0, _._)("#Broadcast_User_Report_ttip"),
                  },
                  _.createElement(_.lNU, null),
                ),
              ),
            _.createElement(
              _._,
              {
                onClick: (_) =>
                  (0, _._)(
                    _,
                    "https://help.steampowered.com/faqs/view/548F-BC55-89EB-1BC8",
                  ),
              },
              _.createElement(
                _._,
                {
                  toolTipContent: (0, _._)("#Broadcast_User_FAQ_ttip"),
                },
                _.createElement(_.$$j, null),
              ),
            ),
          );
        }),
        _ = (_) => {
          const [_, __webpack_require__] = (0, _.useState)("");
          return _.createElement(
            _._,
            {
              strTitle: (0, _._)("#Broadcast_ReportItem_Title"),
              strDescription: (0, _._)("#Broadcast_ReportItem_Description"),
              onCancel: _.closeModal,
              bOKDisabled: 0 == _.trim().length,
              onOK: async () => {
                await _.Get().SendUserReportOnBroadcast(_),
                  _.closeModal && _.closeModal();
              },
            },
            _.createElement("textarea", {
              value: _,
              onChange: (_) => __webpack_require__(_.currentTarget.value),
              rows: 10,
              cols: 80,
            }),
          );
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (_) => {
          if (!_._.is_support) return null;
          const _ = (_, _) => {
              (0, _._)(
                _.createElement(_, {
                  broadcastSteamID: _.broadcastSteamID,
                  strAction: _,
                }),
                (0, _._)(_),
              );
            },
            _ =
              "https://steamsupport.valvesoftware.com/account/overview/" +
              _.broadcastSteamID.ConvertTo64BitString();
          return _.createElement(
            "div",
            {
              className: (0, _._)(_.AdminControls, _().ValveOnlyBackground),
            },
            _.createElement("div", null, "(VO) Support Tools"),
            _.createElement(
              _._,
              {
                onClick: (_) => _(_, "frontpage"),
              },
              "Remove from Front Page",
            ),
            _.createElement(
              _._,
              {
                onClick: (_) => _(_, "ban"),
              },
              "Ban from Broadcasting",
            ),
            _.createElement(
              _._,
              {
                onClick: (_) => {
                  (0, _._)(
                    _.createElement(_, {
                      steamid: _.broadcastSteamID,
                    }),
                    (0, _._)(_),
                  );
                },
              },
              "Make Unbannable",
            ),
            _.createElement(
              _._,
              {
                onClick: (_) => (0, _._)(_, _),
              },
              "Go to Support Page",
            ),
          );
        },
        _ = (0, _._)((_) => {
          const { broadcastSteamID: _, strAction: __webpack_require__ } = _,
            [_, _] = (0, _.useState)(1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            () => () => {
              _.current && _.current("BroadcastConfirmBanAction: unmounting");
            },
            [],
          );
          const _ = () => _.closeModal && _.closeModal();
          return _.createElement(
            _._,
            null,
            _.createElement(
              _._,
              {
                onEscKeypress: _,
              },
              _.createElement(
                _._,
                null,
                _.createElement(
                  _._,
                  null,
                  "frontpage" == __webpack_require__
                    ? "Remove Broadcast From Front Page"
                    : "Ban from Broadcasting",
                ),
                _.createElement(
                  _._,
                  null,
                  _.createElement(
                    _._,
                    null,
                    _.createElement(
                      "p",
                      null,
                      "frontpage" == __webpack_require__
                        ? "How long should we prevent the broadcast from appearing in community or store?"
                        : "How long should we prevent the user from Broadcast at all on Steam?",
                    ),
                    _.createElement(
                      "div",
                      null,
                      _.createElement(_._, {
                        rgOptions: [
                          {
                            label: "1 Day",
                            data: 1,
                          },
                          {
                            label: "1 Week",
                            data: 7,
                          },
                          {
                            label: "1 Month",
                            data: 30,
                          },
                          {
                            label: "6 Months",
                            data: 180,
                          },
                          {
                            label: "1 Year",
                            data: 365,
                          },
                        ],
                        selectedOption: _,
                        onChange: (_) => _(_.data),
                      }),
                      Boolean(_) && _.createElement(_._, null),
                      Boolean(_) &&
                        _.createElement(
                          "div",
                          null,
                          _
                            ? "Successfully Completed Request"
                            : "Failed to complete request, check browser console and/or try again later",
                        ),
                    ),
                  ),
                ),
                _.createElement(
                  _._,
                  null,
                  _
                    ? _.createElement(
                        _._,
                        {
                          onClick: _,
                        },
                        (0, _._)("#Button_Dismiss"),
                      )
                    : _.createElement(
                        _._,
                        null,
                        _.createElement(
                          _._,
                          {
                            onClick: _,
                          },
                          (0, _._)("#Button_Cancel"),
                        ),
                        _.createElement(
                          _._,
                          {
                            onClick: async () => {
                              _(!0);
                              try {
                                _.current && _.current();
                                const _ = _().CancelToken.source();
                                _.current = _.cancel;
                                let _ =
                                  await _.Get().SetBroadcasterRestrictions(
                                    __webpack_require__,
                                    _,
                                    _,
                                  );
                                _.token.reason || (_ = !0);
                              } finally {
                                _(!1), _(!0), _(false);
                              }
                            },
                          },
                          (0, _._)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        }),
        _ = (_) => {
          const [_, __webpack_require__] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            [_, _] = (0, _.useState)(!1),
            _ = (0, _.useRef)(null);
          (0, _.useEffect)(
            () => () => {
              _.current && _.current("BroadcastMakeUnbannable: unmounting");
            },
            [],
          );
          const _ = () => _.closeModal && _.closeModal();
          return _.createElement(
            _._,
            null,
            _.createElement(
              _._,
              {
                onEscKeypress: _,
              },
              _.createElement(
                _._,
                null,
                _.createElement(_._, null, "Make Broadcast Unbannable"),
                _.createElement(
                  _._,
                  null,
                  _.createElement(
                    _._,
                    null,
                    _.createElement(
                      "p",
                      null,
                      "Prevent automatic, report based banning changes to this strema visibility the stream for 1 week?",
                    ),
                    _.createElement(
                      "div",
                      null,
                      Boolean(_) && _.createElement(_._, null),
                      Boolean(_) &&
                        _.createElement(
                          "div",
                          null,
                          _
                            ? "Successfully Set Unbannable"
                            : "Failed to make Unbannable",
                        ),
                    ),
                  ),
                ),
                _.createElement(
                  _._,
                  null,
                  _
                    ? _.createElement(
                        _._,
                        {
                          onClick: _,
                        },
                        (0, _._)("#Button_Dismiss"),
                      )
                    : _.createElement(
                        _._,
                        null,
                        _.createElement(
                          _._,
                          {
                            onClick: _,
                          },
                          (0, _._)("#Button_Cancel"),
                        ),
                        _.createElement(
                          _._,
                          {
                            onClick: async () => {
                              __webpack_require__(!0);
                              let _ = !1;
                              try {
                                _.current && _.current();
                                const _ = _().CancelToken.source();
                                (_.current = _.cancel),
                                  (_ = await _.Get().SetUnBannable(_));
                              } finally {
                                __webpack_require__(!1), _(!0), _(_);
                              }
                            },
                          },
                          (0, _._)("#Button_Confirm"),
                        ),
                      ),
                ),
              ),
            ),
          );
        };
      var _ = __webpack_require__("chunkid"),
        _ = __webpack_require__("chunkid");
      const _ = (0, _._)((_) => {
        const _ = _.Get().GetBroadcasterSteamID(),
          _ = null == _ ? void 0 : _.ConvertTo64BitString(),
          _ = (function () {
            const [_] = (0, _.useState)(
              () => (0, _._)("ewatchlocation", "application_config") || 5,
            );
            return _;
          })(),
          [_, _] = (0, _._)("muted", !0),
          _ = _._.GetBroadcast(_),
          _ = _._.GetOrCreateBroadcastInfo(_);
        return _
          ? _.createElement(
              _.Fragment,
              null,
              _.createElement(
                "div",
                {
                  className: (0, _._)(_.BroadcastPage),
                },
                _.createElement(
                  "div",
                  {
                    className: (0, _._)(_().BroadcastAndChat),
                  },
                  Boolean(!_.Get().BShowOnlyChat()) &&
                    _.createElement(
                      _._,
                      null,
                      _.createElement(
                        "div",
                        {
                          className: (0, _._)(_().wrapper),
                        },
                        _.createElement(
                          "div",
                          {
                            className: (0, _._)({
                              [_().video_placeholder]: !0,
                              video_placeholder_trgt: !0,
                              [_().NoChat]: _.Get().BShowOnlyVideo(),
                            }),
                          },
                          _.createElement(
                            "div",
                            {
                              className: _().BroadcastPlayerContainer,
                            },
                            _.createElement(
                              _._,
                              null,
                              _.createElement(_.default, {
                                steamIDBroadcast: _,
                                watchLocation: _,
                                bStartMuted: _,
                              }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  Boolean(!_.Get().BShowOnlyVideo()) &&
                    _.createElement(
                      "div",
                      {
                        className: _().detail_chat_ctn,
                      },
                      _.createElement(
                        "div",
                        {
                          className: _().ChatContainer,
                        },
                        _.createElement(
                          _._,
                          null,
                          _.createElement(_._, {
                            emoticonStore: _._,
                            watchLocation: 6,
                            steamID: _,
                            broadcastID: _ ? _.m_ulBroadcastID : void 0,
                          }),
                        ),
                      ),
                    ),
                ),
                Boolean(!_.Get().BShowInIframe()) &&
                  _.createElement(_, {
                    broadcasterSteamID: _,
                    broadcastInfo: _,
                  }),
              ),
            )
          : null;
      });
      function _(_) {
        return 0 != _ && _ != _._;
      }
      const _ = (0, _._)((_) => {
          const { broadcasterSteamID: _, broadcastInfo: __webpack_require__ } =
              _,
            [_, _] = (0, _.useState)(null);
          let _ = __webpack_require__.m_nAppID;
          return (
            (0, _.useEffect)(() => {
              _(_) &&
                (async () => {
                  let _ = await _._.LoadOGGClanInfoForAppID(_);
                  _(_);
                })();
            }, [_]),
            _.createElement(
              _.Fragment,
              null,
              _.createElement(_, {
                broadcasterSteamID: _,
              }),
              _.createElement(_, {
                steamid: _,
              }),
              Boolean(_._.is_support) &&
                _.createElement(
                  "div",
                  null,
                  _.createElement(_, {
                    broadcastSteamID: _,
                  }),
                  _.createElement(
                    "div",
                    {
                      className: (0, _._)(_().ValveOnlyBackground, _.DebugCtn),
                    },
                    _.createElement(_, null),
                  ),
                ),
              _(_) &&
                _.createElement(
                  "div",
                  {
                    className: _.GameInfoCtn,
                  },
                  _.createElement(
                    "div",
                    {
                      className: _.GameAboutTitleCtn,
                    },
                    _.createElement(
                      "div",
                      {
                        className: _.GameAboutTitle,
                      },
                      " ",
                      (0, _._)("#Broadcast_About_Game"),
                      " ",
                    ),
                    _.createElement(
                      "div",
                      {
                        className: _().EventSectionSpacer,
                      },
                      " ",
                    ),
                  ),
                  _.createElement(
                    "div",
                    {
                      className: _.GameInfo,
                    },
                    _.createElement(_._, {
                      _: Number.parseInt(__webpack_require__.m_strAppId),
                      type: "game",
                    }),
                  ),
                ),
              Boolean(_) &&
                _.createElement(
                  "div",
                  {
                    className: _.RelatedEvents,
                  },
                  _.createElement(_._, {
                    clanAccountID: _.clanAccountID,
                    trackingLocation: 6,
                    partnerEventStore: _._,
                    bViewAllShowInfiniteScroll: !0,
                  }),
                ),
            )
          );
        }),
        _ = (0, _._)((_) => {
          const _ = (0, _.useRef)(null);
          let _ = _._.GetOrCreateBroadcastInfo(
            _.steamid.ConvertTo64BitString(),
          );
          const [_, _] = (0, _.useState)(_.m_strTitle),
            [_, _] = (0, _.useState)(""),
            [_, _] = (0, _.useState)(null);
          if (
            ((0, _.useEffect)(
              () => (
                _(_.m_strTitle),
                () => {
                  _.current && _.current("BroadcastControls: unmounting");
                }
              ),
              [_.m_strTitle],
            ),
            _._.accountid != _.steamid.GetAccountID())
          )
            return null;
          return _.createElement(
            "div",
            {
              className: _.ControlCtn,
            },
            _.createElement(
              "div",
              {
                className: _.ControlsTitle,
              },
              (0, _._)("#Broadcaster_Control_title"),
            ),
            _.createElement(
              "div",
              {
                className: _.TitleInput,
              },
              _.createElement(
                "div",
                {
                  className: _.Options,
                },
                _.createElement(_._, {
                  type: "text",
                  label: (0, _._)("#Broadcast_title_title"),
                  onChange: (_) => _(_.currentTarget.value || ""),
                  placeholder: (0, _._)("#Broadcast_title_placeholder"),
                  value: _,
                }),
                _.createElement(_._, {
                  type: "text",
                  label: (0, _._)("#Broadcast_Control_matchid"),
                  onChange: (_) => _(_.currentTarget.value || ""),
                  value: _,
                }),
                _.createElement(
                  _._,
                  {
                    onClick: async () => {
                      _.current && _.current();
                      const _ = _().CancelToken.source();
                      _.current = _.cancel;
                      let _ = await _.Get().UpdateBroadcastSettings(_, _, _);
                      _.token.reason ||
                        _(
                          (0, _._)(
                            _
                              ? "#Broadcast_Control_Success"
                              : "#Broadcast_Control_Failure",
                          ),
                        );
                    },
                  },
                  (0, _._)("#Broadcast_save_changes"),
                  _.createElement(_._, {
                    tooltip: (0, _._)("#Broadcast_save_title_ttip"),
                  }),
                ),
              ),
              _.createElement(
                "div",
                {
                  className: _.StopCtn,
                },
                _.createElement(
                  _._,
                  {
                    onClick: (_) => {
                      (0, _._)(
                        _.createElement(_._, {
                          strTitle: (0, _._)(
                            "#Broadcast_Control_StopBroadcast",
                          ),
                          strDescription: (0, _._)(
                            "#EventEditor_GenericAreYouSure",
                          ),
                          onOK: async () => {
                            _.current && _.current();
                            const _ = _().CancelToken.source();
                            _.current = _.cancel;
                            let _ = await _.Get().StopBroadcast(_);
                            _.token.reason ||
                              _(
                                (0, _._)(
                                  _
                                    ? "#Broadcast_Control_StopSuccess"
                                    : "#Broadcast_Control_StopFailure",
                                ),
                              );
                          },
                        }),
                        (0, _._)(_),
                      );
                    },
                  },
                  (0, _._)("#Broadcast_Control_StopBroadcast"),
                ),
                Boolean(_) && _.createElement("div", null, _),
              ),
            ),
          );
        });
      var _ = __webpack_require__("chunkid");
      let _ = {
        BroadcastWatch: (_) => `/broadcast/(watch|watchnew)/${_}`,
      };
      function _(_) {
        const [_, __webpack_require__] = _.useState(!0);
        return (
          (0, _.useEffect)(() => {
            _ && _._.InitGlobal().then(() => __webpack_require__(!1));
          }, [_]),
          _
            ? _.createElement(_._, {
                string: (0, _._)("#Loading"),
                position: "center",
                size: "medium",
              })
            : _.createElement(
                _.Fragment,
                null,
                _.createElement(
                  _._,
                  null,
                  _.createElement(_._, {
                    path: _.BroadcastWatch(":steamid_or_user_vanity"),
                    render: (_) =>
                      _.createElement(_, {
                        strSteamID: _.match.params.steamid_or_user_vanity,
                      }),
                  }),
                  _.createElement(_._, {
                    component: _._,
                  }),
                ),
              )
        );
      }
    },
  },
]);
